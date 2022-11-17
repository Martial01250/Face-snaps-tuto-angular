import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root',
})
export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
        id: 1,
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 120,
        location: 'Paris'
      },
        {
        id: 2,
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées !',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 20,
        location: 'Dublin Mountains'
      },
      {
        id: 3,
        title:'Un bon repas',
        description: 'Humm que c\'est bon!',
        imageUrl: 'https://www.legourmetdeseze.com/wp-content/uploads/2021/11/restaurant-gastronomique-%C3%A9toil%C3%A9-lyon.jpg',
        createdDate: new Date(),
        snaps: 0,
      }
      ];

      getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
        
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnapId === faceSnapId);
        if(!faceSnap){
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unSnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

}