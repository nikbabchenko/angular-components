import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'us-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes = [
    {
      title: 'Users',
      link: ['/'],
      options: {
        exact: true
      }
    },
    {
      title: 'Class Binding',
      link: ['/class']
    },
    {
      title: 'Style Binding',
      link: ['/style']
    }
  ];

  constructor() {}

  ngOnInit() {}
}
