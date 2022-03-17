import React, { useContext } from "react";
import SearchContext from "../../../context/context";
import { Content } from "../../../styles/bodyStyles/content.style";

const {
  Wrapper,
  Inner,
  Error,
  Card,
  Title,
  AuthorWrapper,
  Author,
  Year,
  Category,
  Description,
} = Content;

const ContentComponent = () => {
  const { filteredList } = useContext(SearchContext);

  return (
    <Wrapper>
      <Inner>
        {filteredList.length === 0 ? (
          <Error>Book not found</Error>
        ) : (
          filteredList.map((book) => (
            <Card key={book.id}>
              <Title>{book.title}</Title>
              <AuthorWrapper>
                <Author>{book.author}</Author>
                <Year>{book.year}</Year>
              </AuthorWrapper>
              <Category>{book.category}</Category>
              <Description>{book.description}</Description>
            </Card>
          ))
        )}
      </Inner>
    </Wrapper>
  );
};

export default ContentComponent;
