import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'us-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  users: any[] = [];
  sortByProps = ['name', 'email'];
  sortByField = this.sortByProps[0];
  today = new Date();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`https://jsonplaceholder.typicode.com/users`).subscribe((users: any[]) => {
      this.users = users;
    });
  }
}
