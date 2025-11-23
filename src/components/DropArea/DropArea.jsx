import React, { useState } from "react";
import "../DropArea/DropArea.css";

const DropArea = () => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={showDrop ? "drop-area" : "hide-drop"}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
    >
      Drop Area here
    </section>
  );
};

export default DropArea;
