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
    blog_type: {
      type: DataTypes.STRING
    },
    blog_content: {
      type: DataTypes.STRING
    },
    blog_content_2: {
      type: DataTypes.STRING
    },
    blog_content_3: {
      type: DataTypes.STRING
    },
    blog_content_4: {
      type: DataTypes.STRING
    },
    blog_description: {
      type: DataTypes.STRING
    },
    blog_image: {
      type: DataTypes.CHAR
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
    }
  },
  {
    sequelize,
  }
);

module.exports = Blog;
