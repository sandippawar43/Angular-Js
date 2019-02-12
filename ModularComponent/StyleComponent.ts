import {Component} from "@angular/core"


@Component({
    selector:'app-root',
    template:`
    <ul *ngFor="let s of student" class="list-group" [ngStyle]="{'color': getColor(s.City)}">
    <li class="list-group-item">{{s.name+" "+s.RollNo+" "+s.City}}</li>
    </ul>
    `
})




export class StyleComponentClass
{
    student = [{"name":"Jevan","RollNo":1,"City":"Jodhpur"},
                {"name":"Anand","RollNo":2,"City":"Tuljapur"},
                {"name":"Sandip","RollNo":3,"City":"Karad"},
                {"name":"Vikas","RollNo":4,"City":"Indor"}]

    getColor(key)
    {
        var color="";
        switch (key) {
            case "Jodhpur":
            color="red";
            break;
            case "Tuljapur":
            color="blue";      
            break;
            case "Karad":
            color="orange";      
            break;
            case "Indor":
            color="green";
            break;
            default:
            color="pink"
                break;
        }
        return color;
    }
}