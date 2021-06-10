import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Phrase from './components/Quote';
import Loading from './components/Loading';

const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

function App() {
  const [Quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setQuote(data[0]);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let content;

  if (Quote) {
    content = <Phrase data={Quote} />;
  }

  if (Error) {
    content = <p className="alert alert-danger">{Error}</p>;
  }

  if (isLoading) {
    content = <Loading />;
  }

  return (
    <Container className="page">
      <section className="section section-center">
        <div className="center">
          <img className="img" src={logo} alt="logo" />
          {content}
          <button className="btn" onClick={fetchData}>
            Get a Quote
          </button>
        </div>
      </section>
    </Container>
  );
}

export default App;

const Container = styled.main`
  background: var(--primary-500);
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 200px;
  }
`;
