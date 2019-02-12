import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {ParentComponentClass} from "./ParentComponent"
import {ChildComponentClass} from "./ChildComponent"
import {OutputParentComponentClass} from "./OutputParentComponent"
import {OutputChildComponentClass} from "./OutputChildComponent"

@NgModule({
    imports:[BrowserModule],
    declarations:[ParentComponentClass,ChildComponentClass,OutputChildComponentClass, OutputParentComponentClass],
    bootstrap:[OutputParentComponentClass]
})

export class InputOutputModule {

}