import {CanActivateChild} from "@angular/router"
import {Injectable} from "@angular/core"

@Injectable()

export class ChildGuardClass implements CanActivateChild
{
    canActivateChild(){
        return false;    
    }
}