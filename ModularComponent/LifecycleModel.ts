import{BrowserModule } from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {ModularComponentClass} from "./ModulatComponent"
import {StyleComponentClass} from "./StyleComponent"

@NgModule({
    imports:[BrowserModule],
    declarations:[ModularComponentClass,StyleComponentClass],
    bootstrap:[StyleComponentClass],
})

export class LifecycleModel{

    
}