import { useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import { useScreenWidth, useTranslation } from "../../utils/hooks";
import LeftPanel, { createUrl } from "../../components/leftPanel";
import RightPanel from "../../components/rightPanel";

const Microservices = () => {
  const { language, t } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title={t("microservices")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>Microservices is a lie.</p>
          <p>Microservices isn't for solving a scalability issue.</p>
          <p>
            It is for when the monolith grows too large, and teams step on each
            other's foot when deploying at the same time.
          </p>
          <p>
            But what ends up happening is services calling each other alongside
            the monolith, and create this distributed monolith monstrosity.
          </p>
          <p>Not saying a pure monolith is better.</p>{" "}
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title={t("microservices")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>マイクロサービスは大噓だ。</p>
          <p>
            スケーラビリティの問題を解決するためじゃなくて、モノリスが大きくなりすぎて、
            チームが同時にデプロイする時にお互いに邪魔しあうの対策だ。
          </p>
          <p>
            でも結局何が起こるかというと、サービス間通信がモノリスと一緒に入り乱れて、
            分散モノリスという化け物を作り出すことになる
          </p>
          <p>純粋なモノリスが優れているという意味ではないが.</p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title={t("microservices")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>Microservice根本是一個騙局。</p>
          <p>
            Microservice不是用來解決scalability的問題。是monolith變的太大，
            太多人需要同時間deploy變得十分麻煩才會用。
          </p>
          <p>
            但結局是變成一堆service call其他的service，最後只是變成distributed
            monolith。
          </p>
          <p>雖然monolith也是好麻煩。</p>
        </div>
      </RightPanel>
    );
  }
};

const Leetcode = () => {
  const { language } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title="Leetcode">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>fuck leetcode</p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title="Leetcode">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>leetcodeはクソだ</p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title="Leetcode">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>on99</p>
        </div>
      </RightPanel>
    );
  }
};

const GraphQl = () => {
  const { language } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title="GraphQL">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>GraphQL is pretty neat when it works ngl.</p>
          <p>
            But then you have to find ways to avoid clients creating crazy
            queries.
          </p>
          <p>And not all developers know GraphQL.</p>
          <p>Then developers have to learn the company's query tree.</p>
          <p>
            And what if the company started with REST? Now some part of the code
            is REST, and some GraphQL. AKA politics.
          </p>
          <p>At this point, just use REST.</p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title="GraphQL">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>GraphQLは正直、動く時は結構いい。</p>
          <p>
            でもクライエントが悪意のあるリクエストでサーバーをDDOSしないよう防がなきゃいけないし。
          </p>
          <p>しかも、全ての開発者がGraphQLを知ってるわけじゃない。</p>

          <p>それに、会社のクエリツリーを覚えないといけないし。</p>
          <p>
            もし会社がRESTから始めてたらどうするの？会社の一部はREST、一部はGraphQL。
            結局はまた政治だ。
          </p>
          <p>こんなに面倒くさいなら、RESTでいいじゃん。</p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title="GraphQL">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>GraphQL是挺好用的。</p>
          <p>
            但是因為client可以自由改query就變得有需要防止大query
            DDOS。然後又不是所有
            developer都懂GraphQL。還要developer學公司的query tree。
          </p>
          <p>
            在想一下。如果公司一開始是REST，然後有人寫了GraphQL那怎辦？
            有一部份就變成了GraphQL，有一部份就還是REST。基本上就是辦公室政治。
          </p>
          <p>這麼麻煩倒不如REST就算了。</p>
        </div>
      </RightPanel>
    );
  }
};

const SystemDesign = () => {
  const { language, t } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title={t("systemDesign")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>System design interviews are just as grindable as Leetcode.</p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title={t("systemDesign")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>システム設計面接もleetcodeと同じように詰め込み勉強できる。</p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title={t("systemDesign")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>系統設計根本跟leetcode一樣都是可以死讀的。</p>
        </div>
      </RightPanel>
    );
  }
};

const SelfTaught = () => {
  const { language, t } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title={t("selfTaught")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>People should stfu about self teaching.</p>
          <p>
            You need a CS degree. I was lucky to get my foot in the industry
            before it essentially closed. If I graduated a few years later, I'd
            be so screwed.
          </p>
          <p>
            And it's not only learning to code. You need freaking Leetcode.
            Without CS fundamentals, it's going to be so much harder to get to a
            decent level to pass interviews.
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title={t("selfTaught")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>独学がどうとか言ってる人いるけど、正直もういいよ。</p>
          <p>
            CS学位は必要なんだ。自分は運良く業界に入れたけど、今だったら多分無理。
          </p>
          <p>
            しかもコードを覚えるだけ済まない。Leetcodeも必要だ。CS基礎がないと、
            面接通るレベルまで到達するのはめっちゃキツイ。
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title={t("selfTaught")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>自學是基乎沒可能的。你必須要CS畢業。</p>
          <p>
            我是運氣好，行業凋零之前就入了行。如果我晚幾年畢業，我就真的完了。
          </p>
          <p>
            還不只是學寫碼，還要學leetcode。沒有CS基礎，是很難達到通過面試的程度。
          </p>
        </div>
      </RightPanel>
    );
  }
};

const GoodCode = () => {
  const { language, t } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title={t("cleanCode")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>Good code does not exist in corporate.</p>
          <p>
            Developers are always racing with time to deliver projects. And that
            leads to cutting corners, like ignoring existing interface to call a
            database directly.
          </p>
          <p>
            Having separate repos with ownership controls doesn't work either.
            Because developers will just create PRs without involving the
            owners, and tag PMs and managers to pressure said owner to push
            whatever code they need.
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title={t("cleanCode")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>企業にクリーンコードなんて存在しない。</p>
          <p>
            開発者はいつも納期に追われる。だから手抜きをするんだ。例えば、既存のインターフェース
            を無視してデータベースを直接叩くとか。
          </p>
          <p>
            リポジトリを分けて、所有権を管理しても意味がない。PRを作った開発者はPMと
            マネージャーをタグ付けして、プレッシャーをかけて”必要”なコードを
            通そうとするから。
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title={t("cleanCode")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>在大公司根本沒有可能有clean code。</p>
          <p>
            Developer只能一直deadline之前趕工，就變成一定會走捷徑。例如大家都不管
            interface直接連database。
          </p>
          <p>
            分開repo搞ownership也沒用。因為大家都會寫完PR再通知對方，不批准的話就會
            tag PM manager強制通過。
          </p>
        </div>
      </RightPanel>
    );
  }
};

const HotTakes = () => {
  const ready = useDelayIfRefresh(500);
  const { section } = useParams();
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation();
  const subContent = [
    createUrl("/hot_takes/microservices", t("microservices")),
    createUrl("/hot_takes/graphql", "GraphQL"),
    createUrl("/hot_takes/leetcode", "Leetcode"),
    createUrl("/hot_takes/system_design", t("systemDesign")),
    createUrl("/hot_takes/self_taught", t("selfTaught")),
    createUrl("/hot_takes/clean_code", t("cleanCode")),
  ];
  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          {!(isSmallScreen && section) && (
            <NierPageHeader title={t("hotTakes")} />
          )}
          <div style={{ display: "flex", gap: "1em" }}>
            {!(isSmallScreen && section) && <div className="dividers" />}
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              {(!isSmallScreen || !section) && (
                <LeftPanel
                  smallScreen={isSmallScreen}
                  subContent={subContent}
                  urlPrefix="hot_takes"
                />
              )}
              {section && (
                <div style={{ flex: "1" }}>
                  {section === "microservices" && <Microservices />}
                  {section === "graphql" && <GraphQl />}
                  {section === "leetcode" && <Leetcode />}
                  {section === "system_design" && <SystemDesign />}
                  {section === "self_taught" && <SelfTaught />}
                  {section === "clean_code" && <GoodCode />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default HotTakes;
