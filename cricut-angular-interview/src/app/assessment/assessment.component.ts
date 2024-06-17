import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";


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

}
