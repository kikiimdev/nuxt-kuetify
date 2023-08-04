import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  installModule,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  useMdiIcon: boolean;
  useCustomComponents: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-kuetify",
    configKey: "kuetify",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    useMdiIcon: false,
    useCustomComponents: false,
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolve("./runtime/plugin"));
    // nuxt.options.build.transpile.push("vuetify");
    // nuxt.options.css.push("vuetify/styles/main.sass");
    // nuxt.options.css.push(resolve("./runtime/assets/css/skeleton.css"));
    // addImportsDir("vuetify/composables");
    // addImportsDir("vuetify/lib");

    // if (options.useMdiIcon) {
    //   nuxt.options.css.push("@mdi/font/css/materialdesignicons.min.css");
    // }

    nuxt.options.css.push(resolve("./runtime/assets/css/skeleton.css"));

    if (options.useCustomComponents) {
      addComponentsDir({
        path: resolve("./runtime/components"),
      });
    }

    const mainTheme = {
      dark: false,
      colors: {
        primary: "#6750A4",
        "on-primary": "#FFFFFF",
        "primary-container": "#EADDFF",
        "on-primary-container": "#21005D",

        secondary: "#625B71",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#E8DEF8",
        "on-secondary-container": "#1D192B",

        tertiary: "#7D5260",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#FFD8E4",
        "on-tertiary-container": "#31111D",

        error: "#B3251E",
        "on-error": "#FFFFFF",
        "error-container": "#FADEDC",
        "on-error-container": "#410E0B",

        "surface-dim": "#DED8E0",
        surface: "#FDF7FF",
        "surface-bright": "#FDF7FF",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F8F2FA",
        "surface-container": "#F2ECF4",
        "surface-container-high": "#ECE6EE",
        "surface-container-highest": "#E6E0E9",
        "on-surface": "#1C1B1F",
        "on-surface-variant": "#49454F",
        outline: "#79747E",
        "outline-variant": "#CBC4CF",
      },
    };

    await installModule("vuetify-nuxt-module", {
      moduleOptions: {
        /* module specific options */
      },
      vuetifyOptions: {
        theme: {
          defaultTheme: "main",
          themes: {
            main: mainTheme,
          },
        },
        // components: true,
        labComponents: true,
        directives: true,
        icons: {
          defaultSet: "mdi",
          sets: ["mdi"],
        },
        date: {
          adapter: "date-fns", // 'vuetify' | 'date-fns' | 'moment' | 'luxon' | 'dayjs' | 'js-joda' | 'date-fns-jalali' | 'jalaali' | 'hijri' | 'custom'
        },
        defaults: {
          VBtn: {
            class: "text-none",
            variant: "flat",
          },
          VTextField: {
            hideDetails: "auto",
            label: "",
            variant: "outlined",
            density: "compact",
          },
          VTextarea: {
            hideDetails: "auto",
            label: "",
            variant: "outlined",
            density: "compact",
          },
          VCard: {
            elevation: "0",
            rounded: "lg",
          },
        },
      },
    });
  },
});
