const mongoose= require('mongoose');
const Preference = new  mongoose.Schema({
    category:{type:String, required:false},
    language:{type:String, required:false},
    sortby:{type:String},
    country:{type:String},
    from_date:{type:Date},
    to_date:{type:Date},
    u_id:{type:String, required:true,  unique: true },
});

Prefrence_f=mongoose.model("user_prerence",Preference);
module.exports = Prefrence_f;