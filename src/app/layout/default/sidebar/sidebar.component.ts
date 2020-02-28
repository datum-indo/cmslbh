import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  roles_type: any = [];
  constructor(public settings: SettingsService) {
    // console.log(this.settings);
    if ('roles_type' in settings.user) {
      this.roles_type = this.settings.user.roles_type;
    }
    // console.log(this.roles_type);
  }
}
