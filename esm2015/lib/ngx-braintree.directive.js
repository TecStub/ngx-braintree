/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class NgxBraintreeDirective {
    /**
     * @param {?} renderer
     * @param {?} document
     */
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.script = this.renderer.createElement('script');
        this.script.type = 'text/javascript';
        this.script.src = 'https://js.braintreegateway.com/web/dropin/1.13.0/js/dropin.min.js';
        this.renderer.appendChild(this.document.body, this.script);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeChild(this.document.body, this.script);
    }
}
NgxBraintreeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxBraintreeDirective]'
            },] }
];
/** @nocollapse */
NgxBraintreeDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYnJhaW50cmVlLyIsInNvdXJjZXMiOlsibGliL25neC1icmFpbnRyZWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUszQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUloQyxZQUFvQixRQUFtQixFQUE0QixRQUFhO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFJLENBQUM7Ozs7SUFFckYsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsb0VBQW9FLENBQUM7UUFDdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjthQUNwQzs7OztZQUxzQyxTQUFTOzRDQVVKLE1BQU0sU0FBQyxRQUFROzs7O0lBRnpELHVDQUFZOzs7OztJQUVBLHlDQUEyQjs7Ozs7SUFBRSx5Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBSZW5kZXJlcjIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hCcmFpbnRyZWVEaXJlY3RpdmVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4QnJhaW50cmVlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBzY3JpcHQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2NyaXB0ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHRoaXMuc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgIHRoaXMuc2NyaXB0LnNyYyA9ICdodHRwczovL2pzLmJyYWludHJlZWdhdGV3YXkuY29tL3dlYi9kcm9waW4vMS4xMy4wL2pzL2Ryb3Bpbi5taW4uanMnO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuc2NyaXB0KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuc2NyaXB0KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==