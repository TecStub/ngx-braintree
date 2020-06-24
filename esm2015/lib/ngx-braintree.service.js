/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
export class NgxBraintreeService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} clientTokenURL
     * @return {?}
     */
    getClientToken(clientTokenURL) {
        return this.http
            .get(clientTokenURL, { responseType: 'json' })
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            return response.token;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return throwError(error);
        })));
    }
    /**
     * @param {?} createPurchaseURL
     * @param {?} nonce
     * @param {?} chargeAmount
     * @return {?}
     */
    createPurchase(createPurchaseURL, nonce, chargeAmount) {
        /** @type {?} */
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
            .post(createPurchaseURL, { nonce: nonce, chargeAmount: chargeAmount }, { 'headers': headers })
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            return response;
        })));
    }
}
NgxBraintreeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxBraintreeService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxBraintreeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJyYWludHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYnJhaW50cmVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUU5QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3BDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGNBQXNCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQzNDLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUNwQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFRCxjQUFjLENBQUMsaUJBQXlCLEVBQUUsS0FBYSxFQUFFLFlBQW9COztjQUNyRSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDekYsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUExQkYsVUFBVTs7OztZQUpILFVBQVU7Ozs7Ozs7SUFPSixtQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3hCcmFpbnRyZWVTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBnZXRDbGllbnRUb2tlbihjbGllbnRUb2tlblVSTDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChjbGllbnRUb2tlblVSTCwge3Jlc3BvbnNlVHlwZTogJ2pzb24nfSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudG9rZW47XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHVyY2hhc2UoY3JlYXRlUHVyY2hhc2VVUkw6IHN0cmluZywgbm9uY2U6IHN0cmluZywgY2hhcmdlQW1vdW50OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChjcmVhdGVQdXJjaGFzZVVSTCwge25vbmNlOiBub25jZSwgY2hhcmdlQW1vdW50OiBjaGFyZ2VBbW91bnR9LCB7J2hlYWRlcnMnOiBoZWFkZXJzfSlcclxuICAgICAgLnBpcGUobWFwKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=