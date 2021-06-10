import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

:root {
  /* colors */
  --primary-100: #cce5d7;
  --primary-500: rgb(0, 125, 53);
  --primary-900: #003215;

  /* grey */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-500: #64748b;
  --grey-900: #0f172a;
  /* rest of the colors */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;

  /* fonts  */
  --defaultFontSize: 87.5%;
  --headingFont: 'Roboto', sans-serif;
  --bodyFont: 'Ariel, Helvetica, sans-serif';
  --smallText: 0.7em;
  /* rest of the vars */
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);
  --borderRadius: 0.5rem;
  --letterSpacing: 1px;
  --transtion: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 600px;

  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

html {
  font-size: var(--defaultFontSize);
}

@media only screen and (min-width: 576px) {
  :root {
    --defaultFontSize: 100%;
  }
}
@media only screen and (min-width: 768px) {
  :root {
    --defaultFontSize: 112.5%;
  }
}

body {
  background: var(--backgroundColor);
  font-family: var(--bodyFont);
  font-weight: 400;
  line-height: 1.75;
  color: var(--textColor);
}

p {
  margin: 0;
  margin-bottom: 1.5rem;
  max-width: 40em;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  margin-bottom: 1.38rem;
  font-family: var(--headingFont);
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small,
.text-small {
  font-size: var(--smallText);
}

a {
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}

.img {
  width: 100%;
  display: block;
  object-fit: cover;
}

/*
===============
Btns
===============
*/

.btn {
  cursor: pointer;
  background: -webkit-linear-gradient(
      top left,
      #007d35 0%,
      #007d35 40%,
      #0f574e 100%
    );
    color: var(--white);
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    padding: 1rem 3rem;
    font-size: 1.6rem;
    border: 2px solid black;
    transition: var(--transition);
}

.btn:hover {
  opacity: 0.8;
  box-shadow: var(--shadow-3);
}

.btn-block {
  width: 100%;
}

/*
===============
Pages
===============
*/

.page {
  min-height: calc(100vh);
}

/*
===============
Section
===============
*/

.section {
  padding: 5rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
@media (min-width: 1400px) {
  .section-center {
    max-width: 1320px;
  }
}

/*
===============
Alerts
===============
*/

.alert {
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  border-color: transparent;
  border-radius: var(--borderRadius);
  margin: 4rem 0;
}

.alert-danger {
  color: var(--red-dark);
  background: var(--red-light);
}
.alert-success {
  color: var(--green-dark);
  background: var(--green-light);
}

/*
======
Loader
======
*/
.loading-container {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  display: grid;
  align-items: center;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--white);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}


`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
