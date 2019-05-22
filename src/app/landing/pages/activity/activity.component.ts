import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activityGroup = [
    {
      className: 'check',
      text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
      time: '8:40 PM',
    },
    {
      className: 'comment',
      text: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
      time: '7:32 PM',
      description: 'During a project build, it is necessary to evaluate the ' +
        'product design and development against project requirements and outcomes',
    },
    {
      className: 'download',
      text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
      time: '6:02 PM',
      images: [
        {
          url: 'some url'
        },
        {
          url: 'some url'
        },
        {
          url: 'some url'
        },
        {
          url: 'some url'
        },
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
