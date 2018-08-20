'use strict';

var menuItems = document.querySelectorAll('li.has-submenu');
Array.prototype.forEach.call(menuItems, function(el, i){
  var btn = '<button><span><span class="visuallyhidden">show submenu</span></span></button>';
  var topLevelLink = el.querySelector('a');
  topLevelLink.innerHTML = topLevelLink.innerHTML + ' ' + btn;

  el.querySelector('a button').addEventListener('click',  function(event){
    if (this.parentNode.parentNode.className == 'has-submenu') {
      this.parentNode.parentNode.className = 'has-submenu open';
      this.parentNode.setAttribute('aria-expanded', 'true');
      this.querySelector('.visuallyhidden').innerText = 'hide submenu';
    } else {
      this.parentNode.parentNode.className = 'has-submenu';
      this.parentNode.setAttribute('aria-expanded', 'false');
      this.querySelector('.visuallyhidden').innerText = 'show submenu';
    }
    event.preventDefault();
  });
});