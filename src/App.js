import React, { Component } from "react";
import "./page.css"
import Elementssearchfieldlogo from "./components/Footer/elementskeletonbasesearchfield"
import Pagenumber from "../src/components/pagenumbers/pagenumber"
import Drawerfilter from "../src/components/drawerfilter/drawerfilter"
import Relatedsearches from '../src/components/relatedsearches/relatedsearches';
import Elementdefinitionbox from '../src/components//elementdefinitionbox/elementdefinitionbox';
import SearchResults from '../src/components/Searchresult/SearchResult';
import PaginacionTabla from '../src/components/Pagination/pagination'
import Pagination from '../src/components/Pagination/pagination';
import NamesList from './components/searchfilter/NameList'



function App() {


  return (
    <div className="searchresultsfilters">
      <div className="page-wrap">
        <div className="elementskeletonbasesearchfield">
          <Elementssearchfieldlogo />
        </div>
        <Drawerfilter /> {/*<-- this is the "Sort Result" section that I was going to implement in the NameList function. */}
        <div class="sortresults">
          SORT RESULTS
        </div>
        {/* <Pagination /> <- this is the pagination*/}
        {/* <NamesList /> <- this is filter on the search*/}
        <SearchResults />
        <Relatedsearches />
        <Elementdefinitionbox />
        <div class="rectangle13"></div>
        <div class="rectangle14"></div>
      </div>
    </div>
  );
}



export default App;
