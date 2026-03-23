import { Component } from '@angular/core';
import { outings } from '../site-content';

@Component({
  selector: 'app-outings',
  templateUrl: './outings.component.html',
  styleUrls: ['./outings.component.scss'],
})
export class OutingsComponent {
  outings = outings;
}
