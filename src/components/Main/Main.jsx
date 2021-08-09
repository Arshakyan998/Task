import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Main.scss";
import "./Slider.scss";
import "./addNewPhoto.scss";

import MainTypes from "./MainTypes";
import {
  changeActiveType as changeType,
  createNewType,
  removeImgFromItems,
  addNewPhoto,
} from "../../redux/actions/Main";
import Slider from "./Slider";
import AddNewPhoto from "./AddNewPhoto";
let pos = 0;

function Main() {
  const [activeType, setActiveType] = React.useState("");
  const [removeImg, setRemoveImg] = React.useState(null);

  const [typeState, setTypeState] = React.useState(null);

  const dispatch = useDispatch();

  const { types, currentSrc, currentCat, currentType } = useSelector(
    ({ main }) => {
      return {
        types: main.current,
        currentSrc: main.currentSrc,
        currentCat: main.currentCategory,
        currentType: main.currentType,
      };
    }
  );

  const sliderRefs = React.useRef(null);

  const changeActiveType = (val) => {
    setActiveType(val);
  };

  const changeCat = types && types.find((element) => element.types);

  React.useEffect(() => {
    dispatch(changeType(activeType));
  }, [activeType]);

  React.useEffect(() => {
    setActiveType(changeCat && changeCat.types[0].typeName);

    setTypeState(null);
  }, [currentCat, typeState]);

  const changeTypeState = () => {
    setTypeState(1);
  };

  const addNewType = (val, id) => {
    const result = {
      typeName: val,
      tyepId: id,
      src: [
        {
          id: 1,
          src: "data:image/png;base64,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",
        },
      ],
    };

    dispatch(createNewType(result));
  };

  const romovePhoto = (id) => {
    setRemoveImg(id);
  };

  React.useEffect(() => {
    if (removeImg !== null) {
      dispatch(removeImgFromItems(removeImg));
    }
    setRemoveImg((prev) => null);
  }, [removeImg]);

  const addNewPhotoInRedux = (val) => {
    let id = currentSrc.length + 1;

    currentSrc.forEach((element) => {
      id += element.id;
    });

    const result = {
      src: val.src,
      id: id,
      description: val.description,
    };
    dispatch(addNewPhoto(result));
  };

  const sliderHendler = () => {

   pos +=Math.floor(
    sliderRefs.current.childNodes[0].getBoundingClientRect().width + 25
   ); 
   let currentBlockWidth=Math.floor(
    sliderRefs.current.getBoundingClientRect().width 
   ); 
    
   let CurrentElementWidth=Math.floor(
    sliderRefs.current.childNodes[0].getBoundingClientRect().width + 25
   ); 
    
    sliderRefs.current.childNodes.forEach((element) => {
      element.style.transform = `translateX(-${pos}px)`;
    }); 
  
if (pos > currentBlockWidth-CurrentElementWidth*4) {
      pos = 0;
      sliderRefs.current.childNodes.forEach((element) => {
        element.style.transform = `translateX(-${pos}px)`;
      });
    }
 

  };

  React.useEffect(() => {
    pos=0
    sliderRefs.current.childNodes.forEach((element) => {
      element.style.transform = `translateX(0px)`;
    });

  }, [currentType, currentCat]);

  return (
    <section className="main">
      <div className="main_main_types">
        {types &&
          types.map((element) => {
            return (
              <MainTypes
                key={element.id + 1}
                {...element}
                changeActiveType={changeActiveType}
                addNewType={addNewType}
                activeClass={activeType}
                changeTypeState={changeTypeState}
              />
            );
          })}
        {types.length ? (
          <AddNewPhoto addNewPhotoInRedux={addNewPhotoInRedux} />
        ) : (
          ""
        )}
      </div>
      <div className="main_slider">
        <div className="main_slider_refs" ref={sliderRefs}>
          {currentSrc &&
            currentSrc.map((element) => {
              return (
                <Slider
                  key={element.id}
                  {...element}
                  romovePhoto={romovePhoto}
                  length={currentSrc.length}
                />
              );
            })}
        </div>
        {currentSrc && currentSrc.length >= 5 && (
          <div className="main_slider_next" onClick={sliderHendler}>
            &gt;
          </div>
        )}
      </div>
    </section>
  );
}

export default Main;
