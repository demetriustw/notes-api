const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const noteRouter = require("./routers/note");

const app = express();
const port = 3443;

app.use(express.json());
app.use(userRouter);
app.use(noteRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
