import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';

export interface ProfileData {
  firstName: string;
  lastName: string;
  state: string;
  imageUrl: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  userGroup: ProfileData;

  descriptionGroup = [
    {
      number: '372',
      text: 'Completed Tasks',
    },
    {
      number: '11',
      text: 'Open Tasks',
    },
  ];

  navigationGroup = [
    {
      active: true,
      text: 'MENU',
    },
    {
      text: 'Home',
    },
    {
      text: 'My Tasks',
    },
    {
      text: 'Notifications',
      notifyCount: '3'
    },
  ];

  menuGroup = [
    {
      text: 'Tasks',
      link: '/tasks/',
    },
    {
      text: 'Kanban',
      link: '/kanban/',
    },
    {
      text: 'Activity',
      link: '/activity/',
    },
    {
      text: 'Calendar',
      link: '/calendar/',
    },
    {
      text: 'Files',
      link: '/files/',
    },
  ];

  constructor(private service: ProfileService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(
      (response: any) => {
        if (response.results.length !== 0) {
          this.userGroup = {
            firstName: response.results[0].name.first,
            lastName: response.results[0].name.last,
            state: response.results[0].location.state,
            imageUrl: response.results[0].picture.medium,
          };
        }
      },
      (error) => {
        console.log(error['text']);
      }
    );
  }

}
