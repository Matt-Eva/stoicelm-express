const client = require('../config/db_conn.js')

const getLatest = async () =>{
    try{
        const writingCollection = client.db('stoicelm').collection('writing')
        const writing = await writingCollection.find({}).limit(50).toArray()
        return writing
    } catch(error){
        throw new Error("could not complete that query")
    }
}

const getContent = async(params) =>{
    try{
        const urlId = `/${params.creatorName}/${params.title}`
        const contentCollection = client.db('stoicelm').collection('content')
        const content = await contentCollection.findOne({url_id: urlId})
        return content
    } catch(error){
        throw new Error("could not complete that query")
    }
}

const getCreatorWriting = async (params) =>{
    
}

module.exports = {
    getLatest,
    getContent
}