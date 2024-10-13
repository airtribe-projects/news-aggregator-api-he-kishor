const { getheadlines, getarticle } = require('../services/newsApiAervice');
const errorHandler = require('../../../Shared/errorHandler');

const get_headlines = async (req,res)=>{
    try{
    const u_id = req.userid;
    const articles = await getheadlines(u_id);
    res.status(200).json({articles});
    }
    catch (error){
        errorHandler(res,error);

    }

};

const get_article =async (req,res) =>{
    try{
        const u_id =req.userid;
        const page = req.params.page
        const articles = await getarticle(u_id,page);
        res.status(200).json({articles});

    }
    catch (error){
        errorHandler(res,error);
    }
}

module.exports = { get_headlines, get_article};