import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-add-detail',
  styleUrl: 'add-detail.component.less',
  templateUrl: 'add-detail.component.html',
  imports: [],
  standalone: true
})
export class AddDetailComponent {


  protected readonly oncancel = oncancel;
  @Output() cancel = new EventEmitter<void>();
  onCancel() {
    this.cancel.emit();
  }

}
