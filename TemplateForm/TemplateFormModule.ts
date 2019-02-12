import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {FormsModule} from "@angular/forms"
import {CustomerClass} from "./TemplateFormComponent"



@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[CustomerClass],
    bootstrap:[CustomerClass]
})

export class CustomerTemplateModule
{

}