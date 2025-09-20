import { useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import RightPanel from "../../components/rightPanel";
import LeftPanel, { createUrl } from "../../components/leftPanel";
import { useScreenWidth, useTranslation } from "../../utils/hooks";

const Me = () => {
  const { language, t } = useTranslation();

  if (language === "en") {
    return (
      <RightPanel title={t("me")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>I'm your typical dev doing very exciting tasks on the job.</p>
          <p>
            You don't always get to code things you want for a living. So here I
            am coding something probably no one will see, but I'm doing it
            anyways because its fun and I get to learn something that is not
            Leetcode.
          </p>
          <p>
            Sadly self-taught. Graduated with an accounting & finance major. I
            have this random CFA level 1 too.
          </p>
          <p>
            Will stay full-stack for the rest of my life. Being able to
            procrastinate in the other stack when I'm bored with the one I'm
            actively working on is pretty efficient.
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title={t("me")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>普通の会社で退屈な開発をやっている。</p>
          <p>
            企業でつまらない仕事ばかりで、退屈すぎてこのページを作った。多分誰も見てないけど。
            まあLeetcodeよりずっと楽しいし、新しいことも学べるだ。
          </p>
          <p>
            残念ながら、独学だ。会計・ファイナンス専攻だった。なんでかCFA Level
            1とか持っている。
          </p>
          <p>
            Full-stackでずっとやりたいと思う。やってる事に飽きたら、
            別のstackで気分転換できるので、結構いいんだよね。
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title={t("me")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>
            工作太無聊了一直打沒意義的東西。就打了這個網頁，順便學一下有趣的東西。
            總比leetcode好。
          </p>
          <p>可惜我只是自學，是會計經濟畢業的。還有一個沒用處的CFA Level 1。</p>
          <p>應該都會繼續做full stack。悶了就可以做另外的stack挺好的。</p>
        </div>
      </RightPanel>
    );
  }
};

const ThisPage = () => {
  const { language, t } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title={t("thisPage")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>I want to recreate cool game screens.</p>
          <p>
            Currently this is NieR: Automata's title screen and pause screen.
            Eventually I want to recreate more. Like Persona's.
          </p>
          <p>Ultimately, my goal is to learn animations and GSAP.</p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title={t("thisPage")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>カッコイイゲームUIを再現したい。</p>
          <p>
            今のUIはNieR:
            Automataのタイトル画面とポーズメニューを参考にして作った。いずれはペルソナとかも作りたい。
          </p>
          <p>ゴールはアニメーションとGSAPを学ぶことだ。</p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title={t("thisPage")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>其實我一直想做遊戲的。所以這網頁就想用遊戲的界面來做。</p>
          <p>現在是尼爾：自動人形的標題畫面跟暫停界面。之後還想做Persona的。</p>
          <p>目標是學animation跟GSAP。</p>
        </div>
      </RightPanel>
    );
  }
};

const TechStack = () => {
  const { language, t } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title={t("techStack")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>
            I started with Python and that has been my main language throughout
            my career. I've been finding myself preferring TypeScript for
            backends for web development. Running the same language for the back
            and front does make things easier.
          </p>
          <p>
            Scripting-wise, it just depends on what I'm trying to do. If its
            data analyzing, clearly its going to be Python Polars. If its
            scraping, then Node Playwright.
          </p>
          <p>
            React is my choice of frontend. Although I have been meaning to get
            into Svelte.
          </p>
          <p>
            My job uses GraphQl but honestly it adds more complexity for not a
            lot of benefits.
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title={t("techStack")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>
            最初はPythonで始めた。それからずっと、働いてる会社は全部Pythonを使っている。
            最近、バックエンドの開発でTypeScriptの方を使うようになった。
            バックとフロントは同じ言語を使うと楽になる。
          </p>
          <p>
            スクリプトは何をやるかで決める。データ分析だったらPython Polars、
            スクレイピングならNode Playwright。
          </p>
          <p>
            フロントはReactを使っている。ただ、Svelteもやってみたいと思っている。
          </p>
          <p>
            仕事ではGraphQLを使っているが、正直あまりメリットがないのに複雑になるだけだ。
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title={t("techStack")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>
            學了Python之後一直的工作都是Python。但可以的話我是想用TypeScript做後端的。
            前端後端都用同一個language是方便很多的。
          </p>
          <p>
            寫script的話，就看我想做什麼。如果是數據分析的話就當然是Python。
            Scraping的話就Node Playwrite。
          </p>
          <p>前端我是用React的。但我一直都在想用Svelte。</p>
          <p>工作是有用GraphQL。但說真的好處沒有很多。</p>
        </div>
      </RightPanel>
    );
  }
};

const AmIaWeeb = () => {
  const { language, t } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title={t("amIAWeeb")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>No I'm not. I just happen to have watched over 300 anime.</p>
          <p>And no I'm not learning Japanese because of anime.</p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title={t("amIAWeeb")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>たまたま300本以上アニメ見ただけでアニオタと言われると酷くない？</p>
          <p>しかもアニメが原因で日本語の勉強を始めたわけじゃない。</p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title={t("amIAWeeb")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>才看過300套動漫怎會是宅男?</p>
          <p>學日文是因為興趣。</p>
        </div>
      </RightPanel>
    );
  }
};

const HowThisWasMade = () => {
  const { language, t } = useTranslation();
  if (language === "en") {
    return (
      <RightPanel title={t("howItsMade")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>Landing page: @pixi/react</p>
          <p>
            Others: React with lots of css. No SSR since this page doesn't care
            for SEO.
          </p>
          <p>
            Got some css started by copying{" "}
            <a
              href="https://codepen.io/levise/pen/vMzEwr"
              style={{ display: "inline", padding: 0, fontWeight: 600 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              this codepen
            </a>
            . Thank you whoever wrote this.
          </p>
          <p>
            Don't bother checking my code because its absolute spaghetti. I did
            not intend it to be maintanable. I just coded something out quickly
            because I have other chores to do. I don't code like this at work I
            promise.
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "ja") {
    return (
      <RightPanel title={t("howItsMade")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>LP: @pixi/react</p>
          <p>他: ReactとCSS. SEOが関係ないからSSRはしない。</p>
          <p>
            <a
              href="https://codepen.io/levise/pen/vMzEwr"
              style={{ display: "inline", padding: 0, fontWeight: 600 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              このcodepen
            </a>
            パクッてCSSスタートした。作った人、感謝しております。
          </p>
          <p>
            コードを見ないほうがいい。めちゃくちゃやばいから。
            メンテナンスのことなんか考えず書いたコードだ。
            生活がクソ忙しくて急いで作っただけ。仕事のコードはちゃんとしてるからね。
          </p>
        </div>
      </RightPanel>
    );
  } else if (language === "zh") {
    return (
      <RightPanel title={t("howItsMade")}>
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          <p>Landing page: @pixi/react</p>
          <p>其他：React跟CSS。沒有SEO就沒用SSR。</p>
          <p>
            有一些CSS是抄了{" "}
            <a
              href="https://codepen.io/levise/pen/vMzEwr"
              style={{ display: "inline", padding: 0, fontWeight: 600 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              這個codepen
            </a>
            。謝謝。
          </p>
          <p>
            碼就不用看了。太多家務要做根本沒有時間，就趕快亂寫就算了。
            上班當然不會這樣。
          </p>
        </div>
      </RightPanel>
    );
  }
};

const Contact = () => (
  <RightPanel title="Contact">
    <a
      href="mailto:pralphv321@gmail.com"
      style={{ fontWeight: 600 }}
      rel="noopener noreferrer"
    >
      pralphv321@gmail.com
    </a>
    <a
      href="https://www.linkedin.com/in/ralph-vincent-o-perez-16b378122"
      style={{ fontWeight: 600 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
  </RightPanel>
);

const AboutMe = () => {
  const ready = useDelayIfRefresh(500);
  const { section } = useParams();
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation();

  const subContent = [
    createUrl("/about_me/me", t("me")),
    createUrl("/about_me/this_page", t("thisPage")),
    createUrl("/about_me/tech_stack", t("techStack")),
    createUrl("/about_me/am_i_a_weeb", t("amIAWeeb")),
    createUrl("/about_me/how_its_made", t("howItsMade")),
    createUrl("/about_me/contact", t("contact")),
  ];
  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          {!(isSmallScreen && section) && (
            <NierPageHeader title={t("aboutMe")} />
          )}
          <div style={{ display: "flex", gap: "1em" }}>
            {!(isSmallScreen && section) && <div className="dividers" />}
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              {(!isSmallScreen || !section) && (
                <LeftPanel
                  smallScreen={isSmallScreen}
                  subContent={subContent}
                  urlPrefix="about_me"
                />
              )}
              {section && (
                <div style={{ flex: "1" }}>
                  {section === "me" && <Me />}
                  {section === "this_page" && <ThisPage />}
                  {section === "tech_stack" && <TechStack />}
                  {section === "am_i_a_weeb" && <AmIaWeeb />}
                  {section === "how_its_made" && <HowThisWasMade />}
                  {section === "contact" && <Contact />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default AboutMe;
