/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxBraintreeService } from './ngx-braintree.service';
import { ConfigureDropinService } from './configure-dropin.service';
export class NgxBraintreeComponent {
    /**
     * @param {?} service
     * @param {?} configureDropinService
     * @param {?} changeDetectorRef
     */
    constructor(service, configureDropinService, changeDetectorRef) {
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
        () => this.service.getClientToken(this.clientTokenURL));
        this.createPurchase = (/**
         * @param {?} nonce
         * @param {?} chargeAmount
         * @return {?}
         */
        (nonce, chargeAmount) => this.service.createPurchase(this.createPurchaseURL, nonce, chargeAmount));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.enablePaypalCheckout && this.enablePaypalVault) {
            this.errorMessage = 'Please make sure either Paypal Checkout or Paypal Vault is set to true. Both cannot be true at the same time.';
        }
        else if (this.enablePaypalCheckout && !this.currency) { // user should provide currency for paypal checkout.
            this.errorMessage = 'Please provide the currency for Paypal Checkout. ex: [currency]="\'USD\'"';
        }
        else {
            this.generateDropInUI();
        }
    }
    /**
     * @return {?}
     */
    generateDropInUI() {
        this.getClientToken()
            .subscribe((/**
         * @param {?} clientToken
         * @return {?}
         */
        (clientToken) => {
            if (!clientToken) {
                this.clientTokenNotReceived = true;
                this.showLoader = false;
            }
            else {
                this.clientToken = clientToken;
                this.clientTokenNotReceived = false;
                this.interval = setInterval((/**
                 * @return {?}
                 */
                () => {
                    this.createDropin();
                }), 0);
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.clientTokenNotReceived = true;
            this.showLoader = false;
            console.error(`Client token not received.
        Please make sure your braintree server api is configured properly, running and accessible.`);
        }));
    }
    /**
     * @return {?}
     */
    createDropin() {
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
            (createErr, instance) => {
                if (createErr) {
                    console.error(createErr);
                    this.errorMessage = createErr;
                    this.showLoader = false;
                    return;
                }
                this.dropinLoaded.emit();
                this.showPayButton = true;
                this.showLoader = false;
                this.instance = instance;
                if (this.instance.isPaymentMethodRequestable()) {
                    this.enablePayButton = true;
                    this.payButtonStatus.emit(this.enablePayButton);
                }
                this.instance.on('paymentMethodRequestable', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.enablePayButton = true;
                    this.payButtonStatus.emit(this.enablePayButton);
                    this.changeDetectorRef.detectChanges();
                }));
                this.instance.on('noPaymentMethodRequestable', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.enablePayButton = false;
                    this.payButtonStatus.emit(this.enablePayButton);
                    this.changeDetectorRef.detectChanges();
                }));
            }));
            clearInterval(this.interval);
        }
    }
    /**
     * @return {?}
     */
    pay() {
        if (this.instance) {
            this.instance.requestPaymentMethod((/**
             * @param {?} err
             * @param {?} payload
             * @return {?}
             */
            (err, payload) => {
                if (err) {
                    console.error(err);
                    this.errorMessage = err;
                    return;
                }
                else {
                    this.errorMessage = null;
                }
                if (!this.allowChoose) { // process immediately after tokenization
                    this.nonce = payload.nonce;
                    this.showDropinUI = false;
                    this.showLoader = true;
                    this.confirmPay();
                }
                else if (this.instance.isPaymentMethodRequestable()) {
                    this.nonce = payload.nonce;
                    this.showDropinUI = false;
                    this.showLoader = true;
                    this.confirmPay();
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    confirmPay() {
        this.showDropinUI = false;
        this.createPurchase(this.nonce, this.chargeAmount)
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            if (status.errors) {
                this.errorMessage = status.message;
                this.showDropinUI = true;
                this.generateDropInUI();
            }
            this.paymentStatus.emit(status);
            this.showLoader = false;
        }));
    }
}
NgxBraintreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-braintree',
                template: `
    <div *ngIf="showLoader" style="position:relative; text-align: center;">
      <div #loaderRef><ng-content select=".ngxLoader" *ngIf="!hideLoader"></ng-content></div>
      <img *ngIf="loaderRef.children.length === 0 && !hideLoader" src="{{loaderImage}}" />
    </div>
    <div class="error" *ngIf="errorMessage">Error</div>
    <div class="errorInfoDiv" *ngIf="errorMessage">{{errorMessage}}</div>
    <div *ngIf="showDropinUI && clientToken" ngxBraintreeDirective>
      <div id="dropin-container"></div>

      <div #buttonsRef><ng-content select=".ngxButtons"></ng-content></div>

      <!-- No buttons are projected and no styles sent, so the default button (Purchase) with default styles will be used. -->
      <div *ngIf="(buttonsRef.children.length === 0 && !enabledStyle && !disabledStyle)">
          <button [disabled]="!enablePayButton" *ngIf="showPayButton" (click)="pay()">
            {{buttonText}}
          </button>
      </div>

      <!-- No buttons are projected but styles are sent for the default button (Purchase). So, the sent styles will be used. -->
      <div *ngIf="(buttonsRef.children.length === 0 && enabledStyle && disabledStyle)">
          <button [disabled]="!enablePayButton" [ngStyle]="enablePayButton ? enabledStyle : disabledStyle" *ngIf="showPayButton" (click)="pay()">
            {{buttonText}}
          </button>
      </div>

      <!-- Buttons are projected with no styles. -->
      <!-- This is being handled via the directive. No styles will be applied as the user hasn't sent any styles. Default styles will not be applied. -->

      <!-- Buttons are projected with styles -->
      <!-- This is being handled via the directive. -->


    </div>
    <div *ngIf="clientTokenNotReceived">
      <div class="error">Error! Client token not received.</div>
      <div class="errorInfoDiv">Make sure your clientTokenURL's JSON response is as shown below:
        <pre>{{ '{' }}"token":"braintree_client_token_generated_on_your_server"{{'}'}}</pre>
      </div>
    </div>`,
                styles: [`
    button {
      background-color: #009CDE;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      cursor: pointer;
    }

    button:disabled {
      background-color: lightblue;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      cursor: not-allowed;
    }

    .error {
      color: #ffffff;
      background-color: red;
      font-weight: bolder;
      font-family: monospace;
      border: none;
      border-radius: 4px;
      height: 30px;
      line-height: 30px;
    }

    .errorInfoDiv {
      border-bottom: 2px solid red;
      border-left: 2px solid red;
      border-right: 2px solid red;
      font-family: monospace;
    }`]
            }] }
];
/** @nocollapse */
NgxBraintreeComponent.ctorParameters = () => [
    { type: NgxBraintreeService },
    { type: ConfigureDropinService },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYnJhaW50cmVlLyIsInNvdXJjZXMiOlsibGliL25neC1icmFpbnRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBdUZwRSxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUF1Q2hDLFlBQ1UsT0FBNEIsRUFDNUIsc0JBQThDLEVBQzlDLGlCQUFvQztRQUZwQyxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUM1QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF6Q3BDLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzRCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOztRQU85RCxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsbUNBQW1DOztRQUN2RCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUsxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSTVCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBR3BCLGtCQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsbUVBQW1FOztRQUMxRiwyQkFBc0IsR0FBRyxLQUFLLENBQUMsQ0FBQyx5REFBeUQ7UUFHekYsaUJB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O0lBQ3JFLGdEQUF1RTs7SUFFdkUsK0NBQWdDOztJQUNoQyxrREFBbUM7O0lBQ25DLDZDQUE4Qjs7SUFHOUIsMkNBQTRCOztJQUM1Qiw0Q0FBNkI7O0lBQzdCLG1EQUFvQzs7SUFDcEMscURBQXNDOztJQUN0QyxrREFBbUM7O0lBQ25DLHlDQUEwQjs7SUFDMUIsdUNBQXdCOztJQUN4Qiw2Q0FBMkI7O0lBQzNCLDhDQUE0Qjs7SUFDNUIsMkNBQTRCOztJQUU1Qiw0Q0FBb0I7O0lBQ3BCLHNDQUFjOztJQUNkLDZDQUFvQjs7SUFDcEIsNkNBQXFCOztJQUVyQiw4Q0FBc0I7O0lBQ3RCLHVEQUErQjs7SUFDL0IseUNBQWM7O0lBQ2QseUNBQWM7O0lBQ2QsNkNBQXVCOztJQUN2QixnREFBd0I7O0lBQ3hCLDJDQUFrQjs7SUFFbEIsNENBQTJoVDs7SUFFM2hULCtDQUEyRjs7SUFDM0YsK0NBQXNJOzs7OztJQUdwSSx3Q0FBb0M7Ozs7O0lBQ3BDLHVEQUFzRDs7Ozs7SUFDdEQsa0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4QnJhaW50cmVlU2VydmljZSB9IGZyb20gJy4vbmd4LWJyYWludHJlZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJlRHJvcGluU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJlLWRyb3Bpbi5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGJyYWludHJlZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtYnJhaW50cmVlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dMb2FkZXJcIiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlOyB0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XHJcbiAgICAgIDxkaXYgI2xvYWRlclJlZj48bmctY29udGVudCBzZWxlY3Q9XCIubmd4TG9hZGVyXCIgKm5nSWY9XCIhaGlkZUxvYWRlclwiPjwvbmctY29udGVudD48L2Rpdj5cclxuICAgICAgPGltZyAqbmdJZj1cImxvYWRlclJlZi5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgIWhpZGVMb2FkZXJcIiBzcmM9XCJ7e2xvYWRlckltYWdlfX1cIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImVycm9yTWVzc2FnZVwiPkVycm9yPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3JJbmZvRGl2XCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd0Ryb3BpblVJICYmIGNsaWVudFRva2VuXCIgbmd4QnJhaW50cmVlRGlyZWN0aXZlPlxyXG4gICAgICA8ZGl2IGlkPVwiZHJvcGluLWNvbnRhaW5lclwiPjwvZGl2PlxyXG5cclxuICAgICAgPGRpdiAjYnV0dG9uc1JlZj48bmctY29udGVudCBzZWxlY3Q9XCIubmd4QnV0dG9uc1wiPjwvbmctY29udGVudD48L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gTm8gYnV0dG9ucyBhcmUgcHJvamVjdGVkIGFuZCBubyBzdHlsZXMgc2VudCwgc28gdGhlIGRlZmF1bHQgYnV0dG9uIChQdXJjaGFzZSkgd2l0aCBkZWZhdWx0IHN0eWxlcyB3aWxsIGJlIHVzZWQuIC0tPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiKGJ1dHRvbnNSZWYuY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmICFlbmFibGVkU3R5bGUgJiYgIWRpc2FibGVkU3R5bGUpXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZW5hYmxlUGF5QnV0dG9uXCIgKm5nSWY9XCJzaG93UGF5QnV0dG9uXCIgKGNsaWNrKT1cInBheSgpXCI+XHJcbiAgICAgICAgICAgIHt7YnV0dG9uVGV4dH19XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIE5vIGJ1dHRvbnMgYXJlIHByb2plY3RlZCBidXQgc3R5bGVzIGFyZSBzZW50IGZvciB0aGUgZGVmYXVsdCBidXR0b24gKFB1cmNoYXNlKS4gU28sIHRoZSBzZW50IHN0eWxlcyB3aWxsIGJlIHVzZWQuIC0tPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiKGJ1dHRvbnNSZWYuY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmIGVuYWJsZWRTdHlsZSAmJiBkaXNhYmxlZFN0eWxlKVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWVuYWJsZVBheUJ1dHRvblwiIFtuZ1N0eWxlXT1cImVuYWJsZVBheUJ1dHRvbiA/IGVuYWJsZWRTdHlsZSA6IGRpc2FibGVkU3R5bGVcIiAqbmdJZj1cInNob3dQYXlCdXR0b25cIiAoY2xpY2spPVwicGF5KClcIj5cclxuICAgICAgICAgICAge3tidXR0b25UZXh0fX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gQnV0dG9ucyBhcmUgcHJvamVjdGVkIHdpdGggbm8gc3R5bGVzLiAtLT5cclxuICAgICAgPCEtLSBUaGlzIGlzIGJlaW5nIGhhbmRsZWQgdmlhIHRoZSBkaXJlY3RpdmUuIE5vIHN0eWxlcyB3aWxsIGJlIGFwcGxpZWQgYXMgdGhlIHVzZXIgaGFzbid0IHNlbnQgYW55IHN0eWxlcy4gRGVmYXVsdCBzdHlsZXMgd2lsbCBub3QgYmUgYXBwbGllZC4gLS0+XHJcblxyXG4gICAgICA8IS0tIEJ1dHRvbnMgYXJlIHByb2plY3RlZCB3aXRoIHN0eWxlcyAtLT5cclxuICAgICAgPCEtLSBUaGlzIGlzIGJlaW5nIGhhbmRsZWQgdmlhIHRoZSBkaXJlY3RpdmUuIC0tPlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJjbGllbnRUb2tlbk5vdFJlY2VpdmVkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPkVycm9yISBDbGllbnQgdG9rZW4gbm90IHJlY2VpdmVkLjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JJbmZvRGl2XCI+TWFrZSBzdXJlIHlvdXIgY2xpZW50VG9rZW5VUkwncyBKU09OIHJlc3BvbnNlIGlzIGFzIHNob3duIGJlbG93OlxyXG4gICAgICAgIDxwcmU+e3sgJ3snIH19XCJ0b2tlblwiOlwiYnJhaW50cmVlX2NsaWVudF90b2tlbl9nZW5lcmF0ZWRfb25feW91cl9zZXJ2ZXJcInt7J30nfX08L3ByZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlDREU7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3Ige1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3JJbmZvRGl2IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZWQ7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4QnJhaW50cmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAT3V0cHV0KCkgZHJvcGluTG9hZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwYXltZW50U3RhdHVzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwYXlCdXR0b25TdGF0dXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGNsaWVudFRva2VuVVJMOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3JlYXRlUHVyY2hhc2VVUkw6IHN0cmluZztcclxuICBASW5wdXQoKSBjaGFyZ2VBbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgLy8gT3B0aW9uYWwgaW5wdXRzXHJcbiAgQElucHV0KCkgYnV0dG9uVGV4dCA9ICdCdXknOyAvLyB0byBjb25maWd1cmUgdGhlIHBheSBidXR0b24gdGV4dFxyXG4gIEBJbnB1dCgpIGFsbG93Q2hvb3NlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd0NhcmRob2xkZXJOYW1lID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW5hYmxlUGF5cGFsQ2hlY2tvdXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBlbmFibGVQYXlwYWxWYXVsdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZW5hYmxlZFN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgZGlzYWJsZWRTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGhpZGVMb2FkZXIgPSBmYWxzZTtcclxuXHJcbiAgY2xpZW50VG9rZW46IHN0cmluZztcclxuICBub25jZTogc3RyaW5nO1xyXG4gIHNob3dEcm9waW5VSSA9IHRydWU7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIHNob3dQYXlCdXR0b24gPSBmYWxzZTsgLy8gdG8gZGlzcGxheSB0aGUgcGF5IGJ1dHRvbiBvbmx5IGFmdGVyIHRoZSBkcm9waW4gVUkgaGFzIHJlbmRlcmVkLlxyXG4gIGNsaWVudFRva2VuTm90UmVjZWl2ZWQgPSBmYWxzZTsgLy8gdG8gc2hvdyB0aGUgZXJyb3IsIFwiRXJyb3IhIENsaWVudCB0b2tlbiBub3QgcmVjZWl2ZWQuXCJcclxuICBpbnRlcnZhbDogYW55O1xyXG4gIGluc3RhbmNlOiBhbnk7XHJcbiAgZHJvcGluQ29uZmlnOiBhbnkgPSB7fTtcclxuICBlbmFibGVQYXlCdXR0b24gPSBmYWxzZTtcclxuICBzaG93TG9hZGVyID0gdHJ1ZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgbG9hZGVySW1hZ2UgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxob0FBVUFNSUFBSHpPN05UdS9LVGE5S3plOVB6Ky9LVGU5UC8vL3dBQUFDSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgrUVFKQndBR0FDd0FBQUFBb0FBVUFBQUQvbWk2M1A0d3lrbXJ2VGpyemJ2L1lDaU9aR21lYUtxdWJPdStjQ3pQR3hFTVEwQklOcTd6dDl3dTBoTUNmVU5JOFVjTU1wWE81R01wZFZDSkJZQVdNS2d1Q0lJdDE2c0FpN3ZLOEJZOVZXdlpWdmM0ZlNZYnpHczcvcTJYd3hzQllsb0JFSUdDaEErR1lvZ09pbHVNZ0lJQWtBeU9nNFdTbEF1V2s1aUhub3NRY2xvQ29wS2xENk1BcUE2cXJBMnVwb0t2RExHcHA3Sml0QXUyRGxtenVWdTdDcjJ3dUxmQXlMckJwTXlyenNNR3haV1pvSS9XbDRuVjJwL2NvZDdYNE5tTjIrVGRjYnA5NlhUQzZ1M3NwTzd4OEt2eTlmUUM5dmxOQXdKUFV3RUVHR2tpOEorVmdBT2hGTFJUQnFIQkJqWVdBcEZJTUNGQWlqUXlhdHpJRXJHang0OGdRNG9jU2JLa3laTW9VMnBJQUFBaCtRUUpCd0FTQUN3QUFBQUFvQUFVQUlRRW10eUV6dXhNdHVUVTd2dzBydVIweHV6MCt2d1VvdVNzM3ZUazh2eDh6dXhjdnV6Yzh2dzhzdVIweXV6OC92d2NwdVMwNHZULy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGL3FBa2ptUnBubWlxcm16cnZuQXN6M1J0MzNpdTczenYwNGtBZ1JCSS9JN0lwTTFBQURpZmk0ZHlTcTJPREllbkZuQXdXTDlnWG5Pckpad2VnMGhrSUUyaDFXelZlOTFHemVQdU5GMnV4OXY3ZFdlQWZIQ0JJZ3hrWkF3bER3Z0JDbzhSaGlNUEVaQ1FrbmFXandHWlo1dVlreUtWbDUyaUVxU2NuaWFwb1pxbHE0eWdwaVVGaVZzT0pRTUt2SmNES0x1OXZMOG53Y0xFSnNhOXlMckN3OERPQ3N3a3lzL0YwZE1qMWRJbERiZGxKUWlYQlFFRkVTaU81T3JuSitubDVld203dXZvNy9UdDl2RDE2dnI0L09iNzdNVVQ0ZTJiRXpNa3hFSGloQURkUW9ZT0EwaUUxTERkUTRvUkp3YW9LTy9peG93UUxVb00yWEVrUmhJT2l3dzZ5VVVORXI5c0luYng0M1p0Smt3Sk10L1JUS2JBSmpTZk5YWGV6RWx1WnpPZ0l4QTl5Y0xGU1paRkpGclIrc1RKM0tsS1ZXTkZqWkQxS2xlWFdpbDloZWUxcXlhelZNRk9Hbk1MWVFrRGcvSVVJclJIYnQwL2MrMzZFWlFYNzEyK2Y2OHdKZE1sak9IRE5KZzBiU3JBQytMSGtGc01jRERFQWRUSW1ETnIzc3k1cytmUG9FTWZEZ0VBSWZrRUNRY0FGd0FzQUFBQUFLQUFGQUNFQkpyY2hNN3NSTGJreE9iMExLN2s1UEw4RktMa1pNTHN0T0wwREo3YzNQTDhQTExrL1A3OGZNcnNCSjdjak5MMFZMN3N4T3IwTks3azVQYjhIS2Jrdk9iMGZNN3MvLy8vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCZjdnSlk1a2FaNW9xcTVzNjc1d0xNOTBiZDk0cnU5ODcvK2x3a01pZVV5QXlLU1NGQkU0SElJSWlrRUFXSzhIeG5MTHZWR3ZWNEtXeERCWUhRQTAyakR1dXQrcjZqbHRKWlRrNExuZHhGQlVLZ3B0SjMxL2dTcUVnSUo4Zm9tSGpJWXBpSkJUajRvbGtwWVhBM05YYUFCU0lncWRkSjVXQ3BjSURhb05DSmtYREttcnJWT3hxck9EdGF5dXNLdTZ0TDIzZkxuQnFNQ1dDNlhKQUFzakRYUjVhZ0FOSlFvV0FkYldweWNLRGRnQkRkb20zTmZrNGRUZDVPQW80OTdtSk56ZTZ0c041Tm5yNk5ieUpKNzhuUTRqQytaRTZ5U2hSQzViS0JCWVdMVVFRY0tGd0I0eVpDVXg0Z21GRXgxZWhDaXJZamVLSlpROUE1QUFZS2xSbnNzS2tsQllENlFKQk4vU2FYd1pNOTlNZ3pXLzNWeVoweVZPZWpZVDl0dzVBaVpRblNZQ25pU2w4b0lGZ1huU1RIdlg2NXU3RWZCVUxid2E2dU5IcmhleWZyMEhjU3RacmZyT2xVMUxkZTNWQ2lqQlZCaFI0R1EwVCs1Z1hldEdqRXdxY24xSDhBSzg2Nisxd0NJR0h5NThGUEVyd3dFY0s0NmNDWS9BUFNPcUxBMHpxSktqUXE0U2U0NmtBRUVqMHFBZG1aN1VPVFhwMWJzMGd4Rnp5UXdwT216ZzZONXRvb0tBTkF2bURySnNCVUpvM3NpVFU3TWdnWUFGc01xalM1OU92YnIxNjlpemE3Y1JBZ0FoK1FRSkJ3QWJBQ3dBQUFBQW9BQVVBSVFFbXR5RXp1eEV0dVRFNXZRc3J1VGs4dnlrM3ZSc3h1d1VvdVJVdXV6MCt2eTA0dlFNbnR6Yzh2dzhzdVM4NHZRRW50eVUxdlJNdXV6RTZ2UTBydVRrOXZ4OHp1d2NwdVJjdnV6OC92eTg1dlQvLy84QUFBQUFBQUFBQUFBQUFBQUYvdUFtam1ScG5taXFybXpydm5Bc3ozUnQzM2l1NzN6di83VkNoRUtKRklESVpFNmhZRTBrRUloa2dNb1FBTmpzSWFQc2Vsa0RCQVNBMEZRcDJTeUJTOG9nc3VNeG1mMnQxeE5wYk9KMFRjc0pKWDE1Y1lBbkRRTWFEU3lIaVl1SWlpdU1rQ3FTam8yUmp5a2FBSEdjV0dZa0UxaWRhUk1qRFhDZWVaTWlHUThXc0JZUGRDVVpHckd5dEcyM3NiTlZ2TEMrSjdhNHdpYkV2Ym9qeU1IS0cyK0RaQ1VDZVo1akFpTUIxWjFqRmlVTkZnSGhzS3drNE9QaTVhZXc0dWtvNSswVzZpTHc0L01iOWU2RzdQWW1DdHg1bW93QU9HZ0VOVkxWS0pSNEZVdmNBaFFNY1QwOEVUSFdSQk1WWVYxY2lFc2p4STRXTnBMSUdQSll0RGdDN0VYSUdXVU5BQU9EZmxxT1VVamlscmdERGorR3d4bEE1SWdGT3dQa3BNaU9wMDhSUUFQd0xFazBhRThVU1pjZUZhTXFDNElTRGhEQ2NaQk5xeDl2NXRnSlBYQmtIMCtsWlUyQUUyb0I1ejF3WjhtK0MzY3p3TnUyUXRIT1pldjJoSUZVY1F5VUdBQllGUlY2aFVtVmM0VTNnTEZhRDhZNmRyYUJNYy9IYlNJcm5WemwxV1hLcmlSalh1Wlo2R2dSQWxaaXdXWkNrSjlDSTF4WGcvM3R3WU43NW15blRkSEFOdTVUdWhmNUZ2NWc5N3ZoS2haUVJYQzA4aFZTYTBvb29Bb1FRVW83Mkwwd1lhRkJ3bXBReDJRRHdFQTV1L256THhvRUlHSVh2ZnYzOE9QTG4wKy92djM3NzBNQUFDSDVCQWtIQUJzQUxBQUFBQUNnQUJRQWhBU2EzSVRPN0VTMjVNVG05Q3l1NU9UeS9LVGU5R3pHN0JTaTVGUzY3UFQ2L0xUaTlBeWUzTnp5L0R5eTVMemk5QVNlM0pUVzlFeTY3TVRxOURTdTVPVDIvSHpPN0J5bTVGeSs3UHorL0x6bTlQLy8vd0FBQUFBQUFBQUFBQUFBQUFYKzRDYU9aR21lYUtxdWJPdStjQ3pQZEczZmVLN3ZmTy8vd0ZJaFFxRkVDc0drMHFaUXNDWVNDRVF5UUdVSWdLejJrRmw2djZrQkFnSkFhS3dVclpiUUpXVVFXaks1M0FiYmI0MkJwcUZLcUxNSkoxaHFjd1FsZzM5eWhpZDVleXlOZkN1UWozcVJLcE9TbFNvWkdoYWVGZzkxSkJvQWNxVlpaeVFUV2FacUV5TU5jYWQvbGlJWkQ1K2dvbTZkbjZGV3ZaNi9KNXk1d3liRnZyc2p5Y0xMSWcyZUFSYlR0U053aVdVbEFuK25aQUlqQWQybVpCWWwwZFBURnRhdzB0VHJLTkh2MWZIdTlJejI4UGp6K2lhNHVSWVdJR00xUzR1VEVlVEdqZURXcWh1RkV2L2NDVHdSOGRORWZ3QURvcWpvNlNMRWpCNUpjTlI0WWtHNkF3SHNBb1Rjb0NDYm5JTWk1aEEweFdBaElXK25IbzU2aDVJa1Jtb29WYUpZQURTbHo0OUZoWlpNZWxTa3RLQXJvVWxUeDI0REhKbGFFSlJ3MERDT2czQmRDWmtqSVM5bGdBTkk4QVU5bTlZRXVta29xMjZJdGhadFBhTng2OVZ0VytLV2hhREhTQmlRSmNkQWlRR0VaMVdCbHJpVk5iK0FuMjI0bFJKbFlEZTRJbHQ1VURuQVpXYVpVMzYyeGZtc1o4blFCanlRSzRMYkgzQW1FQkZhTkVKMk45cm5IcXgrcEp0dlBOMnNZZlhtdlZ2U2NCMEx4cFNKT2hsTEt6WWxGQ2hQaUFEbW5ldEttckRRSUNHTGdGVEliQVBBZ0JxNytmT1NBaFFKRUJ5OSsvZnc0OHVmVDcrKy9mc3FRZ0FBSWZrRUNRY0FHd0FzQUFBQUFLQUFGQUNFQkpyY2hNN3NSTGJreE9iMExLN2s1UEw4cE43MGJNYnNGS0xrVkxyczlQcjh0T0wwREo3YzNQTDhQTExrdk9MMEJKN2NsTmIwVExyc3hPcjBOSzdrNVBiOGZNN3NIS2JrWEw3cy9QNzh2T2IwLy8vL0FBQUFBQUFBQUFBQUFBQUFCZjdnSm81a2FaNW9xcTVzNjc1d0xNOTBiZDk0cnU5ODcvL0FXaUZDb1VRS3dhVFNwbEN3SmhJSVJESkFaUWlBclBhUVdYcS9xUUVDQWtCb3JCU3RsdEFsWlJCYU1ybmNCdHRQallHbXdjcnZWUWxxV1FrbldHcHpCQ1dHZ25LSmVIcDhLMzZSS3BOOWtKZC9LUmthRnA0V0QzVWxuSitnb2lNYUFIS3FXV2NrRTFtcmFoTWpEWEdzZ3BRaUdRK2xvVmFkbjc4bnBNS25JOFdld3liSnBpZ05uZ0VXMHJvazBOUFkxU0p3akdVbEFvS3NaQUlqQWVHclpCWWwwTkxTRnRvaTErM3Z6OUhaOWRqVStQUHdHNzJsRmhhZytGZEs0S2hZdUxRNEdZSHUzQWh3c3NKUktFRVFtMEVURlQxZHBBZ3c0TUNPRzBsazlIaGlRYnNEQWVzQ2hCeXhZQnBLYVNzemRKT3pVTVFjaEtzWVBEd2tqdFZFRXAya29TU0pNZHJMbFNKYUJuaEpsS1BMbEVnM0tHVWFWWjY3ZnV5RUJvREhJS0VXQkNVY1JJempvTnpZUStxc1JVdDVBQWtlQ3krWHVqV1JGZTdXZW5IYjFrdHB0eDh2dXdHV2plcjFVdkFJQXpoWkdTZ3g0SmFzS3ZFYzl3UlE3Vy9oWTdzZXNBMk1lWVBsbElhUmFWN0syUXBoMEozakRYalF6OW9EMWlyQUNTSm5ZdEVoUnlOc2g4Tzk3blhyV3EvbnBtamd1MDl3NDdEdlNCMVRKdXFWeVd4S0tHRGVFRUZONWRpRE5HR2hRVUlXQWE2WTZRYUFJWFgyOCtpZkJTaHlONzM3OS9Eank1OVB2Nzc5OXlFQUFDSDVCQWtIQUJzQUxBQUFBQUNnQUJRQWhBU2EzSVRPN0VTMjVNVG05Q3l1NU9UeS9LVGU5R3pHN0JTaTVGUzY3UFQ2L0xUaTlBeWUzTnp5L0R5eTVMemk5QVNlM0pUVzlFeTY3TVRxOURTdTVPVDIvSHpPN0J5bTVGeSs3UHorL0x6bTlQLy8vd0FBQUFBQUFBQUFBQUFBQUFYKzRDYU9aR21lYUtxdWJPdStjQ3pQZEczZmVLN3ZmTy8vd0NDcEVLRlFJZ1doY2psVEtGZ1RDUVFpR2FBeUJJQjJlOGd3djJEVEFBRUJJRFJYeW5aTDhKSXlpRzI1YkhhSGZZMkJwc0hLNy90NmZDa0phMW9KSjFscmRBUWxpWVZ6akNkK2dpcVRnSDhybGlrWkdoYWVGZzkySlp5Zm9LSnZuWitoSnhvQWM2NWFhQ1FUV3E5ckV5TU5jckNGbENJWkQ2V3JKNlNxcHlQRm5zTW15YVlvRFo0QkZ0SytKTkRUMk5XNTBka25jWTltSlFLRnNHVUNJd0hrcjJVV0pkRFMwaGJhSXRmdzhzL2MxUGpZK2lmQnBSWVdvUGhYU3FBL2dBR1oxZUsxNWNtSWRlcEdqTE5GamtJSmd0Z01tc0RvU2VORmhCNUpjRXg0WWdHOEF3SHZBb1Fjc1dBYVNta3JSZndMOEhLbEFuQnpISXFncy9BVkE0bUt5c0d5U0tLVE5KUWtOMGFyaWFJbHpaUkpQN3BNR1hORHZYanpyRTQ3R2lBcnRKYzBrNWhnUUZFTGdoSU95dFp5Z0U2dG5IYldvcVU4SU5iRTE1Umg4VUZGNmRVQ1dMcFhncjFjTmtwd1NzSnZIc3dOZ0ZpRWdhQmxESlFZc011V0ZYcVZoUUtvQnN6djRXTy9GRDl0SE5velk5QWJnQzBtbld2QWc2eldIcnp1STd2dWlYR0Z6cGx3cENqU0NON2tmTHVURFR0WGJkcXpNeDIvRTJNQkdUTlZzV2h1VTBMQmM0Z0lkRExmSHNRSkN3MFN0QWlReFF3NEFBeW91YXRmbjZKQkFDTmQyY3VmVDcrKy9mdjQ4K3NYRWdJQUlma0VDUWNBR3dBc0FBQUFBS0FBRkFDRUJKcmNoTTdzUkxia3hPYjBMSzdrNVBMOHBONzBiTWJzRktMa1ZMcnM5UHI4dE9MMERKN2MzUEw4UExMa3ZPTDBCSjdjbE5iMFRMcnN4T3IwTks3azVQYjhmTTdzSEtia1hMN3MvUDc4dk9iMC8vLy9BQUFBQUFBQUFBQUFBQUFBQmY3Z0pvNWthWjVvcXE1czY3NXdMTTkwYmQ5NHJ1OTg3Ly9BSUswUW9WQWlCYUZ5T1ZNb1dCTUpCQ0lab0RJRWdIWjd5REMvWU5NQUFRRWdORmZLZGt2d2tqS0liYmxzZG9kZGpZR213Y3J2KzNwOEszNkNLQWxyV2drbldXdDBCQ1dNaUhPUEo0U0FmNE9CS2hrYUZwNFdEM1lsbkorZ29tK2RuNkZYcVo2ckpob0FjN0phYUNRVFdyTnJFeU1OY3JTSWhTSVpENld2SnFTcXB5UEpyc3NpRFo0QkZ0UENKTkhVMmRhOTB0b28yTlBWSjNHU1ppVUNpTFJsQWlNQjZiTmxGaVhSNFo3YjBOM2lsZmtXOXh2RnBTd3NRQUd3MU1BVEJUOGROSkhRMDBKbXVZQnRlVElDM3JzUjZIU2xvMUFpNGJTSEpCb0tKQmh3NUlrRjRlNE9CQWdBY3NRQ2Fpby9rb1M1c3FXSWx3RmltbnhUYmc1RkVYUWl6bUtBc1pFNldoeEpkSnFtY21kSGFURnRic0NwVXlxNGFmMitVV01hd0YrMG1EbVQ3RnRwUWVVOUJoSzNJQ2poUUtNY0IrM2NOcEozVGRyS0EySk5mRjBaVml0WnMxZUt4VHcyU3ZCS3dtOGUzQTJBbUpsaHhzOE1DS1Zsb01TQVg3cXNRTU44RklBMVltVVBQOXRBYkhIallZOVA5eHJ3d04rMUI2Mzd3TTZib2dGczF4dlFJV0puSWxJalNpTjhwd00rNzdic0I3Uy9HYjhUWkFFWk0xS3hkRzVUUXNGeml3aCtNdDhleEFrTERSSzBDTENGVERnQURLTzVxMTlmTzRDUnJ1emp5NTlQdjc3OSsvanp5d2dCQUNINUJBa0hBQnNBTEFBQUFBQ2dBQlFBaEFTYTNJVE83RVMyNU1UbTlDeXU1T1R5L0tUZTlHekc3QlNpNUZTNjdQVDYvTFRpOUF5ZTNOenkvRHl5NUx6aTlBU2UzSlRXOUV5NjdNVHE5RFN1NU9UMi9Iek83QnltNUZ5KzdQeisvTHptOVAvLy93QUFBQUFBQUFBQUFBQUFBQVgrNENhT1pHbWVhS3F1Yk91K2NDelBkRzNmZUs3dmZPLy93S0JRVkloUUtKSENjTW1FS1JTc2lRUUNrUXhRR1FKZ3l6MWttdUR3YUlDQUFCQWFMSVhMSlh4SkdRVFhiRDYvbTQyQnBzSEs3L3Q2ZkN0K2dpcUVLZ2xzV3drbldteDFCQ1dPaW5TUko0ZURnU29aR2hhZUZnOTNKWnlmb0tKd25aK2hXS21lcXlla3FxY2lHZ0IwdGx0cEpCTmJ0MndUSXcxenVJcUZJaGtQcGE4bXNhNnpJZzJlQVJiVHhpVFIxTm5Xd2RMYUtOalQxZC9kNGlaeWxHY2xBb3E0WmdJakFleTNaaFlsMGVHZTI5RGtGdm9ieWFVc0xFQUJzTlRBRXdVL0hUU1IwTlBDRWcwRk11dEZqQXVVRWZQa2pWam5peDBGaUtXbVBTUVJjZVNJQmVIdURnUUlZRkxFQW1vcVJSS1VGclBsaHBjQllrcEVTSE9sU1FYbzZGd1VVWWZpTFFZYkg3WEQ5WkZFcDJrcWR6THN5WEljdFduOXhxMjBvTkpmdEpnNWxWeTZ5aldBMTdJckQ0Z3R3YURqRmdRbEhManQ1UURlM0RuMXJrbEx1OVllMnJCWWtzVmNOa3J3U3NKd0hxUU5nSGdFTXJTTmp5bk95ZmlaQWFWbURKUVlNTXpYRldpZGx3S3c5bmp3c3czSUZrY09OdUNCdjJzUFhQZUozZmRiN05mQmFLdFlwK2lkaVVtUExJMEF6azY0dmR1ekg5UVd3L3hrbVRNMnM0aDJVMExCODR3SWhqYmYvdU1KQ3cwU3RnalF4WXc0QUF5bnVhdGZiNkpCZ0NObTJjdWZUNysrL2Z2NDg4c1BBUUFoK1FRSkJ3QWJBQ3dBQUFBQW9BQVVBSVFFbXR5RXp1eEV0dVRFNXZRc3J1VGs4dnlrM3ZSc3h1d1VvdVJVdXV6MCt2eTA0dlFNbnR6Yzh2dzhzdVM4NHZRRW50eVUxdlJNdXV6RTZ2UTBydVRrOXZ4OHp1d2NwdVJjdnV6OC92eTg1dlQvLy84QUFBQUFBQUFBQUFBQUFBQUYvdUFtam1ScG5taXFybXpydm5Bc3ozUnQzM2l1NzN6di84Q2dVRmFJVUNpUnduREpoQ2tVcklrRUFwRU1VQmtDWU1zOVpKcmc4R2lBZ0FBUUdpeUZ5eVY4U1JrRTEydyt2MjJOZ2FiQnl1LzdlbndyZm9JcWhJQi9LUWxzV3drbldteDFCQ1dRakhTVEo0Y3BHUm9XbmhZUGR5V2NuNkNpY0oyZm9WaXBucXNucEtxbkk3R3VzeHNhQUhTNlcya2tFMXU3YkJNakRYTzhqSVVpR1ErbHJ5WU5uZ0VXMDhvazBkVFoxc1hTMmlqWTA5WGYzZUtaNUJiYkczS1daeVVDakx4bUFpTUI4THRtRmlYUjRaN3BHODJsTEN4QUFiRFV3Qk1GUHgwMGtkRFR3aElOQlJJTUtIRlVNR1Jjb0l5NFoyL0VPMkh3S0VBc05lMGhpUVhoN3c0RUNHQnl4QUpxS2t0T2hMbXlwWWlYQVdKV1pDZ3RwczBOT0hXMnpNQ09qa1lSZFM3dVl1QXhVanhlSWtsMG1xWnlwejVwMDlDTlcybEJwYjlvTVhNcU1jZlY2N2l3QjhaQ28wWTFRRG9HR0xrZ0tPRUE1QndIOU94R3luY05xMWdzeldJK0d4VjQ1V0E0RDFhcVBFeXJjQURHeXhMbmZIeHJBN091aG04WlVNckxRSWtCeDRSZEVXR01zekJybHdWWEpqM2dnYjlyRDF6M2lhMDJSWVBZcjR2Um5pMDd4VHRHODB4VWlvUnB4SEI0eGZYaEZzTWN4NEl5WjM1bWVRckFUUWtGMERraU9OcTgrNDhuTERSSTJDTEFsNG5wakRDczlzNit2YjRBUjl5Nm4wKy92djM3K1BQckR4SUNBQ0g1QkFrSEFCc0FMQUFBQUFDZ0FCUUFoQVNhM0lUTzdFUzI1TVRtOUN5dTVPVHkvS1RlOUd6RzdCU2k1RlM2N1BUNi9MVGk5QXllM056eS9EeXk1THppOUFTZTNKVFc5RXk2N01UcTlEU3U1T1QyL0h6TzdCeW01RnkrN1B6Ky9Mem05UC8vL3dBQUFBQUFBQUFBQUFBQUFBWCs0Q2FPWkdtZWFLcXViT3UrY0N6UGRHM2ZlSzd2Zk8vL3dLQlFXSWhRS0pIQ2NNbUVLUlNzaVFRQ2tReFFHUUpneXoxa211RHdhSUNBQUJBYUxJWExKWHhKR1FUWGJENi9UWTJCcHNISzcvdDZmQ3QrZ2lxRWdIK0RnU29KYkZzSkoxcHNkUVFsa281MGxTVVpHaGFlRmc5M201MmZvVmlrbnFZbm5KK2dvbkNvcnFldHFpYXNwYThpR2dCMHZGdHBKQk5idld3VEl3MXp2bzZGSWcyZUFSYlF6Q1RPMGRiVHg4L1hLTlhRMHR6YTN5ZmQyK1BoRnRnYmNwaG5KUUtPdm1ZQ0l3SHd2V1lXSlErdG5nc28rL3o4blFEWVNxQUpncDhNNnVOblFTRUpoUDMrTVhTNEljTXdaVnlnakxobmI4UTdZdkFvbEZqZzdVQ0FBQlRsUlN5SVpoSmF5ZzBBQTdSOHVWTG15WVlTV1o2a3FkTmxUcHNvVFNoZ1IwZWppRG9YZXpId09DbWVMNUhVbmtGREIrNm15WFFibkxXVXFjU2MxUUJZdFo3a1doWGFWWEJiRDNRdHdRRGtGZ1FsSExnZDVvRGUzRG41NE94cldXdlQzcE45OVo0MEdYaEVocjhCQ29zNFBEaHhyc1dJRlZkODBGaXhnYVptREpRWWtJellsV2FkblFKSWwrY0JWbW9QVFBkSnZUWkZnOVNuajdGZXJYclE3QlR2SE0wemNXbVNwaEc5NGYwV1F6eklnakpuWG1ZUjdhYUVBdVFjRVJndFR2M0hFeFlhSkd3UkFNeFdjQUFZSGxjZlQzNWNnQ05neTZ0Zno3NjkrL2Z3NDhjSUFRQWgrUVFKQndBUkFDd0FBQUFBb0FBVUFJUUVtdHljMnZSRXR1VFU3dndzcnVRVW91UzA0dlQwK3Z3TW50dzhzdVRFNXZRRW50eDh6dXpjOHZ3MHJ1Uzg1dlQ4L3Z6Ly8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRi9tQWtqbVJwbm1pcXJtenJ2bkFzejNSdDMzaXU3M3p2LzhDZ2NFZ3NHb1dIQTB1UldDd1NpcU4wS25zVUFJQ0NBUVVoQUJaWU1BSENiVHdlQTNJS1lrYXJ5K2UwaWgxL24ranVlVnUrM3R0TmVId25BbGhmV0FJblhtR0ZBQVIzQmd5UkRBWi9JeENRa3BSY21KR2FqNUtUbFNLWG9KNkFuS0dicGFJUnBKbWlCb3VNV3lRUHNvWllEeVlEb0pFTktMeTl2eWZCb01PN3ZRekhKY1dTeXlUTnZzREp6eVBSeWlkWGhXQmdCU1VKakdDR1R5YW9uU2ptaytqSnRPWHM2NzN0SmVueUpQVHdwU1lIdDR0S0kwNjRHSDF4Rnc5ZkpvUG5UdHhUK0k1aFFZZjVJQjRzc1crUnVDLytSRndjWndnQnNsNERwb0VVQ1Nva3NXUW1rVCtXSkNrcEpUT1VMQ081SEtGdEd4WnZKQnh3RS9qRndhbFNHVXU0NmhTVXhOQkpSUzJoTXBCMDFOS21yWjZxeWdUMUtOTVRBVzZCQ1ZEQ2xrVmN1Z0FOVUdCZ0FGUVJCeG9ZS0hzMlF0cTFabFc4WlN0WExkMFVjK1BpdGFzWFJkNno0R1FsU01Ueml5TXFpQk9YMDZiRkw0R2RZbGdwbm53a0NZc0hnUk9FcGN5NXMrZlBvRU9MSGsyNnRPa1dJUUFBSWZrRUNRY0FEQUFzQUFBQUFLQUFGQUNEQkpyY2xOYjAxTzc4Ukxia3JONzBQTExrOVByOEZLTGtwTjcwZk03c3RPTDAvUDc4Ly8vL0FBQUFBQUFBQUFBQUJQNlF5VW1ydlRqcnpidi9ZQ2lPWkdtZWFLcXViT3UrY0N6UGRHM2ZtMkhnZkI4ckJ3RGdRTkFzQkFxRllHRkVLcG1aWTNMWm5FSXgwbWRWRzNWU3U5YnQ5eklRbWdFRExDSEJUaEN1bGNXNi9WYTMzWENLL0Y2LzdPbDVFMzlzZlJhRGVIYUFpWVNCREFSblowVVdBbmRzQWhpVWxaY1htWGViazVVSm54V2RiYU1VcFphWW9hY1RxYUtybWhkQmtFSUhGM044R0FpaGtoYThsYjRWd0xvWHhIUzd2Y25CeThXL3loVUd0V2M3dzlBV3VjaTQxeFhaaEJqZWJ1RGNGT0hDNWVRVDVoYlMwMExWcUt5eG52T205YXFjOHZteSsvVDk5di93VmFCVjY1YWhiQVRnUlVPb2tJSUJoaGdlOG1rNFFTSWRpaElzRXNMSVFLTWJqazBlRTBhRWFDR0F1d0JZQkJBZ0lJQmpScFVzWFhhRTJWS0RBWm95YjY2c21VRm5USnM0Z2U3TUdSUkRnVE5CMHZoWXlwUUVBbG9IRURTZFN2V0RqcXBZczJyZHlyV3IxNjlndzI2TkFBQTdWMWxOZVRSa1dEUnJRa0YwYVRCTFQxRkxjREl6V0RGdmNVWmtUell2Y21sa00wbFpSVzh6TUVWbFVWUlNlblZzTlc1alNFMHlUVmd4YzJka2FGa3ZTdz09JztcclxuXHJcbiAgQElucHV0KCkgZ2V0Q2xpZW50VG9rZW46IEZ1bmN0aW9uID0gKCkgPT4gdGhpcy5zZXJ2aWNlLmdldENsaWVudFRva2VuKHRoaXMuY2xpZW50VG9rZW5VUkwpO1xyXG4gIEBJbnB1dCgpIGNyZWF0ZVB1cmNoYXNlOiBGdW5jdGlvbiA9IChub25jZSwgY2hhcmdlQW1vdW50KSA9PiB0aGlzLnNlcnZpY2UuY3JlYXRlUHVyY2hhc2UodGhpcy5jcmVhdGVQdXJjaGFzZVVSTCwgbm9uY2UsIGNoYXJnZUFtb3VudCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBOZ3hCcmFpbnRyZWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmVEcm9waW5TZXJ2aWNlOiBDb25maWd1cmVEcm9waW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZW5hYmxlUGF5cGFsQ2hlY2tvdXQgJiYgdGhpcy5lbmFibGVQYXlwYWxWYXVsdCkge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdQbGVhc2UgbWFrZSBzdXJlIGVpdGhlciBQYXlwYWwgQ2hlY2tvdXQgb3IgUGF5cGFsIFZhdWx0IGlzIHNldCB0byB0cnVlLiBCb3RoIGNhbm5vdCBiZSB0cnVlIGF0IHRoZSBzYW1lIHRpbWUuJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5lbmFibGVQYXlwYWxDaGVja291dCAmJiAhdGhpcy5jdXJyZW5jeSkgeyAvLyB1c2VyIHNob3VsZCBwcm92aWRlIGN1cnJlbmN5IGZvciBwYXlwYWwgY2hlY2tvdXQuXHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1BsZWFzZSBwcm92aWRlIHRoZSBjdXJyZW5jeSBmb3IgUGF5cGFsIENoZWNrb3V0LiBleDogW2N1cnJlbmN5XT1cIlxcJ1VTRFxcJ1wiJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVEcm9wSW5VSSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVEcm9wSW5VSSgpIHtcclxuICAgIHRoaXMuZ2V0Q2xpZW50VG9rZW4oKVxyXG4gICAgICAuc3Vic2NyaWJlKChjbGllbnRUb2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGllbnRUb2tlbikge1xyXG4gICAgICAgICAgdGhpcy5jbGllbnRUb2tlbk5vdFJlY2VpdmVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2hvd0xvYWRlciA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNsaWVudFRva2VuID0gY2xpZW50VG9rZW47XHJcbiAgICAgICAgICB0aGlzLmNsaWVudFRva2VuTm90UmVjZWl2ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGluKCk7XHJcbiAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xpZW50VG9rZW5Ob3RSZWNlaXZlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgQ2xpZW50IHRva2VuIG5vdCByZWNlaXZlZC5cclxuICAgICAgICBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgYnJhaW50cmVlIHNlcnZlciBhcGkgaXMgY29uZmlndXJlZCBwcm9wZXJseSwgcnVubmluZyBhbmQgYWNjZXNzaWJsZS5gKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEcm9waW4oKSB7XHJcbiAgICBpZiAodHlwZW9mIGJyYWludHJlZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5kcm9waW5Db25maWcuYXV0aG9yaXphdGlvbiA9IHRoaXMuY2xpZW50VG9rZW47XHJcbiAgICAgIHRoaXMuZHJvcGluQ29uZmlnLmNvbnRhaW5lciA9ICcjZHJvcGluLWNvbnRhaW5lcic7XHJcblxyXG4gICAgICBpZiAodGhpcy5zaG93Q2FyZGhvbGRlck5hbWUpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyZURyb3BpblNlcnZpY2UuY29uZmlndXJlQ2FyZEhvbGRlck5hbWUodGhpcy5kcm9waW5Db25maWcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmVuYWJsZVBheXBhbENoZWNrb3V0KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmVEcm9waW5TZXJ2aWNlLmNvbmZpZ3VyZVBheXBhbENoZWNrb3V0KHRoaXMuZHJvcGluQ29uZmlnLCB0aGlzLmNoYXJnZUFtb3VudCwgdGhpcy5jdXJyZW5jeSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZW5hYmxlUGF5cGFsVmF1bHQpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyZURyb3BpblNlcnZpY2UuY29uZmlndXJlUGF5cGFsVmF1bHQodGhpcy5kcm9waW5Db25maWcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlndXJlRHJvcGluU2VydmljZS5jb25maWd1cmVMb2NhbGUodGhpcy5kcm9waW5Db25maWcsIHRoaXMubG9jYWxlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnJhaW50cmVlLmRyb3Bpbi5jcmVhdGUodGhpcy5kcm9waW5Db25maWcsIChjcmVhdGVFcnIsIGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNyZWF0ZUVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihjcmVhdGVFcnIpO1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBjcmVhdGVFcnI7XHJcbiAgICAgICAgICB0aGlzLnNob3dMb2FkZXIgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcm9waW5Mb2FkZWQuZW1pdCgpO1xyXG4gICAgICAgIHRoaXMuc2hvd1BheUJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmlzUGF5bWVudE1ldGhvZFJlcXVlc3RhYmxlKCkpIHtcclxuICAgICAgICAgIHRoaXMuZW5hYmxlUGF5QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMucGF5QnV0dG9uU3RhdHVzLmVtaXQodGhpcy5lbmFibGVQYXlCdXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwYXltZW50TWV0aG9kUmVxdWVzdGFibGUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIHRoaXMuZW5hYmxlUGF5QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMucGF5QnV0dG9uU3RhdHVzLmVtaXQodGhpcy5lbmFibGVQYXlCdXR0b24pO1xyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbignbm9QYXltZW50TWV0aG9kUmVxdWVzdGFibGUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIHRoaXMuZW5hYmxlUGF5QnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnBheUJ1dHRvblN0YXR1cy5lbWl0KHRoaXMuZW5hYmxlUGF5QnV0dG9uKTtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBheSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UucmVxdWVzdFBheW1lbnRNZXRob2QoKGVyciwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5hbGxvd0Nob29zZSkgeyAvLyBwcm9jZXNzIGltbWVkaWF0ZWx5IGFmdGVyIHRva2VuaXphdGlvblxyXG4gICAgICAgICAgdGhpcy5ub25jZSA9IHBheWxvYWQubm9uY2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dEcm9waW5VSSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zaG93TG9hZGVyID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY29uZmlybVBheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5pc1BheW1lbnRNZXRob2RSZXF1ZXN0YWJsZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLm5vbmNlID0gcGF5bG9hZC5ub25jZTtcclxuICAgICAgICAgIHRoaXMuc2hvd0Ryb3BpblVJID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dMb2FkZXIgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5jb25maXJtUGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbmZpcm1QYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dEcm9waW5VSSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jcmVhdGVQdXJjaGFzZSh0aGlzLm5vbmNlLCB0aGlzLmNoYXJnZUFtb3VudClcclxuICAgICAgLnN1YnNjcmliZSgoc3RhdHVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzLmVycm9ycykge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBzdGF0dXMubWVzc2FnZTtcclxuICAgICAgICAgIHRoaXMuc2hvd0Ryb3BpblVJID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEcm9wSW5VSSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBheW1lbnRTdGF0dXMuZW1pdChzdGF0dXMpO1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRlciA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19