// ==UserScript==
// @name        IEEE
// @namespace   IEEE
// @require     https://code.jquery.com/jquery-3.1.0.min.js
// @include     http://ieeexplore.ieee.org/document/*
// @version     1
// @grant       none
// ==/UserScript==

window.addEventListener('load', function() {
  
  var sidebar = $('div.col-actions');
  var floatbar = $('div.col-buttons');

// toggle_sidebar shows or hides the sidebar, updating the "show sidebar"
// button link text to match
function toggle_sidebar() {
		sidebar.hide();
		floatbar.hide();
}

// sidebar is hidden by default
toggle_sidebar();
  
}, false);