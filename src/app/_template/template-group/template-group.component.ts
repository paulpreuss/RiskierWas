import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../_interface/group';

@Component({
  selector: 'app-template-group',
  templateUrl: './template-group.component.html',
  styleUrls: ['./template-group.component.sass']
})
export class TemplateGroupComponent implements OnInit {

  @Input() group: Group;

  constructor() { }

  ngOnInit(): void {
  }

}
