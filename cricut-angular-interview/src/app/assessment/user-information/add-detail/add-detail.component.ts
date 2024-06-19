import {Component, EventEmitter, inject, Input, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {type TAddDetail} from "./add-detail.model";
import {UserService} from "../user.service";

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
  @Output() add = new EventEmitter<TAddDetail>()
  title = '';
  summary = '';
  dueDate = '';
  private userService = inject(UserService);
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.userService.addUserDetail({
      title: this.title,
      summary: this.summary,
      date: this.dueDate
    }, this.userId);
    this.close.emit();
  }

}
