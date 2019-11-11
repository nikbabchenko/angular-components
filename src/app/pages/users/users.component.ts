import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'us-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title = 'Users App';
  users = ['Ivan', 'Vadim', 'Igor', 'Denis'];
  selectedUser = this.users[0];
  addUserName = '';
  constructor() {}

  ngOnInit() {}

  onButtonClick(index: number) {
    this.selectedUser = this.users[index];
  }

  addUser() {
    if (!this.users.includes(this.addUserName)) {
      this.users.push(this.addUserName);
      this.addUserName = '';
    }
  }

  removeUser(i: number) {
    if (this.users[i] === this.selectedUser) {
      this.selectedUser = '';
    }
    this.users.splice(i, 1);
  }
}
