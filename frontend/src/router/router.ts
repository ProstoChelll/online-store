import { createWebHistory, createRouter } from "vue-router";
import * as pages from "../pages";
import { useUser } from "../store/user";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "main", component: pages.MainPage },
    { path: "/catalog", name: "catalog", component: pages.CatalogPage },
    { path: "/catalog/:id", name: "product", component: pages.ProductPage },
    { path: "/bag", name: "bag", component: pages.BagPage },
    { path: "/favorites", name: "favorites", component: pages.FavoritesPage },
    { path: "/contacts", name: "contacts", component: pages.ContactPage },
    { path: "/order", name: "order", component: pages.OrderPage },
    { path: "/registration", name: "registration", component: pages.RegistrationPage },
    {
      path: "/entrance",
      name: "entrance",
      component: pages.EntrancePage,
      beforeEnter: (to, from, next) => {
        to;
        from;
        const user = useUser();
        if (user.authentication) {
          next({ name: "main" });
        } else {
          next();
        }
      },
    },
  ],
});
