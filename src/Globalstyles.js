import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`


  ::-webkit-scrollbar {display:none;} //hide scroll bar 

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    cursor: none;
    
  }

  
  html, body {
    width: 100vw;
    padding: 100px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: content-box; 
    background-color: white;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: Inter;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  img{
    object-fit: cover;
  }

  .back-top{
    all: unset;
    font-size: 24px;
    font-weight: 500;
    margin-top: 50px;

  }

  .layer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    img {
      width: 100%;
      margin-bottom: 4vw;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 4vw;

    .row-img {
      width: 47.5%;
    }
  }

  .full {
    width: 100%;
    margin-bottom: 4vw;
  }

  
`;
