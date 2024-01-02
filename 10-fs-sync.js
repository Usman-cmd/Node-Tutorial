const { readFileSync, writeFileSync } = require('fs')
console.log('Start')

//reading content from these files
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


//creating and writing in a new file
writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`,
{ flag: 'a'}
)
console.log('Done with this task')
console.log('Starting the next one')


/*Synchronous is a blocking architecture, 
so the execution of each operation depends on completing the one before it. 
Each task requires an answer before moving on to the next iteration.*/

/*In this code, First it will run Start, then Done with this tastk, and then
Starting the next one, the drawback of this approach is that, it wont be able
to serve other users, and eventually the application will be down.*/