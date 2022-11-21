import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }

    updateSnap(event: {id: any, type: any}) {
      // from Output
        this.setSnap(event.id, event.type);
    }

    private setSnap(faceSnapId: number, snapType: 'snap' | 'unSnap'): void {
        const faceSnap: any = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)

        this.faceSnaps.forEach(snap => {
            if (faceSnap.id === snap.id) {
                if ('snap' === snapType) {
                    snap.snaps++;
                } else {
                    snap.snaps--;
                }
            }
        })
    }
}
