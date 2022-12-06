(()=>{"use strict";!function(){var e,t,n,o,r,a,l,c,i=Array.from(document.querySelectorAll("main form")),u=Array.from(document.querySelectorAll("select")),s=Array.from(document.querySelectorAll("input[type=radio]")),d=[].concat(u,s),m=Array.from(document.querySelectorAll(".download-button"));function y(e){document.documentElement.style.setProperty("--container-width","".concat(e,"px")),localStorage.setItem("width",e)}function v(e){Array.from(document.querySelectorAll(".data-width")).map((function(t){t.innerHTML="".concat(e,"px")}))}[{key:"theme",value:"blue"},{key:"width",value:768},{key:"title",value:"University Communications"},{key:"abbrev",value:"UComm"},{key:"site-title-display",value:"block"},{key:"level-one-title",value:"UConn Banner"},{key:"level-two-title",value:"University Communications"}].map((function(e){var t=e.key,n=e.value;return!localStorage.getItem(t)&&(localStorage.setItem(t,n),!0)})),function(){if(document.querySelector("#uconn-banner").classList.contains("alternative")){var e=localStorage.getItem("title"),t=localStorage.getItem("abbrev");document.querySelector("#university-of-connecticut").innerText=e,document.querySelector("#site-title-input").value=e,document.querySelector("#site-abbreviation").innerText=t,document.querySelector("#site-abbrev-input").value=t}}(),e=localStorage.getItem("theme"),t=document.querySelector("#banner-theme-form input[value=".concat(e,"]")),document.querySelector("#uconn-header-container").classList.add(e),t.setAttribute("checked","checked"),n=localStorage.getItem("width"),document.querySelector("#container-width").value=n,y(n),v(n),o=document.querySelector("#site-titles"),r=localStorage.getItem("site-title-display"),a=document.querySelector("#site-title-toggle input[value=".concat(r,"]")),o.style.display=r,a.setAttribute("checked","checked"),l=localStorage.getItem("level-one-title"),c=localStorage.getItem("level-two-title"),document.querySelector("#level-one-input").value=l,document.querySelector("#level-two-input").value=c,document.querySelector("#uc-site-title a").innerText=l,document.querySelector("#uc-site-parent a").innerText=c,i.map((function(e){e.addEventListener("submit",(function(e){switch(e.preventDefault(),e.target.id){case"container-width-form":var t=e.target.querySelector("#container-width").value;y(t),v(t);break;case"site-title-form":var n=e.target.querySelector("#site-title-input").value,o=e.target.querySelector("#site-abbrev-input").value,r=e.target.querySelector("#level-one-input").value,a=e.target.querySelector("#level-two-input").value;S({key:"title",selector:"#university-of-connecticut",text:n}),S({key:"abbrev",selector:"#site-abbreviation",text:o}),S({key:"level-one-title",selector:"#uc-site-title a",text:r}),S({key:"level-two-title",selector:"#uc-site-parent a",text:a})}}))})),d.map((function(e){e.addEventListener("change",(function(e){switch(e.target.id){case"standard-theme":case"inverted-theme":g(e.target.value);break;case"site-titles-display":case"site-titles-hide":h(e.target.value)}}))})),m.map((function(e){e.addEventListener("click",(function(e){switch(e.target.id){case"download-banner-html":case"download-levels-html":var t=e.target.getAttribute("data-element");f(t);break;case"download-banner-styles":b()}}))}));var S=function(e){var t=e.text,n=e.selector,o=e.key;document.querySelector("".concat(n)).innerHTML=t,localStorage.setItem(o,t)},g=function(e){var t=document.querySelector("#uconn-header-container");"white"===e?t.classList.add("white"):t.classList.remove("white"),localStorage.setItem("theme",e)},h=function(e){document.querySelector("#site-titles").style.display=e,localStorage.setItem("site-title-display",e)},f=function(e){var t=document.querySelector("#".concat(e)),n=t.innerHTML,o=new Blob([n],{type:"text/plain"}),r=URL.createObjectURL(o),a=document.createElement("a");a.href=r,a.download="".concat(t.id,".html"),a.click()},b=function(){var e=document.createElement("a"),t="banner.css";e.href="".concat(window.location.origin,"/").concat(t),e.download=t,e.click()}}()})();