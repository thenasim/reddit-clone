import { __prod__ } from "./constants";
import { Options } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { User } from "./entities/user";
const path = require("path");

const config: Options = {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "reddit",
  type: "postgresql",
  debug: !__prod__,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

export default config;
