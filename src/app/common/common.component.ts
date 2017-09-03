import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from "app/common.service";
import { Http } from "@angular/http";
import * as _ from "lodash";
import { PreloadingStrategy, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {




  entity: string;
  list: any[];
  dependantObjectList: any;
  title: string;
  dependantobj = []
  headers: any[];
  editObject: any;
  filtertext: string = "";
  selectkey: string
  _service: CommonService;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.entity = route.root.firstChild.snapshot.data['entity']
    this.title = route.root.firstChild.snapshot.data['title']
  }

  ngOnInit() {
    if (this.entity != null) {
      this._service = new CommonService(this.entity, this.http);
      this.getList();
      this.getDependantObjectList();
    }

  }

  tearDown() {
    this.headers = null;
    this.editObject = null;

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
  setup(item) {
    this.headers = Object.getOwnPropertyNames(item);
    this.editObject = item;
  }
  edit(item) {
    this.tearDown();
    this.setup(item)
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
            var selectvaluekey = Object.keys(this.dependantobj[0])
            this.selectkey = selectvaluekey.filter(item => {
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
