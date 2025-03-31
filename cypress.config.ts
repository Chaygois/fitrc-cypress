import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://rfitness-front-2ygs.vercel.app/",
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    projectId: "RC-FIT-TESTES",
  },
});
