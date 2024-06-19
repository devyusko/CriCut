import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {MOCK_USERS} from "./mock-users";
import {UserInformationComponent} from "./user-information/user-information.component";

/**
 * root assessment component. Has the main landing page
 */
@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    UserInformationComponent
  ],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.less'
})
export class AssessmentComponent {
  users = MOCK_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUser(id: string) {
    console.log('Selected suer id: ' + id);
    this.selectedUserId = id;
  }
}
