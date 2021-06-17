import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '../i18n/i18n.service';

import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';

import { User } from '@shared';

@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private translate: TranslateService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    private httpClient: HttpClient,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  appData: any


  load(): Promise<void> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise(resolve => {
      zip(
        this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`),
        this.httpClient.get('assets/tmp/app-data.json'),
      )
        .pipe(
          catchError((res) => {
            console.warn(`StartupService.load: Network request failed`, res);
            resolve();
            return [];
          }),
        )
        .subscribe(
          ([langData, appData]) => {
            // setting language data
            this.translate.setTranslation(this.i18n.defaultLang, langData);
            this.translate.setDefaultLang(this.i18n.defaultLang);

            // application data
            this.appData = appData
            this.settingService.setApp(this.appData.app);


            this.aclService.setFull(false);
            if (this.settingService.user.roles_type) {
              if (this.settingService.user.roles_type.find(el => el.type.id === 8)) {
                this.aclService.setFull(true);
              }
              const roles_type = this.settingService.user.roles_type.map(val => val.type.id.toString());
              this.aclService.setRole([...roles_type]);
            }
            this.menuService.clear();
            this.menuService.add(this.appData.menu);

            this.titleService.default = '';
            this.titleService.suffix = this.appData.app.name;
          },
          () => { },
          () => {
            resolve();
          },
        );
    });
  }

  setRoleAndUser(user: User) {
    this.settingService.setUser(user);
    if (user.roles_type.find(el => el.type.id === 8)) {
      this.aclService.setFull(true);
    } else this.aclService.setFull(false);
    const roles_type = user.roles_type.map(val => val.type.id.toString());
    this.aclService.setRole([...roles_type]);
    this.menuService.clear();
    this.menuService.add(this.appData.menu);
  }
}
