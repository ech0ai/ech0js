const { EmbedChainApp } = require("./ech0/ech0");

async function App() {
  const app = new EmbedChainApp();
  await app.init_app;
  return app;
}

module.exports = { App };
