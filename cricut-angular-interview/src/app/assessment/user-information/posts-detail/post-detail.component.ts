import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.less'
})
export class PostDetailComponent {
  @Output() close = new EventEmitter<void>();
  onCancel() {
    this.close.emit();
  }
}
