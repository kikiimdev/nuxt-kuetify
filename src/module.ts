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

    await installModule("vuetify-nuxt-module", {
      moduleOptions: {
        /* module specific options */
      },
      vuetifyOptions: {
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
      },
    });
  },
});
