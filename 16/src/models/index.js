import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
      firstname: {
          type: String
        , required:'First name is required'
    }
    , lastname:{
          type: String
        , required: 'Last name is required'
    }
    , email:{
          type:String
        , required:'E-mail is required'
    }
    , phone:{
          type:String
    }
    , created:{
          type: Date
        , default: Date.now
    }

}); 