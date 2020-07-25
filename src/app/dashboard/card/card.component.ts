import { Component, OnInit, Input, EventEmitter } from "@angular/core";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
    @Input() cardName: String = "";
    @Input() cardNumber: String = "";
    @Input() cardExpiry: String = "";
    constructor() {}

    ngOnInit(): void {}
}
