/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBraintreeService } from './ngx-braintree.service';
import { ConfigureDropinService } from './configure-dropin.service';
import { NgxBraintreeComponent } from './ngx-braintree.component';
import { NgxBraintreeDirective } from './ngx-braintree.directive';
import { NgxBraintreePayDirective } from './ngx-braintree-pay.directive';
var NgxBraintreeModule = /** @class */ (function () {
    function NgxBraintreeModule() {
    }
    NgxBraintreeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        NgxBraintreeComponent,
                        NgxBraintreeDirective,
                        NgxBraintreePayDirective
                    ],
                    exports: [
                        NgxBraintreeComponent,
                        NgxBraintreePayDirective
                    ],
                    providers: [
                        { provide: NgxBraintreeService, useClass: NgxBraintreeService },
                        { provide: ConfigureDropinService, useClass: ConfigureDropinService }
                    ]
                },] }
    ];
    return NgxBraintreeModule;
}());
export { NgxBraintreeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYnJhaW50cmVlLyIsInNvdXJjZXMiOlsibGliL25neC1icmFpbnRyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RTtJQUFBO0lBa0JrQyxDQUFDOztnQkFsQmxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQjt3QkFDckIsd0JBQXdCO3FCQUN6QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO3dCQUMvRCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7cUJBQ3RFO2lCQUNGOztJQUNpQyx5QkFBQztDQUFBLEFBbEJuQyxJQWtCbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE5neEJyYWludHJlZVNlcnZpY2UgfSBmcm9tICcuL25neC1icmFpbnRyZWUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyZURyb3BpblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyZS1kcm9waW4uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBOZ3hCcmFpbnRyZWVDb21wb25lbnQgfSBmcm9tICcuL25neC1icmFpbnRyZWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4QnJhaW50cmVlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtYnJhaW50cmVlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5neEJyYWludHJlZVBheURpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWJyYWludHJlZS1wYXkuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neEJyYWludHJlZUNvbXBvbmVudCxcclxuICAgIE5neEJyYWludHJlZURpcmVjdGl2ZSxcclxuICAgIE5neEJyYWludHJlZVBheURpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmd4QnJhaW50cmVlQ29tcG9uZW50LFxyXG4gICAgTmd4QnJhaW50cmVlUGF5RGlyZWN0aXZlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogTmd4QnJhaW50cmVlU2VydmljZSwgdXNlQ2xhc3M6IE5neEJyYWludHJlZVNlcnZpY2UgfSxcclxuICAgIHsgcHJvdmlkZTogQ29uZmlndXJlRHJvcGluU2VydmljZSwgdXNlQ2xhc3M6IENvbmZpZ3VyZURyb3BpblNlcnZpY2UgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEJyYWludHJlZU1vZHVsZSB7IH1cclxuIl19