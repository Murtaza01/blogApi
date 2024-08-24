import express from "express";
import schema from "./graphql/schema.ts";
import rootValue from "./graphql/resolver.ts";
import { ruruHTML } from "ruru/server";
import { createHandler } from "graphql-http/lib/use/express";
import cors from "cors";
import mongoose from "mongoose";
import Post from "./database/schema.ts";

const app = express();
const PORT = 4000 || "environmental variable";

app.use(cors());

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue,
  })
);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Birdman:Birdman99@cluster0.lmgfftx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Server Listing to port " + PORT);
  } catch (e) {
    console.log(e);
  }
});
