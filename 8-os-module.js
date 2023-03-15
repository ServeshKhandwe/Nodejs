const os=require('os')

//info about the current user
const user=os.userInfo()
console.log(user)

//method returns system's uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

//Creating an OS Object 
const currentOS = {
    name: os.type(),
    release: os.release(),
    OStotalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS);