// ==UserScript==
// @name        zolertia
// @namespace   zolertia
// @require     https://code.jquery.com/jquery-3.1.0.min.js
// @include     http://zolertia.sourceforge.net/wiki/index.php*
// @version     1
// @grant       none
// ==/UserScript==

var sidebar = $('div#column-one');
var content = $('div#column-content');

// toggle_sidebar shows or hides the sidebar, updating the "show sidebar"
// button link text to match
function toggle_sidebar() {
		sidebar.hide();
		content.css('float', 'none');
}

// sidebar is hidden by default
toggle_sidebar();