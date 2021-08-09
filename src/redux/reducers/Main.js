let initalState = null
if(localStorage.getItem('item')!==undefined && localStorage.getItem('item')!==null ){
 JSON.parse(localStorage.getItem('item'))

  initalState = {
  item:JSON.parse(localStorage.getItem('item')),
  current: [],
  currentSrc: [],
  currentCategory: "",
  currentType: "",
};

}else{
  initalState = {
    item: [
      {
        category: "design",
        id: 1,
        color: "#F5961B",
        catImg: "../../../assets/Group 1404.svg",
  
        types: [
          {
            typeName: "type1",
            tyepId: 1,
            src: [
              {
                src: "data:image/png;base64,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",
                id: 1,
              },
              {
                src: "https://funik.ru/wp-content/uploads/2018/10/0a37dbac85e134cfb3a5-700x394.jpg",
                id: 2,
                description: "Kartinka1",
              },
            ],
          },
        ],
      },
  
      {
        category: "Animation",
  
        id: 2,
        color: "#12B252",
        catImg: "../../../assets/Group.svg",
        types: [
          {
            typeName: "type1",
            tyepId: 1,
  
            src: [
              {
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEX///91dXWJiYltbW1wcHBvb29qamrR0dH7+/utra2hoaGDg4Pd3d21tbXj4+OSkpLw8PC+vr7q6up6enqampr09PTFxcW5ubmWlpbs7OzW1tbMzMyfn5/f39/qFlSoAAAIEklEQVR4nO1d2YKyOgyGbrJIARF1XN7/NY/Of2acsWntEsQp/W68ss1HkzRJtyxLSEhISEhISEhISEhISEhIcEJRjN1GSrnpxqKYWxhMjJvjrqlaMjBxBxtIWzW742acW7wwjOu+IgOlnDOWP4IxzikdSNWv/ybNcVXWOeUqM4Upp3ldrv4Wy0LuiaDPyf2gSQXZyz9incW6HAR3YPcFLoZy/f4kZVk7Dd7jUNalnJuCCcUuhN43yd27DuRHefUZGKC8/JibDIDLmfkYHwzOzpe5CT1AthbzggsYb9/JIGUrcPl9chRvw7GrJuD3j2PVzU3uhj6fht8nx7yfm14maxz/qQOt51XVsRKT8rtBVDOGrLscb4LQg+e7mfgV22kV9A66nSXKka4eht3Ab7kiA9JF81/zGayxtx/AawYo8pq0h3NVNn1TVudDS+pc2GSPX6CvdqqjpYYyLnJSNSfZPepZ0clTU5FcWNKk25c6HDnYiHUdurZ/ktYWsm+vg2nzsYYXaurOYo7gjOzXlu2t98QmbBcv86n7pwSZIL1bAvTRk+exn9hPxOgB5ROCTOReibos82ckRYnOBsDZ7GMYJUfvto/kSY2AnhGZwChao8EwerA1Phjrg5kjbyee/EdiIsjoNjw1v2yNHDmZdNYYa1Pn4rBB6WVzMFk6qyekWBADQT74298jjoNBVRiZTlENNshYg9lv0RhCV94i9vQLZz1B0eIo6B2bVq+qfCKPWmqnCcZPE/R30kesdJJ5UR/J8HqaglFXa5VmiuhGH4tO80E/oVcb/BhV6ggyvsLu6wdWWk0VyJnGOOgITqShX+i0M/CAO2dsNf1MHkTpw0S2xexGV7KgqL1ooCsnYBY2pKYPUeH1YYCuKEvRTLGAO8hpg9XDEzQ6l4plIhojfGH5S2MlWKa4g5sXrxrBGxpYUSnKrDhqVPQ1NviFSqOoGJlUBXpr/gov+hNbWAyE7wwHM2yyBEaLFvQGCKFNDRKsX79UUsDRTR3aLuzFuHOodlw9wrki0IF6GurRO6jRnLoH27WgvyHcP/4K9jZhgXEFaQb3SJeI0gpxb6SERpEFORvQzTAf1UdhmIGmGORsQP/lboQZFkPQFEP8OjiEwqsmg8MwO4ES+Q8iNISeXwyJIaZIV1xAnfArG2Ix3IB247uWcAZa457xNhbDrAE+O/Osn35An8u3OoLGsIAqRsxvPyo0+wjftQk0htkRcDY+M/T1Y0HqcPAUC5FhdoCMx0e1oMSXeq9OIDLcQIL5pMJAUhFQNUBkCFZVPOIsqL5G/Vd4MRleINHcZ/0SOKnkbYW4DCFLZM6+pgCUlAZsQkBluAYG0TknBxphATLhMsyA1Xbnzw8oqfdc+CkTKkNgTnRVUzByCBAJmWEGSOcYbQF5k7st/wQyQ0jF3LzpXg1owup2yAyBEeBuC9+qQGESYTMMFnAEPlFY1Q6bYQ8omUuFH6jbeSYoX8BmCKR2TjVOwJDDBEJnCDTo5ArVgMbRji0ECmQI+EKH6BtYUAuJ2G5AZwhFbvaGCPxbhMmDzzBTnaHDKKiOKng1DZ+hWld0cPfqakXgXDEFQ2AY7FcwVHGCFyLxGQJhjXWT0Bav0BVRfIbAHpjB1tUApZ5QcSZgCDRpXSg7KgzD1uhgcYIZqt6C2mawO8WGfWv5d0zAUK3vc9uaovpXGrzLeQKGJ0XVrAdCHf5gV1oADEOdl+pMrY0JWKMzLPsea2IBpcUrRQvUBstSd1FYxyWqOKZS3WrKA+vCkBEBBU9bzVenQ9M/NXtAcGDM+dSRGOwIFoqSGkd/PoaqNTE72y5UCzaV8+djqBb3hR1DtUhjXEWej6G6Cm9ZquncvPB8DIFZzW6rz0ZlaKqAzMdQrSYJu8BUnUmNscJ8DNXYyzIyARia8t/5GKo5sD/DyMYwfjuM35fGPx/GH9PEH5fGn1ssID+MP8ePv04Tf60t/npp/DXv+Nct4l97in/9cAFrwPGv48e/FyP+/TTx74lawL62+Pcmxr+/NP49wgvY5x3/Xv34z1vEf2ZmAeee4j+7Fv/5wwWcIY3/HPACznLHfx4//jsVFnAvRvx3myzgfpr47xhawD1R8d/1tYD72kB3+m537oVdsh//vYnx3325gPtLs8ub30GL8OZs9PcIL+Au6Pjv817AnewLuFc//rcRFvC+xQLeKFnAOzPxvxW0gPeeFvBm1wLeXVvA23kLeP9wAW9Yxv8O6QLekl3Ae8BZ/G86Zwt4l3sBb6ubYtQ7OCN7W5Nc7wkzmvf/BCeIRXWQw9PvfSNJRdtLs2coZN8KakEvZwN6NmEUTJd4P4rFRU6q5iS7R6JFJ09NRXKhjz5/gW5fXWbXFTZAmlTkNWkP56ps+qaszoeW1Pl16OzIfRJ8XWHvGzK3l+8f0Rs455+/jn/NX6qhX7DV1HC8XkO/sMttXEQoeP5CH/qIUVfKRISoJg5En0DW06oqrWexwF/oXT2OA1g+gwtV0VXP4y0/fqKathhrD9lOwJGJdn4FvePSPkl7nPnRFmH9GhWXLcebOjhHKBbg46PkOH6V8jLsKOB0KHZ1sLIyWu/mimCsIMsQkld6XuWB16JYl4PwMUkuhnL91sN3RyH3RDgNJaOC7J8ky++GcVXWuU0GeM0e87pczRt8+mJc9xUZKL3lhCqza65I6UCqfv032X1j3Bx3TdWSgYk72EDaqtkdN3+c3G8UxdhtpJSbbiz+lsUlJCQkJCQkJCQkJCQkJCS8Af4D0PF65KD921EAAAAASUVORK5CYII=",
                id: 1,
              },
            ],
          },
          {
            typeName: "type2",
            tyepId: 2,
  
            src: [
              {
                src: "data:image/png;base64,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",
                id: 1,
              },
              {
                src: "https://xaxa-net.ru/uploads/posts/2019-07/1562076597_krasivye-foto-leta_xaxa-net.ru-1.jpg",
                id: 2,
                description: "type 2",
              },
            ],
          },
          {
            typeName: "type3",
            tyepId: 3,
  
            src: [
              {
                src: "data:image/png;base64,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",
                id: 1,
              },
            ],
          },
        ],
      },
    ],
  
    current: [],
    currentSrc: [],
    currentCategory: "",
    currentType: "",
  };
}



const main = (state = initalState, action) => {
  Array.prototype.filterBollean = function (callBack) {
    for (let i = 0; i < this.length; i++) {
      if (callBack(this[i], i, this)) {
        return true;
      } else {
        return false;
      }
    }
  };


  switch (action.type) {
    case "DROW_ITEMS": {
      return {
        ...state,
      };
    }
    case "CHANGE_MAIN_CATEGORY": {
      const filter = state.item.filter(
        (element) => element.category === action.payload
      );

      return {
        ...state,
        current: filter,
        currentCategory: action.payload,
      };
    }

    case "CHANGE_ACTIVE_TYPE": {
      const getCurrentValue = state.current.find((element) => element.types);

      const getCurrnetSrc =
        getCurrentValue &&
        getCurrentValue.types.filter(
          (element) => element.typeName === action.payload
        );

      const result = getCurrnetSrc&&getCurrnetSrc.find((element) => element.src).src;

      return {
        ...state,
        currentSrc: result,
        currentType: action.payload,
      };
    }

    case "CREATE_NEW_TYPE": {
       state.item
        .find((element) => element.category === state.currentCategory)
        .types.push(action.payload);


      return {
        ...state,
      };
    }

    case "REMOVE_IMG_FROM_ITEMS": {
      const filterResult = state.item.filter(
        (element) => element.category === state.currentCategory
      );
      const searchCurrentType = filterResult
        .find((element) => element)
        .types.filter((element) => element.typeName === state.currentType);
      const searchSrc = searchCurrentType
        .find((element) => element)
        .src.filter((element) => element.id !== action.payload);

      filterResult.forEach((element) => {
        element.types.forEach((element1) => {
          if (element1.typeName === state.currentType) {
            element1.src = searchSrc;
          }
        });
      });


      return {
        ...state,
        currentSrc: searchSrc,
      };
    }

    case "ADD_NEW_PHOTO": {
      let serchCat = state.item.filter(
        (element) => element.category === state.currentCategory
      );
      const result = serchCat && serchCat.find((element) => element);
      result &&
        result.types
          .filter((element) => element.typeName === state.currentType)
          .find((element) => element.src.push(action.payload));

      return {
        ...state,
      };
    }
    case "CHANGE_CATEGORY_PARAMS": {
      state.item
        .filter((element) => element.id === action.payload.id)
        .filter((element) => {
          if (action.payload.category) {
          return  element.category = action.payload.category;
          }
          if (action.payload.catImg) {
           return element.catImg = action.payload.catImg;
          }
          if (action.payload.color) {
           return element.color = action.payload.color;
          }
        });

      return {
        ...state,
      };
    }
    case "ADD_NEW_CATEGORY": {
      state.item.push(action.payload);

      return {
        ...state,
      };
    }
    case "REMOVE_CATEGORY": {
      state.item.filter((element) => {
        return element.id !== action.payload;
      });

      for (let i = 0; i < state.item.length; i++) {
        if (state.item[i].id === action.payload) {
          state.item.splice(i, 1);
        }
      }
      let currentCat = state.current.filterBollean(
        (element) => element.id === action.payload
      );

      if (currentCat) {
        return {
          ...state,
          currentSrc: [],
          currentType: "",
          current: [],
          currentCategory: "",
        };
      }

      return {
        ...state,
      };
    }
    case "REMOVE_TYPE": {
      let search = state.item.filter(
        (element) => element.category === state.currentCategory
      );
      let result = search && search.find((element) => element).types;

      for (let i = 0; i < result.length; i++) {
        if (result[i].tyepId === action.payload.typeId) {
          result.splice(i, 1);
        }
      }
      return {
        ...state,
      };
    }

    case "CHANGE_CURRENT_TYPE_NAME": {
      state.item
        .filter((element) => element.category === state.currentCategory)
        .find((element) => element)
        .types.filter((element) => element.tyepId === action.payload.typeId)
        .filter((element) => (element.typeName = action.payload.typeName));


      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default main;
