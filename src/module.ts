import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
  addImportsDir,
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
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve("./runtime/plugin"));
    nuxt.options.build.transpile.push("vuetify");
    nuxt.options.css.push("vuetify/styles/main.sass");
    nuxt.options.css.push("vuetify/styles/main.sass");
    nuxt.options.css.push(resolve("./runtime/assets/css/skeleton.css"));
    addImportsDir("vuetify/composables");
    addImportsDir("vuetify");

    if (options.useMdiIcon) {
      nuxt.options.css.push("@mdi/font/css/materialdesignicons.min.css");
    }

    if (options.useCustomComponents) {
      addComponentsDir({
        path: resolve("./runtime/components"),
      });
    }
  },
});
