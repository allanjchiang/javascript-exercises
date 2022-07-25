const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am a %s string!', '💩');

// Styled
// console.log('%c I am some great text', 'font-size: 50px; background: red;');

// Warning!
console.warn('OH NOOO');

// Error :|
console.error('OH NOES');

// Info
console.info('Massaging scalp with nails is bad');

// testing
// const p = document.querySelector('p');

// console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// viewing DOM elements

// Grouping together

// Counting

// Timing