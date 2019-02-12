import {Component, ViewChild} from "@angular/core"
import {ChildComponentClass} from "./ChildComponent"

@Component({

    selector : "app-root",
    templateUrl : "ParentTemplate.html"

})

export class ParentComponent{

    @ViewChild(ChildComponentClass)

    private ch : ChildComponentClass

    next = function()
    {
        this.ch.start()
    }

    previous = function()
    {
        this.ch.stop()
        
    }
}