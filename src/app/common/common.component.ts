import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from "app/common.service";
import { Http } from "@angular/http";
import * as _ from "lodash";
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  @Input()
  entity: string;
  list: any[];
  dependantObjectList: any;
  dependanliststring: string;
  dependantobj = []
  headers: any[];
  editObject: any;
  filtertext: string = "";
  selectkey:string
  _service: CommonService;
  constructor(private http: Http) {
    if (this.entity == null) {
      this.entity = "state"
    }
    this._service = new CommonService(this.entity, http);

  }

  ngOnInit() {
    this.getList();
    this.getDependantObjectList();
  }
  getList() {
    this._service.list().subscribe(x => {

      this.list = x;

      this.headers = Object.getOwnPropertyNames(this.list[0]);
    });

  }

  getDependantObjectList() {
    this._service.Dependantlist().subscribe(x => {
      this.dependantObjectList = x;


    });

  }
  edit(item) {
    this.editObject = item;

  }

  delete(item) {

  }
  isKey(key: string): boolean {
    return key == "Id";
  }



  isDependant(enitykey: string, loadDependancy: boolean): boolean {
    var result = false;
    for (var key in this.dependantObjectList) {
      if (this.dependantObjectList.hasOwnProperty(key)) {
        if (key == enitykey) {
          result = true;
          if (loadDependancy) {
          this.dependantobj = this.dependantObjectList[key]
          var selectvaluekey=Object.keys(this.dependantobj[0])
        this.selectkey= selectvaluekey.filter(item=>{
              return item.toLowerCase().indexOf("name") !== -1

          })[0];
            console.log(this.dependantobj);
          }
          break;
        }
      }
    }
    return result;


  }

}
