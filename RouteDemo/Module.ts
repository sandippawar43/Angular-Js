import{BrowserModule } from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import{ RouterModule,Routes} from "@angular/router"
import {HomeClass} from "./HomeComponent"
import {AboutClass} from "./AboutComponent"
import {CommonClass} from "./CommonComponent"
import {ProductClass} from "./ProductComponents"
import {WebClass} from "./WebComponent"
import {SoftwareClass} from "./SoftwareComponent"
import {MobileClass} from "./MobileComponent"
import {AboutCompanyClass} from "./AboutCompany"
import {AboutStaffClass} from "./AboutStaff"
import {GuardClass} from "./GuardService"
import {ChildGuardClass} from "./ChildGuardService"

const myRoots:Routes = [
    {path:'home/:id/:empName',component:HomeClass},
    {path:'about',component:AboutClass,canActivateChild:[ChildGuardClass], children:[
        {path:'aboutCompany',component:AboutCompanyClass},
        {path:'AboutStaff',component:AboutStaffClass}    
    ]},
    {path:'',component:HomeClass},
    {path:'product',component:ProductClass,children:[
        {path:'mobile',component:MobileClass},
        {path:'web',component:WebClass},
        {path:'software',component:SoftwareClass}
    ]}  
]

@NgModule({
    imports:[BrowserModule,RouterModule.forRoot(myRoots)],
    declarations:[CommonClass,AboutClass,HomeClass,ProductClass,WebClass,SoftwareClass,MobileClass,AboutCompanyClass,AboutStaffClass],
    bootstrap:[CommonClass],
    providers:[GuardClass,ChildGuardClass]
})

export class AppModule1{

}