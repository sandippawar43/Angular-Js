import {Component} from "@angular/core"
import {FormGroup, FormBuilder,Validators} from "@angular/forms"

@Component({
    selector:'app-root',
    templateUrl:'TemplateForm.html'
})

export class CustomerClass
{
    customerFormData=[];
    customerForm : FormGroup;
    


}