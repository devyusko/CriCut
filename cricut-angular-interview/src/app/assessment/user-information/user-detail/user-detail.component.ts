import {Component, inject, Input} from "@angular/core";
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {UserService} from "../user.service";
import {PrivacyFilterPipe} from "../../shared/privacy-filter/privacy-filter.pipe";

/**
 * user detail component
 */

type TDetails = {
  pDetail: string;
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,
}
@Component({
  selector: 'app-user-detail',
  templateUrl: 'user-detail.component.html',
  styleUrl: 'user-detail.component.less',
  imports: [CardComponent, DatePipe, PrivacyFilterPipe],
  standalone: true
})
export class UserDetailComponent {
  @Input({ required:true }) detail!: TDetails;
  private userService = inject(UserService)

  onDelete() {
    this.userService.deleteUser(this.detail.id);
    console.log(this.detail.id);
  }
}
