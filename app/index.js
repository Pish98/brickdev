const os = require("os");
const express = require("express");
const Docker = require('dockerode');

const app = express();
const docker = new Docker({ socketPath: "/var/run/docker.sock" });

app.get("/hostname", (req, res) => {
  res.send(os.hostname());
});

app.get("/author", (req, res) => {
  res.send(process.env.AUTHOR);
});

app.get("/id", async (req, res) => {
  const container = docker.getContainer(process.env.HOSTNAME);
  const data = await container.inspect();

  res.send(data.Config.Labels["com.docker.compose.container-number"]);
});

app.listen(process.env.PORT || 8000, () => console.log(`Server listen ${process.env.PORT || 8000} port`));
