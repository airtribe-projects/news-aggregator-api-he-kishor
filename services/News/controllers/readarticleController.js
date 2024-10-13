const  { createArticleAsRead, getReadUserData } = require('../services/readAsArticle');
const errorHandler = require('../../../Shared/errorHandler');

const create_articleread = async(req,res)=>{
   try{
   if (!req.body){
      return res.status(400).json({message:"provide body parameter here"})
   }
   const u_id = req.userid;
   const article_readdata = await createArticleAsRead(u_id, req.body);
   res.status(200).json({article_readdata});

} catch(error){
   errorHandler(res,error);
} 
};

const get_readArticleData = async(req,res)=>{
   try{
      const u_id = req.userid;
      const usersReadsData = await getReadUserData(u_id);
      if (!usersReadsData){
         return res.status(404).json({message:"Data not found"});
      }
      res.status(200).json(usersReadsData);
   }
   catch(error){
      errorHandler(res,error);
   }
}
module.exports = { create_articleread, get_readArticleData };