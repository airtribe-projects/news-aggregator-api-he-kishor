const {getPrefence, updatePreference } = require('../services/prefrenceService');
const errorHandler = require('../../../Shared/errorHandler');

const get_prefrence = async(req,res)=>{
    try{
    const u_id = req.userid;
   
    const prefrenceData = await getPrefence(u_id);
    res.status(200).json({prefrenceData});
    }
    catch(error ){
        errorHandler(res,error);
    }
};


const update_preference = async(req,res)=>{
    try{
    const u_id = req.userid;
    const data_update =  await updatePreference(u_id,req.body);
    res.status(200).json({data_update});
    }
    catch(error){
        errorHandler(res, error);
    }
};

module.exports = { get_prefrence, update_preference };