const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Index.vue"),
        name: "Home"
      },
      {
        path: "/users",
        component: () => import("src/pages/UserPage.vue"),
        name: "Users"
      },
      {
        path: "/chats/:id",
        component: () => import("src/pages/ChatPage.vue"),
        name: "Chats"
      },
      {
        path: "/auth",
        component: () => import("src/pages/AuthPage.vue"),
        name: "Authentication"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
