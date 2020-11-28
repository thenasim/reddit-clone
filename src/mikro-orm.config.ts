import { __prod__ } from "./constants";
import { Post } from "./entities/post";
import { MikroORM } from "@mikro-orm/core";
const path = require("path");

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "reddit",
  type: "postgresql",
  debug: !__prod__,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
} as Parameters<typeof MikroORM.init>[0];
