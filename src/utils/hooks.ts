import { useState, useEffect } from "react";
import { useNavigationType } from "react-router";

export const useTextTypingEffect = (fullText: string) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    async function load() {
      setI(0);

      for (let j = 0; j < fullText.length; j++) {
        setI(j);
        await new Promise((r) => setTimeout(r, 60));
      }
    }
    load();
  }, [fullText]);
  const randomAlphabet = String.fromCharCode(
    65 + Math.floor(Math.random() * 26),
  );
  return i === fullText.length - 1
    ? fullText
    : fullText.slice(0, i) + randomAlphabet;
};

export const useDelayIfRefresh = (delay: number) => {
  const [ready, setReady] = useState(false);
  const navigationType = useNavigationType();
  const isBot =
    /bot|crawler|spider|crawling|google|bing|yahoo|baidu|yandex|facebook|twitter|linkedin/i.test(
      navigator.userAgent,
    );
  useEffect(() => {
    if (navigationType === "PUSH") {
      setReady(true);
      return;
    }
    const timer = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);
  if (isBot) {
    return true;
  }
  return ready;
};
