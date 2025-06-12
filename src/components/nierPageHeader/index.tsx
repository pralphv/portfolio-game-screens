import { useTextTypingEffect } from "../../utils/hooks";

const NierPageHeader = ({ title }: { title: string }) => {
  const visibleText = useTextTypingEffect(title);
  return <h1>{visibleText}</h1>;
};

export default NierPageHeader;
