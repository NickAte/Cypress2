const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "c2b7am",
    baseUrl: "http://qamid.tmweb.ru",
    retries: {
      openMode: 0,
    }
  },
  env: {
    viewportWidth: 1680,
    viewportHeight: 1050,
  },
});