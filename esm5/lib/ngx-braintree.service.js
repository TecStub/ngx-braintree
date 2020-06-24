/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
var NgxBraintreeService = /** @class */ (function () {
    function NgxBraintreeService(http) {
        this.http = http;
    }
    /**
     * @param {?} clientTokenURL
     * @return {?}
     */
    NgxBraintreeService.prototype.getClientToken = /**
     * @param {?} clientTokenURL
     * @return {?}
     */
    function (clientTokenURL) {
        return this.http
            .get(clientTokenURL, { responseType: 'json' })
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            return response.token;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return throwError(error);
        })));
    };
    /**
     * @param {?} createPurchaseURL
     * @param {?} nonce
     * @param {?} chargeAmount
     * @return {?}
     */
    NgxBraintreeService.prototype.createPurchase = /**
     * @param {?} createPurchaseURL
     * @param {?} nonce
     * @param {?} chargeAmount
     * @return {?}
     */
    function (createPurchaseURL, nonce, chargeAmount) {
        /** @type {?} */
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http
            .post(createPurchaseURL, { nonce: nonce, chargeAmount: chargeAmount }, { 'headers': headers })
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            return response;
        })));
    };
    NgxBraintreeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxBraintreeService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return NgxBraintreeService;
}());
export { NgxBraintreeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxBraintreeService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJyYWludHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYnJhaW50cmVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RCxPQUFPLEVBQWEsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0M7SUFHRSw2QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxjQUFzQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUMsQ0FBQzthQUMzQyxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUMsUUFBYTtZQUNoQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLFVBQUMsS0FBSztZQUNmLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBRUQsNENBQWM7Ozs7OztJQUFkLFVBQWUsaUJBQXlCLEVBQUUsS0FBYSxFQUFFLFlBQW9COztZQUNyRSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDekYsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLFFBQWE7WUFDdEIsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7O2dCQTFCRixVQUFVOzs7O2dCQUpILFVBQVU7O0lBZ0NsQiwwQkFBQztDQUFBLEFBNUJELElBNEJDO1NBM0JZLG1CQUFtQjs7Ozs7O0lBRWxCLG1DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCB0aHJvd0Vycm9yfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5neEJyYWludHJlZVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICB9XHJcblxyXG4gIGdldENsaWVudFRva2VuKGNsaWVudFRva2VuVVJMOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGNsaWVudFRva2VuVVJMLCB7cmVzcG9uc2VUeXBlOiAnanNvbid9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS50b2tlbjtcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQdXJjaGFzZShjcmVhdGVQdXJjaGFzZVVSTDogc3RyaW5nLCBub25jZTogc3RyaW5nLCBjaGFyZ2VBbW91bnQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KGNyZWF0ZVB1cmNoYXNlVVJMLCB7bm9uY2U6IG5vbmNlLCBjaGFyZ2VBbW91bnQ6IGNoYXJnZUFtb3VudH0sIHsnaGVhZGVycyc6IGhlYWRlcnN9KVxyXG4gICAgICAucGlwZShtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0pKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==