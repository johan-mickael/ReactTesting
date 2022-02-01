import { useState } from "react";

const ReadMore = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  const [desc, toggleDescription] = useState(description.substring(0, 200));
  const [link, setLink] = useState("Read More");

  function expand() {
    if (expanded) {
      toggleDescription(description.substring(0, 200));
      setLink("Read More");
    } else {
      toggleDescription(description);
      setLink("Read Less");
    }
    setExpanded(!expanded);
  }

  return (
    <p className="card-text">
      {desc} ...{" "}
      <span
        onClick={() => expand()}
        className="text-primary"
        style={{ cursor: "pointer" }}
      >
        {link}
      </span>
    </p>
  );
};

export default ReadMore;
