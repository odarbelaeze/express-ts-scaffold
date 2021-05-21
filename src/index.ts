import { app } from "./app";

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

const shutdown = () => {
  console.log("");
  console.log("⚡️[server]: graceful shutdown");
  server.close(() => {
    console.log("⚡️[server]: closed");
  });
};

process.on("SIGINT", shutdown);
