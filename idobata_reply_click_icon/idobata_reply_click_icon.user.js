// ==UserScript==
// @name        Idotaba Easy Reply
// @namespace   
// @description At Idobata, reply work add to textarea for click user icon
// @includes    https://idobata.io/*
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
