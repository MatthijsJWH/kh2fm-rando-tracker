"use strict";$$("footer .popup > button").forEach(function(a){a.onclick=function(){a.nextElementSibling.classList.toggle("active")}}),$$("footer .popup > .content").forEach(function(a){a.onmousedown=function(b){a===b.target&&a.classList.remove("active")}}),document.onkeydown=function(a){if("Escape"===a.key){var b;null===(b=$("footer .popup > .content.active"))||void 0===b?void 0:b.classList.remove("active")}};var themeElem=$("#theme");themeElem.checked="dark"===theme,themeElem.onchange=function(a){theme=a.target.checked?"dark":"light",setTheme()};var scrollElem=$("#scroll");try{scrollElem.checked="true"===localStorage.scroll}catch(a){}scrollElem.onchange=function(a){try{localStorage.scroll=a.target.checked}catch(a){}};var columnsElem=$("#columns");try{var _localStorage$columns;columnsElem.value=null!==(_localStorage$columns=localStorage.columns)&&void 0!==_localStorage$columns?_localStorage$columns:null}catch(a){}columnsElem.oninput=function(a){var b=a.target.value,c=$(".grid");c.style.gridTemplateColumns=b?"repeat(".concat(b,", auto)"):null;try{localStorage.columns=b}catch(a){}},columnsElem.oninput({target:columnsElem});var bgInputElem=$("#background");try{var _localStorage$bg;bgInputElem.value=null!==(_localStorage$bg=localStorage.bg)&&void 0!==_localStorage$bg?_localStorage$bg:null}catch(a){}bgInputElem.oninput=function(a){var b=a.target.value;[$(".grid"),$("footer")].forEach(function(a){a.style.background=b}),$$("footer .popup .content .body").forEach(function(a){a.style.background=b});try{localStorage.bg=b}catch(a){}};var atlantica100Acre=$("#atlantica_100_acre");try{atlantica100Acre.checked="true"===localStorage.atlantica100Acre}catch(a){}atlantica100Acre.onchange=function(a){var b=a.target.checked?5:6;[$("#atlantica"),$("#hundred_acre")].forEach(function(a){a.dataset.total=b});try{localStorage.atlantica100Acre=a.target.checked}catch(a){}};
