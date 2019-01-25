import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { StaticDataSourceService } from '../models/static-data-source.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts:Contact[];  
  selectedContact:Contact;

  constructor( public dataSource:StaticDataSourceService) { }

  ngOnInit(){
    this.getContacts();
  }

  getContacts():void{
    this.dataSource.getContactList()
                    .subscribe( (contacts)=>this.contacts = contacts
                               , (error)=>console.log(error)
                               , ()=>console.log('contact list loaded') );
  }

  onSelectContact(id:string):void{
    this.dataSource.getContactById(id)
                   .subscribe((contacts)=>{
                      this.selectedContact = contacts.pop();                      
                   }
                   , (error)=>console.log(error)
                   , ()=>console.log(`contact with id:${id} loaded`));
  }

  deleteContact(event,id:string):void{
    event.stopPropagation();
    // console.log(event);
    this.dataSource.deleteContactById(id);
  }

}
