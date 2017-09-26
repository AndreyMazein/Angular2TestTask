import { Component,  OnInit } from '@angular/core';

import {Emploee} from "./employee";
import {Departmen} from "./departmen";
import { DataService } from "./data.service";


@Component({
  selector: 'emploee-app',
  templateUrl: './emploee.component.html',
  styleUrls: ['./w3.css'],
})
export class EmploeeComponent  implements OnInit  {

  constructor(private data: DataService) { }

  currentDep: Departmen;
  emploees : Emploee[];

  getEmploees(): void {
    this.data.getEmploees().then(emp => this.emploees = emp);
  }

  ngOnInit(): void {
    this.data.currentDep.subscribe(dep => this.currentDep = dep)
    this.getEmploees();
  }
}

