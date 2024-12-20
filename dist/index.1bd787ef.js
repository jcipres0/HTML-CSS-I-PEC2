const e=document.querySelector(".slider"),t=document.querySelectorAll(".slider-inner");let n=0,l=0,r=100/t.length;setInterval(()=>{!function(){if(l>=t.length-1){l=0,n=0,e.style.transform=`translate(-${n}%)`,e.style.transition="none";return}l++,n+=r,e.style.transform=`translate(-${n}%)`,e.style.transition="all ease .6s"}()},3e3);
//# sourceMappingURL=index.1bd787ef.js.map
