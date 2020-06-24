/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ConfigureDropinService = /** @class */ (function () {
    function ConfigureDropinService() {
    }
    /**
     * @param {?} dropinConfig
     * @return {?}
     */
    ConfigureDropinService.prototype.configureCardHolderName = /**
     * @param {?} dropinConfig
     * @return {?}
     */
    function (dropinConfig) {
        dropinConfig.card = {
            cardholderName: {
                required: true
            }
        };
    };
    /**
     * @param {?} dropinConfig
     * @param {?} chargeAmount
     * @param {?} currency
     * @return {?}
     */
    ConfigureDropinService.prototype.configurePaypalCheckout = /**
     * @param {?} dropinConfig
     * @param {?} chargeAmount
     * @param {?} currency
     * @return {?}
     */
    function (dropinConfig, chargeAmount, currency) {
        dropinConfig.paypal = {
            flow: 'checkout',
            amount: chargeAmount,
            currency: currency
        };
    };
    /**
     * @param {?} dropinConfig
     * @return {?}
     */
    ConfigureDropinService.prototype.configurePaypalVault = /**
     * @param {?} dropinConfig
     * @return {?}
     */
    function (dropinConfig) {
        dropinConfig.paypal = {
            flow: 'vault'
        };
    };
    /**
     * @param {?} dropinConfig
     * @param {?} locale
     * @return {?}
     */
    ConfigureDropinService.prototype.configureLocale = /**
     * @param {?} dropinConfig
     * @param {?} locale
     * @return {?}
     */
    function (dropinConfig, locale) {
        dropinConfig.locale = locale;
    };
    ConfigureDropinService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigureDropinService.ctorParameters = function () { return []; };
    return ConfigureDropinService;
}());
export { ConfigureDropinService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlLWRyb3Bpbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJyYWludHJlZS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWd1cmUtZHJvcGluLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFHRTtJQUFnQixDQUFDOzs7OztJQUVqQix3REFBdUI7Ozs7SUFBdkIsVUFBd0IsWUFBWTtRQUNsQyxZQUFZLENBQUMsSUFBSSxHQUFHO1lBQ2xCLGNBQWMsRUFBRTtnQkFDZCxRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCx3REFBdUI7Ozs7OztJQUF2QixVQUF3QixZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVE7UUFDMUQsWUFBWSxDQUFDLE1BQU0sR0FBRztZQUNwQixJQUFJLEVBQUUsVUFBVTtZQUNoQixNQUFNLEVBQUUsWUFBWTtZQUNwQixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxxREFBb0I7Ozs7SUFBcEIsVUFBcUIsWUFBWTtRQUMvQixZQUFZLENBQUMsTUFBTSxHQUFHO1lBQ3BCLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELGdEQUFlOzs7OztJQUFmLFVBQWdCLFlBQVksRUFBRSxNQUFNO1FBQ2xDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7O2dCQTdCRixVQUFVOzs7O0lBOEJYLDZCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJlRHJvcGluU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGNvbmZpZ3VyZUNhcmRIb2xkZXJOYW1lKGRyb3BpbkNvbmZpZyk6IHZvaWQge1xyXG4gICAgZHJvcGluQ29uZmlnLmNhcmQgPSB7XHJcbiAgICAgIGNhcmRob2xkZXJOYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZVBheXBhbENoZWNrb3V0KGRyb3BpbkNvbmZpZywgY2hhcmdlQW1vdW50LCBjdXJyZW5jeSk6IHZvaWQge1xyXG4gICAgZHJvcGluQ29uZmlnLnBheXBhbCA9IHtcclxuICAgICAgZmxvdzogJ2NoZWNrb3V0JyxcclxuICAgICAgYW1vdW50OiBjaGFyZ2VBbW91bnQsXHJcbiAgICAgIGN1cnJlbmN5OiBjdXJyZW5jeVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZVBheXBhbFZhdWx0KGRyb3BpbkNvbmZpZykge1xyXG4gICAgZHJvcGluQ29uZmlnLnBheXBhbCA9IHtcclxuICAgICAgZmxvdzogJ3ZhdWx0J1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZUxvY2FsZShkcm9waW5Db25maWcsIGxvY2FsZSkge1xyXG4gICAgZHJvcGluQ29uZmlnLmxvY2FsZSA9IGxvY2FsZTtcclxuICB9XHJcbn1cclxuIl19