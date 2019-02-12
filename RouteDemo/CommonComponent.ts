import {Component} from "@angular/core"

@Component({
    selector:'app-root',
    template: `
    <div>
    <a [routerLink]="['/home', 100, 'Hello']">Home</a>
    &nbsp;
    <a [routerLink]="['/about']">About</a>
    &nbsp;
    <a [routerLink]="['/product']">Products</a>
    </div>
    <hr/>
    <div>
    <router-outlet></router-outlet>
    </div>
    <hr/>
    <div>Footer Section</div>
    `
})

export class CommonClass{

}