import { TAGS } from "@/types/quotes";
import { FC } from "react";

interface TagSelectorProps {
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

const TagSelector: FC<TagSelectorProps> = ({ selectedTag, onTagChange }) => {
  return (
    <>
      <select value={selectedTag} onChange={(e) => onTagChange(e.target.value)}>
        {TAGS.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </>
  );
};

export default TagSelector;
