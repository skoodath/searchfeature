import React, { useContext } from "react";
import SearchContext from "../../../context/context";
import { Search } from "../../../styles/bodyStyles/search.style";

const { Wrapper, Form, SearchWrapper, Input, ButtonWrapper, ResetButton } =
  Search;

const SearchComponent = () => {
  const { search, setSearch } = useContext(SearchContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
  };

  return (
    <Wrapper>
      <Form>
        <SearchWrapper>
          <Input type="text" value={search} onChange={handleSearch} />
        </SearchWrapper>
        <ButtonWrapper>
          <ResetButton type="reset" onClick={handleClear}>
            Clear
          </ResetButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default SearchComponent;
