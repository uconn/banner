(()=>{"use strict";document.querySelector("#banner-mobile-button");const e=document.querySelector("#banner-controlled-mobile-menu");document.addEventListener("ucBannerMenuState",(t=>{if(!(e=>"detail"in e)(t))throw new Error("Not a banner menu state event");t.detail.isOpen?null==e||e.classList.add("active"):null==e||e.classList.remove("active")}))})();