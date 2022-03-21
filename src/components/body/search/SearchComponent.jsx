import React, { useContext, useRef } from "react";
import SearchContext from "../../../context/context";
import { Search } from "../../../styles/bodyStyles/search.style";

const { Wrapper, Form, SearchWrapper, Input, ResetButton } = Search;

const SearchComponent = () => {
  const { search, setSearch, error, setError } = useContext(SearchContext);

  const searchRef = useRef(null);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    setError(false);
  };

  const handleClear = () => {
    setSearch("");
    setError(false);
  };

  return (
    <Wrapper>
      <Form>
        <SearchWrapper>
          <Input
            type="text"
            value={search}
            onChange={handleSearch}
            error={error}
            ref={searchRef}
          />
          <ResetButton type="reset" onClick={handleClear}>
            Clear
          </ResetButton>
        </SearchWrapper>
      </Form>
    </Wrapper>
  );
};

export default SearchComponent;
