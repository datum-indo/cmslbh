
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { TranslateModule } from '@ngx-translate/core';
import { LinkyModule } from 'angular-linky';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { G2BarModule } from '@delon/chart/bar';

// #region third libs
// import { NgxTinymceModule } from 'ngx-tinymce';
// import { UEditorModule } from 'ngx-ueditor';

const THIRDMODULES: Type<any>[] = [];
// #endregion

// #region your componets & directives
const COMPONENTS: Type<any>[] = [];
const DIRECTIVES: Type<any>[] = [];
// #endregion

@NgModule({
  imports: [
    LinkyModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonACLModule,
    DelonFormModule,
    LinkyModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    G2BarModule
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonACLModule,
    DelonFormModule,
    TranslateModule,
    G2BarModule,
    LinkyModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule { }