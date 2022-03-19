import React, { useEffect, useState } from "react";
import SearchContext from "../../context/context";
import { Body } from "../../styles/bodyStyles/body.style";
import SearchComponent from "./search/SearchComponent";
import data from "../../data";
import ContentComponent from "./content/ContentComponent";

const { Wrapper, Inner } = Body;

const BodyComponent = () => {
  const [search, setSearch] = useState("");
  const [searchReg, setSearchReg] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let searchTrim = search.replace(/[^a-z0-9 ]/gi, "");
    let searchRegEx = new RegExp(
      searchTrim.toLowerCase().split(" ").join("|"),
      "gim"
    );
    setSearchReg(searchRegEx);
  }, [search]);

  let filteredList = data.filter((book) => {
    let bookValue = "";
    for (let key in book) {
      if (book.hasOwnProperty(key) && book[key] !== "") {
        bookValue += book[key].toString().toLowerCase().trim() + " ";
      }
    }
    return bookValue.match(searchReg);
  });

  return (
    <SearchContext.Provider
      value={{ search, setSearch, filteredList, error, setError }}
    >
      <Wrapper>
        <Inner>
          <SearchComponent />
          <ContentComponent />
        </Inner>
      </Wrapper>
    </SearchContext.Provider>
  );
};

export default BodyComponent;
