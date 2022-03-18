import styled from "styled-components";

export const Content = {
  Wrapper: styled.section`
    height: 100%;
    padding: 1rem;
  `,
  Inner: styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  `,
  Card: styled.article`
    background-color: #f1f3ff;
    width: 250px;
    margin: 0 1rem 1rem 0;
    padding: 1rem;
  `,
  Title: styled.h2``,
  Error: styled.div``,
  AuthorWrapper: styled.div``,
  Author: styled.span``,
  Year: styled.span``,
  Category: styled.div``,
  Description: styled.p``,
};
