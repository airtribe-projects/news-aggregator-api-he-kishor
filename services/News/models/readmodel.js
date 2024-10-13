const mongoose = require('mongoose');
const readArticleSchema =new mongoose.Schema({
    source: {
        id: { type: String, default: null },  
        name: { type: String }
    },
    author: { type: String, default: null },  
    title: { type: String, required:true}, 
    description: { type: String, default: null },  
    url: { type: String },  
    urlToImage: { type: String, default: null },  
    publishedAt: { type: Date }, 
    content: { type: String, default: null },
    u_id : {type: String, required: true}
});

const Articleread = mongoose.model('Article', readArticleSchema);

module.exports = Articleread;