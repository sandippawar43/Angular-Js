import {Component,Output, EventEmitter} from "@angular/core"


@Component({

   selector : "app-child1",
   template : `
   <input type="button" value="click" (click)="display()">
   `
})

export class OutputChildComponentClass{

    @Output()
    clickBtn = new EventEmitter();
    cnt:number=0;

    display= function()
    {
        this.cnt+=1;
        this.clickBtn.emit(this.cnt);
    }

}