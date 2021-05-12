import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import styled from '@emotion/styled';
import styled from 'styled-components';
import QuoteList from './components/QuoteList';

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const URL_API = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

    const response = await fetch(URL_API);
    const data = await response.json();
    setQuote(data[0]);
  };
  return (
    <Contenedor>
      <Wrapper src={logo} alt="" />
      <QuoteList data={quote} />
      <Boton onClick={fetchData}>Get a Quote</Boton>
    </Contenedor>
  );
}

export default App;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  flex-direction: column;
  background: rgb(0, 125, 53);
  background: linear-gradient(
    0deg,
    rgba(0, 125, 53, 1) 0%,
    rgba(0, 125, 53, 1) 40%,
    rgba(15, 87, 78, 1) 100%
  );

  @media (min-width: 992px) {
    padding-top: 5rem;
  }
`;

const Wrapper = styled.img`
  width: 150px;
  margin-top: -10px;
  @media (min-width: 992px) {
    margin-top: 0px;
    width: 250px;
  }
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Ariel, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding: 1rem 3rem;
  font-size: 1.6rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  @media (min-width: 992px) {
    font-size: 2rem;
  }

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;
