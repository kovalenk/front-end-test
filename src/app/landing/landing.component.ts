import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() {
  }

}
