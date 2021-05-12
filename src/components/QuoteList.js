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
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 300px;
  margin-top: 2rem;

  @media (min-width: 410px) {
    max-width: 400px;
  }
  @media (min-width: 576px) {
    margin-top: 3rem;
    max-width: 500px;
  }
  @media (min-width: 768px) {
    max-width: 700px;
  }
  @media (min-width: 992px) {
    margin-top: 3rem;
    max-width: 800px;
  }
  h1 {
    font-family: Ariel, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 2.5rem;
    font-size: 1.4rem;
    @media (min-width: 576px) {
      font-size: 1.8rem;
    }
    @media (min-width: 992px) {
      padding-left: 4rem;
    }

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
    font-size: 1.6rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;
