import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types'

import { changeCategoryParams as changeCatParams } from "../../redux/actions/Main";

function HeaderCategory({
  category,
  changeActiveCat,
  catImg,
  length,
  color,
  ActiveCat,
  deleteCategory,
  activeCat,
  editBlcok,
  activeEditBlock,
  closeLabelBlock,
  catNames,
  id,
  i,
}) {
  const [result, setResult] = React.useState({
    category: "",
    id: null,
    color: "",
    catImg: "",
  });

  const dispatch = useDispatch();

  const activeCategory = () => {
    changeActiveCat(category);
    ActiveCat(category);
  };
  const showBlock = () => {
    editBlcok(category);
  };

  const removeCategory = () => {
    if (
      window.confirm(`Вы действительно хотите удалить категорию ${category}`)
    ) {
      deleteCategory(id);
    }
  };

  const changeCategoryParams = (e, name) => {
    if (name === "category") {
      setResult((prev) => ({ ...prev, category: e.target.value }));
    }
    if (name === "color") {
      setResult((prev) => ({ ...prev, color: e.target.value }));
    }
    if (name === "file") {
      const imgPath = e.target.files[0] && e.target.files[0].name;

      if (imgPath) {
        setResult((prev) => ({
          ...prev,
          catImg: `../../../assets/${imgPath}`,
        }));
      }
    }
    setResult((prev) => ({ ...prev, id: id }));
  };

  const editCatResult = () => {
    if (result.category === "" && result.color === "" && result.catImg === "") {
      editBlcok(null);
    } else if (catNames.includes(result.category)) {
      alert(`Категория с именим ${result.category} уже существует `);
    } else {
      dispatch(changeCatParams(result));
      editBlcok(null);
      setResult((prev) => ({
        ...prev,
        category: "",
        id: null,
        color: "",
        catImg: "",
      }));
    }
  };

  const closeActiveBlock = (e) => {
    if (e.path.includes(closeLabelBlock.current)) {
      return;
    } else {
      editBlcok(null);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", closeActiveBlock);

    return () => document.body.removeEventListener("click", closeActiveBlock);
  }, []);

  return (
    <div className="header_category">
      <div className="header_category_main" onClick={activeCategory}>
        <div className="header_category_main_img">
          <img src={catImg} alt="Некоректный путь" width="50px" height="50px" />
        </div>

        <div
          style={{
            background: `linear-gradient(to right, ${color[i]}, ${
              color[i + 1]
            }) `,
          }}
        >
          <div
            style={
              activeCat === category
                ? {
                    background: color[i],
                    boxShadow: `0px 0px 14px 7px ${color[i]}`,
                  }
                : { background: color[i] }
            }
            onClick={activeCategory}
          ></div>
        </div>
        <span
          style={{
            width: "20px",
            margin: "3px",
            height: "10px",
            textAlign: "left",
          }}
        >
          {category}
        </span>
      </div>

      <div className="header_category_edit_remove">
        <div className="header_category_edit_remove_edite_block">
          {activeEditBlock === category ? (
            <span onClick={editCatResult}>&#10004;</span>
          ) : (
            <span onClick={showBlock}>&#9998;</span>
          )}
        </div>
        {length > 1 && (
          <div
            className="header_category_edit_remove_remove_block"
            onClick={removeCategory}
          >
            &#10008;
          </div>
        )}
      </div>
      <div
        className={
          activeEditBlock === category ? "header_category_edit_block" : "none"
        }
      >
        <div>
          <div>
            <input
              type="file"
              style={{ position: "absolute", visibility: "hidden" }}
              id={`editCategory${id}`}
              onChange={(e) => changeCategoryParams(e, "file")}
            />
            <label htmlFor={`editCategory${id}`}>
              {" "}
              {result.catImg.length ? (
                <span>&#10004;</span>
              ) : (
                <span>+</span>
              )}{" "}
            </label>
          </div>
        </div>
        <form>
          <div>
            {" "}
            <input
              type="text"
              maxLength="10"
              onChange={(e) => changeCategoryParams(e, "category")}
              style={{ color: result.color }}
              value={result.category}
            />
          </div>
        </form>

        <div>
          <input
            type="color"
            onChange={(e) => changeCategoryParams(e, "color")}
            value={result.color}
          />
        </div>
      </div>
    </div>
  );
}

HeaderCategory.propTypes={
  category:PropTypes.string.isRequired,
  changeActiveCat:PropTypes.func,
  catImg:PropTypes.string,
  length:PropTypes.number,
  color:PropTypes.array,
  ActiveCat:PropTypes.func.isRequired,
  deleteCategory:PropTypes.func,
  activeCat:PropTypes.string,
  editBlcok:PropTypes.func,
  activeEditBlock:PropTypes.string,
  catNames:PropTypes.array,
  id:PropTypes.number.isRequired,
  i:PropTypes.number,
}

export default HeaderCategory;
