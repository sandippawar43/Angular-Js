import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {ParentComponent} from "./ParentComponent"
import {ChildComponentClass} from "./ChildComponent"

@NgModule({
    imports:[BrowserModule],
    declarations:[ParentComponent,ChildComponentClass],
    bootstrap:[ParentComponent]
})

export class ViewModule {

}