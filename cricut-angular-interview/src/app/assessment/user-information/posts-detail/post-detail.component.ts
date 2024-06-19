import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "../../shared/card/card.component";
import {AssessmentService} from "../../assessment.service";
import {Post} from "../../post.model";
import {map} from "rxjs";

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
  @Input({ required: true }) userId!: string;
  posts: Post[] = [];
  data:[] = [];

  constructor(private postService: AssessmentService) {
  }
  ngOnInit() {
    this.postService.getUsersAndPosts(this.userId).pipe(
      map(response => response.posts)
    ).subscribe(posts => {
      this.posts = posts;
    })
  }

  onCancel() {
    this.close.emit();
  }
}
