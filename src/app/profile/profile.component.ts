import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;

  constructor(private profileService: ProfileService) {

  }

  findProfile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfileRepo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
