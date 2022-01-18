var mongoose = require('mongoose');

const ClosetSchema = mongoose.Schema({
    cate:{
        type: String,
        trim: true,
    },
    cloName:{
        type:String
    },
    weather :{
        type:String
    }
})

const Closet = mongoose.model('Closet', ClosetSchema);

module.exports = Closet;