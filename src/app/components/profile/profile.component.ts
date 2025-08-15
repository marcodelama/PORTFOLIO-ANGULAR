import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ProfileContentComponent } from "./profile-content/profile-content.component";

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent, ProfileContentComponent],
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent { }
