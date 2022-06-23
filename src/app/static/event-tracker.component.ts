import { Component, OnInit } from "@angular/core";
import { GridComponent } from "app/components/grid/grid.component";
import { PartyService } from "app/services/party.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-event',
    templateUrl: './generic-grid.html',
    // providers: [GridComponent],
})
export class EventTrackerComponent implements OnInit {
    constructor(
        public partyService: PartyService
    ) { }

    partyGql$: Observable<any>;
    cols: any;

    ngOnInit() {
        this.cols = this.partyService.getEventCols();
        this.updateData();
    }

    public updateData() {
        this.partyGql$ = this.partyService.getEvents();
    }
}