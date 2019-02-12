import {CanActivate} from "@angular/router"
import {Injectable} from "@angular/core"

@Injectable()

export class GuardClass implements CanActivate
{
    canActivate(){
        return false;    
    }
}