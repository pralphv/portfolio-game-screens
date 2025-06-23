import { useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import { useScreenWidth, useTranslation } from "../../utils/hooks";
import LeftPanel, { createUrl } from "../../components/leftPanel";
import RightPanel from "../../components/rightPanel";

const Yelp = () => {
  const { language } = useTranslation();

  if (language === "en") {
    return (
      <RightPanel title="Yelp Inc.">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>React with SSR + Python backend services + GraphQL</p>
          <p>
            First job to actually need to have scale in mind. Although, not
            really. And the scaling is automated by infra teams.
          </p>
          <p>
            First job that actually needs SSR. Although it's more like writing
            code that doesn't break SSR or cause hydration issues. The actual
            server rendering is done by infra teams.
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title="Yelp Inc.">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>ReactでSSR + Pythonバックエンドサービス + GraphQL</p>
          <p>北米の食べログ。</p>
          <p>
            初めてスケールのことを考えないといけない仕事。
            とはいえ、実際にインフラチームによって自動化されているから。
          </p>
          <p>
            初めて実際にSSRが必要な仕事。ただ、SSRを壊さない、
            hydrationエラーを起こさないコードを書く感じだけど。実際の server
            renderingはインフラチームがやってくれる。
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title="Yelp Inc.">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>React SSR + Python 後端 + GraphQL</p>
          <p>北美的openrice。</p>
          <p>
            第一份工作是確實需要考慮scale。但其實infra team會把這個搞好。
          </p>
          <p>
            也是第一份工作需要SSR。但其實只是小心寫不會error SSR或者hydration的碼。
            實際的server rendering是infra管理的。
          </p>
        </div>
      </RightPanel>
    );
  }
};

const BofA = () => {
  const { language } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title="Bank of America">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          
          <p>
            Python. Lots of scripting to automate excel files. Thus, Pandas. As
            you would expect from mid/back office.
          </p>
          <p>
            My first real full-time developer gig. It was either this, or an
            infra developer in a hedge fund. Wonder if I chose wrong.
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title="Bank of America">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>
            Python。Excelファイル自動化のスクリプトばっかり。当然Pandas。
            やはりバックオフィスだ。
          </p>
          <p>
            初のフルタイム開発者の仕事だった。これかヘッジファンドのインフラ開発者かだった。
            間違った選択かな。
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title="Bank of America">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
                    <p>
            Python。很多scripting自動化excel，所以好多Pandas。是典型的back office。
          </p>
          <p>
            我的第一份開發工作。當時有offer的時候還有hedge fund的infra developer。
            到現在我還會想我到底有沒有選錯。
          </p>

        </div>
      </RightPanel>
    );
  }
};

const Segantii = () => {
  const { language } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title="Segantii Capital Management">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>
            Hedge fund. I worked as a front office developer. Yes I was working
            from 7 to 7 and still was the latest to come and earliest to leave.
          </p>
          <p>
            React CSR + Python monolith. The company had like 150 workers so
            scaling was not an issue. Didn't have to care about SEO so no SSR.
          </p>
          <p>
            One interesting thing was we used Redis quite heavily. For caching
            and Pub/Sub + websockets. It worked well.
          </p>
          <p>
            Funnily, other than SQL, we used MongoDB. Not that it really
            mattered.
          </p>
          <p>Lots of Pandas as you would expect.</p>
          <p>Closing down due to insider trading lmao.</p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title="Segantii Capital Management">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>
            ヘッジファンドだった。フロント開発者として働いた。朝7時から夜7時まで働いたのに、
            一番遅く来て、一番早く帰った人だった。まあこれは東亜なら結構普通だよね。
          </p>
          <p>
            React CSR + Pythonモノリス. 会社は150人程度だったので、
            スケールを気にする必要はなかった。SEOも不要だからSSRもしない。
          </p>
          <p>
            面白かったのは、Redisを結構使ったこと。キャッシュとPub/Sub +
            Websocket に使って、よく動いた。
          </p>
          <p>
            ちなみに、SQL以外にMongoDBも使った。別にそんなに大した話じゃないけど。
          </p>
          <p>予想通り、Pandasはクソ使った。</p>
          <p>インサイダー取引で閉鎖したけど。草。</p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title="Segantii Capital Management">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>
            對沖基金。我是當front office developer的。上班上775，但還是最遲到最早走。
          </p>
          <p>
            React CSR + Python monolith. 公司只有150人所以scaling從來都不是問題。
            不用SEO所以也沒有SSR。
          </p>
          <p>
            有趣的事情是我們用了Redis做caching跟Pub/Sub + websockets。意外的挺好的。
          </p>
          <p>
            搞笑的是我們竟然用了MongoDB。雖然到最後也不是什麼大事情。
          </p>
          <p>預料之內好多Pandas。</p>
          <p>現在因為insider trading要關了。</p>
        </div>
      </RightPanel>
    );
  }
};

const Experience = () => {
  const ready = useDelayIfRefresh(500);
  const { section } = useParams();
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation();
  const subContent = [
    createUrl("/experience/yelp", "Yelp"),
    createUrl("/experience/segantii", "Segantii"),
    createUrl("/experience/bofa", "BofA"),
  ];
  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          {!(isSmallScreen && section) && (
            <NierPageHeader title={t("experience")} />
          )}
          <div style={{ display: "flex", gap: "1em" }}>
            {!(isSmallScreen && section) && <div className="dividers" />}
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              {(!isSmallScreen || !section) && (
                <LeftPanel
                  smallScreen={isSmallScreen}
                  subContent={subContent}
                  urlPrefix="experience"
                />
              )}
              {section && (
                <div style={{ flex: "1" }}>
                  {section === "yelp" && <Yelp />}
                  {section === "segantii" && <Segantii />}
                  {section === "bofa" && <BofA />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Experience;
