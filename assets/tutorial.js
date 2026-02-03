console.log('Hello from tutorial.js from assets file')
let a = new Promise((resovle, reject)=> {
    setTimeout(()=> {
        resovle('This value has been resolved')
    }, 2000)
}).then((value)=> {
    console.log(value)
}).catch((error)=> {
    console.log(error)
})