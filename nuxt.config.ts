const config = {
  /*
   ** Set source directory
   */
  srcDir: "src/",
  /*
   ** Headers of the page
   */
  head: {
    title: "Welcome to Nuxt!",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/manifest.json" }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  buildModules: ['@nuxt/typescript-build'],
  build: {
    postcss: {}
  },
  typescript: {
    typeCheck: true
  }
};

export default config