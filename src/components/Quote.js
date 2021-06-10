import React from 'react';
import styled from '@emotion/styled';

const QuoteList = ({ data }) => {
  if (Object.keys(data).length === 0) return null;

  return (
    <Container>
      <h1>{data.quote}</h1>
      <p>{data.author}</p>
    </Container>
  );
};

export default QuoteList;

const Container = styled.div`
  padding: 1.5rem;
  border-radius: var(--borderRadius);
  background-color: var(--white);
  max-width: 95%;
  margin-top: 2rem;

  h1 {
    font-family: Ariel, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 2.5rem;
    font-size: 16px;
    &::before {
      content: open-quote;
      font-size: 7rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
      @media (min-width: 992px) {
        font-size: 10rem;
      }
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 14px;
    text-align: right;
    color: var(--grey-500);
    margin-top: 2rem;
  }

  @media (min-width: 992px) {
    padding: 3rem;
    max-width: 75%;
    h1 {
      font-size: 21px;
    }
    p {
      font-size: 18px;
    }
  }
`;
