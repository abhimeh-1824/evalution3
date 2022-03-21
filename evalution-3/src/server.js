const app = require("./index")
const connect = require("./config/db")
const port = 4400;
app.listen(port, async()=>{
    try {
        await connect();
        console.log(`port is runnign in port Number ${port}`)
    } catch (error) {
        console.log({message:error.message});
    }
})