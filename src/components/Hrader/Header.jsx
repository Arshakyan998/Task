import React from "react";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  main,
  changeMainCategory,
  addNewCategory,
  removeCategory as deleteCategory,
} from "../../redux/actions/Main";
import HeaderCategory from "./HeaderCategory";

const defaultImg =
  "data:image/png;base64,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";

function Header() {
  const [activeCategory, setActiveCategory] = React.useState("");
  const [color, setColor] = React.useState([]);
  const [activeCat, setActiveCat] = React.useState(null);

  const [showAddBlock, setShowAddBlokc] = React.useState(false);

  const checkClick = React.useRef(null);
  const closeLabelBlock=React.useRef(null)

  const [resultNewCategory, setResultNewCategory] = React.useState({
    category: "",
    id: null,
    color: "#ff9999",
    catImg: "",
    types: [
      {
        typeName: "type 1",
        tyepId: 1,
        src: [{ src: defaultImg, id: 1 }],
      },
    ],
  });

  const [idSum, setIdSum] = React.useState([]);

  const [catNames, setCatNames] = React.useState([]);

  const [activeEditBlock, setActiveEditBlock] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(main());
  }, []);

  const { items } = useSelector((state) => {
    return {
      items: state.main.item,
    };
  });

  React.useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
  }, []);

  React.useEffect(() => {
    let colors = [];

    items.forEach((element) => {
      colors.push(element.color);
      setColor((prev) => [...colors]);
    });
  }, [activeEditBlock, items.length]);

  const changeActiveCat = (val) => {
    setActiveCategory(val);
  };

  React.useEffect(() => {
    dispatch(changeMainCategory(activeCategory));
  }, [activeCategory]);

  React.useEffect(() => {
    const names = [];
    items.forEach((element) => {
      names.push(element.category);
    });

    setCatNames((prev) => names);
  }, [items.length]);

  const ActiveCat = (i) => {
    setActiveCat(i);
  };

  const showBlock = () => {
    setShowAddBlokc((prev) => !prev);
  };

  const addImgForCategory = (e) => {
    items.forEach((element) => {
      setIdSum((prev) => [...prev, element.id]);
    });
    let sum = items.length;
    idSum.forEach((element) => {
      sum += element;
    });
    const imgPath = e.target.files[0] && e.target.files[0].name;

    if (imgPath) {
      setResultNewCategory((prev) => ({
        ...prev,
        catImg: `../../../assets/${imgPath}`,
        id: sum + 1,
      }));
    }
  };

  const changeColor = (e) => {
    setResultNewCategory((prev) => ({ ...prev, color: e.target.value }));
  };

  const nameNewCat = (e) => {
    setResultNewCategory((prev) => ({ ...prev, category: e.target.value }));
  };
  React.useEffect(() => {
    setColor((prev) => [...prev, resultNewCategory.color]);
  }, [activeEditBlock, items.length]);

  const addNewCategoryInRedux = () => {
    setColor((prev) => [...prev, resultNewCategory.color]);

    if (resultNewCategory.catImg === "" && resultNewCategory.category === "") {
      setShowAddBlokc((prev) => !prev);
    } else if (resultNewCategory.category === "") {
      alert("Добавьте имя");
    } else if (resultNewCategory.catImg === "") {
      alert("Добавьте картинку");
    } else if (catNames.includes(resultNewCategory.category)) {
      alert(`${resultNewCategory.category} Имя уже существует`);
    } else {
      dispatch(addNewCategory(resultNewCategory));
      setShowAddBlokc((prev) => !prev);
      setResultNewCategory((prev) => ({
        ...prev,
        category: "",
        id: null,
        color: "#ff9999",
        catImg: "",
        types: [
          {
            typeName: "type 1",
            tyepId: 1,
            src: [{ src: defaultImg, id: 1 }],
          },
        ],
      }));
    }
  };

  const removeCategory = (id) => {
    dispatch(deleteCategory(id));
  };

  const closeBlock = (e) => {
    if (checkClick.current !== null) {
      if (!e.path.includes(checkClick.current)) {
        setShowAddBlokc((prev) => (prev = false));
      }
    }
  };
  React.useEffect(() => {
    document.body.addEventListener("click", closeBlock);

    return () => document.body.removeEventListener("click", closeBlock);
  }, []);

  const editBlcok = (val) => {
    setActiveEditBlock((prev) => (prev = val));
  };

 
  return (
    <header className="header_header">
      <h1>3D студия</h1>
      <h2>Процесы</h2>
      <div className="header_main" ref={closeLabelBlock}>
        {items.map((element, i) => {
          return (
            <HeaderCategory
              key={element.id}
              id={element.id}
              category={element.category}
              changeActiveCat={changeActiveCat}
              color={color}
              ActiveCat={ActiveCat}
              activeCat={activeCat}
              catImg={element.catImg}
              i={i}
              length={items.length}
              deleteCategory={removeCategory}
              editBlcok={editBlcok}
              activeEditBlock={activeEditBlock}
              catNames={catNames}
              closeLabelBlock={closeLabelBlock}
            />
          );
        })}
        <div
          className="header_main_add"
          style={{ background: color[color.length - 1] }}
          ref={checkClick}
        >
          {showAddBlock ? (
            <span onClick={addNewCategoryInRedux}>&#10004;</span>
          ) : (
            <span onClick={showBlock}>+</span>
          )}
          <div className={showAddBlock ? "header_main_add_block" : "none"}>
            <div>
              <div>
                <input
                  type="file"
                  style={{ position: "absolute", visibility: "hidden" }}
                  id="catImg"
                  onChange={addImgForCategory}
                />
                <label htmlFor="catImg">
                  {" "}
                  {resultNewCategory.catImg ? (
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
                  onChange={nameNewCat}
                  style={{ color: resultNewCategory.color }}
                  value={resultNewCategory.category}
                />
              </div>
            </form>

            <div className="header_main_add_block_color">
              <input
                type="color"
                onChange={changeColor}
                value={resultNewCategory.color}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
