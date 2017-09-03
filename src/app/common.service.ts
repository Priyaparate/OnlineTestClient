import { Injectable } from '@angular/core';
import { config } from "./configurations/config";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/flatMap';
@Injectable()
export class CommonService {
 

  constructor(private entity:string, private http:Http) 
  {
  console.log(entity)
  }
 
 public Get(id:string):Observable<any>
 {

  return this.http.get(config.baseUri+this.entity+"/get/"+id).map(res=>res.json());;
 }
public list():Observable<any>
 {

  return this.http.get(config.baseUri+this.entity+"/List").map(res=>res.json());
 }

public Dependantlist():Observable<any>
 {

  return this.http.get(config.baseUri+this.entity+"/GetDepedentObjectList").map(res=>res.json());
 }

}
