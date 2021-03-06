import {Component, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NapComponent} from "./nap.component";

@Component({
	templateUrl: "./templates/home.html"
})

export class HomeComponent implements OnInit {
	asleep: boolean = false;
	fuzzySize: number = 256;
	napLocationForm: FormGroup;
	@ViewChild(NapComponent) napComponent: NapComponent;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.napLocationForm = this.formBuilder.group({
			napLocation: ["", [Validators.required, Validators.maxLength(64)]]
		});
	}

	getFuzzyUrl(): string {
		let fuzzyBase = "https://placekitten.com/g/";
		return(fuzzyBase + this.fuzzySize + "/" + this.fuzzySize);
	}

	onAsleepChange(newAsleep: boolean): void {
		this.asleep = newAsleep;
	}

	onFuzzySizeChange(newFuzzySize: number): void {
		this.fuzzySize = newFuzzySize;
	}

	findNapLocation(): void {
		this.napComponent.startNap();
	}
}
