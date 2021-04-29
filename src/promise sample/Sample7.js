let myPromise = new Promise((resolve) => {
    setTimeout( () =>resolve(Math.random()),2000 )

})

myPromise.then((res) => console.log(`myPromise зарезолвися, и я узнал об этом: ${res}`))

myPromise.then((res) => console.log(`myPromise зарезолвися, и я узнал об этом: ${res}`))

console.log('finish')