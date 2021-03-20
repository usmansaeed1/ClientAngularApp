import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { member } from 'src/app/_model/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
member : member={} as member;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
 
  constructor(private memberServie: MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions =[
      {
        width: '500px',
        height:'500px',
        imagePercent: 100,
        thumbnailsColumns : 4,//,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:false

      }
    ]
    this.galleryImages = this.getImages();
  }

  loadMember(){
    this.memberServie.getMember(this.route.snapshot.paramMap.get('username') || '').subscribe(
      member=> {
        
        this.member=member;
        this.galleryImages = this.getImages();
      }
    );
  }
  getImages(): NgxGalleryImage[]{
    const imageUrl=[];
    for(const photo of this.member.photos){
      imageUrl.push({
        small:photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }
    return imageUrl;
  }

}
