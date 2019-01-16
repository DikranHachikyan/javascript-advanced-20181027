import mongoose from 'mongoose';
import {ContactSchema} from '../models';

const Contact = mongoose.model('Contact',ContactSchema);

//GET
export const getAllContacts = (req,res)=>{
    Contact
        .find({})
        .then((contacts)=>res.json(contacts))
        .catch((err)=>res.json(err));
};
//POST
export const addNewContact = (req,res)=>{
    const newContact = new Contact(req.body);

    // newContact.save((err,conact)=>{
    //     if(err){
    //         //...
    //         return;
    //     }
    //     res.json(contact);
    // });
    newContact
        .save()
        .then((contact)=>res.json(contact))
        .catch((err)=>res.json(err));
};
//PUT
export const updateContact = (req,res)=>{
    Contact
        .findOneAndUpdate({
            _id: req.params.contactId
        }
        ,req.body
        , {   new: true
            , upsert:true
            , returnNewDocument:true
        })
        .then( (contact)=>res.json(contact))
        .catch((err)=>res.json(err));
};
//DELETE

export const deleteContact = (req,res)=>{
    Contact
        .remove({_id: req.params.contactId})
        .then((status)=>res.json(status))
        .catch((err)=>res.json(err));
};