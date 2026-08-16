import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');

  console.log('URL:', req.url);
  console.log('TOKEN:', token);

  if (
    req.url.includes('/user/login') ||
    req.url.includes('/user/register')
  ) {
    return next(req);
  }

  if (token) {

    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(
      'AUTHORIZATION:',
      authReq.headers.get('Authorization')
    );

    return next(authReq);
  }

  return next(req);
};