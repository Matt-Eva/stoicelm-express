const writingQueries = require("../queries/writing_queries.js")

const index = async (req, res) => {
    try{
        const writing = await writingQueries.getLatest()
        res.status(200).send(writing)
    } catch(error){
        res.status(500).send(error.message)
    }
}

const show = async (req, res) => {
    try {
        const content = await writingQueries.getContent(req.params)
        res.status(200).send(content)
    } catch(error){
        res.status(500).send(error.message)
    }
}

const creatorWriting = async (req, res) =>{
    
}

module.exports = {
    index,
    show,
    creatorWriting
}