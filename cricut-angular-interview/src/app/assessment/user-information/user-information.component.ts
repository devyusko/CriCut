import {Component, Input} from "@angular/core";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {AddDetailComponent} from "./add-detail/add-detail.component";

@Component({
  selector: 'app-user-information',
  styleUrls: ['user-information.component.less'],
  templateUrl: 'user-information.component.html',
  imports: [
    UserDetailComponent,
    AddDetailComponent
  ],
  standalone: true
})
export class UserInformationComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;

  isAddDetail = false;
  userDetails = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserDetails() {
    return this.userDetails.filter((userDetails) => userDetails.userId === this.id);
  }

  onDelete(id: string) {
    this.userDetails = this.userDetails.filter((detail) => detail.id != id );
  }

  onAddDetail() {
    this.isAddDetail = true;
  }

  onCancel() {
    this.isAddDetail = false;
  }
}
