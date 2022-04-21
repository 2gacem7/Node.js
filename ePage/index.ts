import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

require("./app/routes/user.routes")(app);

const PORT: number = parseInt(process.env.PORT as string, 10);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
