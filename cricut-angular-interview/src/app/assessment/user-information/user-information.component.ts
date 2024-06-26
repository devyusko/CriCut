import {Component, Input} from "@angular/core";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {AddDetailComponent} from "./add-detail/add-detail.component";
import {type TAddDetail} from "./add-detail/add-detail.model";
import {UserService} from "./user.service";
import {PostDetailComponent} from "./posts-detail/post-detail.component";

/**
 * user information component which is the parent component
 */
@Component({
  selector: 'app-user-information',
  styleUrls: ['user-information.component.less'],
  templateUrl: 'user-information.component.html',
  imports: [
    UserDetailComponent,
    AddDetailComponent,
    PostDetailComponent
  ],
  standalone: true
})
export class UserInformationComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;

  isAddDetail = false;
  isPostDetail = false;

  get selectedUserDetails() {
    return this.userService.getUserDetail(this.id);
  }

  onDelete(id: string) {
    this.userService.deleteUser(id)
  }

  constructor(private userService: UserService) {
  }
  onAddDetail() {
    this.isAddDetail = true;
  }

  onPostDetail() {
    this.isPostDetail = true;
  }

  onCancel() {
    this.isAddDetail = false;
    this.isPostDetail = false;
  }

  onAdd(addDetail: TAddDetail) {
    this.userService.addUserDetail(addDetail, this.id);
    this.isAddDetail = false;
  }
}
