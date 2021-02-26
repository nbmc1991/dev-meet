const get_callback = (string, callback) =>{
    setTimeout(() =>{
        return callback(string)
    }, 1000)
}

const change_to_promise_result = new Promise((resolve, reject) =>{
    get_callback("This came from the callback", (result) =>{
        if(!result){
            reject("Boooo")
        }
        resolve(result)
    })
})


change_to_promise_result.then(result =>{
    console.log(`I got this from then promise: ${result}`)
})

const use_async = async () =>{
    let result = await change_to_promise_result
    console.log(`I used async and wait to get this result: ${result}`)
}

use_async()