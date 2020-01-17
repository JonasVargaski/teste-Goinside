import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
  margin:   0;
  padding:   0;
  outline:0;
  box-sizing: border-box;
}

body,
input  ,
button {
  font-family: 'Roboto', sans-serif;
}

html,
body,
#root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #e5e6f0;
  overflow: auto;
  overscroll-behavior: contain !important;
}

@media only screen and (min-width: 680px) {
  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #c3c3c3;
    border: 2px solid #eee;

    &:hover {
      background-color: #9d9d9d;
    }
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }
}`;
