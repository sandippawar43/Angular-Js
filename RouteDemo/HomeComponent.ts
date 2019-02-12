import {Component} from "@angular/core"
import {ActivatedRoute} from "@angular/router"

@Component({
    selector:'route-app',
    template: '<h1> Home {{eid}} {{ename}}</h1>'
})

export class HomeClass
{
    eid:number=0;
    ename:String="";
    constructor(private ar:ActivatedRoute)
    {
        this.ar.params.subscribe(p=>{
            this.eid = p['id'];
            this.ename = p['empName'];
        })
    }
}