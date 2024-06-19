import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {Post, User} from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  getUsersAndPosts(userId: string): Observable<{ user: User; posts: Post[] }> {
    const user$ = this.http.get<User>(`${this.apiUrl}/users`);
    const posts$ = this.http.get<Post[]>(`${this.apiUrl}/posts`,{
      params: {userId: userId.toString()}
    });

    return forkJoin({user: user$, posts: posts$});
  }


}
