import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types'

import {
  removeType as deleteType,
  changeCurrentTypeName as changeCurrentTypeParams,
} from "../../redux/actions/Main";

function MainTypes({
  types,
  changeActiveType,
  addNewType,
  activeClass,
  changeTypeState,
}) {
  const [showAddBlock, setShowAddBlock] = React.useState(false);
  const [newTypeName, setNewTypeName] = React.useState("");
  const [fullId, setFulltId] = React.useState([]);
  const [typeNames, setTypeNames] = React.useState([]);

  const [editTypeBlock, setEditTypeBlock] = React.useState(false);

  const [typeNameEdit, setTypeNameEdit] = React.useState("");

  const closeBlock = React.useRef(null);
  const closeEdite = React.useRef(null);
  const closeAddBlock = React.useRef(null);

  const dispatch = useDispatch();
  React.useEffect(() => {
    types.forEach((element) => {
      setFulltId((prev) => [...prev, element.tyepId]);
    });
  }, [types.length]);

  React.useEffect(() => {
    let names = [];
    types.forEach((element) => {
      names.push(element.typeName);
    });
    setTypeNames((prev) => [...names]);
  }, [types.length, activeClass]);

  const activeType = (name) => {
    changeActiveType(name);
  };

  const showAddNewtypeBlock = () => {
    setShowAddBlock((prev) => !prev);
  };

  const typeName = (e) => {
    setNewTypeName((prev) => e.target.value);
  };

  const sendResult = () => {
    let id = types.length + 1;
    if (newTypeName === "") {
      setShowAddBlock((prev) => false);
      return;
    }
    if (typeNames.includes(newTypeName)) {
      alert(`тип ${newTypeName} уже существует `);
    } else {
      fullId.forEach((element) => {
        id += element;
      });
      addNewType(newTypeName, id);
      setNewTypeName((prev) => "");
      setShowAddBlock((prev) => false);
    }
  };

  const removeType = (id, name) => {
    const result = {
      typeId: id,
      typeName: name,
    };
    if (window.confirm(`Вы действительно хотите удалить ${name}`)) {
      dispatch(deleteType(result));
      changeTypeState();
    }
  };
  const showEditTypeBlock = () => {
    setEditTypeBlock((prev) => !prev);
  };

  React.useEffect(() => {
    setEditTypeBlock(false);
  }, [activeClass]);

  const changeCurrentTypeName = (e) => {
    setTypeNameEdit((prev) => e.target.value);
  };

  const sendTypeName = (id) => {
    if (typeNameEdit === "") {
      setEditTypeBlock(false);
    } else if (typeNameEdit === activeClass) {
      setEditTypeBlock(false);
    } else if (typeNames.includes(typeNameEdit)) {
      alert(`тип ${typeNameEdit} уже существует `);
    } else {
      const result = {
        typeName: typeNameEdit,
        typeId: id,
      };

      dispatch(changeCurrentTypeParams(result));
      setTypeNameEdit((prev) => "");
      setEditTypeBlock(false);
    }
  };

  const closeWindow = (e) => {
    if (closeBlock.current !== null) {
      if (
        e.path.includes(closeBlock.current) ||
        e.path.includes(closeEdite.current)
      ) {
        return;
      } else {
        setEditTypeBlock(false);
      }
    }

    if (e.path.includes(closeAddBlock.current)) {
      return;
    } else {
      setShowAddBlock((prev) => false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", closeWindow);

    return () => {
      document.body.removeEventListener("click", closeWindow);
    };
  }, []);

  const sendResultKeyPress = (e) => {
    if (e.key === "Enter") {
      sendResult();
    }
  };

  return (
    <div className="main_types">
      {types.map((element) => {
        return (
          <div
            className={
              activeClass === element.typeName
                ? "main_divs active"
                : "main_divs"
            }
            key={element.tyepId}
            onClick={() => {
              activeType(element.typeName);
            }}
          >
            {element.typeName}
            {element.typeName === activeClass && (
              <div className="main_divs_edit_remove" ref={closeBlock}>
                <div ref={closeEdite}>
                  {editTypeBlock ? (
                    <span onClick={() => sendTypeName(element.tyepId)}>
                      &#10004;
                    </span>
                  ) : (
                    <span onClick={showEditTypeBlock}>&#9998;</span>
                  )}
                  {editTypeBlock && (
                    <div className="main_divs_edit_block">
                      <input
                        type="text"
                        placeholder={activeClass}
                        maxLength="10"
                        value={typeNameEdit}
                        onChange={changeCurrentTypeName}
                      />
                    </div>
                  )}
                </div>
                {types.length > 1 && (
                  <div
                    onClick={() => removeType(element.tyepId, element.typeName)}
                  >
                    &#10008;
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
      <div className="main_new_type" ref={closeAddBlock}>
        {showAddBlock ? (
          <span onClick={sendResult}>&#10004;</span>
        ) : (
          <span onClick={showAddNewtypeBlock}>&#10010;</span>
        )}

        <div className={showAddBlock ? "main_new_type_input_blcok" : "hide"}>
          <input
            type="text"
            onChange={typeName}
            value={newTypeName}
            maxLength="10"
            onKeyPress={sendResultKeyPress}
          />
        </div>
      </div>
    </div>
  );
}

MainTypes.propTypes={
  types:PropTypes.array.isRequired,
  changeActiveType:PropTypes.func.isRequired,
  addNewType:PropTypes.func.isRequired,
  activeClass:PropTypes.string,
  changeTypeState:PropTypes.func,
}

export default MainTypes;
