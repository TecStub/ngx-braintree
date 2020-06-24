/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var NgxBraintreeDirective = /** @class */ (function () {
    function NgxBraintreeDirective(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    /**
     * @return {?}
     */
    NgxBraintreeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.script = this.renderer.createElement('script');
        this.script.type = 'text/javascript';
        this.script.src = 'https://js.braintreegateway.com/web/dropin/1.13.0/js/dropin.min.js';
        this.renderer.appendChild(this.document.body, this.script);
    };
    /**
     * @return {?}
     */
    NgxBraintreeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeChild(this.document.body, this.script);
    };
    NgxBraintreeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxBraintreeDirective]'
                },] }
    ];
    /** @nocollapse */
    NgxBraintreeDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return NgxBraintreeDirective;
}());
export { NgxBraintreeDirective };
if (false) {
    /** @type {?} */
    NgxBraintreeDirective.prototype.script;
    /**
     * @type {?}
     * @private
     */
    NgxBraintreeDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NgxBraintreeDirective.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYnJhaW50cmVlLyIsInNvdXJjZXMiOlsibGliL25neC1icmFpbnRyZWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQU9FLCtCQUFvQixRQUFtQixFQUE0QixRQUFhO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFJLENBQUM7Ozs7SUFFckYsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxvRUFBb0UsQ0FBQztRQUN2RixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3BDOzs7O2dCQUxzQyxTQUFTO2dEQVVKLE1BQU0sU0FBQyxRQUFROztJQWEzRCw0QkFBQztDQUFBLEFBcEJELElBb0JDO1NBakJZLHFCQUFxQjs7O0lBRWhDLHVDQUFZOzs7OztJQUVBLHlDQUEyQjs7Ozs7SUFBRSx5Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBSZW5kZXJlcjIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hCcmFpbnRyZWVEaXJlY3RpdmVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4QnJhaW50cmVlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBzY3JpcHQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2NyaXB0ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHRoaXMuc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgIHRoaXMuc2NyaXB0LnNyYyA9ICdodHRwczovL2pzLmJyYWludHJlZWdhdGV3YXkuY29tL3dlYi9kcm9waW4vMS4xMy4wL2pzL2Ryb3Bpbi5taW4uanMnO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuc2NyaXB0KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuc2NyaXB0KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==