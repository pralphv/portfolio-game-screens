import { useState } from "react";
import { useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import LeftPanel, { createUrl } from "../../components/leftPanel";
import DiamondIndicator from "../../components/diamondIndicator";
import { clsx } from "clsx";
import { useScreenWidth, useTranslation } from "../../utils/hooks";

const Modal = ({
  visible,
  onClickAway,
  onClick,
  options,
}: {
  visible: boolean;
  onClickAway: () => void;
  onClick: (option: string) => void;
  options: string[];
}) => {
  const [hoveredText, setHoveredText] = useState("");
  if (!visible) {
    return;
  }
  return (
    <div
      className="modal-backdrop"
      onClick={() => {
        setHoveredText("");
        onClickAway();
      }}
    >
      <div className="modal">
        {options.map((option) => (
          <div
            className="modal-item"
            key={option}
            onMouseEnter={() => {
              setHoveredText(option);
            }}
            onMouseLeave={() => {
              setHoveredText("");
            }}
            onClick={() => onClick(option)}
          >
            <>
              {hoveredText === option && <DiamondIndicator />}
              {option}
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

const Select = ({
  label,
  options,
  onMouseEnter,
  onMouseLeave,
  active,
  hovered,
  onClick,
  onClose,
  onChosen,
  value,
}: {
  label: string;
  options: string[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hovered: boolean;
  active: boolean;
  onClick: () => void;
  onClose: () => void;
  onChosen: (option: string) => void;
  value: string;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        visible={modalVisible}
        onClickAway={() => {
          setModalVisible(false);
          onClose();
        }}
        options={options}
        onClick={onChosen}
      />
      <div style={{ position: "relative", width: "100%" }}>
        {active && <DiamondIndicator active />}
        {hovered && <DiamondIndicator />}
        <div
          className={clsx("select-container", active && "active")}
          style={{ flexGrow: "1" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={() => {
            setModalVisible(true);
            onClick();
          }}
        >
          <div style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
            <div
              className={"bullet-point"}
              style={{
                position: "relative",
                top: "0%",
                transform: "translateY(0%)",
              }}
            />
            <label style={{ fontSize: 16, fontWeight: 400 }}>{label}</label>
          </div>
          <p style={{ fontSize: 16, fontWeight: 400 }}>{value}</p>
        </div>
      </div>
    </>
  );
};

const localMap = {
  en: "English",
  ja: "日本語",
  zh: "繁體中文",
};

interface RightSettingsSelects {
  label: string;
  options: string[];
  onChosen: (option: string) => void;
  value: string;
}

const RightSettings = ({ selects }: { selects: RightSettingsSelects[] }) => {
  const [hoveredSelect, setHoveredSelect] = useState("");
  const [activeSetting, setActiveSetting] = useState("");
  const ready = useDelayIfRefresh(500);
  const { isSmallScreen } = useScreenWidth();

  return (
    ready && (
      <>
        <div
          style={{
            display: "flex",
            gap: "1em",
            marginTop: isSmallScreen ? "2em" : 0,
            height: isSmallScreen ? "65vh" : "100%",
          }}
        >
          <div className="dividers" />
          {selects.map((select) => (
            <Select
              key={select.label}
              label={select.label}
              options={select.options}
              onMouseEnter={() => setHoveredSelect(select.label)}
              onMouseLeave={() => setHoveredSelect("")}
              hovered={hoveredSelect === select.label}
              active={activeSetting === select.label}
              value={select.value}
              onClick={() => setActiveSetting(select.label)}
              onClose={() => setActiveSetting("")}
              onChosen={select.onChosen}
            />
          ))}
        </div>
      </>
    )
  );
};

const Language = () => {
  const { t, setLanguage, language } = useTranslation();

  return (
    <RightSettings
      selects={[
        {
          label: t("text"),
          options: [localMap.en, localMap.ja, localMap.zh],
          value: localMap[language],
          onChosen: (option) => {
            switch (option) {
              case "English":
                setLanguage("en");
                break;
              case "日本語":
                setLanguage("ja");
                break;
              case "繁體中文":
                setLanguage("zh");
                break;
              default:
                setLanguage("en");
                break;
            }
          },
        },
      ]}
    />
  );
};

const Theme = () => {
  const { t } = useTranslation();
  return (
    <RightSettings
      selects={[
        {
          label: t("theme"),
          options: [t("nier")],
          value: t("nier"),
          onChosen: () => {
            return;
          },
        },
      ]}
    />
  );
};

const Settings = () => {
  const ready = useDelayIfRefresh(500);
  const { section } = useParams();
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation();
  const subContent = [
    createUrl("/settings/language", t("language")),
    createUrl("/settings/screen", t("screen")),
  ];
  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          {!(isSmallScreen && section) && (
            <NierPageHeader title={t("settings")} />
          )}
          <div style={{ display: "flex", gap: "1em" }}>
            {!(isSmallScreen && section) && <div className="dividers" />}
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              {(!isSmallScreen || !section) && (
                <LeftPanel
                  smallScreen={isSmallScreen}
                  subContent={subContent}
                  urlPrefix="settings"
                />
              )}
              {section && (
                <div style={{ flex: "1" }}>
                  {section === "language" && <Language />}
                  {section === "screen" && <Theme />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Settings;
