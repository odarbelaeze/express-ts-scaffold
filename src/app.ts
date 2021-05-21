import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send({ message: "Express + TypeScript Server" });
});

app.get("/healtz", (_, res) => {
  res.send("ok");
});

export { app };
