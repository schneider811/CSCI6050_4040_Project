import './index.css';
import reportWebVitals from './reportWebVitals';
import renderSite from './RenderElements/render'

let root = renderSite(0);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default root