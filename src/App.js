import React, { useState, useEffect } from 'react';
import "./page.css"
import Elementssearchfieldlogo from "./components/searchbox/elementskeletonbasesearchfield"
import Pagenumber from "../src/components/pagenumbers/pagenumber"
import Drawerfilter from "../src/components/drawerfilter/drawerfilter"
import Elementsearchresultbox1 from '../src/components/Searchresults/elementsearchresultbox1';
import Elementsearchresultbox2 from '../src/components/Searchresults/elementsearchresultbox2';
import Elementsearchresultbox3 from '../src/components/Searchresults/elementsearchresultbox3';
import Relatedsearches from '../src/components/relatedsearches/relatedsearches';
import Elementdefinitionbox from '../src/components//elementdefinitionbox/elementdefinitionbox';




function App() {

  return (
    <div className="searchresultsfilters">
      <div className="page-wrap">
        <div className="elementskeletonbasesearchfield">
          <Elementssearchfieldlogo />
        </div>
        <Drawerfilter />
        <div class="sortresults">
          SORT RESULTS
        </div>
        <Pagenumber />
        <Elementsearchresultbox1 />
        <Elementsearchresultbox2 />
        <Elementsearchresultbox3 />
        <Relatedsearches />
        <Elementdefinitionbox />
        <div class="rectangle13"></div>
        <div class="rectangle14"></div>
      </div>
    </div>


  );
}



export default App;
