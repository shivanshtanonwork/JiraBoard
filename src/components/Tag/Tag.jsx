import "./Tag.css";
import { tagStyle, tagKeyMap } from "../../constants/common";

const Tag = ({ tagName, selectedTag, selected }) => {
  const key = tagKeyMap[tagName];
  return (
    <>
      <button
        type="button"
        className="tag"
        style={selected ? tagStyle[key] : {}}
        onClick={() => {
          selectedTag(tagName);
        }}
      >
        {tagName}
      </button>
    </>
  );
};

export default Tag;
