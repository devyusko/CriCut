import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {MOCK_USERS} from "./mock-users";


@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent
  ],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.less'
})
export class AssessmentComponent {
  users = MOCK_USERS;
}
