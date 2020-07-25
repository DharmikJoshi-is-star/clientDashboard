import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateFormControl } from "../date-form-control";

@Component({
    selector: "app-card-form",
    templateUrl: "./card-form.component.html",
    styleUrls: ["./card-form.component.scss"],
})
export class CardFormComponent implements OnInit {
    @Output() cardNumberEmitter = new EventEmitter<String>();
    @Output() cardNameEmitter = new EventEmitter<String>();
    @Output() cardExpiryEmitter = new EventEmitter<String>();
    @Output() cardInfoSubmitEmitter = new EventEmitter<boolean>();
    @Input() amount: number;
    cardForm = new FormGroup({
        name: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            Validators.pattern("[a-zA-z ]*"),
        ]),
        cardNumber: new FormControl("", [
            Validators.required,
            Validators.minLength(16),
            Validators.maxLength(16),
            Validators.pattern("[0-9]*"),
        ]),
        expiration: new DateFormControl("", [
            Validators.required,
            Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
        ]),
        securityCode: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(3),
        ]),
    });
    constructor() {
        this.cardForm.valueChanges.subscribe((form) => {
            this.cardForm.controls["cardNumber"].valueChanges.subscribe(
                (cardNo) => {
                    console.log("cardNo");
                    console.log(cardNo);
                    let cardNumber: String = "";
                    let str: String = cardNo;
                    for (let index = 0; index < cardNo.length; index++) {
                        cardNumber = cardNumber + str.charAt(index);
                        if ((index + 1) % 4 == 0) cardNumber = cardNumber + " ";
                    }
                    console.log(cardNumber);
                    this.cardNumberEmitter.emit(cardNumber);
                }
            );

            this.cardForm.controls["name"].valueChanges.subscribe(
                (cardName) => {
                    console.log("cardName");
                    console.log(cardName);
                    this.cardNameEmitter.emit(cardName);
                }
            );

            this.cardForm.controls["expiration"].valueChanges.subscribe(
                (cardExp) => {
                    console.log("cardExp");
                    console.log(cardExp);
                    this.cardExpiryEmitter.emit(cardExp);
                }
            );

            // console.log(form);
            // console.log(form.cardNumber.length);
            // if (form.cardNumber.length % 4 == 0) {
            //     let str: String = form.cardNumber;
            //     let count = form.cardNumber.length / 4;
            //     this.cardNumber = "";
            //     for (let index = 0; index < count; index++) {
            //         console.log(str.slice(index * 4, index * 4 + 4));
            //         this.cardNumber =
            //             this.cardNumber +
            //             " " +
            //             str.slice(index * 4, index * 4 + 4);
            //         console.log(this.cardNumber);
            //     }
            // }

            //this.formEmitter.emit(this.cardForm);
        });
    }

    ngOnInit(): void {}

    onCardInfoSubmit() {
        console.log(this.cardForm);
        this.cardInfoSubmitEmitter.emit(true);
    }
}
