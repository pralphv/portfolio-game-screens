import { useApplication } from "@pixi/react";

export const useFontSize = () => {
  const { app } = useApplication();
  const diagonal = Math.sqrt(app.screen.width ** 2 + app.screen.height ** 2);
  return Math.max(diagonal * 0.06, 30);
};
