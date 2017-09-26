import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Departmen} from "./departmen";
import {Emploee} from "./employee";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Http, Response, RequestOptions, Headers } from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private DepartmenUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/';
  private EmploeesUrl ='http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees';

  constructor(private http: Http) { }


  getDepartmens(): Promise<Departmen []> {
    return this.http.get(this.DepartmenUrl)
      .toPromise()
      .then(response => response.json() as Departmen[])
      .catch(this.handleError);

  }

  getEmploees(): Promise<Emploee[]> {
    return this.http.get(this.EmploeesUrl)
      .toPromise()
      .then(response => response.json() as Emploee[])
      .catch(this.handleError);
  }

  addNewDepartmen(departmen : Departmen): Promise<Departmen>{
    return this.http.post(this.DepartmenUrl, departmen)
      .toPromise()
      .then(response => response.json() as Departmen)
      .catch(this.handleError);
  }

  deleteDepartmen(departmen : Departmen): Promise<any>{
    return this.http.delete(this.DepartmenUrl+departmen.id)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private departmenObser = new BehaviorSubject<Departmen>(null);
  currentDep = this.departmenObser.asObservable();

  changeCurrentDep(newDepartmen: Departmen) {
    this.departmenObser.next(newDepartmen)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
