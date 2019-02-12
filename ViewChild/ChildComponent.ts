import {Component} from "@angular/core"

@Component({

    selector : "app-child",
    template : "{{count}}"
})

export class ChildComponentClass{
        
    count=0;
    status=false;
        increment(){
            this.count = this.count+1;
        }
    
        decrement(){
            this.count = this.count-1;
        }

        start(){
            if(this.status==false)
                    clearInterval(this.count);
        
        setInterval(()=>{this.increment()},1000)
        }

        stop(){
            this.status=true;
        }
}