let template = [
  '<div class="alert">',
    '<span>whatever</span>',
  '</div>'
].join('');


console.log(template);



let templateES6 = `
  <div class="alert">,
    <span>whatever</span>,
  </div>`;


console.log(templateES6);

// ziemlich cool für VueJS templates
let name ='Foo';
let templateES6_templateStrings = `
  <div class="alert">,
    <span>${name}</span>,
  </div>`.trim();


console.log(templateES6_templateStrings);
