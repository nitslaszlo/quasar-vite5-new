import { boot } from "quasar/wrappers";
import vue3GoogleLogin from "vue3-google-login";

export default boot(({ app }) => {
  app.use(vue3GoogleLogin, {
    clientId: process.env.VITE_VUE_APP_CLIENT_ID,
  });
});
