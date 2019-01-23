import { Injectable } from '@angular/core';

import {Observable,of} from 'rxjs';

import {Contact}      from './contact';

const contacts:Contact[] = [
 new Contact(
    '11',
    'John',
    'Doe',
    'john@no.com',
    '111-22-33',
     Date.now()
  ),
  new Contact(
    '12',
    'Anna',
    'Smith',
    'anna@no.com',
    '333-22-33',
     Date.now()
  ),
 new Contact(
    '13',
    'Peter',
    'Thomas',
    'peter@no.com',
    '444-22-33',
     Date.now()
  ),
 new Contact(
    '14',
    'Maria',
    'Anders',
    'maria@no.com',
    '555-44-33',
     Date.now()
  )
];

@Injectable({
  providedIn: 'root'
})
export class StaticDataSourceService {

  constructor() { }

  getContactList():Observable<Contact[]>{
    return of(contacts);
  }
}
