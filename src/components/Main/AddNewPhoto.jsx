import React from "react";
import PropTypes from 'prop-types'

import imgAdd from "./assets/Group 1133.svg";
import Button from "../button/Button";

function AddNewPhoto({ addNewPhotoInRedux }) {
  
  const closeBlock = React.useRef(null);
  const closeBtn = React.useRef(null);

  const [showAddBlock, setShowAddBlock] = React.useState(false);

  const [result, setResult] = React.useState({
    description: "",
    src: "",
  });

  const chnageShowBlock = () => {
    setShowAddBlock((prev) => !prev);
  };

  const closeAddBlock = () => {
    setShowAddBlock((prev) => false);
  };

  const newPhotoInType = (e, name) => {
    if (name === "img") {
      let files = e.target.files[0] && e.target.files[0].name;
      if (files) {
        setResult((prev) => ({ ...prev, src: `../../../assets/${files}` }));
      }
    } else if (name === "text") {
      setResult((prev) => ({ ...prev, description: e.target.value }));
    }
  };

  const sendResult = () => {
    if (result.description === "" && result.src === "") {
      setShowAddBlock((prev) => false);
    } else if (result.src === "") {
      alert("добавьте картинку");
    } else if (result.description === "") {
      alert("добавьте имя");
    } else {
      addNewPhotoInRedux(result);
      setShowAddBlock((prev) => false);
      setResult((prev) => ({ ...prev, description: "", src: "" }));
    }
  };

  const closeWindow = (e) => {
    if (closeBlock.current !== null) {
      if (
        e.path.includes(closeBlock.current) ||
        e.path.includes(closeBtn.current)
      ) {
        return;
      } else {
        setShowAddBlock((prev) => false);
      }
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", closeWindow);

    return () => {
      document.body.removeEventListener("click", closeWindow);
    };
  },[]);

  return (
    <>
      <div className="btn" ref={closeBtn}>
        <Button
          width="150px"
          borderRadius="25px"
          height="40px"
          background="orange"
          cursor="pointer"
          color="#fff"
          fontSize="25px"
          textAlign="center"
          padding="2px"
          chnageShowBlock={chnageShowBlock}
        >
          Добавить{" "}
        </Button>
      </div>
      <div
        className={showAddBlock ? "add" : "add add_block_hide"}
        ref={closeBlock}
      >
        <div className="add_main">
          {result.src && (
            <div style={{ margin: "2px auto" }}>
              <img src={result.src} alt="" width="100%"  height="250px"/>
            </div>
          )}
          <label htmlFor="addNewImg" style={{ textAlign: "center" }}>
            <div className="add_main_photo">
              <img src={imgAdd} alt="AddPhotos" width="40px" />

              <div>
                <span>Добавить фото </span>
              </div>
            </div>
          </label>
          <div className="add_description">
            <span>Название</span>
            <div>
              <input
                type="text"
                onChange={(e) => newPhotoInType(e, "text")}
                value={result.description}
                maxLength="15"
              />{" "}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                width="100px"
                height="32px"
                color="#fff"
                borderRadius="20px"
                background="orange"
                textAlign="center"
                padding="4px"
                margin="3px"
                cursor="pointer"
                sendResult={sendResult}
              >
                СОХРАНИТЬ{" "}
              </Button>
              <Button
                width="100px"
                height="32px"
                color="#fff"
                borderRadius="20px"
                background="orange"
                textAlign="center"
                padding="4px"
                margin="3px"
                cursor="pointer"
                closeAddBlock={closeAddBlock}
              >
                ОТМЕНА{" "}
              </Button>
            </div>
          </div>
        </div>

        <input
          type="file"
          onChange={(e) => newPhotoInType(e, "img")}
          id="addNewImg"
        />
      </div>
    </>
  );
}

AddNewPhoto.propTypes={
  addNewPhotoInRedux:PropTypes.func
}

export default AddNewPhoto;
