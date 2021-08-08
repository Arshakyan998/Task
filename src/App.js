import React from 'react';

import Header from "./components/Hrader/Header";
import LargeImg from './components/Main/LargeImg';
import Main from './components/Main/Main';
import SaveProgress from './components/SaveProgres/SaveProgress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Header/>
         </header>
         <section>
         <Main/>
         <LargeImg/>
         <SaveProgress/>
      </section>
    </div>
  );
}

export default App;
