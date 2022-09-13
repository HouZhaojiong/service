import { Service } from "egg";
import Mock from "mockjs";
import posts from "../public/posts.json";
import users from "../public/users.json";
import notifications from "../public/notifications.json";

let allNotifications = [...notifications];

/**
 * Test Service
 */
export default class Test extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  public async posts() {
    return posts;
  }

  public async addPost(options) {
    posts.push({
      ...options,
      id: (posts.length + 1).toString(),
      date: new Date().toISOString(),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    });
    return {
      msg: "新增成功",
    };
  }

  public async editPost(options) {
    const { id, title, content } = options;
    const current = posts.find((post) => post.id === id);
    if (current) {
      current.title = title;
      current.content = content;
    }
    return "修改成功";
  }

  public async post(options) {
    const { id } = options;
    return posts.find((post) => post.id === id);
  }

  public async reaction(options) {
    const { id, reaction } = options;
    const current = posts.find((post) => post.id === id);
    if (current) {
      current.reactions[reaction]++;
    }
    // return "增加成功";
    return current;
  }

  public async users() {
    return users;
  }

  public async notifications(options) {
    const { since } = options;
    if (since) {
      return allNotifications.filter(
        (notification) =>
          new Date(notification.date).getTime() > new Date(since).getTime()
      );
    } else {
      return notifications;
    }
  }
}

setInterval(() => {
  const data = Mock.mock({
    notifications: [
      {
        id: new Date().getTime(),
        date: new Date().toISOString(),
        message: "@title",
        user: () => {
          const users = ["0", "1", "2"];
          return users[Math.floor(Math.random() * users.length)];
        },
      },
    ],
  });
  const notification = data.notifications[0];
  allNotifications = [
    ...allNotifications,
    {
      ...notification,
      id: String(notification.id),
    },
  ];
}, 10000);
