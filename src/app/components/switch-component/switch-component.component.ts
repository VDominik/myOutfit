import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styleUrls: ['./switch-component.component.scss'],
})
export class SwitchComponentComponent {
  constructor(protected router: Router) {}
}
