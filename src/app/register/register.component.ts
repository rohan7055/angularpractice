import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

form;
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      starid:new FormControl('123'),
      starname:new FormControl(null),
      starmass:new FormControl(null),
      stardistance:new FormControl(null),
      galaxyname:new FormControl(null)
    });
  }
  onSubmit(mediaItem){
    console.log(mediaItem);
  }

}
