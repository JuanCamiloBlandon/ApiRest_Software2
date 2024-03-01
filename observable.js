const { Observable, from } = require('rxjs');
const { filter } = require('rxjs/operators');

const myPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve('dog');
        resolve('cat');
        resolve('bird');
    }, 1000);
});

myPromise.then(result => {
    console.log('promise result: ', result);
});

const observable = new Observable(observer => {
    setTimeout(() => {
        observer.next('dog');
        observer.next('cat');
        observer.next('bird');
    }, 1000);
});

observable.subscribe(result => {
    console.log('observable result: ', result);
});

const subscription = from(observable).pipe(
    filter(result => result === 'bird')
).subscribe(result => {
    console.log('filtered observable result: ', result);
});
