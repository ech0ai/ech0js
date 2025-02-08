import { EmbedChainApp } from './ech0';

export const App = async () => {
  const app = new EmbedChainApp();
  await app.initApp;
  return app;
};
