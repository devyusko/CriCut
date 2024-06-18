import {Component, EventEmitter, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {type TAddDetail} from "./add-detail.model";

@Component({
  selector: 'app-add-detail',
  styleUrl: 'add-detail.component.less',
  templateUrl: 'add-detail.component.html',
  imports: [FormsModule],
  standalone: true
})
export class AddDetailComponent {


  protected readonly oncancel = oncancel;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<TAddDetail>()
  title = '';
  summary = '';
  dueDate = '';
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      date: this.dueDate
    });
  }

}
