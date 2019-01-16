import { addNewContact
       , getAllContacts
       , updateContact
       , deleteContact } from '../controllers';

export const routes = (app)=>{
    // route:/contact
    app.route('/contact')
       //GET: Read Data (all contacts)
       .get((req,res,next)=>{
            console.log(`Get all contacts:${req.url} ${req.method}`);
            next();
       },getAllContacts)
       //POST: Add New Contact
       .post((req,res,next)=>{
            console.log(`Add new contact:${JSON.stringify(req.body)}`);
            next();
       },addNewContact);
    // route:/contact/:contactId
    app.route('/contact/:contactId')
       //PUT: Update Contact
       .put((req,res,next)=>{
            console.log(`Update Contact ID:${req.params.contactId}`);
            next();
       }, updateContact)
       //DELETE: Delete Contact
       .delete((req,res,next)=>{
            console.log(`Delete Contact ID:${req.params.contactId}`);
            next();
       }, deleteContact);
};