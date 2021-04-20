function getNumber() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)

    })
    return promise
}

// getNumber().then(n => console.log(n))
// getNumber().then(n => console.log(n))


const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((resolve, rejected) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (error) {
                rejected(error)
            }
        })
        return promise
    },
    read() {
        return new Promise((res, rej) => {
            const data = localStorage.getItem('some-key')
            if (!data) {
                res(null)
            } else {
                res(JSON.parse(data))
            }
        })
    }
}

// const result = repo.save({name: 'Alex Lapko'})
// if (result) {
//     console.log('SAVED')
// } else {
//     console.warn('SAVED')
// }


const promise = repo.saveAsync({name: 'Alex Lapko'})
promise
    .then(() => console.log('SAVED'))
    .catch(error => console.warn('NOT SAVED: ' + error))


const run = async () => {
    await repo.saveAsync({name: 'Alex Lapko'})
    console.log('SAVED')

   const data = await repo.read()
   console.log(data)
}

run()