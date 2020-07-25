import { TestBed } from "@angular/core/testing";

import { DateFormControl } from "./date-form-control";

describe("DateFormControl", () => {
    let service: DateFormControl;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DateFormControl);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
