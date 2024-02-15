import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/StartPage.vue") }],
  },
  {
    path: "/examples",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ExamplesPage.vue") }],
  },
  {
    path: "/grid",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GridPage.vue") }],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AboutPage.vue") }],
  },
  {
    path: "/help",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HelpPage.vue") }],
  },
  {
    path: "/account",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AccountPage.vue") }],
  },
  {
    path: "/qtable",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/QTablePage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
