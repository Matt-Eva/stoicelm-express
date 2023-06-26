const client = require('../config/db_conn.js')

const getLatest = async (params) =>{
    try{
        const skip = parseInt(params.skip)
        const writingCollection = client.db('stoicelm').collection('writing')
        const writing = await writingCollection.find({}).limit(50).skip(skip).toArray()
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
    try{
        const writingCollection = client.db('stoicelm').collection('writing')
        const writing = await writingCollection.find({creator_name: params.creatorName}).toArray()
        return writing
    } catch(error){
        throw new Error("could not complete that query")
    }
}

module.exports = {
    getLatest,
    getContent,
    getCreatorWriting
}