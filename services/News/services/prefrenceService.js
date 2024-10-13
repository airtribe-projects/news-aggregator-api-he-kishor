const Prefrence_f = require('../models/preferenceModels');

//get preference
const getPrefence = async(u_id)=>{
  try{
    const user_preference = await Prefrence_f.findOne({u_id:u_id});
    if (!user_preference){
        throw({status:400, message:"Invalid User"})
    }
    return user_preference
}
catch(error){
    throw error;
    
}

};

//update preference
const updatePreference = async(u_id,{category,language,sortby,country,from_date,to_date})=>{
    try{
        
    if (
            category === undefined &&
            language === undefined &&
            language === undefined &&
            sortby === undefined &&
            country === undefined &&
            from_date === undefined &&
            to_date === undefined
          ) {
            throw { status: 400, message: "At least one field must be provided for the update" };
          }
   
    const user_preference = await Prefrence_f.findOne({u_id:u_id});
    if (!user_preference) {
        throw { status: 404, message: "User preference not found" };
      }

      const updateData = {};
        if (category !== undefined) updateData.category = category; // Updates even if it's an empty string
        if (language !== undefined) updateData.language = language; // Updates even if it's an empty string
        if (sortby !== undefined) updateData.sortby = sortby; // Updates even if it's an empty string
        if (country !== undefined) updateData.country = country;
        if (from_date !== undefined) updateData.from_date = from_date; // Updates even if it's null
        if (to_date !== undefined) updateData.to_date = to_date; // Updates even if it's null


    const user_updatepreference = await Prefrence_f.findByIdAndUpdate(
       user_preference._id, 
       {
        $set:updateData
        
       },
       {new:true} 
    );
    
    return{
        id: user_updatepreference._id,
        category: user_updatepreference.category,
        language: user_updatepreference.language,
        sortby: user_updatepreference.sortby,
        country: user_updatepreference.country,
        from_date: user_updatepreference.from_date,
        to_date: user_updatepreference.to_date

    }

    }
    catch(error){
        throw error;
    }

};


module.exports = { getPrefence, updatePreference };