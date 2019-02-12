import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {ReactiveFormsModule} from "@angular/forms"
import {CustomerClass} from "./CustomerComponent"



@NgModule({
    imports:[BrowserModule,ReactiveFormsModule],
    declarations:[CustomerClass],
    bootstrap:[CustomerClass]
})

export class CustomerModule
{

}