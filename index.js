const express = require("express");

require("./services/mongo");
require("./models/user");
require("./services/passport");

const keys = require("./config/key");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 10000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
