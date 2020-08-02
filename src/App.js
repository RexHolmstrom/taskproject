import React, { Component } from "react";
import "./page.css"
import Elementssearchfieldlogo from "./components/Footer/elementskeletonbasesearchfield"
import Pagenumber from "../src/components/pagenumbers/pagenumber"
import Drawerfilter from "../src/components/drawerfilter/drawerfilter"
import Relatedsearches from '../src/components/relatedsearches/relatedsearches';
import Elementdefinitionbox from '../src/components//elementdefinitionbox/elementdefinitionbox';
import SearchResults from '../src/components/SearchResults/SearchResults'
import PaginacionTabla from '../src/components/Pagination/pagination'



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
        <Relatedsearches />
        <Elementdefinitionbox />
        <div class="rectangle13"></div>
        <div class="rectangle14"></div>
      </div>
    </div>
  );
}



export default App;
