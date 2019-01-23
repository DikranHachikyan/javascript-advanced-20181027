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

  constructor( public dataSource:StaticDataSourceService) { }

  ngOnInit() {
    this.dataSource.getContactList()
                    .subscribe( (contacts)=>this.contacts = contacts
                               , (error)=>console.log(error)
                               , ()=>console.log('contact list loaded') );
  }

}
