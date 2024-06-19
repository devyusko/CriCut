import {Component, EventEmitter, inject, Input, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {UserService} from "../user.service";

/**
 * add user detail component
 */

@Component({
  selector: 'app-add-detail',
  styleUrl: 'add-detail.component.less',
  templateUrl: 'add-detail.component.html',
  imports: [FormsModule],
  standalone: true
})
export class AddDetailComponent {
  protected readonly oncancel = oncancel;
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<TAddDetail>()
  title = '';
  summary = '';
  dueDate = '';
  pDetail = '';
  private userService = inject(UserService);
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.userService.addUserDetail({
      title: this.title,
      summary: this.summary,
      pDetail: this.pDetail,
      date: this.dueDate
    }, this.userId);
    this.close.emit();
  }

}
