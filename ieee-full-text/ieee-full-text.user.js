// ==UserScript==
// @name        ieee full text
// @namespace   ieee full text
// @require     https://code.jquery.com/jquery-3.1.0.min.js
// @include     http://ieeexplore.ieee.org/xpls/icp.jsp?arnumber=*
// @version     1
// @grant       none
// ==/UserScript==

var sidebar = $('div.column-side-left');
var content = $('div.column-main');

// toggle_sidebar shows or hides the sidebar, updating the "show sidebar"
// button link text to match
function toggle_sidebar() {
		sidebar.hide();
	  $('div#article-nav').hide();
		content.css('width', 'auto');
}

// sidebar is hidden by default
toggle_sidebar();