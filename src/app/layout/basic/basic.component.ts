import { Component } from '@angular/core';
import { SettingsService, User } from '@delon/theme';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
import { environment } from '@env/environment';

@Component({
  selector: 'layout-basic',
  template: `
    <layout-default [options]="options" [asideUser]="asideUserTpl" [content]="contentTpl">
      <layout-default-header-item direction="right">
        <header-user></header-user>
      </layout-default-header-item>
      <ng-template #asideUserTpl>
        <div nz-dropdown nzTrigger="click" class="alain-default__aside-user">
          <nz-avatar class="alain-default__aside-user-avatar" [nzSrc]="user.avatar"></nz-avatar>
          <div class="alain-default__aside-user-info">
        <p class="text-nowrap mb0">
          <strong>{{ user.name }}</strong>
        </p>
        <p class="text-nowrap mb0">{{ user.email }}</p>
        <p class="text-nowrap mb0"><strong>Roles:</strong></p>
        <div *ngFor="let a of user.roles_type">
          <p class="text-nowrap mb0">{{ a.type.description }}</p>
        </div>
      </div>
        </div>
      </ng-template>
      <ng-template #contentTpl>
        <router-outlet></router-outlet>
      </ng-template>
    </layout-default>

    <setting-drawer *ngIf="showSettingDrawer"></setting-drawer>
    <theme-btn></theme-btn>
  `,
})
export class LayoutBasicComponent {
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/logo-cms-01c.svg`,
    logoCollapsed: `./assets/logo-cms-01c.svg`,
  };
  searchToggleStatus = false;
  showSettingDrawer = false;
  get user(): User {
    return this.settings.user;
  }

  constructor(private settings: SettingsService) { }
}
