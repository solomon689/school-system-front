import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @Input() public title!: string;
  @Input() public quantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
