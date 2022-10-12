import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
    faceSnap!: FaceSnap;
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onContinue() {
        this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }
}
