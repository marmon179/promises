const doAfter = (ms) => {
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}


let promise3 = doAfter(3);
promise3.then( () => console.log('я сработал через 3 секунд') );
promise3.then( () => console.log('и я тоже следом сработал через 3 секунд') );
promise3.then( () => console.log('и я') );