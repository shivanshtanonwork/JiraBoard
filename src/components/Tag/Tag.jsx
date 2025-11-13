import "./Tag.css";

const Tag = ({ tagName, selectedTag, selected }) => {
  const tagStyle = {
    DEV: { backgroundColor: "#5DE2E7" },
    QA: { backgroundColor: "#E4080A" },
    PO: { backgroundColor: "#7DDA58" },
  };
  const tagKeyMap = {
    DEV: "DEV",
    QA: "QA",
    "Product Owner": "PO",
  };
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
