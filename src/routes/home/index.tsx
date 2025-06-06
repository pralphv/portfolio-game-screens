import { useNavigate } from "react-router";
import { extend, useApplication, useTick, Application } from "@pixi/react";
import { useRef, useMemo, useState, useEffect } from "react";
import IntroSequence from "./introSequence";
import Title from "./title";
import {
  Graphics,
  Sprite,
  Texture,
  NoiseFilter,
  Container,
  TextStyle,
  Text,
  DisplacementFilter,
  Assets,
} from "pixi.js";
extend({ Graphics, Sprite, Texture, Text, Container });


const Stars = () => {
  const { app } = useApplication();
  const [masterAlpha, setMasterAlpha] = useState(0);
  useTick(() => {
    if (masterAlpha < 1) {
      setMasterAlpha((prev) => prev + 0.02);
    }
  });
  const stars = useMemo(() => {
    return Array.from({ length: 500 }, (_, i) => {
      const y = Math.random() * app.screen.height * 0.4;
      return {
        id: Date.now() + i,
        x: Math.random() * app.screen.width,
        y,
        radius: Math.random() * 1.5,
        alpha: 1 - (y / app.screen.height) * 2,
      };
    });
  }, []);
  return (
    <pixiGraphics
      draw={(graphics) => {
        graphics.clear();
        for (let i = 0; i < stars.length - 1; i++) {
          graphics.circle(stars[i].x, stars[i].y, stars[i].radius);
          graphics.fill({
            color: 0xffffff,
            alpha: stars[i].alpha * masterAlpha,
          });
        }
      }}
    />
  );
};

function createOvalFadeMaskTexture(width: number, height: number): Texture {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  // Radial gradient from center, elliptical
  const radiusX = width / 1.5;
  const radiusY = height / 1.5;

  // Create elliptical gradient using transform
  ctx.save();
  ctx.translate(width / 2.2, height / 2.2);
  ctx.scale(1, radiusY / radiusX); // squash Y to make it elliptical
  const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radiusX);

  gradient.addColorStop(0.0, "rgba(255, 255, 255, 1)"); // fully visible center
  gradient.addColorStop(0.7, "rgba(255, 255, 255, 1)"); // still visible near edge
  gradient.addColorStop(1.0, "rgba(255, 255, 255, 0)"); // fade at outer rim

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(0, 0, radiusX, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  return Texture.from(canvas);
}

const Background2 = () => {
  const [_, setReady] = useState(false);
  const { app } = useApplication();
  useEffect(() => {
    setReady(true);
  }, [app]);

  const noiseFilter = new NoiseFilter({ noise: 0.01 });
  app.stage.filters = [noiseFilter];

  const maskSprite = new Sprite(
    createOvalFadeMaskTexture(app.screen.width * 1.1, app.screen.height * 1.1)
  );

  const container = new Container();
  app.stage.addChild(container);

  return (
    <>
      <pixiGraphics
        draw={(graphics) => {
          graphics.clear();
          graphics.rect(0, 0, app.screen.width, app.screen.height);
          graphics.fill({ color: 0x0b0e19 }); // darker background
        }}
      />
      <pixiGraphics
        draw={(graphics) => {
          graphics.clear();
          graphics.rect(0, 0, app.screen.width, app.screen.height);
          graphics.fill({ color: 0x1a1925 }); // main background color
        }}
        mask={maskSprite}
      />
    </>
  );
};

function createBlurredCircleTexture(radius = 10, blur = 15) {
  const size = radius * 2 + blur * 2;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  // @ts-ignore
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

  const center = size / 2;

  const gradient = ctx.createRadialGradient(
    center,
    center,
    0,
    center,
    center,
    radius + blur
  );
  gradient.addColorStop(0, "rgba(255,255,255,0.8)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return Texture.from(canvas);
}

function createFirefly(width: number, height: number) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    scale: 0.5 + Math.random(),
    alpha: 0.6,
    startigAlpha: Math.random() - 0.5,
    speed: Math.random() > 0.5 ? "fast" : "slow",
  };
}
const DotLineDistortion = () => {
  const { app } = useApplication();
  const width = 300;
  const x = app.screen.width / 2 - width / 2;
  const y = app.screen.height * 0.7 + 25;
  const dotRadius = 3;

  const [filter, setFilter] = useState<DisplacementFilter | null>(null);
  const [sprite, setSprite] = useState<Sprite | null>(null);

  useEffect(() => {
    async function loadData() {
      await Assets.load({
        src: "/distortion_map.jpeg",
      });
      const displacementSprite = Sprite.from(
        "/distortion_map.jpeg"
      );

      displacementSprite.texture.source.addressMode = "repeat";
      const displacementFilter = new DisplacementFilter({
        sprite: displacementSprite,
        scale: { x: -10, y: 30 },
      });
      setFilter(displacementFilter);
      setSprite(displacementSprite);
      displacementFilter.padding = 10;

      app.stage.addChild(displacementSprite);
    }
    loadData();
  }, []);
  useTick(() => {
    if (sprite) {
      if (Math.random() > 0.5) {
        sprite.x += (Math.random() - 0.5) * 100;
        sprite.y += (Math.random() - 0.5) * 10;
      }
    }
  });

  return (
    <pixiContainer
      //@ts-ignore
      filters={filter}
      x={x}
      y={y - 5}
      alpha={0.5}
    >
      <pixiGraphics
        draw={(g) => {
          if (!sprite) {
            return;
          }
          g.clear();
          g.setStrokeStyle({ color: 0xffffff });

          const lineEndX = width - dotRadius * 2;

          g.circle(0, 0, dotRadius).circle(width, 0, dotRadius).fill();

          g.moveTo(6, 0).lineTo(lineEndX, 0).stroke({ color: 0xffffff });
        }}
      />
    </pixiContainer>
  );
};

const DotLine = () => {
  const { app } = useApplication();
  const [alpha, setAlpha] = useState(0);
  const x = app.screen.width / 2 - 125;
  const y = app.screen.height * 0.7 + 25;
  const width = 250;
  const dotRadius = 3;
  useTick(() => {
    if (alpha < 1) {
      setAlpha((prev) => Math.min(1, prev + 0.05));
    }
  });

  return (
    <pixiGraphics
      draw={(g) => {
        g.clear();
        g.setStrokeStyle({ color: 0xffffff });

        const lineStartX = x + 6;
        const lineEndX = x + width - dotRadius * 2;

        g.circle(x, y, dotRadius)
          .circle(x + width, y, dotRadius)
          .fill({ alpha });

        g.moveTo(lineStartX, y)
          .lineTo(lineEndX, y)
          .stroke({ color: 0xffffff, alpha });
      }}
    />
  );
};

const ClickAnyButton = () => {
  const { app } = useApplication();
  const [visibleText, setVisibleText] = useState("");
  const fullText = "Click Anywhere";
  useEffect(() => {
    async function load() {
      for (const text of fullText) {
        const randomAlphabet = String.fromCharCode(
          65 + Math.floor(Math.random() * 26)
        );
        setVisibleText(
          (prev) => prev.slice(0, prev.length - 1) + text + randomAlphabet
        );
        await new Promise((r) => setTimeout(r, 60));
      }
      setVisibleText(fullText);
    }
    load();
  }, []);

  return (
    <>
      <pixiText
        text={visibleText}
        anchor={0.5}
        x={app.screen.width / 2}
        y={app.screen.height * 0.7}
        style={
          new TextStyle({
            fontFamily: "PixelOperator, monospace",
            fontSize: 24,
            fill: "#F7F7F6",
          })
        }
      />
    </>
  );
};

const ClickAnyButtonDistortion = () => {
  const { app } = useApplication();
  const fullText = "Click Anywhere";

  const [filter, setFilter] = useState<DisplacementFilter | null>(null);
  const [sprite, setSprite] = useState<Sprite | null>(null);
  const [alpha, setAlpha] = useState(0);

  useEffect(() => {
    async function loadData() {
      await Assets.load({
        src: "/distortion_map.jpeg",
      });
      const displacementSprite = Sprite.from(
        "/distortion_map.jpeg"
      );

      displacementSprite.texture.source.wrapMode = "repeat";
      const displacementFilter = new DisplacementFilter({
        sprite: displacementSprite,
        scale: { x: -10, y: 30 },
      });
      setFilter(displacementFilter);
      setSprite(displacementSprite);

      app.stage.addChild(displacementSprite);
    }
    loadData();
  }, []);
  useTick(() => {
    if (sprite) {
      if (Math.random() > 0.2) {
        sprite.x += (Math.random() - 0.5) * 100;
        sprite.y += (Math.random() - 0.5) * 10;
        if (alpha < 0.7) {
          setAlpha((prev) => Math.min(0.7, prev + 0.05));
        }
      }
    }
  });
  return (
    <pixiContainer
      //@ts-ignore
      filters={filter}
      x={app.screen.width / 2}
      y={app.screen.height * 0.7}
      alpha={alpha}
    >
      <pixiText
        text={filter ? fullText + fullText + fullText : ""}
        anchor={0.5}
        x={0}
        y={0}
        style={
          new TextStyle({
            fontFamily: "PixelOperator, monospace",
            fontSize: 12,
            fill: "#F7F7F6",
          })
        }
      />
    </pixiContainer>
  );
};

const Particles = () => {
  const { app } = useApplication();
  const [_, setFrame] = useState(0);

  const texture = useMemo(() => createBlurredCircleTexture(8, 16), []);
  const fireflies = useMemo(
    () =>
      Array.from({ length: 15 }, () =>
        createFirefly(app.screen.width, app.screen.height)
      ),
    [app.screen.width, app.screen.height]
  );
  useTick((delta) => {
    for (let i = 0; i < fireflies.length; i++) {
      fireflies[i].y -=
        Math.random() *
        (fireflies[i].speed === "fast" ? 0.8 : 0.3) *
        delta.deltaTime;
      fireflies[i].x +=
        Math.random() *
        (fireflies[i].speed === "fast" ? 0.8 : 0.3) *
        delta.deltaTime;
      fireflies[i].startigAlpha = Math.min(
        0.6,
        fireflies[i].startigAlpha + 0.001
      );
      fireflies[i].alpha =
        Math.min(0.6, fireflies[i].startigAlpha) +
        Math.sin(performance.now() * 0.00001 + fireflies[i].x * 0.1) * 0.2;

      if (fireflies[i].y < -10) {
        fireflies[i].y = app.screen.height + 10;
        fireflies[i].x = Math.random() * app.screen.width;
      }
      setFrame((t) => t + 1);
    }
  });
  return fireflies.map((f, i) => (
    <pixiSprite
      key={i}
      texture={texture}
      x={f.x}
      y={f.y}
      alpha={f.alpha}
      anchor={0.5}
      scale={f.scale}
    />
  ));
};

const BottomText = () => {
  const { app } = useApplication();

  return (
    <pixiText
      text={"NieR: Automata inspired"}
      anchor={0.5}
      x={app.screen.width / 2}
      y={app.screen.height * 0.9}
      style={
        new TextStyle({
          fontFamily: "PixelOperator, monospace",
          fontSize: 12,
          fill: "#F7F7F6",
        })
      }
    />
  );
};

const ScreenTransition = ({ onComplete }: { onComplete: () => void }) => {
  const { app } = useApplication();
  const [alpha, setAlpha] = useState(0);
  const fadeSpeed = 0.05;
  const [completed, setCompleted] = useState(false);

  useTick(() => {
    setAlpha((prevAlpha) => {
      const next = prevAlpha + fadeSpeed;
      if (next >= 1) {
        !completed && onComplete();
        setCompleted(true);
      }
      return next;
    });
  });

  return (
    <pixiGraphics
      draw={(g) => {
        g.clear();
        g.rect(0, 0, app.screen.width, app.screen.height);
        g.fill({ color: 0xc9c6ad, alpha });
      }}
    />
  );
};

function BrownOverlayFadeout() {
  const { app } = useApplication();
  const [alpha, setAlpha] = useState(0.09); // from BrownOverlay
  useTick(() => {
    if (alpha > 0) {
      setAlpha((prev) => prev - 0.002);
    }
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

const Home = () => {
  const [startTransition, setStartTransition] = useState(false);
  const parentRef = useRef(null);
  const navigate = useNavigate();
  const [introComplete, setIntroComplete] = useState(false);
  const [shakeX, setShakeX] = useState(-10);

  const handleShaking = async () => {
    await new Promise((r) => setTimeout(r, 200));
    setShakeX(-1);
    await new Promise((r) => setTimeout(r, 100));
    setShakeX(0);
    await new Promise((r) => setTimeout(r, 500));
    setShakeX(-1);
    await new Promise((r) => setTimeout(r, 100));
    setShakeX(0);
  };

  return (
    <div
      ref={parentRef}
      style={{ width: "100vw", height: "100vh" }}
      onClick={() => {
        introComplete && setStartTransition(true);
      }}
    >
      <Application sharedTicker resizeTo={parentRef}>
        <Background2 />

        {!introComplete && (
          <IntroSequence
            onComplete={() => {
              setIntroComplete(true);
              handleShaking();
            }}
          />
        )}
        {introComplete && (
          <pixiContainer x={shakeX}>
            <BrownOverlayFadeout />
            <Stars />
            <Particles />
            <Title />
            <ClickAnyButtonDistortion />
            <ClickAnyButton />
            <DotLineDistortion />
            <DotLine />
          </pixiContainer>
        )}

        {startTransition && (
          <ScreenTransition
            onComplete={() => {
              navigate("/about_me");
            }}
          />
        )}
      </Application>
    </div>
  );
};
export default Home;
