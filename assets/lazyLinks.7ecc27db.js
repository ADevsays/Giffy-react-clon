import{A as a,r,j as s,L as i}from"./index.55644a3d.js";function c(){const n=`https://api.giphy.com/v1/trending/searches?api_key=${a}`;return fetch(n).then(e=>e.json()).then(e=>{const{data:t}=e;return t})}function d(){const[n,e]=r.exports.useState([]);return r.exports.useEffect(()=>{c().then(t=>e(t))},[]),s("div",{className:"d-flex justify-content-center bg-dark text-dark flex-wrap",children:n.map(t=>s(i,{to:`/gif/${t}`,children:t},t))})}export{d as default};
