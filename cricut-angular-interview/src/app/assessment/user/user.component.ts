import {Component, Input} from '@angular/core';
import { MOCK_USERS } from '../mock-users'
import {NgForOf} from "@angular/common";

const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  // this is where it is initialized a signal
  // selectUser = signal(MOCK_USERS[randomIndex]);
  // computed meant to be used with signal.
  // the computed function angular automatically analyzes and subscribes re compute the image path.
  // only updates the signal rather than entire page.
  // imageSrc = computed(() => '/users/' + this.selectUser().avatar)/**/

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);
    // the set method updates the signal
    // this.selectUser.set(MOCK_USERS[randomIndex]);
  }

  get imageSrc() {
    return '/users/' + this.avatar;
  }
}
