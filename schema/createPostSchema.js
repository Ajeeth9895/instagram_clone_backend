const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const CreatePostSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    text: { type: String, require: true },
    image: {
        type: String, require: true
    },

    likes: [{ type: ObjectId, ref: 'users' }],
    profile_pic: { type: String },
    comments: [{
        name: { type: String },
        comment: { type: String },
        postedBy: { type: ObjectId, ref: 'users' }
    }],
    postedOn: {
        type: Date, default: Date.now()
    }

}, { versionKey: false, collection: 'posts' })

const CreatePostModel = mongoose.model('posts', CreatePostSchema)//
module.exports = { CreatePostModel }

