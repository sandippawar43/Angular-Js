import {Component} from "@angular/core"

@Component({
    selector:'route-app',
    template: `
    <div>
    <a [routerLink]="['aboutCompany']">About Company</a>
    &nbsp;
    <a [routerLink]="['AboutStaff']">About Staff</a>
    </div>
    <hr/>
    <div>
    <router-outlet></router-outlet>
    <div>
    `
})

export class AboutClass
{

}