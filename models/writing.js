class Writing {
    constructor(data){
        this.writing_type = data.writingType
        this.tags = data.tags
        this.title = data.title
        this.description = data.description
        this.thumbnail = data.thumbnail
        this.creator_thumbnail = data.creatorThumbnail
        this.creator_name = data.creatorName
        this.url_id  = data.urlId
    }
}

module.exports = Writing