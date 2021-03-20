import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { member } from 'src/app/_model/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  //userName : string ='/member/lisa';
 @Input()   member = {
//    age:11,
//    city:'Rawalpindi',
//    country:'Pakistan',
//    gender:'Male',
//    id:1,
//    interests:'Cricket',
//    knownAs:'Azeem',
//    userName:'lisa',
//    lookingFor:'',
//    introduction:'',
//    photoUrl:'',
//    lastActive: new Date(),
// created: new Date()

  } as member;
  //@Input()   _member: member;
  
  constructor() { 
    
   
  }

  ngOnInit(): void {
  }
 

}
