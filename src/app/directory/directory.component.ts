import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../logging.service'
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

ninja:string;
classes={'red':false,'blue':true,'underline':true};

ninjas=[
  {name:'Rohan',belt:'black'},
  {name:'Anshul',belt:'red'},
  {name:'Rimpy',belt:'green'},
  {name:'Aditi',belt:'blue'}

];
  /*constructor(private route:ActivatedRoute) {
    this.ninja=route.snapshot.params['ninja'];
  }*/
   constructor(private logger:LoggingService){

   }

   logIt(){
     this.logger.log();
   }

  ngOnInit() {
  }

}
