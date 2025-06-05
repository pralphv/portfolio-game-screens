import { extend, useApplication, useTick } from "@pixi/react";
import React, { useState, useEffect } from "react";
import {
  Graphics,
  Sprite,
  Texture,
  Container,
  TextStyle,
  Text,
  RenderTexture,
} from "pixi.js";
import { GlitchFilter } from "pixi-filters";
extend({ Graphics, Sprite, Texture, Text, Container });


function GlitchText() {
  const { app } = useApplication();

  const [filters, setFilters] = useState<GlitchFilter[]>([]);
  const [alpha, setAlpha] = useState(0);
  useEffect(() => {
    async function loadData() {
      await new Promise((r) => setTimeout(r, 1000));

      const glitchFilter = new GlitchFilter({
        slices: 4,
        offset: 20,
        fillMode: 1,
        seed: Math.random(),
      });
      setFilters([glitchFilter]);
      await new Promise((r) => setTimeout(r, 600));
      setAlpha(1);
      await new Promise((r) => setTimeout(r, 230));
      setAlpha(0);
      await new Promise((r) => setTimeout(r, 190));
      setAlpha(1);
      await new Promise((r) => setTimeout(r, 180));
      setAlpha(0);
    }
    loadData();
  }, []);
  const x = app.screen.width / 2 - (Math.random() - 0.5) * 40;
  const y = app.screen.height / 2 - (Math.random() - 0.5) * 40;

  return (
    <pixiText
      alpha={alpha}
      text={"i hate tc"}
      anchor={0.5}
      x={x}
      y={y}
      filters={filters}
      style={
        new TextStyle({
          ...textStyle,
          fill: "#F7F7F6",
        })
      }
      scale={Math.random() < 0.5 ? 1 : -1}
      tint={0xffffff}
    />
  );
}

function DisplaceX({ children }: {children: React.ReactNode}) {
  const [displacement, setDisplacement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplacement(Math.random() * 20 - 10);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <pixiContainer x={displacement}>{children}</pixiContainer>;
}

const createLines = (width: number, height: number) => {
  // Create vertical line pattern to use as a texture
  const lineCanvas = document.createElement("canvas");
  lineCanvas.width = 256;
  lineCanvas.height = 256;
  const ctx = lineCanvas.getContext("2d");

  //@ts-ignore
  ctx.fillStyle = "white";
  for (let x = 0; x < 256; x += 4) {
    ctx?.fillRect(x, 0, 1, 256); // 1px wide lines
  }

  const lineTexture = Texture.from(lineCanvas);
  const lineSprite = new Sprite(lineTexture);
  lineSprite.width = width;
  lineSprite.height = height;
  lineSprite.tint = 0x000000;
  return lineSprite;
};
const textStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: 60,
  letterSpacing: 8,
};

const ThreeColoredText = ({
  text,
  x,
  y,
  scale = 1,
  fontSize = 60,
}: {
  text: string;
  x: number;
  y: number;
  scale?: number;
  fontSize?: number;
}) => (
  <>
    <pixiText
      text={text}
      anchor={0.5}
      x={x}
      y={y}
      style={
        new TextStyle({
          ...textStyle,
          fill: "#F7F7F6",
          fontSize,
        })
      }
      tint={0xffffff}
      scale={scale}
    />
    <pixiText
      text={text}
      anchor={0.5}
      x={x - 3}
      y={y}
      style={
        new TextStyle({
          ...textStyle,
          fill: "#F7F7F6",
          fontSize,
        })
      }
      tint={0xff0000}
      blendMode={"screen"}
      scale={scale}
    />

    <pixiText
      text={text}
      anchor={0.5}
      x={x + 3}
      y={y}
      style={
        new TextStyle({
          ...textStyle,
          fill: "#F7F7F6",
          fontSize,
        })
      }
      tint={0x00ffff}
      blendMode={"screen"}
      scale={scale}
    />
  </>
);

const AnaglyphText = ({ onComplete }: { onComplete: () => void }) => {
  const { app } = useApplication();
  const [x, setX] = useState(app.screen.width / 2);
  useEffect(() => {
    async function transition() {
      await new Promise((r) => setTimeout(r, 150));
      setX((prev) => prev - 100);
      await new Promise((r) => setTimeout(r, 50));
      setX((prev) => prev + 200);
      await new Promise((r) => setTimeout(r, 50));
      onComplete();
    }
    transition();
  }, []);
  const y = app.screen.height / 2;
  const text = "Ralph Perez";
  return <ThreeColoredText text={text} x={x} y={y} />;
};

const InvertedText = ({
  onComplete,
  text,
}: {
  onComplete: () => void;
  text: string;
}) => {
  const { app } = useApplication();
  const [scale, setScale] = useState(1);
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
  const x = app.screen.width / 2;
  const y = app.screen.height / 2;
  return (
    <ThreeColoredText
      text={text}
      x={x - (Math.random() - 0.5) * 50}
      y={y - (Math.random() - 0.5) * 50}
      scale={scale}
    />
  );
};

const RandomBigText = () => {
  const { app } = useApplication();
  const [render, setRender] = useState(false);
  useEffect(() => {
    async function transition() {
      await new Promise((r) => setTimeout(r, 900));
      setRender(true);
      await new Promise((r) => setTimeout(r, 200));
      setRender(false);
      await new Promise((r) => setTimeout(r, 180));
      setRender(true);
      await new Promise((r) => setTimeout(r, 210));
      setRender(false);
    }
    transition();
  }, []);
  const x = app.screen.width / 2 - (Math.random() - 0.5) * 40;
  const y = app.screen.height / 2;
  return (
    render && (
      <ThreeColoredText
        x={x}
        y={y}
        text="i hate lc"
        scale={Math.random() < 0.5 ? 1 : -1}
        fontSize={80}
      />
    )
  );
};

const OldTvNoise = () => {
  const { app } = useApplication();

  const [maskTexture, setMaskTexture] = useState<Texture | null>(null);
  const [maskGraphics, setMaskGraphics] = useState<Graphics | null>(null);
  useEffect(() => {
    const lineSprite = createLines(app.screen.width, app.screen.height);
    const maskGraphics_ = new Graphics();
    const maskTexture_ = RenderTexture.create({
      width: app.screen.width,
      height: app.screen.height,
    });
    const maskSprite = new Sprite(maskTexture_);

    app.stage.addChild(lineSprite);
    lineSprite.mask = maskSprite; // apply dynamic mask
    setMaskTexture(maskTexture_);
    setMaskGraphics(maskGraphics_);
    return () => {
      app.stage.removeChild(lineSprite);
      maskGraphics?.destroy();
      maskTexture?.destroy();
      maskSprite.destroy();
      lineSprite.destroy();
    };
  }, []);
  function updateMask() {
    if (!maskGraphics) {
      return;
    }
    maskGraphics.clear();

    for (let x = 0; x < app.screen.width; x += 1) {
      maskGraphics.rect(
        x,
        Math.random() * app.screen.height * 0.3,
        1,
        Math.random() * app.screen.height * 0.6
      );
    }

    maskGraphics.fill({ color: 0xffffff, alpha: 0.15 });
    // Update the texture with the new mask
    app.renderer.render(maskGraphics, {
      renderTexture: maskTexture,
      //   clear: true,
    });
  }
  let elapsed = 0;
  useTick(() => {
    elapsed += 1;
    if (elapsed > 10) {
      updateMask();
      elapsed = 0;
    }
  });
  return <></>;
};

function BrownOverlay() {
  const { app } = useApplication();
  const [alpha, setAlpha] = useState(0);
  useTick(() => {
    setAlpha(
      (prev) => Math.min(0.1, prev + 0.003) - (Math.random() < 0.1 ? 0.005 : 0)
    );
  });

  return (
    <pixiGraphics
      draw={(g) => {
        g.clear();
        g.rect(0, 0, app.screen.width, app.screen.height);
        g.fill({ color: 0x8b4513, alpha });
      }}
    />
  );
}

interface ScanLine {
  id: number;
  y: number;
  alpha: number;
}

const HorizontalLines = () => {
  const { app } = useApplication();

  const [scanLines, setScanLines] = useState<ScanLine[]>([]);

  useEffect(() => {
    const generateScanLines = () => {
      const lines = Array.from({ length: 3 }, (_, i) => ({
        id: Date.now() + i,
        y: Math.random() * app.screen.height,
        alpha: 0.05 + Math.random() * 0.3,
      }));
      setScanLines(lines);
    };

    generateScanLines();
    const interval = setInterval(() => {
      setScanLines(
        scanLines.map((line) => {
          return { ...line, alpha: line.alpha / 2 };
        })
      );
    }, 100);
    const interval2 = setInterval(() => {
      setScanLines(
        scanLines.map((line) => {
          return { ...line, alpha: 0 };
        })
      );
    }, 100);
    const interval3 = setInterval(generateScanLines, 400);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <>
      {scanLines.map((line) => (
        <pixiGraphics
          key={line.id}
          draw={(g) => {
            g.clear();

            g.moveTo(0, line.y)
              .lineTo(app.screen.width, line.y)
              .stroke({ color: 0xffffff, alpha: line.alpha });
          }}
        />
      ))}
    </>
  );
};

const SEQUENCE = [
  "anaglyph",
  "inverted",
  "displaceAnaglyph",
  "displaceInverted",
  "anaglyph",
  "inverted",
];

const IntroSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [i, setI] = useState(0);

  if (i === SEQUENCE.length) {
    onComplete();
  }

  return (
    <>
      <OldTvNoise />
      <BrownOverlay />
      <RandomBigText />
      <HorizontalLines />

      <GlitchText />

      {SEQUENCE[i] === "anaglyph" && (
        <AnaglyphText
          onComplete={() => {
            setI((prev) => prev + 1);
          }}
        />
      )}

      {SEQUENCE[i] === "inverted" && (
        <InvertedText
          onComplete={() => {
            setI((prev) => prev + 1);
          }}
          text="Ralph Perez"
        />
      )}
      {SEQUENCE[i] === "displaceAnaglyph" && (
        <DisplaceX>
          <AnaglyphText
            onComplete={() => {
              setI((prev) => prev + 1);
            }}
          />
        </DisplaceX>
      )}
      {SEQUENCE[i] === "displaceInverted" && (
        <DisplaceX>
          <InvertedText
            onComplete={() => {
              setI((prev) => prev + 1);
            }}
            text="lc sucks"
          />
        </DisplaceX>
      )}
    </>
  );
};

export default IntroSequence;
