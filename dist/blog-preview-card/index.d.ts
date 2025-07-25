import * as _angular_core from '@angular/core';

declare class BlogPreviewCard {
    tags: _angular_core.InputSignal<string[]>;
    profileName: _angular_core.InputSignal<string>;
    profileImg: _angular_core.InputSignal<string>;
    profileTitle: _angular_core.InputSignal<string>;
    profileContent: _angular_core.InputSignal<string>;
    currentDate: Date;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<BlogPreviewCard, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<BlogPreviewCard, "lib-blog-preview-card", never, { "tags": { "alias": "tags"; "required": true; "isSignal": true; }; "profileName": { "alias": "profileName"; "required": true; "isSignal": true; }; "profileImg": { "alias": "profileImg"; "required": true; "isSignal": true; }; "profileTitle": { "alias": "profileTitle"; "required": true; "isSignal": true; }; "profileContent": { "alias": "profileContent"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { BlogPreviewCard };
