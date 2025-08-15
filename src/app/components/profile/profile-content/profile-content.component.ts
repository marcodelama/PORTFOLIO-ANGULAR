import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'profile-content',
  imports: [],
  templateUrl: './profile-content.component.html',
  styleUrl: './profile-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileContentComponent { }
