import React from 'react'
import Pagenumber from '../pagenumbers/pagenumber'
import SearchResult from '../Searchresult/SearchResult'



function SearchResults() {

    const searchResults = 23

    const resultsPerPage = 5
    const totalPages = Math.ceil(searchResults / resultsPerPage)
    let currentPage = 0

    let startIdx = resultsPerPage * currentPage
    let endIdx = (resultsPerPage * currentPage) + resultsPerPage

    return (
        <div>
            {searchResults.splice(startIdx, endIdx).map((result, index) => (
                <SearchResult key={index} result={result} />
            ))}
            {totalPages.map((page, index) => (
                <Pagenumber index={index} key={index} />
            ))}
        </div>
    );
}

export default SearchResults
