import {Component} from "@angular/core"
import {FormGroup,FormBuilder,Validators} from "@angular/forms"
import {Employee} from "./Employee"

@Component({
    selector:"app-root",
    templateUrl:"EmployeeForm.html"
})

 
export class EmployeeFormClass{

    empForm:FormGroup;

    constructor(private fb:FormBuilder)
    {
        this.empForm = fb.group({
            name:[null, Validators.required],
            email:[null,Validators.compose([Validators.required,Validators.email])],
            address:[null,Validators.required],
            mobile:[null,Validators.compose([Validators.pattern("[7-9][0-9]{9}")])],
            password:[null,Validators.compose([Validators.pattern("[A-Z]"),Validators.minLength(8)])],
            rePassword:[null,Validators.compose([Validators.pattern("[A-Z]"),Validators.minLength(8)])]

        })
    }
}
