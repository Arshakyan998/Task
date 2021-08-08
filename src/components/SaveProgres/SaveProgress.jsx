import React from "react";

import { useSelector } from "react-redux";

function SaveProgress() {
  const items = useSelector((state) => {
    return state.main.item;
  });

  const styles = {
    position: "absolute",
    right: "5px",
    top: "5px",
    width: "150px",
    height: "30px",
    background: "orange",
    color: "white",
    fontSize: "25px",
    cursor: "pointer",
  };
  const saveProgressInLocalStorege = (e) => {
    localStorage.setItem("item", JSON.stringify(items));

    e.target.style.pointerEvents = "none";
    e.target.style.background = "grey";

    setTimeout(() => {
      e.target.style.pointerEvents = "stroke";
      e.target.style.background = "orange";
    }, 2000);
  };

  return (
    <div>
      <button style={styles} onClick={saveProgressInLocalStorege}>
        Save
      </button>
    </div>
  );
}

export default SaveProgress;
