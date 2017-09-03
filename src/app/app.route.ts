import { RouterModule, Routes ,} from '@angular/router';
import { CommonComponent } from "./common/common.component";
import { NgModule } from "@angular/core";
const appRoutes: Routes = [
  { path: 'state',
   component: CommonComponent,
    data: { title: 'list of State ',entity:"state" } ,
  //  outlet: 'data'
},
  { path: 'country', 
  component: CommonComponent,
  data:{ title: 'List of Country',entity:"country" } ,
  //  outlet: 'data'
  },
  { path: '', 
  component: CommonComponent,
   data: { title: 'list of State ',entity:"state" }},
 
  { path: '**', 
  component: CommonComponent, 
  data: { title: 'list of State ',entity:"state" }, 
  // outlet: 'data'
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ]
})
export class AppRouteModule { }