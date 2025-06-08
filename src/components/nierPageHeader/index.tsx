import { useEffect, useState } from "react";

import { useTextTypingEffect } from "../../utils/hooks";

const NierPageHeader = ({ title }: { title: string }) => {
  const [ready, setReady] = useState(
    !(new URLSearchParams(window.location.search).get("from") === "home"),
  );
  const visibleText = useTextTypingEffect(ready ? title : "");
  const isBot =
    /bot|crawler|spider|crawling|google|bing|yahoo|baidu|yandex|facebook|twitter|linkedin/i.test(
      navigator.userAgent,
    );
  useEffect(() => {
    if (ready) {
      return;
    }
    const timer = setTimeout(() => {
      setReady(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if (isBot) {
    return <h1>{title}</h1>;
  }
  return ready && <h1>{visibleText}</h1>;
};

export default NierPageHeader;
