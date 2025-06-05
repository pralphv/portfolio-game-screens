import { extend, useApplication } from "@pixi/react";
import { useState, useEffect } from "react";
import { Graphics, Sprite, Texture, Container, TextStyle, Text } from "pixi.js";
import { GlitchFilter } from "pixi-filters";
extend({ Graphics, Sprite, Texture, Text, Container });

const GLITCH_DURATION = 100;
const MIN_INTERVAL = 0;
const MAX_INTERVAL = 1500;
const TEXT_STYLE = new TextStyle({
  fill: 0xffffff,
  fontSize: 80,
  fontFamily: "Exo 2, serif",
});
const SEQUENCE = ["inverted", "ySplit", "xDisplace", "analyph"];

const Analyph = ({
  x,
  y,
  onComplete,
  text,
}: {
  x: number;
  y: number;
  onComplete: () => void;
  text: string;
}) => {
  const [xOffset, setXOffset] = useState(10);
  useEffect(() => {
    async function transition() {
      await new Promise((r) => setTimeout(r, 100));
      setXOffset(-5);
      await new Promise((r) => setTimeout(r, 50));
      setXOffset(3);
      await new Promise((r) => setTimeout(r, 50));
      setXOffset(-1);
      await new Promise((r) => setTimeout(r, 50));
      onComplete();
    }
    transition();
  }, []);
  return (
    <>
      <pixiText text={text} x={x} y={y} anchor={0.5} style={TEXT_STYLE} />
      <pixiText
        text={text}
        anchor={0.5}
        x={x - xOffset}
        y={y}
        style={
          new TextStyle({
            fill: "#F7F7F6",
            fontSize: 80,
            fontFamily: "Exo 2, serif",
          })
        }
        tint={0xff0000}
        blendMode={"screen"}
      />
      <pixiText
        text={text}
        anchor={0.5}
        x={x + xOffset}
        y={y}
        style={
          new TextStyle({
            fill: "#F7F7F6",
            fontSize: 80,
            fontFamily: "Exo 2, serif",
          })
        }
        tint={0x00ffff}
        blendMode={"screen"}
      />
    </>
  );
};
const Inverted = ({
  onComplete,
  x,
  y,
  text,
}: {
  onComplete: () => void;
  x: number;
  y: number;
  text: string;
}) => {
  const [scale, setScale] = useState(-1);
  useEffect(() => {
    async function transition() {
      await new Promise((r) => setTimeout(r, 100));
      setScale(1.1);
      await new Promise((r) => setTimeout(r, 50));
      setScale(1);
      await new Promise((r) => setTimeout(r, 50));
      setScale(-1);
      await new Promise((r) => setTimeout(r, 50));
      setScale(-1.1);
      await new Promise((r) => setTimeout(r, 100));

      onComplete();
    }
    transition();
  }, []);
  return (
    <pixiText
      text={text}
      x={x}
      y={y}
      anchor={0.5}
      scale={scale}
      style={TEXT_STYLE}
    />
  );
};

const YSplit = ({
  onComplete,
  x,
  y,
  text,
}: {
  onComplete: () => void;
  x: number;
  y: number;
  text: string;
}) => {
  const [yOffset, setYOffset] = useState(70);
  useEffect(() => {
    async function transition() {
      await new Promise((r) => setTimeout(r, 100));
      setYOffset(-50);
      await new Promise((r) => setTimeout(r, 50));
      setYOffset(40);
      await new Promise((r) => setTimeout(r, 50));
      setYOffset(-10);
      await new Promise((r) => setTimeout(r, 50));
      onComplete();
    }
    transition();
  }, []);
  return (
    <>
      <pixiText
        text={text}
        x={x}
        y={y + yOffset}
        anchor={0.5}
        alpha={0.5}
        style={TEXT_STYLE}
      />
      <pixiText text={text} x={x} y={y} anchor={0.5} style={TEXT_STYLE} />
    </>
  );
};

const XDisplace = ({
  onComplete,
  x,
  y,
  text,
}: {
  onComplete: () => void;
  x: number;
  y: number;
  text: string;
}) => {
  const [xOffset, setXOffset] = useState(20);
  useEffect(() => {
    async function transition() {
      await new Promise((r) => setTimeout(r, 100));
      setXOffset(-15);
      await new Promise((r) => setTimeout(r, 50));
      setXOffset(10);
      await new Promise((r) => setTimeout(r, 50));
      setXOffset(-5);
      await new Promise((r) => setTimeout(r, 50));
      setXOffset(1);
      await new Promise((r) => setTimeout(r, 50));
      onComplete();
    }
    transition();
  }, []);
  return (
    <pixiText
      text={text}
      x={x + xOffset}
      y={y}
      anchor={0.5}
      style={TEXT_STYLE}
    />
  );
};

const Title = () => {
  const [i, setI] = useState(0);
  const [filters, setFilters] = useState<GlitchFilter | null>(null);
  const { app } = useApplication();
  const x = app.screen.width / 2;
  const y = app.screen.height / 2.5;

  useEffect(() => {
    if (i < SEQUENCE.length) {
      return;
    }
    const scheduleNextGlitch = () => {
      const delay =
        Math.random() * (MAX_INTERVAL - MIN_INTERVAL) + MIN_INTERVAL;

      setTimeout(async () => {
        setFilters(
          new GlitchFilter({
            slices: 2,
            average: true,
            blue: [1, 1],
            red: [1, 1],
            green: [1, 1],
          })
        );

        setTimeout(() => {
          setFilters(null);
          scheduleNextGlitch();
        }, GLITCH_DURATION);
      }, delay);
    };

    scheduleNextGlitch();
  }, [i]);
  return (
    <>
      {SEQUENCE[i] === "inverted" && (
        <Inverted
          x={x}
          y={y}
          onComplete={() => {
            setI((prev) => prev + 1);
          }}
          text="Ralph Perez"
        />
      )}
      {SEQUENCE[i] === "ySplit" && (
        <YSplit
          x={x}
          y={y}
          onComplete={() => {
            setI((prev) => prev + 1);
          }}
          text="Ralph Perez"
        />
      )}
      {SEQUENCE[i] === "xDisplace" && (
        <XDisplace
          x={x}
          y={y}
          onComplete={() => {
            setI((prev) => prev + 1);
          }}
          text="Ralph Perez"
        />
      )}

      {SEQUENCE[i] === "analyph" && (
        <Analyph
          x={x}
          y={y}
          onComplete={() => {
            setI((prev) => prev + 1);
          }}
          text="Ralph Perez"
        />
      )}
      {i === SEQUENCE.length && (
        <pixiText
          text={"Ralph Perez"}
          x={x}
          y={y}
          anchor={0.5}
          filters={filters || []}
          style={TEXT_STYLE}
        />
      )}
    </>
  );
};

export default Title;
