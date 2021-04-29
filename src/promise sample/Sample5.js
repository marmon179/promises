let myPromise = new Promise((resolve) => {
    setTimeout( () =>resolve(alert(Math.random())),2000 )

})

myPromise.then(() => console.log('myPromise зарезолвися, и я узнал об этом'))