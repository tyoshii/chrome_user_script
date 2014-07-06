// ==UserScript==
// @name        At Idobata, reply work add to textarea for click user icon
// @namespace   
// @description 
// @includes    https://idobata.io/
// @excludes    
// @version     1.0.0
// ==/UserScript==

window.onload = function(){
  $("li p.icon img").click(function() {
    var name = $(this).parents("li").find("div.message div.header div.name").text();
    var area = $("div.room-content textarea");
    area.focus().val("@"+name+" ");
  });
}
