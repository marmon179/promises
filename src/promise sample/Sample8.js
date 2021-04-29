const doAfter = (ms) => {
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}


doAfter(5000).then(() => console.log('я сработал через 5 секунд'));
doAfter(3000).then(() => console.log('а я сработал через 3 секунд'));
doAfter(1000).then(() => console.log('я сработал через 10 секунд'));