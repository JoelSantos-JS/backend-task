const app = require("./app");

const dotenv = require("dotenv");

dotenv.config();

app.listen(process.env.PORT || 5000, () =>
  console.log(`rodando ${process.env.PORT}`)
);
