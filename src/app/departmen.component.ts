import {Component, OnInit} from '@angular/core';
import {Departmen} from "./departmen";
import { DataService } from "./data.service";


@Component({
  selector: 'departmen-app',
  templateUrl: './departmen.component.html',
  styleUrls: ['./w3.css'],
})

export class DepartmenComponent implements OnInit  {

  constructor(private data: DataService) { }

  private newDepId: string;
  private newDepName: string;
  private newDepDescription: string;


  currentDep: Departmen;
  departmens : Departmen[];

  ngOnInit(): void {
    this.data.currentDep.subscribe(dep => this.currentDep = dep);
    this.getDepartmens();
  }

  getDepartmens(): void {
    this.data.getDepartmens().then(dep => {this.departmens = dep});
  }

  onSelect(departmen: Departmen): void {
    this.data.changeCurrentDep(departmen)
  }

  addNewDepartman(departmen: Departmen): void{
    if(this.newDepId===undefined ||  this.newDepName===undefined || this.newDepDescription===undefined){
      alert("You did't enter full information about departmen, please try again!" );
    }
    if(Number.isInteger(Number(this.newDepId))){
      this.data.addNewDepartmen(departmen).then(dep => {
        this.departmens.push(departmen);
        this.newDepId='';
        this.newDepName='';
        this.newDepDescription='';
      });
    }
    else {
      alert("ID of new departmen is NOT a number, please try again!");
    }
  }

  deleteDepartmen(departmen: Departmen): void{
    this.data.deleteDepartmen(departmen).then(()=>{
      this.departmens=this.departmens.filter(d=> d != departmen);
      if(this.currentDep == departmen){
        this.data.changeCurrentDep(null);
      }
    });
  }
}
