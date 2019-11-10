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
  constructor() {}

  ngOnInit() {}

  onButtonClick(index: number) {
    this.selectedUser = this.users[index];
  }
}
