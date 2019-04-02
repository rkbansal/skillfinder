import React from "react";
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import Result from '../../components/Result';
import "./index.scss";
function SearchResult() {
  return(
    <div className="search-result">
      <div className="nav-heading">
        <Nav />
        <div className="title">
          Search Results
        </div>
        <SearchBar />
      </div>
      <Result />
      <Footer />
    </div>
  )
}

export default SearchResult;