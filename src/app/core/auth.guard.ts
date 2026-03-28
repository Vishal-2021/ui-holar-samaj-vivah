import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn =(Route, state)=>{

    const router = inject(Router);

    const userId = localStorage.getItem('user_id');

    if(userId){
        return true;
    }
    else{
        router.navigate(['/login']);
        return false;
    }
}