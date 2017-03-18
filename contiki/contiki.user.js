// ==UserScript==
// @name        Hide Contiki Sidebar
// @namespace   Hide Contiki Sidebar
// @require     https://code.jquery.com/jquery-3.1.0.min.js
// @include     http://anrg.usc.edu/contiki/*
// @version     1
// @grant       none
// ==/UserScript==

var sidebar = $('div#mw-navigation');
var content = $('div#content');

// toggle_sidebar shows or hides the sidebar, updating the "show sidebar"
// button link text to match
function toggle_sidebar() {
		sidebar.hide();
		content.css('margin-left', '0px');
}

// sidebar is hidden by default
toggle_sidebar();