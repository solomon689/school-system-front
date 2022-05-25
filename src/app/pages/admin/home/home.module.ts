import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../../shared/shared.module';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { AdminCalendarComponent } from './components/admin-calendar/admin-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    HomeComponent,
    PersonalInfoComponent,
    AdminCalendarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FullCalendarModule
  ]
})
export class HomeModule { }
