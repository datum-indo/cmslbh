import { Injectable } from '@angular/core';
import { GetMtVocabsGQL, GetMtVocabs, MtVocabWhereInput, MtVocabGroupWhereInput, MtVocabOrderByInput } from '@shared';
import { map, tap, zip, take } from 'rxjs/operators';
import { doWhileStatement } from 'babel-types';
import { SFSchemaEnumType } from '@delon/form';
import {
  GetRolesTypeGQL,
  GetUser,
  UserWhereInput,
  GetUserGQL,
  RoleWhereInput,
  GetCase,
  CaseWhereInput,
  GetCaseGQL,
  GetLogRequestGQL,
  GetLogRequest,
  LogRequestWhereInput,
  GetNetworksGQL,
  GetClientGQL,
} from '@shared/graphql';
import { valid } from 'mockjs';
import { _ } from 'underscore';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class MtVocabHelper {
  // return array for cascade in cascader from mtvocab
  public each(array, delegate) {
    return _.each(array, delegate);
  }

  public flatten(array, shallow?) {
    return _.flatten(array, shallow);
  }

  public uniq(array, func?) {
    return _.uniq(array, func);
  }
  constructor(
    private getMtVocabsGQL: GetMtVocabsGQL,
    private getRolesTypeGQL: GetRolesTypeGQL,
    private getUserGQL: GetUserGQL,
    private getCaseGQL: GetCaseGQL,
    private getLogRequestGQL: GetLogRequestGQL,
    private getNetworksGQL: GetNetworksGQL,
    private getClientGQL: GetClientGQL,
  ) {}

  async findParent(kode: string) {
    const arrMtvocabs: GetMtVocabs.MtVocabs[] = [];
    let initialData = await this.getData(kode);
    if (initialData[0].level === 0) return [kode];
    arrMtvocabs.push(initialData[0]);
    // console.log(arrMtvocabs);
    do {
      initialData = await this.getData(initialData[0].kode_induk);
      arrMtvocabs.push(initialData[0]);
    } while (arrMtvocabs.slice(-1)[0].level !== 0);
    return arrMtvocabs.map(mtVocabs => mtVocabs.KODE);
  }

  async findParentPekerjaan(kode: string) {
    const arrMtvocabs: GetMtVocabs.MtVocabs[] = [];
    let initialData = await this.getData(kode);
    arrMtvocabs.push(initialData[0]);

    do {
      initialData = await this.getData(initialData[0].kode_induk);
      arrMtvocabs.push(initialData[0]);
    } while (arrMtvocabs.slice(-1)[0].level !== 0);
    return arrMtvocabs.map(mtVocabs => mtVocabs.KODE);
  }

  private getData(kode) {
    return this.getMtVocabsGQL
      .watch(this.searchGenerator(kode))
      .valueChanges.pipe(map(result => result.data.mtVocabs))
      .pipe(take(1))
      .toPromise();
  }

  private searchGenerator(kode): GetMtVocabs.Variables {
    return <GetMtVocabs.Variables>{
      where: <MtVocabWhereInput>{
        KODE: kode,
      },
    };
  }

  getMtVocabEnum(kode_list: number, type: string) {
    return this.getMtVocabsGQL
      .watch(this.searchGeneratorEnum(kode_list))
      .valueChanges.pipe(
        map(
          result =>
            result.data.mtVocabs.map(res => {
              const obj: any = {};
              obj.value = type === 'kode' ? res.KODE : res.teks;
              obj.label = res.teks;
              return obj;
            }) as SFSchemaEnumType[],
        ),
      )
      .pipe(take(1));
  }

  async getMtVocabSub(kode_list: number, kode: string) {
    const arr = [];
    const a = await this.getMtVocabChildTreeArrayOnly(kode_list, kode).toPromise();
    for (const b of a) {
      arr.push(b);
    }
    for (const c of arr) {
      const a = await this.getMtVocabChildTreeArrayOnly(kode_list, c).toPromise();
      if (a.length > 0) {
        for (const b of a) {
          arr.push(b);
        }
      }
    }
    arr.push(kode);
    return arr;
  }

  async getAllTree(kode_list: number) {
    const arr = [];
    const a = await this.getMtVocabParentTree(kode_list).toPromise();
    for (const b of a) {
      arr.push(b);
    }
    for (const c of arr) {
      const a = await this.getMtVocabChildTree(kode_list, c.key).toPromise();

      for (const d of a) {
        const e = await this.getMtVocabChildTree(kode_list, d.key).toPromise();
        if (e.length > 0) {
          for (const f of a) {
            if (f.key === d.key) {
              f.children = e;
            }
          }
        }
      }

      if (a.length > 0) {
        for (const g of arr) {
          if (g.key === c.key) {
            g.children = a;
          }
        }
      }
    }
    return arr;
  }

  getMtVocabParentTree(kode_list: number) {
    return this.getMtVocabsGQL
      .watch(
        {
          where: {
            sembunyikan: false,
            kode_induk: '0',
            kode_list: { kode_list: kode_list },
          },
          orderBy: MtVocabOrderByInput.UrutanAsc,
        },
        { fetchPolicy: 'cache-first' },
      )
      .valueChanges.pipe(
        map(result =>
          result.data.mtVocabs.map(res => {
            const obj: any = {};
            obj.key = res.KODE;
            obj.title = res.teks;
            return obj;
          }),
        ),
      )
      .pipe(take(1));
  }

  getMtVocabWithChildren(kode_list: number, children: any) {
    return this.getMtVocabsGQL
      .watch(
        {
          where: {
            sembunyikan: false,
            kode_induk: '0',
            kode_list: { kode_list: kode_list },
          },
          orderBy: MtVocabOrderByInput.UrutanAsc,
        },
        { fetchPolicy: 'cache-first' },
      )
      .valueChanges.pipe(
        map(result => {
          return result.data.mtVocabs.map(res => {
            const obj: any = {};
            if (children) {
              if (children.key === res.KODE) {
                return children;
              }
            }
            obj.key = res.KODE;
            obj.title = res.teks;
            return obj;
          });
        }),
      )
      .pipe(take(1));
  }

  getMtVocabChildTree(kode_list: number, kode: string) {
    return this.getMtVocabsGQL
      .watch(
        {
          where: {
            sembunyikan: false,
            kode_induk: kode,
            kode_list: { kode_list: kode_list },
          },
          orderBy: MtVocabOrderByInput.UrutanAsc,
        },
        { fetchPolicy: 'cache-first' },
      )
      .valueChanges.pipe(
        map(result =>
          result.data.mtVocabs.map(res => {
            const obj: any = {};
            obj.key = res.KODE;
            obj.title = res.teks;
            return obj;
          }),
        ),
      )
      .pipe(take(1));
  }

  getMtVocabChildTreeArrayOnly(kode_list: number, kode: string) {
    return this.getMtVocabsGQL
      .watch(
        {
          where: {
            sembunyikan: false,
            kode_induk: kode,
            kode_list: { kode_list: kode_list },
          },
          orderBy: MtVocabOrderByInput.UrutanAsc,
        },
        { fetchPolicy: 'cache-first' },
      )
      .valueChanges.pipe(
        map(result => {
          const arr = [];
          result.data.mtVocabs.forEach(res => {
            arr.push(res.KODE);
          });
          return arr;
        }),
      )
      .pipe(take(1));
  }

  getNetworksEnum(type: string) {
    return this.getNetworksGQL
      .watch({ where: { AND: [{ type: type }, { status: '1' }] } }, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        map(
          result =>
            result.data.networks.map(res => {
              const obj: any = {};
              obj.value = res.id;
              obj.label = res.name;
              return obj;
            }) as SFSchemaEnumType[],
        ),
      )
      .pipe(take(1));
  }

  getClientsEnum(caseId: number) {
    return this.getCaseGQL
      .watch({ where: { id: caseId } })
      .valueChanges.pipe(
        map(
          result =>
            result.data.cases[0].application.clients.map(res => {
              const obj: any = {};
              obj.value = res.personId.id;
              obj.label = res.personId.namaLengkap;
              return obj;
            }) as SFSchemaEnumType[],
        ),
      )
      .pipe(take(1));
  }

  getRolesType() {
    return this.getRolesTypeGQL
      .watch()
      .valueChanges.pipe(
        map(
          result =>
            result.data.rolesTypes.map(res => {
              const obj: any = {};
              obj.value = res.id;
              obj.label = res.description;
              return obj;
            }) as SFSchemaEnumType[],
        ),
      )
      .pipe(take(1));
  }

  getUsers(roles: String[]) {
    const rolesNumber = roles.map(val => Number(val));
    return this.getUserGQL
      .watch(<GetUser.Variables>{
        where: <UserWhereInput>{ roles_type_some: <RoleWhereInput>{ type: { id_in: rolesNumber } }, status: '1' },
      })
      .valueChanges.pipe(
        map(
          result =>
            result.data.users.map(res => {
              const obj: any = {};
              obj.value = res.id;
              obj.label = res.name;
              return obj;
            }) as SFSchemaEnumType[],
        ),
      )
      .pipe(take(1));
  }

  findPPConsultation(caseId: number, consultationId: number) {
    return this.getCaseGQL
      .watch(<GetCase.Variables>{
        where: <CaseWhereInput>{ id: caseId, consultations_some: { id: consultationId } },
      })
      .valueChanges.pipe(
        map(result =>
          result.data.cases.map(res => {
            const pp = res.consultations[0].apps;
            const formatText = pp.map(val => {
              return val.appConsultation.name;
            });
            formatText.sort();
            let concattedText = '';
            for (const a of formatText) {
              concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
            }
            return concattedText;
          }),
        ),
      )
      .pipe(take(1))
      .toPromise();
  }

  findHandlingPPString(caseId: number) {
    return this.getCaseGQL
      .watch(<GetCase.Variables>{
        where: <CaseWhereInput>{ id: caseId },
      })
      .valueChanges.pipe(
        map(result =>
          result.data.cases.map(res => {
            let pp = [];
            if (res.consultations) {
              pp = res.consultations.map(val => val.apps);
              pp = this.flatten(pp);
              pp = this.uniq(pp, pengacara => pengacara.appConsultation.id);

              // console.log(pp);
              const formatText = pp.map(val => {
                return val.appConsultation.name;
              });
              formatText.sort();
              let concattedText = '';
              for (const a of formatText) {
                concattedText === '' ? (concattedText = a) : (concattedText = concattedText + ', ' + a);
              }
              return concattedText;
            } else {
              return null;
            }
          }),
        ),
      )
      .pipe(take(1))
      .toPromise();
  }

  findHandlingPPArray(caseId: number) {
    return this.getCaseGQL
      .watch(<GetCase.Variables>{
        where: <CaseWhereInput>{ id: caseId },
      })
      .valueChanges.pipe(
        map(result =>
          result.data.cases.map(res => {
            let pp = [];
            if (res.consultations) {
              pp = res.consultations.map(val => val.apps);
              pp = this.flatten(pp);
              pp = this.uniq(pp, pengacara => pengacara.appConsultation.id);
              // console.log(pp);
              const ppId = pp.map(val => {
                return val.appConsultation;
              });
              if (res.pk) if (res.pk.ppPendamping) ppId.push(res.pk.ppPendamping);

              return ppId;
            } else {
              return null;
            }
          }),
        ),
      )
      .pipe(take(1))
      .toPromise();
  }

  findConsultationToday(noReg) {
    return this.getLogRequestGQL
      .watch(<GetLogRequest.Variables>{
        where: <LogRequestWhereInput>{
          tglRequest: moment().toDate(),
          applicationId: { noReg: noReg },
          jenisRequest: '1',
        },
      })
      .valueChanges.pipe(
        map(result =>
          result.data.logRequests.map(res => {
            let pp = [];
            if (res.pp) {
              pp = res.pp.map(val => val.appConsultation);
              pp = this.flatten(pp);
              pp = this.uniq(pp, pengacara => pengacara.appConsultation.id);

              // console.log(pp);
              const ppId = pp.map(val => {
                return val.appConsultation.id;
              });

              return ppId;
            } else {
              return null;
            }
          }),
        ),
      )
      .pipe(take(1))
      .toPromise();
  }

  private searchGeneratorEnum(kode_list: number): GetMtVocabs.Variables {
    return <GetMtVocabs.Variables>{
      where: <MtVocabWhereInput>{
        AND: <MtVocabWhereInput[]>[{ kode_list: <MtVocabGroupWhereInput>{ kode_list: kode_list }, sembunyikan: false }],
      },
      orderBy: MtVocabOrderByInput.UrutanAsc,
    };
  }

  public isThereAChild(kode) {
    return this.getMtVocabsGQL
      .watch(<GetMtVocabs.Variables>{
        where: <MtVocabWhereInput>{
          kode_induk: kode,
        },
      })
      .valueChanges.pipe(map(result => result.data.mtVocabs))
      .pipe(take(1))
      .toPromise();
  }

  translateMtVocab(kode) {
    if (kode) {
      return this.getMtVocabsGQL
        .watch(<GetMtVocabs.Variables>{
          where: <MtVocabWhereInput>{
            KODE: kode,
          },
        })
        .valueChanges.pipe(map(result => result.data.mtVocabs[0].teks))
        .pipe(take(1))
        .toPromise();
    } else {
      return new Promise(function(resolve, reject) {
        resolve(null);
      });
    }
  }
}
