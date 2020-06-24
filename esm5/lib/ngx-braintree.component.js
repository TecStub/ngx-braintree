/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxBraintreeService } from './ngx-braintree.service';
import { ConfigureDropinService } from './configure-dropin.service';
var NgxBraintreeComponent = /** @class */ (function () {
    function NgxBraintreeComponent(service, configureDropinService, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.configureDropinService = configureDropinService;
        this.changeDetectorRef = changeDetectorRef;
        this.dropinLoaded = new EventEmitter();
        this.paymentStatus = new EventEmitter();
        this.payButtonStatus = new EventEmitter();
        // Optional inputs
        this.buttonText = 'Buy'; // to configure the pay button text
        // to configure the pay button text
        this.allowChoose = false;
        this.showCardholderName = false;
        this.enablePaypalCheckout = false;
        this.enablePaypalVault = false;
        this.hideLoader = false;
        this.showDropinUI = true;
        this.showPayButton = false; // to display the pay button only after the dropin UI has rendered.
        // to display the pay button only after the dropin UI has rendered.
        this.clientTokenNotReceived = false; // to show the error, "Error! Client token not received."
        this.dropinConfig = {};
        this.enablePayButton = false;
        this.showLoader = true;
        // tslint:disable-next-line:max-line-length
        this.loaderImage = 'data:image/gif;base64,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';
        this.getClientToken = (/**
         * @return {?}
         */
        function () { return _this.service.getClientToken(_this.clientTokenURL); });
        this.createPurchase = (/**
         * @param {?} nonce
         * @param {?} chargeAmount
         * @return {?}
         */
        function (nonce, chargeAmount) { return _this.service.createPurchase(_this.createPurchaseURL, nonce, chargeAmount); });
    }
    /**
     * @return {?}
     */
    NgxBraintreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.enablePaypalCheckout && this.enablePaypalVault) {
            this.errorMessage = 'Please make sure either Paypal Checkout or Paypal Vault is set to true. Both cannot be true at the same time.';
        }
        else if (this.enablePaypalCheckout && !this.currency) { // user should provide currency for paypal checkout.
            this.errorMessage = 'Please provide the currency for Paypal Checkout. ex: [currency]="\'USD\'"';
        }
        else {
            this.generateDropInUI();
        }
    };
    /**
     * @return {?}
     */
    NgxBraintreeComponent.prototype.generateDropInUI = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.getClientToken()
            .subscribe((/**
         * @param {?} clientToken
         * @return {?}
         */
        function (clientToken) {
            if (!clientToken) {
                _this.clientTokenNotReceived = true;
                _this.showLoader = false;
            }
            else {
                _this.clientToken = clientToken;
                _this.clientTokenNotReceived = false;
                _this.interval = setInterval((/**
                 * @return {?}
                 */
                function () {
                    _this.createDropin();
                }), 0);
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.clientTokenNotReceived = true;
            _this.showLoader = false;
            console.error("Client token not received.\n        Please make sure your braintree server api is configured properly, running and accessible.");
        }));
    };
    /**
     * @return {?}
     */
    NgxBraintreeComponent.prototype.createDropin = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof braintree !== 'undefined') {
            this.dropinConfig.authorization = this.clientToken;
            this.dropinConfig.container = '#dropin-container';
            if (this.showCardholderName) {
                this.configureDropinService.configureCardHolderName(this.dropinConfig);
            }
            if (this.enablePaypalCheckout) {
                this.configureDropinService.configurePaypalCheckout(this.dropinConfig, this.chargeAmount, this.currency);
            }
            if (this.enablePaypalVault) {
                this.configureDropinService.configurePaypalVault(this.dropinConfig);
            }
            if (this.locale) {
                this.configureDropinService.configureLocale(this.dropinConfig, this.locale);
            }
            braintree.dropin.create(this.dropinConfig, (/**
             * @param {?} createErr
             * @param {?} instance
             * @return {?}
             */
            function (createErr, instance) {
                if (createErr) {
                    console.error(createErr);
                    _this.errorMessage = createErr;
                    _this.showLoader = false;
                    return;
                }
                _this.dropinLoaded.emit();
                _this.showPayButton = true;
                _this.showLoader = false;
                _this.instance = instance;
                if (_this.instance.isPaymentMethodRequestable()) {
                    _this.enablePayButton = true;
                    _this.payButtonStatus.emit(_this.enablePayButton);
                }
                _this.instance.on('paymentMethodRequestable', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.enablePayButton = true;
                    _this.payButtonStatus.emit(_this.enablePayButton);
                    _this.changeDetectorRef.detectChanges();
                }));
                _this.instance.on('noPaymentMethodRequestable', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.enablePayButton = false;
                    _this.payButtonStatus.emit(_this.enablePayButton);
                    _this.changeDetectorRef.detectChanges();
                }));
            }));
            clearInterval(this.interval);
        }
    };
    /**
     * @return {?}
     */
    NgxBraintreeComponent.prototype.pay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.instance) {
            this.instance.requestPaymentMethod((/**
             * @param {?} err
             * @param {?} payload
             * @return {?}
             */
            function (err, payload) {
                if (err) {
                    console.error(err);
                    _this.errorMessage = err;
                    return;
                }
                else {
                    _this.errorMessage = null;
                }
                if (!_this.allowChoose) { // process immediately after tokenization
                    _this.nonce = payload.nonce;
                    _this.showDropinUI = false;
                    _this.showLoader = true;
                    _this.confirmPay();
                }
                else if (_this.instance.isPaymentMethodRequestable()) {
                    _this.nonce = payload.nonce;
                    _this.showDropinUI = false;
                    _this.showLoader = true;
                    _this.confirmPay();
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    NgxBraintreeComponent.prototype.confirmPay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.showDropinUI = false;
        this.createPurchase(this.nonce, this.chargeAmount)
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (status.errors) {
                _this.errorMessage = status.message;
                _this.showDropinUI = true;
                _this.generateDropInUI();
            }
            _this.paymentStatus.emit(status);
            _this.showLoader = false;
        }));
    };
    NgxBraintreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-braintree',
                    template: "\n    <div *ngIf=\"showLoader\" style=\"position:relative; text-align: center;\">\n      <div #loaderRef><ng-content select=\".ngxLoader\" *ngIf=\"!hideLoader\"></ng-content></div>\n      <img *ngIf=\"loaderRef.children.length === 0 && !hideLoader\" src=\"{{loaderImage}}\" />\n    </div>\n    <div class=\"error\" *ngIf=\"errorMessage\">Error</div>\n    <div class=\"errorInfoDiv\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n    <div *ngIf=\"showDropinUI && clientToken\" ngxBraintreeDirective>\n      <div id=\"dropin-container\"></div>\n\n      <div #buttonsRef><ng-content select=\".ngxButtons\"></ng-content></div>\n\n      <!-- No buttons are projected and no styles sent, so the default button (Purchase) with default styles will be used. -->\n      <div *ngIf=\"(buttonsRef.children.length === 0 && !enabledStyle && !disabledStyle)\">\n          <button [disabled]=\"!enablePayButton\" *ngIf=\"showPayButton\" (click)=\"pay()\">\n            {{buttonText}}\n          </button>\n      </div>\n\n      <!-- No buttons are projected but styles are sent for the default button (Purchase). So, the sent styles will be used. -->\n      <div *ngIf=\"(buttonsRef.children.length === 0 && enabledStyle && disabledStyle)\">\n          <button [disabled]=\"!enablePayButton\" [ngStyle]=\"enablePayButton ? enabledStyle : disabledStyle\" *ngIf=\"showPayButton\" (click)=\"pay()\">\n            {{buttonText}}\n          </button>\n      </div>\n\n      <!-- Buttons are projected with no styles. -->\n      <!-- This is being handled via the directive. No styles will be applied as the user hasn't sent any styles. Default styles will not be applied. -->\n\n      <!-- Buttons are projected with styles -->\n      <!-- This is being handled via the directive. -->\n\n\n    </div>\n    <div *ngIf=\"clientTokenNotReceived\">\n      <div class=\"error\">Error! Client token not received.</div>\n      <div class=\"errorInfoDiv\">Make sure your clientTokenURL's JSON response is as shown below:\n        <pre>{{ '{' }}\"token\":\"braintree_client_token_generated_on_your_server\"{{'}'}}</pre>\n      </div>\n    </div>",
                    styles: ["\n    button {\n      background-color: #009CDE;\n      color: #ffffff;\n      border: none;\n      border-radius: 4px;\n      height: 40px;\n      line-height: 40px;\n      font-size: 16px;\n      cursor: pointer;\n    }\n\n    button:disabled {\n      background-color: lightblue;\n      color: #ffffff;\n      border: none;\n      border-radius: 4px;\n      height: 40px;\n      line-height: 40px;\n      font-size: 16px;\n      cursor: not-allowed;\n    }\n\n    .error {\n      color: #ffffff;\n      background-color: red;\n      font-weight: bolder;\n      font-family: monospace;\n      border: none;\n      border-radius: 4px;\n      height: 30px;\n      line-height: 30px;\n    }\n\n    .errorInfoDiv {\n      border-bottom: 2px solid red;\n      border-left: 2px solid red;\n      border-right: 2px solid red;\n      font-family: monospace;\n    }"]
                }] }
    ];
    /** @nocollapse */
    NgxBraintreeComponent.ctorParameters = function () { return [
        { type: NgxBraintreeService },
        { type: ConfigureDropinService },
        { type: ChangeDetectorRef }
    ]; };
    NgxBraintreeComponent.propDecorators = {
        dropinLoaded: [{ type: Output }],
        paymentStatus: [{ type: Output }],
        payButtonStatus: [{ type: Output }],
        clientTokenURL: [{ type: Input }],
        createPurchaseURL: [{ type: Input }],
        chargeAmount: [{ type: Input }],
        buttonText: [{ type: Input }],
        allowChoose: [{ type: Input }],
        showCardholderName: [{ type: Input }],
        enablePaypalCheckout: [{ type: Input }],
        enablePaypalVault: [{ type: Input }],
        currency: [{ type: Input }],
        locale: [{ type: Input }],
        enabledStyle: [{ type: Input }],
        disabledStyle: [{ type: Input }],
        hideLoader: [{ type: Input }],
        getClientToken: [{ type: Input }],
        createPurchase: [{ type: Input }]
    };
    return NgxBraintreeComponent;
}());
export { NgxBraintreeComponent };
if (false) {
    /** @type {?} */
    NgxBraintreeComponent.prototype.dropinLoaded;
    /** @type {?} */
    NgxBraintreeComponent.prototype.paymentStatus;
    /** @type {?} */
    NgxBraintreeComponent.prototype.payButtonStatus;
    /** @type {?} */
    NgxBraintreeComponent.prototype.clientTokenURL;
    /** @type {?} */
    NgxBraintreeComponent.prototype.createPurchaseURL;
    /** @type {?} */
    NgxBraintreeComponent.prototype.chargeAmount;
    /** @type {?} */
    NgxBraintreeComponent.prototype.buttonText;
    /** @type {?} */
    NgxBraintreeComponent.prototype.allowChoose;
    /** @type {?} */
    NgxBraintreeComponent.prototype.showCardholderName;
    /** @type {?} */
    NgxBraintreeComponent.prototype.enablePaypalCheckout;
    /** @type {?} */
    NgxBraintreeComponent.prototype.enablePaypalVault;
    /** @type {?} */
    NgxBraintreeComponent.prototype.currency;
    /** @type {?} */
    NgxBraintreeComponent.prototype.locale;
    /** @type {?} */
    NgxBraintreeComponent.prototype.enabledStyle;
    /** @type {?} */
    NgxBraintreeComponent.prototype.disabledStyle;
    /** @type {?} */
    NgxBraintreeComponent.prototype.hideLoader;
    /** @type {?} */
    NgxBraintreeComponent.prototype.clientToken;
    /** @type {?} */
    NgxBraintreeComponent.prototype.nonce;
    /** @type {?} */
    NgxBraintreeComponent.prototype.showDropinUI;
    /** @type {?} */
    NgxBraintreeComponent.prototype.errorMessage;
    /** @type {?} */
    NgxBraintreeComponent.prototype.showPayButton;
    /** @type {?} */
    NgxBraintreeComponent.prototype.clientTokenNotReceived;
    /** @type {?} */
    NgxBraintreeComponent.prototype.interval;
    /** @type {?} */
    NgxBraintreeComponent.prototype.instance;
    /** @type {?} */
    NgxBraintreeComponent.prototype.dropinConfig;
    /** @type {?} */
    NgxBraintreeComponent.prototype.enablePayButton;
    /** @type {?} */
    NgxBraintreeComponent.prototype.showLoader;
    /** @type {?} */
    NgxBraintreeComponent.prototype.loaderImage;
    /** @type {?} */
    NgxBraintreeComponent.prototype.getClientToken;
    /** @type {?} */
    NgxBraintreeComponent.prototype.createPurchase;
    /**
     * @type {?}
     * @private
     */
    NgxBraintreeComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    NgxBraintreeComponent.prototype.configureDropinService;
    /**
     * @type {?}
     * @private
     */
    NgxBraintreeComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYnJhaW50cmVlLyIsInNvdXJjZXMiOlsibGliL25neC1icmFpbnRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSXBFO0lBMEhFLCtCQUNVLE9BQTRCLEVBQzVCLHNCQUE4QyxFQUM5QyxpQkFBb0M7UUFIOUMsaUJBSUM7UUFIUyxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUM1QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF6Q3BDLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzRCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOztRQU85RCxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsbUNBQW1DOztRQUN2RCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUsxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSTVCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBR3BCLGtCQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsbUVBQW1FOztRQUMxRiwyQkFBc0IsR0FBRyxLQUFLLENBQUMsQ0FBQyx5REFBeUQ7UUFHekYsaUJBQVksR0FBUSxFQUFF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O0lBRXZFLCtDQUFnQzs7SUFDaEMsa0RBQW1DOztJQUNuQyw2Q0FBOEI7O0lBRzlCLDJDQUE0Qjs7SUFDNUIsNENBQTZCOztJQUM3QixtREFBb0M7O0lBQ3BDLHFEQUFzQzs7SUFDdEMsa0RBQW1DOztJQUNuQyx5Q0FBMEI7O0lBQzFCLHVDQUF3Qjs7SUFDeEIsNkNBQTJCOztJQUMzQiw4Q0FBNEI7O0lBQzVCLDJDQUE0Qjs7SUFFNUIsNENBQW9COztJQUNwQixzQ0FBYzs7SUFDZCw2Q0FBb0I7O0lBQ3BCLDZDQUFxQjs7SUFFckIsOENBQXNCOztJQUN0Qix1REFBK0I7O0lBQy9CLHlDQUFjOztJQUNkLHlDQUFjOztJQUNkLDZDQUF1Qjs7SUFDdkIsZ0RBQXdCOztJQUN4QiwyQ0FBa0I7O0lBRWxCLDRDQUEyaFQ7O0lBRTNoVCwrQ0FBMkY7O0lBQzNGLCtDQUFzSTs7Ozs7SUFHcEksd0NBQW9DOzs7OztJQUNwQyx1REFBc0Q7Ozs7O0lBQ3RELGtEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neEJyYWludHJlZVNlcnZpY2UgfSBmcm9tICcuL25neC1icmFpbnRyZWUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyZURyb3BpblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyZS1kcm9waW4uc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBicmFpbnRyZWU6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWJyYWludHJlZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgKm5nSWY9XCJzaG93TG9hZGVyXCIgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTsgdGV4dC1hbGlnbjogY2VudGVyO1wiPlxyXG4gICAgICA8ZGl2ICNsb2FkZXJSZWY+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLm5neExvYWRlclwiICpuZ0lmPVwiIWhpZGVMb2FkZXJcIj48L25nLWNvbnRlbnQ+PC9kaXY+XHJcbiAgICAgIDxpbWcgKm5nSWY9XCJsb2FkZXJSZWYuY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmICFoaWRlTG9hZGVyXCIgc3JjPVwie3tsb2FkZXJJbWFnZX19XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj5FcnJvcjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImVycm9ySW5mb0RpdlwiICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCI+e3tlcnJvck1lc3NhZ2V9fTwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dEcm9waW5VSSAmJiBjbGllbnRUb2tlblwiIG5neEJyYWludHJlZURpcmVjdGl2ZT5cclxuICAgICAgPGRpdiBpZD1cImRyb3Bpbi1jb250YWluZXJcIj48L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgI2J1dHRvbnNSZWY+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLm5neEJ1dHRvbnNcIj48L25nLWNvbnRlbnQ+PC9kaXY+XHJcblxyXG4gICAgICA8IS0tIE5vIGJ1dHRvbnMgYXJlIHByb2plY3RlZCBhbmQgbm8gc3R5bGVzIHNlbnQsIHNvIHRoZSBkZWZhdWx0IGJ1dHRvbiAoUHVyY2hhc2UpIHdpdGggZGVmYXVsdCBzdHlsZXMgd2lsbCBiZSB1c2VkLiAtLT5cclxuICAgICAgPGRpdiAqbmdJZj1cIihidXR0b25zUmVmLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiAhZW5hYmxlZFN0eWxlICYmICFkaXNhYmxlZFN0eWxlKVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWVuYWJsZVBheUJ1dHRvblwiICpuZ0lmPVwic2hvd1BheUJ1dHRvblwiIChjbGljayk9XCJwYXkoKVwiPlxyXG4gICAgICAgICAgICB7e2J1dHRvblRleHR9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBObyBidXR0b25zIGFyZSBwcm9qZWN0ZWQgYnV0IHN0eWxlcyBhcmUgc2VudCBmb3IgdGhlIGRlZmF1bHQgYnV0dG9uIChQdXJjaGFzZSkuIFNvLCB0aGUgc2VudCBzdHlsZXMgd2lsbCBiZSB1c2VkLiAtLT5cclxuICAgICAgPGRpdiAqbmdJZj1cIihidXR0b25zUmVmLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiBlbmFibGVkU3R5bGUgJiYgZGlzYWJsZWRTdHlsZSlcIj5cclxuICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFlbmFibGVQYXlCdXR0b25cIiBbbmdTdHlsZV09XCJlbmFibGVQYXlCdXR0b24gPyBlbmFibGVkU3R5bGUgOiBkaXNhYmxlZFN0eWxlXCIgKm5nSWY9XCJzaG93UGF5QnV0dG9uXCIgKGNsaWNrKT1cInBheSgpXCI+XHJcbiAgICAgICAgICAgIHt7YnV0dG9uVGV4dH19XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIEJ1dHRvbnMgYXJlIHByb2plY3RlZCB3aXRoIG5vIHN0eWxlcy4gLS0+XHJcbiAgICAgIDwhLS0gVGhpcyBpcyBiZWluZyBoYW5kbGVkIHZpYSB0aGUgZGlyZWN0aXZlLiBObyBzdHlsZXMgd2lsbCBiZSBhcHBsaWVkIGFzIHRoZSB1c2VyIGhhc24ndCBzZW50IGFueSBzdHlsZXMuIERlZmF1bHQgc3R5bGVzIHdpbGwgbm90IGJlIGFwcGxpZWQuIC0tPlxyXG5cclxuICAgICAgPCEtLSBCdXR0b25zIGFyZSBwcm9qZWN0ZWQgd2l0aCBzdHlsZXMgLS0+XHJcbiAgICAgIDwhLS0gVGhpcyBpcyBiZWluZyBoYW5kbGVkIHZpYSB0aGUgZGlyZWN0aXZlLiAtLT5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiY2xpZW50VG9rZW5Ob3RSZWNlaXZlZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5FcnJvciEgQ2xpZW50IHRva2VuIG5vdCByZWNlaXZlZC48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVycm9ySW5mb0RpdlwiPk1ha2Ugc3VyZSB5b3VyIGNsaWVudFRva2VuVVJMJ3MgSlNPTiByZXNwb25zZSBpcyBhcyBzaG93biBiZWxvdzpcclxuICAgICAgICA8cHJlPnt7ICd7JyB9fVwidG9rZW5cIjpcImJyYWludHJlZV9jbGllbnRfdG9rZW5fZ2VuZXJhdGVkX29uX3lvdXJfc2VydmVyXCJ7eyd9J319PC9wcmU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Q0RFO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yIHtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9ySW5mb0RpdiB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmVkO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZWQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICB9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEJyYWludHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQE91dHB1dCgpIGRyb3BpbkxvYWRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcGF5bWVudFN0YXR1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcGF5QnV0dG9uU3RhdHVzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKSBjbGllbnRUb2tlblVSTDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNyZWF0ZVB1cmNoYXNlVVJMOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2hhcmdlQW1vdW50OiBudW1iZXI7XHJcblxyXG4gIC8vIE9wdGlvbmFsIGlucHV0c1xyXG4gIEBJbnB1dCgpIGJ1dHRvblRleHQgPSAnQnV5JzsgLy8gdG8gY29uZmlndXJlIHRoZSBwYXkgYnV0dG9uIHRleHRcclxuICBASW5wdXQoKSBhbGxvd0Nob29zZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dDYXJkaG9sZGVyTmFtZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVBheXBhbENoZWNrb3V0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW5hYmxlUGF5cGFsVmF1bHQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVuYWJsZWRTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkU3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBoaWRlTG9hZGVyID0gZmFsc2U7XHJcblxyXG4gIGNsaWVudFRva2VuOiBzdHJpbmc7XHJcbiAgbm9uY2U6IHN0cmluZztcclxuICBzaG93RHJvcGluVUkgPSB0cnVlO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICBzaG93UGF5QnV0dG9uID0gZmFsc2U7IC8vIHRvIGRpc3BsYXkgdGhlIHBheSBidXR0b24gb25seSBhZnRlciB0aGUgZHJvcGluIFVJIGhhcyByZW5kZXJlZC5cclxuICBjbGllbnRUb2tlbk5vdFJlY2VpdmVkID0gZmFsc2U7IC8vIHRvIHNob3cgdGhlIGVycm9yLCBcIkVycm9yISBDbGllbnQgdG9rZW4gbm90IHJlY2VpdmVkLlwiXHJcbiAgaW50ZXJ2YWw6IGFueTtcclxuICBpbnN0YW5jZTogYW55O1xyXG4gIGRyb3BpbkNvbmZpZzogYW55ID0ge307XHJcbiAgZW5hYmxlUGF5QnV0dG9uID0gZmFsc2U7XHJcbiAgc2hvd0xvYWRlciA9IHRydWU7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gIGxvYWRlckltYWdlID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaG9BQVVBTUlBQUh6TzdOVHUvS1RhOUt6ZTlQeisvS1RlOVAvLy93QUFBQ0gvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoK1FRSkJ3QUdBQ3dBQUFBQW9BQVVBQUFEL21pNjNQNHd5a21ydlRqcnpidi9ZQ2lPWkdtZWFLcXViT3UrY0N6UEd4RU1RMEJJTnE3enQ5d3UwaE1DZlVOSThVY01NcFhPNUdNcGRWQ0pCWUFXTUtndUNJSXQxNnNBaTd2SzhCWTlWV3ZaVnZjNGZTWWJ6R3M3L3EyWHd4c0JZbG9CRUlHQ2hBK0dZb2dPaWx1TWdJSUFrQXlPZzRXU2xBdVdrNWlIbm9zUWNsb0NvcEtsRDZNQXFBNnFyQTJ1cG9LdkRMR3BwN0ppdEF1MkRsbXp1VnU3Q3Iyd3VMZkF5THJCcE15cnpzTUd4Wldab0kvV2w0blYycC9jb2Q3WDRObU4yK1RkY2JwOTZYVEM2dTNzcE83eDhLdnk5ZlFDOXZsTkF3SlBVd0VFR0draThKK1ZnQU9oRkxSVEJxSEJCallXQXBGSU1DRkFpalF5YXR6SUVyR2p4NDhnUTRvY1NiS2t5Wk1vVTJwSUFBQWgrUVFKQndBU0FDd0FBQUFBb0FBVUFJUUVtdHlFenV4TXR1VFU3dncwcnVSMHh1ejArdndVb3VTczN2VGs4dng4enV4Y3Z1emM4dnc4c3VSMHl1ejgvdndjcHVTMDR2VC8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRi9xQWtqbVJwbm1pcXJtenJ2bkFzejNSdDMzaXU3M3p2MDRrQWdSQkkvSTdJcE0xQUFEaWZpNGR5U3EyT0RJZW5GbkF3V0w5Z1huT3JKWndlZzBoa0lFMmgxV3pWZTkxR3plUHVORjJ1eDl2N2RXZUFmSENCSWd4a1pBd2xEd2dCQ284UmhpTVBFWkNRa25hV2p3R1paNXVZa3lLVmw1MmlFcVNjbmlhcG9acWxxNHlncGlVRmlWc09KUU1LdkpjREtMdTl2TDhud2NMRUpzYTl5THJDdzhET0Nzd2t5cy9GMGRNajFkSWxEYmRsSlFpWEJRRUZFU2lPNU9ybkorbmw1ZXdtN3V2bzcvVHQ5dkQxNnZyNC9PYjc3TVVUNGUyYkV6TWt4RUhpaEFEZFFvWU9BMGlFMUxEZFE0b1JKd2FvS08vaXhvd1FMVW9NMlhFa1JoSU9pd3c2eVVVTkVyOXNJbmJ4NDNadEprd0pNdC9SVEtiQUpqU2ZOWFhlekVsdVp6T2dJeEE5eWNMRlNaWkZKRnJSK3NUSjNLbEtWV05GalpEMUtsZVhXaWw5aGVlMXF5YXpWTUZPR25NTFlRa0RnL0lVSXJSSGJ0MC9jKzM2RVpRWDcxMitmNjh3SmRNbGpPSEROSmcwYlNyQUMrTEhrRnNNY0RERUFkVEltRE5yM3N5NXMrZlBvRU1mRGdFQUlma0VDUWNBRndBc0FBQUFBS0FBRkFDRUJKcmNoTTdzUkxia3hPYjBMSzdrNVBMOEZLTGtaTUxzdE9MMERKN2MzUEw4UExMay9QNzhmTXJzQko3Y2pOTDBWTDdzeE9yME5LN2s1UGI4SEtia3ZPYjBmTTdzLy8vL0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQmY3Z0pZNWthWjVvcXE1czY3NXdMTTkwYmQ5NHJ1OTg3Lytsd2tNaWVVeUF5S1NTRkJFNEhJSUlpa0VBV0s4SHhuTEx2Vkd2VjRLV3hEQllIUUEwMmpEdXV0K3I2amx0SlpUazRMbmR4RkJVS2dwdEozMS9nU3FFZ0lKOGZvbUhqSVlwaUpCVGo0b2xrcFlYQTNOWGFBQlNJZ3FkZEo1V0NwY0lEYW9OQ0prWERLbXJyVk94cXJPRHRheXVzS3U2dEwyM2ZMbkJxTUNXQzZYSkFBc2pEWFI1YWdBTkpRb1dBZGJXcHljS0RkZ0JEZG9tM05mazRkVGQ1T0FvNDk3bUpOemU2dHNONU5ucjZOYnlKSjc4blE0akMrWkU2eVNoUkM1YktCQllXTFVRUWNLRndCNHlaQ1V4NGdtRkV4MWVoQ2lyWWplS0paUTlBNUFBWUtsUm5zc0trbEJZRDZRSkJOL1NhWHdaTTk5TWd6Vy8zVnlaMHlWT2VqWVQ5dHc1QWlaUW5TWUNuaVNsOG9JRmdYblNUSHZYNjV1N0VmQlVMYndhNnVOSHJoZXlmcjBIY1N0WnJmck9sVTFMZGUzVkNpakJWQmhSNEdRMFQrNWdYZXRHakV3cWNuMUg4QUs4NjYrMXdDSUdIeTU4RlBFcnd3RWNLNDZjQ1kvQVBTT3FMQTB6cUpLalFxNFNlNDZrQUVFajBxQWRtWjdVT1RYcDFiczBneEZ6eVF3cE9temc2TjV0b29LQU5Bdm1EckpzQlVKbzNzaVRVN01nZ1lBRnNNcWpTNTlPdmJyMTY5aXphN2NSQWdBaCtRUUpCd0FiQUN3QUFBQUFvQUFVQUlRRW10eUV6dXhFdHVURTV2UXNydVRrOHZ5azN2UnN4dXdVb3VSVXV1ejArdnkwNHZRTW50emM4dnc4c3VTODR2UUVudHlVMXZSTXV1ekU2dlEwcnVUazl2eDh6dXdjcHVSY3Z1ejgvdnk4NXZULy8vOEFBQUFBQUFBQUFBQUFBQUFGL3VBbWptUnBubWlxcm16cnZuQXN6M1J0MzNpdTczenYvN1ZDaEVLSkZJRElaRTZoWUUwa0VJaGtnTW9RQU5qc0lhUHNlbGtEQkFTQTBGUXAyU3lCUzhvZ3N1TXhtZjJ0MXhOcGJPSjBUY3NKSlgxNWNZQW5EUU1hRFN5SGlZdUlpaXVNa0NxU2pvMlJqeWthQUhHY1dHWWtFMWlkYVJNakRYQ2VlWk1pR1E4V3NCWVBkQ1VaR3JHeXRHMjNzYk5WdkxDK0o3YTR3aWJFdmJvanlNSEtHMitEWkNVQ2VaNWpBaU1CMVoxakZpVU5GZ0hoc0t3azRPUGk1YWV3NHVrbzUrMFc2aUx3NC9NYjllNkc3UFltQ3R4NW1vd0FPR2dFTlZMVktKUjRGVXZjQWhRTWNUMDhFVEhXUkJNVllWMWNpRXNqeEk0V05wTElHUEpZdERnQzdFWElHV1VOQUFPRGZscU9VVWppbHJnRERqK0d3eGxBNUlnRk93UGtwTWlPcDA4UlFBUHdMRWswYUU4VVNaY2VGYU1xQzRJU0RoRENjWkJOcXg5djV0Z0pQWEJrSDArbFpVMkFFMm9CNXoxd1o4bStDM2N6d051MlF0SE9aZXYyaElGVWNReVVHQUJZRlJWNmhVbVZjNFUzZ0xGYUQ4WTZkcmFCTWMvSGJTSXJuVnpsMVdYS3JpUmpYdVpaNkdnUkFsWml3V1pDa0o5Q0kxeFhnLzN0d1lONzVteW5UZEhBTnU1VHVoZjVGdjVnOTd2aEtoWlFSWEMwOGhWU2Ewb29vQW9RUVVvNzJMMHdZYUZCd21wUXgyUUR3RUE1dS9uekx4b0VJR0lYdmZ2MzhPUExuMCsvdnYzNzcwTUFBQ0g1QkFrSEFCc0FMQUFBQUFDZ0FCUUFoQVNhM0lUTzdFUzI1TVRtOUN5dTVPVHkvS1RlOUd6RzdCU2k1RlM2N1BUNi9MVGk5QXllM056eS9EeXk1THppOUFTZTNKVFc5RXk2N01UcTlEU3U1T1QyL0h6TzdCeW01RnkrN1B6Ky9Mem05UC8vL3dBQUFBQUFBQUFBQUFBQUFBWCs0Q2FPWkdtZWFLcXViT3UrY0N6UGRHM2ZlSzd2Zk8vL3dGSWhRcUZFQ3NHazBxWlFzQ1lTQ0VReVFHVUlnS3oya0ZsNnY2a0JBZ0pBYUt3VXJaYlFKV1VRV2pLNTNBYmJiNDJCcHFGS3FMTUpKMWhxY3dRbGczOXloaWQ1ZXl5TmZDdVFqM3FSS3BPU2xTb1pHaGFlRmc5MUpCb0FjcVZaWnlRVFdhWnFFeU1OY2FkL2xpSVpENStnb202ZG42Rld2WjYvSjV5NXd5YkZ2cnNqeWNMTElnMmVBUmJUdFNOd2lXVWxBbituWkFJakFkMm1aQllsMGRQVEZ0YXcwdFRyS05IdjFmSHU5SXoyOFBqeitpYTR1UllXSUdNMVM0dVRFZVRHamVEV3FodUZFdi9jQ1R3UjhkTkVmd0FEb3FqbzZTTEVqQjVKY05SNFlrRzZBd0hzQW9UY29DQ2JuSU1pNWhBMHhXQWhJVytuSG81Nmg1SWtSbW9vVmFKWUFEU2x6NDlGaFpaTWVsU2t0S0Fyb1VsVHgyNERISmxhRUpSdzBEQ09nM0JkQ1praklTOWxnQU5JOEFVOW05WUV1bWtvcTI2SXRoWnRQYU54NjlWdFcrS1doYURIU0JpUUpjZEFpUUdFWjFXQmxyaVZOYitBbjIyNGxSSmxZRGU0SWx0NVVEbkFaV2FaVTM2MnhmbXNaOG5RQmp5UUs0TGJIM0FtRUJGYU5FSjJOOXJuSHF4K3BKdHZQTjJzWWZYbXZWdlNjQjBMeHBTSk9obExLellsRkNoUGlBRG1uZXRLbXJEUUlDR0xnRlRJYkFQQWdCcTcrZk9TQWhRSkVCeTkrL2Z3NDh1ZlQ3KysvZnNxUWdBQUlma0VDUWNBR3dBc0FBQUFBS0FBRkFDRUJKcmNoTTdzUkxia3hPYjBMSzdrNVBMOHBONzBiTWJzRktMa1ZMcnM5UHI4dE9MMERKN2MzUEw4UExMa3ZPTDBCSjdjbE5iMFRMcnN4T3IwTks3azVQYjhmTTdzSEtia1hMN3MvUDc4dk9iMC8vLy9BQUFBQUFBQUFBQUFBQUFBQmY3Z0pvNWthWjVvcXE1czY3NXdMTTkwYmQ5NHJ1OTg3Ly9BV2lGQ29VUUt3YVRTcGxDd0poSUlSREpBWlFpQXJQYVFXWHEvcVFFQ0FrQm9yQlN0bHRBbFpSQmFNcm5jQnR0UGpZR213Y3J2VlFscVdRa25XR3B6QkNXR2duS0plSHA4SzM2UktwTjlrSmQvS1JrYUZwNFdEM1VsbkorZ29pTWFBSEtxV1dja0UxbXJhaE1qRFhHc2dwUWlHUStsb1ZhZG43OG5wTUtuSThXZXd5YkpwaWdObmdFVzByb2swTlBZMVNKd2pHVWxBb0tzWkFJakFlR3JaQllsME5MU0Z0b2kxKzN2ejlIWjlkalUrUFB3RzcybEZoYWcrRmRLNEtoWXVMUTRHWUh1M0Fod3NzSlJLRUVRbTBFVEZUMWRwQWd3NE1DT0cwbGs5SGhpUWJzREFlc0NoQnl4WUJwS2FTc3pkSk96VU1RY2hLc1lQRHdranRWRUVwMmtvU1NKTWRyTGxTSmFCbmhKbEtQTGxFZzNLR1VhVlo2N2Z1eUVCb0RISUtFV0JDVWNSSXpqb056WVErcXNSVXQ1QUFrZUN5K1h1aldSRmU3V2VuSGIxa3RwdHg4dnV3R1dqZXIxVXZBSUF6aFpHU2d4NEphc0t2RWM5d1JRN1cvaFk3c2VzQTJNZVlQbGxJYVJhVjdLMlFwaDBKM2pEWGpRejlvRDFpckFDU0puWXRFaFJ5TnNoOE85N25YcldxL25wbWpndTA5dzQ3RHZTQjFUSnVxVnlXeEtLR0RlRUVGTjVkaUROR0doUVVJV0FhNlk2UWFBSVhYMjgraWZCU2h5TjczNzkvRGp5NTlQdjc3OTl5RUFBQ0g1QkFrSEFCc0FMQUFBQUFDZ0FCUUFoQVNhM0lUTzdFUzI1TVRtOUN5dTVPVHkvS1RlOUd6RzdCU2k1RlM2N1BUNi9MVGk5QXllM056eS9EeXk1THppOUFTZTNKVFc5RXk2N01UcTlEU3U1T1QyL0h6TzdCeW01RnkrN1B6Ky9Mem05UC8vL3dBQUFBQUFBQUFBQUFBQUFBWCs0Q2FPWkdtZWFLcXViT3UrY0N6UGRHM2ZlSzd2Zk8vL3dDQ3BFS0ZRSWdXaGNqbFRLRmdUQ1FRaUdhQXlCSUIyZThnd3YyRFRBQUVCSURSWHluWkw4Skl5aUcyNWJIYUhmWTJCcHNISzcvdDZmQ2tKYTFvSkoxbHJkQVFsaVlWempDZCtnaXFUZ0g4cmxpa1pHaGFlRmc5MkpaeWZvS0p2bloraEp4b0FjNjVhYUNRVFdxOXJFeU1OY3JDRmxDSVpENldySjZTcXB5UEZuc01teWFZb0RaNEJGdEsrSk5EVDJOVzUwZGtuY1k5bUpRS0ZzR1VDSXdIa3IyVVdKZERTMGhiYUl0Znc4cy9jMVBqWStpZkJwUllXb1BoWFNxQS9nQUdaMWVLMTVjbUlkZXBHakxORmprSUpndGdNbXNEb1NlTkZoQjVKY0V4NFlnRzhBd0h2QW9RY3NXQWFTbWtyUmZ3TDhIS2xBbkJ6SElxZ3MvQVZBNG1LeXNHeVNLS1ROSlFrTjBhcmlhSWx6WlJKUDdwTUdYTkR2WGp6ckU0N0dpQXJ0SmMwazVoZ1FGRUxnaElPeXRaeWdFNnRuSGJXb3FVOElOYkUxNVJoOFVGRjZkVUNXTHBYZ3IxY05rcHdTc0p2SHN3TmdGaUVnYUJsREpRWXNNdVdGWHFWaFFLb0JzenY0V08vRkQ5dEhOb3pZOUFiZ0MwbW5XdkFnNnpXSHJ6dUk3dnVpWEdGenBsd3BDalNDTjdrZkx1VERUdFhiZHF6TXgyL0UyTUJHVE5Wc1dodVUwTEJjNGdJZERMZkhzUUpDdzBTdEFpUXhRdzRBQXlvdWF0Zm42SkJBQ05kMmN1ZlQ3KysvZnY0OCtzWEVnSUFJZmtFQ1FjQUd3QXNBQUFBQUtBQUZBQ0VCSnJjaE03c1JMYmt4T2IwTEs3azVQTDhwTjcwYk1ic0ZLTGtWTHJzOVByOHRPTDBESjdjM1BMOFBMTGt2T0wwQko3Y2xOYjBUTHJzeE9yME5LN2s1UGI4Zk03c0hLYmtYTDdzL1A3OHZPYjAvLy8vQUFBQUFBQUFBQUFBQUFBQUJmN2dKbzVrYVo1b3FxNXM2NzV3TE05MGJkOTRydTk4Ny8vQUlLMFFvVkFpQmFGeU9WTW9XQk1KQkNJWm9ESUVnSFo3eURDL1lOTUFBUUVnTkZmS2RrdndraktJYmJsc2RvZGRqWUdtd2NydiszcDhLMzZDS0Fscldna25XV3QwQkNXTWlIT1BKNFNBZjRPQktoa2FGcDRXRDNZbG5KK2dvbStkbjZGWHFaNnJKaG9BYzdKYWFDUVRXck5yRXlNTmNyU0loU0laRDZXdkpxU3FweVBKcnNzaURaNEJGdFBDSk5IVTJkYTkwdG9vMk5QVkozR1NaaVVDaUxSbEFpTUI2Yk5sRmlYUjRaN2IwTjNpbGZrVzl4dkZwU3dzUUFHdzFNQVRCVDhkTkpIUTAwSm11WUJ0ZVRJQzNyc1I2SFNsbzFBaTRiU0hKQm9LSkJodzVJa0Y0ZTRPQkFnQWNzUUNhaW8va29TNXNxV0lsd0ZpbW54VGJnNUZFWFFpem1LQXNaRTZXaHhKZEpxbWNtZEhhVEZ0YnNDcFV5cTRhZjIrVVdNYXdGKzBtRG1UN0Z0cFFlVTlCaEszSUNqaFFLTWNCKzNjTnBKM1RkcktBMkpOZkYwWlZpdFpzMWVLeFR3MlN2Qkt3bThlM0EyQW1KbGh4czhNQ0tWbG9NU0FYN3FzUU1OOEZJQTFZbVVQUDl0QWJISGpZWTlQOXhyd3dOKzFCNjM3d002Ym9nRnMxeHZRSVdKbklsSWpTaU44cHdNKzc3YnNCN1MvR2I4VFpBRVpNMUt4ZEc1VFFzRnppd2grTXQ4ZXhBa0xEUkswQ0xDRlREZ0FES081cTE5Zk80Q1JydXpqeTU5UHY3NzkrL2p6eXdnQkFDSDVCQWtIQUJzQUxBQUFBQUNnQUJRQWhBU2EzSVRPN0VTMjVNVG05Q3l1NU9UeS9LVGU5R3pHN0JTaTVGUzY3UFQ2L0xUaTlBeWUzTnp5L0R5eTVMemk5QVNlM0pUVzlFeTY3TVRxOURTdTVPVDIvSHpPN0J5bTVGeSs3UHorL0x6bTlQLy8vd0FBQUFBQUFBQUFBQUFBQUFYKzRDYU9aR21lYUtxdWJPdStjQ3pQZEczZmVLN3ZmTy8vd0tCUVZJaFFLSkhDY01tRUtSU3NpUVFDa1F4UUdRSmd5ejFrbXVEd2FJQ0FBQkFhTElYTEpYeEpHUVRYYkQ2L200MkJwc0hLNy90NmZDdCtnaXFFS2dsc1d3a25XbXgxQkNXT2luU1JKNGVEZ1NvWkdoYWVGZzkzSlp5Zm9LSnduWitoV0ttZXF5ZWtxcWNpR2dCMHRsdHBKQk5idDJ3VEl3MXp1SXFGSWhrUHBhOG1zYTZ6SWcyZUFSYlR4aVRSMU5uV3dkTGFLTmpUMWQvZDRpWnlsR2NsQW9xNFpnSWpBZXkzWmhZbDBlR2UyOURrRnZvYnlhVXNMRUFCc05UQUV3VS9IVFNSME5QQ0VnMEZNdXRGakF1VUVmUGtqVmpuaXgwRmlLV21QU1FSY2VTSUJlSHVEZ1FJWUZMRUFtb3FSUktVRnJQbGhwY0JZa3BFU0hPbFNRWG82RndVVVlmaUxRWWJIN1hEOVpGRXAya3FkekxzeVhJY3RXbjl4cTIwb05KZnRKZzVsVnk2eWpXQTE3SXJENGd0d2FEakZnUWxITGp0NVFEZTNEbjFya2xMdTlZZTJyQllrc1ZjTmtyd1NzSndIcVFOZ0hnRU1yU05qeW5PeWZpWkFhVm1ESlFZTU16WEZXaWRsd0t3OW5qd3N3M0lGa2NPTnVDQnYyc1BYUGVKM2ZkYjdOZkJhS3RZcCtpZGlVbVBMSTBBems2NHZkdXpIOVFXdy94a21UTTJzNGgyVTBMQjg0d0loamJmL3VNSkN3MFN0Z2pReFl3NEFBeW51YXRmYjZKQmdDTm0yY3VmVDcrKy9mdjQ4OHNQQVFBaCtRUUpCd0FiQUN3QUFBQUFvQUFVQUlRRW10eUV6dXhFdHVURTV2UXNydVRrOHZ5azN2UnN4dXdVb3VSVXV1ejArdnkwNHZRTW50emM4dnc4c3VTODR2UUVudHlVMXZSTXV1ekU2dlEwcnVUazl2eDh6dXdjcHVSY3Z1ejgvdnk4NXZULy8vOEFBQUFBQUFBQUFBQUFBQUFGL3VBbWptUnBubWlxcm16cnZuQXN6M1J0MzNpdTczenYvOENnVUZhSVVDaVJ3bkRKaENrVXJJa0VBcEVNVUJrQ1lNczlaSnJnOEdpQWdBQVFHaXlGeXlWOFNSa0UxMncrdjIyTmdhYkJ5dS83ZW53cmZvSXFoSUIvS1Fsc1d3a25XbXgxQkNXUWpIU1RKNGNwR1JvV25oWVBkeVdjbjZDaWNKMmZvVmlwbnFzbnBLcW5JN0d1c3hzYUFIUzZXMmtrRTF1N2JCTWpEWE84aklVaUdRK2xyeVlObmdFVzA4b2swZFRaMXNYUzJpalkwOVhmM2VLWjVCYmJHM0tXWnlVQ2pMeG1BaU1COEx0bUZpWFI0WjdwRzgybExDeEFBYkRVd0JNRlB4MDBrZERUd2hJTkJSSU1LSEZVTUdSY29JeTRaMi9FTzJId0tFQXNOZTBoaVFYaDd3NEVDR0J5eEFKcUtrdE9oTG15cFlpWEFXSldaQ2d0cHMwTk9IVzJ6TUNPamtZUmRTN3VZdUF4VWp4ZUlrbDBtcVp5cHo1cDA5Q05XMmxCcGI5b01YTXFNY2ZWNjdpd0I4WkNvMFkxUURvR0dMa2dLT0VBNUJ3SDlPeEd5bmNOcTFnc3pXSStHeFY0NVdBNEQxYXFQRXlyY0FER3l4TG5mSHhyQTdPdWhtOFpVTXJMUUlrQng0UmRFV0dNc3pCcmx3VlhKajNnZ2I5ckQxejNpYTAyUllQWXI0dlJuaTA3eFR0RzgweFVpb1JweEhCNHhmWGhGc01jeDRJeVozNW1lUXJBVFFrRjBEa2lPTnE4KzQ4bkxEUkkyQ0xBbDRucGpEQ3M5czYrdmI0QVI5eTZuMCsvdnYzNytQUHJEeElDQUNINUJBa0hBQnNBTEFBQUFBQ2dBQlFBaEFTYTNJVE83RVMyNU1UbTlDeXU1T1R5L0tUZTlHekc3QlNpNUZTNjdQVDYvTFRpOUF5ZTNOenkvRHl5NUx6aTlBU2UzSlRXOUV5NjdNVHE5RFN1NU9UMi9Iek83QnltNUZ5KzdQeisvTHptOVAvLy93QUFBQUFBQUFBQUFBQUFBQVgrNENhT1pHbWVhS3F1Yk91K2NDelBkRzNmZUs3dmZPLy93S0JRV0loUUtKSENjTW1FS1JTc2lRUUNrUXhRR1FKZ3l6MWttdUR3YUlDQUFCQWFMSVhMSlh4SkdRVFhiRDYvVFkyQnBzSEs3L3Q2ZkN0K2dpcUVnSCtEZ1NvSmJGc0pKMXBzZFFRbGtvNTBsU1VaR2hhZUZnOTNtNTJmb1Zpa25xWW5uSitnb25Db3JxZXRxaWFzcGE4aUdnQjB2RnRwSkJOYnZXd1RJdzF6dm82RklnMmVBUmJRekNUTzBkYlR4OC9YS05YUTB0emEzeWZkMitQaEZ0Z2JjcGhuSlFLT3ZtWUNJd0h3dldZV0pRK3RuZ3NvKy96OG5RRFlTcUFKZ3A4TTZ1Tm5RU0VKaFAzK01YUzRJY013WlZ5Z2pMaG5iOFE3WXZBb2xGamc3VUNBQUJUbFJTeUlaaEpheWcwQUE3Ujh1VkxteVlZU1daNmtxZE5sVHBzb1RTaGdSMGVqaURvWGV6SHdPQ21lTDVIVW5rRkRCKzZteVhRYm5MV1VxY1NjMVFCWXRaN2tXaFhhVlhCYkQzUXR3UURrRmdRbEhMZ2Q1b0RlM0RuNTRPeHJXV3ZUM3BOOTlaNDBHWGhFaHI4QkNvczRQRGh4cnNXSUZWZDgwRml4Z2FabURKUVlrSXpZbFdhZG5RSklsK2NCVm1vUFRQZEp2VFpGZzlTbmo3RmVyWHJRN0JUdkhNMHpjV21TcGhHOTRmMFdRenpJZ2pKblhtWVI3YWFFQXVRY0VSZ3RUdjNIRXhZYUpHd1JBTXhXY0FBWUhsY2ZUMzVjZ0NOZ3k2dGZ6NzY5Ky9mdzQ4Y0lBUUFoK1FRSkJ3QVJBQ3dBQUFBQW9BQVVBSVFFbXR5YzJ2UkV0dVRVN3Z3c3J1UVVvdVMwNHZUMCt2d01udHc4c3VURTV2UUVudHg4enV6Yzh2dzBydVM4NXZUOC92ei8vLzhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUYvbUFram1ScG5taXFybXpydm5Bc3ozUnQzM2l1NzN6di84Q2djRWdzR29XSEEwdVJXQ3dTaXFOMEtuc1VBSUNDQVFVaEFCWllNQUhDYlR3ZUEzSUtZa2FyeStlMGloMS9uK2p1ZVZ1KzN0dE5lSHduQWxoZldBSW5YbUdGQUFSM0JneVJEQVovSXhDUWtwUmNtSkdhajVLVGxTS1hvSjZBbktHYnBhSVJwSm1pQm91TVd5UVBzb1pZRHlZRG9KRU5LTHk5dnlmQm9NTzd2UXpISmNXU3l5VE52c0RKenlQUnlpZFhoV0JnQlNVSmpHQ0dUeWFvblNqbWsrakp0T1hzNjczdEplbnlKUFR3cFNZSHQ0dEtJMDY0R0gxeEZ3OWZKb1BuVHR4VCtJNWhRWWY1SUI0c3NXK1J1Qy8rUkZ3Y1p3Z0JzbDREcG9FVUNTb2tzV1Fta1QrV0pDa3BKVE9VTENPNUhLRnRHeFp2SkJ4d0UvakZ3YWxTR1V1NDZoU1V4TkJKUlMyaE1wQjAxTkttclo2cXlnVDFLTk1UQVc2QkNWRENsa1ZjdWdBTlVHQmdBRlFSQnhvWUtIczJRdHExWmxXOFpTdFhMZDBVYytQaXRhc1hSZDZ6NEdRbFNNVHppeU1xaUJPWDA2YkZMNEdkWWxncG5ud2tDWXNIZ1JPRXBjeTVzK2ZQb0VPTEhrMjZ0T2tXSVFBQUlma0VDUWNBREFBc0FBQUFBS0FBRkFDREJKcmNsTmIwMU83OFJMYmtyTjcwUExMazlQcjhGS0xrcE43MGZNN3N0T0wwL1A3OC8vLy9BQUFBQUFBQUFBQUFCUDZReVVtcnZUanJ6YnYvWUNpT1pHbWVhS3F1Yk91K2NDelBkRzNmbTJIZ2ZCOHJCd0RnUU5Bc0JBcUZZR0ZFS3BtWlkzTFpuRUl4MG1kVkczVlN1OWJ0OXpJUW1nRURMQ0hCVGhDdWxjVzYvVmEzM1hDSy9GNi83T2w1RTM5c2ZSYURlSGFBaVlTQkRBUm5aMFVXQW5kc0FoaVVsWmNYbVhlYms1VUpueFdkYmFNVXBaYVlvYWNUcWFLcm1oZEJrRUlIRjNOOEdBaWhraGE4bGI0VndMb1h4SFM3dmNuQnk4Vy95aFVHdFdjN3c5QVd1Y2k0MXhYWmhCamVidURjRk9IQzVlUVQ1aGJTMDBMVnFLeXhudk9tOWFxYzh2bXkrL1Q5OXYvd1ZhQlY2NWFoYkFUZ1JVT29rSUlCaGhnZThtazRRU0lkaWhJc0VzTElRS01iamswZUUwYUVhQ0dBdXdCWUJCQWdJSUJqUnBVc1hYYUUyVktEQVpveWI2NnNtVUZuVEpzNGdlN01HUlJEZ1ROQjB2aFl5cFFFQWxvSEVEU2RTdldEanFwWXMycmR5cldyMTY5Z3cyNk5BQUE3VjFsTmVUUmtXRFJyUWtGMGFUQkxUMUZMY0RJeldERnZjVVprVHpZdmNtbGtNMGxaUlc4ek1FVmxVVlJTZW5Wc05XNWpTRTB5VFZneGMyZGthRmt2U3c9PSc7XHJcblxyXG4gIEBJbnB1dCgpIGdldENsaWVudFRva2VuOiBGdW5jdGlvbiA9ICgpID0+IHRoaXMuc2VydmljZS5nZXRDbGllbnRUb2tlbih0aGlzLmNsaWVudFRva2VuVVJMKTtcclxuICBASW5wdXQoKSBjcmVhdGVQdXJjaGFzZTogRnVuY3Rpb24gPSAobm9uY2UsIGNoYXJnZUFtb3VudCkgPT4gdGhpcy5zZXJ2aWNlLmNyZWF0ZVB1cmNoYXNlKHRoaXMuY3JlYXRlUHVyY2hhc2VVUkwsIG5vbmNlLCBjaGFyZ2VBbW91bnQpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogTmd4QnJhaW50cmVlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29uZmlndXJlRHJvcGluU2VydmljZTogQ29uZmlndXJlRHJvcGluU2VydmljZSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmVuYWJsZVBheXBhbENoZWNrb3V0ICYmIHRoaXMuZW5hYmxlUGF5cGFsVmF1bHQpIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnUGxlYXNlIG1ha2Ugc3VyZSBlaXRoZXIgUGF5cGFsIENoZWNrb3V0IG9yIFBheXBhbCBWYXVsdCBpcyBzZXQgdG8gdHJ1ZS4gQm90aCBjYW5ub3QgYmUgdHJ1ZSBhdCB0aGUgc2FtZSB0aW1lLic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZW5hYmxlUGF5cGFsQ2hlY2tvdXQgJiYgIXRoaXMuY3VycmVuY3kpIHsgLy8gdXNlciBzaG91bGQgcHJvdmlkZSBjdXJyZW5jeSBmb3IgcGF5cGFsIGNoZWNrb3V0LlxyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdQbGVhc2UgcHJvdmlkZSB0aGUgY3VycmVuY3kgZm9yIFBheXBhbCBDaGVja291dC4gZXg6IFtjdXJyZW5jeV09XCJcXCdVU0RcXCdcIic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlRHJvcEluVUkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlRHJvcEluVUkoKSB7XHJcbiAgICB0aGlzLmdldENsaWVudFRva2VuKClcclxuICAgICAgLnN1YnNjcmliZSgoY2xpZW50VG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICghY2xpZW50VG9rZW4pIHtcclxuICAgICAgICAgIHRoaXMuY2xpZW50VG9rZW5Ob3RSZWNlaXZlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnNob3dMb2FkZXIgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jbGllbnRUb2tlbiA9IGNsaWVudFRva2VuO1xyXG4gICAgICAgICAgdGhpcy5jbGllbnRUb2tlbk5vdFJlY2VpdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURyb3BpbigpO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLmNsaWVudFRva2VuTm90UmVjZWl2ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRlciA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYENsaWVudCB0b2tlbiBub3QgcmVjZWl2ZWQuXHJcbiAgICAgICAgUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIGJyYWludHJlZSBzZXJ2ZXIgYXBpIGlzIGNvbmZpZ3VyZWQgcHJvcGVybHksIHJ1bm5pbmcgYW5kIGFjY2Vzc2libGUuYCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRHJvcGluKCkge1xyXG4gICAgaWYgKHR5cGVvZiBicmFpbnRyZWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuZHJvcGluQ29uZmlnLmF1dGhvcml6YXRpb24gPSB0aGlzLmNsaWVudFRva2VuO1xyXG4gICAgICB0aGlzLmRyb3BpbkNvbmZpZy5jb250YWluZXIgPSAnI2Ryb3Bpbi1jb250YWluZXInO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2hvd0NhcmRob2xkZXJOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmVEcm9waW5TZXJ2aWNlLmNvbmZpZ3VyZUNhcmRIb2xkZXJOYW1lKHRoaXMuZHJvcGluQ29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5lbmFibGVQYXlwYWxDaGVja291dCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJlRHJvcGluU2VydmljZS5jb25maWd1cmVQYXlwYWxDaGVja291dCh0aGlzLmRyb3BpbkNvbmZpZywgdGhpcy5jaGFyZ2VBbW91bnQsIHRoaXMuY3VycmVuY3kpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmVuYWJsZVBheXBhbFZhdWx0KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmVEcm9waW5TZXJ2aWNlLmNvbmZpZ3VyZVBheXBhbFZhdWx0KHRoaXMuZHJvcGluQ29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5sb2NhbGUpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyZURyb3BpblNlcnZpY2UuY29uZmlndXJlTG9jYWxlKHRoaXMuZHJvcGluQ29uZmlnLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyYWludHJlZS5kcm9waW4uY3JlYXRlKHRoaXMuZHJvcGluQ29uZmlnLCAoY3JlYXRlRXJyLCBpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgIGlmIChjcmVhdGVFcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY3JlYXRlRXJyKTtcclxuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gY3JlYXRlRXJyO1xyXG4gICAgICAgICAgdGhpcy5zaG93TG9hZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJvcGluTG9hZGVkLmVtaXQoKTtcclxuICAgICAgICB0aGlzLnNob3dQYXlCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5pc1BheW1lbnRNZXRob2RSZXF1ZXN0YWJsZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLmVuYWJsZVBheUJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnBheUJ1dHRvblN0YXR1cy5lbWl0KHRoaXMuZW5hYmxlUGF5QnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncGF5bWVudE1ldGhvZFJlcXVlc3RhYmxlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVuYWJsZVBheUJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnBheUJ1dHRvblN0YXR1cy5lbWl0KHRoaXMuZW5hYmxlUGF5QnV0dG9uKTtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ25vUGF5bWVudE1ldGhvZFJlcXVlc3RhYmxlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVuYWJsZVBheUJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5wYXlCdXR0b25TdGF0dXMuZW1pdCh0aGlzLmVuYWJsZVBheUJ1dHRvbik7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXkoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnJlcXVlc3RQYXltZW50TWV0aG9kKChlcnIsIHBheWxvYWQpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycjtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuYWxsb3dDaG9vc2UpIHsgLy8gcHJvY2VzcyBpbW1lZGlhdGVseSBhZnRlciB0b2tlbml6YXRpb25cclxuICAgICAgICAgIHRoaXMubm9uY2UgPSBwYXlsb2FkLm5vbmNlO1xyXG4gICAgICAgICAgdGhpcy5zaG93RHJvcGluVUkgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc2hvd0xvYWRlciA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmNvbmZpcm1QYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zdGFuY2UuaXNQYXltZW50TWV0aG9kUmVxdWVzdGFibGUoKSkge1xyXG4gICAgICAgICAgdGhpcy5ub25jZSA9IHBheWxvYWQubm9uY2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dEcm9waW5VSSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zaG93TG9hZGVyID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY29uZmlybVBheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25maXJtUGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93RHJvcGluVUkgPSBmYWxzZTtcclxuICAgIHRoaXMuY3JlYXRlUHVyY2hhc2UodGhpcy5ub25jZSwgdGhpcy5jaGFyZ2VBbW91bnQpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cy5lcnJvcnMpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gc3RhdHVzLm1lc3NhZ2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dEcm9waW5VSSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmdlbmVyYXRlRHJvcEluVUkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXltZW50U3RhdHVzLmVtaXQoc3RhdHVzKTtcclxuICAgICAgICB0aGlzLnNob3dMb2FkZXIgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==