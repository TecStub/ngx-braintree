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
export class NgxBraintreeModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJyYWludHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYnJhaW50cmVlLyIsInNvdXJjZXMiOlsibGliL25neC1icmFpbnRyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQW9CekUsTUFBTSxPQUFPLGtCQUFrQjs7O1lBbEI5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQix3QkFBd0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtvQkFDL0QsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFO2lCQUN0RTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE5neEJyYWludHJlZVNlcnZpY2UgfSBmcm9tICcuL25neC1icmFpbnRyZWUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyZURyb3BpblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyZS1kcm9waW4uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBOZ3hCcmFpbnRyZWVDb21wb25lbnQgfSBmcm9tICcuL25neC1icmFpbnRyZWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4QnJhaW50cmVlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtYnJhaW50cmVlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5neEJyYWludHJlZVBheURpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWJyYWludHJlZS1wYXkuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neEJyYWludHJlZUNvbXBvbmVudCxcclxuICAgIE5neEJyYWludHJlZURpcmVjdGl2ZSxcclxuICAgIE5neEJyYWludHJlZVBheURpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmd4QnJhaW50cmVlQ29tcG9uZW50LFxyXG4gICAgTmd4QnJhaW50cmVlUGF5RGlyZWN0aXZlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogTmd4QnJhaW50cmVlU2VydmljZSwgdXNlQ2xhc3M6IE5neEJyYWludHJlZVNlcnZpY2UgfSxcclxuICAgIHsgcHJvdmlkZTogQ29uZmlndXJlRHJvcGluU2VydmljZSwgdXNlQ2xhc3M6IENvbmZpZ3VyZURyb3BpblNlcnZpY2UgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEJyYWludHJlZU1vZHVsZSB7IH1cclxuIl19