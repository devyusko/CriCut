import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CardComponent} from "../shared/card/card.component";

/**
 * user component messing with signals a bit
 */

type User = {
  id: string;
  avatar: string;
  name: string;
}

// const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf,
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // output function signal
  // eventEmitter done automatically when using output function
  // select = output<string>()
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
    this.select.emit(this.user.id);
  }

  get imageSrc() {
    return '/users/' + this.user.avatar;
  }
}
