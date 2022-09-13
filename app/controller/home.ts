import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi("egg");
  }

  public async posts() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.posts();
  }

  public async users() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.users();
  }

  public async notifications() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.notifications(ctx.request.query);
  }

  public async addPost() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.addPost(ctx.request.body);
  }

  public async editPost() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.editPost(ctx.request.body);
  }

  public async post() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.post(ctx.params);
  }

  public async reaction() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.reaction(ctx.request.body);
  }
}
