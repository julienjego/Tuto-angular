import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root',
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archie',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://picsum.photos/400/200',
            createdDate: new Date(),
            snaps: 0,
            buttonText: 'Oh snap !',
        },
        {
            id: 2,
            title: 'Dumbo',
            description: 'Compagnon de galère',
            imageUrl: 'https://picsum.photos/400/200',
            createdDate: new Date(),
            snaps: 150,
            buttonText: 'Oh snap !',
            location: 'East Village',
        },
        {
            id: 3,
            title: 'Gremlins',
            description: 'A ne pas nourrir après minuit',
            imageUrl: 'https://picsum.photos/400/200',
            createdDate: new Date(),
            snaps: 2,
            buttonText: 'Oh snap !',
        },
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }
    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(
            (faceSnap) => faceSnap.id === faceSnapId
        );
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}
