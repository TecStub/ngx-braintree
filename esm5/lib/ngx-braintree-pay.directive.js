/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef } from '@angular/core';
import { NgxBraintreeComponent } from './ngx-braintree.component';
var NgxBraintreePayDirective = /** @class */ (function () {
    function NgxBraintreePayDirective(elementRef, renderer, ngxBtComponent) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngxBtComponent = ngxBtComponent;
        // Disable the pay button initially. This will be enabled after the user fills the dropin information.
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', true);
        // Subscribe the payButtonStatus event to enable disable the pay button
        this.ngxBtComponent
            .payButtonStatus
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            _this.renderer.setProperty(_this.elementRef.nativeElement, 'disabled', !status);
        }));
        // Handle click event for the pay button
        this.renderer.listen(this.elementRef.nativeElement, 'click', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.ngxBtComponent.pay();
        }));
    }
    /**
     * @return {?}
     */
    NgxBraintreePayDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Set the text on the button to the buttonText property that was sent.
        // this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', this.ngxBtComponent.buttonText);
    };
    /**
     * @return {?}
     */
    NgxBraintreePayDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    NgxBraintreePayDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxPay]'
                },] }
    ];
    /** @nocollapse */
    NgxBraintreePayDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgxBraintreeComponent }
    ]; };
    return NgxBraintreePayDirective;
}());
export { NgxBraintreePayDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxBraintreePayDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NgxBraintreePayDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NgxBraintreePayDirective.prototype.ngxBtComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS1wYXkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJyYWludHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYnJhaW50cmVlLXBheS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFPRSxrQ0FDVSxVQUFzQixFQUN0QixRQUFtQixFQUNuQixjQUFxQztRQUgvQyxpQkFtQkM7UUFsQlMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUU3QyxzR0FBc0c7UUFDdEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNFLHVFQUF1RTtRQUN2RSxJQUFJLENBQUMsY0FBYzthQUNoQixlQUFlO2FBQ2YsU0FBUzs7OztRQUFDLFVBQUMsTUFBZTtZQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRixDQUFDLEVBQUMsQ0FBQztRQUVMLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPOzs7O1FBQUUsVUFBQyxLQUFLO1lBQ2pFLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsdUVBQXVFO1FBQ3ZFLHlHQUF5RztJQUMzRyxDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBTGlELFVBQVU7Z0JBQXJCLFNBQVM7Z0JBQ3ZDLHFCQUFxQjs7SUFzQzlCLCtCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FqQ1ksd0JBQXdCOzs7Ozs7SUFLakMsOENBQThCOzs7OztJQUM5Qiw0Q0FBMkI7Ozs7O0lBQzNCLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hCcmFpbnRyZWVDb21wb25lbnQgfSBmcm9tICcuL25neC1icmFpbnRyZWUuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neFBheV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hCcmFpbnRyZWVQYXlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG5neEJ0Q29tcG9uZW50OiBOZ3hCcmFpbnRyZWVDb21wb25lbnQpIHtcclxuXHJcbiAgICAvLyBEaXNhYmxlIHRoZSBwYXkgYnV0dG9uIGluaXRpYWxseS4gVGhpcyB3aWxsIGJlIGVuYWJsZWQgYWZ0ZXIgdGhlIHVzZXIgZmlsbHMgdGhlIGRyb3BpbiBpbmZvcm1hdGlvbi5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgIC8vIFN1YnNjcmliZSB0aGUgcGF5QnV0dG9uU3RhdHVzIGV2ZW50IHRvIGVuYWJsZSBkaXNhYmxlIHRoZSBwYXkgYnV0dG9uXHJcbiAgICB0aGlzLm5neEJ0Q29tcG9uZW50XHJcbiAgICAgIC5wYXlCdXR0b25TdGF0dXNcclxuICAgICAgLnN1YnNjcmliZSgoc3RhdHVzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgIXN0YXR1cyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIEhhbmRsZSBjbGljayBldmVudCBmb3IgdGhlIHBheSBidXR0b25cclxuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5uZ3hCdENvbXBvbmVudC5wYXkoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBTZXQgdGhlIHRleHQgb24gdGhlIGJ1dHRvbiB0byB0aGUgYnV0dG9uVGV4dCBwcm9wZXJ0eSB0aGF0IHdhcyBzZW50LlxyXG4gICAgLy8gdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lubmVyVGV4dCcsIHRoaXMubmd4QnRDb21wb25lbnQuYnV0dG9uVGV4dCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==