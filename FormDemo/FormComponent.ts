import {Component} from  "@angular/core"
import {FormGroup,FormBuilder, Validators} from "@angular/forms"
@Component({
    selector:'app-root',
    templateUrl:'form.html'
})


export class FormClass{

    myForm:FormGroup;

    constructor(private fb:FormBuilder){
         this.myForm = fb.group({
             rno:['1'],
             name:[null, Validators.required],
             email:[null, [Validators.compose([Validators.required, Validators.email])]],
             mobile:[null, Validators.compose([Validators.pattern("([+]91-)?[7-9][0-9]{9}")])]
         })
    }


    call=function(pp)
    {
alert(pp.name + " "+ pp.rno);
    }
}