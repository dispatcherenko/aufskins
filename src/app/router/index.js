import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

import Links from "@/pages/Links.vue";
import MainPage from "@/pages/main-page/MainPage.vue";
import ErrorPage from "@/pages/error/ErrorPage.vue";
import ProfilePage from "@/pages/profile/ProfilePage.vue";
import ProfileInfo from "@/pages/profile/UI/ProfileInfo/ProfileInfo.vue";
import NotificationsSection from "@/pages/profile/UI/Notifications/NotificationsSection.vue";
import InventorySection from "@/pages/profile/UI/Inventory/InventorySection.vue";
import CatalogPage from "@/pages/catalog/CatalogPage.vue";
import CSCatalog from "@/pages/catalog/UI/CSCatalog.vue";
import DotaCatalog from "@/pages/catalog/UI/DotaCatalog.vue";
import RustCatalog from "@/pages/catalog/UI/RustCatalog.vue";
import TFCatalog from "@/pages/catalog/UI/TFCatalog.vue";
import TextPage from "@/pages/text/TextPage.vue";
import AboutPage from "@/pages/about/AboutPage.vue";
import ItemPage from "@/pages/item/ItemPage.vue";
import UserPage from "@/pages/user/UserPage.vue";

const baseUrl = import.meta.env.BASE_URL;
const history = import.meta.env.SSR
  ? createMemoryHistory(baseUrl)
  : createWebHistory(baseUrl);

const routes = [
  {
    path: "/",
    component: MainPage,
    name: "main",
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    name: "errorpage",
  },
  {
    path: "/profile",
    component: ProfilePage,
    name: "profile",
    children: [
      { path: "", component: ProfileInfo, name: "profile-info" },
      {
        path: "notifications",
        component: NotificationsSection,
        name: "notifications",
      },
      { path: "inventory", component: InventorySection, name: "inventory" },
      { path: "history", component: ProfileInfo, name: "history" },
    ],
  },
  {
    path: "/:login",
    component: UserPage,
    name: "userpage",
    props: true,
  },
  {
    path: "/links",
    component: Links,
    name: "links",
  },
  {
    path: "/catalog",
    component: CatalogPage,
    name: "catalog",
    beforeEnter: (to, from, next) => {
      if (to.path === "/catalog") {
        next("/catalog/cs");
      } else {
        next();
      }
    },
    children: [
      { path: "cs", component: CSCatalog },
      { path: "dota", component: DotaCatalog },
      { path: "rust", component: RustCatalog },
      { path: "tf", component: TFCatalog },
    ],
  },
  {
    path: "/text",
    component: TextPage,
    name: "text",
  },
  {
    path: "/about",
    component: AboutPage,
    name: "about",
  },
  {
    path: "/item/:id",
    component: ItemPage,
    name: "item",
  },
];

const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
