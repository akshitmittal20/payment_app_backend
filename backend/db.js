const mongoose = require("mongoose");
const ObjectId=mongoose.Types.ObjectId;

mongoose.connect(
  "mongodb+srv://akshitmittal20:pSD9tpjvHdOlEVax@290224.dl6gadx.mongodb.net/payment-app"
);

const Userschema = mongoose.Schema({
  username: {
    type: String,
    trim: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },

  firstname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20,
  },

  lastname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20,
  },
  
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 20,
  }

});

const accountschema=mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true
  },
  balance:{
    type:Number,
    required:true
}
})

const user = mongoose.model("User", Userschema);
const account=mongoose.model("Account",accountschema)

module.exports = {
  user,
  account
};