import React from 'react';
import '..//drawerfilter/drawerfilter.css'

const Drawerfilter = props => (

    <div class="drawerfilter4pcs">
        <div class="background">
        </div>
        <div class="locationfilter">
            <div class="rectangle5copy9"></div>
            <div class="rectangle5copy5"></div>
            <div class="title">Location</div>
            <div class="arrowopendrawersmall">
                <div class="background1"></div>
                <img src="./img/search-results--filters-shape 1@2x.png" class="shape" />
            </div>
            <div class="togglelist">
                <div class="a4thline">
                    <br />
                    <br />
                    <br />
                            New York</div>
                <div class="a3rdline"><br /><br />Berlin</div>
                <div class="a2ndline"><br />Stockholm</div>
                <div class="a1stline"> All Cities</div>

                <div class="checkboxfilterdeactive">
                    <div class="background1"></div>
                    <img src="./img/search-results--filters-oval-3-copy-10 1.png" class="oval3copy10" />
                </div>

                <div class="checkboxfilterdeactive1">
                    <div class="background1"></div>
                    <img src="./img/profile-main-oval-3-copy-9@2x.png" class="oval3copy9" />
                </div>

                <div class="checkboxfilterdeactive2">
                    <div class="background1"></div>
                    <img src="./img/search-results--filters-oval-3-copy-10 1.png" class="oval3copy10" />
                </div>

                <div class="checkboxfilteractive">
                    <div class="background1"></div>
                    <img src="./img/search-results--filters-oval-3-copy-10 1.png" class="oval3copy10" />
                </div>


            </div>
        </div>
    </div>
);

export default Drawerfilter;
