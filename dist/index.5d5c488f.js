var t=document.querySelector(".slider"),e=document.querySelectorAll(".slider-inner"),n=0,r=0,l=100/e.length;setInterval(function(){!function(){if(r>=e.length-1){r=0,n=0,t.style.transform="translate(-".concat(n,"%)"),t.style.transition="none";return}r++,n+=l,t.style.transform="translate(-".concat(n,"%)"),t.style.transition="all ease .6s"}()},3e3);
//# sourceMappingURL=index.5d5c488f.js.map
