/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/ng-alain/ng-alain/issues/180
 */
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { throwIfAlreadyLoaded } from '@core';

import { AlainThemeModule, Body } from '@delon/theme';

// #region mock
import { DelonMockModule } from '@delon/mock';
// import * as MOCKDATA from '../../_mock';
import { environment } from '@env/environment';
const MOCK_MODULES = !environment.production ? [DelonMockModule.forRoot({ data: {} })] : [];
// #endregion

// #region reuse-tab
/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、增加 'REUSETAB_PROVIDES'
 * 2、在 'src/app/layout/default/default.component.html' 修改：
 *  '''html
 *  <section class="alain-default__content">
 *    <reuse-tab></reuse-tab>
 *    <router-outlet></router-outlet>
 *  </section>
 *  '''
 */
import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
const REUSETAB_PROVIDES = [
  // {
  //   provide: RouteReuseStrategy,
  //   useClass: ReuseTabStrategy,
  //   deps: [ReuseTabService],
  // },
];
// #endregion

// #region global config functions

import { PageHeaderConfig } from '@delon/abc';
export function fnPageHeaderConfig(): PageHeaderConfig {
  return {
    ...new PageHeaderConfig(),
    ...({ homeI18n: 'home' } as PageHeaderConfig),
  };
}

// formdelon
export const ERRORSDEFAULT = {
  'false schema': 'Boolean mode error',
  $ref: 'Cannot find reference {ref}',
  additionalItems: 'Do not allow more than {ref}',
  additionalProperties: 'Do not allow extra attributes',
  anyOf: 'Data should be one of the specified by anyOf',
  Dependencies: 'should have the dependency property {deps} of the property {property}',
  Enum: 'should be one of the preset enumeration values',
  Format: 'Format is incorrect',
  Type: 'type should be {type}',
  Required: 'Required',
  maxLength: 'up to {limit} characters',
  minLength: 'At least {limit} characters or more',
  Minimum: 'must {comparison}{limit}',
  formatMinimum: 'must {comparison}{limit}',
  Maximum: 'must be {comparison}{limit}',
  formatMaximum: 'must {comparison}{limit}',
  maxItems: 'No more than {limit} items',
  minItems: 'Not less than {limit} items',
  maxProperties: 'No more than {limit} attributes',
  minProperties: 'Not less than {limit} attributes',
  multipleOf: 'should be an integer multiple of {multipleOf}',
  Not: 'should not match "not" schema',
  Pattern: 'The data format is incorrect',
  uniqueItems: 'There should be no duplicates (the {j} and {i} items are duplicates)',
  Custom: 'The format is incorrect',
  propertyNames: 'property name {propertyName} is invalid',
  patternRequired: 'There should be an attribute matching pattern {missingPattern}',
  Switch: 'The failure of {caseIndex} failed to pass the "switch" checksum',
  Const: 'should be equal to constant',
  Contains: 'should contain a valid item',
  formatExclusiveMaximum: 'formatExclusiveMaximum should be a boolean',
  formatExclusiveMinimum: 'formatExclusiveMinimum should be a boolean',
  If: 'should match the pattern "{failingKeyword}"',
};
import { DelonFormConfig } from '@delon/form';
export function fnDelonFormConfig(): DelonFormConfig {
  return Object.assign(new DelonFormConfig(), <DelonFormConfig>{
    // values
    errors: ERRORSDEFAULT,
    uiEmailSuffixes: ['gmail.com', 'outlook.com', 'yahoo.com'],
  });
}

import { DelonAuthConfig } from '@delon/auth';
export function fnDelonAuthConfig(): DelonAuthConfig {
  return Object.assign(new DelonAuthConfig(), <DelonAuthConfig>{
    login_url: '/passport/login',
    executeOtherInterceptors: true,
    token_invalid_redirect: true,
  });
}

import { STConfig } from '@delon/abc';
export function fnSTConfig(): STConfig {
  return {
    ...new STConfig(),
    ...({
      modal: { size: 'lg' },
    } as STConfig),
  };
}

const GLOBAL_CONFIG_PROVIDES = [
  // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 'st' 的页码默认为 '20' 行
  { provide: STConfig, useFactory: fnSTConfig },
  { provide: PageHeaderConfig, useFactory: fnPageHeaderConfig },
  { provide: DelonAuthConfig, useFactory: fnDelonAuthConfig },
  { provide: DelonFormConfig, useFactory: fnDelonFormConfig },
];

// #endregion

@NgModule({
  imports: [AlainThemeModule.forRoot(), ...MOCK_MODULES],
})
export class DelonModule {
  constructor(@Optional() @SkipSelf() parentModule: DelonModule) {
    throwIfAlreadyLoaded(parentModule, 'DelonModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [...REUSETAB_PROVIDES, ...GLOBAL_CONFIG_PROVIDES],
    };
  }
}
