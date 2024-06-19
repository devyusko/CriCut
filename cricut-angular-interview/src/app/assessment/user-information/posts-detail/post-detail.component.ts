import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "../../shared/card/card.component";
import {AssessmentService} from "../../assessment.service";
import {Post} from "../../post.model";
import {map, Subject, takeUntil} from "rxjs";

/**
 * post detail component: mostly usage for rxjs operator
 */
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
export class PostDetailComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;
  posts: Post[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private postService: AssessmentService) {
  }
  ngOnInit() {
    this.postService.getUsersAndPosts(this.userId).pipe(
      map(response => response.posts),
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (posts) => this.posts = posts,
      error: (error) => console.log('Error in fetch: ', error),
      complete: () => console.log('Complete!')
    })
  };

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onCancel() {
    this.close.emit();
  }
}
