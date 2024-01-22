import { createGlobalStyle } from "styled-components";
import NeueBold from './components/font/NeueBold.otf'
import NeueLight from './components/font/NeueLight.otf'
import NeueMedium from './components/font/NeueMedium.otf'
import NeueItalic from './components/font/NeueItalic.otf'
export default createGlobalStyle`

  @font-face {
    font-family: "NeueBold";
    src: url(${NeueBold}) format('opentype')
  }
  @font-face {
    font-family: "NeueLight";
    src: url(${NeueLight}) format('opentype')
  }
  @font-face {
    font-family: "NeueMedium";
    src: url(${NeueMedium}) format('opentype')
  }
  @font-face {
    font-family: "NeueItalic";
    src: url(${NeueItalic}) format('opentype')
  }


  /* ::-webkit-scrollbar {display:none;} //hide scroll bar  */

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
    font-family: NeueLight;
    
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
    font-size: clamp(16px, 3vw, 24px);
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

  .tall{
    width: 100%;
    margin-bottom:4vw ;
    
    @media (min-width:750px){
      width: 50%;
    }
  }

  
`;
