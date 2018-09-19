import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {

    users;
    error;

    // @Effect() login = this.actions$.pipe(
    //     ofType<AuthAction.Login>(AuthAction.AuthActionTypes.Login),
    //     map(action => {
    //         this.authService.login(action.username, action.password).subscribe(
    //             data => {
    //                 if (localStorage.getItem('current_user') === null) {
    //                     this.authService.getUserJSON(data).subscribe(
    //                         data => {
    //                             this.users = data
    //                             this.localstorageservice.addCurrentUser(this.users.id, this.users.username, this.users.name, this.users.age, this.users.email, this.users.phone, this.users.authorities[0].authority)
    //                             switch (this.users.authorities[0].authority) {
    //                                 case "ROLE_CUSTOMER":
    //                                     this.router.navigate(['/customer/home'])
    //                                     break;
    //                                 case "ROLE_ADMIN":
    //                                     this.router.navigate(['/admin/home'])
    //                                     break;
    //                                 case "ROLE_CLECK":
    //                                     this.router.navigate(['/seller/home'])
    //                                     break;
    //                                 default:
    //                                     break;
    //                             }
    //                         }
    //                     )
    //                 }
    //             },
    //             err => {
    //                 this.error = err
    //                 alert(this.error.error)
    //             }
    //         );
    //     })
    // )

    // @Effect() register = this.actions$.pipe(
    //     ofType<AuthAction.Register>(AuthAction.AuthActionTypes.Register),
    //     map(action => {
    //         this.authService.register(action.username, action.password, action.confirm, action.fullname, action.age, action.phone, action.email)
    //             .subscribe(
    //                 data => {
    //                     alert("Register Success!")
    //                     this.router.navigate(['/login'])
    //                 },
    //                 err => {
    //                     this.error = err
    //                     alert("Register Fail!\n" + this.error.error)
    //                     this.router.navigate(['/register'])
    //                 }
    //             )
    //     })
    // )

    // @Effect({ dispatch: false }) loginSuccess = this.actions$.pipe(
    //     ofType(AuthAction.AuthActionTypes.LoginSuccess),
    //     tap(() => this.router.navigate(['/customer/home']))
    // )

    // @Effect({ dispatch: false }) loginFail = this.actions$.pipe(
    //     ofType(AuthAction.AuthActionTypes.LoginFailure),
    //     tap(() => this.router.navigate(['/customer/login']))
    // )

    // @Effect({ dispatch: false })
    // loginRedirect$ = this.actions$.pipe(
    //     ofType(AuthAction.AuthActionTypes.Logout),
    //     tap(() => {
    //         this.router.navigate(['customer/login']);
    //     })
    // );

    // constructor(
    //     private actions$: Actions,
    //     private authService: AuthService,
    //     private localstorageservice: LocalStorageAddService,
    //     private router: Router,
    // ) { }
}
