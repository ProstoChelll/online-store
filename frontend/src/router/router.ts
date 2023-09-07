import { createWebHistory, createRouter } from "vue-router";
import * as pages from "../pages";

const routes = [
  { path: "/", component: pages.MainPage },
  { path: "/catalog", component: pages.CatalogPage },
  { path: "/catalog/:id", component: pages.ProductPage },
  { path: "/bag", component: pages.BagPage },
  { path: "/favorites", component: pages.FavoritesPage },
  { path: "/contacts", component: pages.ContactPage },
  { path: "/order", component: pages.OrderPage },
  { path: "/registration", component: pages.RegistrationPage },
  { path: "/entrance", component: pages.EntrancePage },
];
const history = createWebHistory();

const router = createRouter({
  history: history,
  routes,
});

export default router;
