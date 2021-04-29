let myPromise = new Promise((resolve) => {
    setTimeout( () =>resolve(alert('Hello')),2000 )

})

myPromise.then(() => console.log('myPromise зарезолвися, и я узнал об этом'))