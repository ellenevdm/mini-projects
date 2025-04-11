import { TAGS } from "@/types/quotes";
import { FC } from "react";

interface TagSelectorProps {
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

const TagSelector: FC<TagSelectorProps> = ({ selectedTag, onTagChange }) => {
  return (
    <>
      <select
        value={selectedTag}
        onChange={(e) => onTagChange(e.target.value)}
        className="block w-1/3  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 bg-gray-50 text-gray-700"
      >
        {TAGS.map((tag) => (
          <option key={tag} value={tag} className="text-gray-700">
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </option>
        ))}
      </select>
    </>
  );
};

export default TagSelector;
