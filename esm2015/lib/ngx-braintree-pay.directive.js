/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef } from '@angular/core';
import { NgxBraintreeComponent } from './ngx-braintree.component';
export class NgxBraintreePayDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} ngxBtComponent
     */
    constructor(elementRef, renderer, ngxBtComponent) {
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
        (status) => {
            this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', !status);
        }));
        // Handle click event for the pay button
        this.renderer.listen(this.elementRef.nativeElement, 'click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.ngxBtComponent.pay();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Set the text on the button to the buttonText property that was sent.
        // this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', this.ngxBtComponent.buttonText);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
NgxBraintreePayDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxPay]'
            },] }
];
/** @nocollapse */
NgxBraintreePayDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgxBraintreeComponent }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS1wYXkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJyYWludHJlZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYnJhaW50cmVlLXBheS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLbEUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBSW5DLFlBQ1UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsY0FBcUM7UUFGckMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUU3QyxzR0FBc0c7UUFDdEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNFLHVFQUF1RTtRQUN2RSxJQUFJLENBQUMsY0FBYzthQUNoQixlQUFlO2FBQ2YsU0FBUzs7OztRQUFDLENBQUMsTUFBZSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEYsQ0FBQyxFQUFDLENBQUM7UUFFTCx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDckUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sdUVBQXVFO1FBQ3ZFLHlHQUF5RztJQUMzRyxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFMaUQsVUFBVTtZQUFyQixTQUFTO1lBQ3ZDLHFCQUFxQjs7Ozs7OztJQVUxQiw4Q0FBOEI7Ozs7O0lBQzlCLDRDQUEyQjs7Ozs7SUFDM0Isa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neEJyYWludHJlZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWJyYWludHJlZS5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4UGF5XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEJyYWludHJlZVBheURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbmd4QnRDb21wb25lbnQ6IE5neEJyYWludHJlZUNvbXBvbmVudCkge1xyXG5cclxuICAgIC8vIERpc2FibGUgdGhlIHBheSBidXR0b24gaW5pdGlhbGx5LiBUaGlzIHdpbGwgYmUgZW5hYmxlZCBhZnRlciB0aGUgdXNlciBmaWxscyB0aGUgZHJvcGluIGluZm9ybWF0aW9uLlxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIHRoZSBwYXlCdXR0b25TdGF0dXMgZXZlbnQgdG8gZW5hYmxlIGRpc2FibGUgdGhlIHBheSBidXR0b25cclxuICAgIHRoaXMubmd4QnRDb21wb25lbnRcclxuICAgICAgLnBheUJ1dHRvblN0YXR1c1xyXG4gICAgICAuc3Vic2NyaWJlKChzdGF0dXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAhc3RhdHVzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciB0aGUgcGF5IGJ1dHRvblxyXG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm5neEJ0Q29tcG9uZW50LnBheSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIFNldCB0aGUgdGV4dCBvbiB0aGUgYnV0dG9uIHRvIHRoZSBidXR0b25UZXh0IHByb3BlcnR5IHRoYXQgd2FzIHNlbnQuXHJcbiAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaW5uZXJUZXh0JywgdGhpcy5uZ3hCdENvbXBvbmVudC5idXR0b25UZXh0KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19