let btnGroup = document.querySelector('.button-layout');
let buttons = document.querySelectorAll('.button');
let title = document.querySelector('h2');

function splitText(textEl) {
  if(!textEl || !textEl.innerHTML) {
    return
  }
  
  let text = textEl.innerHTML.split('');
  textEl.innerHTML = '';
  text.forEach((letter) => {
    let span = document.createElement('span');
    span.innerHTML = letter;
    textEl.appendChild(span);
  });
}

splitText(title);

gsap.to(btnGroup, {
  opacity: 1, 
  delay: .5,
  duration: .5
});

buttons.forEach((button, i) => {
  gsap.to(button, {
    x: 0, 
    opacity: 1, 
    delay: .5 + (.1 * i),
    duration: .2
  });
});

let headingLetters = title.querySelectorAll('span');
headingLetters.forEach((letter, i) => {
  gsap.to(letter, {
    opacity: 1, 
    delay: .75 + (.075 * i),
    duration: .05
  });
});



$('.Show').click(function() {
  $('#target1').show(500);
  $('.Show').hide(0);
  $('.Hide').show(0);
});

$('.Hide').click(function() {
  $('#target').hide(500);
  $('.Show').show(0);
  $('.Hide').hide(0);
});

$('.toggle').click(function() {
  $('#target1').toggle(400);
});
