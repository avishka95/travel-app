import express from "express";
import usersRouter from "./routes/users";
import placesRouter from "./routes/places";
import routesRouter from "./routes/routes";
import errorHandler from "./middleware/error-handler";

export function createApp() {
  const app = express();
  app.use(express.json());

  app.use("/users", usersRouter);
  app.use("/places", placesRouter);
  app.use("/routes", routesRouter);
  app.use(errorHandler);

  return app
}
