const { lighthouse, prepareAudit } = require("@jamesseymour/lighthouse");
const { pa11y } = require("@jamesseymour/pa11y");

module.exports = {
  lighthouse: {
    options: {
      formFactor: "desktop",
      screenEmulation: {
        width: 500,
        height: 940,
        deviceScaleRatio: 1,
        mobile: false,
        disable: false,
      },
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });
    },
  },
};
