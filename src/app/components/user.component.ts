import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello, {{name}}</h1>
    <h6>Please leave your information below and I'll be in contact with you as soon as I am able. :)</h6>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{address.street}}, {{address.city}}, {{address.state}}</p>
    <button (click)="toggleHobbies()" > {{showHobbies ? "Hide Hobbies" : "Show Hobbies"}} </button><br />
    <div *ngIf="showHobbies">
    <h3>Hobbies</h3>
    <ul>
        <li *ngFor="let hobby of hobbies">
            {{hobby}}
        </li>
    </ul>
    </div>
    <hr />
    <form>
        <label>Name: </label> <br />
        <input type="text" name="name" [(ngModel)] = "name" /> <br />
        <label>Email: </label> <br />
        <input type="text" name="email" [(ngModel)] = "email" /> <br />
        <label>Street: </label> <br />
        <input type="text" name="address.street" [(ngModel)] = "address.street" /> <br />
        <label>State: </label> <br />
        <input type="text" name="address.city" [(ngModel)] = "address.city" /> <br />
        <label>State: </label> <br />
        <input type="text" name="address.state" [(ngModel)] = "address.state" /> <br />
    </form>
  `,
})
export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  
  constructor(){
    this.name = "John Smiff";
    this.email = "johnsmiff@gmail.com"
    this.address= {
        street: '123 GFY Street',
        city: 'DFB',
        state: 'FL'
    } 
    this.hobbies = ['Music', 'Design', 'Sports']
    this.showHobbies = false;
  }
  toggleHobbies(){
      if (this.showHobbies == true){
          this.showHobbies = false;
      } else {
          this.showHobbies = true;
      }
  }
}

interface address {
    street: string;
    city: string;
    state: string;
}