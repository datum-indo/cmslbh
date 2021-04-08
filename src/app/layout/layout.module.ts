
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { LayoutDefaultModule } from '@delon/theme/layout-default';
import { SettingDrawerModule } from '@delon/theme/setting-drawer';
import { ThemeBtnModule } from '@delon/theme/theme-btn';
import { TranslateModule } from '@ngx-translate/core';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';


// import { LayoutDefaultComponent } from './default/default.component';
// import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';
// import { HeaderComponent } from './default/header/header.component';
// import { SidebarComponent } from './default/sidebar/sidebar.component';
// import { HeaderSearchComponent } from './default/header/components/search.component';
// // import { HeaderNotifyComponent } from './default/header/components/notify.component';
// import { HeaderTaskComponent } from './default/header/components/task.component';
// import { HeaderIconComponent } from './default/header/components/icon.component';
// import { HeaderFullScreenComponent } from './default/header/components/fullscreen.component';
// import { HeaderI18nComponent } from './default/header/components/i18n.component';
// import { HeaderStorageComponent } from './default/header/components/storage.component';
// import { HeaderUserComponent } from './default/header/components/user.component';

// import { SettingDrawerComponent } from './default/setting-drawer/setting-drawer.component';
// import { SettingDrawerItemComponent } from './default/setting-drawer/setting-drawer-item.component';

// // const SETTINGDRAWER = [SettingDrawerComponent, SettingDrawerItemComponent];
// const COMPONENTS = [
//   LayoutDefaultComponent,
//   LayoutFullScreenComponent,
//   HeaderComponent,
//   SidebarComponent,
//   // ...SETTINGDRAWER,
// ];

// const HEADERCOMPONENTS = [
//   HeaderSearchComponent,
//   // HeaderNotifyComponent,
//   HeaderTaskComponent,
//   HeaderIconComponent,
//   HeaderFullScreenComponent,
//   HeaderI18nComponent,
//   HeaderStorageComponent,
//   HeaderUserComponent,
// ];

import { LayoutBasicComponent } from './basic/basic.component';
import { HeaderClearStorageComponent } from './basic/widgets/clear-storage.component';
import { HeaderFullScreenComponent } from './basic/widgets/fullscreen.component';
import { HeaderI18nComponent } from './basic/widgets/i18n.component';
import { HeaderIconComponent } from './basic/widgets/icon.component';
import { HeaderNotifyComponent } from './basic/widgets/notify.component';
import { HeaderRTLComponent } from './basic/widgets/rtl.component';
import { HeaderSearchComponent } from './basic/widgets/search.component';
import { HeaderTaskComponent } from './basic/widgets/task.component';
import { HeaderUserComponent } from './basic/widgets/user.component';
import { LayoutBlankComponent } from './blank/blank.component';

const COMPONENTS = [LayoutBasicComponent, LayoutBlankComponent];

const HEADERCOMPONENTS = [
  HeaderSearchComponent,
  HeaderNotifyComponent,
  HeaderTaskComponent,
  HeaderIconComponent,
  HeaderFullScreenComponent,
  HeaderI18nComponent,
  HeaderClearStorageComponent,
  HeaderUserComponent,
  HeaderRTLComponent,
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [CommonModule,
    FormsModule,
    RouterModule,
    ThemeBtnModule,
    SettingDrawerModule,
    LayoutDefaultModule,
    TranslateModule,
    NoticeIconModule,
    GlobalFooterModule,
    NzDropDownModule,
    NzInputModule,
    NzAutocompleteModule,
    NzGridModule,
    NzFormModule,
    NzSpinModule,
    NzBadgeModule,
    NzAvatarModule,
    NzIconModule,
    NzCardModule,],
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
  exports: [...COMPONENTS, ...PASSPORT],
})
export class LayoutModule { }
