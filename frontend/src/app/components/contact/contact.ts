import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  messageSent = false;


  sendMessage(event: Event): void {

    event.preventDefault();

    this.messageSent = true;

  }

}