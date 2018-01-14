'use strict';
console.log('Loading random number gernerator');

exports.handler = (event, context, callback) => {
    let min = +event.min;
    let max = +event.max;
    let generatedNumber = Math.floor(Math.random() * max) + min;

    callback(null, generatedNumber);
};
