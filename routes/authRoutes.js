const passport = require("passport");

module.exports = app => {
  app.get("/", function(req, res) {
    res.send("homepage 2");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send("you are logout");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.session);
  });
};
