import {Component, OnInit} from '@angular/core';
import * as contentStub from './stubs/stub';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activityGroup = contentStub.activityData;

  constructor() {
  }

  ngOnInit() {
  }

}
