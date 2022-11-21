const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model { }

Blog.init(
  {
    // Manually define the primary key
    blog_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    blog_content: {
      type: DataTypes.STRING
    },
    blog_description: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
  }
);

module.exports = Blog;
