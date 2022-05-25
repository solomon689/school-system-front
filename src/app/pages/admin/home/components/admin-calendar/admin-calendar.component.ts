import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/angular';

@Component({
  selector: 'app-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.scss']
})
export class AdminCalendarComponent implements OnInit {
  public calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    selectable: true,
    editable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateClick.bind(this),
    
  }
  @ViewChild('mymodal')
  public modal!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public handleDateClick(selectInfo: DateSelectArg): void {
    console.log(this.modal);
  }
}
