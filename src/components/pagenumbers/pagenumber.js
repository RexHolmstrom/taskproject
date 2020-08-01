import React from 'react';
import '../pagenumbers/pagenumber.css'

const Pagenumber = props => (
    <div class="elementpagenumbers">
        <div class="background">
        </div>
        <div class="pagenumber">
            <img src="./img/search-results--filters-shape-copy@2x.png" class="shapecopy" />
            <div class="fontsrobotoregular">
                <div class="background1"></div>
                <div class="fontsrobotoregular1">
                    1   3   4   5   6
                </div>
            </div>
            <div class="fontsrobotobold">
                <div class="background1"></div>
                <div class="fontsrobotobold1">
                    2
                </div>
            </div>
            <img src="./img/search-results--filters-shape-copy-2@2x.png" class="shapecopy2" />
            <div class="page">
                PAGE
            </div>
        </div>
    </div>
);

export default Pagenumber;