require('dotenv').config();
const axious = require('axios');
const Prefrence_f = require('../models/preferenceModels');
const axios = require('axios');

// get datafrom the axious
// Algo
// 1. took u_id fondone preference
// 2. check the country and category
//3. base on theire prsentation find out the data
// 4.use pagination for 20 json object fro each request
// return the data to user

const getheadlines =async(u_id)=>{
    try {
        const user_preferencedata = await Prefrence_f.findOne({u_id:u_id});
        const country_u = user_preferencedata.country;
        const category_u = user_preferencedata.category;
        const url = 'https://newsapi.org/v2/top-headlines';
        const params = {};
        if (country_u) { // Add country only if it's not null/undefined/empty
            params.country = country_u;
        }
    
        if (category_u) { // Add category only if it's not null/undefined/empty
            params.category = category_u;
        }
        params.apiKey=process.env.NEWSAPI;
        const response = await axios.get(url,{params});
        
        if (!response || !response.data.articles || response.data.articles.length === 0){
            throw {status:400, message:'Aricle is not availablefor with this prefrence change category and country preference for this'};
        }
        const articles = response.data.articles;
        
        return articles;
}
catch (error){
    throw error
}
    

};

const getarticle = async(u_id,page)=>{

    try {
    const user_preferencedata = await Prefrence_f.findOne({u_id:u_id});

    const url =  'https://newsapi.org/v2/everything';
    const params = {};
    if (user_preferencedata.category) { // Add country only if it's not null/undefined/empty
        params.q = user_preferencedata.category;
    }

    if (user_preferencedata.from_date) { 
        params.from = user_preferencedata.from_date;
    }
    if (user_preferencedata.to_date) {
        params.to = user_preferencedata.to_date;
    }
    if (user_preferencedata.language) {
        params.language = user_preferencedata.language;
    }
    if (user_preferencedata.sortby) { 
        params.Sortby = user_preferencedata.sortby;
    }
    /// adding params
    params.pageSize = 30;
    params.page = page || 1
    params.apiKey=process.env.NEWSAPI;

    const response = await axios.get(url,{params});
        
    if (!response || !response.data.articles || response.data.articles.length === 0){
        throw {status:400, message:'Aricle is not availablefor with this prefrence change category and country preference for this'};
    }
    const articles = response.data.articles;
    
    return articles;
}
catch(error){
    throw error;
}
    

}

module.exports = { getheadlines, getarticle};