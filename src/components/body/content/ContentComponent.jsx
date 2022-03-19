import React, { useEffect, useContext } from "react";
import SearchContext from "../../../context/context";
import {
  Content,
  Year,
  Category,
  Description,
  Author,
} from "../../../styles/bodyStyles/content.style";

const { Wrapper, Inner, ErrorWrapper, Error, Close, Card, Title } = Content;

const ContentComponent = () => {
  const { filteredList, error, setError, setSearch, search } =
    useContext(SearchContext);

  const closeError = () => {
    setSearch("");
    setError(false);
  };
  useEffect(() => {
    if (filteredList.length <= 0 && search.length > 0) setError(true);
  }, [filteredList, search, setError]);
  return (
    <Wrapper>
      <ErrorWrapper>
        <Error error={error}>
          Search returned no results
          <Close onClick={closeError}>Close</Close>
        </Error>
      </ErrorWrapper>
      <Inner>
        {filteredList.map((book) => (
          <Card key={book.id}>
            <Title>{book.title}</Title>
            <Author>
              <span>Author: </span>
              {book.author}
            </Author>

            <Year>
              <span>Year: </span>
              {book.year}
            </Year>
            <Category>
              <span>Category: </span>
              {book.category}
            </Category>
            <Description>
              <span>Description: </span> {book.description}
            </Description>
          </Card>
        ))}
      </Inner>
    </Wrapper>
  );
};

export default ContentComponent;
