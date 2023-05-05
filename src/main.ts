import { createApp } from "vue";
import "./css/index.css";
import "./css/iconsStyle.css";
import router from "./router/router";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");
