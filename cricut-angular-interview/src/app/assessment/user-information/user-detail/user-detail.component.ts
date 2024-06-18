import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CardComponent} from "../../shared/card/card.component";

type TDetails = {
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
  imports: [CardComponent],
  standalone: true
})
export class UserDetailComponent {
  @Input({ required:true }) detail!: TDetails;
  @Output() complete = new EventEmitter<string>();

  onDelete() {
    this.complete.emit(this.detail.id);
    console.log(this.detail.id);
  }
}
