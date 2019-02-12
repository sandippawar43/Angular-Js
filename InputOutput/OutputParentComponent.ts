import {Component} from "@angular/core"


@Component({

   selector : "app-root",
   template : `

   <app-child1 (clickBtn)="call($event)" > </app-child1>
   {{msg}}
   `
})

export class OutputParentComponentClass{

    msg:number=0;
    call=function(c)
    {

        this.msg = c;
    }
}