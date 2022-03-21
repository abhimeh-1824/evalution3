const express = require("express");
const UserData = require("./controler/usercontrol");
const BookData = require("./controler/book.controler");
const CommentData = require("./controler/commentcontroler");


const app = express()

app.use(express.json())
app.use("user",UserData);
app.use("book",BookData);
app.use("comment",CommentData);



module.exports = app;