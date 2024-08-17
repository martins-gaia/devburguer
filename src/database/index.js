import Sequelize from "sequelize";

import database from "../app/database";

import User from "../app/models/User";

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(database);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
