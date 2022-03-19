import React, { useContext } from "react";
import SearchContext from "../../../context/context";
import { Search } from "../../../styles/bodyStyles/search.style";

const { Wrapper, Form, SearchWrapper, Input, ResetButton } = Search;

const SearchComponent = () => {
  const { search, setSearch, error, setError } = useContext(SearchContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
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
