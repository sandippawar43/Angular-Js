import {Component} from "@angular/core"

@Component({
    selector:'route-app',
    template: `
    <div>
    <a [routerLink]="['mobile']">Mobile</a>
    &nbsp;
    <a [routerLink]="['web']">Web</a>
    &nbsp;
    <a [routerLink]="['software']">Software</a>
    </div>
    <hr/>
    <div>
    <router-outlet></router-outlet>
    </div>
    `

})

export class ProductClass
{

}