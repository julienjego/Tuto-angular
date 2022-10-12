import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
    selector: 'app-face-snap',
    templateUrl: './face-snap.component.html',
    styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
    @Input() faceSnap!: FaceSnap;

    constructor(
        private faceSnapsService: FaceSnapsService,
        private router: Router
    ) {}

    onSnap() {
        if (this.faceSnap.buttonText === 'Oh snap !') {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
            this.faceSnap.buttonText = 'Oops, unSnap !';
        } else {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
            this.faceSnap.buttonText = 'Oh snap !';
        }
    }

    onViewFaceSnap() {
        this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }
}
