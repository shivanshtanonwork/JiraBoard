import "./Tag.css";

const Tag = ({ tagName, selectedTag, selected }) => {
  const tagStyle = {
    DEV: { backgroundColor: "#5DE2E7" },
    QA: { backgroundColor: "#E4080A" },
    PO: { backgroundColor: "#7DDA58" },
  };
  return (
    <>
      <button
        type="button"
        className="tag"
        style={selected ? tagStyle[tagName] : {}}
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
