const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err)
        return 
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return 
        }
        const second = result
        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return;
            }
            console.log('Done with this task')
        }
        )
    })
})

console.log('Starting the next one')

/*Asynchronous is a non-blocking architecture, 
so the execution of one task isn't dependent on another. 
Tasks can run simultaneously.*/

/* In this code first it will run Start, then starting the next one,
then done with this code. Node offload this task, then your application can keep 
on serving other users*/