'use strict';

var template = ['<div class="alert">', '<span>whatever</span>', '</div>'].join('');

console.log(template);

var templateES6 = '\n  <div class="alert">,\n    <span>whatever</span>,\n  </div>';

console.log(templateES6);

var name = 'Foo';
var templateES6_templateStrings = ('\n  <div class="alert">,\n    <span>' + name + '</span>,\n  </div>').trim();

console.log(templateES6_templateStrings);