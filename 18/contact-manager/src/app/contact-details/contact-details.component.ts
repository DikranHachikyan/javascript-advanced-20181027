import { Component, 
         OnInit,
         Input   } from '@angular/core';

import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  @Input('selected-contact') contact:Contact;  
  constructor() { }

  ngOnInit() {
  }

}
