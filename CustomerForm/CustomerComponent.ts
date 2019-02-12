import {Component} from "@angular/core"
import {FormGroup, FormBuilder,Validators} from "@angular/forms"

@Component({
    selector:'app-root',
    templateUrl:'Form.html'
})

export class CustomerClass
{
    customerFormData=[];
    customerForm : FormGroup;
    constructor(private fb :FormBuilder ){
        this.customerForm = fb.group({
            id:[null,Validators.required],
            name:[null,Validators.required],
            email:[null,Validators.compose( [Validators.required,Validators.email])],
            mobile:[null,Validators.compose([Validators.required,Validators.pattern("[7-9][0-9]{9}")])],
            pin:[null,Validators.compose([Validators.required,Validators.pattern("[0-9]{6}")])]
        })
    }


    call=function(cd)
    {
        this.customerFormData.push(cd);   
    }

    viewData=function(dd)
    {

    }
}