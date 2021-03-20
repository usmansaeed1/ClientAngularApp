import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { member } from '../_model/member';
const httpOption ={
 
  headers: new HttpHeaders({
    Autherization  :'Bearer' + JSON.parse(localStorage.getItem('user')|| '{}')?.token
  })  
}
@Injectable({
  providedIn: 'root'
})
export class MembersService {
baseUrl = environment.apiUrl;
members : member[] =[];
  constructor(private http: HttpClient ) { }


  getlocalStorage(){

  }
  getMembers(){
    if(this.members.length > 0 ) return of(this.members);
    return this.http.get<member[]>(this.baseUrl + 'Users/GetUsers', httpOption).pipe(
      map((members: member[])=>{
          this.members=members;
          return members;
        }
      )
    );
  }
  getMember(username : string){
    const member = this.members.find(x => x.userName === username);
    if(member !== undefined) return of(member);
    return this.http.get<member>(this.baseUrl + 'Users/GetByUsername?username=' + username, httpOption);
  }
  updateMember(member: member){

    return this.http.put(this.baseUrl + 'user',member).pipe(
      map(() =>{
        const index= this.members.indexOf(member);
        this.members[index] =member;
      })
    )
   
  }
  setMainPhoto(photoId: number){
    return this.http.put(this.baseUrl + 'users/set-main-photo/'+ photoId,{} );
  }
  deletePhoto(photoId : number){
    return this.http.delete(this.baseUrl + 'user/delete-photo/' + photoId);
  }
}
