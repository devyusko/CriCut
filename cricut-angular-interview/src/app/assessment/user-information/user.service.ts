import {TAddDetail} from "./add-detail/add-detail.model";
import {Injectable} from "@angular/core";

/**
 * user service for sharing user data
 */

@Injectable({providedIn: 'root'})
export class UserService {
  private userDetails = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      pDetail:
        'hates spiders and has weird liking for balloons',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      pDetail:
        'loves does but hates cats',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      pDetail:
        'none',
      dueDate: '2024-06-15',
    },
  ];

  getUserDetail(userId: string) {
    return this.userDetails.filter((userDetails) => userDetails.userId === userId);
  }

  addUserDetail(userData: TAddDetail, userId: string) {
    this.userDetails.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: userData.title,
      summary: userData.summary,
      pDetail: userData.pDetail,
      dueDate: userData.date
    });
  }

  deleteUser(id: string) {
    this.userDetails = this.userDetails.filter((detail) => detail.id != id );
  }
}
