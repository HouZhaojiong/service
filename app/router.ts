import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/", controller.home.index);
  router.get("/redux_toolkit/post", controller.home.posts);
  router.get("/redux_toolkit/user", controller.home.users);
  router.get("/redux_toolkit/notifications", controller.home.notifications);
  router.post("/redux_toolkit/add_post", controller.home.addPost);
  router.get("/redux_toolkit/post/:id", controller.home.post);
  router.post("/redux_toolkit/edit_post", controller.home.editPost);
  router.post("/redux_toolkit/reaction", controller.home.reaction);
};
