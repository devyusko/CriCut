import { Component } from '@angular/core';
import {HeaderComponent} from "./header.component";


@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.less'
})
export class AssessmentComponent {

}
