import mongoose from 'mongoose'



const vendorSchema = new mongoose.Schema({
    firstName:{type:String, required:true,trim:true},
    lastName: {type:String,trim:true},
    nameOfBusiness:{type:String,trim:true},
    email:{type:String,required:true,trim:true},
    phone:{type:String,required:true,trim:true},
    username:{type:String,required:true, unique:true,trim:true},
    password:{type:String,required:true,trim:true},
    city:{type:String,required:true,trim:true},
    state:{type:String,required:true,trim:true},
    zip:{type:String,required:true,trim:true},
    category:{type:String, required:true},
    vendorType:{type:String, required:true},
    vendorUserPhoto:{type:String},
    vendorBannerPhoto:{type:String},
    vendorBusinessDescription:{type:String},
    vendorFacebookDescription:{type:String},
    vendorInstagramDescription:{type:String},
    vendorTwitterDescription:{type:String},
    vendorBusinessPhotos: {type: [String], maxlength: 6}
})

//compiling schema
const Vendor = mongoose.models.Vendor || mongoose.model('Vendor',vendorSchema);

export default Vendor;
