export default defineNuxtConfig({
  modules: ["../src/module"],
  kuetify: {
    useMdiIcon: true,
    useCustomComponents: true,
  },
  devtools: { enabled: true },
});
