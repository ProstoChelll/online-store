import { createApp } from "vue";
import { createPinia } from "pinia";
import "./css/index.css";
import "./css/iconsStyle.css";
import router from "./router/router";
import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
