import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { EventsAppComponent } from './events-ap.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
    imports: [BrowserModule],
    declarations : 
        [EventsAppComponent,
            EventsListComponent
        ],
        

    bootstrap : [EventsAppComponent]
    
})
export class AppModule {};