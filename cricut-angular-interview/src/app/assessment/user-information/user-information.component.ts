import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-user-information',
  styleUrls: ['user-information.component.less'],
  templateUrl: 'user-information.component.html',
  standalone: true
})
export class UserInformationComponent {
  @Input({ required: true }) name!: string;
}
