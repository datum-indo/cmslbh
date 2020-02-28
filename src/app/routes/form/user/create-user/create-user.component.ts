import { Component, OnInit, Output, EventEmitter, ViewChild, Input, OnDestroy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import {
  GetMtVocabsGQL,
  PostPersonGQL,
  PutPersonGQL,
  PersonWhereUniqueInput,
  UserCreateInput,
  UserUpdateInput,
  PostUserGQL,
  PutUserGQL,
  UserWhereUniqueInput,
  UserProfileCreateOneWithoutUserIdInput,
  UserProfileCreateWithoutUserIdInput,
  RoleCreateManyWithoutUserIdInput,
  RoleCreateWithoutUserIdInput,
  DestroyRoles,
  DestroyRolesGQL,
  RoleUpdateManyWithoutUserIdInput,
} from '@shared';
import { MtVocabHelper } from '@shared/helper';
import { SettingsService } from '@delon/theme';
import { SFComponent, SFSchema } from '@delon/form';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less'],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  private _editData: any;

  constructor(
    public msg: NzMessageService,
    public mtVocabHelper: MtVocabHelper,
    private settingService: SettingsService,
    private postUserGQL: PostUserGQL,
    private putUserGQL: PutUserGQL,
    private destroyRolesGQL: DestroyRolesGQL,
  ) {}

  @Output() saveDone = new EventEmitter<boolean>();
  @ViewChild('sf') sf: SFComponent;
  @Input() parent: boolean;
  @Input() mode = 'create';
  @Input()
  set editData(editData: any) {
    (async () => {
      this.loading = true;
      if (!Array.isArray(editData.distrikId) && editData.distrikId) {
        editData.distrikId = (await this.mtVocabHelper.findParent(editData.distrikId)).reverse();
      }
      if (!Array.isArray(editData.distrikDomisili) && editData.distrikDomisili) {
        editData.distrikDomisili = (await this.mtVocabHelper.findParent(editData.distrikDomisili)).reverse();
      }
      if (!Array.isArray(editData.pekerjaan) && editData.pekerjaan) {
        editData.pekerjaan = (await this.mtVocabHelper.findParentPekerjaan(editData.pekerjaan)).reverse();
      }
      this._editData = editData;
      this.loading = false;
    })();
  }
  get editData(): any {
    return this._editData;
  }

  ngOnInit() {}

  ngOnDestroy(): void {}
  loading = false;

  submit(value: any) {
    // console.log(value);
    const processedData = this.processData(value);
    if (this.mode === 'edit') {
      this.destroyRolesGQL
        .mutate({ where: { userId_every: { id: value.id } } })
        .toPromise()
        .then(
          res => {
            this.dataMutationUpdate(<UserUpdateInput>processedData, <UserWhereUniqueInput>{ id: value.id });
          },
          error => {
            this.msg.error(JSON.stringify(error));
          },
        );
    } else {
      this.dataMutationCreate(<UserCreateInput>processedData);
    }
  }

  processData(data: any): UserCreateInput | UserUpdateInput {
    if (this.mode === 'edit') {
      const roles = <RoleCreateWithoutUserIdInput[]>[];
      for (const a of data.roles_type_virtual) {
        const role: any = { type: { connect: { id: a } } };
        roles.push(role);
      }
      const rolesType = <RoleUpdateManyWithoutUserIdInput>{ create: roles };
      data.roles_type = rolesType;
      const { id, createdAt, updatedAt, __typename, _values, profile, roles_type_virtual, ...newData } = data;
      return <UserUpdateInput>{ ...newData };
    } else {
      // create
      const roles = <RoleCreateWithoutUserIdInput[]>[];
      for (const a of data.roles_type_virtual) {
        const role: any = { type: { connect: { id: a } } };
        roles.push(role);
      }
      const rolesType = <RoleCreateManyWithoutUserIdInput>{ create: roles };
      const profile = <UserProfileCreateOneWithoutUserIdInput>{
        create: { noContact: data.phone },
      };
      data.profile = profile;
      data.roles_type = rolesType;
      const { roles_type_virtual, ...newData } = data;
      return <UserCreateInput>{ ...newData };
    }
  }

  dataMutationCreate(data: UserCreateInput) {
    this.postUserGQL
      .mutate({ data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Sukses Dibuat');
          this.sf.refreshSchema(this.schema);
          if (this.parent) this.saveDone.emit(true);
        },
        error => {
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  dataMutationUpdate(data: UserUpdateInput, id: UserWhereUniqueInput) {
    this.putUserGQL
      .mutate({ where: id, data: data })
      .pipe(take(1))
      .subscribe(
        () => {
          this.msg.success('Data Sukses Dirubah');
          this.sf.refreshSchema(this.schema);
          if (this.parent) this.saveDone.emit(true);
        },
        error => {
          this.msg.error(JSON.stringify(error));
        },
      );
  }

  schema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        ui: {
          hidden: true,
        },
      },
      name: {
        type: 'string',
        title: 'Nama Lengkap',
      },
      username: {
        type: 'string',
        title: 'Username',
      },
      email: {
        type: 'string',
        title: 'Email',
      },
      password: {
        type: 'string',
        title: 'Password',
        ui: {
          type: 'password',
        },
      },
      phone: {
        type: 'string',
        title: 'Phone',
      },
      roles_type_virtual: {
        type: 'string',
        title: 'Posisi',
        ui: {
          widget: 'select',
          mode: 'multiple',
          asyncData: () => this.mtVocabHelper.getRolesType(),
        },
      },
      status: {
        type: 'string',
        title: 'status',
        enum: [{ label: 'Aktif', value: '1' }, { label: 'Tidak Aktif', value: '2' }],
        default: '1',
        ui: {
          widget: 'select',
        },
      },
      address: {
        type: 'string',
        title: 'Alamat',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
    },
    required: ['name', 'email', 'password', 'position'],

    ui: {
      size: 'large',
    },
  };
}
