const express = require("express")
const cors = require("cors")


const app = express()
const port = process.env.PORT

const client = require("./config/db_conn.js")
const router = require("./routes.js")

app.use(cors())
app.use("/", router)


const server = app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
    console.log("change")
});

server.on('listening', async () =>{
    try {
        await client.connect()
        console.log("client connected")
    } catch(error){
        console.error(error)
        server.close(() =>{
            console.log("server closed")
            process.exit(0)
        })
    }
})

process.on('SIGINT', () =>{
    console.log("Sutting down server...")
    server.close( async () =>{
        await client.close()
        console.log("Db closed")
        console.log("Server closed.")
        process.exit(0)
    })
})

if (process.env.NODE_ENV === "development"){
    process.once('SIGUSR2', async () =>{
       async function gracefulShutdown(callback){
            await client.close()
            console.log("db closed")
            callback()
        }
        gracefulShutdown(function(){
            process.kill(process.pid, 'SIGUSR2')
        })
    })
}

