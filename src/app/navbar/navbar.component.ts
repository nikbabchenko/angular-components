import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'us-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes = [
    {
      title: 'Class Binding',
      link: ['/class']
    },
    {
      title: 'Style Binding',
      link: ['/style']
    },
    {
      title: 'Two Way Binding',
      link: ['/two-way-binding']
    },
    {
      title: 'Structural Directives',
      link: ['/structural']
    },
    {
      title: 'LifeCycleHooks',
      link: ['/hooks']
    },
    {
      title: 'Users',
      link: ['/'],
      options: {
        exact: true
      }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
