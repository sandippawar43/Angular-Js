import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {FirstClass} from "./FirstComponent"
import {SecondClass} from "./SecondComponent"


@NgModule({
    imports:[BrowserModule],
    declarations:[FirstClass, SecondClass],
    bootstrap:[FirstClass]
})

export class FirstModule
{

}