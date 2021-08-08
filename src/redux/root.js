import { createStore,combineReducers  } from "redux";

import main from "./reducers/Main";
import showLargeImg from './reducers/LargeImg'

const root=combineReducers({
        main,
        showLargeImg
})

const store=createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store