/**
<div>
  <p>Lorem, ipsum dolor. <span>Span text</span> Some thing else.</p>
  <button>Click Me</button>
</div>
 */

// How to insertBefore and delete elements

const div = document.querySelector("div");
const para = document.querySelector("p");
const button = document.querySelector("button");

let span = para.children[0];

para.remove();
// div.appendChild(span);
div.insertBefore(span, button);