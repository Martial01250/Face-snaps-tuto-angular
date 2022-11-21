import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  buttonText!: string;

  @Input() faceSnap!: FaceSnap;
  @Output() updateSnap: EventEmitter<{id: any, type: any}> = new EventEmitter<{id: any, type: any}>();

  constructor(){}

  ngOnInit(): void {
    this.buttonText = 'Oh snap!';
  }

  onSnap(id: any, test: any) {
      this.updateSnap.emit({
          id: id,
          type: 'Oh snap!' === test ? 'snap' : 'unSnap'
      })

      this.buttonText = 'Oh snap!' === this.buttonText ? 'Oops, unSnap!' : 'Oh snap!'
  }

  setColor(snap: any) {
      return `rgb(0,${snap},0)`;
  }
}
