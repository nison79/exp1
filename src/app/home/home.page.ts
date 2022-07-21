/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public data = [
    {
      group: 'lennon',
      store_id: 89456,
      websiteEmail: 'lennon@gmail.com',
      address: 'Othonos 13',
      telephone: 6945484848,
      vatNumber: 789456123,
    },
    {
      group: 'garry',
      store_id: 89456,
      websiteEmail: 'garry23@gmail.com',
      address: 'amalias 23',
      telephone: 6945484848,
      vatNumber: 789456123,
    },
    {
      group: 'tzery',
      store_id: 89456,
      websiteEmail: 'tzery@gmail.com',
      address: 'pontou 293',
      telephone: 6945484848,
      vatNumber: 789456123,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}