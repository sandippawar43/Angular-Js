import {Component,OnInit,DoCheck,AfterViewInit,OnChanges,AfterContentChecked,AfterViewChecked,AfterContentInit,OnDestroy} from "@angular/core"


@Component({
    selector:'app-root',
    template:`<h1>Hi</h1>`
})




export class ModularComponentClass implements OnChanges, OnInit, DoCheck, AfterViewInit,OnChanges,AfterContentChecked,AfterViewChecked,AfterContentInit
{
    constructor()
    {
        console.log("Constructor called");
    }
    
    ngOnChanges()
    {
        console.log("ngOnChanges called"); 
    }

    ngOnInit()
    {
        console.log("ngOnInit called"); 
    }

    ngDoCheck()
    {
        console.log("ngDoCheck called"); 
    }

    ngAfterContentInit()
    {
        console.log("ngAfterContentInit called"); 
    }

    ngAfterContentChecked()
    {
        console.log("ngAfterContentChecked called"); 
    }

    ngAfterViewInit()
    {
        console.log("ngAfterViewInit called"); 
    }    

    ngAfterViewChecked()
    {
        console.log("ngAfterViewChecked called"); 
    }    

    ngOnDestroy()
    {
        console.log("ngOnDestroy called"); 
    }
}