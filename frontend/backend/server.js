const app = require("./app");
app.use((req, res, next) => {
  console.log("GLOBAL HIT:", req.method, req.url);
  next();
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});