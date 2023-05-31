const express = require("express")
const app = express()
const port = process.env.PORT
const {client} = require("./config/db_conn.js")

app.get("/", async (req, res) =>{
    try {
        const db = client.db("stoicelm")
        const collection = db.collection("admin")
        const data = await collection.find({})
        res.send(data)
    } catch (error){
        res.status(500).send("you received an error")
    }
    
})

const server = app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
    console.log("changin")
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
            await client.close('client closed')
            console.log("client closed")
            callback()
        }
        gracefulShutdown(function(){
            process.kill(process.pid, 'SIGUSR2')
        })
    })
}

