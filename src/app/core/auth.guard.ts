import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn =(Route, state)=>{

    const router = inject(Router);

    const userId = localStorage.getItem('user_id');
    const expiryTime = localStorage.getItem('expiryTime');
    
    if (!userId || !expiryTime) {

        router.navigate(['/login']);

        return false;

    }

    if (Date.now() > Number(expiryTime)) {

        localStorage.clear();

        alert('Session expired. Please login again.');

        router.navigate(['/login']);

        return false;

    }

  return true;

}