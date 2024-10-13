const Articleread = require('../models/readmodel');

//create the data as read
//step1 whatever data is update the as data to the model
// update to the u_id 
const createArticleAsRead = async(u_id,{source, author, title, description, url, urlToImage, publishedAt, content})=>{
 try{
    source = source || null;
     author = author || "";
     title = title || "";
     description = description || "";
     url = url || "";
     urlToImage= urlToImage || "";
     publishedAt = publishedAt || "";
     content = content || "";
     const article_readdata = await Articleread.create({source, author, title, description, url, urlToImage, publishedAt, content, u_id});
     
     const articleRead_data = { ...article_readdata._doc};
     delete articleRead_data.u_id;
     return articleRead_data;
 }
 catch (error){
    throw error;
 }
 
};

//step
// get U_id from request, 
// ftech the data from db find data where u_id available 
// return all the json data
//handle the error
const getReadUserData = async(u_id)=>{
  try {
       
    const usersReadsData = await Articleread.find({u_id:u_id});
    return usersReadsData
  }
  catch(error){
    throw error;
  }

};

module.exports = { createArticleAsRead, getReadUserData };