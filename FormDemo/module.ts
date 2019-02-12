import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import {FormClass} from "./FormComponent"
import {EmployeeFormClass} from "./EmployeeFormComponent"


@NgModule({
    imports:[BrowserModule,FormsModule,ReactiveFormsModule],
    declarations:[FormClass, EmployeeFormClass],
    bootstrap:[EmployeeFormClass]
})


export class AppFormModule{
    
    }
    