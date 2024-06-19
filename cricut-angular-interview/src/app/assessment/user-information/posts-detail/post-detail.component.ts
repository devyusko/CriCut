import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "../../shared/card/card.component";
import {AssessmentService} from "../../assessment.service";
import {Post} from "../../post.model";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CardComponent
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.less'
})
export class PostDetailComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  posts: Post[] = [];

  constructor(private postService: AssessmentService) {
  }
  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onCancel() {
    this.close.emit();
  }
}
