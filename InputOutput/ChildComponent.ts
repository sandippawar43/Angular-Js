import {Component,Input} from "@angular/core"

@Component({

    selector : "app-child",
    template :  "<h2>{{msg}}</h2>"
})

export class ChildComponentClass{
 
    @Input()
    msg:string="welcome"
}