const express = require("express");

const app = express();

const coursesController = require("./controllers/courses.controller");
const instructorController = require("./controllers/instructor.controller");
const lectureController = require("./controllers/lecture.controller");
const learnController = require("./controllers/learn.controller");
const userController = require("./controllers/user.controller");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/courses", coursesController);
app.use("/instructors", instructorController);
app.use("/lectures", lectureController);
app.use("/learns", learnController);
app.use("/users", userController);

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/course", (req, res) => {
  res.render("corecourse.ejs");
});

app.get("/learn", (req, res) => {
  res.render("learn.ejs");
});

app.get("/pricing", (req, res) => {
  res.render("pricing.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/workshop", (req, res) => {
  res.render("Workshops.ejs");
});

app.get("/account", (req, res) => {
  res.render("account.ejs");
});
app.get("/subscription", (req, res) => {
  res.render("Subscription.ejs");
});
app.get("/payment", (req, res) => {
  res.render("Payment.ejs");
});
app.get("/invoice", (req, res) => {
  res.render("Invoices.ejs");
});
app.get("/teachers", (req, res) => {
  res.render("teachers.ejs");
});
app.get("/lecture", (req, res) => {

  res.render("lecture.ejs");
});

module.exports = app;
