import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: Date,
};




export type AffectedRowsOutput = {
  count: Scalars['Int'],
};

export type AggregateApplication = {
  count?: Maybe<ApplicationCountAggregate>,
  avg?: Maybe<ApplicationAvgAggregate>,
  sum?: Maybe<ApplicationSumAggregate>,
  min?: Maybe<ApplicationMinAggregate>,
  max?: Maybe<ApplicationMaxAggregate>,
};

export type AggregateCaseClassification = {
  count?: Maybe<CaseClassificationCountAggregate>,
  avg?: Maybe<CaseClassificationAvgAggregate>,
  sum?: Maybe<CaseClassificationSumAggregate>,
  min?: Maybe<CaseClassificationMinAggregate>,
  max?: Maybe<CaseClassificationMaxAggregate>,
};

export type AggregateCaseConsultation = {
  count?: Maybe<CaseConsultationCountAggregate>,
  avg?: Maybe<CaseConsultationAvgAggregate>,
  sum?: Maybe<CaseConsultationSumAggregate>,
  min?: Maybe<CaseConsultationMinAggregate>,
  max?: Maybe<CaseConsultationMaxAggregate>,
};

export type AggregateCaseConsultationApp = {
  count?: Maybe<CaseConsultationAppCountAggregate>,
  avg?: Maybe<CaseConsultationAppAvgAggregate>,
  sum?: Maybe<CaseConsultationAppSumAggregate>,
  min?: Maybe<CaseConsultationAppMinAggregate>,
  max?: Maybe<CaseConsultationAppMaxAggregate>,
};

export type AggregateCaseDocument = {
  count?: Maybe<CaseDocumentCountAggregate>,
  avg?: Maybe<CaseDocumentAvgAggregate>,
  sum?: Maybe<CaseDocumentSumAggregate>,
  min?: Maybe<CaseDocumentMinAggregate>,
  max?: Maybe<CaseDocumentMaxAggregate>,
};

export type AggregateCaseIssue = {
  count?: Maybe<CaseIssueCountAggregate>,
  avg?: Maybe<CaseIssueAvgAggregate>,
  sum?: Maybe<CaseIssueSumAggregate>,
  min?: Maybe<CaseIssueMinAggregate>,
  max?: Maybe<CaseIssueMaxAggregate>,
};

export type AggregateCaseKorban = {
  count?: Maybe<CaseKorbanCountAggregate>,
  avg?: Maybe<CaseKorbanAvgAggregate>,
  sum?: Maybe<CaseKorbanSumAggregate>,
  min?: Maybe<CaseKorbanMinAggregate>,
  max?: Maybe<CaseKorbanMaxAggregate>,
};

export type AggregateCasePelaku = {
  count?: Maybe<CasePelakuCountAggregate>,
  avg?: Maybe<CasePelakuAvgAggregate>,
  sum?: Maybe<CasePelakuSumAggregate>,
  min?: Maybe<CasePelakuMinAggregate>,
  max?: Maybe<CasePelakuMaxAggregate>,
};

export type AggregateCasePk = {
  count?: Maybe<CasePkCountAggregate>,
  avg?: Maybe<CasePkAvgAggregate>,
  sum?: Maybe<CasePkSumAggregate>,
  min?: Maybe<CasePkMinAggregate>,
  max?: Maybe<CasePkMaxAggregate>,
};

export type AggregateCaseProgress = {
  count?: Maybe<CaseProgressCountAggregate>,
  avg?: Maybe<CaseProgressAvgAggregate>,
  sum?: Maybe<CaseProgressSumAggregate>,
  min?: Maybe<CaseProgressMinAggregate>,
  max?: Maybe<CaseProgressMaxAggregate>,
};

export type AggregateCaseProgressActivity = {
  count?: Maybe<CaseProgressActivityCountAggregate>,
  avg?: Maybe<CaseProgressActivityAvgAggregate>,
  sum?: Maybe<CaseProgressActivitySumAggregate>,
  min?: Maybe<CaseProgressActivityMinAggregate>,
  max?: Maybe<CaseProgressActivityMaxAggregate>,
};

export type AggregateCaseProgressActivityLit = {
  count?: Maybe<CaseProgressActivityLitCountAggregate>,
  avg?: Maybe<CaseProgressActivityLitAvgAggregate>,
  sum?: Maybe<CaseProgressActivityLitSumAggregate>,
  min?: Maybe<CaseProgressActivityLitMinAggregate>,
  max?: Maybe<CaseProgressActivityLitMaxAggregate>,
};

export type AggregateCaseProgressActivityNonlit = {
  count?: Maybe<CaseProgressActivityNonlitCountAggregate>,
  avg?: Maybe<CaseProgressActivityNonlitAvgAggregate>,
  sum?: Maybe<CaseProgressActivityNonlitSumAggregate>,
  min?: Maybe<CaseProgressActivityNonlitMinAggregate>,
  max?: Maybe<CaseProgressActivityNonlitMaxAggregate>,
};

export type AggregateCaseReferral = {
  count?: Maybe<CaseReferralCountAggregate>,
  avg?: Maybe<CaseReferralAvgAggregate>,
  sum?: Maybe<CaseReferralSumAggregate>,
  min?: Maybe<CaseReferralMinAggregate>,
  max?: Maybe<CaseReferralMaxAggregate>,
};

export type AggregateCaseTransfer = {
  count?: Maybe<CaseTransferCountAggregate>,
  avg?: Maybe<CaseTransferAvgAggregate>,
  sum?: Maybe<CaseTransferSumAggregate>,
  min?: Maybe<CaseTransferMinAggregate>,
  max?: Maybe<CaseTransferMaxAggregate>,
};

export type AggregateCaseTransferReferral = {
  count?: Maybe<CaseTransferReferralCountAggregate>,
  avg?: Maybe<CaseTransferReferralAvgAggregate>,
  sum?: Maybe<CaseTransferReferralSumAggregate>,
  min?: Maybe<CaseTransferReferralMinAggregate>,
  max?: Maybe<CaseTransferReferralMaxAggregate>,
};

export type AggregateCaseViolatedRight = {
  count?: Maybe<CaseViolatedRightCountAggregate>,
  avg?: Maybe<CaseViolatedRightAvgAggregate>,
  sum?: Maybe<CaseViolatedRightSumAggregate>,
  min?: Maybe<CaseViolatedRightMinAggregate>,
  max?: Maybe<CaseViolatedRightMaxAggregate>,
};

export type AggregateClient = {
  count?: Maybe<ClientCountAggregate>,
  avg?: Maybe<ClientAvgAggregate>,
  sum?: Maybe<ClientSumAggregate>,
  min?: Maybe<ClientMinAggregate>,
  max?: Maybe<ClientMaxAggregate>,
};

export type AggregateDaftarPengacara = {
  count?: Maybe<DaftarPengacaraCountAggregate>,
  avg?: Maybe<DaftarPengacaraAvgAggregate>,
  sum?: Maybe<DaftarPengacaraSumAggregate>,
  min?: Maybe<DaftarPengacaraMinAggregate>,
  max?: Maybe<DaftarPengacaraMaxAggregate>,
};

export type AggregateDataDict = {
  count?: Maybe<DataDictCountAggregate>,
  min?: Maybe<DataDictMinAggregate>,
  max?: Maybe<DataDictMaxAggregate>,
};

export type AggregateDataDictLocal = {
  count?: Maybe<DataDictLocalCountAggregate>,
  avg?: Maybe<DataDictLocalAvgAggregate>,
  sum?: Maybe<DataDictLocalSumAggregate>,
  min?: Maybe<DataDictLocalMinAggregate>,
  max?: Maybe<DataDictLocalMaxAggregate>,
};

export type AggregateLogRequest = {
  count?: Maybe<LogRequestCountAggregate>,
  avg?: Maybe<LogRequestAvgAggregate>,
  sum?: Maybe<LogRequestSumAggregate>,
  min?: Maybe<LogRequestMinAggregate>,
  max?: Maybe<LogRequestMaxAggregate>,
};

export type AggregateLogRequestApp = {
  count?: Maybe<LogRequestAppCountAggregate>,
  avg?: Maybe<LogRequestAppAvgAggregate>,
  sum?: Maybe<LogRequestAppSumAggregate>,
  min?: Maybe<LogRequestAppMinAggregate>,
  max?: Maybe<LogRequestAppMaxAggregate>,
};

export type AggregateMtVocab = {
  count?: Maybe<MtVocabCountAggregate>,
  avg?: Maybe<MtVocabAvgAggregate>,
  sum?: Maybe<MtVocabSumAggregate>,
  min?: Maybe<MtVocabMinAggregate>,
  max?: Maybe<MtVocabMaxAggregate>,
};

export type AggregateMtVocabGroup = {
  count?: Maybe<MtVocabGroupCountAggregate>,
  avg?: Maybe<MtVocabGroupAvgAggregate>,
  sum?: Maybe<MtVocabGroupSumAggregate>,
  min?: Maybe<MtVocabGroupMinAggregate>,
  max?: Maybe<MtVocabGroupMaxAggregate>,
};

export type AggregateNetwork = {
  count?: Maybe<NetworkCountAggregate>,
  avg?: Maybe<NetworkAvgAggregate>,
  sum?: Maybe<NetworkSumAggregate>,
  min?: Maybe<NetworkMinAggregate>,
  max?: Maybe<NetworkMaxAggregate>,
};

export type AggregatePerson = {
  count?: Maybe<PersonCountAggregate>,
  avg?: Maybe<PersonAvgAggregate>,
  sum?: Maybe<PersonSumAggregate>,
  min?: Maybe<PersonMinAggregate>,
  max?: Maybe<PersonMaxAggregate>,
};

export type AggregatePersonDocument = {
  count?: Maybe<PersonDocumentCountAggregate>,
  avg?: Maybe<PersonDocumentAvgAggregate>,
  sum?: Maybe<PersonDocumentSumAggregate>,
  min?: Maybe<PersonDocumentMinAggregate>,
  max?: Maybe<PersonDocumentMaxAggregate>,
};

export type AggregateRenamedcase = {
  count?: Maybe<RenamedcaseCountAggregate>,
  avg?: Maybe<RenamedcaseAvgAggregate>,
  sum?: Maybe<RenamedcaseSumAggregate>,
  min?: Maybe<RenamedcaseMinAggregate>,
  max?: Maybe<RenamedcaseMaxAggregate>,
};

export type AggregateRole = {
  count?: Maybe<RoleCountAggregate>,
  avg?: Maybe<RoleAvgAggregate>,
  sum?: Maybe<RoleSumAggregate>,
  min?: Maybe<RoleMinAggregate>,
  max?: Maybe<RoleMaxAggregate>,
};

export type AggregateRolesType = {
  count?: Maybe<RolesTypeCountAggregate>,
  avg?: Maybe<RolesTypeAvgAggregate>,
  sum?: Maybe<RolesTypeSumAggregate>,
  min?: Maybe<RolesTypeMinAggregate>,
  max?: Maybe<RolesTypeMaxAggregate>,
};

export type AggregateSrcAnalisa = {
  count?: Maybe<SrcAnalisaCountAggregate>,
  avg?: Maybe<SrcAnalisaAvgAggregate>,
  sum?: Maybe<SrcAnalisaSumAggregate>,
  min?: Maybe<SrcAnalisaMinAggregate>,
  max?: Maybe<SrcAnalisaMaxAggregate>,
};

export type AggregateSrcOperator = {
  count?: Maybe<SrcOperatorCountAggregate>,
  avg?: Maybe<SrcOperatorAvgAggregate>,
  sum?: Maybe<SrcOperatorSumAggregate>,
  min?: Maybe<SrcOperatorMinAggregate>,
  max?: Maybe<SrcOperatorMaxAggregate>,
};

export type AggregateSrcTemplate = {
  count?: Maybe<SrcTemplateCountAggregate>,
  avg?: Maybe<SrcTemplateAvgAggregate>,
  sum?: Maybe<SrcTemplateSumAggregate>,
  min?: Maybe<SrcTemplateMinAggregate>,
  max?: Maybe<SrcTemplateMaxAggregate>,
};

export type AggregateUser = {
  count?: Maybe<UserCountAggregate>,
  avg?: Maybe<UserAvgAggregate>,
  sum?: Maybe<UserSumAggregate>,
  min?: Maybe<UserMinAggregate>,
  max?: Maybe<UserMaxAggregate>,
};

export type AggregateUserProfile = {
  count?: Maybe<UserProfileCountAggregate>,
  avg?: Maybe<UserProfileAvgAggregate>,
  sum?: Maybe<UserProfileSumAggregate>,
  min?: Maybe<UserProfileMinAggregate>,
  max?: Maybe<UserProfileMaxAggregate>,
};

export type Application = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakil_Id?: Maybe<Scalars['Int']>,
  case_applicationTocase?: Maybe<Scalars['Int']>,
  case?: Maybe<Renamedcase>,
  wakilId?: Maybe<Person>,
  clients: Array<Client>,
  LogRequest: Array<LogRequest>,
};


export type ApplicationClientsArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<Array<ClientOrderByInput>>,
  cursor?: Maybe<ClientWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<ClientScalarFieldEnum>>
};


export type ApplicationLogRequestArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestScalarFieldEnum>>
};

export type ApplicationAvgAggregate = {
  id: Scalars['Float'],
  jumlahPenerimaManfaat?: Maybe<Scalars['Float']>,
  wakil_Id?: Maybe<Scalars['Float']>,
  case_applicationTocase?: Maybe<Scalars['Float']>,
};

export type ApplicationCountAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  dudukPerara?: Maybe<Scalars['Int']>,
  infoLbh?: Maybe<Scalars['Int']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Int']>,
  noReg?: Maybe<Scalars['Int']>,
  pernahKlien?: Maybe<Scalars['Int']>,
  pernahPpLain?: Maybe<Scalars['Int']>,
  ppLain?: Maybe<Scalars['Int']>,
  regDate?: Maybe<Scalars['Int']>,
  relasiWakilClient?: Maybe<Scalars['Int']>,
  setujuAdvokasi?: Maybe<Scalars['Int']>,
  statusPerwakilan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  waktuPernahKlien?: Maybe<Scalars['Int']>,
  whyLbh?: Maybe<Scalars['Int']>,
  tahap?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['Int']>,
  wakil_Id?: Maybe<Scalars['Int']>,
  case_applicationTocase?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type ApplicationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutApplicationInput>,
  wakilId?: Maybe<PersonCreateNestedOneWithoutApplicationsInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutApplicationIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutApplicationIdInput>,
};

export type ApplicationCreateNestedManyWithoutWakilIdInput = {
  create?: Maybe<Array<ApplicationCreateWithoutWakilIdInput>>,
  connectOrCreate?: Maybe<Array<ApplicationCreateOrConnectWithoutWakilIdInput>>,
  connect?: Maybe<Array<ApplicationWhereUniqueInput>>,
};

export type ApplicationCreateNestedOneWithoutCaseInput = {
  create?: Maybe<ApplicationCreateWithoutCaseInput>,
  connectOrCreate?: Maybe<ApplicationCreateOrConnectWithoutCaseInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
};

export type ApplicationCreateNestedOneWithoutClientsInput = {
  create?: Maybe<ApplicationCreateWithoutClientsInput>,
  connectOrCreate?: Maybe<ApplicationCreateOrConnectWithoutClientsInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
};

export type ApplicationCreateNestedOneWithoutLogRequestInput = {
  create?: Maybe<ApplicationCreateWithoutLogRequestInput>,
  connectOrCreate?: Maybe<ApplicationCreateOrConnectWithoutLogRequestInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
};

export type ApplicationCreateOrConnectWithoutCaseInput = {
  where: ApplicationWhereUniqueInput,
  create: ApplicationCreateWithoutCaseInput,
};

export type ApplicationCreateOrConnectWithoutClientsInput = {
  where: ApplicationWhereUniqueInput,
  create: ApplicationCreateWithoutClientsInput,
};

export type ApplicationCreateOrConnectWithoutLogRequestInput = {
  where: ApplicationWhereUniqueInput,
  create: ApplicationCreateWithoutLogRequestInput,
};

export type ApplicationCreateOrConnectWithoutWakilIdInput = {
  where: ApplicationWhereUniqueInput,
  create: ApplicationCreateWithoutWakilIdInput,
};

export type ApplicationCreateWithoutCaseInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakilId?: Maybe<PersonCreateNestedOneWithoutApplicationsInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutApplicationIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutApplicationIdInput>,
};

export type ApplicationCreateWithoutClientsInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutApplicationInput>,
  wakilId?: Maybe<PersonCreateNestedOneWithoutApplicationsInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutApplicationIdInput>,
};

export type ApplicationCreateWithoutLogRequestInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutApplicationInput>,
  wakilId?: Maybe<PersonCreateNestedOneWithoutApplicationsInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutApplicationIdInput>,
};

export type ApplicationCreateWithoutWakilIdInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData: Scalars['Boolean'],
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi: Scalars['Boolean'],
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutApplicationInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutApplicationIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutApplicationIdInput>,
};

export type ApplicationListRelationFilter = {
  every?: Maybe<ApplicationWhereInput>,
  some?: Maybe<ApplicationWhereInput>,
  none?: Maybe<ApplicationWhereInput>,
};

export type ApplicationMaxAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakil_Id?: Maybe<Scalars['Int']>,
  case_applicationTocase?: Maybe<Scalars['Int']>,
};

export type ApplicationMinAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  dudukPerara?: Maybe<Scalars['String']>,
  infoLbh?: Maybe<Scalars['String']>,
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  konfirmasiData?: Maybe<Scalars['Boolean']>,
  noReg?: Maybe<Scalars['String']>,
  pernahKlien?: Maybe<Scalars['String']>,
  pernahPpLain?: Maybe<Scalars['String']>,
  ppLain?: Maybe<Scalars['String']>,
  regDate?: Maybe<Scalars['DateTime']>,
  relasiWakilClient?: Maybe<Scalars['String']>,
  setujuAdvokasi?: Maybe<Scalars['Boolean']>,
  statusPerwakilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  waktuPernahKlien?: Maybe<Scalars['String']>,
  whyLbh?: Maybe<Scalars['String']>,
  tahap?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  wakil_Id?: Maybe<Scalars['Int']>,
  case_applicationTocase?: Maybe<Scalars['Int']>,
};

export type ApplicationOrderByInput = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  dudukPerara?: Maybe<SortOrder>,
  infoLbh?: Maybe<SortOrder>,
  jumlahPenerimaManfaat?: Maybe<SortOrder>,
  konfirmasiData?: Maybe<SortOrder>,
  noReg?: Maybe<SortOrder>,
  pernahKlien?: Maybe<SortOrder>,
  pernahPpLain?: Maybe<SortOrder>,
  ppLain?: Maybe<SortOrder>,
  regDate?: Maybe<SortOrder>,
  relasiWakilClient?: Maybe<SortOrder>,
  setujuAdvokasi?: Maybe<SortOrder>,
  statusPerwakilan?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  waktuPernahKlien?: Maybe<SortOrder>,
  whyLbh?: Maybe<SortOrder>,
  tahap?: Maybe<SortOrder>,
  status?: Maybe<SortOrder>,
  wakil_Id?: Maybe<SortOrder>,
  case_applicationTocase?: Maybe<SortOrder>,
};

export type ApplicationRelationFilter = {
  is?: Maybe<ApplicationWhereInput>,
  isNot?: Maybe<ApplicationWhereInput>,
};

export enum ApplicationScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  DudukPerara = 'dudukPerara',
  InfoLbh = 'infoLbh',
  JumlahPenerimaManfaat = 'jumlahPenerimaManfaat',
  KonfirmasiData = 'konfirmasiData',
  NoReg = 'noReg',
  PernahKlien = 'pernahKlien',
  PernahPpLain = 'pernahPpLain',
  PpLain = 'ppLain',
  RegDate = 'regDate',
  RelasiWakilClient = 'relasiWakilClient',
  SetujuAdvokasi = 'setujuAdvokasi',
  StatusPerwakilan = 'statusPerwakilan',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  WaktuPernahKlien = 'waktuPernahKlien',
  WhyLbh = 'whyLbh',
  Tahap = 'tahap',
  Status = 'status',
  WakilId = 'wakil_Id',
  CaseApplicationTocase = 'case_applicationTocase'
}

export type ApplicationScalarWhereInput = {
  AND?: Maybe<Array<ApplicationScalarWhereInput>>,
  OR?: Maybe<Array<ApplicationScalarWhereInput>>,
  NOT?: Maybe<Array<ApplicationScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  dudukPerara?: Maybe<StringNullableFilter>,
  infoLbh?: Maybe<StringNullableFilter>,
  jumlahPenerimaManfaat?: Maybe<IntNullableFilter>,
  konfirmasiData?: Maybe<BoolFilter>,
  noReg?: Maybe<StringNullableFilter>,
  pernahKlien?: Maybe<StringNullableFilter>,
  pernahPpLain?: Maybe<StringNullableFilter>,
  ppLain?: Maybe<StringNullableFilter>,
  regDate?: Maybe<DateTimeNullableFilter>,
  relasiWakilClient?: Maybe<StringNullableFilter>,
  setujuAdvokasi?: Maybe<BoolFilter>,
  statusPerwakilan?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  waktuPernahKlien?: Maybe<StringNullableFilter>,
  whyLbh?: Maybe<StringNullableFilter>,
  tahap?: Maybe<StringNullableFilter>,
  status?: Maybe<StringNullableFilter>,
  wakil_Id?: Maybe<IntNullableFilter>,
  case_applicationTocase?: Maybe<IntNullableFilter>,
};

export type ApplicationSumAggregate = {
  id: Scalars['Int'],
  jumlahPenerimaManfaat?: Maybe<Scalars['Int']>,
  wakil_Id?: Maybe<Scalars['Int']>,
  case_applicationTocase?: Maybe<Scalars['Int']>,
};

export type ApplicationUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  dudukPerara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  infoLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jumlahPenerimaManfaat?: Maybe<NullableIntFieldUpdateOperationsInput>,
  konfirmasiData?: Maybe<BoolFieldUpdateOperationsInput>,
  noReg?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahPpLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  regDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  relasiWakilClient?: Maybe<NullableStringFieldUpdateOperationsInput>,
  setujuAdvokasi?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPerwakilan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  waktuPernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  whyLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tahap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutApplicationInput>,
  wakilId?: Maybe<PersonUpdateOneWithoutApplicationsInput>,
  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutApplicationIdInput>,
};

export type ApplicationUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  dudukPerara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  infoLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jumlahPenerimaManfaat?: Maybe<NullableIntFieldUpdateOperationsInput>,
  konfirmasiData?: Maybe<BoolFieldUpdateOperationsInput>,
  noReg?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahPpLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  regDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  relasiWakilClient?: Maybe<NullableStringFieldUpdateOperationsInput>,
  setujuAdvokasi?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPerwakilan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  waktuPernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  whyLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tahap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type ApplicationUpdateManyWithoutWakilIdInput = {
  create?: Maybe<Array<ApplicationCreateWithoutWakilIdInput>>,
  connectOrCreate?: Maybe<Array<ApplicationCreateOrConnectWithoutWakilIdInput>>,
  upsert?: Maybe<Array<ApplicationUpsertWithWhereUniqueWithoutWakilIdInput>>,
  connect?: Maybe<Array<ApplicationWhereUniqueInput>>,
  set?: Maybe<Array<ApplicationWhereUniqueInput>>,
  disconnect?: Maybe<Array<ApplicationWhereUniqueInput>>,
  delete?: Maybe<Array<ApplicationWhereUniqueInput>>,
  update?: Maybe<Array<ApplicationUpdateWithWhereUniqueWithoutWakilIdInput>>,
  updateMany?: Maybe<Array<ApplicationUpdateManyWithWhereWithoutWakilIdInput>>,
  deleteMany?: Maybe<Array<ApplicationScalarWhereInput>>,
};

export type ApplicationUpdateManyWithWhereWithoutWakilIdInput = {
  where: ApplicationScalarWhereInput,
  data: ApplicationUpdateManyMutationInput,
};

export type ApplicationUpdateOneWithoutCaseInput = {
  create?: Maybe<ApplicationCreateWithoutCaseInput>,
  connectOrCreate?: Maybe<ApplicationCreateOrConnectWithoutCaseInput>,
  upsert?: Maybe<ApplicationUpsertWithoutCaseInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ApplicationUpdateWithoutCaseInput>,
};

export type ApplicationUpdateOneWithoutClientsInput = {
  create?: Maybe<ApplicationCreateWithoutClientsInput>,
  connectOrCreate?: Maybe<ApplicationCreateOrConnectWithoutClientsInput>,
  upsert?: Maybe<ApplicationUpsertWithoutClientsInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ApplicationUpdateWithoutClientsInput>,
};

export type ApplicationUpdateOneWithoutLogRequestInput = {
  create?: Maybe<ApplicationCreateWithoutLogRequestInput>,
  connectOrCreate?: Maybe<ApplicationCreateOrConnectWithoutLogRequestInput>,
  upsert?: Maybe<ApplicationUpsertWithoutLogRequestInput>,
  connect?: Maybe<ApplicationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ApplicationUpdateWithoutLogRequestInput>,
};

export type ApplicationUpdateWithoutCaseInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  dudukPerara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  infoLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jumlahPenerimaManfaat?: Maybe<NullableIntFieldUpdateOperationsInput>,
  konfirmasiData?: Maybe<BoolFieldUpdateOperationsInput>,
  noReg?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahPpLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  regDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  relasiWakilClient?: Maybe<NullableStringFieldUpdateOperationsInput>,
  setujuAdvokasi?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPerwakilan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  waktuPernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  whyLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tahap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wakilId?: Maybe<PersonUpdateOneWithoutApplicationsInput>,
  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutApplicationIdInput>,
};

export type ApplicationUpdateWithoutClientsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  dudukPerara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  infoLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jumlahPenerimaManfaat?: Maybe<NullableIntFieldUpdateOperationsInput>,
  konfirmasiData?: Maybe<BoolFieldUpdateOperationsInput>,
  noReg?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahPpLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  regDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  relasiWakilClient?: Maybe<NullableStringFieldUpdateOperationsInput>,
  setujuAdvokasi?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPerwakilan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  waktuPernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  whyLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tahap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutApplicationInput>,
  wakilId?: Maybe<PersonUpdateOneWithoutApplicationsInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutApplicationIdInput>,
};

export type ApplicationUpdateWithoutLogRequestInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  dudukPerara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  infoLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jumlahPenerimaManfaat?: Maybe<NullableIntFieldUpdateOperationsInput>,
  konfirmasiData?: Maybe<BoolFieldUpdateOperationsInput>,
  noReg?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahPpLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  regDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  relasiWakilClient?: Maybe<NullableStringFieldUpdateOperationsInput>,
  setujuAdvokasi?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPerwakilan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  waktuPernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  whyLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tahap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutApplicationInput>,
  wakilId?: Maybe<PersonUpdateOneWithoutApplicationsInput>,
  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>,
};

export type ApplicationUpdateWithoutWakilIdInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  dudukPerara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  infoLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jumlahPenerimaManfaat?: Maybe<NullableIntFieldUpdateOperationsInput>,
  konfirmasiData?: Maybe<BoolFieldUpdateOperationsInput>,
  noReg?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pernahPpLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppLain?: Maybe<NullableStringFieldUpdateOperationsInput>,
  regDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  relasiWakilClient?: Maybe<NullableStringFieldUpdateOperationsInput>,
  setujuAdvokasi?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPerwakilan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  waktuPernahKlien?: Maybe<NullableStringFieldUpdateOperationsInput>,
  whyLbh?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tahap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutApplicationInput>,
  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutApplicationIdInput>,
};

export type ApplicationUpdateWithWhereUniqueWithoutWakilIdInput = {
  where: ApplicationWhereUniqueInput,
  data: ApplicationUpdateWithoutWakilIdInput,
};

export type ApplicationUpsertWithoutCaseInput = {
  update: ApplicationUpdateWithoutCaseInput,
  create: ApplicationCreateWithoutCaseInput,
};

export type ApplicationUpsertWithoutClientsInput = {
  update: ApplicationUpdateWithoutClientsInput,
  create: ApplicationCreateWithoutClientsInput,
};

export type ApplicationUpsertWithoutLogRequestInput = {
  update: ApplicationUpdateWithoutLogRequestInput,
  create: ApplicationCreateWithoutLogRequestInput,
};

export type ApplicationUpsertWithWhereUniqueWithoutWakilIdInput = {
  where: ApplicationWhereUniqueInput,
  update: ApplicationUpdateWithoutWakilIdInput,
  create: ApplicationCreateWithoutWakilIdInput,
};

export type ApplicationWhereInput = {
  AND?: Maybe<Array<ApplicationWhereInput>>,
  OR?: Maybe<Array<ApplicationWhereInput>>,
  NOT?: Maybe<Array<ApplicationWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  dudukPerara?: Maybe<StringNullableFilter>,
  infoLbh?: Maybe<StringNullableFilter>,
  jumlahPenerimaManfaat?: Maybe<IntNullableFilter>,
  konfirmasiData?: Maybe<BoolFilter>,
  noReg?: Maybe<StringNullableFilter>,
  pernahKlien?: Maybe<StringNullableFilter>,
  pernahPpLain?: Maybe<StringNullableFilter>,
  ppLain?: Maybe<StringNullableFilter>,
  regDate?: Maybe<DateTimeNullableFilter>,
  relasiWakilClient?: Maybe<StringNullableFilter>,
  setujuAdvokasi?: Maybe<BoolFilter>,
  statusPerwakilan?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  waktuPernahKlien?: Maybe<StringNullableFilter>,
  whyLbh?: Maybe<StringNullableFilter>,
  tahap?: Maybe<StringNullableFilter>,
  status?: Maybe<StringNullableFilter>,
  wakil_Id?: Maybe<IntNullableFilter>,
  case_applicationTocase?: Maybe<IntNullableFilter>,
  case?: Maybe<RenamedcaseRelationFilter>,
  wakilId?: Maybe<PersonRelationFilter>,
  clients?: Maybe<ClientListRelationFilter>,
  LogRequest?: Maybe<LogRequestListRelationFilter>,
};

export type ApplicationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  case_applicationTocase?: Maybe<Scalars['Int']>,
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>,
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>,
  not?: Maybe<NestedBoolFilter>,
};

export type CaseClassification = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
  caseId?: Maybe<Renamedcase>,
};

export type CaseClassificationAvgAggregate = {
  id: Scalars['Float'],
  case_id?: Maybe<Scalars['Float']>,
};

export type CaseClassificationCountAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['Int']>,
  case_id?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseClassificationCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutClassificationsInput>,
};

export type CaseClassificationCreateNestedManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseClassificationCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseClassificationCreateOrConnectWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
};

export type CaseClassificationCreateOrConnectWithoutCaseIdInput = {
  where: CaseClassificationWhereUniqueInput,
  create: CaseClassificationCreateWithoutCaseIdInput,
};

export type CaseClassificationCreateWithoutCaseIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseClassificationListRelationFilter = {
  every?: Maybe<CaseClassificationWhereInput>,
  some?: Maybe<CaseClassificationWhereInput>,
  none?: Maybe<CaseClassificationWhereInput>,
};

export type CaseClassificationMaxAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseClassificationMinAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseClassificationOrderByInput = {
  id?: Maybe<SortOrder>,
  kodeMt?: Maybe<SortOrder>,
  case_id?: Maybe<SortOrder>,
};

export enum CaseClassificationScalarFieldEnum {
  Id = 'id',
  KodeMt = 'kodeMt',
  CaseId = 'case_id'
}

export type CaseClassificationScalarWhereInput = {
  AND?: Maybe<Array<CaseClassificationScalarWhereInput>>,
  OR?: Maybe<Array<CaseClassificationScalarWhereInput>>,
  NOT?: Maybe<Array<CaseClassificationScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
};

export type CaseClassificationSumAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseClassificationUpdateInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutClassificationsInput>,
};

export type CaseClassificationUpdateManyMutationInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseClassificationUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseClassificationCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseClassificationCreateOrConnectWithoutCaseIdInput>>,
  upsert?: Maybe<Array<CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
  set?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
  delete?: Maybe<Array<CaseClassificationWhereUniqueInput>>,
  update?: Maybe<Array<CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseClassificationUpdateManyWithWhereWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CaseClassificationScalarWhereInput>>,
};

export type CaseClassificationUpdateManyWithWhereWithoutCaseIdInput = {
  where: CaseClassificationScalarWhereInput,
  data: CaseClassificationUpdateManyMutationInput,
};

export type CaseClassificationUpdateWithoutCaseIdInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseClassificationWhereUniqueInput,
  data: CaseClassificationUpdateWithoutCaseIdInput,
};

export type CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseClassificationWhereUniqueInput,
  update: CaseClassificationUpdateWithoutCaseIdInput,
  create: CaseClassificationCreateWithoutCaseIdInput,
};

export type CaseClassificationWhereInput = {
  AND?: Maybe<Array<CaseClassificationWhereInput>>,
  OR?: Maybe<Array<CaseClassificationWhereInput>>,
  NOT?: Maybe<Array<CaseClassificationWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
  caseId?: Maybe<RenamedcaseRelationFilter>,
};

export type CaseClassificationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseConsultation = {
  id: Scalars['Int'],
  appKonsul?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
  caseId?: Maybe<Renamedcase>,
  apps: Array<CaseConsultationApp>,
};


export type CaseConsultationAppsArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationAppOrderByInput>>,
  cursor?: Maybe<CaseConsultationAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseConsultationAppScalarFieldEnum>>
};

export type CaseConsultationApp = {
  id: Scalars['Int'],
  app_consultation?: Maybe<Scalars['Int']>,
  case_consultation_id?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['String']>,
  appConsultation?: Maybe<User>,
  caseConsultationId?: Maybe<CaseConsultation>,
};

export type CaseConsultationAppAvgAggregate = {
  id: Scalars['Float'],
  app_consultation?: Maybe<Scalars['Float']>,
  case_consultation_id?: Maybe<Scalars['Float']>,
};

export type CaseConsultationAppCountAggregate = {
  id: Scalars['Int'],
  app_consultation?: Maybe<Scalars['Int']>,
  case_consultation_id?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseConsultationAppCreateInput = {
  keterangan?: Maybe<Scalars['String']>,
  appConsultation?: Maybe<UserCreateNestedOneWithoutCaseConsultationAppInput>,
  caseConsultationId?: Maybe<CaseConsultationCreateNestedOneWithoutAppsInput>,
};

export type CaseConsultationAppCreateNestedManyWithoutAppConsultationInput = {
  create?: Maybe<Array<CaseConsultationAppCreateWithoutAppConsultationInput>>,
  connectOrCreate?: Maybe<Array<CaseConsultationAppCreateOrConnectWithoutAppConsultationInput>>,
  connect?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
};

export type CaseConsultationAppCreateNestedManyWithoutCaseConsultationIdInput = {
  create?: Maybe<Array<CaseConsultationAppCreateWithoutCaseConsultationIdInput>>,
  connectOrCreate?: Maybe<Array<CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput>>,
  connect?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
};

export type CaseConsultationAppCreateOrConnectWithoutAppConsultationInput = {
  where: CaseConsultationAppWhereUniqueInput,
  create: CaseConsultationAppCreateWithoutAppConsultationInput,
};

export type CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput = {
  where: CaseConsultationAppWhereUniqueInput,
  create: CaseConsultationAppCreateWithoutCaseConsultationIdInput,
};

export type CaseConsultationAppCreateWithoutAppConsultationInput = {
  keterangan?: Maybe<Scalars['String']>,
  caseConsultationId?: Maybe<CaseConsultationCreateNestedOneWithoutAppsInput>,
};

export type CaseConsultationAppCreateWithoutCaseConsultationIdInput = {
  keterangan?: Maybe<Scalars['String']>,
  appConsultation?: Maybe<UserCreateNestedOneWithoutCaseConsultationAppInput>,
};

export type CaseConsultationAppListRelationFilter = {
  every?: Maybe<CaseConsultationAppWhereInput>,
  some?: Maybe<CaseConsultationAppWhereInput>,
  none?: Maybe<CaseConsultationAppWhereInput>,
};

export type CaseConsultationAppMaxAggregate = {
  id: Scalars['Int'],
  app_consultation?: Maybe<Scalars['Int']>,
  case_consultation_id?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['String']>,
};

export type CaseConsultationAppMinAggregate = {
  id: Scalars['Int'],
  app_consultation?: Maybe<Scalars['Int']>,
  case_consultation_id?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['String']>,
};

export type CaseConsultationAppOrderByInput = {
  id?: Maybe<SortOrder>,
  app_consultation?: Maybe<SortOrder>,
  case_consultation_id?: Maybe<SortOrder>,
  keterangan?: Maybe<SortOrder>,
};

export enum CaseConsultationAppScalarFieldEnum {
  Id = 'id',
  AppConsultation = 'app_consultation',
  CaseConsultationId = 'case_consultation_id',
  Keterangan = 'keterangan'
}

export type CaseConsultationAppScalarWhereInput = {
  AND?: Maybe<Array<CaseConsultationAppScalarWhereInput>>,
  OR?: Maybe<Array<CaseConsultationAppScalarWhereInput>>,
  NOT?: Maybe<Array<CaseConsultationAppScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  app_consultation?: Maybe<IntNullableFilter>,
  case_consultation_id?: Maybe<IntNullableFilter>,
  keterangan?: Maybe<StringNullableFilter>,
};

export type CaseConsultationAppSumAggregate = {
  id: Scalars['Int'],
  app_consultation?: Maybe<Scalars['Int']>,
  case_consultation_id?: Maybe<Scalars['Int']>,
};

export type CaseConsultationAppUpdateInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  appConsultation?: Maybe<UserUpdateOneWithoutCaseConsultationAppInput>,
  caseConsultationId?: Maybe<CaseConsultationUpdateOneWithoutAppsInput>,
};

export type CaseConsultationAppUpdateManyMutationInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseConsultationAppUpdateManyWithoutAppConsultationInput = {
  create?: Maybe<Array<CaseConsultationAppCreateWithoutAppConsultationInput>>,
  connectOrCreate?: Maybe<Array<CaseConsultationAppCreateOrConnectWithoutAppConsultationInput>>,
  upsert?: Maybe<Array<CaseConsultationAppUpsertWithWhereUniqueWithoutAppConsultationInput>>,
  connect?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  set?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  delete?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  update?: Maybe<Array<CaseConsultationAppUpdateWithWhereUniqueWithoutAppConsultationInput>>,
  updateMany?: Maybe<Array<CaseConsultationAppUpdateManyWithWhereWithoutAppConsultationInput>>,
  deleteMany?: Maybe<Array<CaseConsultationAppScalarWhereInput>>,
};

export type CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput = {
  create?: Maybe<Array<CaseConsultationAppCreateWithoutCaseConsultationIdInput>>,
  connectOrCreate?: Maybe<Array<CaseConsultationAppCreateOrConnectWithoutCaseConsultationIdInput>>,
  upsert?: Maybe<Array<CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput>>,
  connect?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  set?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  delete?: Maybe<Array<CaseConsultationAppWhereUniqueInput>>,
  update?: Maybe<Array<CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput>>,
  updateMany?: Maybe<Array<CaseConsultationAppUpdateManyWithWhereWithoutCaseConsultationIdInput>>,
  deleteMany?: Maybe<Array<CaseConsultationAppScalarWhereInput>>,
};

export type CaseConsultationAppUpdateManyWithWhereWithoutAppConsultationInput = {
  where: CaseConsultationAppScalarWhereInput,
  data: CaseConsultationAppUpdateManyMutationInput,
};

export type CaseConsultationAppUpdateManyWithWhereWithoutCaseConsultationIdInput = {
  where: CaseConsultationAppScalarWhereInput,
  data: CaseConsultationAppUpdateManyMutationInput,
};

export type CaseConsultationAppUpdateWithoutAppConsultationInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseConsultationId?: Maybe<CaseConsultationUpdateOneWithoutAppsInput>,
};

export type CaseConsultationAppUpdateWithoutCaseConsultationIdInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  appConsultation?: Maybe<UserUpdateOneWithoutCaseConsultationAppInput>,
};

export type CaseConsultationAppUpdateWithWhereUniqueWithoutAppConsultationInput = {
  where: CaseConsultationAppWhereUniqueInput,
  data: CaseConsultationAppUpdateWithoutAppConsultationInput,
};

export type CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput = {
  where: CaseConsultationAppWhereUniqueInput,
  data: CaseConsultationAppUpdateWithoutCaseConsultationIdInput,
};

export type CaseConsultationAppUpsertWithWhereUniqueWithoutAppConsultationInput = {
  where: CaseConsultationAppWhereUniqueInput,
  update: CaseConsultationAppUpdateWithoutAppConsultationInput,
  create: CaseConsultationAppCreateWithoutAppConsultationInput,
};

export type CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput = {
  where: CaseConsultationAppWhereUniqueInput,
  update: CaseConsultationAppUpdateWithoutCaseConsultationIdInput,
  create: CaseConsultationAppCreateWithoutCaseConsultationIdInput,
};

export type CaseConsultationAppWhereInput = {
  AND?: Maybe<Array<CaseConsultationAppWhereInput>>,
  OR?: Maybe<Array<CaseConsultationAppWhereInput>>,
  NOT?: Maybe<Array<CaseConsultationAppWhereInput>>,
  id?: Maybe<IntFilter>,
  app_consultation?: Maybe<IntNullableFilter>,
  case_consultation_id?: Maybe<IntNullableFilter>,
  keterangan?: Maybe<StringNullableFilter>,
  appConsultation?: Maybe<UserRelationFilter>,
  caseConsultationId?: Maybe<CaseConsultationRelationFilter>,
};

export type CaseConsultationAppWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseConsultationAvgAggregate = {
  id: Scalars['Float'],
  case_id?: Maybe<Scalars['Float']>,
};

export type CaseConsultationCountAggregate = {
  id: Scalars['Int'],
  appKonsul?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  isiKonsul?: Maybe<Scalars['Int']>,
  harapan?: Maybe<Scalars['Int']>,
  saranHukum?: Maybe<Scalars['Int']>,
  rencanaTindakLanjut?: Maybe<Scalars['Int']>,
  judulAktifitas?: Maybe<Scalars['Int']>,
  ppKonsul?: Maybe<Scalars['Int']>,
  tglKonsul?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  case_id?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseConsultationCreateInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutConsultationsInput>,
  apps?: Maybe<CaseConsultationAppCreateNestedManyWithoutCaseConsultationIdInput>,
};

export type CaseConsultationCreateNestedManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseConsultationCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseConsultationCreateOrConnectWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
};

export type CaseConsultationCreateNestedOneWithoutAppsInput = {
  create?: Maybe<CaseConsultationCreateWithoutAppsInput>,
  connectOrCreate?: Maybe<CaseConsultationCreateOrConnectWithoutAppsInput>,
  connect?: Maybe<CaseConsultationWhereUniqueInput>,
};

export type CaseConsultationCreateOrConnectWithoutAppsInput = {
  where: CaseConsultationWhereUniqueInput,
  create: CaseConsultationCreateWithoutAppsInput,
};

export type CaseConsultationCreateOrConnectWithoutCaseIdInput = {
  where: CaseConsultationWhereUniqueInput,
  create: CaseConsultationCreateWithoutCaseIdInput,
};

export type CaseConsultationCreateWithoutAppsInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutConsultationsInput>,
};

export type CaseConsultationCreateWithoutCaseIdInput = {
  appKonsul?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  apps?: Maybe<CaseConsultationAppCreateNestedManyWithoutCaseConsultationIdInput>,
};

export type CaseConsultationListRelationFilter = {
  every?: Maybe<CaseConsultationWhereInput>,
  some?: Maybe<CaseConsultationWhereInput>,
  none?: Maybe<CaseConsultationWhereInput>,
};

export type CaseConsultationMaxAggregate = {
  id: Scalars['Int'],
  appKonsul?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseConsultationMinAggregate = {
  id: Scalars['Int'],
  appKonsul?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  isiKonsul?: Maybe<Scalars['String']>,
  harapan?: Maybe<Scalars['String']>,
  saranHukum?: Maybe<Scalars['String']>,
  rencanaTindakLanjut?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  ppKonsul?: Maybe<Scalars['String']>,
  tglKonsul?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseConsultationOrderByInput = {
  id?: Maybe<SortOrder>,
  appKonsul?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  isiKonsul?: Maybe<SortOrder>,
  harapan?: Maybe<SortOrder>,
  saranHukum?: Maybe<SortOrder>,
  rencanaTindakLanjut?: Maybe<SortOrder>,
  judulAktifitas?: Maybe<SortOrder>,
  ppKonsul?: Maybe<SortOrder>,
  tglKonsul?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  case_id?: Maybe<SortOrder>,
};

export type CaseConsultationRelationFilter = {
  is?: Maybe<CaseConsultationWhereInput>,
  isNot?: Maybe<CaseConsultationWhereInput>,
};

export enum CaseConsultationScalarFieldEnum {
  Id = 'id',
  AppKonsul = 'appKonsul',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  IsiKonsul = 'isiKonsul',
  Harapan = 'harapan',
  SaranHukum = 'saranHukum',
  RencanaTindakLanjut = 'rencanaTindakLanjut',
  JudulAktifitas = 'judulAktifitas',
  PpKonsul = 'ppKonsul',
  TglKonsul = 'tglKonsul',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  CaseId = 'case_id'
}

export type CaseConsultationScalarWhereInput = {
  AND?: Maybe<Array<CaseConsultationScalarWhereInput>>,
  OR?: Maybe<Array<CaseConsultationScalarWhereInput>>,
  NOT?: Maybe<Array<CaseConsultationScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  appKonsul?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  isiKonsul?: Maybe<StringNullableFilter>,
  harapan?: Maybe<StringNullableFilter>,
  saranHukum?: Maybe<StringNullableFilter>,
  rencanaTindakLanjut?: Maybe<StringNullableFilter>,
  judulAktifitas?: Maybe<StringNullableFilter>,
  ppKonsul?: Maybe<StringNullableFilter>,
  tglKonsul?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
};

export type CaseConsultationSumAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseConsultationUpdateInput = {
  appKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  isiKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  harapan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  saranHukum?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rencanaTindakLanjut?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulAktifitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglKonsul?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutConsultationsInput>,
  apps?: Maybe<CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput>,
};

export type CaseConsultationUpdateManyMutationInput = {
  appKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  isiKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  harapan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  saranHukum?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rencanaTindakLanjut?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulAktifitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglKonsul?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseConsultationUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseConsultationCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseConsultationCreateOrConnectWithoutCaseIdInput>>,
  upsert?: Maybe<Array<CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
  set?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
  delete?: Maybe<Array<CaseConsultationWhereUniqueInput>>,
  update?: Maybe<Array<CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseConsultationUpdateManyWithWhereWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CaseConsultationScalarWhereInput>>,
};

export type CaseConsultationUpdateManyWithWhereWithoutCaseIdInput = {
  where: CaseConsultationScalarWhereInput,
  data: CaseConsultationUpdateManyMutationInput,
};

export type CaseConsultationUpdateOneWithoutAppsInput = {
  create?: Maybe<CaseConsultationCreateWithoutAppsInput>,
  connectOrCreate?: Maybe<CaseConsultationCreateOrConnectWithoutAppsInput>,
  upsert?: Maybe<CaseConsultationUpsertWithoutAppsInput>,
  connect?: Maybe<CaseConsultationWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseConsultationUpdateWithoutAppsInput>,
};

export type CaseConsultationUpdateWithoutAppsInput = {
  appKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  isiKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  harapan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  saranHukum?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rencanaTindakLanjut?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulAktifitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglKonsul?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutConsultationsInput>,
};

export type CaseConsultationUpdateWithoutCaseIdInput = {
  appKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  isiKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  harapan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  saranHukum?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rencanaTindakLanjut?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulAktifitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppKonsul?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglKonsul?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  apps?: Maybe<CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput>,
};

export type CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseConsultationWhereUniqueInput,
  data: CaseConsultationUpdateWithoutCaseIdInput,
};

export type CaseConsultationUpsertWithoutAppsInput = {
  update: CaseConsultationUpdateWithoutAppsInput,
  create: CaseConsultationCreateWithoutAppsInput,
};

export type CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseConsultationWhereUniqueInput,
  update: CaseConsultationUpdateWithoutCaseIdInput,
  create: CaseConsultationCreateWithoutCaseIdInput,
};

export type CaseConsultationWhereInput = {
  AND?: Maybe<Array<CaseConsultationWhereInput>>,
  OR?: Maybe<Array<CaseConsultationWhereInput>>,
  NOT?: Maybe<Array<CaseConsultationWhereInput>>,
  id?: Maybe<IntFilter>,
  appKonsul?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  isiKonsul?: Maybe<StringNullableFilter>,
  harapan?: Maybe<StringNullableFilter>,
  saranHukum?: Maybe<StringNullableFilter>,
  rencanaTindakLanjut?: Maybe<StringNullableFilter>,
  judulAktifitas?: Maybe<StringNullableFilter>,
  ppKonsul?: Maybe<StringNullableFilter>,
  tglKonsul?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
  caseId?: Maybe<RenamedcaseRelationFilter>,
  apps?: Maybe<CaseConsultationAppListRelationFilter>,
};

export type CaseConsultationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseDocument = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  filename?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<Scalars['Int']>,
  case?: Maybe<Renamedcase>,
};

export type CaseDocumentAvgAggregate = {
  id: Scalars['Float'],
  caseId?: Maybe<Scalars['Float']>,
};

export type CaseDocumentCountAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  jenisDokumen?: Maybe<Scalars['Int']>,
  judulDokumen?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['Int']>,
  link?: Maybe<Scalars['Int']>,
  filename?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  caseId?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseDocumentCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  filename?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutDocumentsInput>,
};

export type CaseDocumentCreateNestedManyWithoutCaseInput = {
  create?: Maybe<Array<CaseDocumentCreateWithoutCaseInput>>,
  connectOrCreate?: Maybe<Array<CaseDocumentCreateOrConnectWithoutCaseInput>>,
  connect?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
};

export type CaseDocumentCreateOrConnectWithoutCaseInput = {
  where: CaseDocumentWhereUniqueInput,
  create: CaseDocumentCreateWithoutCaseInput,
};

export type CaseDocumentCreateWithoutCaseInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  filename?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseDocumentListRelationFilter = {
  every?: Maybe<CaseDocumentWhereInput>,
  some?: Maybe<CaseDocumentWhereInput>,
  none?: Maybe<CaseDocumentWhereInput>,
};

export type CaseDocumentMaxAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  filename?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<Scalars['Int']>,
};

export type CaseDocumentMinAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisDokumen?: Maybe<Scalars['String']>,
  judulDokumen?: Maybe<Scalars['String']>,
  keterangan?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  filename?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<Scalars['Int']>,
};

export type CaseDocumentOrderByInput = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  jenisDokumen?: Maybe<SortOrder>,
  judulDokumen?: Maybe<SortOrder>,
  keterangan?: Maybe<SortOrder>,
  link?: Maybe<SortOrder>,
  filename?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  caseId?: Maybe<SortOrder>,
};

export enum CaseDocumentScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  JenisDokumen = 'jenisDokumen',
  JudulDokumen = 'judulDokumen',
  Keterangan = 'keterangan',
  Link = 'link',
  Filename = 'filename',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  CaseId = 'caseId'
}

export type CaseDocumentScalarWhereInput = {
  AND?: Maybe<Array<CaseDocumentScalarWhereInput>>,
  OR?: Maybe<Array<CaseDocumentScalarWhereInput>>,
  NOT?: Maybe<Array<CaseDocumentScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  jenisDokumen?: Maybe<StringNullableFilter>,
  judulDokumen?: Maybe<StringNullableFilter>,
  keterangan?: Maybe<StringNullableFilter>,
  link?: Maybe<StringNullableFilter>,
  filename?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  caseId?: Maybe<IntNullableFilter>,
};

export type CaseDocumentSumAggregate = {
  id: Scalars['Int'],
  caseId?: Maybe<Scalars['Int']>,
};

export type CaseDocumentUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDokumen?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulDokumen?: Maybe<NullableStringFieldUpdateOperationsInput>,
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  link?: Maybe<NullableStringFieldUpdateOperationsInput>,
  filename?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutDocumentsInput>,
};

export type CaseDocumentUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDokumen?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulDokumen?: Maybe<NullableStringFieldUpdateOperationsInput>,
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  link?: Maybe<NullableStringFieldUpdateOperationsInput>,
  filename?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseDocumentUpdateManyWithoutCaseInput = {
  create?: Maybe<Array<CaseDocumentCreateWithoutCaseInput>>,
  connectOrCreate?: Maybe<Array<CaseDocumentCreateOrConnectWithoutCaseInput>>,
  upsert?: Maybe<Array<CaseDocumentUpsertWithWhereUniqueWithoutCaseInput>>,
  connect?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
  set?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
  delete?: Maybe<Array<CaseDocumentWhereUniqueInput>>,
  update?: Maybe<Array<CaseDocumentUpdateWithWhereUniqueWithoutCaseInput>>,
  updateMany?: Maybe<Array<CaseDocumentUpdateManyWithWhereWithoutCaseInput>>,
  deleteMany?: Maybe<Array<CaseDocumentScalarWhereInput>>,
};

export type CaseDocumentUpdateManyWithWhereWithoutCaseInput = {
  where: CaseDocumentScalarWhereInput,
  data: CaseDocumentUpdateManyMutationInput,
};

export type CaseDocumentUpdateWithoutCaseInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDokumen?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulDokumen?: Maybe<NullableStringFieldUpdateOperationsInput>,
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  link?: Maybe<NullableStringFieldUpdateOperationsInput>,
  filename?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseDocumentUpdateWithWhereUniqueWithoutCaseInput = {
  where: CaseDocumentWhereUniqueInput,
  data: CaseDocumentUpdateWithoutCaseInput,
};

export type CaseDocumentUpsertWithWhereUniqueWithoutCaseInput = {
  where: CaseDocumentWhereUniqueInput,
  update: CaseDocumentUpdateWithoutCaseInput,
  create: CaseDocumentCreateWithoutCaseInput,
};

export type CaseDocumentWhereInput = {
  AND?: Maybe<Array<CaseDocumentWhereInput>>,
  OR?: Maybe<Array<CaseDocumentWhereInput>>,
  NOT?: Maybe<Array<CaseDocumentWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  jenisDokumen?: Maybe<StringNullableFilter>,
  judulDokumen?: Maybe<StringNullableFilter>,
  keterangan?: Maybe<StringNullableFilter>,
  link?: Maybe<StringNullableFilter>,
  filename?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  caseId?: Maybe<IntNullableFilter>,
  case?: Maybe<RenamedcaseRelationFilter>,
};

export type CaseDocumentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseIssue = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
  caseId?: Maybe<Renamedcase>,
};

export type CaseIssueAvgAggregate = {
  id: Scalars['Float'],
  case_id?: Maybe<Scalars['Float']>,
};

export type CaseIssueCountAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['Int']>,
  case_id?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseIssueCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutIssuesInput>,
};

export type CaseIssueCreateNestedManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseIssueCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseIssueCreateOrConnectWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseIssueWhereUniqueInput>>,
};

export type CaseIssueCreateOrConnectWithoutCaseIdInput = {
  where: CaseIssueWhereUniqueInput,
  create: CaseIssueCreateWithoutCaseIdInput,
};

export type CaseIssueCreateWithoutCaseIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseIssueListRelationFilter = {
  every?: Maybe<CaseIssueWhereInput>,
  some?: Maybe<CaseIssueWhereInput>,
  none?: Maybe<CaseIssueWhereInput>,
};

export type CaseIssueMaxAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseIssueMinAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseIssueOrderByInput = {
  id?: Maybe<SortOrder>,
  kodeMt?: Maybe<SortOrder>,
  case_id?: Maybe<SortOrder>,
};

export enum CaseIssueScalarFieldEnum {
  Id = 'id',
  KodeMt = 'kodeMt',
  CaseId = 'case_id'
}

export type CaseIssueScalarWhereInput = {
  AND?: Maybe<Array<CaseIssueScalarWhereInput>>,
  OR?: Maybe<Array<CaseIssueScalarWhereInput>>,
  NOT?: Maybe<Array<CaseIssueScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
};

export type CaseIssueSumAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseIssueUpdateInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutIssuesInput>,
};

export type CaseIssueUpdateManyMutationInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseIssueUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseIssueCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseIssueCreateOrConnectWithoutCaseIdInput>>,
  upsert?: Maybe<Array<CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseIssueWhereUniqueInput>>,
  set?: Maybe<Array<CaseIssueWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseIssueWhereUniqueInput>>,
  delete?: Maybe<Array<CaseIssueWhereUniqueInput>>,
  update?: Maybe<Array<CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseIssueUpdateManyWithWhereWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CaseIssueScalarWhereInput>>,
};

export type CaseIssueUpdateManyWithWhereWithoutCaseIdInput = {
  where: CaseIssueScalarWhereInput,
  data: CaseIssueUpdateManyMutationInput,
};

export type CaseIssueUpdateWithoutCaseIdInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseIssueWhereUniqueInput,
  data: CaseIssueUpdateWithoutCaseIdInput,
};

export type CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseIssueWhereUniqueInput,
  update: CaseIssueUpdateWithoutCaseIdInput,
  create: CaseIssueCreateWithoutCaseIdInput,
};

export type CaseIssueWhereInput = {
  AND?: Maybe<Array<CaseIssueWhereInput>>,
  OR?: Maybe<Array<CaseIssueWhereInput>>,
  NOT?: Maybe<Array<CaseIssueWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
  caseId?: Maybe<RenamedcaseRelationFilter>,
};

export type CaseIssueWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseKorban = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['String']>,
  caseId?: Maybe<Renamedcase>,
  personId?: Maybe<Person>,
};

export type CaseKorbanAvgAggregate = {
  id: Scalars['Float'],
  case_id?: Maybe<Scalars['Float']>,
  person_id?: Maybe<Scalars['Float']>,
};

export type CaseKorbanCountAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseKorbanCreateInput = {
  keterangan?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutKorbansInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutCaseKorbanInput>,
};

export type CaseKorbanCreateNestedManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseKorbanCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseKorbanCreateOrConnectWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
};

export type CaseKorbanCreateNestedManyWithoutPersonIdInput = {
  create?: Maybe<Array<CaseKorbanCreateWithoutPersonIdInput>>,
  connectOrCreate?: Maybe<Array<CaseKorbanCreateOrConnectWithoutPersonIdInput>>,
  connect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
};

export type CaseKorbanCreateOrConnectWithoutCaseIdInput = {
  where: CaseKorbanWhereUniqueInput,
  create: CaseKorbanCreateWithoutCaseIdInput,
};

export type CaseKorbanCreateOrConnectWithoutPersonIdInput = {
  where: CaseKorbanWhereUniqueInput,
  create: CaseKorbanCreateWithoutPersonIdInput,
};

export type CaseKorbanCreateWithoutCaseIdInput = {
  keterangan?: Maybe<Scalars['String']>,
  personId?: Maybe<PersonCreateNestedOneWithoutCaseKorbanInput>,
};

export type CaseKorbanCreateWithoutPersonIdInput = {
  keterangan?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutKorbansInput>,
};

export type CaseKorbanListRelationFilter = {
  every?: Maybe<CaseKorbanWhereInput>,
  some?: Maybe<CaseKorbanWhereInput>,
  none?: Maybe<CaseKorbanWhereInput>,
};

export type CaseKorbanMaxAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['String']>,
};

export type CaseKorbanMinAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['String']>,
};

export type CaseKorbanOrderByInput = {
  id?: Maybe<SortOrder>,
  case_id?: Maybe<SortOrder>,
  person_id?: Maybe<SortOrder>,
  keterangan?: Maybe<SortOrder>,
};

export enum CaseKorbanScalarFieldEnum {
  Id = 'id',
  CaseId = 'case_id',
  PersonId = 'person_id',
  Keterangan = 'keterangan'
}

export type CaseKorbanScalarWhereInput = {
  AND?: Maybe<Array<CaseKorbanScalarWhereInput>>,
  OR?: Maybe<Array<CaseKorbanScalarWhereInput>>,
  NOT?: Maybe<Array<CaseKorbanScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  case_id?: Maybe<IntNullableFilter>,
  person_id?: Maybe<IntNullableFilter>,
  keterangan?: Maybe<StringNullableFilter>,
};

export type CaseKorbanSumAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
};

export type CaseKorbanUpdateInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutKorbansInput>,
  personId?: Maybe<PersonUpdateOneWithoutCaseKorbanInput>,
};

export type CaseKorbanUpdateManyMutationInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseKorbanUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseKorbanCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseKorbanCreateOrConnectWithoutCaseIdInput>>,
  upsert?: Maybe<Array<CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  set?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  delete?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  update?: Maybe<Array<CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseKorbanUpdateManyWithWhereWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CaseKorbanScalarWhereInput>>,
};

export type CaseKorbanUpdateManyWithoutPersonIdInput = {
  create?: Maybe<Array<CaseKorbanCreateWithoutPersonIdInput>>,
  connectOrCreate?: Maybe<Array<CaseKorbanCreateOrConnectWithoutPersonIdInput>>,
  upsert?: Maybe<Array<CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput>>,
  connect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  set?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  delete?: Maybe<Array<CaseKorbanWhereUniqueInput>>,
  update?: Maybe<Array<CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput>>,
  updateMany?: Maybe<Array<CaseKorbanUpdateManyWithWhereWithoutPersonIdInput>>,
  deleteMany?: Maybe<Array<CaseKorbanScalarWhereInput>>,
};

export type CaseKorbanUpdateManyWithWhereWithoutCaseIdInput = {
  where: CaseKorbanScalarWhereInput,
  data: CaseKorbanUpdateManyMutationInput,
};

export type CaseKorbanUpdateManyWithWhereWithoutPersonIdInput = {
  where: CaseKorbanScalarWhereInput,
  data: CaseKorbanUpdateManyMutationInput,
};

export type CaseKorbanUpdateWithoutCaseIdInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  personId?: Maybe<PersonUpdateOneWithoutCaseKorbanInput>,
};

export type CaseKorbanUpdateWithoutPersonIdInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutKorbansInput>,
};

export type CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseKorbanWhereUniqueInput,
  data: CaseKorbanUpdateWithoutCaseIdInput,
};

export type CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: CaseKorbanWhereUniqueInput,
  data: CaseKorbanUpdateWithoutPersonIdInput,
};

export type CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseKorbanWhereUniqueInput,
  update: CaseKorbanUpdateWithoutCaseIdInput,
  create: CaseKorbanCreateWithoutCaseIdInput,
};

export type CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: CaseKorbanWhereUniqueInput,
  update: CaseKorbanUpdateWithoutPersonIdInput,
  create: CaseKorbanCreateWithoutPersonIdInput,
};

export type CaseKorbanWhereInput = {
  AND?: Maybe<Array<CaseKorbanWhereInput>>,
  OR?: Maybe<Array<CaseKorbanWhereInput>>,
  NOT?: Maybe<Array<CaseKorbanWhereInput>>,
  id?: Maybe<IntFilter>,
  case_id?: Maybe<IntNullableFilter>,
  person_id?: Maybe<IntNullableFilter>,
  keterangan?: Maybe<StringNullableFilter>,
  caseId?: Maybe<RenamedcaseRelationFilter>,
  personId?: Maybe<PersonRelationFilter>,
};

export type CaseKorbanWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CasePelaku = {
  id: Scalars['Int'],
  jenisPelaku?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
  caseId?: Maybe<Renamedcase>,
  personId?: Maybe<Person>,
};

export type CasePelakuAvgAggregate = {
  id: Scalars['Float'],
  case_id?: Maybe<Scalars['Float']>,
  person_id?: Maybe<Scalars['Float']>,
};

export type CasePelakuCountAggregate = {
  id: Scalars['Int'],
  jenisPelaku?: Maybe<Scalars['Int']>,
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CasePelakuCreateInput = {
  jenisPelaku?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutPelakusInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutCasePelakuInput>,
};

export type CasePelakuCreateNestedManyWithoutCaseIdInput = {
  create?: Maybe<Array<CasePelakuCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CasePelakuCreateOrConnectWithoutCaseIdInput>>,
  connect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
};

export type CasePelakuCreateNestedManyWithoutPersonIdInput = {
  create?: Maybe<Array<CasePelakuCreateWithoutPersonIdInput>>,
  connectOrCreate?: Maybe<Array<CasePelakuCreateOrConnectWithoutPersonIdInput>>,
  connect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
};

export type CasePelakuCreateOrConnectWithoutCaseIdInput = {
  where: CasePelakuWhereUniqueInput,
  create: CasePelakuCreateWithoutCaseIdInput,
};

export type CasePelakuCreateOrConnectWithoutPersonIdInput = {
  where: CasePelakuWhereUniqueInput,
  create: CasePelakuCreateWithoutPersonIdInput,
};

export type CasePelakuCreateWithoutCaseIdInput = {
  jenisPelaku?: Maybe<Scalars['String']>,
  personId?: Maybe<PersonCreateNestedOneWithoutCasePelakuInput>,
};

export type CasePelakuCreateWithoutPersonIdInput = {
  jenisPelaku?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutPelakusInput>,
};

export type CasePelakuListRelationFilter = {
  every?: Maybe<CasePelakuWhereInput>,
  some?: Maybe<CasePelakuWhereInput>,
  none?: Maybe<CasePelakuWhereInput>,
};

export type CasePelakuMaxAggregate = {
  id: Scalars['Int'],
  jenisPelaku?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
};

export type CasePelakuMinAggregate = {
  id: Scalars['Int'],
  jenisPelaku?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
};

export type CasePelakuOrderByInput = {
  id?: Maybe<SortOrder>,
  jenisPelaku?: Maybe<SortOrder>,
  case_id?: Maybe<SortOrder>,
  person_id?: Maybe<SortOrder>,
};

export enum CasePelakuScalarFieldEnum {
  Id = 'id',
  JenisPelaku = 'jenisPelaku',
  CaseId = 'case_id',
  PersonId = 'person_id'
}

export type CasePelakuScalarWhereInput = {
  AND?: Maybe<Array<CasePelakuScalarWhereInput>>,
  OR?: Maybe<Array<CasePelakuScalarWhereInput>>,
  NOT?: Maybe<Array<CasePelakuScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  jenisPelaku?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
  person_id?: Maybe<IntNullableFilter>,
};

export type CasePelakuSumAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
  person_id?: Maybe<Scalars['Int']>,
};

export type CasePelakuUpdateInput = {
  jenisPelaku?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutPelakusInput>,
  personId?: Maybe<PersonUpdateOneWithoutCasePelakuInput>,
};

export type CasePelakuUpdateManyMutationInput = {
  jenisPelaku?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CasePelakuUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CasePelakuCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CasePelakuCreateOrConnectWithoutCaseIdInput>>,
  upsert?: Maybe<Array<CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput>>,
  connect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  set?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  disconnect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  delete?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  update?: Maybe<Array<CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CasePelakuUpdateManyWithWhereWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CasePelakuScalarWhereInput>>,
};

export type CasePelakuUpdateManyWithoutPersonIdInput = {
  create?: Maybe<Array<CasePelakuCreateWithoutPersonIdInput>>,
  connectOrCreate?: Maybe<Array<CasePelakuCreateOrConnectWithoutPersonIdInput>>,
  upsert?: Maybe<Array<CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput>>,
  connect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  set?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  disconnect?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  delete?: Maybe<Array<CasePelakuWhereUniqueInput>>,
  update?: Maybe<Array<CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput>>,
  updateMany?: Maybe<Array<CasePelakuUpdateManyWithWhereWithoutPersonIdInput>>,
  deleteMany?: Maybe<Array<CasePelakuScalarWhereInput>>,
};

export type CasePelakuUpdateManyWithWhereWithoutCaseIdInput = {
  where: CasePelakuScalarWhereInput,
  data: CasePelakuUpdateManyMutationInput,
};

export type CasePelakuUpdateManyWithWhereWithoutPersonIdInput = {
  where: CasePelakuScalarWhereInput,
  data: CasePelakuUpdateManyMutationInput,
};

export type CasePelakuUpdateWithoutCaseIdInput = {
  jenisPelaku?: Maybe<NullableStringFieldUpdateOperationsInput>,
  personId?: Maybe<PersonUpdateOneWithoutCasePelakuInput>,
};

export type CasePelakuUpdateWithoutPersonIdInput = {
  jenisPelaku?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutPelakusInput>,
};

export type CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CasePelakuWhereUniqueInput,
  data: CasePelakuUpdateWithoutCaseIdInput,
};

export type CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: CasePelakuWhereUniqueInput,
  data: CasePelakuUpdateWithoutPersonIdInput,
};

export type CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CasePelakuWhereUniqueInput,
  update: CasePelakuUpdateWithoutCaseIdInput,
  create: CasePelakuCreateWithoutCaseIdInput,
};

export type CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: CasePelakuWhereUniqueInput,
  update: CasePelakuUpdateWithoutPersonIdInput,
  create: CasePelakuCreateWithoutPersonIdInput,
};

export type CasePelakuWhereInput = {
  AND?: Maybe<Array<CasePelakuWhereInput>>,
  OR?: Maybe<Array<CasePelakuWhereInput>>,
  NOT?: Maybe<Array<CasePelakuWhereInput>>,
  id?: Maybe<IntFilter>,
  jenisPelaku?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
  person_id?: Maybe<IntNullableFilter>,
  caseId?: Maybe<RenamedcaseRelationFilter>,
  personId?: Maybe<PersonRelationFilter>,
};

export type CasePelakuWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CasePk = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pp_pendamping?: Maybe<Scalars['Int']>,
  ppPendamping?: Maybe<User>,
  case?: Maybe<Renamedcase>,
};

export type CasePkAvgAggregate = {
  id: Scalars['Float'],
  pp_pendamping?: Maybe<Scalars['Float']>,
};

export type CasePkCountAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  didampingi?: Maybe<Scalars['Int']>,
  legalMemo?: Maybe<Scalars['Int']>,
  notulaRapat?: Maybe<Scalars['Int']>,
  targetAkhirAdvokasi?: Maybe<Scalars['Int']>,
  strategiAdvokasi?: Maybe<Scalars['Int']>,
  statusAlasanTdk?: Maybe<Scalars['Int']>,
  tglRapat?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  pp_pendamping?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CasePkCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  ppPendamping?: Maybe<UserCreateNestedOneWithoutCasePkInput>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutPkInput>,
};

export type CasePkCreateNestedManyWithoutPpPendampingInput = {
  create?: Maybe<Array<CasePkCreateWithoutPpPendampingInput>>,
  connectOrCreate?: Maybe<Array<CasePkCreateOrConnectWithoutPpPendampingInput>>,
  connect?: Maybe<Array<CasePkWhereUniqueInput>>,
};

export type CasePkCreateNestedOneWithoutCaseInput = {
  create?: Maybe<CasePkCreateWithoutCaseInput>,
  connectOrCreate?: Maybe<CasePkCreateOrConnectWithoutCaseInput>,
  connect?: Maybe<CasePkWhereUniqueInput>,
};

export type CasePkCreateOrConnectWithoutCaseInput = {
  where: CasePkWhereUniqueInput,
  create: CasePkCreateWithoutCaseInput,
};

export type CasePkCreateOrConnectWithoutPpPendampingInput = {
  where: CasePkWhereUniqueInput,
  create: CasePkCreateWithoutPpPendampingInput,
};

export type CasePkCreateWithoutCaseInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  ppPendamping?: Maybe<UserCreateNestedOneWithoutCasePkInput>,
};

export type CasePkCreateWithoutPpPendampingInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutPkInput>,
};

export type CasePkListRelationFilter = {
  every?: Maybe<CasePkWhereInput>,
  some?: Maybe<CasePkWhereInput>,
  none?: Maybe<CasePkWhereInput>,
};

export type CasePkMaxAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  pp_pendamping?: Maybe<Scalars['Int']>,
};

export type CasePkMinAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  didampingi?: Maybe<Scalars['String']>,
  legalMemo?: Maybe<Scalars['String']>,
  notulaRapat?: Maybe<Scalars['String']>,
  targetAkhirAdvokasi?: Maybe<Scalars['String']>,
  strategiAdvokasi?: Maybe<Scalars['String']>,
  statusAlasanTdk?: Maybe<Scalars['String']>,
  tglRapat?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  pp_pendamping?: Maybe<Scalars['Int']>,
};

export type CasePkOrderByInput = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  didampingi?: Maybe<SortOrder>,
  legalMemo?: Maybe<SortOrder>,
  notulaRapat?: Maybe<SortOrder>,
  targetAkhirAdvokasi?: Maybe<SortOrder>,
  strategiAdvokasi?: Maybe<SortOrder>,
  statusAlasanTdk?: Maybe<SortOrder>,
  tglRapat?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  pp_pendamping?: Maybe<SortOrder>,
};

export type CasePkRelationFilter = {
  is?: Maybe<CasePkWhereInput>,
  isNot?: Maybe<CasePkWhereInput>,
};

export enum CasePkScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Didampingi = 'didampingi',
  LegalMemo = 'legalMemo',
  NotulaRapat = 'notulaRapat',
  TargetAkhirAdvokasi = 'targetAkhirAdvokasi',
  StrategiAdvokasi = 'strategiAdvokasi',
  StatusAlasanTdk = 'statusAlasanTdk',
  TglRapat = 'tglRapat',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  PpPendamping = 'pp_pendamping'
}

export type CasePkScalarWhereInput = {
  AND?: Maybe<Array<CasePkScalarWhereInput>>,
  OR?: Maybe<Array<CasePkScalarWhereInput>>,
  NOT?: Maybe<Array<CasePkScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  didampingi?: Maybe<StringNullableFilter>,
  legalMemo?: Maybe<StringNullableFilter>,
  notulaRapat?: Maybe<StringNullableFilter>,
  targetAkhirAdvokasi?: Maybe<StringNullableFilter>,
  strategiAdvokasi?: Maybe<StringNullableFilter>,
  statusAlasanTdk?: Maybe<StringNullableFilter>,
  tglRapat?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  pp_pendamping?: Maybe<IntNullableFilter>,
};

export type CasePkSumAggregate = {
  id: Scalars['Int'],
  pp_pendamping?: Maybe<Scalars['Int']>,
};

export type CasePkUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  didampingi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  legalMemo?: Maybe<NullableStringFieldUpdateOperationsInput>,
  notulaRapat?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAkhirAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  strategiAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusAlasanTdk?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglRapat?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppPendamping?: Maybe<UserUpdateOneWithoutCasePkInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutPkInput>,
};

export type CasePkUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  didampingi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  legalMemo?: Maybe<NullableStringFieldUpdateOperationsInput>,
  notulaRapat?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAkhirAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  strategiAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusAlasanTdk?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglRapat?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CasePkUpdateManyWithoutPpPendampingInput = {
  create?: Maybe<Array<CasePkCreateWithoutPpPendampingInput>>,
  connectOrCreate?: Maybe<Array<CasePkCreateOrConnectWithoutPpPendampingInput>>,
  upsert?: Maybe<Array<CasePkUpsertWithWhereUniqueWithoutPpPendampingInput>>,
  connect?: Maybe<Array<CasePkWhereUniqueInput>>,
  set?: Maybe<Array<CasePkWhereUniqueInput>>,
  disconnect?: Maybe<Array<CasePkWhereUniqueInput>>,
  delete?: Maybe<Array<CasePkWhereUniqueInput>>,
  update?: Maybe<Array<CasePkUpdateWithWhereUniqueWithoutPpPendampingInput>>,
  updateMany?: Maybe<Array<CasePkUpdateManyWithWhereWithoutPpPendampingInput>>,
  deleteMany?: Maybe<Array<CasePkScalarWhereInput>>,
};

export type CasePkUpdateManyWithWhereWithoutPpPendampingInput = {
  where: CasePkScalarWhereInput,
  data: CasePkUpdateManyMutationInput,
};

export type CasePkUpdateOneWithoutCaseInput = {
  create?: Maybe<CasePkCreateWithoutCaseInput>,
  connectOrCreate?: Maybe<CasePkCreateOrConnectWithoutCaseInput>,
  upsert?: Maybe<CasePkUpsertWithoutCaseInput>,
  connect?: Maybe<CasePkWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CasePkUpdateWithoutCaseInput>,
};

export type CasePkUpdateWithoutCaseInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  didampingi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  legalMemo?: Maybe<NullableStringFieldUpdateOperationsInput>,
  notulaRapat?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAkhirAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  strategiAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusAlasanTdk?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglRapat?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  ppPendamping?: Maybe<UserUpdateOneWithoutCasePkInput>,
};

export type CasePkUpdateWithoutPpPendampingInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  didampingi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  legalMemo?: Maybe<NullableStringFieldUpdateOperationsInput>,
  notulaRapat?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAkhirAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  strategiAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusAlasanTdk?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglRapat?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutPkInput>,
};

export type CasePkUpdateWithWhereUniqueWithoutPpPendampingInput = {
  where: CasePkWhereUniqueInput,
  data: CasePkUpdateWithoutPpPendampingInput,
};

export type CasePkUpsertWithoutCaseInput = {
  update: CasePkUpdateWithoutCaseInput,
  create: CasePkCreateWithoutCaseInput,
};

export type CasePkUpsertWithWhereUniqueWithoutPpPendampingInput = {
  where: CasePkWhereUniqueInput,
  update: CasePkUpdateWithoutPpPendampingInput,
  create: CasePkCreateWithoutPpPendampingInput,
};

export type CasePkWhereInput = {
  AND?: Maybe<Array<CasePkWhereInput>>,
  OR?: Maybe<Array<CasePkWhereInput>>,
  NOT?: Maybe<Array<CasePkWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  didampingi?: Maybe<StringNullableFilter>,
  legalMemo?: Maybe<StringNullableFilter>,
  notulaRapat?: Maybe<StringNullableFilter>,
  targetAkhirAdvokasi?: Maybe<StringNullableFilter>,
  strategiAdvokasi?: Maybe<StringNullableFilter>,
  statusAlasanTdk?: Maybe<StringNullableFilter>,
  tglRapat?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  pp_pendamping?: Maybe<IntNullableFilter>,
  ppPendamping?: Maybe<UserRelationFilter>,
  case?: Maybe<RenamedcaseRelationFilter>,
};

export type CasePkWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseProgress = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  case?: Maybe<Renamedcase>,
};

export type CaseProgressActivity = {
  id: Scalars['Int'],
  capaian?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
  caseId?: Maybe<Renamedcase>,
  activitieslit: Array<CaseProgressActivityLit>,
  activitiesnonlit: Array<CaseProgressActivityNonlit>,
};


export type CaseProgressActivityActivitieslitArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityLitOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityLitWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressActivityLitScalarFieldEnum>>
};


export type CaseProgressActivityActivitiesnonlitArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityNonlitOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityNonlitWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressActivityNonlitScalarFieldEnum>>
};

export type CaseProgressActivityAvgAggregate = {
  id: Scalars['Float'],
  case_id?: Maybe<Scalars['Float']>,
};

export type CaseProgressActivityCountAggregate = {
  id: Scalars['Int'],
  capaian?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  hambatan?: Maybe<Scalars['Int']>,
  judulAktifitas?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  rencanaStrategi?: Maybe<Scalars['Int']>,
  targetAdvokasi?: Maybe<Scalars['Int']>,
  tglAktifitas?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  case_id?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseProgressActivityCreateInput = {
  capaian?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutActivitiesInput>,
  activitieslit?: Maybe<CaseProgressActivityLitCreateNestedManyWithoutCaseProgressActivityIdInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitCreateNestedManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityCreateNestedManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseProgressActivityCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseProgressActivityCreateOrConnectWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
};

export type CaseProgressActivityCreateNestedOneWithoutActivitieslitInput = {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitieslitInput>,
  connectOrCreate?: Maybe<CaseProgressActivityCreateOrConnectWithoutActivitieslitInput>,
  connect?: Maybe<CaseProgressActivityWhereUniqueInput>,
};

export type CaseProgressActivityCreateNestedOneWithoutActivitiesnonlitInput = {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitiesnonlitInput>,
  connectOrCreate?: Maybe<CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput>,
  connect?: Maybe<CaseProgressActivityWhereUniqueInput>,
};

export type CaseProgressActivityCreateOrConnectWithoutActivitieslitInput = {
  where: CaseProgressActivityWhereUniqueInput,
  create: CaseProgressActivityCreateWithoutActivitieslitInput,
};

export type CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput = {
  where: CaseProgressActivityWhereUniqueInput,
  create: CaseProgressActivityCreateWithoutActivitiesnonlitInput,
};

export type CaseProgressActivityCreateOrConnectWithoutCaseIdInput = {
  where: CaseProgressActivityWhereUniqueInput,
  create: CaseProgressActivityCreateWithoutCaseIdInput,
};

export type CaseProgressActivityCreateWithoutActivitieslitInput = {
  capaian?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutActivitiesInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitCreateNestedManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityCreateWithoutActivitiesnonlitInput = {
  capaian?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutActivitiesInput>,
  activitieslit?: Maybe<CaseProgressActivityLitCreateNestedManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityCreateWithoutCaseIdInput = {
  capaian?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  activitieslit?: Maybe<CaseProgressActivityLitCreateNestedManyWithoutCaseProgressActivityIdInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitCreateNestedManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityListRelationFilter = {
  every?: Maybe<CaseProgressActivityWhereInput>,
  some?: Maybe<CaseProgressActivityWhereInput>,
  none?: Maybe<CaseProgressActivityWhereInput>,
};

export type CaseProgressActivityLit = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_progress_activity_id?: Maybe<Scalars['Int']>,
  caseProgressActivityId?: Maybe<CaseProgressActivity>,
};

export type CaseProgressActivityLitAvgAggregate = {
  id: Scalars['Float'],
  case_progress_activity_id?: Maybe<Scalars['Float']>,
};

export type CaseProgressActivityLitCountAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['Int']>,
  case_progress_activity_id?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseProgressActivityLitCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseProgressActivityId?: Maybe<CaseProgressActivityCreateNestedOneWithoutActivitieslitInput>,
};

export type CaseProgressActivityLitCreateNestedManyWithoutCaseProgressActivityIdInput = {
  create?: Maybe<Array<CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput>>,
  connectOrCreate?: Maybe<Array<CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
};

export type CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityLitWhereUniqueInput,
  create: CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput,
};

export type CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityLitListRelationFilter = {
  every?: Maybe<CaseProgressActivityLitWhereInput>,
  some?: Maybe<CaseProgressActivityLitWhereInput>,
  none?: Maybe<CaseProgressActivityLitWhereInput>,
};

export type CaseProgressActivityLitMaxAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_progress_activity_id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityLitMinAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_progress_activity_id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityLitOrderByInput = {
  id?: Maybe<SortOrder>,
  kodeMt?: Maybe<SortOrder>,
  case_progress_activity_id?: Maybe<SortOrder>,
};

export enum CaseProgressActivityLitScalarFieldEnum {
  Id = 'id',
  KodeMt = 'kodeMt',
  CaseProgressActivityId = 'case_progress_activity_id'
}

export type CaseProgressActivityLitScalarWhereInput = {
  AND?: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>,
  OR?: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>,
  NOT?: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_progress_activity_id?: Maybe<IntNullableFilter>,
};

export type CaseProgressActivityLitSumAggregate = {
  id: Scalars['Int'],
  case_progress_activity_id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityLitUpdateInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseProgressActivityId?: Maybe<CaseProgressActivityUpdateOneWithoutActivitieslitInput>,
};

export type CaseProgressActivityLitUpdateManyMutationInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput = {
  create?: Maybe<Array<CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput>>,
  connectOrCreate?: Maybe<Array<CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput>>,
  upsert?: Maybe<Array<CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
  set?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
  delete?: Maybe<Array<CaseProgressActivityLitWhereUniqueInput>>,
  update?: Maybe<Array<CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput>>,
  updateMany?: Maybe<Array<CaseProgressActivityLitUpdateManyWithWhereWithoutCaseProgressActivityIdInput>>,
  deleteMany?: Maybe<Array<CaseProgressActivityLitScalarWhereInput>>,
};

export type CaseProgressActivityLitUpdateManyWithWhereWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityLitScalarWhereInput,
  data: CaseProgressActivityLitUpdateManyMutationInput,
};

export type CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityLitWhereUniqueInput,
  data: CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdInput,
};

export type CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityLitWhereUniqueInput,
  update: CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdInput,
  create: CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput,
};

export type CaseProgressActivityLitWhereInput = {
  AND?: Maybe<Array<CaseProgressActivityLitWhereInput>>,
  OR?: Maybe<Array<CaseProgressActivityLitWhereInput>>,
  NOT?: Maybe<Array<CaseProgressActivityLitWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_progress_activity_id?: Maybe<IntNullableFilter>,
  caseProgressActivityId?: Maybe<CaseProgressActivityRelationFilter>,
};

export type CaseProgressActivityLitWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityMaxAggregate = {
  id: Scalars['Int'],
  capaian?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityMinAggregate = {
  id: Scalars['Int'],
  capaian?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  hambatan?: Maybe<Scalars['String']>,
  judulAktifitas?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rencanaStrategi?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  tglAktifitas?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityNonlit = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_progress_activity_id?: Maybe<Scalars['Int']>,
  caseProgressActivityId?: Maybe<CaseProgressActivity>,
};

export type CaseProgressActivityNonlitAvgAggregate = {
  id: Scalars['Float'],
  case_progress_activity_id?: Maybe<Scalars['Float']>,
};

export type CaseProgressActivityNonlitCountAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['Int']>,
  case_progress_activity_id?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseProgressActivityNonlitCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseProgressActivityId?: Maybe<CaseProgressActivityCreateNestedOneWithoutActivitiesnonlitInput>,
};

export type CaseProgressActivityNonlitCreateNestedManyWithoutCaseProgressActivityIdInput = {
  create?: Maybe<Array<CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput>>,
  connectOrCreate?: Maybe<Array<CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
};

export type CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityNonlitWhereUniqueInput,
  create: CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput,
};

export type CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseProgressActivityNonlitListRelationFilter = {
  every?: Maybe<CaseProgressActivityNonlitWhereInput>,
  some?: Maybe<CaseProgressActivityNonlitWhereInput>,
  none?: Maybe<CaseProgressActivityNonlitWhereInput>,
};

export type CaseProgressActivityNonlitMaxAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_progress_activity_id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityNonlitMinAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_progress_activity_id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityNonlitOrderByInput = {
  id?: Maybe<SortOrder>,
  kodeMt?: Maybe<SortOrder>,
  case_progress_activity_id?: Maybe<SortOrder>,
};

export enum CaseProgressActivityNonlitScalarFieldEnum {
  Id = 'id',
  KodeMt = 'kodeMt',
  CaseProgressActivityId = 'case_progress_activity_id'
}

export type CaseProgressActivityNonlitScalarWhereInput = {
  AND?: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>,
  OR?: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>,
  NOT?: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_progress_activity_id?: Maybe<IntNullableFilter>,
};

export type CaseProgressActivityNonlitSumAggregate = {
  id: Scalars['Int'],
  case_progress_activity_id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityNonlitUpdateInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseProgressActivityId?: Maybe<CaseProgressActivityUpdateOneWithoutActivitiesnonlitInput>,
};

export type CaseProgressActivityNonlitUpdateManyMutationInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput = {
  create?: Maybe<Array<CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput>>,
  connectOrCreate?: Maybe<Array<CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput>>,
  upsert?: Maybe<Array<CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
  set?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
  delete?: Maybe<Array<CaseProgressActivityNonlitWhereUniqueInput>>,
  update?: Maybe<Array<CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput>>,
  updateMany?: Maybe<Array<CaseProgressActivityNonlitUpdateManyWithWhereWithoutCaseProgressActivityIdInput>>,
  deleteMany?: Maybe<Array<CaseProgressActivityNonlitScalarWhereInput>>,
};

export type CaseProgressActivityNonlitUpdateManyWithWhereWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityNonlitScalarWhereInput,
  data: CaseProgressActivityNonlitUpdateManyMutationInput,
};

export type CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityNonlitWhereUniqueInput,
  data: CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdInput,
};

export type CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput = {
  where: CaseProgressActivityNonlitWhereUniqueInput,
  update: CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdInput,
  create: CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput,
};

export type CaseProgressActivityNonlitWhereInput = {
  AND?: Maybe<Array<CaseProgressActivityNonlitWhereInput>>,
  OR?: Maybe<Array<CaseProgressActivityNonlitWhereInput>>,
  NOT?: Maybe<Array<CaseProgressActivityNonlitWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_progress_activity_id?: Maybe<IntNullableFilter>,
  caseProgressActivityId?: Maybe<CaseProgressActivityRelationFilter>,
};

export type CaseProgressActivityNonlitWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityOrderByInput = {
  id?: Maybe<SortOrder>,
  capaian?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  hambatan?: Maybe<SortOrder>,
  judulAktifitas?: Maybe<SortOrder>,
  position?: Maybe<SortOrder>,
  rencanaStrategi?: Maybe<SortOrder>,
  targetAdvokasi?: Maybe<SortOrder>,
  tglAktifitas?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  case_id?: Maybe<SortOrder>,
};

export type CaseProgressActivityRelationFilter = {
  is?: Maybe<CaseProgressActivityWhereInput>,
  isNot?: Maybe<CaseProgressActivityWhereInput>,
};

export enum CaseProgressActivityScalarFieldEnum {
  Id = 'id',
  Capaian = 'capaian',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Hambatan = 'hambatan',
  JudulAktifitas = 'judulAktifitas',
  Position = 'position',
  RencanaStrategi = 'rencanaStrategi',
  TargetAdvokasi = 'targetAdvokasi',
  TglAktifitas = 'tglAktifitas',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  CaseId = 'case_id'
}

export type CaseProgressActivityScalarWhereInput = {
  AND?: Maybe<Array<CaseProgressActivityScalarWhereInput>>,
  OR?: Maybe<Array<CaseProgressActivityScalarWhereInput>>,
  NOT?: Maybe<Array<CaseProgressActivityScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  capaian?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  hambatan?: Maybe<StringNullableFilter>,
  judulAktifitas?: Maybe<StringNullableFilter>,
  position?: Maybe<StringNullableFilter>,
  rencanaStrategi?: Maybe<StringNullableFilter>,
  targetAdvokasi?: Maybe<StringNullableFilter>,
  tglAktifitas?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
};

export type CaseProgressActivitySumAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseProgressActivityUpdateInput = {
  capaian?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hambatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulAktifitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rencanaStrategi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglAktifitas?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutActivitiesInput>,
  activitieslit?: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityUpdateManyMutationInput = {
  capaian?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hambatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulAktifitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rencanaStrategi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglAktifitas?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseProgressActivityUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseProgressActivityCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseProgressActivityCreateOrConnectWithoutCaseIdInput>>,
  upsert?: Maybe<Array<CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
  set?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
  delete?: Maybe<Array<CaseProgressActivityWhereUniqueInput>>,
  update?: Maybe<Array<CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseProgressActivityUpdateManyWithWhereWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CaseProgressActivityScalarWhereInput>>,
};

export type CaseProgressActivityUpdateManyWithWhereWithoutCaseIdInput = {
  where: CaseProgressActivityScalarWhereInput,
  data: CaseProgressActivityUpdateManyMutationInput,
};

export type CaseProgressActivityUpdateOneWithoutActivitieslitInput = {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitieslitInput>,
  connectOrCreate?: Maybe<CaseProgressActivityCreateOrConnectWithoutActivitieslitInput>,
  upsert?: Maybe<CaseProgressActivityUpsertWithoutActivitieslitInput>,
  connect?: Maybe<CaseProgressActivityWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseProgressActivityUpdateWithoutActivitieslitInput>,
};

export type CaseProgressActivityUpdateOneWithoutActivitiesnonlitInput = {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitiesnonlitInput>,
  connectOrCreate?: Maybe<CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput>,
  upsert?: Maybe<CaseProgressActivityUpsertWithoutActivitiesnonlitInput>,
  connect?: Maybe<CaseProgressActivityWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseProgressActivityUpdateWithoutActivitiesnonlitInput>,
};

export type CaseProgressActivityUpdateWithoutActivitieslitInput = {
  capaian?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hambatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulAktifitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rencanaStrategi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglAktifitas?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutActivitiesInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityUpdateWithoutActivitiesnonlitInput = {
  capaian?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hambatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulAktifitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rencanaStrategi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglAktifitas?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutActivitiesInput>,
  activitieslit?: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityUpdateWithoutCaseIdInput = {
  capaian?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hambatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulAktifitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rencanaStrategi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglAktifitas?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  activitieslit?: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>,
};

export type CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseProgressActivityWhereUniqueInput,
  data: CaseProgressActivityUpdateWithoutCaseIdInput,
};

export type CaseProgressActivityUpsertWithoutActivitieslitInput = {
  update: CaseProgressActivityUpdateWithoutActivitieslitInput,
  create: CaseProgressActivityCreateWithoutActivitieslitInput,
};

export type CaseProgressActivityUpsertWithoutActivitiesnonlitInput = {
  update: CaseProgressActivityUpdateWithoutActivitiesnonlitInput,
  create: CaseProgressActivityCreateWithoutActivitiesnonlitInput,
};

export type CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseProgressActivityWhereUniqueInput,
  update: CaseProgressActivityUpdateWithoutCaseIdInput,
  create: CaseProgressActivityCreateWithoutCaseIdInput,
};

export type CaseProgressActivityWhereInput = {
  AND?: Maybe<Array<CaseProgressActivityWhereInput>>,
  OR?: Maybe<Array<CaseProgressActivityWhereInput>>,
  NOT?: Maybe<Array<CaseProgressActivityWhereInput>>,
  id?: Maybe<IntFilter>,
  capaian?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  hambatan?: Maybe<StringNullableFilter>,
  judulAktifitas?: Maybe<StringNullableFilter>,
  position?: Maybe<StringNullableFilter>,
  rencanaStrategi?: Maybe<StringNullableFilter>,
  targetAdvokasi?: Maybe<StringNullableFilter>,
  tglAktifitas?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
  caseId?: Maybe<RenamedcaseRelationFilter>,
  activitieslit?: Maybe<CaseProgressActivityLitListRelationFilter>,
  activitiesnonlit?: Maybe<CaseProgressActivityNonlitListRelationFilter>,
};

export type CaseProgressActivityWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseProgressAvgAggregate = {
  id: Scalars['Float'],
};

export type CaseProgressCountAggregate = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  jenisPeradilan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseProgressCreateInput = {
  catatan?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutProgressesInput>,
};

export type CaseProgressCreateNestedOneWithoutCaseInput = {
  create?: Maybe<CaseProgressCreateWithoutCaseInput>,
  connectOrCreate?: Maybe<CaseProgressCreateOrConnectWithoutCaseInput>,
  connect?: Maybe<CaseProgressWhereUniqueInput>,
};

export type CaseProgressCreateOrConnectWithoutCaseInput = {
  where: CaseProgressWhereUniqueInput,
  create: CaseProgressCreateWithoutCaseInput,
};

export type CaseProgressCreateWithoutCaseInput = {
  catatan?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressMaxAggregate = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressMinAggregate = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  jenisPeradilan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseProgressOrderByInput = {
  id?: Maybe<SortOrder>,
  catatan?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  jenisPeradilan?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
};

export type CaseProgressRelationFilter = {
  is?: Maybe<CaseProgressWhereInput>,
  isNot?: Maybe<CaseProgressWhereInput>,
};

export enum CaseProgressScalarFieldEnum {
  Id = 'id',
  Catatan = 'catatan',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  JenisPeradilan = 'jenisPeradilan',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type CaseProgressSumAggregate = {
  id: Scalars['Int'],
};

export type CaseProgressUpdateInput = {
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisPeradilan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutProgressesInput>,
};

export type CaseProgressUpdateManyMutationInput = {
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisPeradilan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseProgressUpdateOneWithoutCaseInput = {
  create?: Maybe<CaseProgressCreateWithoutCaseInput>,
  connectOrCreate?: Maybe<CaseProgressCreateOrConnectWithoutCaseInput>,
  upsert?: Maybe<CaseProgressUpsertWithoutCaseInput>,
  connect?: Maybe<CaseProgressWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseProgressUpdateWithoutCaseInput>,
};

export type CaseProgressUpdateWithoutCaseInput = {
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisPeradilan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseProgressUpsertWithoutCaseInput = {
  update: CaseProgressUpdateWithoutCaseInput,
  create: CaseProgressCreateWithoutCaseInput,
};

export type CaseProgressWhereInput = {
  AND?: Maybe<Array<CaseProgressWhereInput>>,
  OR?: Maybe<Array<CaseProgressWhereInput>>,
  NOT?: Maybe<Array<CaseProgressWhereInput>>,
  id?: Maybe<IntFilter>,
  catatan?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  jenisPeradilan?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  case?: Maybe<RenamedcaseRelationFilter>,
};

export type CaseProgressWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseReferral = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<Scalars['Int']>,
  networkId?: Maybe<Scalars['Int']>,
  clientId?: Maybe<Scalars['Int']>,
  case?: Maybe<Renamedcase>,
  client?: Maybe<Person>,
  network?: Maybe<Network>,
};

export type CaseReferralAvgAggregate = {
  id: Scalars['Float'],
  caseId?: Maybe<Scalars['Float']>,
  networkId?: Maybe<Scalars['Float']>,
  clientId?: Maybe<Scalars['Float']>,
};

export type CaseReferralCountAggregate = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['Int']>,
  catatan?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  caseId?: Maybe<Scalars['Int']>,
  networkId?: Maybe<Scalars['Int']>,
  clientId?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseReferralCreateInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutReferralsInput>,
  client?: Maybe<PersonCreateNestedOneWithoutCaseReferralInput>,
  network?: Maybe<NetworkCreateNestedOneWithoutCaseReferralInput>,
};

export type CaseReferralCreateNestedManyWithoutCaseInput = {
  create?: Maybe<Array<CaseReferralCreateWithoutCaseInput>>,
  connectOrCreate?: Maybe<Array<CaseReferralCreateOrConnectWithoutCaseInput>>,
  connect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
};

export type CaseReferralCreateNestedManyWithoutClientInput = {
  create?: Maybe<Array<CaseReferralCreateWithoutClientInput>>,
  connectOrCreate?: Maybe<Array<CaseReferralCreateOrConnectWithoutClientInput>>,
  connect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
};

export type CaseReferralCreateNestedManyWithoutNetworkInput = {
  create?: Maybe<Array<CaseReferralCreateWithoutNetworkInput>>,
  connectOrCreate?: Maybe<Array<CaseReferralCreateOrConnectWithoutNetworkInput>>,
  connect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
};

export type CaseReferralCreateOrConnectWithoutCaseInput = {
  where: CaseReferralWhereUniqueInput,
  create: CaseReferralCreateWithoutCaseInput,
};

export type CaseReferralCreateOrConnectWithoutClientInput = {
  where: CaseReferralWhereUniqueInput,
  create: CaseReferralCreateWithoutClientInput,
};

export type CaseReferralCreateOrConnectWithoutNetworkInput = {
  where: CaseReferralWhereUniqueInput,
  create: CaseReferralCreateWithoutNetworkInput,
};

export type CaseReferralCreateWithoutCaseInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  client?: Maybe<PersonCreateNestedOneWithoutCaseReferralInput>,
  network?: Maybe<NetworkCreateNestedOneWithoutCaseReferralInput>,
};

export type CaseReferralCreateWithoutClientInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutReferralsInput>,
  network?: Maybe<NetworkCreateNestedOneWithoutCaseReferralInput>,
};

export type CaseReferralCreateWithoutNetworkInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutReferralsInput>,
  client?: Maybe<PersonCreateNestedOneWithoutCaseReferralInput>,
};

export type CaseReferralListRelationFilter = {
  every?: Maybe<CaseReferralWhereInput>,
  some?: Maybe<CaseReferralWhereInput>,
  none?: Maybe<CaseReferralWhereInput>,
};

export type CaseReferralMaxAggregate = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<Scalars['Int']>,
  networkId?: Maybe<Scalars['Int']>,
  clientId?: Maybe<Scalars['Int']>,
};

export type CaseReferralMinAggregate = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<Scalars['Int']>,
  networkId?: Maybe<Scalars['Int']>,
  clientId?: Maybe<Scalars['Int']>,
};

export type CaseReferralOrderByInput = {
  id?: Maybe<SortOrder>,
  tglTransfer?: Maybe<SortOrder>,
  catatan?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  caseId?: Maybe<SortOrder>,
  networkId?: Maybe<SortOrder>,
  clientId?: Maybe<SortOrder>,
};

export enum CaseReferralScalarFieldEnum {
  Id = 'id',
  TglTransfer = 'tglTransfer',
  Catatan = 'catatan',
  CreatedBy = 'createdBy',
  UpdatedBy = 'updatedBy',
  CaseId = 'caseId',
  NetworkId = 'networkId',
  ClientId = 'clientId'
}

export type CaseReferralScalarWhereInput = {
  AND?: Maybe<Array<CaseReferralScalarWhereInput>>,
  OR?: Maybe<Array<CaseReferralScalarWhereInput>>,
  NOT?: Maybe<Array<CaseReferralScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  tglTransfer?: Maybe<DateTimeNullableFilter>,
  catatan?: Maybe<StringNullableFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  caseId?: Maybe<IntNullableFilter>,
  networkId?: Maybe<IntNullableFilter>,
  clientId?: Maybe<IntNullableFilter>,
};

export type CaseReferralSumAggregate = {
  id: Scalars['Int'],
  caseId?: Maybe<Scalars['Int']>,
  networkId?: Maybe<Scalars['Int']>,
  clientId?: Maybe<Scalars['Int']>,
};

export type CaseReferralUpdateInput = {
  tglTransfer?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutReferralsInput>,
  client?: Maybe<PersonUpdateOneWithoutCaseReferralInput>,
  network?: Maybe<NetworkUpdateOneWithoutCaseReferralInput>,
};

export type CaseReferralUpdateManyMutationInput = {
  tglTransfer?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseReferralUpdateManyWithoutCaseInput = {
  create?: Maybe<Array<CaseReferralCreateWithoutCaseInput>>,
  connectOrCreate?: Maybe<Array<CaseReferralCreateOrConnectWithoutCaseInput>>,
  upsert?: Maybe<Array<CaseReferralUpsertWithWhereUniqueWithoutCaseInput>>,
  connect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  set?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  delete?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  update?: Maybe<Array<CaseReferralUpdateWithWhereUniqueWithoutCaseInput>>,
  updateMany?: Maybe<Array<CaseReferralUpdateManyWithWhereWithoutCaseInput>>,
  deleteMany?: Maybe<Array<CaseReferralScalarWhereInput>>,
};

export type CaseReferralUpdateManyWithoutClientInput = {
  create?: Maybe<Array<CaseReferralCreateWithoutClientInput>>,
  connectOrCreate?: Maybe<Array<CaseReferralCreateOrConnectWithoutClientInput>>,
  upsert?: Maybe<Array<CaseReferralUpsertWithWhereUniqueWithoutClientInput>>,
  connect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  set?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  delete?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  update?: Maybe<Array<CaseReferralUpdateWithWhereUniqueWithoutClientInput>>,
  updateMany?: Maybe<Array<CaseReferralUpdateManyWithWhereWithoutClientInput>>,
  deleteMany?: Maybe<Array<CaseReferralScalarWhereInput>>,
};

export type CaseReferralUpdateManyWithoutNetworkInput = {
  create?: Maybe<Array<CaseReferralCreateWithoutNetworkInput>>,
  connectOrCreate?: Maybe<Array<CaseReferralCreateOrConnectWithoutNetworkInput>>,
  upsert?: Maybe<Array<CaseReferralUpsertWithWhereUniqueWithoutNetworkInput>>,
  connect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  set?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  delete?: Maybe<Array<CaseReferralWhereUniqueInput>>,
  update?: Maybe<Array<CaseReferralUpdateWithWhereUniqueWithoutNetworkInput>>,
  updateMany?: Maybe<Array<CaseReferralUpdateManyWithWhereWithoutNetworkInput>>,
  deleteMany?: Maybe<Array<CaseReferralScalarWhereInput>>,
};

export type CaseReferralUpdateManyWithWhereWithoutCaseInput = {
  where: CaseReferralScalarWhereInput,
  data: CaseReferralUpdateManyMutationInput,
};

export type CaseReferralUpdateManyWithWhereWithoutClientInput = {
  where: CaseReferralScalarWhereInput,
  data: CaseReferralUpdateManyMutationInput,
};

export type CaseReferralUpdateManyWithWhereWithoutNetworkInput = {
  where: CaseReferralScalarWhereInput,
  data: CaseReferralUpdateManyMutationInput,
};

export type CaseReferralUpdateWithoutCaseInput = {
  tglTransfer?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  client?: Maybe<PersonUpdateOneWithoutCaseReferralInput>,
  network?: Maybe<NetworkUpdateOneWithoutCaseReferralInput>,
};

export type CaseReferralUpdateWithoutClientInput = {
  tglTransfer?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutReferralsInput>,
  network?: Maybe<NetworkUpdateOneWithoutCaseReferralInput>,
};

export type CaseReferralUpdateWithoutNetworkInput = {
  tglTransfer?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutReferralsInput>,
  client?: Maybe<PersonUpdateOneWithoutCaseReferralInput>,
};

export type CaseReferralUpdateWithWhereUniqueWithoutCaseInput = {
  where: CaseReferralWhereUniqueInput,
  data: CaseReferralUpdateWithoutCaseInput,
};

export type CaseReferralUpdateWithWhereUniqueWithoutClientInput = {
  where: CaseReferralWhereUniqueInput,
  data: CaseReferralUpdateWithoutClientInput,
};

export type CaseReferralUpdateWithWhereUniqueWithoutNetworkInput = {
  where: CaseReferralWhereUniqueInput,
  data: CaseReferralUpdateWithoutNetworkInput,
};

export type CaseReferralUpsertWithWhereUniqueWithoutCaseInput = {
  where: CaseReferralWhereUniqueInput,
  update: CaseReferralUpdateWithoutCaseInput,
  create: CaseReferralCreateWithoutCaseInput,
};

export type CaseReferralUpsertWithWhereUniqueWithoutClientInput = {
  where: CaseReferralWhereUniqueInput,
  update: CaseReferralUpdateWithoutClientInput,
  create: CaseReferralCreateWithoutClientInput,
};

export type CaseReferralUpsertWithWhereUniqueWithoutNetworkInput = {
  where: CaseReferralWhereUniqueInput,
  update: CaseReferralUpdateWithoutNetworkInput,
  create: CaseReferralCreateWithoutNetworkInput,
};

export type CaseReferralWhereInput = {
  AND?: Maybe<Array<CaseReferralWhereInput>>,
  OR?: Maybe<Array<CaseReferralWhereInput>>,
  NOT?: Maybe<Array<CaseReferralWhereInput>>,
  id?: Maybe<IntFilter>,
  tglTransfer?: Maybe<DateTimeNullableFilter>,
  catatan?: Maybe<StringNullableFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  caseId?: Maybe<IntNullableFilter>,
  networkId?: Maybe<IntNullableFilter>,
  clientId?: Maybe<IntNullableFilter>,
  case?: Maybe<RenamedcaseRelationFilter>,
  client?: Maybe<PersonRelationFilter>,
  network?: Maybe<NetworkRelationFilter>,
};

export type CaseReferralWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseTransfer = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  network?: Maybe<Network>,
  case?: Maybe<Renamedcase>,
};

export type CaseTransferAvgAggregate = {
  id: Scalars['Float'],
  networkId?: Maybe<Scalars['Float']>,
};

export type CaseTransferCountAggregate = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['Int']>,
  catatan?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  networkId?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseTransferCreateInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  network?: Maybe<NetworkCreateNestedOneWithoutCaseTransferInput>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutTransferInput>,
};

export type CaseTransferCreateNestedManyWithoutNetworkInput = {
  create?: Maybe<Array<CaseTransferCreateWithoutNetworkInput>>,
  connectOrCreate?: Maybe<Array<CaseTransferCreateOrConnectWithoutNetworkInput>>,
  connect?: Maybe<Array<CaseTransferWhereUniqueInput>>,
};

export type CaseTransferCreateNestedOneWithoutCaseInput = {
  create?: Maybe<CaseTransferCreateWithoutCaseInput>,
  connectOrCreate?: Maybe<CaseTransferCreateOrConnectWithoutCaseInput>,
  connect?: Maybe<CaseTransferWhereUniqueInput>,
};

export type CaseTransferCreateOrConnectWithoutCaseInput = {
  where: CaseTransferWhereUniqueInput,
  create: CaseTransferCreateWithoutCaseInput,
};

export type CaseTransferCreateOrConnectWithoutNetworkInput = {
  where: CaseTransferWhereUniqueInput,
  create: CaseTransferCreateWithoutNetworkInput,
};

export type CaseTransferCreateWithoutCaseInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  network?: Maybe<NetworkCreateNestedOneWithoutCaseTransferInput>,
};

export type CaseTransferCreateWithoutNetworkInput = {
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  case?: Maybe<RenamedcaseCreateNestedOneWithoutTransferInput>,
};

export type CaseTransferListRelationFilter = {
  every?: Maybe<CaseTransferWhereInput>,
  some?: Maybe<CaseTransferWhereInput>,
  none?: Maybe<CaseTransferWhereInput>,
};

export type CaseTransferMaxAggregate = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
};

export type CaseTransferMinAggregate = {
  id: Scalars['Int'],
  tglTransfer?: Maybe<Scalars['DateTime']>,
  catatan?: Maybe<Scalars['String']>,
  createdBy?: Maybe<Scalars['String']>,
  updatedBy?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
};

export type CaseTransferOrderByInput = {
  id?: Maybe<SortOrder>,
  tglTransfer?: Maybe<SortOrder>,
  catatan?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  networkId?: Maybe<SortOrder>,
};

export type CaseTransferReferral = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
  caseId?: Maybe<Renamedcase>,
};

export type CaseTransferReferralAvgAggregate = {
  id: Scalars['Float'],
  networkId?: Maybe<Scalars['Float']>,
  case_id?: Maybe<Scalars['Float']>,
};

export type CaseTransferReferralCountAggregate = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  document?: Maybe<Scalars['Int']>,
  jenisTransferReferral?: Maybe<Scalars['Int']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  case_id?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseTransferReferralCreateInput = {
  catatan?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutTransferreferralsInput>,
};

export type CaseTransferReferralCreateNestedManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseTransferReferralCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseTransferReferralCreateOrConnectWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
};

export type CaseTransferReferralCreateOrConnectWithoutCaseIdInput = {
  where: CaseTransferReferralWhereUniqueInput,
  create: CaseTransferReferralCreateWithoutCaseIdInput,
};

export type CaseTransferReferralCreateWithoutCaseIdInput = {
  catatan?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
};

export type CaseTransferReferralListRelationFilter = {
  every?: Maybe<CaseTransferReferralWhereInput>,
  some?: Maybe<CaseTransferReferralWhereInput>,
  none?: Maybe<CaseTransferReferralWhereInput>,
};

export type CaseTransferReferralMaxAggregate = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseTransferReferralMinAggregate = {
  id: Scalars['Int'],
  catatan?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  document?: Maybe<Scalars['String']>,
  jenisTransferReferral?: Maybe<Scalars['String']>,
  networkId?: Maybe<Scalars['Int']>,
  tglTransferReferral?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseTransferReferralOrderByInput = {
  id?: Maybe<SortOrder>,
  catatan?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  document?: Maybe<SortOrder>,
  jenisTransferReferral?: Maybe<SortOrder>,
  networkId?: Maybe<SortOrder>,
  tglTransferReferral?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  case_id?: Maybe<SortOrder>,
};

export enum CaseTransferReferralScalarFieldEnum {
  Id = 'id',
  Catatan = 'catatan',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Document = 'document',
  JenisTransferReferral = 'jenisTransferReferral',
  NetworkId = 'networkId',
  TglTransferReferral = 'tglTransferReferral',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  CaseId = 'case_id'
}

export type CaseTransferReferralScalarWhereInput = {
  AND?: Maybe<Array<CaseTransferReferralScalarWhereInput>>,
  OR?: Maybe<Array<CaseTransferReferralScalarWhereInput>>,
  NOT?: Maybe<Array<CaseTransferReferralScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  catatan?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  document?: Maybe<StringNullableFilter>,
  jenisTransferReferral?: Maybe<StringNullableFilter>,
  networkId?: Maybe<IntNullableFilter>,
  tglTransferReferral?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
};

export type CaseTransferReferralSumAggregate = {
  id: Scalars['Int'],
  networkId?: Maybe<Scalars['Int']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseTransferReferralUpdateInput = {
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  document?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisTransferReferral?: Maybe<NullableStringFieldUpdateOperationsInput>,
  networkId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tglTransferReferral?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutTransferreferralsInput>,
};

export type CaseTransferReferralUpdateManyMutationInput = {
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  document?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisTransferReferral?: Maybe<NullableStringFieldUpdateOperationsInput>,
  networkId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tglTransferReferral?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseTransferReferralUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseTransferReferralCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseTransferReferralCreateOrConnectWithoutCaseIdInput>>,
  upsert?: Maybe<Array<CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
  set?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
  delete?: Maybe<Array<CaseTransferReferralWhereUniqueInput>>,
  update?: Maybe<Array<CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseTransferReferralUpdateManyWithWhereWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CaseTransferReferralScalarWhereInput>>,
};

export type CaseTransferReferralUpdateManyWithWhereWithoutCaseIdInput = {
  where: CaseTransferReferralScalarWhereInput,
  data: CaseTransferReferralUpdateManyMutationInput,
};

export type CaseTransferReferralUpdateWithoutCaseIdInput = {
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  document?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisTransferReferral?: Maybe<NullableStringFieldUpdateOperationsInput>,
  networkId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tglTransferReferral?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseTransferReferralWhereUniqueInput,
  data: CaseTransferReferralUpdateWithoutCaseIdInput,
};

export type CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseTransferReferralWhereUniqueInput,
  update: CaseTransferReferralUpdateWithoutCaseIdInput,
  create: CaseTransferReferralCreateWithoutCaseIdInput,
};

export type CaseTransferReferralWhereInput = {
  AND?: Maybe<Array<CaseTransferReferralWhereInput>>,
  OR?: Maybe<Array<CaseTransferReferralWhereInput>>,
  NOT?: Maybe<Array<CaseTransferReferralWhereInput>>,
  id?: Maybe<IntFilter>,
  catatan?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  document?: Maybe<StringNullableFilter>,
  jenisTransferReferral?: Maybe<StringNullableFilter>,
  networkId?: Maybe<IntNullableFilter>,
  tglTransferReferral?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
  caseId?: Maybe<RenamedcaseRelationFilter>,
};

export type CaseTransferReferralWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseTransferRelationFilter = {
  is?: Maybe<CaseTransferWhereInput>,
  isNot?: Maybe<CaseTransferWhereInput>,
};

export enum CaseTransferScalarFieldEnum {
  Id = 'id',
  TglTransfer = 'tglTransfer',
  Catatan = 'catatan',
  CreatedBy = 'createdBy',
  UpdatedBy = 'updatedBy',
  NetworkId = 'networkId'
}

export type CaseTransferScalarWhereInput = {
  AND?: Maybe<Array<CaseTransferScalarWhereInput>>,
  OR?: Maybe<Array<CaseTransferScalarWhereInput>>,
  NOT?: Maybe<Array<CaseTransferScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  tglTransfer?: Maybe<DateTimeNullableFilter>,
  catatan?: Maybe<StringNullableFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  networkId?: Maybe<IntNullableFilter>,
};

export type CaseTransferSumAggregate = {
  id: Scalars['Int'],
  networkId?: Maybe<Scalars['Int']>,
};

export type CaseTransferUpdateInput = {
  tglTransfer?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  network?: Maybe<NetworkUpdateOneWithoutCaseTransferInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutTransferInput>,
};

export type CaseTransferUpdateManyMutationInput = {
  tglTransfer?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseTransferUpdateManyWithoutNetworkInput = {
  create?: Maybe<Array<CaseTransferCreateWithoutNetworkInput>>,
  connectOrCreate?: Maybe<Array<CaseTransferCreateOrConnectWithoutNetworkInput>>,
  upsert?: Maybe<Array<CaseTransferUpsertWithWhereUniqueWithoutNetworkInput>>,
  connect?: Maybe<Array<CaseTransferWhereUniqueInput>>,
  set?: Maybe<Array<CaseTransferWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseTransferWhereUniqueInput>>,
  delete?: Maybe<Array<CaseTransferWhereUniqueInput>>,
  update?: Maybe<Array<CaseTransferUpdateWithWhereUniqueWithoutNetworkInput>>,
  updateMany?: Maybe<Array<CaseTransferUpdateManyWithWhereWithoutNetworkInput>>,
  deleteMany?: Maybe<Array<CaseTransferScalarWhereInput>>,
};

export type CaseTransferUpdateManyWithWhereWithoutNetworkInput = {
  where: CaseTransferScalarWhereInput,
  data: CaseTransferUpdateManyMutationInput,
};

export type CaseTransferUpdateOneWithoutCaseInput = {
  create?: Maybe<CaseTransferCreateWithoutCaseInput>,
  connectOrCreate?: Maybe<CaseTransferCreateOrConnectWithoutCaseInput>,
  upsert?: Maybe<CaseTransferUpsertWithoutCaseInput>,
  connect?: Maybe<CaseTransferWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<CaseTransferUpdateWithoutCaseInput>,
};

export type CaseTransferUpdateWithoutCaseInput = {
  tglTransfer?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  network?: Maybe<NetworkUpdateOneWithoutCaseTransferInput>,
};

export type CaseTransferUpdateWithoutNetworkInput = {
  tglTransfer?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  catatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  case?: Maybe<RenamedcaseUpdateOneWithoutTransferInput>,
};

export type CaseTransferUpdateWithWhereUniqueWithoutNetworkInput = {
  where: CaseTransferWhereUniqueInput,
  data: CaseTransferUpdateWithoutNetworkInput,
};

export type CaseTransferUpsertWithoutCaseInput = {
  update: CaseTransferUpdateWithoutCaseInput,
  create: CaseTransferCreateWithoutCaseInput,
};

export type CaseTransferUpsertWithWhereUniqueWithoutNetworkInput = {
  where: CaseTransferWhereUniqueInput,
  update: CaseTransferUpdateWithoutNetworkInput,
  create: CaseTransferCreateWithoutNetworkInput,
};

export type CaseTransferWhereInput = {
  AND?: Maybe<Array<CaseTransferWhereInput>>,
  OR?: Maybe<Array<CaseTransferWhereInput>>,
  NOT?: Maybe<Array<CaseTransferWhereInput>>,
  id?: Maybe<IntFilter>,
  tglTransfer?: Maybe<DateTimeNullableFilter>,
  catatan?: Maybe<StringNullableFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  networkId?: Maybe<IntNullableFilter>,
  network?: Maybe<NetworkRelationFilter>,
  case?: Maybe<RenamedcaseRelationFilter>,
};

export type CaseTransferWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type CaseViolatedRight = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
  caseId?: Maybe<Renamedcase>,
};

export type CaseViolatedRightAvgAggregate = {
  id: Scalars['Float'],
  case_id?: Maybe<Scalars['Float']>,
};

export type CaseViolatedRightCountAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['Int']>,
  case_id?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type CaseViolatedRightCreateInput = {
  kodeMt?: Maybe<Scalars['String']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutViolatedrightsInput>,
};

export type CaseViolatedRightCreateNestedManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseViolatedRightCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseViolatedRightCreateOrConnectWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
};

export type CaseViolatedRightCreateOrConnectWithoutCaseIdInput = {
  where: CaseViolatedRightWhereUniqueInput,
  create: CaseViolatedRightCreateWithoutCaseIdInput,
};

export type CaseViolatedRightCreateWithoutCaseIdInput = {
  kodeMt?: Maybe<Scalars['String']>,
};

export type CaseViolatedRightListRelationFilter = {
  every?: Maybe<CaseViolatedRightWhereInput>,
  some?: Maybe<CaseViolatedRightWhereInput>,
  none?: Maybe<CaseViolatedRightWhereInput>,
};

export type CaseViolatedRightMaxAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseViolatedRightMinAggregate = {
  id: Scalars['Int'],
  kodeMt?: Maybe<Scalars['String']>,
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseViolatedRightOrderByInput = {
  id?: Maybe<SortOrder>,
  kodeMt?: Maybe<SortOrder>,
  case_id?: Maybe<SortOrder>,
};

export enum CaseViolatedRightScalarFieldEnum {
  Id = 'id',
  KodeMt = 'kodeMt',
  CaseId = 'case_id'
}

export type CaseViolatedRightScalarWhereInput = {
  AND?: Maybe<Array<CaseViolatedRightScalarWhereInput>>,
  OR?: Maybe<Array<CaseViolatedRightScalarWhereInput>>,
  NOT?: Maybe<Array<CaseViolatedRightScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
};

export type CaseViolatedRightSumAggregate = {
  id: Scalars['Int'],
  case_id?: Maybe<Scalars['Int']>,
};

export type CaseViolatedRightUpdateInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutViolatedrightsInput>,
};

export type CaseViolatedRightUpdateManyMutationInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseViolatedRightUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<CaseViolatedRightCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<CaseViolatedRightCreateOrConnectWithoutCaseIdInput>>,
  upsert?: Maybe<Array<CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput>>,
  connect?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
  set?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
  disconnect?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
  delete?: Maybe<Array<CaseViolatedRightWhereUniqueInput>>,
  update?: Maybe<Array<CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<CaseViolatedRightUpdateManyWithWhereWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<CaseViolatedRightScalarWhereInput>>,
};

export type CaseViolatedRightUpdateManyWithWhereWithoutCaseIdInput = {
  where: CaseViolatedRightScalarWhereInput,
  data: CaseViolatedRightUpdateManyMutationInput,
};

export type CaseViolatedRightUpdateWithoutCaseIdInput = {
  kodeMt?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: CaseViolatedRightWhereUniqueInput,
  data: CaseViolatedRightUpdateWithoutCaseIdInput,
};

export type CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: CaseViolatedRightWhereUniqueInput,
  update: CaseViolatedRightUpdateWithoutCaseIdInput,
  create: CaseViolatedRightCreateWithoutCaseIdInput,
};

export type CaseViolatedRightWhereInput = {
  AND?: Maybe<Array<CaseViolatedRightWhereInput>>,
  OR?: Maybe<Array<CaseViolatedRightWhereInput>>,
  NOT?: Maybe<Array<CaseViolatedRightWhereInput>>,
  id?: Maybe<IntFilter>,
  kodeMt?: Maybe<StringNullableFilter>,
  case_id?: Maybe<IntNullableFilter>,
  caseId?: Maybe<RenamedcaseRelationFilter>,
};

export type CaseViolatedRightWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type Client = {
  id: Scalars['Int'],
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  person?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
  applicationId?: Maybe<Application>,
  personId?: Maybe<Person>,
  LogRequest: Array<LogRequest>,
};


export type ClientLogRequestArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestScalarFieldEnum>>
};

export type ClientAvgAggregate = {
  id: Scalars['Float'],
  tanggunganAnak?: Maybe<Scalars['Float']>,
  tanggunganFamili?: Maybe<Scalars['Float']>,
  tanggunganLain?: Maybe<Scalars['Float']>,
  tanggunganPasangan?: Maybe<Scalars['Float']>,
  usiaSaatKlien?: Maybe<Scalars['Float']>,
  person?: Maybe<Scalars['Float']>,
  application?: Maybe<Scalars['Float']>,
};

export type ClientCountAggregate = {
  id: Scalars['Int'],
  alamatLokasi?: Maybe<Scalars['Int']>,
  asetGedung?: Maybe<Scalars['Int']>,
  asetKios?: Maybe<Scalars['Int']>,
  asetLahanGarapan?: Maybe<Scalars['Int']>,
  asetLapak?: Maybe<Scalars['Int']>,
  asetMobil?: Maybe<Scalars['Int']>,
  asetMotor?: Maybe<Scalars['Int']>,
  asetRumah?: Maybe<Scalars['Int']>,
  asetTanah?: Maybe<Scalars['Int']>,
  asetToko?: Maybe<Scalars['Int']>,
  asetWarung?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  pendapatan?: Maybe<Scalars['Int']>,
  sktm?: Maybe<Scalars['Int']>,
  sktmUpload?: Maybe<Scalars['Int']>,
  stmKeterangan?: Maybe<Scalars['Int']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  person?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type ClientCreateInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutClientsInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutClientsInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutClientInput>,
};

export type ClientCreateNestedManyWithoutApplicationIdInput = {
  create?: Maybe<Array<ClientCreateWithoutApplicationIdInput>>,
  connectOrCreate?: Maybe<Array<ClientCreateOrConnectWithoutApplicationIdInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
};

export type ClientCreateNestedManyWithoutLogRequestInput = {
  create?: Maybe<Array<ClientCreateWithoutLogRequestInput>>,
  connectOrCreate?: Maybe<Array<ClientCreateOrConnectWithoutLogRequestInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
};

export type ClientCreateNestedManyWithoutPersonIdInput = {
  create?: Maybe<Array<ClientCreateWithoutPersonIdInput>>,
  connectOrCreate?: Maybe<Array<ClientCreateOrConnectWithoutPersonIdInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
};

export type ClientCreateOrConnectWithoutApplicationIdInput = {
  where: ClientWhereUniqueInput,
  create: ClientCreateWithoutApplicationIdInput,
};

export type ClientCreateOrConnectWithoutLogRequestInput = {
  where: ClientWhereUniqueInput,
  create: ClientCreateWithoutLogRequestInput,
};

export type ClientCreateOrConnectWithoutPersonIdInput = {
  where: ClientWhereUniqueInput,
  create: ClientCreateWithoutPersonIdInput,
};

export type ClientCreateWithoutApplicationIdInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  personId?: Maybe<PersonCreateNestedOneWithoutClientsInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutClientInput>,
};

export type ClientCreateWithoutLogRequestInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutClientsInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutClientsInput>,
};

export type ClientCreateWithoutPersonIdInput = {
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm: Scalars['Boolean'],
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutClientsInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutClientInput>,
};

export type ClientListRelationFilter = {
  every?: Maybe<ClientWhereInput>,
  some?: Maybe<ClientWhereInput>,
  none?: Maybe<ClientWhereInput>,
};

export type ClientMaxAggregate = {
  id: Scalars['Int'],
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm?: Maybe<Scalars['Boolean']>,
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  person?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
};

export type ClientMinAggregate = {
  id: Scalars['Int'],
  alamatLokasi?: Maybe<Scalars['String']>,
  asetGedung?: Maybe<Scalars['String']>,
  asetKios?: Maybe<Scalars['String']>,
  asetLahanGarapan?: Maybe<Scalars['String']>,
  asetLapak?: Maybe<Scalars['String']>,
  asetMobil?: Maybe<Scalars['String']>,
  asetMotor?: Maybe<Scalars['String']>,
  asetRumah?: Maybe<Scalars['String']>,
  asetTanah?: Maybe<Scalars['String']>,
  asetToko?: Maybe<Scalars['String']>,
  asetWarung?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  pendapatan?: Maybe<Scalars['String']>,
  sktm?: Maybe<Scalars['Boolean']>,
  sktmUpload?: Maybe<Scalars['String']>,
  stmKeterangan?: Maybe<Scalars['String']>,
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  person?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
};

export type ClientOrderByInput = {
  id?: Maybe<SortOrder>,
  alamatLokasi?: Maybe<SortOrder>,
  asetGedung?: Maybe<SortOrder>,
  asetKios?: Maybe<SortOrder>,
  asetLahanGarapan?: Maybe<SortOrder>,
  asetLapak?: Maybe<SortOrder>,
  asetMobil?: Maybe<SortOrder>,
  asetMotor?: Maybe<SortOrder>,
  asetRumah?: Maybe<SortOrder>,
  asetTanah?: Maybe<SortOrder>,
  asetToko?: Maybe<SortOrder>,
  asetWarung?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  pendapatan?: Maybe<SortOrder>,
  sktm?: Maybe<SortOrder>,
  sktmUpload?: Maybe<SortOrder>,
  stmKeterangan?: Maybe<SortOrder>,
  tanggunganAnak?: Maybe<SortOrder>,
  tanggunganFamili?: Maybe<SortOrder>,
  tanggunganLain?: Maybe<SortOrder>,
  tanggunganPasangan?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  usiaSaatKlien?: Maybe<SortOrder>,
  person?: Maybe<SortOrder>,
  application?: Maybe<SortOrder>,
};

export enum ClientScalarFieldEnum {
  Id = 'id',
  AlamatLokasi = 'alamatLokasi',
  AsetGedung = 'asetGedung',
  AsetKios = 'asetKios',
  AsetLahanGarapan = 'asetLahanGarapan',
  AsetLapak = 'asetLapak',
  AsetMobil = 'asetMobil',
  AsetMotor = 'asetMotor',
  AsetRumah = 'asetRumah',
  AsetTanah = 'asetTanah',
  AsetToko = 'asetToko',
  AsetWarung = 'asetWarung',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Pendapatan = 'pendapatan',
  Sktm = 'sktm',
  SktmUpload = 'sktmUpload',
  StmKeterangan = 'stmKeterangan',
  TanggunganAnak = 'tanggunganAnak',
  TanggunganFamili = 'tanggunganFamili',
  TanggunganLain = 'tanggunganLain',
  TanggunganPasangan = 'tanggunganPasangan',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  UsiaSaatKlien = 'usiaSaatKlien',
  Person = 'person',
  Application = 'application'
}

export type ClientScalarWhereInput = {
  AND?: Maybe<Array<ClientScalarWhereInput>>,
  OR?: Maybe<Array<ClientScalarWhereInput>>,
  NOT?: Maybe<Array<ClientScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  alamatLokasi?: Maybe<StringNullableFilter>,
  asetGedung?: Maybe<StringNullableFilter>,
  asetKios?: Maybe<StringNullableFilter>,
  asetLahanGarapan?: Maybe<StringNullableFilter>,
  asetLapak?: Maybe<StringNullableFilter>,
  asetMobil?: Maybe<StringNullableFilter>,
  asetMotor?: Maybe<StringNullableFilter>,
  asetRumah?: Maybe<StringNullableFilter>,
  asetTanah?: Maybe<StringNullableFilter>,
  asetToko?: Maybe<StringNullableFilter>,
  asetWarung?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  pendapatan?: Maybe<StringNullableFilter>,
  sktm?: Maybe<BoolFilter>,
  sktmUpload?: Maybe<StringNullableFilter>,
  stmKeterangan?: Maybe<StringNullableFilter>,
  tanggunganAnak?: Maybe<IntNullableFilter>,
  tanggunganFamili?: Maybe<IntNullableFilter>,
  tanggunganLain?: Maybe<IntNullableFilter>,
  tanggunganPasangan?: Maybe<IntNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  usiaSaatKlien?: Maybe<IntNullableFilter>,
  person?: Maybe<IntNullableFilter>,
  application?: Maybe<IntNullableFilter>,
};

export type ClientSumAggregate = {
  id: Scalars['Int'],
  tanggunganAnak?: Maybe<Scalars['Int']>,
  tanggunganFamili?: Maybe<Scalars['Int']>,
  tanggunganLain?: Maybe<Scalars['Int']>,
  tanggunganPasangan?: Maybe<Scalars['Int']>,
  usiaSaatKlien?: Maybe<Scalars['Int']>,
  person?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
};

export type ClientUpdateInput = {
  alamatLokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetGedung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetKios?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLahanGarapan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLapak?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMobil?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMotor?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetRumah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetTanah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetToko?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetWarung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendapatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  sktm?: Maybe<BoolFieldUpdateOperationsInput>,
  sktmUpload?: Maybe<NullableStringFieldUpdateOperationsInput>,
  stmKeterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggunganAnak?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganFamili?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganLain?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganPasangan?: Maybe<NullableIntFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  usiaSaatKlien?: Maybe<NullableIntFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutClientsInput>,
  personId?: Maybe<PersonUpdateOneWithoutClientsInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutClientInput>,
};

export type ClientUpdateManyMutationInput = {
  alamatLokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetGedung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetKios?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLahanGarapan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLapak?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMobil?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMotor?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetRumah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetTanah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetToko?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetWarung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendapatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  sktm?: Maybe<BoolFieldUpdateOperationsInput>,
  sktmUpload?: Maybe<NullableStringFieldUpdateOperationsInput>,
  stmKeterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggunganAnak?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganFamili?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganLain?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganPasangan?: Maybe<NullableIntFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  usiaSaatKlien?: Maybe<NullableIntFieldUpdateOperationsInput>,
};

export type ClientUpdateManyWithoutApplicationIdInput = {
  create?: Maybe<Array<ClientCreateWithoutApplicationIdInput>>,
  connectOrCreate?: Maybe<Array<ClientCreateOrConnectWithoutApplicationIdInput>>,
  upsert?: Maybe<Array<ClientUpsertWithWhereUniqueWithoutApplicationIdInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
  set?: Maybe<Array<ClientWhereUniqueInput>>,
  disconnect?: Maybe<Array<ClientWhereUniqueInput>>,
  delete?: Maybe<Array<ClientWhereUniqueInput>>,
  update?: Maybe<Array<ClientUpdateWithWhereUniqueWithoutApplicationIdInput>>,
  updateMany?: Maybe<Array<ClientUpdateManyWithWhereWithoutApplicationIdInput>>,
  deleteMany?: Maybe<Array<ClientScalarWhereInput>>,
};

export type ClientUpdateManyWithoutLogRequestInput = {
  create?: Maybe<Array<ClientCreateWithoutLogRequestInput>>,
  connectOrCreate?: Maybe<Array<ClientCreateOrConnectWithoutLogRequestInput>>,
  upsert?: Maybe<Array<ClientUpsertWithWhereUniqueWithoutLogRequestInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
  set?: Maybe<Array<ClientWhereUniqueInput>>,
  disconnect?: Maybe<Array<ClientWhereUniqueInput>>,
  delete?: Maybe<Array<ClientWhereUniqueInput>>,
  update?: Maybe<Array<ClientUpdateWithWhereUniqueWithoutLogRequestInput>>,
  updateMany?: Maybe<Array<ClientUpdateManyWithWhereWithoutLogRequestInput>>,
  deleteMany?: Maybe<Array<ClientScalarWhereInput>>,
};

export type ClientUpdateManyWithoutPersonIdInput = {
  create?: Maybe<Array<ClientCreateWithoutPersonIdInput>>,
  connectOrCreate?: Maybe<Array<ClientCreateOrConnectWithoutPersonIdInput>>,
  upsert?: Maybe<Array<ClientUpsertWithWhereUniqueWithoutPersonIdInput>>,
  connect?: Maybe<Array<ClientWhereUniqueInput>>,
  set?: Maybe<Array<ClientWhereUniqueInput>>,
  disconnect?: Maybe<Array<ClientWhereUniqueInput>>,
  delete?: Maybe<Array<ClientWhereUniqueInput>>,
  update?: Maybe<Array<ClientUpdateWithWhereUniqueWithoutPersonIdInput>>,
  updateMany?: Maybe<Array<ClientUpdateManyWithWhereWithoutPersonIdInput>>,
  deleteMany?: Maybe<Array<ClientScalarWhereInput>>,
};

export type ClientUpdateManyWithWhereWithoutApplicationIdInput = {
  where: ClientScalarWhereInput,
  data: ClientUpdateManyMutationInput,
};

export type ClientUpdateManyWithWhereWithoutLogRequestInput = {
  where: ClientScalarWhereInput,
  data: ClientUpdateManyMutationInput,
};

export type ClientUpdateManyWithWhereWithoutPersonIdInput = {
  where: ClientScalarWhereInput,
  data: ClientUpdateManyMutationInput,
};

export type ClientUpdateWithoutApplicationIdInput = {
  alamatLokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetGedung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetKios?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLahanGarapan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLapak?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMobil?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMotor?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetRumah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetTanah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetToko?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetWarung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendapatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  sktm?: Maybe<BoolFieldUpdateOperationsInput>,
  sktmUpload?: Maybe<NullableStringFieldUpdateOperationsInput>,
  stmKeterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggunganAnak?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganFamili?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganLain?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganPasangan?: Maybe<NullableIntFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  usiaSaatKlien?: Maybe<NullableIntFieldUpdateOperationsInput>,
  personId?: Maybe<PersonUpdateOneWithoutClientsInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutClientInput>,
};

export type ClientUpdateWithoutLogRequestInput = {
  alamatLokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetGedung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetKios?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLahanGarapan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLapak?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMobil?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMotor?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetRumah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetTanah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetToko?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetWarung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendapatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  sktm?: Maybe<BoolFieldUpdateOperationsInput>,
  sktmUpload?: Maybe<NullableStringFieldUpdateOperationsInput>,
  stmKeterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggunganAnak?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganFamili?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganLain?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganPasangan?: Maybe<NullableIntFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  usiaSaatKlien?: Maybe<NullableIntFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutClientsInput>,
  personId?: Maybe<PersonUpdateOneWithoutClientsInput>,
};

export type ClientUpdateWithoutPersonIdInput = {
  alamatLokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetGedung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetKios?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLahanGarapan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetLapak?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMobil?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetMotor?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetRumah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetTanah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetToko?: Maybe<NullableStringFieldUpdateOperationsInput>,
  asetWarung?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendapatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  sktm?: Maybe<BoolFieldUpdateOperationsInput>,
  sktmUpload?: Maybe<NullableStringFieldUpdateOperationsInput>,
  stmKeterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggunganAnak?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganFamili?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganLain?: Maybe<NullableIntFieldUpdateOperationsInput>,
  tanggunganPasangan?: Maybe<NullableIntFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  usiaSaatKlien?: Maybe<NullableIntFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutClientsInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutClientInput>,
};

export type ClientUpdateWithWhereUniqueWithoutApplicationIdInput = {
  where: ClientWhereUniqueInput,
  data: ClientUpdateWithoutApplicationIdInput,
};

export type ClientUpdateWithWhereUniqueWithoutLogRequestInput = {
  where: ClientWhereUniqueInput,
  data: ClientUpdateWithoutLogRequestInput,
};

export type ClientUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: ClientWhereUniqueInput,
  data: ClientUpdateWithoutPersonIdInput,
};

export type ClientUpsertWithWhereUniqueWithoutApplicationIdInput = {
  where: ClientWhereUniqueInput,
  update: ClientUpdateWithoutApplicationIdInput,
  create: ClientCreateWithoutApplicationIdInput,
};

export type ClientUpsertWithWhereUniqueWithoutLogRequestInput = {
  where: ClientWhereUniqueInput,
  update: ClientUpdateWithoutLogRequestInput,
  create: ClientCreateWithoutLogRequestInput,
};

export type ClientUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: ClientWhereUniqueInput,
  update: ClientUpdateWithoutPersonIdInput,
  create: ClientCreateWithoutPersonIdInput,
};

export type ClientWhereInput = {
  AND?: Maybe<Array<ClientWhereInput>>,
  OR?: Maybe<Array<ClientWhereInput>>,
  NOT?: Maybe<Array<ClientWhereInput>>,
  id?: Maybe<IntFilter>,
  alamatLokasi?: Maybe<StringNullableFilter>,
  asetGedung?: Maybe<StringNullableFilter>,
  asetKios?: Maybe<StringNullableFilter>,
  asetLahanGarapan?: Maybe<StringNullableFilter>,
  asetLapak?: Maybe<StringNullableFilter>,
  asetMobil?: Maybe<StringNullableFilter>,
  asetMotor?: Maybe<StringNullableFilter>,
  asetRumah?: Maybe<StringNullableFilter>,
  asetTanah?: Maybe<StringNullableFilter>,
  asetToko?: Maybe<StringNullableFilter>,
  asetWarung?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  pendapatan?: Maybe<StringNullableFilter>,
  sktm?: Maybe<BoolFilter>,
  sktmUpload?: Maybe<StringNullableFilter>,
  stmKeterangan?: Maybe<StringNullableFilter>,
  tanggunganAnak?: Maybe<IntNullableFilter>,
  tanggunganFamili?: Maybe<IntNullableFilter>,
  tanggunganLain?: Maybe<IntNullableFilter>,
  tanggunganPasangan?: Maybe<IntNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  usiaSaatKlien?: Maybe<IntNullableFilter>,
  person?: Maybe<IntNullableFilter>,
  application?: Maybe<IntNullableFilter>,
  applicationId?: Maybe<ApplicationRelationFilter>,
  personId?: Maybe<PersonRelationFilter>,
  LogRequest?: Maybe<LogRequestListRelationFilter>,
};

export type ClientWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type DaftarPengacara = {
  ID: Scalars['Int'],
  jabatan?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  sembunyikan: Scalars['Boolean'],
};

export type DaftarPengacaraAvgAggregate = {
  ID: Scalars['Float'],
};

export type DaftarPengacaraCountAggregate = {
  ID: Scalars['Int'],
  jabatan?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type DaftarPengacaraCreateInput = {
  jabatan?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  sembunyikan: Scalars['Boolean'],
};

export type DaftarPengacaraMaxAggregate = {
  ID: Scalars['Int'],
  jabatan?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
};

export type DaftarPengacaraMinAggregate = {
  ID: Scalars['Int'],
  jabatan?: Maybe<Scalars['String']>,
  namaLengkap?: Maybe<Scalars['String']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
};

export type DaftarPengacaraOrderByInput = {
  ID?: Maybe<SortOrder>,
  jabatan?: Maybe<SortOrder>,
  namaLengkap?: Maybe<SortOrder>,
  sembunyikan?: Maybe<SortOrder>,
};

export enum DaftarPengacaraScalarFieldEnum {
  Id = 'ID',
  Jabatan = 'jabatan',
  NamaLengkap = 'namaLengkap',
  Sembunyikan = 'sembunyikan'
}

export type DaftarPengacaraSumAggregate = {
  ID: Scalars['Int'],
};

export type DaftarPengacaraUpdateInput = {
  jabatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  sembunyikan?: Maybe<BoolFieldUpdateOperationsInput>,
};

export type DaftarPengacaraUpdateManyMutationInput = {
  jabatan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  sembunyikan?: Maybe<BoolFieldUpdateOperationsInput>,
};

export type DaftarPengacaraWhereInput = {
  AND?: Maybe<Array<DaftarPengacaraWhereInput>>,
  OR?: Maybe<Array<DaftarPengacaraWhereInput>>,
  NOT?: Maybe<Array<DaftarPengacaraWhereInput>>,
  ID?: Maybe<IntFilter>,
  jabatan?: Maybe<StringNullableFilter>,
  namaLengkap?: Maybe<StringNullableFilter>,
  sembunyikan?: Maybe<BoolFilter>,
};

export type DaftarPengacaraWhereUniqueInput = {
  ID?: Maybe<Scalars['Int']>,
};

export type DataDict = {
  fieldNumber: Scalars['String'],
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
  DataDictLocal: Array<DataDictLocal>,
};


export type DataDictDataDictLocalArgs = {
  where?: Maybe<DataDictLocalWhereInput>,
  orderBy?: Maybe<Array<DataDictLocalOrderByInput>>,
  cursor?: Maybe<DataDictLocalWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<DataDictLocalScalarFieldEnum>>
};

export type DataDictCountAggregate = {
  fieldNumber?: Maybe<Scalars['Int']>,
  dataType?: Maybe<Scalars['Int']>,
  entity?: Maybe<Scalars['Int']>,
  fieldName?: Maybe<Scalars['Int']>,
  fieldType?: Maybe<Scalars['Int']>,
  isRepeat?: Maybe<Scalars['Int']>,
  linkField?: Maybe<Scalars['Int']>,
  linkTable?: Maybe<Scalars['Int']>,
  listCode?: Maybe<Scalars['Int']>,
  required?: Maybe<Scalars['Int']>,
  validation?: Maybe<Scalars['Int']>,
  visibleSelectQuery?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type DataDictCreateInput = {
  fieldNumber?: Maybe<Scalars['String']>,
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
  DataDictLocal?: Maybe<DataDictLocalCreateNestedManyWithoutDataDictInput>,
};

export type DataDictCreateNestedOneWithoutDataDictLocalInput = {
  create?: Maybe<DataDictCreateWithoutDataDictLocalInput>,
  connectOrCreate?: Maybe<DataDictCreateOrConnectWithoutDataDictLocalInput>,
  connect?: Maybe<DataDictWhereUniqueInput>,
};

export type DataDictCreateOrConnectWithoutDataDictLocalInput = {
  where: DataDictWhereUniqueInput,
  create: DataDictCreateWithoutDataDictLocalInput,
};

export type DataDictCreateWithoutDataDictLocalInput = {
  fieldNumber?: Maybe<Scalars['String']>,
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
};

export type DataDictLocal = {
  id: Scalars['Int'],
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
  fieldNumber?: Maybe<Scalars['String']>,
  DataDict?: Maybe<DataDict>,
};

export type DataDictLocalAvgAggregate = {
  id: Scalars['Float'],
};

export type DataDictLocalCountAggregate = {
  id: Scalars['Int'],
  label?: Maybe<Scalars['Int']>,
  lang?: Maybe<Scalars['Int']>,
  fieldNumber?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type DataDictLocalCreateInput = {
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
  DataDict?: Maybe<DataDictCreateNestedOneWithoutDataDictLocalInput>,
};

export type DataDictLocalCreateNestedManyWithoutDataDictInput = {
  create?: Maybe<Array<DataDictLocalCreateWithoutDataDictInput>>,
  connectOrCreate?: Maybe<Array<DataDictLocalCreateOrConnectWithoutDataDictInput>>,
  connect?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
};

export type DataDictLocalCreateOrConnectWithoutDataDictInput = {
  where: DataDictLocalWhereUniqueInput,
  create: DataDictLocalCreateWithoutDataDictInput,
};

export type DataDictLocalCreateWithoutDataDictInput = {
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
};

export type DataDictLocalListRelationFilter = {
  every?: Maybe<DataDictLocalWhereInput>,
  some?: Maybe<DataDictLocalWhereInput>,
  none?: Maybe<DataDictLocalWhereInput>,
};

export type DataDictLocalMaxAggregate = {
  id: Scalars['Int'],
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
  fieldNumber?: Maybe<Scalars['String']>,
};

export type DataDictLocalMinAggregate = {
  id: Scalars['Int'],
  label?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
  fieldNumber?: Maybe<Scalars['String']>,
};

export type DataDictLocalOrderByInput = {
  id?: Maybe<SortOrder>,
  label?: Maybe<SortOrder>,
  lang?: Maybe<SortOrder>,
  fieldNumber?: Maybe<SortOrder>,
};

export enum DataDictLocalScalarFieldEnum {
  Id = 'id',
  Label = 'label',
  Lang = 'lang',
  FieldNumber = 'fieldNumber'
}

export type DataDictLocalScalarWhereInput = {
  AND?: Maybe<Array<DataDictLocalScalarWhereInput>>,
  OR?: Maybe<Array<DataDictLocalScalarWhereInput>>,
  NOT?: Maybe<Array<DataDictLocalScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  label?: Maybe<StringNullableFilter>,
  lang?: Maybe<StringNullableFilter>,
  fieldNumber?: Maybe<StringNullableFilter>,
};

export type DataDictLocalSumAggregate = {
  id: Scalars['Int'],
};

export type DataDictLocalUpdateInput = {
  label?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lang?: Maybe<NullableStringFieldUpdateOperationsInput>,
  DataDict?: Maybe<DataDictUpdateOneWithoutDataDictLocalInput>,
};

export type DataDictLocalUpdateManyMutationInput = {
  label?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lang?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type DataDictLocalUpdateManyWithoutDataDictInput = {
  create?: Maybe<Array<DataDictLocalCreateWithoutDataDictInput>>,
  connectOrCreate?: Maybe<Array<DataDictLocalCreateOrConnectWithoutDataDictInput>>,
  upsert?: Maybe<Array<DataDictLocalUpsertWithWhereUniqueWithoutDataDictInput>>,
  connect?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
  set?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
  disconnect?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
  delete?: Maybe<Array<DataDictLocalWhereUniqueInput>>,
  update?: Maybe<Array<DataDictLocalUpdateWithWhereUniqueWithoutDataDictInput>>,
  updateMany?: Maybe<Array<DataDictLocalUpdateManyWithWhereWithoutDataDictInput>>,
  deleteMany?: Maybe<Array<DataDictLocalScalarWhereInput>>,
};

export type DataDictLocalUpdateManyWithWhereWithoutDataDictInput = {
  where: DataDictLocalScalarWhereInput,
  data: DataDictLocalUpdateManyMutationInput,
};

export type DataDictLocalUpdateWithoutDataDictInput = {
  label?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lang?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type DataDictLocalUpdateWithWhereUniqueWithoutDataDictInput = {
  where: DataDictLocalWhereUniqueInput,
  data: DataDictLocalUpdateWithoutDataDictInput,
};

export type DataDictLocalUpsertWithWhereUniqueWithoutDataDictInput = {
  where: DataDictLocalWhereUniqueInput,
  update: DataDictLocalUpdateWithoutDataDictInput,
  create: DataDictLocalCreateWithoutDataDictInput,
};

export type DataDictLocalWhereInput = {
  AND?: Maybe<Array<DataDictLocalWhereInput>>,
  OR?: Maybe<Array<DataDictLocalWhereInput>>,
  NOT?: Maybe<Array<DataDictLocalWhereInput>>,
  id?: Maybe<IntFilter>,
  label?: Maybe<StringNullableFilter>,
  lang?: Maybe<StringNullableFilter>,
  fieldNumber?: Maybe<StringNullableFilter>,
  DataDict?: Maybe<DataDictRelationFilter>,
};

export type DataDictLocalWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type DataDictMaxAggregate = {
  fieldNumber?: Maybe<Scalars['String']>,
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
};

export type DataDictMinAggregate = {
  fieldNumber?: Maybe<Scalars['String']>,
  dataType?: Maybe<Scalars['String']>,
  entity?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  fieldType?: Maybe<Scalars['String']>,
  isRepeat?: Maybe<Scalars['String']>,
  linkField?: Maybe<Scalars['String']>,
  linkTable?: Maybe<Scalars['String']>,
  listCode?: Maybe<Scalars['String']>,
  required?: Maybe<Scalars['String']>,
  validation?: Maybe<Scalars['String']>,
  visibleSelectQuery?: Maybe<Scalars['String']>,
};

export type DataDictOrderByInput = {
  fieldNumber?: Maybe<SortOrder>,
  dataType?: Maybe<SortOrder>,
  entity?: Maybe<SortOrder>,
  fieldName?: Maybe<SortOrder>,
  fieldType?: Maybe<SortOrder>,
  isRepeat?: Maybe<SortOrder>,
  linkField?: Maybe<SortOrder>,
  linkTable?: Maybe<SortOrder>,
  listCode?: Maybe<SortOrder>,
  required?: Maybe<SortOrder>,
  validation?: Maybe<SortOrder>,
  visibleSelectQuery?: Maybe<SortOrder>,
};

export type DataDictRelationFilter = {
  is?: Maybe<DataDictWhereInput>,
  isNot?: Maybe<DataDictWhereInput>,
};

export enum DataDictScalarFieldEnum {
  FieldNumber = 'fieldNumber',
  DataType = 'dataType',
  Entity = 'entity',
  FieldName = 'fieldName',
  FieldType = 'fieldType',
  IsRepeat = 'isRepeat',
  LinkField = 'linkField',
  LinkTable = 'linkTable',
  ListCode = 'listCode',
  Required = 'required',
  Validation = 'validation',
  VisibleSelectQuery = 'visibleSelectQuery'
}

export type DataDictUpdateInput = {
  fieldNumber?: Maybe<StringFieldUpdateOperationsInput>,
  dataType?: Maybe<NullableStringFieldUpdateOperationsInput>,
  entity?: Maybe<NullableStringFieldUpdateOperationsInput>,
  fieldName?: Maybe<NullableStringFieldUpdateOperationsInput>,
  fieldType?: Maybe<NullableStringFieldUpdateOperationsInput>,
  isRepeat?: Maybe<NullableStringFieldUpdateOperationsInput>,
  linkField?: Maybe<NullableStringFieldUpdateOperationsInput>,
  linkTable?: Maybe<NullableStringFieldUpdateOperationsInput>,
  listCode?: Maybe<NullableStringFieldUpdateOperationsInput>,
  required?: Maybe<NullableStringFieldUpdateOperationsInput>,
  validation?: Maybe<NullableStringFieldUpdateOperationsInput>,
  visibleSelectQuery?: Maybe<NullableStringFieldUpdateOperationsInput>,
  DataDictLocal?: Maybe<DataDictLocalUpdateManyWithoutDataDictInput>,
};

export type DataDictUpdateManyMutationInput = {
  fieldNumber?: Maybe<StringFieldUpdateOperationsInput>,
  dataType?: Maybe<NullableStringFieldUpdateOperationsInput>,
  entity?: Maybe<NullableStringFieldUpdateOperationsInput>,
  fieldName?: Maybe<NullableStringFieldUpdateOperationsInput>,
  fieldType?: Maybe<NullableStringFieldUpdateOperationsInput>,
  isRepeat?: Maybe<NullableStringFieldUpdateOperationsInput>,
  linkField?: Maybe<NullableStringFieldUpdateOperationsInput>,
  linkTable?: Maybe<NullableStringFieldUpdateOperationsInput>,
  listCode?: Maybe<NullableStringFieldUpdateOperationsInput>,
  required?: Maybe<NullableStringFieldUpdateOperationsInput>,
  validation?: Maybe<NullableStringFieldUpdateOperationsInput>,
  visibleSelectQuery?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type DataDictUpdateOneWithoutDataDictLocalInput = {
  create?: Maybe<DataDictCreateWithoutDataDictLocalInput>,
  connectOrCreate?: Maybe<DataDictCreateOrConnectWithoutDataDictLocalInput>,
  upsert?: Maybe<DataDictUpsertWithoutDataDictLocalInput>,
  connect?: Maybe<DataDictWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<DataDictUpdateWithoutDataDictLocalInput>,
};

export type DataDictUpdateWithoutDataDictLocalInput = {
  fieldNumber?: Maybe<StringFieldUpdateOperationsInput>,
  dataType?: Maybe<NullableStringFieldUpdateOperationsInput>,
  entity?: Maybe<NullableStringFieldUpdateOperationsInput>,
  fieldName?: Maybe<NullableStringFieldUpdateOperationsInput>,
  fieldType?: Maybe<NullableStringFieldUpdateOperationsInput>,
  isRepeat?: Maybe<NullableStringFieldUpdateOperationsInput>,
  linkField?: Maybe<NullableStringFieldUpdateOperationsInput>,
  linkTable?: Maybe<NullableStringFieldUpdateOperationsInput>,
  listCode?: Maybe<NullableStringFieldUpdateOperationsInput>,
  required?: Maybe<NullableStringFieldUpdateOperationsInput>,
  validation?: Maybe<NullableStringFieldUpdateOperationsInput>,
  visibleSelectQuery?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type DataDictUpsertWithoutDataDictLocalInput = {
  update: DataDictUpdateWithoutDataDictLocalInput,
  create: DataDictCreateWithoutDataDictLocalInput,
};

export type DataDictWhereInput = {
  AND?: Maybe<Array<DataDictWhereInput>>,
  OR?: Maybe<Array<DataDictWhereInput>>,
  NOT?: Maybe<Array<DataDictWhereInput>>,
  fieldNumber?: Maybe<StringFilter>,
  dataType?: Maybe<StringNullableFilter>,
  entity?: Maybe<StringNullableFilter>,
  fieldName?: Maybe<StringNullableFilter>,
  fieldType?: Maybe<StringNullableFilter>,
  isRepeat?: Maybe<StringNullableFilter>,
  linkField?: Maybe<StringNullableFilter>,
  linkTable?: Maybe<StringNullableFilter>,
  listCode?: Maybe<StringNullableFilter>,
  required?: Maybe<StringNullableFilter>,
  validation?: Maybe<StringNullableFilter>,
  visibleSelectQuery?: Maybe<StringNullableFilter>,
  DataDictLocal?: Maybe<DataDictLocalListRelationFilter>,
};

export type DataDictWhereUniqueInput = {
  fieldNumber?: Maybe<Scalars['String']>,
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>,
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
  not?: Maybe<NestedDateTimeFilter>,
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
  not?: Maybe<NestedDateTimeNullableFilter>,
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  not?: Maybe<NestedIntFilter>,
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  not?: Maybe<NestedIntNullableFilter>,
};

export type LogRequest = {
  ID: Scalars['Int'],
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  person?: Maybe<Scalars['Int']>,
  case?: Maybe<Scalars['Int']>,
  request_by?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
  network?: Maybe<Scalars['Int']>,
  request_to?: Maybe<Scalars['Int']>,
  applicationId?: Maybe<Application>,
  caseId?: Maybe<Renamedcase>,
  networkId?: Maybe<Network>,
  personId?: Maybe<Person>,
  requestBy?: Maybe<User>,
  requestTo?: Maybe<User>,
  pp: Array<LogRequestApp>,
  Client: Array<Client>,
};


export type LogRequestPpArgs = {
  where?: Maybe<LogRequestAppWhereInput>,
  orderBy?: Maybe<Array<LogRequestAppOrderByInput>>,
  cursor?: Maybe<LogRequestAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestAppScalarFieldEnum>>
};


export type LogRequestClientArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<Array<ClientOrderByInput>>,
  cursor?: Maybe<ClientWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<ClientScalarFieldEnum>>
};

export type LogRequestApp = {
  id: Scalars['Int'],
  log_request_id?: Maybe<Scalars['Int']>,
  app_consultation?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['String']>,
  appConsultation?: Maybe<User>,
  logRequestId?: Maybe<LogRequest>,
};

export type LogRequestAppAvgAggregate = {
  id: Scalars['Float'],
  log_request_id?: Maybe<Scalars['Float']>,
  app_consultation?: Maybe<Scalars['Float']>,
};

export type LogRequestAppCountAggregate = {
  id: Scalars['Int'],
  log_request_id?: Maybe<Scalars['Int']>,
  app_consultation?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type LogRequestAppCreateInput = {
  keterangan?: Maybe<Scalars['String']>,
  appConsultation?: Maybe<UserCreateNestedOneWithoutLogRequestAppInput>,
  logRequestId?: Maybe<LogRequestCreateNestedOneWithoutPpInput>,
};

export type LogRequestAppCreateNestedManyWithoutAppConsultationInput = {
  create?: Maybe<Array<LogRequestAppCreateWithoutAppConsultationInput>>,
  connectOrCreate?: Maybe<Array<LogRequestAppCreateOrConnectWithoutAppConsultationInput>>,
  connect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
};

export type LogRequestAppCreateNestedManyWithoutLogRequestIdInput = {
  create?: Maybe<Array<LogRequestAppCreateWithoutLogRequestIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestAppCreateOrConnectWithoutLogRequestIdInput>>,
  connect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
};

export type LogRequestAppCreateOrConnectWithoutAppConsultationInput = {
  where: LogRequestAppWhereUniqueInput,
  create: LogRequestAppCreateWithoutAppConsultationInput,
};

export type LogRequestAppCreateOrConnectWithoutLogRequestIdInput = {
  where: LogRequestAppWhereUniqueInput,
  create: LogRequestAppCreateWithoutLogRequestIdInput,
};

export type LogRequestAppCreateWithoutAppConsultationInput = {
  keterangan?: Maybe<Scalars['String']>,
  logRequestId?: Maybe<LogRequestCreateNestedOneWithoutPpInput>,
};

export type LogRequestAppCreateWithoutLogRequestIdInput = {
  keterangan?: Maybe<Scalars['String']>,
  appConsultation?: Maybe<UserCreateNestedOneWithoutLogRequestAppInput>,
};

export type LogRequestAppListRelationFilter = {
  every?: Maybe<LogRequestAppWhereInput>,
  some?: Maybe<LogRequestAppWhereInput>,
  none?: Maybe<LogRequestAppWhereInput>,
};

export type LogRequestAppMaxAggregate = {
  id: Scalars['Int'],
  log_request_id?: Maybe<Scalars['Int']>,
  app_consultation?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['String']>,
};

export type LogRequestAppMinAggregate = {
  id: Scalars['Int'],
  log_request_id?: Maybe<Scalars['Int']>,
  app_consultation?: Maybe<Scalars['Int']>,
  keterangan?: Maybe<Scalars['String']>,
};

export type LogRequestAppOrderByInput = {
  id?: Maybe<SortOrder>,
  log_request_id?: Maybe<SortOrder>,
  app_consultation?: Maybe<SortOrder>,
  keterangan?: Maybe<SortOrder>,
};

export enum LogRequestAppScalarFieldEnum {
  Id = 'id',
  LogRequestId = 'log_request_id',
  AppConsultation = 'app_consultation',
  Keterangan = 'keterangan'
}

export type LogRequestAppScalarWhereInput = {
  AND?: Maybe<Array<LogRequestAppScalarWhereInput>>,
  OR?: Maybe<Array<LogRequestAppScalarWhereInput>>,
  NOT?: Maybe<Array<LogRequestAppScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  log_request_id?: Maybe<IntNullableFilter>,
  app_consultation?: Maybe<IntNullableFilter>,
  keterangan?: Maybe<StringNullableFilter>,
};

export type LogRequestAppSumAggregate = {
  id: Scalars['Int'],
  log_request_id?: Maybe<Scalars['Int']>,
  app_consultation?: Maybe<Scalars['Int']>,
};

export type LogRequestAppUpdateInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  appConsultation?: Maybe<UserUpdateOneWithoutLogRequestAppInput>,
  logRequestId?: Maybe<LogRequestUpdateOneWithoutPpInput>,
};

export type LogRequestAppUpdateManyMutationInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type LogRequestAppUpdateManyWithoutAppConsultationInput = {
  create?: Maybe<Array<LogRequestAppCreateWithoutAppConsultationInput>>,
  connectOrCreate?: Maybe<Array<LogRequestAppCreateOrConnectWithoutAppConsultationInput>>,
  upsert?: Maybe<Array<LogRequestAppUpsertWithWhereUniqueWithoutAppConsultationInput>>,
  connect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestAppUpdateWithWhereUniqueWithoutAppConsultationInput>>,
  updateMany?: Maybe<Array<LogRequestAppUpdateManyWithWhereWithoutAppConsultationInput>>,
  deleteMany?: Maybe<Array<LogRequestAppScalarWhereInput>>,
};

export type LogRequestAppUpdateManyWithoutLogRequestIdInput = {
  create?: Maybe<Array<LogRequestAppCreateWithoutLogRequestIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestAppCreateOrConnectWithoutLogRequestIdInput>>,
  upsert?: Maybe<Array<LogRequestAppUpsertWithWhereUniqueWithoutLogRequestIdInput>>,
  connect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestAppWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestAppUpdateWithWhereUniqueWithoutLogRequestIdInput>>,
  updateMany?: Maybe<Array<LogRequestAppUpdateManyWithWhereWithoutLogRequestIdInput>>,
  deleteMany?: Maybe<Array<LogRequestAppScalarWhereInput>>,
};

export type LogRequestAppUpdateManyWithWhereWithoutAppConsultationInput = {
  where: LogRequestAppScalarWhereInput,
  data: LogRequestAppUpdateManyMutationInput,
};

export type LogRequestAppUpdateManyWithWhereWithoutLogRequestIdInput = {
  where: LogRequestAppScalarWhereInput,
  data: LogRequestAppUpdateManyMutationInput,
};

export type LogRequestAppUpdateWithoutAppConsultationInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  logRequestId?: Maybe<LogRequestUpdateOneWithoutPpInput>,
};

export type LogRequestAppUpdateWithoutLogRequestIdInput = {
  keterangan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  appConsultation?: Maybe<UserUpdateOneWithoutLogRequestAppInput>,
};

export type LogRequestAppUpdateWithWhereUniqueWithoutAppConsultationInput = {
  where: LogRequestAppWhereUniqueInput,
  data: LogRequestAppUpdateWithoutAppConsultationInput,
};

export type LogRequestAppUpdateWithWhereUniqueWithoutLogRequestIdInput = {
  where: LogRequestAppWhereUniqueInput,
  data: LogRequestAppUpdateWithoutLogRequestIdInput,
};

export type LogRequestAppUpsertWithWhereUniqueWithoutAppConsultationInput = {
  where: LogRequestAppWhereUniqueInput,
  update: LogRequestAppUpdateWithoutAppConsultationInput,
  create: LogRequestAppCreateWithoutAppConsultationInput,
};

export type LogRequestAppUpsertWithWhereUniqueWithoutLogRequestIdInput = {
  where: LogRequestAppWhereUniqueInput,
  update: LogRequestAppUpdateWithoutLogRequestIdInput,
  create: LogRequestAppCreateWithoutLogRequestIdInput,
};

export type LogRequestAppWhereInput = {
  AND?: Maybe<Array<LogRequestAppWhereInput>>,
  OR?: Maybe<Array<LogRequestAppWhereInput>>,
  NOT?: Maybe<Array<LogRequestAppWhereInput>>,
  id?: Maybe<IntFilter>,
  log_request_id?: Maybe<IntNullableFilter>,
  app_consultation?: Maybe<IntNullableFilter>,
  keterangan?: Maybe<StringNullableFilter>,
  appConsultation?: Maybe<UserRelationFilter>,
  logRequestId?: Maybe<LogRequestRelationFilter>,
};

export type LogRequestAppWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type LogRequestAvgAggregate = {
  ID: Scalars['Float'],
  person?: Maybe<Scalars['Float']>,
  case?: Maybe<Scalars['Float']>,
  request_by?: Maybe<Scalars['Float']>,
  application?: Maybe<Scalars['Float']>,
  network?: Maybe<Scalars['Float']>,
  request_to?: Maybe<Scalars['Float']>,
};

export type LogRequestCountAggregate = {
  ID: Scalars['Int'],
  isiRequest?: Maybe<Scalars['Int']>,
  jenisRequest?: Maybe<Scalars['Int']>,
  statusRequest?: Maybe<Scalars['Int']>,
  tanggapanRequest?: Maybe<Scalars['Int']>,
  tanggapanRequestIsi?: Maybe<Scalars['Int']>,
  tglExpired?: Maybe<Scalars['Int']>,
  tglRequest?: Maybe<Scalars['Int']>,
  tglRespon?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  person?: Maybe<Scalars['Int']>,
  case?: Maybe<Scalars['Int']>,
  request_by?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
  network?: Maybe<Scalars['Int']>,
  request_to?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type LogRequestCreateInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkCreateNestedOneWithoutLogRequestInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserCreateNestedOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateNestedOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppCreateNestedManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientCreateNestedManyWithoutLogRequestInput>,
};

export type LogRequestCreateNestedManyWithoutApplicationIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutApplicationIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutApplicationIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateNestedManyWithoutCaseIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutCaseIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateNestedManyWithoutClientInput = {
  create?: Maybe<Array<LogRequestCreateWithoutClientInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutClientInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateNestedManyWithoutNetworkIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutNetworkIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutNetworkIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateNestedManyWithoutPersonIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutPersonIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutPersonIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateNestedManyWithoutRequestByInput = {
  create?: Maybe<Array<LogRequestCreateWithoutRequestByInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutRequestByInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateNestedManyWithoutRequestToInput = {
  create?: Maybe<Array<LogRequestCreateWithoutRequestToInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutRequestToInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
};

export type LogRequestCreateNestedOneWithoutPpInput = {
  create?: Maybe<LogRequestCreateWithoutPpInput>,
  connectOrCreate?: Maybe<LogRequestCreateOrConnectWithoutPpInput>,
  connect?: Maybe<LogRequestWhereUniqueInput>,
};

export type LogRequestCreateOrConnectWithoutApplicationIdInput = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateWithoutApplicationIdInput,
};

export type LogRequestCreateOrConnectWithoutCaseIdInput = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateWithoutCaseIdInput,
};

export type LogRequestCreateOrConnectWithoutClientInput = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateWithoutClientInput,
};

export type LogRequestCreateOrConnectWithoutNetworkIdInput = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateWithoutNetworkIdInput,
};

export type LogRequestCreateOrConnectWithoutPersonIdInput = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateWithoutPersonIdInput,
};

export type LogRequestCreateOrConnectWithoutPpInput = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateWithoutPpInput,
};

export type LogRequestCreateOrConnectWithoutRequestByInput = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateWithoutRequestByInput,
};

export type LogRequestCreateOrConnectWithoutRequestToInput = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateWithoutRequestToInput,
};

export type LogRequestCreateWithoutApplicationIdInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkCreateNestedOneWithoutLogRequestInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserCreateNestedOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateNestedOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppCreateNestedManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientCreateNestedManyWithoutLogRequestInput>,
};

export type LogRequestCreateWithoutCaseIdInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutLogRequestInput>,
  networkId?: Maybe<NetworkCreateNestedOneWithoutLogRequestInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserCreateNestedOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateNestedOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppCreateNestedManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientCreateNestedManyWithoutLogRequestInput>,
};

export type LogRequestCreateWithoutClientInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkCreateNestedOneWithoutLogRequestInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserCreateNestedOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateNestedOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppCreateNestedManyWithoutLogRequestIdInput>,
};

export type LogRequestCreateWithoutNetworkIdInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserCreateNestedOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateNestedOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppCreateNestedManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientCreateNestedManyWithoutLogRequestInput>,
};

export type LogRequestCreateWithoutPersonIdInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkCreateNestedOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserCreateNestedOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateNestedOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppCreateNestedManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientCreateNestedManyWithoutLogRequestInput>,
};

export type LogRequestCreateWithoutPpInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkCreateNestedOneWithoutLogRequestInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserCreateNestedOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserCreateNestedOneWithoutLogRequestToInput>,
  Client?: Maybe<ClientCreateNestedManyWithoutLogRequestInput>,
};

export type LogRequestCreateWithoutRequestByInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkCreateNestedOneWithoutLogRequestInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutLogRequestInput>,
  requestTo?: Maybe<UserCreateNestedOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppCreateNestedManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientCreateNestedManyWithoutLogRequestInput>,
};

export type LogRequestCreateWithoutRequestToInput = {
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  applicationId?: Maybe<ApplicationCreateNestedOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseCreateNestedOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkCreateNestedOneWithoutLogRequestInput>,
  personId?: Maybe<PersonCreateNestedOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserCreateNestedOneWithoutLogRequestByInput>,
  pp?: Maybe<LogRequestAppCreateNestedManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientCreateNestedManyWithoutLogRequestInput>,
};

export type LogRequestListRelationFilter = {
  every?: Maybe<LogRequestWhereInput>,
  some?: Maybe<LogRequestWhereInput>,
  none?: Maybe<LogRequestWhereInput>,
};

export type LogRequestMaxAggregate = {
  ID: Scalars['Int'],
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  person?: Maybe<Scalars['Int']>,
  case?: Maybe<Scalars['Int']>,
  request_by?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
  network?: Maybe<Scalars['Int']>,
  request_to?: Maybe<Scalars['Int']>,
};

export type LogRequestMinAggregate = {
  ID: Scalars['Int'],
  isiRequest?: Maybe<Scalars['String']>,
  jenisRequest?: Maybe<Scalars['String']>,
  statusRequest?: Maybe<Scalars['String']>,
  tanggapanRequest?: Maybe<Scalars['String']>,
  tanggapanRequestIsi?: Maybe<Scalars['String']>,
  tglExpired?: Maybe<Scalars['DateTime']>,
  tglRequest?: Maybe<Scalars['DateTime']>,
  tglRespon?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  person?: Maybe<Scalars['Int']>,
  case?: Maybe<Scalars['Int']>,
  request_by?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
  network?: Maybe<Scalars['Int']>,
  request_to?: Maybe<Scalars['Int']>,
};

export type LogRequestOrderByInput = {
  ID?: Maybe<SortOrder>,
  isiRequest?: Maybe<SortOrder>,
  jenisRequest?: Maybe<SortOrder>,
  statusRequest?: Maybe<SortOrder>,
  tanggapanRequest?: Maybe<SortOrder>,
  tanggapanRequestIsi?: Maybe<SortOrder>,
  tglExpired?: Maybe<SortOrder>,
  tglRequest?: Maybe<SortOrder>,
  tglRespon?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  person?: Maybe<SortOrder>,
  case?: Maybe<SortOrder>,
  request_by?: Maybe<SortOrder>,
  application?: Maybe<SortOrder>,
  network?: Maybe<SortOrder>,
  request_to?: Maybe<SortOrder>,
};

export type LogRequestRelationFilter = {
  is?: Maybe<LogRequestWhereInput>,
  isNot?: Maybe<LogRequestWhereInput>,
};

export enum LogRequestScalarFieldEnum {
  Id = 'ID',
  IsiRequest = 'isiRequest',
  JenisRequest = 'jenisRequest',
  StatusRequest = 'statusRequest',
  TanggapanRequest = 'tanggapanRequest',
  TanggapanRequestIsi = 'tanggapanRequestIsi',
  TglExpired = 'tglExpired',
  TglRequest = 'tglRequest',
  TglRespon = 'tglRespon',
  UpdatedAt = 'updatedAt',
  Person = 'person',
  Case = 'case',
  RequestBy = 'request_by',
  Application = 'application',
  Network = 'network',
  RequestTo = 'request_to'
}

export type LogRequestScalarWhereInput = {
  AND?: Maybe<Array<LogRequestScalarWhereInput>>,
  OR?: Maybe<Array<LogRequestScalarWhereInput>>,
  NOT?: Maybe<Array<LogRequestScalarWhereInput>>,
  ID?: Maybe<IntFilter>,
  isiRequest?: Maybe<StringNullableFilter>,
  jenisRequest?: Maybe<StringNullableFilter>,
  statusRequest?: Maybe<StringNullableFilter>,
  tanggapanRequest?: Maybe<StringNullableFilter>,
  tanggapanRequestIsi?: Maybe<StringNullableFilter>,
  tglExpired?: Maybe<DateTimeNullableFilter>,
  tglRequest?: Maybe<DateTimeNullableFilter>,
  tglRespon?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeNullableFilter>,
  person?: Maybe<IntNullableFilter>,
  case?: Maybe<IntNullableFilter>,
  request_by?: Maybe<IntNullableFilter>,
  application?: Maybe<IntNullableFilter>,
  network?: Maybe<IntNullableFilter>,
  request_to?: Maybe<IntNullableFilter>,
};

export type LogRequestSumAggregate = {
  ID: Scalars['Int'],
  person?: Maybe<Scalars['Int']>,
  case?: Maybe<Scalars['Int']>,
  request_by?: Maybe<Scalars['Int']>,
  application?: Maybe<Scalars['Int']>,
  network?: Maybe<Scalars['Int']>,
  request_to?: Maybe<Scalars['Int']>,
};

export type LogRequestUpdateInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientUpdateManyWithoutLogRequestInput>,
};

export type LogRequestUpdateManyMutationInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
};

export type LogRequestUpdateManyWithoutApplicationIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutApplicationIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutApplicationIdInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutApplicationIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutApplicationIdInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereWithoutApplicationIdInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
};

export type LogRequestUpdateManyWithoutCaseIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutCaseIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutCaseIdInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutCaseIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutCaseIdInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereWithoutCaseIdInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
};

export type LogRequestUpdateManyWithoutClientInput = {
  create?: Maybe<Array<LogRequestCreateWithoutClientInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutClientInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutClientInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutClientInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereWithoutClientInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
};

export type LogRequestUpdateManyWithoutNetworkIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutNetworkIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutNetworkIdInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutNetworkIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutNetworkIdInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereWithoutNetworkIdInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
};

export type LogRequestUpdateManyWithoutPersonIdInput = {
  create?: Maybe<Array<LogRequestCreateWithoutPersonIdInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutPersonIdInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutPersonIdInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutPersonIdInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereWithoutPersonIdInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
};

export type LogRequestUpdateManyWithoutRequestByInput = {
  create?: Maybe<Array<LogRequestCreateWithoutRequestByInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutRequestByInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutRequestByInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutRequestByInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereWithoutRequestByInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
};

export type LogRequestUpdateManyWithoutRequestToInput = {
  create?: Maybe<Array<LogRequestCreateWithoutRequestToInput>>,
  connectOrCreate?: Maybe<Array<LogRequestCreateOrConnectWithoutRequestToInput>>,
  upsert?: Maybe<Array<LogRequestUpsertWithWhereUniqueWithoutRequestToInput>>,
  connect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  set?: Maybe<Array<LogRequestWhereUniqueInput>>,
  disconnect?: Maybe<Array<LogRequestWhereUniqueInput>>,
  delete?: Maybe<Array<LogRequestWhereUniqueInput>>,
  update?: Maybe<Array<LogRequestUpdateWithWhereUniqueWithoutRequestToInput>>,
  updateMany?: Maybe<Array<LogRequestUpdateManyWithWhereWithoutRequestToInput>>,
  deleteMany?: Maybe<Array<LogRequestScalarWhereInput>>,
};

export type LogRequestUpdateManyWithWhereWithoutApplicationIdInput = {
  where: LogRequestScalarWhereInput,
  data: LogRequestUpdateManyMutationInput,
};

export type LogRequestUpdateManyWithWhereWithoutCaseIdInput = {
  where: LogRequestScalarWhereInput,
  data: LogRequestUpdateManyMutationInput,
};

export type LogRequestUpdateManyWithWhereWithoutClientInput = {
  where: LogRequestScalarWhereInput,
  data: LogRequestUpdateManyMutationInput,
};

export type LogRequestUpdateManyWithWhereWithoutNetworkIdInput = {
  where: LogRequestScalarWhereInput,
  data: LogRequestUpdateManyMutationInput,
};

export type LogRequestUpdateManyWithWhereWithoutPersonIdInput = {
  where: LogRequestScalarWhereInput,
  data: LogRequestUpdateManyMutationInput,
};

export type LogRequestUpdateManyWithWhereWithoutRequestByInput = {
  where: LogRequestScalarWhereInput,
  data: LogRequestUpdateManyMutationInput,
};

export type LogRequestUpdateManyWithWhereWithoutRequestToInput = {
  where: LogRequestScalarWhereInput,
  data: LogRequestUpdateManyMutationInput,
};

export type LogRequestUpdateOneWithoutPpInput = {
  create?: Maybe<LogRequestCreateWithoutPpInput>,
  connectOrCreate?: Maybe<LogRequestCreateOrConnectWithoutPpInput>,
  upsert?: Maybe<LogRequestUpsertWithoutPpInput>,
  connect?: Maybe<LogRequestWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<LogRequestUpdateWithoutPpInput>,
};

export type LogRequestUpdateWithoutApplicationIdInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientUpdateManyWithoutLogRequestInput>,
};

export type LogRequestUpdateWithoutCaseIdInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutLogRequestInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientUpdateManyWithoutLogRequestInput>,
};

export type LogRequestUpdateWithoutClientInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
};

export type LogRequestUpdateWithoutNetworkIdInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutLogRequestsInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientUpdateManyWithoutLogRequestInput>,
};

export type LogRequestUpdateWithoutPersonIdInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientUpdateManyWithoutLogRequestInput>,
};

export type LogRequestUpdateWithoutPpInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
  Client?: Maybe<ClientUpdateManyWithoutLogRequestInput>,
};

export type LogRequestUpdateWithoutRequestByInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestInput>,
  requestTo?: Maybe<UserUpdateOneWithoutLogRequestToInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientUpdateManyWithoutLogRequestInput>,
};

export type LogRequestUpdateWithoutRequestToInput = {
  isiRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequest?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tanggapanRequestIsi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglExpired?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRequest?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tglRespon?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  applicationId?: Maybe<ApplicationUpdateOneWithoutLogRequestInput>,
  caseId?: Maybe<RenamedcaseUpdateOneWithoutLogRequestsInput>,
  networkId?: Maybe<NetworkUpdateOneWithoutLogRequestInput>,
  personId?: Maybe<PersonUpdateOneWithoutLogRequestInput>,
  requestBy?: Maybe<UserUpdateOneWithoutLogRequestByInput>,
  pp?: Maybe<LogRequestAppUpdateManyWithoutLogRequestIdInput>,
  Client?: Maybe<ClientUpdateManyWithoutLogRequestInput>,
};

export type LogRequestUpdateWithWhereUniqueWithoutApplicationIdInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutApplicationIdInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutCaseIdInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutCaseIdInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutClientInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutClientInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutNetworkIdInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutNetworkIdInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutPersonIdInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutPersonIdInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutRequestByInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutRequestByInput,
};

export type LogRequestUpdateWithWhereUniqueWithoutRequestToInput = {
  where: LogRequestWhereUniqueInput,
  data: LogRequestUpdateWithoutRequestToInput,
};

export type LogRequestUpsertWithoutPpInput = {
  update: LogRequestUpdateWithoutPpInput,
  create: LogRequestCreateWithoutPpInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutApplicationIdInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutApplicationIdInput,
  create: LogRequestCreateWithoutApplicationIdInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutCaseIdInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutCaseIdInput,
  create: LogRequestCreateWithoutCaseIdInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutClientInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutClientInput,
  create: LogRequestCreateWithoutClientInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutNetworkIdInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutNetworkIdInput,
  create: LogRequestCreateWithoutNetworkIdInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutPersonIdInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutPersonIdInput,
  create: LogRequestCreateWithoutPersonIdInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutRequestByInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutRequestByInput,
  create: LogRequestCreateWithoutRequestByInput,
};

export type LogRequestUpsertWithWhereUniqueWithoutRequestToInput = {
  where: LogRequestWhereUniqueInput,
  update: LogRequestUpdateWithoutRequestToInput,
  create: LogRequestCreateWithoutRequestToInput,
};

export type LogRequestWhereInput = {
  AND?: Maybe<Array<LogRequestWhereInput>>,
  OR?: Maybe<Array<LogRequestWhereInput>>,
  NOT?: Maybe<Array<LogRequestWhereInput>>,
  ID?: Maybe<IntFilter>,
  isiRequest?: Maybe<StringNullableFilter>,
  jenisRequest?: Maybe<StringNullableFilter>,
  statusRequest?: Maybe<StringNullableFilter>,
  tanggapanRequest?: Maybe<StringNullableFilter>,
  tanggapanRequestIsi?: Maybe<StringNullableFilter>,
  tglExpired?: Maybe<DateTimeNullableFilter>,
  tglRequest?: Maybe<DateTimeNullableFilter>,
  tglRespon?: Maybe<DateTimeNullableFilter>,
  updatedAt?: Maybe<DateTimeNullableFilter>,
  person?: Maybe<IntNullableFilter>,
  case?: Maybe<IntNullableFilter>,
  request_by?: Maybe<IntNullableFilter>,
  application?: Maybe<IntNullableFilter>,
  network?: Maybe<IntNullableFilter>,
  request_to?: Maybe<IntNullableFilter>,
  applicationId?: Maybe<ApplicationRelationFilter>,
  caseId?: Maybe<RenamedcaseRelationFilter>,
  networkId?: Maybe<NetworkRelationFilter>,
  personId?: Maybe<PersonRelationFilter>,
  requestBy?: Maybe<UserRelationFilter>,
  requestTo?: Maybe<UserRelationFilter>,
  pp?: Maybe<LogRequestAppListRelationFilter>,
  Client?: Maybe<ClientListRelationFilter>,
};

export type LogRequestWhereUniqueInput = {
  ID?: Maybe<Scalars['Int']>,
};

export type MtVocab = {
  KODE: Scalars['String'],
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan: Scalars['Boolean'],
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
  kode_list_group?: Maybe<Scalars['Int']>,
  kode_list?: Maybe<MtVocabGroup>,
};

export type MtVocabAvgAggregate = {
  level?: Maybe<Scalars['Float']>,
  urutan?: Maybe<Scalars['Float']>,
  kode_list_group?: Maybe<Scalars['Float']>,
};

export type MtVocabCountAggregate = {
  KODE?: Maybe<Scalars['Int']>,
  kode_induk?: Maybe<Scalars['Int']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Int']>,
  teks?: Maybe<Scalars['Int']>,
  urutan?: Maybe<Scalars['Int']>,
  kode_list_group?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type MtVocabCreateInput = {
  KODE?: Maybe<Scalars['String']>,
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan: Scalars['Boolean'],
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
  kode_list?: Maybe<MtVocabGroupCreateNestedOneWithoutMtvocabsInput>,
};

export type MtVocabCreateNestedManyWithoutKode_ListInput = {
  create?: Maybe<Array<MtVocabCreateWithoutKode_ListInput>>,
  connectOrCreate?: Maybe<Array<MtVocabCreateOrConnectWithoutKode_ListInput>>,
  connect?: Maybe<Array<MtVocabWhereUniqueInput>>,
};

export type MtVocabCreateOrConnectWithoutKode_ListInput = {
  where: MtVocabWhereUniqueInput,
  create: MtVocabCreateWithoutKode_ListInput,
};

export type MtVocabCreateWithoutKode_ListInput = {
  KODE?: Maybe<Scalars['String']>,
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan: Scalars['Boolean'],
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
};

export type MtVocabGroup = {
  kode_list: Scalars['Int'],
  nama_list?: Maybe<Scalars['String']>,
  mtvocabs: Array<MtVocab>,
};


export type MtVocabGroupMtvocabsArgs = {
  where?: Maybe<MtVocabWhereInput>,
  orderBy?: Maybe<Array<MtVocabOrderByInput>>,
  cursor?: Maybe<MtVocabWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<MtVocabScalarFieldEnum>>
};

export type MtVocabGroupAvgAggregate = {
  kode_list: Scalars['Float'],
};

export type MtVocabGroupCountAggregate = {
  kode_list: Scalars['Int'],
  nama_list?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type MtVocabGroupCreateInput = {
  nama_list?: Maybe<Scalars['String']>,
  mtvocabs?: Maybe<MtVocabCreateNestedManyWithoutKode_ListInput>,
};

export type MtVocabGroupCreateNestedOneWithoutMtvocabsInput = {
  create?: Maybe<MtVocabGroupCreateWithoutMtvocabsInput>,
  connectOrCreate?: Maybe<MtVocabGroupCreateOrConnectWithoutMtvocabsInput>,
  connect?: Maybe<MtVocabGroupWhereUniqueInput>,
};

export type MtVocabGroupCreateOrConnectWithoutMtvocabsInput = {
  where: MtVocabGroupWhereUniqueInput,
  create: MtVocabGroupCreateWithoutMtvocabsInput,
};

export type MtVocabGroupCreateWithoutMtvocabsInput = {
  nama_list?: Maybe<Scalars['String']>,
};

export type MtVocabGroupMaxAggregate = {
  kode_list: Scalars['Int'],
  nama_list?: Maybe<Scalars['String']>,
};

export type MtVocabGroupMinAggregate = {
  kode_list: Scalars['Int'],
  nama_list?: Maybe<Scalars['String']>,
};

export type MtVocabGroupOrderByInput = {
  kode_list?: Maybe<SortOrder>,
  nama_list?: Maybe<SortOrder>,
};

export type MtVocabGroupRelationFilter = {
  is?: Maybe<MtVocabGroupWhereInput>,
  isNot?: Maybe<MtVocabGroupWhereInput>,
};

export enum MtVocabGroupScalarFieldEnum {
  KodeList = 'kode_list',
  NamaList = 'nama_list'
}

export type MtVocabGroupSumAggregate = {
  kode_list: Scalars['Int'],
};

export type MtVocabGroupUpdateInput = {
  nama_list?: Maybe<NullableStringFieldUpdateOperationsInput>,
  mtvocabs?: Maybe<MtVocabUpdateManyWithoutKode_ListInput>,
};

export type MtVocabGroupUpdateManyMutationInput = {
  nama_list?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type MtVocabGroupUpdateOneWithoutMtvocabsInput = {
  create?: Maybe<MtVocabGroupCreateWithoutMtvocabsInput>,
  connectOrCreate?: Maybe<MtVocabGroupCreateOrConnectWithoutMtvocabsInput>,
  upsert?: Maybe<MtVocabGroupUpsertWithoutMtvocabsInput>,
  connect?: Maybe<MtVocabGroupWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<MtVocabGroupUpdateWithoutMtvocabsInput>,
};

export type MtVocabGroupUpdateWithoutMtvocabsInput = {
  nama_list?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type MtVocabGroupUpsertWithoutMtvocabsInput = {
  update: MtVocabGroupUpdateWithoutMtvocabsInput,
  create: MtVocabGroupCreateWithoutMtvocabsInput,
};

export type MtVocabGroupWhereInput = {
  AND?: Maybe<Array<MtVocabGroupWhereInput>>,
  OR?: Maybe<Array<MtVocabGroupWhereInput>>,
  NOT?: Maybe<Array<MtVocabGroupWhereInput>>,
  kode_list?: Maybe<IntFilter>,
  nama_list?: Maybe<StringNullableFilter>,
  mtvocabs?: Maybe<MtVocabListRelationFilter>,
};

export type MtVocabGroupWhereUniqueInput = {
  kode_list?: Maybe<Scalars['Int']>,
};

export type MtVocabListRelationFilter = {
  every?: Maybe<MtVocabWhereInput>,
  some?: Maybe<MtVocabWhereInput>,
  none?: Maybe<MtVocabWhereInput>,
};

export type MtVocabMaxAggregate = {
  KODE?: Maybe<Scalars['String']>,
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
  kode_list_group?: Maybe<Scalars['Int']>,
};

export type MtVocabMinAggregate = {
  KODE?: Maybe<Scalars['String']>,
  kode_induk?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['Int']>,
  sembunyikan?: Maybe<Scalars['Boolean']>,
  teks?: Maybe<Scalars['String']>,
  urutan?: Maybe<Scalars['Int']>,
  kode_list_group?: Maybe<Scalars['Int']>,
};

export type MtVocabOrderByInput = {
  KODE?: Maybe<SortOrder>,
  kode_induk?: Maybe<SortOrder>,
  level?: Maybe<SortOrder>,
  sembunyikan?: Maybe<SortOrder>,
  teks?: Maybe<SortOrder>,
  urutan?: Maybe<SortOrder>,
  kode_list_group?: Maybe<SortOrder>,
};

export enum MtVocabScalarFieldEnum {
  Kode = 'KODE',
  KodeInduk = 'kode_induk',
  Level = 'level',
  Sembunyikan = 'sembunyikan',
  Teks = 'teks',
  Urutan = 'urutan',
  KodeListGroup = 'kode_list_group'
}

export type MtVocabScalarWhereInput = {
  AND?: Maybe<Array<MtVocabScalarWhereInput>>,
  OR?: Maybe<Array<MtVocabScalarWhereInput>>,
  NOT?: Maybe<Array<MtVocabScalarWhereInput>>,
  KODE?: Maybe<StringFilter>,
  kode_induk?: Maybe<StringNullableFilter>,
  level?: Maybe<IntNullableFilter>,
  sembunyikan?: Maybe<BoolFilter>,
  teks?: Maybe<StringNullableFilter>,
  urutan?: Maybe<IntNullableFilter>,
  kode_list_group?: Maybe<IntNullableFilter>,
};

export type MtVocabSumAggregate = {
  level?: Maybe<Scalars['Int']>,
  urutan?: Maybe<Scalars['Int']>,
  kode_list_group?: Maybe<Scalars['Int']>,
};

export type MtVocabUpdateInput = {
  KODE?: Maybe<StringFieldUpdateOperationsInput>,
  kode_induk?: Maybe<NullableStringFieldUpdateOperationsInput>,
  level?: Maybe<NullableIntFieldUpdateOperationsInput>,
  sembunyikan?: Maybe<BoolFieldUpdateOperationsInput>,
  teks?: Maybe<NullableStringFieldUpdateOperationsInput>,
  urutan?: Maybe<NullableIntFieldUpdateOperationsInput>,
  kode_list?: Maybe<MtVocabGroupUpdateOneWithoutMtvocabsInput>,
};

export type MtVocabUpdateManyMutationInput = {
  KODE?: Maybe<StringFieldUpdateOperationsInput>,
  kode_induk?: Maybe<NullableStringFieldUpdateOperationsInput>,
  level?: Maybe<NullableIntFieldUpdateOperationsInput>,
  sembunyikan?: Maybe<BoolFieldUpdateOperationsInput>,
  teks?: Maybe<NullableStringFieldUpdateOperationsInput>,
  urutan?: Maybe<NullableIntFieldUpdateOperationsInput>,
};

export type MtVocabUpdateManyWithoutKode_ListInput = {
  create?: Maybe<Array<MtVocabCreateWithoutKode_ListInput>>,
  connectOrCreate?: Maybe<Array<MtVocabCreateOrConnectWithoutKode_ListInput>>,
  upsert?: Maybe<Array<MtVocabUpsertWithWhereUniqueWithoutKode_ListInput>>,
  connect?: Maybe<Array<MtVocabWhereUniqueInput>>,
  set?: Maybe<Array<MtVocabWhereUniqueInput>>,
  disconnect?: Maybe<Array<MtVocabWhereUniqueInput>>,
  delete?: Maybe<Array<MtVocabWhereUniqueInput>>,
  update?: Maybe<Array<MtVocabUpdateWithWhereUniqueWithoutKode_ListInput>>,
  updateMany?: Maybe<Array<MtVocabUpdateManyWithWhereWithoutKode_ListInput>>,
  deleteMany?: Maybe<Array<MtVocabScalarWhereInput>>,
};

export type MtVocabUpdateManyWithWhereWithoutKode_ListInput = {
  where: MtVocabScalarWhereInput,
  data: MtVocabUpdateManyMutationInput,
};

export type MtVocabUpdateWithoutKode_ListInput = {
  KODE?: Maybe<StringFieldUpdateOperationsInput>,
  kode_induk?: Maybe<NullableStringFieldUpdateOperationsInput>,
  level?: Maybe<NullableIntFieldUpdateOperationsInput>,
  sembunyikan?: Maybe<BoolFieldUpdateOperationsInput>,
  teks?: Maybe<NullableStringFieldUpdateOperationsInput>,
  urutan?: Maybe<NullableIntFieldUpdateOperationsInput>,
};

export type MtVocabUpdateWithWhereUniqueWithoutKode_ListInput = {
  where: MtVocabWhereUniqueInput,
  data: MtVocabUpdateWithoutKode_ListInput,
};

export type MtVocabUpsertWithWhereUniqueWithoutKode_ListInput = {
  where: MtVocabWhereUniqueInput,
  update: MtVocabUpdateWithoutKode_ListInput,
  create: MtVocabCreateWithoutKode_ListInput,
};

export type MtVocabWhereInput = {
  AND?: Maybe<Array<MtVocabWhereInput>>,
  OR?: Maybe<Array<MtVocabWhereInput>>,
  NOT?: Maybe<Array<MtVocabWhereInput>>,
  KODE?: Maybe<StringFilter>,
  kode_induk?: Maybe<StringNullableFilter>,
  level?: Maybe<IntNullableFilter>,
  sembunyikan?: Maybe<BoolFilter>,
  teks?: Maybe<StringNullableFilter>,
  urutan?: Maybe<IntNullableFilter>,
  kode_list_group?: Maybe<IntNullableFilter>,
  kode_list?: Maybe<MtVocabGroupRelationFilter>,
};

export type MtVocabWhereUniqueInput = {
  KODE?: Maybe<Scalars['String']>,
};

export type Mutation = {
  createApplication: Application,
  deleteApplication?: Maybe<Application>,
  updateApplication?: Maybe<Application>,
  deleteManyApplication: AffectedRowsOutput,
  updateManyApplication: AffectedRowsOutput,
  upsertApplication: Application,
  createCaseClassification: CaseClassification,
  deleteCaseClassification?: Maybe<CaseClassification>,
  updateCaseClassification?: Maybe<CaseClassification>,
  deleteManyCaseClassification: AffectedRowsOutput,
  updateManyCaseClassification: AffectedRowsOutput,
  upsertCaseClassification: CaseClassification,
  createCaseConsultation: CaseConsultation,
  deleteCaseConsultation?: Maybe<CaseConsultation>,
  updateCaseConsultation?: Maybe<CaseConsultation>,
  deleteManyCaseConsultation: AffectedRowsOutput,
  updateManyCaseConsultation: AffectedRowsOutput,
  upsertCaseConsultation: CaseConsultation,
  createCaseConsultationApp: CaseConsultationApp,
  deleteCaseConsultationApp?: Maybe<CaseConsultationApp>,
  updateCaseConsultationApp?: Maybe<CaseConsultationApp>,
  deleteManyCaseConsultationApp: AffectedRowsOutput,
  updateManyCaseConsultationApp: AffectedRowsOutput,
  upsertCaseConsultationApp: CaseConsultationApp,
  createCaseDocument: CaseDocument,
  deleteCaseDocument?: Maybe<CaseDocument>,
  updateCaseDocument?: Maybe<CaseDocument>,
  deleteManyCaseDocument: AffectedRowsOutput,
  updateManyCaseDocument: AffectedRowsOutput,
  upsertCaseDocument: CaseDocument,
  createCaseIssue: CaseIssue,
  deleteCaseIssue?: Maybe<CaseIssue>,
  updateCaseIssue?: Maybe<CaseIssue>,
  deleteManyCaseIssue: AffectedRowsOutput,
  updateManyCaseIssue: AffectedRowsOutput,
  upsertCaseIssue: CaseIssue,
  createCaseKorban: CaseKorban,
  deleteCaseKorban?: Maybe<CaseKorban>,
  updateCaseKorban?: Maybe<CaseKorban>,
  deleteManyCaseKorban: AffectedRowsOutput,
  updateManyCaseKorban: AffectedRowsOutput,
  upsertCaseKorban: CaseKorban,
  createCasePelaku: CasePelaku,
  deleteCasePelaku?: Maybe<CasePelaku>,
  updateCasePelaku?: Maybe<CasePelaku>,
  deleteManyCasePelaku: AffectedRowsOutput,
  updateManyCasePelaku: AffectedRowsOutput,
  upsertCasePelaku: CasePelaku,
  createCasePk: CasePk,
  deleteCasePk?: Maybe<CasePk>,
  updateCasePk?: Maybe<CasePk>,
  deleteManyCasePk: AffectedRowsOutput,
  updateManyCasePk: AffectedRowsOutput,
  upsertCasePk: CasePk,
  createCaseProgress: CaseProgress,
  deleteCaseProgress?: Maybe<CaseProgress>,
  updateCaseProgress?: Maybe<CaseProgress>,
  deleteManyCaseProgress: AffectedRowsOutput,
  updateManyCaseProgress: AffectedRowsOutput,
  upsertCaseProgress: CaseProgress,
  createCaseProgressActivity: CaseProgressActivity,
  deleteCaseProgressActivity?: Maybe<CaseProgressActivity>,
  updateCaseProgressActivity?: Maybe<CaseProgressActivity>,
  deleteManyCaseProgressActivity: AffectedRowsOutput,
  updateManyCaseProgressActivity: AffectedRowsOutput,
  upsertCaseProgressActivity: CaseProgressActivity,
  createCaseProgressActivityLit: CaseProgressActivityLit,
  deleteCaseProgressActivityLit?: Maybe<CaseProgressActivityLit>,
  updateCaseProgressActivityLit?: Maybe<CaseProgressActivityLit>,
  deleteManyCaseProgressActivityLit: AffectedRowsOutput,
  updateManyCaseProgressActivityLit: AffectedRowsOutput,
  upsertCaseProgressActivityLit: CaseProgressActivityLit,
  createCaseProgressActivityNonlit: CaseProgressActivityNonlit,
  deleteCaseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>,
  updateCaseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>,
  deleteManyCaseProgressActivityNonlit: AffectedRowsOutput,
  updateManyCaseProgressActivityNonlit: AffectedRowsOutput,
  upsertCaseProgressActivityNonlit: CaseProgressActivityNonlit,
  createCaseReferral: CaseReferral,
  deleteCaseReferral?: Maybe<CaseReferral>,
  updateCaseReferral?: Maybe<CaseReferral>,
  deleteManyCaseReferral: AffectedRowsOutput,
  updateManyCaseReferral: AffectedRowsOutput,
  upsertCaseReferral: CaseReferral,
  createCaseTransfer: CaseTransfer,
  deleteCaseTransfer?: Maybe<CaseTransfer>,
  updateCaseTransfer?: Maybe<CaseTransfer>,
  deleteManyCaseTransfer: AffectedRowsOutput,
  updateManyCaseTransfer: AffectedRowsOutput,
  upsertCaseTransfer: CaseTransfer,
  createCaseTransferReferral: CaseTransferReferral,
  deleteCaseTransferReferral?: Maybe<CaseTransferReferral>,
  updateCaseTransferReferral?: Maybe<CaseTransferReferral>,
  deleteManyCaseTransferReferral: AffectedRowsOutput,
  updateManyCaseTransferReferral: AffectedRowsOutput,
  upsertCaseTransferReferral: CaseTransferReferral,
  createCaseViolatedRight: CaseViolatedRight,
  deleteCaseViolatedRight?: Maybe<CaseViolatedRight>,
  updateCaseViolatedRight?: Maybe<CaseViolatedRight>,
  deleteManyCaseViolatedRight: AffectedRowsOutput,
  updateManyCaseViolatedRight: AffectedRowsOutput,
  upsertCaseViolatedRight: CaseViolatedRight,
  createClient: Client,
  deleteClient?: Maybe<Client>,
  updateClient?: Maybe<Client>,
  deleteManyClient: AffectedRowsOutput,
  updateManyClient: AffectedRowsOutput,
  upsertClient: Client,
  createDaftarPengacara: DaftarPengacara,
  deleteDaftarPengacara?: Maybe<DaftarPengacara>,
  updateDaftarPengacara?: Maybe<DaftarPengacara>,
  deleteManyDaftarPengacara: AffectedRowsOutput,
  updateManyDaftarPengacara: AffectedRowsOutput,
  upsertDaftarPengacara: DaftarPengacara,
  createDataDict: DataDict,
  deleteDataDict?: Maybe<DataDict>,
  updateDataDict?: Maybe<DataDict>,
  deleteManyDataDict: AffectedRowsOutput,
  updateManyDataDict: AffectedRowsOutput,
  upsertDataDict: DataDict,
  createDataDictLocal: DataDictLocal,
  deleteDataDictLocal?: Maybe<DataDictLocal>,
  updateDataDictLocal?: Maybe<DataDictLocal>,
  deleteManyDataDictLocal: AffectedRowsOutput,
  updateManyDataDictLocal: AffectedRowsOutput,
  upsertDataDictLocal: DataDictLocal,
  createLogRequest: LogRequest,
  deleteLogRequest?: Maybe<LogRequest>,
  updateLogRequest?: Maybe<LogRequest>,
  deleteManyLogRequest: AffectedRowsOutput,
  updateManyLogRequest: AffectedRowsOutput,
  upsertLogRequest: LogRequest,
  createLogRequestApp: LogRequestApp,
  deleteLogRequestApp?: Maybe<LogRequestApp>,
  updateLogRequestApp?: Maybe<LogRequestApp>,
  deleteManyLogRequestApp: AffectedRowsOutput,
  updateManyLogRequestApp: AffectedRowsOutput,
  upsertLogRequestApp: LogRequestApp,
  createMtVocab: MtVocab,
  deleteMtVocab?: Maybe<MtVocab>,
  updateMtVocab?: Maybe<MtVocab>,
  deleteManyMtVocab: AffectedRowsOutput,
  updateManyMtVocab: AffectedRowsOutput,
  upsertMtVocab: MtVocab,
  createMtVocabGroup: MtVocabGroup,
  deleteMtVocabGroup?: Maybe<MtVocabGroup>,
  updateMtVocabGroup?: Maybe<MtVocabGroup>,
  deleteManyMtVocabGroup: AffectedRowsOutput,
  updateManyMtVocabGroup: AffectedRowsOutput,
  upsertMtVocabGroup: MtVocabGroup,
  createNetwork: Network,
  deleteNetwork?: Maybe<Network>,
  updateNetwork?: Maybe<Network>,
  deleteManyNetwork: AffectedRowsOutput,
  updateManyNetwork: AffectedRowsOutput,
  upsertNetwork: Network,
  createPerson: Person,
  deletePerson?: Maybe<Person>,
  updatePerson?: Maybe<Person>,
  deleteManyPerson: AffectedRowsOutput,
  updateManyPerson: AffectedRowsOutput,
  upsertPerson: Person,
  createPersonDocument: PersonDocument,
  deletePersonDocument?: Maybe<PersonDocument>,
  updatePersonDocument?: Maybe<PersonDocument>,
  deleteManyPersonDocument: AffectedRowsOutput,
  updateManyPersonDocument: AffectedRowsOutput,
  upsertPersonDocument: PersonDocument,
  createRenamedcase: Renamedcase,
  deleteRenamedcase?: Maybe<Renamedcase>,
  updateRenamedcase?: Maybe<Renamedcase>,
  deleteManyRenamedcase: AffectedRowsOutput,
  updateManyRenamedcase: AffectedRowsOutput,
  upsertRenamedcase: Renamedcase,
  createRole: Role,
  deleteRole?: Maybe<Role>,
  updateRole?: Maybe<Role>,
  deleteManyRole: AffectedRowsOutput,
  updateManyRole: AffectedRowsOutput,
  upsertRole: Role,
  createRolesType: RolesType,
  deleteRolesType?: Maybe<RolesType>,
  updateRolesType?: Maybe<RolesType>,
  deleteManyRolesType: AffectedRowsOutput,
  updateManyRolesType: AffectedRowsOutput,
  upsertRolesType: RolesType,
  createSrcAnalisa: SrcAnalisa,
  deleteSrcAnalisa?: Maybe<SrcAnalisa>,
  updateSrcAnalisa?: Maybe<SrcAnalisa>,
  deleteManySrcAnalisa: AffectedRowsOutput,
  updateManySrcAnalisa: AffectedRowsOutput,
  upsertSrcAnalisa: SrcAnalisa,
  createSrcOperator: SrcOperator,
  deleteSrcOperator?: Maybe<SrcOperator>,
  updateSrcOperator?: Maybe<SrcOperator>,
  deleteManySrcOperator: AffectedRowsOutput,
  updateManySrcOperator: AffectedRowsOutput,
  upsertSrcOperator: SrcOperator,
  createSrcTemplate: SrcTemplate,
  deleteSrcTemplate?: Maybe<SrcTemplate>,
  updateSrcTemplate?: Maybe<SrcTemplate>,
  deleteManySrcTemplate: AffectedRowsOutput,
  updateManySrcTemplate: AffectedRowsOutput,
  upsertSrcTemplate: SrcTemplate,
  createUser: User,
  deleteUser?: Maybe<User>,
  updateUser?: Maybe<User>,
  deleteManyUser: AffectedRowsOutput,
  updateManyUser: AffectedRowsOutput,
  upsertUser: User,
  createUserProfile: UserProfile,
  deleteUserProfile?: Maybe<UserProfile>,
  updateUserProfile?: Maybe<UserProfile>,
  deleteManyUserProfile: AffectedRowsOutput,
  updateManyUserProfile: AffectedRowsOutput,
  upsertUserProfile: UserProfile,
};


export type MutationCreateApplicationArgs = {
  data: ApplicationCreateInput
};


export type MutationDeleteApplicationArgs = {
  where: ApplicationWhereUniqueInput
};


export type MutationUpdateApplicationArgs = {
  data: ApplicationUpdateInput,
  where: ApplicationWhereUniqueInput
};


export type MutationDeleteManyApplicationArgs = {
  where?: Maybe<ApplicationWhereInput>
};


export type MutationUpdateManyApplicationArgs = {
  data: ApplicationUpdateManyMutationInput,
  where?: Maybe<ApplicationWhereInput>
};


export type MutationUpsertApplicationArgs = {
  where: ApplicationWhereUniqueInput,
  create: ApplicationCreateInput,
  update: ApplicationUpdateInput
};


export type MutationCreateCaseClassificationArgs = {
  data: CaseClassificationCreateInput
};


export type MutationDeleteCaseClassificationArgs = {
  where: CaseClassificationWhereUniqueInput
};


export type MutationUpdateCaseClassificationArgs = {
  data: CaseClassificationUpdateInput,
  where: CaseClassificationWhereUniqueInput
};


export type MutationDeleteManyCaseClassificationArgs = {
  where?: Maybe<CaseClassificationWhereInput>
};


export type MutationUpdateManyCaseClassificationArgs = {
  data: CaseClassificationUpdateManyMutationInput,
  where?: Maybe<CaseClassificationWhereInput>
};


export type MutationUpsertCaseClassificationArgs = {
  where: CaseClassificationWhereUniqueInput,
  create: CaseClassificationCreateInput,
  update: CaseClassificationUpdateInput
};


export type MutationCreateCaseConsultationArgs = {
  data: CaseConsultationCreateInput
};


export type MutationDeleteCaseConsultationArgs = {
  where: CaseConsultationWhereUniqueInput
};


export type MutationUpdateCaseConsultationArgs = {
  data: CaseConsultationUpdateInput,
  where: CaseConsultationWhereUniqueInput
};


export type MutationDeleteManyCaseConsultationArgs = {
  where?: Maybe<CaseConsultationWhereInput>
};


export type MutationUpdateManyCaseConsultationArgs = {
  data: CaseConsultationUpdateManyMutationInput,
  where?: Maybe<CaseConsultationWhereInput>
};


export type MutationUpsertCaseConsultationArgs = {
  where: CaseConsultationWhereUniqueInput,
  create: CaseConsultationCreateInput,
  update: CaseConsultationUpdateInput
};


export type MutationCreateCaseConsultationAppArgs = {
  data: CaseConsultationAppCreateInput
};


export type MutationDeleteCaseConsultationAppArgs = {
  where: CaseConsultationAppWhereUniqueInput
};


export type MutationUpdateCaseConsultationAppArgs = {
  data: CaseConsultationAppUpdateInput,
  where: CaseConsultationAppWhereUniqueInput
};


export type MutationDeleteManyCaseConsultationAppArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>
};


export type MutationUpdateManyCaseConsultationAppArgs = {
  data: CaseConsultationAppUpdateManyMutationInput,
  where?: Maybe<CaseConsultationAppWhereInput>
};


export type MutationUpsertCaseConsultationAppArgs = {
  where: CaseConsultationAppWhereUniqueInput,
  create: CaseConsultationAppCreateInput,
  update: CaseConsultationAppUpdateInput
};


export type MutationCreateCaseDocumentArgs = {
  data: CaseDocumentCreateInput
};


export type MutationDeleteCaseDocumentArgs = {
  where: CaseDocumentWhereUniqueInput
};


export type MutationUpdateCaseDocumentArgs = {
  data: CaseDocumentUpdateInput,
  where: CaseDocumentWhereUniqueInput
};


export type MutationDeleteManyCaseDocumentArgs = {
  where?: Maybe<CaseDocumentWhereInput>
};


export type MutationUpdateManyCaseDocumentArgs = {
  data: CaseDocumentUpdateManyMutationInput,
  where?: Maybe<CaseDocumentWhereInput>
};


export type MutationUpsertCaseDocumentArgs = {
  where: CaseDocumentWhereUniqueInput,
  create: CaseDocumentCreateInput,
  update: CaseDocumentUpdateInput
};


export type MutationCreateCaseIssueArgs = {
  data: CaseIssueCreateInput
};


export type MutationDeleteCaseIssueArgs = {
  where: CaseIssueWhereUniqueInput
};


export type MutationUpdateCaseIssueArgs = {
  data: CaseIssueUpdateInput,
  where: CaseIssueWhereUniqueInput
};


export type MutationDeleteManyCaseIssueArgs = {
  where?: Maybe<CaseIssueWhereInput>
};


export type MutationUpdateManyCaseIssueArgs = {
  data: CaseIssueUpdateManyMutationInput,
  where?: Maybe<CaseIssueWhereInput>
};


export type MutationUpsertCaseIssueArgs = {
  where: CaseIssueWhereUniqueInput,
  create: CaseIssueCreateInput,
  update: CaseIssueUpdateInput
};


export type MutationCreateCaseKorbanArgs = {
  data: CaseKorbanCreateInput
};


export type MutationDeleteCaseKorbanArgs = {
  where: CaseKorbanWhereUniqueInput
};


export type MutationUpdateCaseKorbanArgs = {
  data: CaseKorbanUpdateInput,
  where: CaseKorbanWhereUniqueInput
};


export type MutationDeleteManyCaseKorbanArgs = {
  where?: Maybe<CaseKorbanWhereInput>
};


export type MutationUpdateManyCaseKorbanArgs = {
  data: CaseKorbanUpdateManyMutationInput,
  where?: Maybe<CaseKorbanWhereInput>
};


export type MutationUpsertCaseKorbanArgs = {
  where: CaseKorbanWhereUniqueInput,
  create: CaseKorbanCreateInput,
  update: CaseKorbanUpdateInput
};


export type MutationCreateCasePelakuArgs = {
  data: CasePelakuCreateInput
};


export type MutationDeleteCasePelakuArgs = {
  where: CasePelakuWhereUniqueInput
};


export type MutationUpdateCasePelakuArgs = {
  data: CasePelakuUpdateInput,
  where: CasePelakuWhereUniqueInput
};


export type MutationDeleteManyCasePelakuArgs = {
  where?: Maybe<CasePelakuWhereInput>
};


export type MutationUpdateManyCasePelakuArgs = {
  data: CasePelakuUpdateManyMutationInput,
  where?: Maybe<CasePelakuWhereInput>
};


export type MutationUpsertCasePelakuArgs = {
  where: CasePelakuWhereUniqueInput,
  create: CasePelakuCreateInput,
  update: CasePelakuUpdateInput
};


export type MutationCreateCasePkArgs = {
  data: CasePkCreateInput
};


export type MutationDeleteCasePkArgs = {
  where: CasePkWhereUniqueInput
};


export type MutationUpdateCasePkArgs = {
  data: CasePkUpdateInput,
  where: CasePkWhereUniqueInput
};


export type MutationDeleteManyCasePkArgs = {
  where?: Maybe<CasePkWhereInput>
};


export type MutationUpdateManyCasePkArgs = {
  data: CasePkUpdateManyMutationInput,
  where?: Maybe<CasePkWhereInput>
};


export type MutationUpsertCasePkArgs = {
  where: CasePkWhereUniqueInput,
  create: CasePkCreateInput,
  update: CasePkUpdateInput
};


export type MutationCreateCaseProgressArgs = {
  data: CaseProgressCreateInput
};


export type MutationDeleteCaseProgressArgs = {
  where: CaseProgressWhereUniqueInput
};


export type MutationUpdateCaseProgressArgs = {
  data: CaseProgressUpdateInput,
  where: CaseProgressWhereUniqueInput
};


export type MutationDeleteManyCaseProgressArgs = {
  where?: Maybe<CaseProgressWhereInput>
};


export type MutationUpdateManyCaseProgressArgs = {
  data: CaseProgressUpdateManyMutationInput,
  where?: Maybe<CaseProgressWhereInput>
};


export type MutationUpsertCaseProgressArgs = {
  where: CaseProgressWhereUniqueInput,
  create: CaseProgressCreateInput,
  update: CaseProgressUpdateInput
};


export type MutationCreateCaseProgressActivityArgs = {
  data: CaseProgressActivityCreateInput
};


export type MutationDeleteCaseProgressActivityArgs = {
  where: CaseProgressActivityWhereUniqueInput
};


export type MutationUpdateCaseProgressActivityArgs = {
  data: CaseProgressActivityUpdateInput,
  where: CaseProgressActivityWhereUniqueInput
};


export type MutationDeleteManyCaseProgressActivityArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>
};


export type MutationUpdateManyCaseProgressActivityArgs = {
  data: CaseProgressActivityUpdateManyMutationInput,
  where?: Maybe<CaseProgressActivityWhereInput>
};


export type MutationUpsertCaseProgressActivityArgs = {
  where: CaseProgressActivityWhereUniqueInput,
  create: CaseProgressActivityCreateInput,
  update: CaseProgressActivityUpdateInput
};


export type MutationCreateCaseProgressActivityLitArgs = {
  data: CaseProgressActivityLitCreateInput
};


export type MutationDeleteCaseProgressActivityLitArgs = {
  where: CaseProgressActivityLitWhereUniqueInput
};


export type MutationUpdateCaseProgressActivityLitArgs = {
  data: CaseProgressActivityLitUpdateInput,
  where: CaseProgressActivityLitWhereUniqueInput
};


export type MutationDeleteManyCaseProgressActivityLitArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>
};


export type MutationUpdateManyCaseProgressActivityLitArgs = {
  data: CaseProgressActivityLitUpdateManyMutationInput,
  where?: Maybe<CaseProgressActivityLitWhereInput>
};


export type MutationUpsertCaseProgressActivityLitArgs = {
  where: CaseProgressActivityLitWhereUniqueInput,
  create: CaseProgressActivityLitCreateInput,
  update: CaseProgressActivityLitUpdateInput
};


export type MutationCreateCaseProgressActivityNonlitArgs = {
  data: CaseProgressActivityNonlitCreateInput
};


export type MutationDeleteCaseProgressActivityNonlitArgs = {
  where: CaseProgressActivityNonlitWhereUniqueInput
};


export type MutationUpdateCaseProgressActivityNonlitArgs = {
  data: CaseProgressActivityNonlitUpdateInput,
  where: CaseProgressActivityNonlitWhereUniqueInput
};


export type MutationDeleteManyCaseProgressActivityNonlitArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>
};


export type MutationUpdateManyCaseProgressActivityNonlitArgs = {
  data: CaseProgressActivityNonlitUpdateManyMutationInput,
  where?: Maybe<CaseProgressActivityNonlitWhereInput>
};


export type MutationUpsertCaseProgressActivityNonlitArgs = {
  where: CaseProgressActivityNonlitWhereUniqueInput,
  create: CaseProgressActivityNonlitCreateInput,
  update: CaseProgressActivityNonlitUpdateInput
};


export type MutationCreateCaseReferralArgs = {
  data: CaseReferralCreateInput
};


export type MutationDeleteCaseReferralArgs = {
  where: CaseReferralWhereUniqueInput
};


export type MutationUpdateCaseReferralArgs = {
  data: CaseReferralUpdateInput,
  where: CaseReferralWhereUniqueInput
};


export type MutationDeleteManyCaseReferralArgs = {
  where?: Maybe<CaseReferralWhereInput>
};


export type MutationUpdateManyCaseReferralArgs = {
  data: CaseReferralUpdateManyMutationInput,
  where?: Maybe<CaseReferralWhereInput>
};


export type MutationUpsertCaseReferralArgs = {
  where: CaseReferralWhereUniqueInput,
  create: CaseReferralCreateInput,
  update: CaseReferralUpdateInput
};


export type MutationCreateCaseTransferArgs = {
  data: CaseTransferCreateInput
};


export type MutationDeleteCaseTransferArgs = {
  where: CaseTransferWhereUniqueInput
};


export type MutationUpdateCaseTransferArgs = {
  data: CaseTransferUpdateInput,
  where: CaseTransferWhereUniqueInput
};


export type MutationDeleteManyCaseTransferArgs = {
  where?: Maybe<CaseTransferWhereInput>
};


export type MutationUpdateManyCaseTransferArgs = {
  data: CaseTransferUpdateManyMutationInput,
  where?: Maybe<CaseTransferWhereInput>
};


export type MutationUpsertCaseTransferArgs = {
  where: CaseTransferWhereUniqueInput,
  create: CaseTransferCreateInput,
  update: CaseTransferUpdateInput
};


export type MutationCreateCaseTransferReferralArgs = {
  data: CaseTransferReferralCreateInput
};


export type MutationDeleteCaseTransferReferralArgs = {
  where: CaseTransferReferralWhereUniqueInput
};


export type MutationUpdateCaseTransferReferralArgs = {
  data: CaseTransferReferralUpdateInput,
  where: CaseTransferReferralWhereUniqueInput
};


export type MutationDeleteManyCaseTransferReferralArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>
};


export type MutationUpdateManyCaseTransferReferralArgs = {
  data: CaseTransferReferralUpdateManyMutationInput,
  where?: Maybe<CaseTransferReferralWhereInput>
};


export type MutationUpsertCaseTransferReferralArgs = {
  where: CaseTransferReferralWhereUniqueInput,
  create: CaseTransferReferralCreateInput,
  update: CaseTransferReferralUpdateInput
};


export type MutationCreateCaseViolatedRightArgs = {
  data: CaseViolatedRightCreateInput
};


export type MutationDeleteCaseViolatedRightArgs = {
  where: CaseViolatedRightWhereUniqueInput
};


export type MutationUpdateCaseViolatedRightArgs = {
  data: CaseViolatedRightUpdateInput,
  where: CaseViolatedRightWhereUniqueInput
};


export type MutationDeleteManyCaseViolatedRightArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>
};


export type MutationUpdateManyCaseViolatedRightArgs = {
  data: CaseViolatedRightUpdateManyMutationInput,
  where?: Maybe<CaseViolatedRightWhereInput>
};


export type MutationUpsertCaseViolatedRightArgs = {
  where: CaseViolatedRightWhereUniqueInput,
  create: CaseViolatedRightCreateInput,
  update: CaseViolatedRightUpdateInput
};


export type MutationCreateClientArgs = {
  data: ClientCreateInput
};


export type MutationDeleteClientArgs = {
  where: ClientWhereUniqueInput
};


export type MutationUpdateClientArgs = {
  data: ClientUpdateInput,
  where: ClientWhereUniqueInput
};


export type MutationDeleteManyClientArgs = {
  where?: Maybe<ClientWhereInput>
};


export type MutationUpdateManyClientArgs = {
  data: ClientUpdateManyMutationInput,
  where?: Maybe<ClientWhereInput>
};


export type MutationUpsertClientArgs = {
  where: ClientWhereUniqueInput,
  create: ClientCreateInput,
  update: ClientUpdateInput
};


export type MutationCreateDaftarPengacaraArgs = {
  data: DaftarPengacaraCreateInput
};


export type MutationDeleteDaftarPengacaraArgs = {
  where: DaftarPengacaraWhereUniqueInput
};


export type MutationUpdateDaftarPengacaraArgs = {
  data: DaftarPengacaraUpdateInput,
  where: DaftarPengacaraWhereUniqueInput
};


export type MutationDeleteManyDaftarPengacaraArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>
};


export type MutationUpdateManyDaftarPengacaraArgs = {
  data: DaftarPengacaraUpdateManyMutationInput,
  where?: Maybe<DaftarPengacaraWhereInput>
};


export type MutationUpsertDaftarPengacaraArgs = {
  where: DaftarPengacaraWhereUniqueInput,
  create: DaftarPengacaraCreateInput,
  update: DaftarPengacaraUpdateInput
};


export type MutationCreateDataDictArgs = {
  data: DataDictCreateInput
};


export type MutationDeleteDataDictArgs = {
  where: DataDictWhereUniqueInput
};


export type MutationUpdateDataDictArgs = {
  data: DataDictUpdateInput,
  where: DataDictWhereUniqueInput
};


export type MutationDeleteManyDataDictArgs = {
  where?: Maybe<DataDictWhereInput>
};


export type MutationUpdateManyDataDictArgs = {
  data: DataDictUpdateManyMutationInput,
  where?: Maybe<DataDictWhereInput>
};


export type MutationUpsertDataDictArgs = {
  where: DataDictWhereUniqueInput,
  create: DataDictCreateInput,
  update: DataDictUpdateInput
};


export type MutationCreateDataDictLocalArgs = {
  data: DataDictLocalCreateInput
};


export type MutationDeleteDataDictLocalArgs = {
  where: DataDictLocalWhereUniqueInput
};


export type MutationUpdateDataDictLocalArgs = {
  data: DataDictLocalUpdateInput,
  where: DataDictLocalWhereUniqueInput
};


export type MutationDeleteManyDataDictLocalArgs = {
  where?: Maybe<DataDictLocalWhereInput>
};


export type MutationUpdateManyDataDictLocalArgs = {
  data: DataDictLocalUpdateManyMutationInput,
  where?: Maybe<DataDictLocalWhereInput>
};


export type MutationUpsertDataDictLocalArgs = {
  where: DataDictLocalWhereUniqueInput,
  create: DataDictLocalCreateInput,
  update: DataDictLocalUpdateInput
};


export type MutationCreateLogRequestArgs = {
  data: LogRequestCreateInput
};


export type MutationDeleteLogRequestArgs = {
  where: LogRequestWhereUniqueInput
};


export type MutationUpdateLogRequestArgs = {
  data: LogRequestUpdateInput,
  where: LogRequestWhereUniqueInput
};


export type MutationDeleteManyLogRequestArgs = {
  where?: Maybe<LogRequestWhereInput>
};


export type MutationUpdateManyLogRequestArgs = {
  data: LogRequestUpdateManyMutationInput,
  where?: Maybe<LogRequestWhereInput>
};


export type MutationUpsertLogRequestArgs = {
  where: LogRequestWhereUniqueInput,
  create: LogRequestCreateInput,
  update: LogRequestUpdateInput
};


export type MutationCreateLogRequestAppArgs = {
  data: LogRequestAppCreateInput
};


export type MutationDeleteLogRequestAppArgs = {
  where: LogRequestAppWhereUniqueInput
};


export type MutationUpdateLogRequestAppArgs = {
  data: LogRequestAppUpdateInput,
  where: LogRequestAppWhereUniqueInput
};


export type MutationDeleteManyLogRequestAppArgs = {
  where?: Maybe<LogRequestAppWhereInput>
};


export type MutationUpdateManyLogRequestAppArgs = {
  data: LogRequestAppUpdateManyMutationInput,
  where?: Maybe<LogRequestAppWhereInput>
};


export type MutationUpsertLogRequestAppArgs = {
  where: LogRequestAppWhereUniqueInput,
  create: LogRequestAppCreateInput,
  update: LogRequestAppUpdateInput
};


export type MutationCreateMtVocabArgs = {
  data: MtVocabCreateInput
};


export type MutationDeleteMtVocabArgs = {
  where: MtVocabWhereUniqueInput
};


export type MutationUpdateMtVocabArgs = {
  data: MtVocabUpdateInput,
  where: MtVocabWhereUniqueInput
};


export type MutationDeleteManyMtVocabArgs = {
  where?: Maybe<MtVocabWhereInput>
};


export type MutationUpdateManyMtVocabArgs = {
  data: MtVocabUpdateManyMutationInput,
  where?: Maybe<MtVocabWhereInput>
};


export type MutationUpsertMtVocabArgs = {
  where: MtVocabWhereUniqueInput,
  create: MtVocabCreateInput,
  update: MtVocabUpdateInput
};


export type MutationCreateMtVocabGroupArgs = {
  data: MtVocabGroupCreateInput
};


export type MutationDeleteMtVocabGroupArgs = {
  where: MtVocabGroupWhereUniqueInput
};


export type MutationUpdateMtVocabGroupArgs = {
  data: MtVocabGroupUpdateInput,
  where: MtVocabGroupWhereUniqueInput
};


export type MutationDeleteManyMtVocabGroupArgs = {
  where?: Maybe<MtVocabGroupWhereInput>
};


export type MutationUpdateManyMtVocabGroupArgs = {
  data: MtVocabGroupUpdateManyMutationInput,
  where?: Maybe<MtVocabGroupWhereInput>
};


export type MutationUpsertMtVocabGroupArgs = {
  where: MtVocabGroupWhereUniqueInput,
  create: MtVocabGroupCreateInput,
  update: MtVocabGroupUpdateInput
};


export type MutationCreateNetworkArgs = {
  data: NetworkCreateInput
};


export type MutationDeleteNetworkArgs = {
  where: NetworkWhereUniqueInput
};


export type MutationUpdateNetworkArgs = {
  data: NetworkUpdateInput,
  where: NetworkWhereUniqueInput
};


export type MutationDeleteManyNetworkArgs = {
  where?: Maybe<NetworkWhereInput>
};


export type MutationUpdateManyNetworkArgs = {
  data: NetworkUpdateManyMutationInput,
  where?: Maybe<NetworkWhereInput>
};


export type MutationUpsertNetworkArgs = {
  where: NetworkWhereUniqueInput,
  create: NetworkCreateInput,
  update: NetworkUpdateInput
};


export type MutationCreatePersonArgs = {
  data: PersonCreateInput
};


export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput
};


export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput,
  where: PersonWhereUniqueInput
};


export type MutationDeleteManyPersonArgs = {
  where?: Maybe<PersonWhereInput>
};


export type MutationUpdateManyPersonArgs = {
  data: PersonUpdateManyMutationInput,
  where?: Maybe<PersonWhereInput>
};


export type MutationUpsertPersonArgs = {
  where: PersonWhereUniqueInput,
  create: PersonCreateInput,
  update: PersonUpdateInput
};


export type MutationCreatePersonDocumentArgs = {
  data: PersonDocumentCreateInput
};


export type MutationDeletePersonDocumentArgs = {
  where: PersonDocumentWhereUniqueInput
};


export type MutationUpdatePersonDocumentArgs = {
  data: PersonDocumentUpdateInput,
  where: PersonDocumentWhereUniqueInput
};


export type MutationDeleteManyPersonDocumentArgs = {
  where?: Maybe<PersonDocumentWhereInput>
};


export type MutationUpdateManyPersonDocumentArgs = {
  data: PersonDocumentUpdateManyMutationInput,
  where?: Maybe<PersonDocumentWhereInput>
};


export type MutationUpsertPersonDocumentArgs = {
  where: PersonDocumentWhereUniqueInput,
  create: PersonDocumentCreateInput,
  update: PersonDocumentUpdateInput
};


export type MutationCreateRenamedcaseArgs = {
  data: RenamedcaseCreateInput
};


export type MutationDeleteRenamedcaseArgs = {
  where: RenamedcaseWhereUniqueInput
};


export type MutationUpdateRenamedcaseArgs = {
  data: RenamedcaseUpdateInput,
  where: RenamedcaseWhereUniqueInput
};


export type MutationDeleteManyRenamedcaseArgs = {
  where?: Maybe<RenamedcaseWhereInput>
};


export type MutationUpdateManyRenamedcaseArgs = {
  data: RenamedcaseUpdateManyMutationInput,
  where?: Maybe<RenamedcaseWhereInput>
};


export type MutationUpsertRenamedcaseArgs = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateInput,
  update: RenamedcaseUpdateInput
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput,
  where: RoleWhereUniqueInput
};


export type MutationDeleteManyRoleArgs = {
  where?: Maybe<RoleWhereInput>
};


export type MutationUpdateManyRoleArgs = {
  data: RoleUpdateManyMutationInput,
  where?: Maybe<RoleWhereInput>
};


export type MutationUpsertRoleArgs = {
  where: RoleWhereUniqueInput,
  create: RoleCreateInput,
  update: RoleUpdateInput
};


export type MutationCreateRolesTypeArgs = {
  data: RolesTypeCreateInput
};


export type MutationDeleteRolesTypeArgs = {
  where: RolesTypeWhereUniqueInput
};


export type MutationUpdateRolesTypeArgs = {
  data: RolesTypeUpdateInput,
  where: RolesTypeWhereUniqueInput
};


export type MutationDeleteManyRolesTypeArgs = {
  where?: Maybe<RolesTypeWhereInput>
};


export type MutationUpdateManyRolesTypeArgs = {
  data: RolesTypeUpdateManyMutationInput,
  where?: Maybe<RolesTypeWhereInput>
};


export type MutationUpsertRolesTypeArgs = {
  where: RolesTypeWhereUniqueInput,
  create: RolesTypeCreateInput,
  update: RolesTypeUpdateInput
};


export type MutationCreateSrcAnalisaArgs = {
  data: SrcAnalisaCreateInput
};


export type MutationDeleteSrcAnalisaArgs = {
  where: SrcAnalisaWhereUniqueInput
};


export type MutationUpdateSrcAnalisaArgs = {
  data: SrcAnalisaUpdateInput,
  where: SrcAnalisaWhereUniqueInput
};


export type MutationDeleteManySrcAnalisaArgs = {
  where?: Maybe<SrcAnalisaWhereInput>
};


export type MutationUpdateManySrcAnalisaArgs = {
  data: SrcAnalisaUpdateManyMutationInput,
  where?: Maybe<SrcAnalisaWhereInput>
};


export type MutationUpsertSrcAnalisaArgs = {
  where: SrcAnalisaWhereUniqueInput,
  create: SrcAnalisaCreateInput,
  update: SrcAnalisaUpdateInput
};


export type MutationCreateSrcOperatorArgs = {
  data: SrcOperatorCreateInput
};


export type MutationDeleteSrcOperatorArgs = {
  where: SrcOperatorWhereUniqueInput
};


export type MutationUpdateSrcOperatorArgs = {
  data: SrcOperatorUpdateInput,
  where: SrcOperatorWhereUniqueInput
};


export type MutationDeleteManySrcOperatorArgs = {
  where?: Maybe<SrcOperatorWhereInput>
};


export type MutationUpdateManySrcOperatorArgs = {
  data: SrcOperatorUpdateManyMutationInput,
  where?: Maybe<SrcOperatorWhereInput>
};


export type MutationUpsertSrcOperatorArgs = {
  where: SrcOperatorWhereUniqueInput,
  create: SrcOperatorCreateInput,
  update: SrcOperatorUpdateInput
};


export type MutationCreateSrcTemplateArgs = {
  data: SrcTemplateCreateInput
};


export type MutationDeleteSrcTemplateArgs = {
  where: SrcTemplateWhereUniqueInput
};


export type MutationUpdateSrcTemplateArgs = {
  data: SrcTemplateUpdateInput,
  where: SrcTemplateWhereUniqueInput
};


export type MutationDeleteManySrcTemplateArgs = {
  where?: Maybe<SrcTemplateWhereInput>
};


export type MutationUpdateManySrcTemplateArgs = {
  data: SrcTemplateUpdateManyMutationInput,
  where?: Maybe<SrcTemplateWhereInput>
};


export type MutationUpsertSrcTemplateArgs = {
  where: SrcTemplateWhereUniqueInput,
  create: SrcTemplateCreateInput,
  update: SrcTemplateUpdateInput
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationCreateUserProfileArgs = {
  data: UserProfileCreateInput
};


export type MutationDeleteUserProfileArgs = {
  where: UserProfileWhereUniqueInput
};


export type MutationUpdateUserProfileArgs = {
  data: UserProfileUpdateInput,
  where: UserProfileWhereUniqueInput
};


export type MutationDeleteManyUserProfileArgs = {
  where?: Maybe<UserProfileWhereInput>
};


export type MutationUpdateManyUserProfileArgs = {
  data: UserProfileUpdateManyMutationInput,
  where?: Maybe<UserProfileWhereInput>
};


export type MutationUpsertUserProfileArgs = {
  where: UserProfileWhereUniqueInput,
  create: UserProfileCreateInput,
  update: UserProfileUpdateInput
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>,
  not?: Maybe<NestedBoolFilter>,
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
  not?: Maybe<NestedDateTimeFilter>,
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
  not?: Maybe<NestedDateTimeNullableFilter>,
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  not?: Maybe<NestedIntFilter>,
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  not?: Maybe<NestedIntNullableFilter>,
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
  not?: Maybe<NestedStringFilter>,
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
  not?: Maybe<NestedStringNullableFilter>,
};

export type Network = {
  id: Scalars['Int'],
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  CaseReferral: Array<CaseReferral>,
  CaseTransfer: Array<CaseTransfer>,
  LogRequest: Array<LogRequest>,
};


export type NetworkCaseReferralArgs = {
  where?: Maybe<CaseReferralWhereInput>,
  orderBy?: Maybe<Array<CaseReferralOrderByInput>>,
  cursor?: Maybe<CaseReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseReferralScalarFieldEnum>>
};


export type NetworkCaseTransferArgs = {
  where?: Maybe<CaseTransferWhereInput>,
  orderBy?: Maybe<Array<CaseTransferOrderByInput>>,
  cursor?: Maybe<CaseTransferWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseTransferScalarFieldEnum>>
};


export type NetworkLogRequestArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestScalarFieldEnum>>
};

export type NetworkAvgAggregate = {
  id: Scalars['Float'],
  provinceId?: Maybe<Scalars['Float']>,
  regencyId?: Maybe<Scalars['Float']>,
};

export type NetworkCountAggregate = {
  id: Scalars['Int'],
  address?: Maybe<Scalars['Int']>,
  contactPerson?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['Int']>,
  noContact?: Maybe<Scalars['Int']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type NetworkCreateInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutNetworkInput>,
  CaseTransfer?: Maybe<CaseTransferCreateNestedManyWithoutNetworkInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutNetworkIdInput>,
};

export type NetworkCreateNestedOneWithoutCaseReferralInput = {
  create?: Maybe<NetworkCreateWithoutCaseReferralInput>,
  connectOrCreate?: Maybe<NetworkCreateOrConnectWithoutCaseReferralInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
};

export type NetworkCreateNestedOneWithoutCaseTransferInput = {
  create?: Maybe<NetworkCreateWithoutCaseTransferInput>,
  connectOrCreate?: Maybe<NetworkCreateOrConnectWithoutCaseTransferInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
};

export type NetworkCreateNestedOneWithoutLogRequestInput = {
  create?: Maybe<NetworkCreateWithoutLogRequestInput>,
  connectOrCreate?: Maybe<NetworkCreateOrConnectWithoutLogRequestInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
};

export type NetworkCreateOrConnectWithoutCaseReferralInput = {
  where: NetworkWhereUniqueInput,
  create: NetworkCreateWithoutCaseReferralInput,
};

export type NetworkCreateOrConnectWithoutCaseTransferInput = {
  where: NetworkWhereUniqueInput,
  create: NetworkCreateWithoutCaseTransferInput,
};

export type NetworkCreateOrConnectWithoutLogRequestInput = {
  where: NetworkWhereUniqueInput,
  create: NetworkCreateWithoutLogRequestInput,
};

export type NetworkCreateWithoutCaseReferralInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  CaseTransfer?: Maybe<CaseTransferCreateNestedManyWithoutNetworkInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutNetworkIdInput>,
};

export type NetworkCreateWithoutCaseTransferInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutNetworkInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutNetworkIdInput>,
};

export type NetworkCreateWithoutLogRequestInput = {
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutNetworkInput>,
  CaseTransfer?: Maybe<CaseTransferCreateNestedManyWithoutNetworkInput>,
};

export type NetworkMaxAggregate = {
  id: Scalars['Int'],
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type NetworkMinAggregate = {
  id: Scalars['Int'],
  address?: Maybe<Scalars['String']>,
  contactPerson?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  noContact?: Maybe<Scalars['String']>,
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type NetworkOrderByInput = {
  id?: Maybe<SortOrder>,
  address?: Maybe<SortOrder>,
  contactPerson?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  email?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  noContact?: Maybe<SortOrder>,
  provinceId?: Maybe<SortOrder>,
  regencyId?: Maybe<SortOrder>,
  type?: Maybe<SortOrder>,
  status?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
};

export type NetworkRelationFilter = {
  is?: Maybe<NetworkWhereInput>,
  isNot?: Maybe<NetworkWhereInput>,
};

export enum NetworkScalarFieldEnum {
  Id = 'id',
  Address = 'address',
  ContactPerson = 'contactPerson',
  CreatedAt = 'createdAt',
  Email = 'email',
  Name = 'name',
  NoContact = 'noContact',
  ProvinceId = 'provinceId',
  RegencyId = 'regencyId',
  Type = 'type',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type NetworkSumAggregate = {
  id: Scalars['Int'],
  provinceId?: Maybe<Scalars['Int']>,
  regencyId?: Maybe<Scalars['Int']>,
};

export type NetworkUpdateInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  contactPerson?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  noContact?: Maybe<NullableStringFieldUpdateOperationsInput>,
  provinceId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  regencyId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  type?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutNetworkInput>,
  CaseTransfer?: Maybe<CaseTransferUpdateManyWithoutNetworkInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutNetworkIdInput>,
};

export type NetworkUpdateManyMutationInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  contactPerson?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  noContact?: Maybe<NullableStringFieldUpdateOperationsInput>,
  provinceId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  regencyId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  type?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
};

export type NetworkUpdateOneWithoutCaseReferralInput = {
  create?: Maybe<NetworkCreateWithoutCaseReferralInput>,
  connectOrCreate?: Maybe<NetworkCreateOrConnectWithoutCaseReferralInput>,
  upsert?: Maybe<NetworkUpsertWithoutCaseReferralInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<NetworkUpdateWithoutCaseReferralInput>,
};

export type NetworkUpdateOneWithoutCaseTransferInput = {
  create?: Maybe<NetworkCreateWithoutCaseTransferInput>,
  connectOrCreate?: Maybe<NetworkCreateOrConnectWithoutCaseTransferInput>,
  upsert?: Maybe<NetworkUpsertWithoutCaseTransferInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<NetworkUpdateWithoutCaseTransferInput>,
};

export type NetworkUpdateOneWithoutLogRequestInput = {
  create?: Maybe<NetworkCreateWithoutLogRequestInput>,
  connectOrCreate?: Maybe<NetworkCreateOrConnectWithoutLogRequestInput>,
  upsert?: Maybe<NetworkUpsertWithoutLogRequestInput>,
  connect?: Maybe<NetworkWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<NetworkUpdateWithoutLogRequestInput>,
};

export type NetworkUpdateWithoutCaseReferralInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  contactPerson?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  noContact?: Maybe<NullableStringFieldUpdateOperationsInput>,
  provinceId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  regencyId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  type?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  CaseTransfer?: Maybe<CaseTransferUpdateManyWithoutNetworkInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutNetworkIdInput>,
};

export type NetworkUpdateWithoutCaseTransferInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  contactPerson?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  noContact?: Maybe<NullableStringFieldUpdateOperationsInput>,
  provinceId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  regencyId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  type?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutNetworkInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutNetworkIdInput>,
};

export type NetworkUpdateWithoutLogRequestInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  contactPerson?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  noContact?: Maybe<NullableStringFieldUpdateOperationsInput>,
  provinceId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  regencyId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  type?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutNetworkInput>,
  CaseTransfer?: Maybe<CaseTransferUpdateManyWithoutNetworkInput>,
};

export type NetworkUpsertWithoutCaseReferralInput = {
  update: NetworkUpdateWithoutCaseReferralInput,
  create: NetworkCreateWithoutCaseReferralInput,
};

export type NetworkUpsertWithoutCaseTransferInput = {
  update: NetworkUpdateWithoutCaseTransferInput,
  create: NetworkCreateWithoutCaseTransferInput,
};

export type NetworkUpsertWithoutLogRequestInput = {
  update: NetworkUpdateWithoutLogRequestInput,
  create: NetworkCreateWithoutLogRequestInput,
};

export type NetworkWhereInput = {
  AND?: Maybe<Array<NetworkWhereInput>>,
  OR?: Maybe<Array<NetworkWhereInput>>,
  NOT?: Maybe<Array<NetworkWhereInput>>,
  id?: Maybe<IntFilter>,
  address?: Maybe<StringNullableFilter>,
  contactPerson?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  email?: Maybe<StringNullableFilter>,
  name?: Maybe<StringNullableFilter>,
  noContact?: Maybe<StringNullableFilter>,
  provinceId?: Maybe<IntNullableFilter>,
  regencyId?: Maybe<IntNullableFilter>,
  type?: Maybe<StringNullableFilter>,
  status?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  CaseReferral?: Maybe<CaseReferralListRelationFilter>,
  CaseTransfer?: Maybe<CaseTransferListRelationFilter>,
  LogRequest?: Maybe<LogRequestListRelationFilter>,
};

export type NetworkWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>,
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>,
  increment?: Maybe<Scalars['Int']>,
  decrement?: Maybe<Scalars['Int']>,
  multiply?: Maybe<Scalars['Int']>,
  divide?: Maybe<Scalars['Int']>,
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>,
};

export type Person = {
  id: Scalars['Int'],
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications: Array<Application>,
  CaseReferral: Array<CaseReferral>,
  CaseKorban: Array<CaseKorban>,
  CasePelaku: Array<CasePelaku>,
  clients: Array<Client>,
  LogRequest: Array<LogRequest>,
  documents: Array<PersonDocument>,
};


export type PersonApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>,
  orderBy?: Maybe<Array<ApplicationOrderByInput>>,
  cursor?: Maybe<ApplicationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<ApplicationScalarFieldEnum>>
};


export type PersonCaseReferralArgs = {
  where?: Maybe<CaseReferralWhereInput>,
  orderBy?: Maybe<Array<CaseReferralOrderByInput>>,
  cursor?: Maybe<CaseReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseReferralScalarFieldEnum>>
};


export type PersonCaseKorbanArgs = {
  where?: Maybe<CaseKorbanWhereInput>,
  orderBy?: Maybe<Array<CaseKorbanOrderByInput>>,
  cursor?: Maybe<CaseKorbanWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseKorbanScalarFieldEnum>>
};


export type PersonCasePelakuArgs = {
  where?: Maybe<CasePelakuWhereInput>,
  orderBy?: Maybe<Array<CasePelakuOrderByInput>>,
  cursor?: Maybe<CasePelakuWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CasePelakuScalarFieldEnum>>
};


export type PersonClientsArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<Array<ClientOrderByInput>>,
  cursor?: Maybe<ClientWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<ClientScalarFieldEnum>>
};


export type PersonLogRequestArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestScalarFieldEnum>>
};


export type PersonDocumentsArgs = {
  where?: Maybe<PersonDocumentWhereInput>,
  orderBy?: Maybe<Array<PersonDocumentOrderByInput>>,
  cursor?: Maybe<PersonDocumentWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<PersonDocumentScalarFieldEnum>>
};

export type PersonAvgAggregate = {
  id: Scalars['Float'],
  jmlAnggota?: Maybe<Scalars['Float']>,
};

export type PersonCountAggregate = {
  id: Scalars['Int'],
  agama?: Maybe<Scalars['Int']>,
  alamatDomisili?: Maybe<Scalars['Int']>,
  alamatId?: Maybe<Scalars['Int']>,
  alatBantu?: Maybe<Scalars['Int']>,
  alias?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  disabilitas?: Maybe<Scalars['Int']>,
  distrikDomisili?: Maybe<Scalars['Int']>,
  distrikId?: Maybe<Scalars['Int']>,
  domisiliSama?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['Int']>,
  golDarah?: Maybe<Scalars['Int']>,
  jenisDisabilitas?: Maybe<Scalars['Int']>,
  jenisDomisili?: Maybe<Scalars['Int']>,
  jenisId?: Maybe<Scalars['Int']>,
  jenisKelamin?: Maybe<Scalars['Int']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['Int']>,
  nomorId?: Maybe<Scalars['Int']>,
  pekerjaan?: Maybe<Scalars['Int']>,
  pendidikan?: Maybe<Scalars['Int']>,
  statusPernikahan?: Maybe<Scalars['Int']>,
  telepon?: Maybe<Scalars['Int']>,
  tglLahir?: Maybe<Scalars['Int']>,
  tmpLahir?: Maybe<Scalars['Int']>,
  unitSatuan?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  wargaNegara?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type PersonCreateInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateNestedManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanCreateNestedManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuCreateNestedManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateNestedManyWithoutPersonInput>,
};

export type PersonCreateNestedOneWithoutApplicationsInput = {
  create?: Maybe<PersonCreateWithoutApplicationsInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutApplicationsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateNestedOneWithoutCaseKorbanInput = {
  create?: Maybe<PersonCreateWithoutCaseKorbanInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutCaseKorbanInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateNestedOneWithoutCasePelakuInput = {
  create?: Maybe<PersonCreateWithoutCasePelakuInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutCasePelakuInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateNestedOneWithoutCaseReferralInput = {
  create?: Maybe<PersonCreateWithoutCaseReferralInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutCaseReferralInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateNestedOneWithoutClientsInput = {
  create?: Maybe<PersonCreateWithoutClientsInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutClientsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateNestedOneWithoutDocumentsInput = {
  create?: Maybe<PersonCreateWithoutDocumentsInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutDocumentsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateNestedOneWithoutLogRequestInput = {
  create?: Maybe<PersonCreateWithoutLogRequestInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutLogRequestInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
};

export type PersonCreateOrConnectWithoutApplicationsInput = {
  where: PersonWhereUniqueInput,
  create: PersonCreateWithoutApplicationsInput,
};

export type PersonCreateOrConnectWithoutCaseKorbanInput = {
  where: PersonWhereUniqueInput,
  create: PersonCreateWithoutCaseKorbanInput,
};

export type PersonCreateOrConnectWithoutCasePelakuInput = {
  where: PersonWhereUniqueInput,
  create: PersonCreateWithoutCasePelakuInput,
};

export type PersonCreateOrConnectWithoutCaseReferralInput = {
  where: PersonWhereUniqueInput,
  create: PersonCreateWithoutCaseReferralInput,
};

export type PersonCreateOrConnectWithoutClientsInput = {
  where: PersonWhereUniqueInput,
  create: PersonCreateWithoutClientsInput,
};

export type PersonCreateOrConnectWithoutDocumentsInput = {
  where: PersonWhereUniqueInput,
  create: PersonCreateWithoutDocumentsInput,
};

export type PersonCreateOrConnectWithoutLogRequestInput = {
  where: PersonWhereUniqueInput,
  create: PersonCreateWithoutLogRequestInput,
};

export type PersonCreateWithoutApplicationsInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanCreateNestedManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuCreateNestedManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateNestedManyWithoutPersonInput>,
};

export type PersonCreateWithoutCaseKorbanInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateNestedManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutClientInput>,
  CasePelaku?: Maybe<CasePelakuCreateNestedManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateNestedManyWithoutPersonInput>,
};

export type PersonCreateWithoutCasePelakuInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateNestedManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanCreateNestedManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateNestedManyWithoutPersonInput>,
};

export type PersonCreateWithoutCaseReferralInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateNestedManyWithoutWakilIdInput>,
  CaseKorban?: Maybe<CaseKorbanCreateNestedManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuCreateNestedManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateNestedManyWithoutPersonInput>,
};

export type PersonCreateWithoutClientsInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateNestedManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanCreateNestedManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuCreateNestedManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateNestedManyWithoutPersonInput>,
};

export type PersonCreateWithoutDocumentsInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateNestedManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanCreateNestedManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuCreateNestedManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestCreateNestedManyWithoutPersonIdInput>,
};

export type PersonCreateWithoutLogRequestInput = {
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas: Scalars['Boolean'],
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama: Scalars['Boolean'],
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
  applications?: Maybe<ApplicationCreateNestedManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralCreateNestedManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanCreateNestedManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuCreateNestedManyWithoutPersonIdInput>,
  clients?: Maybe<ClientCreateNestedManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentCreateNestedManyWithoutPersonInput>,
};

export type PersonDocument = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
  personId?: Maybe<Scalars['Int']>,
  Person?: Maybe<Person>,
};

export type PersonDocumentAvgAggregate = {
  id: Scalars['Float'],
  file?: Maybe<Scalars['Float']>,
  title?: Maybe<Scalars['Float']>,
  personId?: Maybe<Scalars['Float']>,
};

export type PersonDocumentCountAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['Int']>,
  deletedAt?: Maybe<Scalars['Int']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  personId?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type PersonDocumentCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  Person?: Maybe<PersonCreateNestedOneWithoutDocumentsInput>,
};

export type PersonDocumentCreateNestedManyWithoutPersonInput = {
  create?: Maybe<Array<PersonDocumentCreateWithoutPersonInput>>,
  connectOrCreate?: Maybe<Array<PersonDocumentCreateOrConnectWithoutPersonInput>>,
  connect?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
};

export type PersonDocumentCreateOrConnectWithoutPersonInput = {
  where: PersonDocumentWhereUniqueInput,
  create: PersonDocumentCreateWithoutPersonInput,
};

export type PersonDocumentCreateWithoutPersonInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PersonDocumentListRelationFilter = {
  every?: Maybe<PersonDocumentWhereInput>,
  some?: Maybe<PersonDocumentWhereInput>,
  none?: Maybe<PersonDocumentWhereInput>,
};

export type PersonDocumentMaxAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  personId?: Maybe<Scalars['Int']>,
};

export type PersonDocumentMinAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  personId?: Maybe<Scalars['Int']>,
};

export type PersonDocumentOrderByInput = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  deletedAt?: Maybe<SortOrder>,
  file?: Maybe<SortOrder>,
  title?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  personId?: Maybe<SortOrder>,
};

export enum PersonDocumentScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  File = 'file',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  PersonId = 'personId'
}

export type PersonDocumentScalarWhereInput = {
  AND?: Maybe<Array<PersonDocumentScalarWhereInput>>,
  OR?: Maybe<Array<PersonDocumentScalarWhereInput>>,
  NOT?: Maybe<Array<PersonDocumentScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  deletedAt?: Maybe<DateTimeNullableFilter>,
  file?: Maybe<IntNullableFilter>,
  title?: Maybe<IntNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  personId?: Maybe<IntNullableFilter>,
};

export type PersonDocumentSumAggregate = {
  id: Scalars['Int'],
  file?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['Int']>,
  personId?: Maybe<Scalars['Int']>,
};

export type PersonDocumentUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  file?: Maybe<NullableIntFieldUpdateOperationsInput>,
  title?: Maybe<NullableIntFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  Person?: Maybe<PersonUpdateOneWithoutDocumentsInput>,
};

export type PersonDocumentUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  file?: Maybe<NullableIntFieldUpdateOperationsInput>,
  title?: Maybe<NullableIntFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
};

export type PersonDocumentUpdateManyWithoutPersonInput = {
  create?: Maybe<Array<PersonDocumentCreateWithoutPersonInput>>,
  connectOrCreate?: Maybe<Array<PersonDocumentCreateOrConnectWithoutPersonInput>>,
  upsert?: Maybe<Array<PersonDocumentUpsertWithWhereUniqueWithoutPersonInput>>,
  connect?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
  set?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
  disconnect?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
  delete?: Maybe<Array<PersonDocumentWhereUniqueInput>>,
  update?: Maybe<Array<PersonDocumentUpdateWithWhereUniqueWithoutPersonInput>>,
  updateMany?: Maybe<Array<PersonDocumentUpdateManyWithWhereWithoutPersonInput>>,
  deleteMany?: Maybe<Array<PersonDocumentScalarWhereInput>>,
};

export type PersonDocumentUpdateManyWithWhereWithoutPersonInput = {
  where: PersonDocumentScalarWhereInput,
  data: PersonDocumentUpdateManyMutationInput,
};

export type PersonDocumentUpdateWithoutPersonInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  file?: Maybe<NullableIntFieldUpdateOperationsInput>,
  title?: Maybe<NullableIntFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
};

export type PersonDocumentUpdateWithWhereUniqueWithoutPersonInput = {
  where: PersonDocumentWhereUniqueInput,
  data: PersonDocumentUpdateWithoutPersonInput,
};

export type PersonDocumentUpsertWithWhereUniqueWithoutPersonInput = {
  where: PersonDocumentWhereUniqueInput,
  update: PersonDocumentUpdateWithoutPersonInput,
  create: PersonDocumentCreateWithoutPersonInput,
};

export type PersonDocumentWhereInput = {
  AND?: Maybe<Array<PersonDocumentWhereInput>>,
  OR?: Maybe<Array<PersonDocumentWhereInput>>,
  NOT?: Maybe<Array<PersonDocumentWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  deletedAt?: Maybe<DateTimeNullableFilter>,
  file?: Maybe<IntNullableFilter>,
  title?: Maybe<IntNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  personId?: Maybe<IntNullableFilter>,
  Person?: Maybe<PersonRelationFilter>,
};

export type PersonDocumentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type PersonMaxAggregate = {
  id: Scalars['Int'],
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
};

export type PersonMinAggregate = {
  id: Scalars['Int'],
  agama?: Maybe<Scalars['String']>,
  alamatDomisili?: Maybe<Scalars['String']>,
  alamatId?: Maybe<Scalars['String']>,
  alatBantu?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  disabilitas?: Maybe<Scalars['Boolean']>,
  distrikDomisili?: Maybe<Scalars['String']>,
  distrikId?: Maybe<Scalars['String']>,
  domisiliSama?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  golDarah?: Maybe<Scalars['String']>,
  jenisDisabilitas?: Maybe<Scalars['String']>,
  jenisDomisili?: Maybe<Scalars['String']>,
  jenisId?: Maybe<Scalars['String']>,
  jenisKelamin?: Maybe<Scalars['String']>,
  jmlAnggota?: Maybe<Scalars['Int']>,
  namaLengkap?: Maybe<Scalars['String']>,
  nomorId?: Maybe<Scalars['String']>,
  pekerjaan?: Maybe<Scalars['String']>,
  pendidikan?: Maybe<Scalars['String']>,
  statusPernikahan?: Maybe<Scalars['String']>,
  telepon?: Maybe<Scalars['String']>,
  tglLahir?: Maybe<Scalars['DateTime']>,
  tmpLahir?: Maybe<Scalars['String']>,
  unitSatuan?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  wargaNegara?: Maybe<Scalars['String']>,
};

export type PersonOrderByInput = {
  id?: Maybe<SortOrder>,
  agama?: Maybe<SortOrder>,
  alamatDomisili?: Maybe<SortOrder>,
  alamatId?: Maybe<SortOrder>,
  alatBantu?: Maybe<SortOrder>,
  alias?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  disabilitas?: Maybe<SortOrder>,
  distrikDomisili?: Maybe<SortOrder>,
  distrikId?: Maybe<SortOrder>,
  domisiliSama?: Maybe<SortOrder>,
  email?: Maybe<SortOrder>,
  golDarah?: Maybe<SortOrder>,
  jenisDisabilitas?: Maybe<SortOrder>,
  jenisDomisili?: Maybe<SortOrder>,
  jenisId?: Maybe<SortOrder>,
  jenisKelamin?: Maybe<SortOrder>,
  jmlAnggota?: Maybe<SortOrder>,
  namaLengkap?: Maybe<SortOrder>,
  nomorId?: Maybe<SortOrder>,
  pekerjaan?: Maybe<SortOrder>,
  pendidikan?: Maybe<SortOrder>,
  statusPernikahan?: Maybe<SortOrder>,
  telepon?: Maybe<SortOrder>,
  tglLahir?: Maybe<SortOrder>,
  tmpLahir?: Maybe<SortOrder>,
  unitSatuan?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  wargaNegara?: Maybe<SortOrder>,
};

export type PersonRelationFilter = {
  is?: Maybe<PersonWhereInput>,
  isNot?: Maybe<PersonWhereInput>,
};

export enum PersonScalarFieldEnum {
  Id = 'id',
  Agama = 'agama',
  AlamatDomisili = 'alamatDomisili',
  AlamatId = 'alamatId',
  AlatBantu = 'alatBantu',
  Alias = 'alias',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Disabilitas = 'disabilitas',
  DistrikDomisili = 'distrikDomisili',
  DistrikId = 'distrikId',
  DomisiliSama = 'domisiliSama',
  Email = 'email',
  GolDarah = 'golDarah',
  JenisDisabilitas = 'jenisDisabilitas',
  JenisDomisili = 'jenisDomisili',
  JenisId = 'jenisId',
  JenisKelamin = 'jenisKelamin',
  JmlAnggota = 'jmlAnggota',
  NamaLengkap = 'namaLengkap',
  NomorId = 'nomorId',
  Pekerjaan = 'pekerjaan',
  Pendidikan = 'pendidikan',
  StatusPernikahan = 'statusPernikahan',
  Telepon = 'telepon',
  TglLahir = 'tglLahir',
  TmpLahir = 'tmpLahir',
  UnitSatuan = 'unitSatuan',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  WargaNegara = 'wargaNegara'
}

export type PersonSumAggregate = {
  id: Scalars['Int'],
  jmlAnggota?: Maybe<Scalars['Int']>,
};

export type PersonUpdateInput = {
  agama?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alatBantu?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  disabilitas?: Maybe<BoolFieldUpdateOperationsInput>,
  distrikDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  distrikId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  domisiliSama?: Maybe<BoolFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  golDarah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDisabilitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisKelamin?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jmlAnggota?: Maybe<NullableIntFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  nomorId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pekerjaan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendidikan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusPernikahan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  telepon?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglLahir?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tmpLahir?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unitSatuan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wargaNegara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonInput>,
};

export type PersonUpdateManyMutationInput = {
  agama?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alatBantu?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  disabilitas?: Maybe<BoolFieldUpdateOperationsInput>,
  distrikDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  distrikId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  domisiliSama?: Maybe<BoolFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  golDarah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDisabilitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisKelamin?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jmlAnggota?: Maybe<NullableIntFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  nomorId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pekerjaan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendidikan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusPernikahan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  telepon?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglLahir?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tmpLahir?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unitSatuan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wargaNegara?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type PersonUpdateOneWithoutApplicationsInput = {
  create?: Maybe<PersonCreateWithoutApplicationsInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutApplicationsInput>,
  upsert?: Maybe<PersonUpsertWithoutApplicationsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutApplicationsInput>,
};

export type PersonUpdateOneWithoutCaseKorbanInput = {
  create?: Maybe<PersonCreateWithoutCaseKorbanInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutCaseKorbanInput>,
  upsert?: Maybe<PersonUpsertWithoutCaseKorbanInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutCaseKorbanInput>,
};

export type PersonUpdateOneWithoutCasePelakuInput = {
  create?: Maybe<PersonCreateWithoutCasePelakuInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutCasePelakuInput>,
  upsert?: Maybe<PersonUpsertWithoutCasePelakuInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutCasePelakuInput>,
};

export type PersonUpdateOneWithoutCaseReferralInput = {
  create?: Maybe<PersonCreateWithoutCaseReferralInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutCaseReferralInput>,
  upsert?: Maybe<PersonUpsertWithoutCaseReferralInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutCaseReferralInput>,
};

export type PersonUpdateOneWithoutClientsInput = {
  create?: Maybe<PersonCreateWithoutClientsInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutClientsInput>,
  upsert?: Maybe<PersonUpsertWithoutClientsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutClientsInput>,
};

export type PersonUpdateOneWithoutDocumentsInput = {
  create?: Maybe<PersonCreateWithoutDocumentsInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutDocumentsInput>,
  upsert?: Maybe<PersonUpsertWithoutDocumentsInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutDocumentsInput>,
};

export type PersonUpdateOneWithoutLogRequestInput = {
  create?: Maybe<PersonCreateWithoutLogRequestInput>,
  connectOrCreate?: Maybe<PersonCreateOrConnectWithoutLogRequestInput>,
  upsert?: Maybe<PersonUpsertWithoutLogRequestInput>,
  connect?: Maybe<PersonWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<PersonUpdateWithoutLogRequestInput>,
};

export type PersonUpdateWithoutApplicationsInput = {
  agama?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alatBantu?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  disabilitas?: Maybe<BoolFieldUpdateOperationsInput>,
  distrikDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  distrikId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  domisiliSama?: Maybe<BoolFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  golDarah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDisabilitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisKelamin?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jmlAnggota?: Maybe<NullableIntFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  nomorId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pekerjaan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendidikan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusPernikahan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  telepon?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglLahir?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tmpLahir?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unitSatuan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wargaNegara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonInput>,
};

export type PersonUpdateWithoutCaseKorbanInput = {
  agama?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alatBantu?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  disabilitas?: Maybe<BoolFieldUpdateOperationsInput>,
  distrikDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  distrikId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  domisiliSama?: Maybe<BoolFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  golDarah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDisabilitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisKelamin?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jmlAnggota?: Maybe<NullableIntFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  nomorId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pekerjaan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendidikan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusPernikahan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  telepon?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglLahir?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tmpLahir?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unitSatuan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wargaNegara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutClientInput>,
  CasePelaku?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonInput>,
};

export type PersonUpdateWithoutCasePelakuInput = {
  agama?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alatBantu?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  disabilitas?: Maybe<BoolFieldUpdateOperationsInput>,
  distrikDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  distrikId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  domisiliSama?: Maybe<BoolFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  golDarah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDisabilitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisKelamin?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jmlAnggota?: Maybe<NullableIntFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  nomorId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pekerjaan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendidikan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusPernikahan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  telepon?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglLahir?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tmpLahir?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unitSatuan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wargaNegara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonInput>,
};

export type PersonUpdateWithoutCaseReferralInput = {
  agama?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alatBantu?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  disabilitas?: Maybe<BoolFieldUpdateOperationsInput>,
  distrikDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  distrikId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  domisiliSama?: Maybe<BoolFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  golDarah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDisabilitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisKelamin?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jmlAnggota?: Maybe<NullableIntFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  nomorId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pekerjaan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendidikan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusPernikahan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  telepon?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglLahir?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tmpLahir?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unitSatuan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wargaNegara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  CaseKorban?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonInput>,
};

export type PersonUpdateWithoutClientsInput = {
  agama?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alatBantu?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  disabilitas?: Maybe<BoolFieldUpdateOperationsInput>,
  distrikDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  distrikId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  domisiliSama?: Maybe<BoolFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  golDarah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDisabilitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisKelamin?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jmlAnggota?: Maybe<NullableIntFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  nomorId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pekerjaan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendidikan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusPernikahan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  telepon?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglLahir?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tmpLahir?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unitSatuan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wargaNegara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonInput>,
};

export type PersonUpdateWithoutDocumentsInput = {
  agama?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alatBantu?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  disabilitas?: Maybe<BoolFieldUpdateOperationsInput>,
  distrikDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  distrikId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  domisiliSama?: Maybe<BoolFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  golDarah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDisabilitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisKelamin?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jmlAnggota?: Maybe<NullableIntFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  nomorId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pekerjaan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendidikan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusPernikahan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  telepon?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglLahir?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tmpLahir?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unitSatuan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wargaNegara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  LogRequest?: Maybe<LogRequestUpdateManyWithoutPersonIdInput>,
};

export type PersonUpdateWithoutLogRequestInput = {
  agama?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alamatId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alatBantu?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  disabilitas?: Maybe<BoolFieldUpdateOperationsInput>,
  distrikDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  distrikId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  domisiliSama?: Maybe<BoolFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  golDarah?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDisabilitas?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisDomisili?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jenisKelamin?: Maybe<NullableStringFieldUpdateOperationsInput>,
  jmlAnggota?: Maybe<NullableIntFieldUpdateOperationsInput>,
  namaLengkap?: Maybe<NullableStringFieldUpdateOperationsInput>,
  nomorId?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pekerjaan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pendidikan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  statusPernikahan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  telepon?: Maybe<NullableStringFieldUpdateOperationsInput>,
  tglLahir?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  tmpLahir?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unitSatuan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  wargaNegara?: Maybe<NullableStringFieldUpdateOperationsInput>,
  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>,
  CaseReferral?: Maybe<CaseReferralUpdateManyWithoutClientInput>,
  CaseKorban?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>,
  CasePelaku?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>,
  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>,
  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonInput>,
};

export type PersonUpsertWithoutApplicationsInput = {
  update: PersonUpdateWithoutApplicationsInput,
  create: PersonCreateWithoutApplicationsInput,
};

export type PersonUpsertWithoutCaseKorbanInput = {
  update: PersonUpdateWithoutCaseKorbanInput,
  create: PersonCreateWithoutCaseKorbanInput,
};

export type PersonUpsertWithoutCasePelakuInput = {
  update: PersonUpdateWithoutCasePelakuInput,
  create: PersonCreateWithoutCasePelakuInput,
};

export type PersonUpsertWithoutCaseReferralInput = {
  update: PersonUpdateWithoutCaseReferralInput,
  create: PersonCreateWithoutCaseReferralInput,
};

export type PersonUpsertWithoutClientsInput = {
  update: PersonUpdateWithoutClientsInput,
  create: PersonCreateWithoutClientsInput,
};

export type PersonUpsertWithoutDocumentsInput = {
  update: PersonUpdateWithoutDocumentsInput,
  create: PersonCreateWithoutDocumentsInput,
};

export type PersonUpsertWithoutLogRequestInput = {
  update: PersonUpdateWithoutLogRequestInput,
  create: PersonCreateWithoutLogRequestInput,
};

export type PersonWhereInput = {
  AND?: Maybe<Array<PersonWhereInput>>,
  OR?: Maybe<Array<PersonWhereInput>>,
  NOT?: Maybe<Array<PersonWhereInput>>,
  id?: Maybe<IntFilter>,
  agama?: Maybe<StringNullableFilter>,
  alamatDomisili?: Maybe<StringNullableFilter>,
  alamatId?: Maybe<StringNullableFilter>,
  alatBantu?: Maybe<StringNullableFilter>,
  alias?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  disabilitas?: Maybe<BoolFilter>,
  distrikDomisili?: Maybe<StringNullableFilter>,
  distrikId?: Maybe<StringNullableFilter>,
  domisiliSama?: Maybe<BoolFilter>,
  email?: Maybe<StringNullableFilter>,
  golDarah?: Maybe<StringNullableFilter>,
  jenisDisabilitas?: Maybe<StringNullableFilter>,
  jenisDomisili?: Maybe<StringNullableFilter>,
  jenisId?: Maybe<StringNullableFilter>,
  jenisKelamin?: Maybe<StringNullableFilter>,
  jmlAnggota?: Maybe<IntNullableFilter>,
  namaLengkap?: Maybe<StringNullableFilter>,
  nomorId?: Maybe<StringNullableFilter>,
  pekerjaan?: Maybe<StringNullableFilter>,
  pendidikan?: Maybe<StringNullableFilter>,
  statusPernikahan?: Maybe<StringNullableFilter>,
  telepon?: Maybe<StringNullableFilter>,
  tglLahir?: Maybe<DateTimeNullableFilter>,
  tmpLahir?: Maybe<StringNullableFilter>,
  unitSatuan?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  wargaNegara?: Maybe<StringNullableFilter>,
  applications?: Maybe<ApplicationListRelationFilter>,
  CaseReferral?: Maybe<CaseReferralListRelationFilter>,
  CaseKorban?: Maybe<CaseKorbanListRelationFilter>,
  CasePelaku?: Maybe<CasePelakuListRelationFilter>,
  clients?: Maybe<ClientListRelationFilter>,
  LogRequest?: Maybe<LogRequestListRelationFilter>,
  documents?: Maybe<PersonDocumentListRelationFilter>,
};

export type PersonWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type Query = {
  application?: Maybe<Application>,
  findFirstApplication?: Maybe<Application>,
  applications: Array<Application>,
  aggregateApplication: AggregateApplication,
  caseClassification?: Maybe<CaseClassification>,
  findFirstCaseClassification?: Maybe<CaseClassification>,
  caseClassifications: Array<CaseClassification>,
  aggregateCaseClassification: AggregateCaseClassification,
  caseConsultation?: Maybe<CaseConsultation>,
  findFirstCaseConsultation?: Maybe<CaseConsultation>,
  caseConsultations: Array<CaseConsultation>,
  aggregateCaseConsultation: AggregateCaseConsultation,
  caseConsultationApp?: Maybe<CaseConsultationApp>,
  findFirstCaseConsultationApp?: Maybe<CaseConsultationApp>,
  caseConsultationApps: Array<CaseConsultationApp>,
  aggregateCaseConsultationApp: AggregateCaseConsultationApp,
  caseDocument?: Maybe<CaseDocument>,
  findFirstCaseDocument?: Maybe<CaseDocument>,
  caseDocuments: Array<CaseDocument>,
  aggregateCaseDocument: AggregateCaseDocument,
  caseIssue?: Maybe<CaseIssue>,
  findFirstCaseIssue?: Maybe<CaseIssue>,
  caseIssues: Array<CaseIssue>,
  aggregateCaseIssue: AggregateCaseIssue,
  caseKorban?: Maybe<CaseKorban>,
  findFirstCaseKorban?: Maybe<CaseKorban>,
  caseKorbans: Array<CaseKorban>,
  aggregateCaseKorban: AggregateCaseKorban,
  casePelaku?: Maybe<CasePelaku>,
  findFirstCasePelaku?: Maybe<CasePelaku>,
  casePelakus: Array<CasePelaku>,
  aggregateCasePelaku: AggregateCasePelaku,
  casePk?: Maybe<CasePk>,
  findFirstCasePk?: Maybe<CasePk>,
  casePks: Array<CasePk>,
  aggregateCasePk: AggregateCasePk,
  caseProgress?: Maybe<CaseProgress>,
  findFirstCaseProgress?: Maybe<CaseProgress>,
  caseProgresses: Array<CaseProgress>,
  aggregateCaseProgress: AggregateCaseProgress,
  caseProgressActivity?: Maybe<CaseProgressActivity>,
  findFirstCaseProgressActivity?: Maybe<CaseProgressActivity>,
  caseProgressActivities: Array<CaseProgressActivity>,
  aggregateCaseProgressActivity: AggregateCaseProgressActivity,
  caseProgressActivityLit?: Maybe<CaseProgressActivityLit>,
  findFirstCaseProgressActivityLit?: Maybe<CaseProgressActivityLit>,
  caseProgressActivityLits: Array<CaseProgressActivityLit>,
  aggregateCaseProgressActivityLit: AggregateCaseProgressActivityLit,
  caseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>,
  findFirstCaseProgressActivityNonlit?: Maybe<CaseProgressActivityNonlit>,
  caseProgressActivityNonlits: Array<CaseProgressActivityNonlit>,
  aggregateCaseProgressActivityNonlit: AggregateCaseProgressActivityNonlit,
  caseReferral?: Maybe<CaseReferral>,
  findFirstCaseReferral?: Maybe<CaseReferral>,
  caseReferrals: Array<CaseReferral>,
  aggregateCaseReferral: AggregateCaseReferral,
  caseTransfer?: Maybe<CaseTransfer>,
  findFirstCaseTransfer?: Maybe<CaseTransfer>,
  caseTransfers: Array<CaseTransfer>,
  aggregateCaseTransfer: AggregateCaseTransfer,
  caseTransferReferral?: Maybe<CaseTransferReferral>,
  findFirstCaseTransferReferral?: Maybe<CaseTransferReferral>,
  caseTransferReferrals: Array<CaseTransferReferral>,
  aggregateCaseTransferReferral: AggregateCaseTransferReferral,
  caseViolatedRight?: Maybe<CaseViolatedRight>,
  findFirstCaseViolatedRight?: Maybe<CaseViolatedRight>,
  caseViolatedRights: Array<CaseViolatedRight>,
  aggregateCaseViolatedRight: AggregateCaseViolatedRight,
  client?: Maybe<Client>,
  findFirstClient?: Maybe<Client>,
  clients: Array<Client>,
  aggregateClient: AggregateClient,
  daftarPengacara?: Maybe<DaftarPengacara>,
  findFirstDaftarPengacara?: Maybe<DaftarPengacara>,
  daftarPengacaras: Array<DaftarPengacara>,
  aggregateDaftarPengacara: AggregateDaftarPengacara,
  dataDict?: Maybe<DataDict>,
  findFirstDataDict?: Maybe<DataDict>,
  dataDicts: Array<DataDict>,
  aggregateDataDict: AggregateDataDict,
  dataDictLocal?: Maybe<DataDictLocal>,
  findFirstDataDictLocal?: Maybe<DataDictLocal>,
  dataDictLocals: Array<DataDictLocal>,
  aggregateDataDictLocal: AggregateDataDictLocal,
  logRequest?: Maybe<LogRequest>,
  findFirstLogRequest?: Maybe<LogRequest>,
  logRequests: Array<LogRequest>,
  aggregateLogRequest: AggregateLogRequest,
  logRequestApp?: Maybe<LogRequestApp>,
  findFirstLogRequestApp?: Maybe<LogRequestApp>,
  logRequestApps: Array<LogRequestApp>,
  aggregateLogRequestApp: AggregateLogRequestApp,
  mtVocab?: Maybe<MtVocab>,
  findFirstMtVocab?: Maybe<MtVocab>,
  mtVocabs: Array<MtVocab>,
  aggregateMtVocab: AggregateMtVocab,
  mtVocabGroup?: Maybe<MtVocabGroup>,
  findFirstMtVocabGroup?: Maybe<MtVocabGroup>,
  mtVocabGroups: Array<MtVocabGroup>,
  aggregateMtVocabGroup: AggregateMtVocabGroup,
  network?: Maybe<Network>,
  findFirstNetwork?: Maybe<Network>,
  networks: Array<Network>,
  aggregateNetwork: AggregateNetwork,
  person?: Maybe<Person>,
  findFirstPerson?: Maybe<Person>,
  people: Array<Person>,
  aggregatePerson: AggregatePerson,
  personDocument?: Maybe<PersonDocument>,
  findFirstPersonDocument?: Maybe<PersonDocument>,
  personDocuments: Array<PersonDocument>,
  aggregatePersonDocument: AggregatePersonDocument,
  renamedcase?: Maybe<Renamedcase>,
  findFirstRenamedcase?: Maybe<Renamedcase>,
  renamedcases: Array<Renamedcase>,
  aggregateRenamedcase: AggregateRenamedcase,
  role?: Maybe<Role>,
  findFirstRole?: Maybe<Role>,
  roles: Array<Role>,
  aggregateRole: AggregateRole,
  rolesType?: Maybe<RolesType>,
  findFirstRolesType?: Maybe<RolesType>,
  rolesTypes: Array<RolesType>,
  aggregateRolesType: AggregateRolesType,
  srcAnalisa?: Maybe<SrcAnalisa>,
  findFirstSrcAnalisa?: Maybe<SrcAnalisa>,
  srcAnalisas: Array<SrcAnalisa>,
  aggregateSrcAnalisa: AggregateSrcAnalisa,
  srcOperator?: Maybe<SrcOperator>,
  findFirstSrcOperator?: Maybe<SrcOperator>,
  srcOperators: Array<SrcOperator>,
  aggregateSrcOperator: AggregateSrcOperator,
  srcTemplate?: Maybe<SrcTemplate>,
  findFirstSrcTemplate?: Maybe<SrcTemplate>,
  srcTemplates: Array<SrcTemplate>,
  aggregateSrcTemplate: AggregateSrcTemplate,
  user?: Maybe<User>,
  findFirstUser?: Maybe<User>,
  users: Array<User>,
  aggregateUser: AggregateUser,
  userProfile?: Maybe<UserProfile>,
  findFirstUserProfile?: Maybe<UserProfile>,
  userProfiles: Array<UserProfile>,
  aggregateUserProfile: AggregateUserProfile,
};


export type QueryApplicationArgs = {
  where: ApplicationWhereUniqueInput
};


export type QueryFindFirstApplicationArgs = {
  where?: Maybe<ApplicationWhereInput>,
  orderBy?: Maybe<Array<ApplicationOrderByInput>>,
  cursor?: Maybe<ApplicationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<ApplicationScalarFieldEnum>>
};


export type QueryApplicationsArgs = {
  where?: Maybe<ApplicationWhereInput>,
  orderBy?: Maybe<Array<ApplicationOrderByInput>>,
  cursor?: Maybe<ApplicationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<ApplicationScalarFieldEnum>>
};


export type QueryAggregateApplicationArgs = {
  where?: Maybe<ApplicationWhereInput>,
  orderBy?: Maybe<Array<ApplicationOrderByInput>>,
  cursor?: Maybe<ApplicationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseClassificationArgs = {
  where: CaseClassificationWhereUniqueInput
};


export type QueryFindFirstCaseClassificationArgs = {
  where?: Maybe<CaseClassificationWhereInput>,
  orderBy?: Maybe<Array<CaseClassificationOrderByInput>>,
  cursor?: Maybe<CaseClassificationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseClassificationScalarFieldEnum>>
};


export type QueryCaseClassificationsArgs = {
  where?: Maybe<CaseClassificationWhereInput>,
  orderBy?: Maybe<Array<CaseClassificationOrderByInput>>,
  cursor?: Maybe<CaseClassificationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseClassificationScalarFieldEnum>>
};


export type QueryAggregateCaseClassificationArgs = {
  where?: Maybe<CaseClassificationWhereInput>,
  orderBy?: Maybe<Array<CaseClassificationOrderByInput>>,
  cursor?: Maybe<CaseClassificationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseConsultationArgs = {
  where: CaseConsultationWhereUniqueInput
};


export type QueryFindFirstCaseConsultationArgs = {
  where?: Maybe<CaseConsultationWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationOrderByInput>>,
  cursor?: Maybe<CaseConsultationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseConsultationScalarFieldEnum>>
};


export type QueryCaseConsultationsArgs = {
  where?: Maybe<CaseConsultationWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationOrderByInput>>,
  cursor?: Maybe<CaseConsultationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseConsultationScalarFieldEnum>>
};


export type QueryAggregateCaseConsultationArgs = {
  where?: Maybe<CaseConsultationWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationOrderByInput>>,
  cursor?: Maybe<CaseConsultationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseConsultationAppArgs = {
  where: CaseConsultationAppWhereUniqueInput
};


export type QueryFindFirstCaseConsultationAppArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationAppOrderByInput>>,
  cursor?: Maybe<CaseConsultationAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseConsultationAppScalarFieldEnum>>
};


export type QueryCaseConsultationAppsArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationAppOrderByInput>>,
  cursor?: Maybe<CaseConsultationAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseConsultationAppScalarFieldEnum>>
};


export type QueryAggregateCaseConsultationAppArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationAppOrderByInput>>,
  cursor?: Maybe<CaseConsultationAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseDocumentArgs = {
  where: CaseDocumentWhereUniqueInput
};


export type QueryFindFirstCaseDocumentArgs = {
  where?: Maybe<CaseDocumentWhereInput>,
  orderBy?: Maybe<Array<CaseDocumentOrderByInput>>,
  cursor?: Maybe<CaseDocumentWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseDocumentScalarFieldEnum>>
};


export type QueryCaseDocumentsArgs = {
  where?: Maybe<CaseDocumentWhereInput>,
  orderBy?: Maybe<Array<CaseDocumentOrderByInput>>,
  cursor?: Maybe<CaseDocumentWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseDocumentScalarFieldEnum>>
};


export type QueryAggregateCaseDocumentArgs = {
  where?: Maybe<CaseDocumentWhereInput>,
  orderBy?: Maybe<Array<CaseDocumentOrderByInput>>,
  cursor?: Maybe<CaseDocumentWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseIssueArgs = {
  where: CaseIssueWhereUniqueInput
};


export type QueryFindFirstCaseIssueArgs = {
  where?: Maybe<CaseIssueWhereInput>,
  orderBy?: Maybe<Array<CaseIssueOrderByInput>>,
  cursor?: Maybe<CaseIssueWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseIssueScalarFieldEnum>>
};


export type QueryCaseIssuesArgs = {
  where?: Maybe<CaseIssueWhereInput>,
  orderBy?: Maybe<Array<CaseIssueOrderByInput>>,
  cursor?: Maybe<CaseIssueWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseIssueScalarFieldEnum>>
};


export type QueryAggregateCaseIssueArgs = {
  where?: Maybe<CaseIssueWhereInput>,
  orderBy?: Maybe<Array<CaseIssueOrderByInput>>,
  cursor?: Maybe<CaseIssueWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseKorbanArgs = {
  where: CaseKorbanWhereUniqueInput
};


export type QueryFindFirstCaseKorbanArgs = {
  where?: Maybe<CaseKorbanWhereInput>,
  orderBy?: Maybe<Array<CaseKorbanOrderByInput>>,
  cursor?: Maybe<CaseKorbanWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseKorbanScalarFieldEnum>>
};


export type QueryCaseKorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>,
  orderBy?: Maybe<Array<CaseKorbanOrderByInput>>,
  cursor?: Maybe<CaseKorbanWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseKorbanScalarFieldEnum>>
};


export type QueryAggregateCaseKorbanArgs = {
  where?: Maybe<CaseKorbanWhereInput>,
  orderBy?: Maybe<Array<CaseKorbanOrderByInput>>,
  cursor?: Maybe<CaseKorbanWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCasePelakuArgs = {
  where: CasePelakuWhereUniqueInput
};


export type QueryFindFirstCasePelakuArgs = {
  where?: Maybe<CasePelakuWhereInput>,
  orderBy?: Maybe<Array<CasePelakuOrderByInput>>,
  cursor?: Maybe<CasePelakuWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CasePelakuScalarFieldEnum>>
};


export type QueryCasePelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>,
  orderBy?: Maybe<Array<CasePelakuOrderByInput>>,
  cursor?: Maybe<CasePelakuWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CasePelakuScalarFieldEnum>>
};


export type QueryAggregateCasePelakuArgs = {
  where?: Maybe<CasePelakuWhereInput>,
  orderBy?: Maybe<Array<CasePelakuOrderByInput>>,
  cursor?: Maybe<CasePelakuWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCasePkArgs = {
  where: CasePkWhereUniqueInput
};


export type QueryFindFirstCasePkArgs = {
  where?: Maybe<CasePkWhereInput>,
  orderBy?: Maybe<Array<CasePkOrderByInput>>,
  cursor?: Maybe<CasePkWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CasePkScalarFieldEnum>>
};


export type QueryCasePksArgs = {
  where?: Maybe<CasePkWhereInput>,
  orderBy?: Maybe<Array<CasePkOrderByInput>>,
  cursor?: Maybe<CasePkWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CasePkScalarFieldEnum>>
};


export type QueryAggregateCasePkArgs = {
  where?: Maybe<CasePkWhereInput>,
  orderBy?: Maybe<Array<CasePkOrderByInput>>,
  cursor?: Maybe<CasePkWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressArgs = {
  where: CaseProgressWhereUniqueInput
};


export type QueryFindFirstCaseProgressArgs = {
  where?: Maybe<CaseProgressWhereInput>,
  orderBy?: Maybe<Array<CaseProgressOrderByInput>>,
  cursor?: Maybe<CaseProgressWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressScalarFieldEnum>>
};


export type QueryCaseProgressesArgs = {
  where?: Maybe<CaseProgressWhereInput>,
  orderBy?: Maybe<Array<CaseProgressOrderByInput>>,
  cursor?: Maybe<CaseProgressWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressScalarFieldEnum>>
};


export type QueryAggregateCaseProgressArgs = {
  where?: Maybe<CaseProgressWhereInput>,
  orderBy?: Maybe<Array<CaseProgressOrderByInput>>,
  cursor?: Maybe<CaseProgressWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressActivityArgs = {
  where: CaseProgressActivityWhereUniqueInput
};


export type QueryFindFirstCaseProgressActivityArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressActivityScalarFieldEnum>>
};


export type QueryCaseProgressActivitiesArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressActivityScalarFieldEnum>>
};


export type QueryAggregateCaseProgressActivityArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressActivityLitArgs = {
  where: CaseProgressActivityLitWhereUniqueInput
};


export type QueryFindFirstCaseProgressActivityLitArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityLitOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityLitWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressActivityLitScalarFieldEnum>>
};


export type QueryCaseProgressActivityLitsArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityLitOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityLitWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressActivityLitScalarFieldEnum>>
};


export type QueryAggregateCaseProgressActivityLitArgs = {
  where?: Maybe<CaseProgressActivityLitWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityLitOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityLitWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseProgressActivityNonlitArgs = {
  where: CaseProgressActivityNonlitWhereUniqueInput
};


export type QueryFindFirstCaseProgressActivityNonlitArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityNonlitOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityNonlitWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressActivityNonlitScalarFieldEnum>>
};


export type QueryCaseProgressActivityNonlitsArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityNonlitOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityNonlitWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressActivityNonlitScalarFieldEnum>>
};


export type QueryAggregateCaseProgressActivityNonlitArgs = {
  where?: Maybe<CaseProgressActivityNonlitWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityNonlitOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityNonlitWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseReferralArgs = {
  where: CaseReferralWhereUniqueInput
};


export type QueryFindFirstCaseReferralArgs = {
  where?: Maybe<CaseReferralWhereInput>,
  orderBy?: Maybe<Array<CaseReferralOrderByInput>>,
  cursor?: Maybe<CaseReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseReferralScalarFieldEnum>>
};


export type QueryCaseReferralsArgs = {
  where?: Maybe<CaseReferralWhereInput>,
  orderBy?: Maybe<Array<CaseReferralOrderByInput>>,
  cursor?: Maybe<CaseReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseReferralScalarFieldEnum>>
};


export type QueryAggregateCaseReferralArgs = {
  where?: Maybe<CaseReferralWhereInput>,
  orderBy?: Maybe<Array<CaseReferralOrderByInput>>,
  cursor?: Maybe<CaseReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseTransferArgs = {
  where: CaseTransferWhereUniqueInput
};


export type QueryFindFirstCaseTransferArgs = {
  where?: Maybe<CaseTransferWhereInput>,
  orderBy?: Maybe<Array<CaseTransferOrderByInput>>,
  cursor?: Maybe<CaseTransferWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseTransferScalarFieldEnum>>
};


export type QueryCaseTransfersArgs = {
  where?: Maybe<CaseTransferWhereInput>,
  orderBy?: Maybe<Array<CaseTransferOrderByInput>>,
  cursor?: Maybe<CaseTransferWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseTransferScalarFieldEnum>>
};


export type QueryAggregateCaseTransferArgs = {
  where?: Maybe<CaseTransferWhereInput>,
  orderBy?: Maybe<Array<CaseTransferOrderByInput>>,
  cursor?: Maybe<CaseTransferWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseTransferReferralArgs = {
  where: CaseTransferReferralWhereUniqueInput
};


export type QueryFindFirstCaseTransferReferralArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>,
  orderBy?: Maybe<Array<CaseTransferReferralOrderByInput>>,
  cursor?: Maybe<CaseTransferReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseTransferReferralScalarFieldEnum>>
};


export type QueryCaseTransferReferralsArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>,
  orderBy?: Maybe<Array<CaseTransferReferralOrderByInput>>,
  cursor?: Maybe<CaseTransferReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseTransferReferralScalarFieldEnum>>
};


export type QueryAggregateCaseTransferReferralArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>,
  orderBy?: Maybe<Array<CaseTransferReferralOrderByInput>>,
  cursor?: Maybe<CaseTransferReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryCaseViolatedRightArgs = {
  where: CaseViolatedRightWhereUniqueInput
};


export type QueryFindFirstCaseViolatedRightArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>,
  orderBy?: Maybe<Array<CaseViolatedRightOrderByInput>>,
  cursor?: Maybe<CaseViolatedRightWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseViolatedRightScalarFieldEnum>>
};


export type QueryCaseViolatedRightsArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>,
  orderBy?: Maybe<Array<CaseViolatedRightOrderByInput>>,
  cursor?: Maybe<CaseViolatedRightWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseViolatedRightScalarFieldEnum>>
};


export type QueryAggregateCaseViolatedRightArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>,
  orderBy?: Maybe<Array<CaseViolatedRightOrderByInput>>,
  cursor?: Maybe<CaseViolatedRightWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryClientArgs = {
  where: ClientWhereUniqueInput
};


export type QueryFindFirstClientArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<Array<ClientOrderByInput>>,
  cursor?: Maybe<ClientWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<ClientScalarFieldEnum>>
};


export type QueryClientsArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<Array<ClientOrderByInput>>,
  cursor?: Maybe<ClientWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<ClientScalarFieldEnum>>
};


export type QueryAggregateClientArgs = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<Array<ClientOrderByInput>>,
  cursor?: Maybe<ClientWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryDaftarPengacaraArgs = {
  where: DaftarPengacaraWhereUniqueInput
};


export type QueryFindFirstDaftarPengacaraArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>,
  orderBy?: Maybe<Array<DaftarPengacaraOrderByInput>>,
  cursor?: Maybe<DaftarPengacaraWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<DaftarPengacaraScalarFieldEnum>>
};


export type QueryDaftarPengacarasArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>,
  orderBy?: Maybe<Array<DaftarPengacaraOrderByInput>>,
  cursor?: Maybe<DaftarPengacaraWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<DaftarPengacaraScalarFieldEnum>>
};


export type QueryAggregateDaftarPengacaraArgs = {
  where?: Maybe<DaftarPengacaraWhereInput>,
  orderBy?: Maybe<Array<DaftarPengacaraOrderByInput>>,
  cursor?: Maybe<DaftarPengacaraWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryDataDictArgs = {
  where: DataDictWhereUniqueInput
};


export type QueryFindFirstDataDictArgs = {
  where?: Maybe<DataDictWhereInput>,
  orderBy?: Maybe<Array<DataDictOrderByInput>>,
  cursor?: Maybe<DataDictWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<DataDictScalarFieldEnum>>
};


export type QueryDataDictsArgs = {
  where?: Maybe<DataDictWhereInput>,
  orderBy?: Maybe<Array<DataDictOrderByInput>>,
  cursor?: Maybe<DataDictWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<DataDictScalarFieldEnum>>
};


export type QueryAggregateDataDictArgs = {
  where?: Maybe<DataDictWhereInput>,
  orderBy?: Maybe<Array<DataDictOrderByInput>>,
  cursor?: Maybe<DataDictWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryDataDictLocalArgs = {
  where: DataDictLocalWhereUniqueInput
};


export type QueryFindFirstDataDictLocalArgs = {
  where?: Maybe<DataDictLocalWhereInput>,
  orderBy?: Maybe<Array<DataDictLocalOrderByInput>>,
  cursor?: Maybe<DataDictLocalWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<DataDictLocalScalarFieldEnum>>
};


export type QueryDataDictLocalsArgs = {
  where?: Maybe<DataDictLocalWhereInput>,
  orderBy?: Maybe<Array<DataDictLocalOrderByInput>>,
  cursor?: Maybe<DataDictLocalWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<DataDictLocalScalarFieldEnum>>
};


export type QueryAggregateDataDictLocalArgs = {
  where?: Maybe<DataDictLocalWhereInput>,
  orderBy?: Maybe<Array<DataDictLocalOrderByInput>>,
  cursor?: Maybe<DataDictLocalWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryLogRequestArgs = {
  where: LogRequestWhereUniqueInput
};


export type QueryFindFirstLogRequestArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestScalarFieldEnum>>
};


export type QueryLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestScalarFieldEnum>>
};


export type QueryAggregateLogRequestArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryLogRequestAppArgs = {
  where: LogRequestAppWhereUniqueInput
};


export type QueryFindFirstLogRequestAppArgs = {
  where?: Maybe<LogRequestAppWhereInput>,
  orderBy?: Maybe<Array<LogRequestAppOrderByInput>>,
  cursor?: Maybe<LogRequestAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestAppScalarFieldEnum>>
};


export type QueryLogRequestAppsArgs = {
  where?: Maybe<LogRequestAppWhereInput>,
  orderBy?: Maybe<Array<LogRequestAppOrderByInput>>,
  cursor?: Maybe<LogRequestAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestAppScalarFieldEnum>>
};


export type QueryAggregateLogRequestAppArgs = {
  where?: Maybe<LogRequestAppWhereInput>,
  orderBy?: Maybe<Array<LogRequestAppOrderByInput>>,
  cursor?: Maybe<LogRequestAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryMtVocabArgs = {
  where: MtVocabWhereUniqueInput
};


export type QueryFindFirstMtVocabArgs = {
  where?: Maybe<MtVocabWhereInput>,
  orderBy?: Maybe<Array<MtVocabOrderByInput>>,
  cursor?: Maybe<MtVocabWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<MtVocabScalarFieldEnum>>
};


export type QueryMtVocabsArgs = {
  where?: Maybe<MtVocabWhereInput>,
  orderBy?: Maybe<Array<MtVocabOrderByInput>>,
  cursor?: Maybe<MtVocabWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<MtVocabScalarFieldEnum>>
};


export type QueryAggregateMtVocabArgs = {
  where?: Maybe<MtVocabWhereInput>,
  orderBy?: Maybe<Array<MtVocabOrderByInput>>,
  cursor?: Maybe<MtVocabWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryMtVocabGroupArgs = {
  where: MtVocabGroupWhereUniqueInput
};


export type QueryFindFirstMtVocabGroupArgs = {
  where?: Maybe<MtVocabGroupWhereInput>,
  orderBy?: Maybe<Array<MtVocabGroupOrderByInput>>,
  cursor?: Maybe<MtVocabGroupWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<MtVocabGroupScalarFieldEnum>>
};


export type QueryMtVocabGroupsArgs = {
  where?: Maybe<MtVocabGroupWhereInput>,
  orderBy?: Maybe<Array<MtVocabGroupOrderByInput>>,
  cursor?: Maybe<MtVocabGroupWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<MtVocabGroupScalarFieldEnum>>
};


export type QueryAggregateMtVocabGroupArgs = {
  where?: Maybe<MtVocabGroupWhereInput>,
  orderBy?: Maybe<Array<MtVocabGroupOrderByInput>>,
  cursor?: Maybe<MtVocabGroupWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryNetworkArgs = {
  where: NetworkWhereUniqueInput
};


export type QueryFindFirstNetworkArgs = {
  where?: Maybe<NetworkWhereInput>,
  orderBy?: Maybe<Array<NetworkOrderByInput>>,
  cursor?: Maybe<NetworkWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<NetworkScalarFieldEnum>>
};


export type QueryNetworksArgs = {
  where?: Maybe<NetworkWhereInput>,
  orderBy?: Maybe<Array<NetworkOrderByInput>>,
  cursor?: Maybe<NetworkWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<NetworkScalarFieldEnum>>
};


export type QueryAggregateNetworkArgs = {
  where?: Maybe<NetworkWhereInput>,
  orderBy?: Maybe<Array<NetworkOrderByInput>>,
  cursor?: Maybe<NetworkWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryPersonArgs = {
  where: PersonWhereUniqueInput
};


export type QueryFindFirstPersonArgs = {
  where?: Maybe<PersonWhereInput>,
  orderBy?: Maybe<Array<PersonOrderByInput>>,
  cursor?: Maybe<PersonWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<PersonScalarFieldEnum>>
};


export type QueryPeopleArgs = {
  where?: Maybe<PersonWhereInput>,
  orderBy?: Maybe<Array<PersonOrderByInput>>,
  cursor?: Maybe<PersonWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<PersonScalarFieldEnum>>
};


export type QueryAggregatePersonArgs = {
  where?: Maybe<PersonWhereInput>,
  orderBy?: Maybe<Array<PersonOrderByInput>>,
  cursor?: Maybe<PersonWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryPersonDocumentArgs = {
  where: PersonDocumentWhereUniqueInput
};


export type QueryFindFirstPersonDocumentArgs = {
  where?: Maybe<PersonDocumentWhereInput>,
  orderBy?: Maybe<Array<PersonDocumentOrderByInput>>,
  cursor?: Maybe<PersonDocumentWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<PersonDocumentScalarFieldEnum>>
};


export type QueryPersonDocumentsArgs = {
  where?: Maybe<PersonDocumentWhereInput>,
  orderBy?: Maybe<Array<PersonDocumentOrderByInput>>,
  cursor?: Maybe<PersonDocumentWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<PersonDocumentScalarFieldEnum>>
};


export type QueryAggregatePersonDocumentArgs = {
  where?: Maybe<PersonDocumentWhereInput>,
  orderBy?: Maybe<Array<PersonDocumentOrderByInput>>,
  cursor?: Maybe<PersonDocumentWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryRenamedcaseArgs = {
  where: RenamedcaseWhereUniqueInput
};


export type QueryFindFirstRenamedcaseArgs = {
  where?: Maybe<RenamedcaseWhereInput>,
  orderBy?: Maybe<Array<RenamedcaseOrderByInput>>,
  cursor?: Maybe<RenamedcaseWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<RenamedcaseScalarFieldEnum>>
};


export type QueryRenamedcasesArgs = {
  where?: Maybe<RenamedcaseWhereInput>,
  orderBy?: Maybe<Array<RenamedcaseOrderByInput>>,
  cursor?: Maybe<RenamedcaseWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<RenamedcaseScalarFieldEnum>>
};


export type QueryAggregateRenamedcaseArgs = {
  where?: Maybe<RenamedcaseWhereInput>,
  orderBy?: Maybe<Array<RenamedcaseOrderByInput>>,
  cursor?: Maybe<RenamedcaseWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryRoleArgs = {
  where: RoleWhereUniqueInput
};


export type QueryFindFirstRoleArgs = {
  where?: Maybe<RoleWhereInput>,
  orderBy?: Maybe<Array<RoleOrderByInput>>,
  cursor?: Maybe<RoleWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<RoleScalarFieldEnum>>
};


export type QueryRolesArgs = {
  where?: Maybe<RoleWhereInput>,
  orderBy?: Maybe<Array<RoleOrderByInput>>,
  cursor?: Maybe<RoleWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<RoleScalarFieldEnum>>
};


export type QueryAggregateRoleArgs = {
  where?: Maybe<RoleWhereInput>,
  orderBy?: Maybe<Array<RoleOrderByInput>>,
  cursor?: Maybe<RoleWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryRolesTypeArgs = {
  where: RolesTypeWhereUniqueInput
};


export type QueryFindFirstRolesTypeArgs = {
  where?: Maybe<RolesTypeWhereInput>,
  orderBy?: Maybe<Array<RolesTypeOrderByInput>>,
  cursor?: Maybe<RolesTypeWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<RolesTypeScalarFieldEnum>>
};


export type QueryRolesTypesArgs = {
  where?: Maybe<RolesTypeWhereInput>,
  orderBy?: Maybe<Array<RolesTypeOrderByInput>>,
  cursor?: Maybe<RolesTypeWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<RolesTypeScalarFieldEnum>>
};


export type QueryAggregateRolesTypeArgs = {
  where?: Maybe<RolesTypeWhereInput>,
  orderBy?: Maybe<Array<RolesTypeOrderByInput>>,
  cursor?: Maybe<RolesTypeWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QuerySrcAnalisaArgs = {
  where: SrcAnalisaWhereUniqueInput
};


export type QueryFindFirstSrcAnalisaArgs = {
  where?: Maybe<SrcAnalisaWhereInput>,
  orderBy?: Maybe<Array<SrcAnalisaOrderByInput>>,
  cursor?: Maybe<SrcAnalisaWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<SrcAnalisaScalarFieldEnum>>
};


export type QuerySrcAnalisasArgs = {
  where?: Maybe<SrcAnalisaWhereInput>,
  orderBy?: Maybe<Array<SrcAnalisaOrderByInput>>,
  cursor?: Maybe<SrcAnalisaWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<SrcAnalisaScalarFieldEnum>>
};


export type QueryAggregateSrcAnalisaArgs = {
  where?: Maybe<SrcAnalisaWhereInput>,
  orderBy?: Maybe<Array<SrcAnalisaOrderByInput>>,
  cursor?: Maybe<SrcAnalisaWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QuerySrcOperatorArgs = {
  where: SrcOperatorWhereUniqueInput
};


export type QueryFindFirstSrcOperatorArgs = {
  where?: Maybe<SrcOperatorWhereInput>,
  orderBy?: Maybe<Array<SrcOperatorOrderByInput>>,
  cursor?: Maybe<SrcOperatorWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<SrcOperatorScalarFieldEnum>>
};


export type QuerySrcOperatorsArgs = {
  where?: Maybe<SrcOperatorWhereInput>,
  orderBy?: Maybe<Array<SrcOperatorOrderByInput>>,
  cursor?: Maybe<SrcOperatorWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<SrcOperatorScalarFieldEnum>>
};


export type QueryAggregateSrcOperatorArgs = {
  where?: Maybe<SrcOperatorWhereInput>,
  orderBy?: Maybe<Array<SrcOperatorOrderByInput>>,
  cursor?: Maybe<SrcOperatorWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QuerySrcTemplateArgs = {
  where: SrcTemplateWhereUniqueInput
};


export type QueryFindFirstSrcTemplateArgs = {
  where?: Maybe<SrcTemplateWhereInput>,
  orderBy?: Maybe<Array<SrcTemplateOrderByInput>>,
  cursor?: Maybe<SrcTemplateWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<SrcTemplateScalarFieldEnum>>
};


export type QuerySrcTemplatesArgs = {
  where?: Maybe<SrcTemplateWhereInput>,
  orderBy?: Maybe<Array<SrcTemplateOrderByInput>>,
  cursor?: Maybe<SrcTemplateWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<SrcTemplateScalarFieldEnum>>
};


export type QueryAggregateSrcTemplateArgs = {
  where?: Maybe<SrcTemplateWhereInput>,
  orderBy?: Maybe<Array<SrcTemplateOrderByInput>>,
  cursor?: Maybe<SrcTemplateWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<Array<UserOrderByInput>>,
  cursor?: Maybe<UserWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<UserScalarFieldEnum>>
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<Array<UserOrderByInput>>,
  cursor?: Maybe<UserWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<UserScalarFieldEnum>>
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<Array<UserOrderByInput>>,
  cursor?: Maybe<UserWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryUserProfileArgs = {
  where: UserProfileWhereUniqueInput
};


export type QueryFindFirstUserProfileArgs = {
  where?: Maybe<UserProfileWhereInput>,
  orderBy?: Maybe<Array<UserProfileOrderByInput>>,
  cursor?: Maybe<UserProfileWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<UserProfileScalarFieldEnum>>
};


export type QueryUserProfilesArgs = {
  where?: Maybe<UserProfileWhereInput>,
  orderBy?: Maybe<Array<UserProfileOrderByInput>>,
  cursor?: Maybe<UserProfileWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<UserProfileScalarFieldEnum>>
};


export type QueryAggregateUserProfileArgs = {
  where?: Maybe<UserProfileWhereInput>,
  orderBy?: Maybe<Array<UserProfileOrderByInput>>,
  cursor?: Maybe<UserProfileWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type Renamedcase = {
  id: Scalars['Int'],
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  case_progresses?: Maybe<Scalars['Int']>,
  case_transfer?: Maybe<Scalars['Int']>,
  case_pk?: Maybe<Scalars['Int']>,
  pk?: Maybe<CasePk>,
  progresses?: Maybe<CaseProgress>,
  transfer?: Maybe<CaseTransfer>,
  application?: Maybe<Application>,
  referrals: Array<CaseReferral>,
  classifications: Array<CaseClassification>,
  consultations: Array<CaseConsultation>,
  documents: Array<CaseDocument>,
  issues: Array<CaseIssue>,
  korbans: Array<CaseKorban>,
  pelakus: Array<CasePelaku>,
  activities: Array<CaseProgressActivity>,
  transferreferrals: Array<CaseTransferReferral>,
  violatedrights: Array<CaseViolatedRight>,
  logRequests: Array<LogRequest>,
};


export type RenamedcaseReferralsArgs = {
  where?: Maybe<CaseReferralWhereInput>,
  orderBy?: Maybe<Array<CaseReferralOrderByInput>>,
  cursor?: Maybe<CaseReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseReferralScalarFieldEnum>>
};


export type RenamedcaseClassificationsArgs = {
  where?: Maybe<CaseClassificationWhereInput>,
  orderBy?: Maybe<Array<CaseClassificationOrderByInput>>,
  cursor?: Maybe<CaseClassificationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseClassificationScalarFieldEnum>>
};


export type RenamedcaseConsultationsArgs = {
  where?: Maybe<CaseConsultationWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationOrderByInput>>,
  cursor?: Maybe<CaseConsultationWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseConsultationScalarFieldEnum>>
};


export type RenamedcaseDocumentsArgs = {
  where?: Maybe<CaseDocumentWhereInput>,
  orderBy?: Maybe<Array<CaseDocumentOrderByInput>>,
  cursor?: Maybe<CaseDocumentWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseDocumentScalarFieldEnum>>
};


export type RenamedcaseIssuesArgs = {
  where?: Maybe<CaseIssueWhereInput>,
  orderBy?: Maybe<Array<CaseIssueOrderByInput>>,
  cursor?: Maybe<CaseIssueWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseIssueScalarFieldEnum>>
};


export type RenamedcaseKorbansArgs = {
  where?: Maybe<CaseKorbanWhereInput>,
  orderBy?: Maybe<Array<CaseKorbanOrderByInput>>,
  cursor?: Maybe<CaseKorbanWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseKorbanScalarFieldEnum>>
};


export type RenamedcasePelakusArgs = {
  where?: Maybe<CasePelakuWhereInput>,
  orderBy?: Maybe<Array<CasePelakuOrderByInput>>,
  cursor?: Maybe<CasePelakuWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CasePelakuScalarFieldEnum>>
};


export type RenamedcaseActivitiesArgs = {
  where?: Maybe<CaseProgressActivityWhereInput>,
  orderBy?: Maybe<Array<CaseProgressActivityOrderByInput>>,
  cursor?: Maybe<CaseProgressActivityWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseProgressActivityScalarFieldEnum>>
};


export type RenamedcaseTransferreferralsArgs = {
  where?: Maybe<CaseTransferReferralWhereInput>,
  orderBy?: Maybe<Array<CaseTransferReferralOrderByInput>>,
  cursor?: Maybe<CaseTransferReferralWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseTransferReferralScalarFieldEnum>>
};


export type RenamedcaseViolatedrightsArgs = {
  where?: Maybe<CaseViolatedRightWhereInput>,
  orderBy?: Maybe<Array<CaseViolatedRightOrderByInput>>,
  cursor?: Maybe<CaseViolatedRightWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseViolatedRightScalarFieldEnum>>
};


export type RenamedcaseLogRequestsArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestScalarFieldEnum>>
};

export type RenamedcaseAvgAggregate = {
  id: Scalars['Float'],
  applicationId?: Maybe<Scalars['Float']>,
  case_progresses?: Maybe<Scalars['Float']>,
  case_transfer?: Maybe<Scalars['Float']>,
  case_pk?: Maybe<Scalars['Float']>,
};

export type RenamedcaseCountAggregate = {
  id: Scalars['Int'],
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Int']>,
  caseClosedJenis?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Int']>,
  createdBy?: Maybe<Scalars['Int']>,
  hakTerlanggar?: Maybe<Scalars['Int']>,
  issue?: Maybe<Scalars['Int']>,
  judulKasus?: Maybe<Scalars['Int']>,
  klasifikasiDok?: Maybe<Scalars['Int']>,
  kronologiKasus?: Maybe<Scalars['Int']>,
  lockDitolak?: Maybe<Scalars['Int']>,
  statusPendampingan?: Maybe<Scalars['Int']>,
  targetAdvokasi?: Maybe<Scalars['Int']>,
  unlockPk?: Maybe<Scalars['Int']>,
  unlockTransfer?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  updatedBy?: Maybe<Scalars['Int']>,
  case_progresses?: Maybe<Scalars['Int']>,
  case_transfer?: Maybe<Scalars['Int']>,
  case_pk?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type RenamedcaseCreateInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateNestedOneWithoutActivitiesInput = {
  create?: Maybe<RenamedcaseCreateWithoutActivitiesInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutActivitiesInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutApplicationInput = {
  create?: Maybe<RenamedcaseCreateWithoutApplicationInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutApplicationInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutClassificationsInput = {
  create?: Maybe<RenamedcaseCreateWithoutClassificationsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutClassificationsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutConsultationsInput = {
  create?: Maybe<RenamedcaseCreateWithoutConsultationsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutConsultationsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutDocumentsInput = {
  create?: Maybe<RenamedcaseCreateWithoutDocumentsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutDocumentsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutIssuesInput = {
  create?: Maybe<RenamedcaseCreateWithoutIssuesInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutIssuesInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutKorbansInput = {
  create?: Maybe<RenamedcaseCreateWithoutKorbansInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutKorbansInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutLogRequestsInput = {
  create?: Maybe<RenamedcaseCreateWithoutLogRequestsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutLogRequestsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutPelakusInput = {
  create?: Maybe<RenamedcaseCreateWithoutPelakusInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutPelakusInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutPkInput = {
  create?: Maybe<RenamedcaseCreateWithoutPkInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutPkInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutProgressesInput = {
  create?: Maybe<RenamedcaseCreateWithoutProgressesInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutProgressesInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutReferralsInput = {
  create?: Maybe<RenamedcaseCreateWithoutReferralsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutReferralsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutTransferInput = {
  create?: Maybe<RenamedcaseCreateWithoutTransferInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutTransferInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutTransferreferralsInput = {
  create?: Maybe<RenamedcaseCreateWithoutTransferreferralsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutTransferreferralsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateNestedOneWithoutViolatedrightsInput = {
  create?: Maybe<RenamedcaseCreateWithoutViolatedrightsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutViolatedrightsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
};

export type RenamedcaseCreateOrConnectWithoutActivitiesInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutActivitiesInput,
};

export type RenamedcaseCreateOrConnectWithoutApplicationInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutApplicationInput,
};

export type RenamedcaseCreateOrConnectWithoutClassificationsInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutClassificationsInput,
};

export type RenamedcaseCreateOrConnectWithoutConsultationsInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutConsultationsInput,
};

export type RenamedcaseCreateOrConnectWithoutDocumentsInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutDocumentsInput,
};

export type RenamedcaseCreateOrConnectWithoutIssuesInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutIssuesInput,
};

export type RenamedcaseCreateOrConnectWithoutKorbansInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutKorbansInput,
};

export type RenamedcaseCreateOrConnectWithoutLogRequestsInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutLogRequestsInput,
};

export type RenamedcaseCreateOrConnectWithoutPelakusInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutPelakusInput,
};

export type RenamedcaseCreateOrConnectWithoutPkInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutPkInput,
};

export type RenamedcaseCreateOrConnectWithoutProgressesInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutProgressesInput,
};

export type RenamedcaseCreateOrConnectWithoutReferralsInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutReferralsInput,
};

export type RenamedcaseCreateOrConnectWithoutTransferInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutTransferInput,
};

export type RenamedcaseCreateOrConnectWithoutTransferreferralsInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutTransferreferralsInput,
};

export type RenamedcaseCreateOrConnectWithoutViolatedrightsInput = {
  where: RenamedcaseWhereUniqueInput,
  create: RenamedcaseCreateWithoutViolatedrightsInput,
};

export type RenamedcaseCreateWithoutActivitiesInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutApplicationInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutClassificationsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutConsultationsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutDocumentsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutIssuesInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutKorbansInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutLogRequestsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutPelakusInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutPkInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutProgressesInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutReferralsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutTransferInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutTransferreferralsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseCreateWithoutViolatedrightsInput = {
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed: Scalars['Boolean'],
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak: Scalars['Boolean'],
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk: Scalars['Boolean'],
  unlockTransfer: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  updatedBy?: Maybe<Scalars['String']>,
  pk?: Maybe<CasePkCreateNestedOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressCreateNestedOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferCreateNestedOneWithoutCaseInput>,
  application?: Maybe<ApplicationCreateNestedOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralCreateNestedManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationCreateNestedManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationCreateNestedManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentCreateNestedManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueCreateNestedManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanCreateNestedManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuCreateNestedManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityCreateNestedManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralCreateNestedManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestCreateNestedManyWithoutCaseIdInput>,
};

export type RenamedcaseMaxAggregate = {
  id: Scalars['Int'],
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case_progresses?: Maybe<Scalars['Int']>,
  case_transfer?: Maybe<Scalars['Int']>,
  case_pk?: Maybe<Scalars['Int']>,
};

export type RenamedcaseMinAggregate = {
  id: Scalars['Int'],
  applicationId?: Maybe<Scalars['Int']>,
  caseClosed?: Maybe<Scalars['Boolean']>,
  caseClosedJenis?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdBy?: Maybe<Scalars['String']>,
  hakTerlanggar?: Maybe<Scalars['String']>,
  issue?: Maybe<Scalars['String']>,
  judulKasus?: Maybe<Scalars['String']>,
  klasifikasiDok?: Maybe<Scalars['String']>,
  kronologiKasus?: Maybe<Scalars['String']>,
  lockDitolak?: Maybe<Scalars['Boolean']>,
  statusPendampingan?: Maybe<Scalars['String']>,
  targetAdvokasi?: Maybe<Scalars['String']>,
  unlockPk?: Maybe<Scalars['Boolean']>,
  unlockTransfer?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedBy?: Maybe<Scalars['String']>,
  case_progresses?: Maybe<Scalars['Int']>,
  case_transfer?: Maybe<Scalars['Int']>,
  case_pk?: Maybe<Scalars['Int']>,
};

export type RenamedcaseOrderByInput = {
  id?: Maybe<SortOrder>,
  applicationId?: Maybe<SortOrder>,
  caseClosed?: Maybe<SortOrder>,
  caseClosedJenis?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  createdBy?: Maybe<SortOrder>,
  hakTerlanggar?: Maybe<SortOrder>,
  issue?: Maybe<SortOrder>,
  judulKasus?: Maybe<SortOrder>,
  klasifikasiDok?: Maybe<SortOrder>,
  kronologiKasus?: Maybe<SortOrder>,
  lockDitolak?: Maybe<SortOrder>,
  statusPendampingan?: Maybe<SortOrder>,
  targetAdvokasi?: Maybe<SortOrder>,
  unlockPk?: Maybe<SortOrder>,
  unlockTransfer?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  updatedBy?: Maybe<SortOrder>,
  case_progresses?: Maybe<SortOrder>,
  case_transfer?: Maybe<SortOrder>,
  case_pk?: Maybe<SortOrder>,
};

export type RenamedcaseRelationFilter = {
  is?: Maybe<RenamedcaseWhereInput>,
  isNot?: Maybe<RenamedcaseWhereInput>,
};

export enum RenamedcaseScalarFieldEnum {
  Id = 'id',
  ApplicationId = 'applicationId',
  CaseClosed = 'caseClosed',
  CaseClosedJenis = 'caseClosedJenis',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  HakTerlanggar = 'hakTerlanggar',
  Issue = 'issue',
  JudulKasus = 'judulKasus',
  KlasifikasiDok = 'klasifikasiDok',
  KronologiKasus = 'kronologiKasus',
  LockDitolak = 'lockDitolak',
  StatusPendampingan = 'statusPendampingan',
  TargetAdvokasi = 'targetAdvokasi',
  UnlockPk = 'unlockPk',
  UnlockTransfer = 'unlockTransfer',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  CaseProgresses = 'case_progresses',
  CaseTransfer = 'case_transfer',
  CasePk = 'case_pk'
}

export type RenamedcaseSumAggregate = {
  id: Scalars['Int'],
  applicationId?: Maybe<Scalars['Int']>,
  case_progresses?: Maybe<Scalars['Int']>,
  case_transfer?: Maybe<Scalars['Int']>,
  case_pk?: Maybe<Scalars['Int']>,
};

export type RenamedcaseUpdateInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateManyMutationInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type RenamedcaseUpdateOneWithoutActivitiesInput = {
  create?: Maybe<RenamedcaseCreateWithoutActivitiesInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutActivitiesInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutActivitiesInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutActivitiesInput>,
};

export type RenamedcaseUpdateOneWithoutApplicationInput = {
  create?: Maybe<RenamedcaseCreateWithoutApplicationInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutApplicationInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutApplicationInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutApplicationInput>,
};

export type RenamedcaseUpdateOneWithoutClassificationsInput = {
  create?: Maybe<RenamedcaseCreateWithoutClassificationsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutClassificationsInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutClassificationsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutClassificationsInput>,
};

export type RenamedcaseUpdateOneWithoutConsultationsInput = {
  create?: Maybe<RenamedcaseCreateWithoutConsultationsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutConsultationsInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutConsultationsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutConsultationsInput>,
};

export type RenamedcaseUpdateOneWithoutDocumentsInput = {
  create?: Maybe<RenamedcaseCreateWithoutDocumentsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutDocumentsInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutDocumentsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutDocumentsInput>,
};

export type RenamedcaseUpdateOneWithoutIssuesInput = {
  create?: Maybe<RenamedcaseCreateWithoutIssuesInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutIssuesInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutIssuesInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutIssuesInput>,
};

export type RenamedcaseUpdateOneWithoutKorbansInput = {
  create?: Maybe<RenamedcaseCreateWithoutKorbansInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutKorbansInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutKorbansInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutKorbansInput>,
};

export type RenamedcaseUpdateOneWithoutLogRequestsInput = {
  create?: Maybe<RenamedcaseCreateWithoutLogRequestsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutLogRequestsInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutLogRequestsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutLogRequestsInput>,
};

export type RenamedcaseUpdateOneWithoutPelakusInput = {
  create?: Maybe<RenamedcaseCreateWithoutPelakusInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutPelakusInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutPelakusInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutPelakusInput>,
};

export type RenamedcaseUpdateOneWithoutPkInput = {
  create?: Maybe<RenamedcaseCreateWithoutPkInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutPkInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutPkInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutPkInput>,
};

export type RenamedcaseUpdateOneWithoutProgressesInput = {
  create?: Maybe<RenamedcaseCreateWithoutProgressesInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutProgressesInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutProgressesInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutProgressesInput>,
};

export type RenamedcaseUpdateOneWithoutReferralsInput = {
  create?: Maybe<RenamedcaseCreateWithoutReferralsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutReferralsInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutReferralsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutReferralsInput>,
};

export type RenamedcaseUpdateOneWithoutTransferInput = {
  create?: Maybe<RenamedcaseCreateWithoutTransferInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutTransferInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutTransferInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutTransferInput>,
};

export type RenamedcaseUpdateOneWithoutTransferreferralsInput = {
  create?: Maybe<RenamedcaseCreateWithoutTransferreferralsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutTransferreferralsInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutTransferreferralsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutTransferreferralsInput>,
};

export type RenamedcaseUpdateOneWithoutViolatedrightsInput = {
  create?: Maybe<RenamedcaseCreateWithoutViolatedrightsInput>,
  connectOrCreate?: Maybe<RenamedcaseCreateOrConnectWithoutViolatedrightsInput>,
  upsert?: Maybe<RenamedcaseUpsertWithoutViolatedrightsInput>,
  connect?: Maybe<RenamedcaseWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RenamedcaseUpdateWithoutViolatedrightsInput>,
};

export type RenamedcaseUpdateWithoutActivitiesInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutApplicationInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutClassificationsInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutConsultationsInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutDocumentsInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutIssuesInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutKorbansInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutLogRequestsInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutPelakusInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutPkInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutProgressesInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutReferralsInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutTransferInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutTransferreferralsInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpdateWithoutViolatedrightsInput = {
  applicationId?: Maybe<NullableIntFieldUpdateOperationsInput>,
  caseClosed?: Maybe<BoolFieldUpdateOperationsInput>,
  caseClosedJenis?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  createdBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  hakTerlanggar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  issue?: Maybe<NullableStringFieldUpdateOperationsInput>,
  judulKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  klasifikasiDok?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kronologiKasus?: Maybe<NullableStringFieldUpdateOperationsInput>,
  lockDitolak?: Maybe<BoolFieldUpdateOperationsInput>,
  statusPendampingan?: Maybe<NullableStringFieldUpdateOperationsInput>,
  targetAdvokasi?: Maybe<NullableStringFieldUpdateOperationsInput>,
  unlockPk?: Maybe<BoolFieldUpdateOperationsInput>,
  unlockTransfer?: Maybe<BoolFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  updatedBy?: Maybe<NullableStringFieldUpdateOperationsInput>,
  pk?: Maybe<CasePkUpdateOneWithoutCaseInput>,
  progresses?: Maybe<CaseProgressUpdateOneWithoutCaseInput>,
  transfer?: Maybe<CaseTransferUpdateOneWithoutCaseInput>,
  application?: Maybe<ApplicationUpdateOneWithoutCaseInput>,
  referrals?: Maybe<CaseReferralUpdateManyWithoutCaseInput>,
  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>,
  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>,
  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseInput>,
  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>,
  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>,
  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>,
  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>,
  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>,
  logRequests?: Maybe<LogRequestUpdateManyWithoutCaseIdInput>,
};

export type RenamedcaseUpsertWithoutActivitiesInput = {
  update: RenamedcaseUpdateWithoutActivitiesInput,
  create: RenamedcaseCreateWithoutActivitiesInput,
};

export type RenamedcaseUpsertWithoutApplicationInput = {
  update: RenamedcaseUpdateWithoutApplicationInput,
  create: RenamedcaseCreateWithoutApplicationInput,
};

export type RenamedcaseUpsertWithoutClassificationsInput = {
  update: RenamedcaseUpdateWithoutClassificationsInput,
  create: RenamedcaseCreateWithoutClassificationsInput,
};

export type RenamedcaseUpsertWithoutConsultationsInput = {
  update: RenamedcaseUpdateWithoutConsultationsInput,
  create: RenamedcaseCreateWithoutConsultationsInput,
};

export type RenamedcaseUpsertWithoutDocumentsInput = {
  update: RenamedcaseUpdateWithoutDocumentsInput,
  create: RenamedcaseCreateWithoutDocumentsInput,
};

export type RenamedcaseUpsertWithoutIssuesInput = {
  update: RenamedcaseUpdateWithoutIssuesInput,
  create: RenamedcaseCreateWithoutIssuesInput,
};

export type RenamedcaseUpsertWithoutKorbansInput = {
  update: RenamedcaseUpdateWithoutKorbansInput,
  create: RenamedcaseCreateWithoutKorbansInput,
};

export type RenamedcaseUpsertWithoutLogRequestsInput = {
  update: RenamedcaseUpdateWithoutLogRequestsInput,
  create: RenamedcaseCreateWithoutLogRequestsInput,
};

export type RenamedcaseUpsertWithoutPelakusInput = {
  update: RenamedcaseUpdateWithoutPelakusInput,
  create: RenamedcaseCreateWithoutPelakusInput,
};

export type RenamedcaseUpsertWithoutPkInput = {
  update: RenamedcaseUpdateWithoutPkInput,
  create: RenamedcaseCreateWithoutPkInput,
};

export type RenamedcaseUpsertWithoutProgressesInput = {
  update: RenamedcaseUpdateWithoutProgressesInput,
  create: RenamedcaseCreateWithoutProgressesInput,
};

export type RenamedcaseUpsertWithoutReferralsInput = {
  update: RenamedcaseUpdateWithoutReferralsInput,
  create: RenamedcaseCreateWithoutReferralsInput,
};

export type RenamedcaseUpsertWithoutTransferInput = {
  update: RenamedcaseUpdateWithoutTransferInput,
  create: RenamedcaseCreateWithoutTransferInput,
};

export type RenamedcaseUpsertWithoutTransferreferralsInput = {
  update: RenamedcaseUpdateWithoutTransferreferralsInput,
  create: RenamedcaseCreateWithoutTransferreferralsInput,
};

export type RenamedcaseUpsertWithoutViolatedrightsInput = {
  update: RenamedcaseUpdateWithoutViolatedrightsInput,
  create: RenamedcaseCreateWithoutViolatedrightsInput,
};

export type RenamedcaseWhereInput = {
  AND?: Maybe<Array<RenamedcaseWhereInput>>,
  OR?: Maybe<Array<RenamedcaseWhereInput>>,
  NOT?: Maybe<Array<RenamedcaseWhereInput>>,
  id?: Maybe<IntFilter>,
  applicationId?: Maybe<IntNullableFilter>,
  caseClosed?: Maybe<BoolFilter>,
  caseClosedJenis?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  createdBy?: Maybe<StringNullableFilter>,
  hakTerlanggar?: Maybe<StringNullableFilter>,
  issue?: Maybe<StringNullableFilter>,
  judulKasus?: Maybe<StringNullableFilter>,
  klasifikasiDok?: Maybe<StringNullableFilter>,
  kronologiKasus?: Maybe<StringNullableFilter>,
  lockDitolak?: Maybe<BoolFilter>,
  statusPendampingan?: Maybe<StringNullableFilter>,
  targetAdvokasi?: Maybe<StringNullableFilter>,
  unlockPk?: Maybe<BoolFilter>,
  unlockTransfer?: Maybe<BoolFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  updatedBy?: Maybe<StringNullableFilter>,
  case_progresses?: Maybe<IntNullableFilter>,
  case_transfer?: Maybe<IntNullableFilter>,
  case_pk?: Maybe<IntNullableFilter>,
  pk?: Maybe<CasePkRelationFilter>,
  progresses?: Maybe<CaseProgressRelationFilter>,
  transfer?: Maybe<CaseTransferRelationFilter>,
  application?: Maybe<ApplicationRelationFilter>,
  referrals?: Maybe<CaseReferralListRelationFilter>,
  classifications?: Maybe<CaseClassificationListRelationFilter>,
  consultations?: Maybe<CaseConsultationListRelationFilter>,
  documents?: Maybe<CaseDocumentListRelationFilter>,
  issues?: Maybe<CaseIssueListRelationFilter>,
  korbans?: Maybe<CaseKorbanListRelationFilter>,
  pelakus?: Maybe<CasePelakuListRelationFilter>,
  activities?: Maybe<CaseProgressActivityListRelationFilter>,
  transferreferrals?: Maybe<CaseTransferReferralListRelationFilter>,
  violatedrights?: Maybe<CaseViolatedRightListRelationFilter>,
  logRequests?: Maybe<LogRequestListRelationFilter>,
};

export type RenamedcaseWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  case_progresses?: Maybe<Scalars['Int']>,
  case_transfer?: Maybe<Scalars['Int']>,
  case_pk?: Maybe<Scalars['Int']>,
};

export type Role = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  typeRole?: Maybe<Scalars['Int']>,
  type?: Maybe<RolesType>,
  User: Array<User>,
};


export type RoleUserArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<Array<UserOrderByInput>>,
  cursor?: Maybe<UserWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<UserScalarFieldEnum>>
};

export type RoleAvgAggregate = {
  id: Scalars['Float'],
  typeRole?: Maybe<Scalars['Float']>,
};

export type RoleCountAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['Int']>,
  typeRole?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type RoleCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  type?: Maybe<RolesTypeCreateNestedOneWithoutRoleInput>,
  User?: Maybe<UserCreateNestedManyWithoutRoles_TypeInput>,
};

export type RoleCreateNestedManyWithoutTypeInput = {
  create?: Maybe<Array<RoleCreateWithoutTypeInput>>,
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutTypeInput>>,
  connect?: Maybe<Array<RoleWhereUniqueInput>>,
};

export type RoleCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<RoleCreateWithoutUserInput>>,
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutUserInput>>,
  connect?: Maybe<Array<RoleWhereUniqueInput>>,
};

export type RoleCreateOrConnectWithoutTypeInput = {
  where: RoleWhereUniqueInput,
  create: RoleCreateWithoutTypeInput,
};

export type RoleCreateOrConnectWithoutUserInput = {
  where: RoleWhereUniqueInput,
  create: RoleCreateWithoutUserInput,
};

export type RoleCreateWithoutTypeInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  User?: Maybe<UserCreateNestedManyWithoutRoles_TypeInput>,
};

export type RoleCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  type?: Maybe<RolesTypeCreateNestedOneWithoutRoleInput>,
};

export type RoleListRelationFilter = {
  every?: Maybe<RoleWhereInput>,
  some?: Maybe<RoleWhereInput>,
  none?: Maybe<RoleWhereInput>,
};

export type RoleMaxAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  typeRole?: Maybe<Scalars['Int']>,
};

export type RoleMinAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  typeRole?: Maybe<Scalars['Int']>,
};

export type RoleOrderByInput = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  typeRole?: Maybe<SortOrder>,
};

export enum RoleScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  TypeRole = 'typeRole'
}

export type RoleScalarWhereInput = {
  AND?: Maybe<Array<RoleScalarWhereInput>>,
  OR?: Maybe<Array<RoleScalarWhereInput>>,
  NOT?: Maybe<Array<RoleScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  typeRole?: Maybe<IntNullableFilter>,
};

export type RolesType = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  description?: Maybe<Scalars['String']>,
  Role: Array<Role>,
};


export type RolesTypeRoleArgs = {
  where?: Maybe<RoleWhereInput>,
  orderBy?: Maybe<Array<RoleOrderByInput>>,
  cursor?: Maybe<RoleWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<RoleScalarFieldEnum>>
};

export type RolesTypeAvgAggregate = {
  id: Scalars['Float'],
};

export type RolesTypeCountAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type RolesTypeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  Role?: Maybe<RoleCreateNestedManyWithoutTypeInput>,
};

export type RolesTypeCreateNestedOneWithoutRoleInput = {
  create?: Maybe<RolesTypeCreateWithoutRoleInput>,
  connectOrCreate?: Maybe<RolesTypeCreateOrConnectWithoutRoleInput>,
  connect?: Maybe<RolesTypeWhereUniqueInput>,
};

export type RolesTypeCreateOrConnectWithoutRoleInput = {
  where: RolesTypeWhereUniqueInput,
  create: RolesTypeCreateWithoutRoleInput,
};

export type RolesTypeCreateWithoutRoleInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
};

export type RolesTypeMaxAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
};

export type RolesTypeMinAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
};

export type RolesTypeOrderByInput = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  description?: Maybe<SortOrder>,
};

export type RolesTypeRelationFilter = {
  is?: Maybe<RolesTypeWhereInput>,
  isNot?: Maybe<RolesTypeWhereInput>,
};

export enum RolesTypeScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Description = 'description'
}

export type RolesTypeSumAggregate = {
  id: Scalars['Int'],
};

export type RolesTypeUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  description?: Maybe<NullableStringFieldUpdateOperationsInput>,
  Role?: Maybe<RoleUpdateManyWithoutTypeInput>,
};

export type RolesTypeUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  description?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type RolesTypeUpdateOneWithoutRoleInput = {
  create?: Maybe<RolesTypeCreateWithoutRoleInput>,
  connectOrCreate?: Maybe<RolesTypeCreateOrConnectWithoutRoleInput>,
  upsert?: Maybe<RolesTypeUpsertWithoutRoleInput>,
  connect?: Maybe<RolesTypeWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RolesTypeUpdateWithoutRoleInput>,
};

export type RolesTypeUpdateWithoutRoleInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  description?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type RolesTypeUpsertWithoutRoleInput = {
  update: RolesTypeUpdateWithoutRoleInput,
  create: RolesTypeCreateWithoutRoleInput,
};

export type RolesTypeWhereInput = {
  AND?: Maybe<Array<RolesTypeWhereInput>>,
  OR?: Maybe<Array<RolesTypeWhereInput>>,
  NOT?: Maybe<Array<RolesTypeWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  description?: Maybe<StringNullableFilter>,
  Role?: Maybe<RoleListRelationFilter>,
};

export type RolesTypeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type RoleSumAggregate = {
  id: Scalars['Int'],
  typeRole?: Maybe<Scalars['Int']>,
};

export type RoleUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  type?: Maybe<RolesTypeUpdateOneWithoutRoleInput>,
  User?: Maybe<UserUpdateManyWithoutRoles_TypeInput>,
};

export type RoleUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
};

export type RoleUpdateManyWithoutTypeInput = {
  create?: Maybe<Array<RoleCreateWithoutTypeInput>>,
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutTypeInput>>,
  upsert?: Maybe<Array<RoleUpsertWithWhereUniqueWithoutTypeInput>>,
  connect?: Maybe<Array<RoleWhereUniqueInput>>,
  set?: Maybe<Array<RoleWhereUniqueInput>>,
  disconnect?: Maybe<Array<RoleWhereUniqueInput>>,
  delete?: Maybe<Array<RoleWhereUniqueInput>>,
  update?: Maybe<Array<RoleUpdateWithWhereUniqueWithoutTypeInput>>,
  updateMany?: Maybe<Array<RoleUpdateManyWithWhereWithoutTypeInput>>,
  deleteMany?: Maybe<Array<RoleScalarWhereInput>>,
};

export type RoleUpdateManyWithoutUserInput = {
  create?: Maybe<Array<RoleCreateWithoutUserInput>>,
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutUserInput>>,
  upsert?: Maybe<Array<RoleUpsertWithWhereUniqueWithoutUserInput>>,
  connect?: Maybe<Array<RoleWhereUniqueInput>>,
  set?: Maybe<Array<RoleWhereUniqueInput>>,
  disconnect?: Maybe<Array<RoleWhereUniqueInput>>,
  delete?: Maybe<Array<RoleWhereUniqueInput>>,
  update?: Maybe<Array<RoleUpdateWithWhereUniqueWithoutUserInput>>,
  updateMany?: Maybe<Array<RoleUpdateManyWithWhereWithoutUserInput>>,
  deleteMany?: Maybe<Array<RoleScalarWhereInput>>,
};

export type RoleUpdateManyWithWhereWithoutTypeInput = {
  where: RoleScalarWhereInput,
  data: RoleUpdateManyMutationInput,
};

export type RoleUpdateManyWithWhereWithoutUserInput = {
  where: RoleScalarWhereInput,
  data: RoleUpdateManyMutationInput,
};

export type RoleUpdateWithoutTypeInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  User?: Maybe<UserUpdateManyWithoutRoles_TypeInput>,
};

export type RoleUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  type?: Maybe<RolesTypeUpdateOneWithoutRoleInput>,
};

export type RoleUpdateWithWhereUniqueWithoutTypeInput = {
  where: RoleWhereUniqueInput,
  data: RoleUpdateWithoutTypeInput,
};

export type RoleUpdateWithWhereUniqueWithoutUserInput = {
  where: RoleWhereUniqueInput,
  data: RoleUpdateWithoutUserInput,
};

export type RoleUpsertWithWhereUniqueWithoutTypeInput = {
  where: RoleWhereUniqueInput,
  update: RoleUpdateWithoutTypeInput,
  create: RoleCreateWithoutTypeInput,
};

export type RoleUpsertWithWhereUniqueWithoutUserInput = {
  where: RoleWhereUniqueInput,
  update: RoleUpdateWithoutUserInput,
  create: RoleCreateWithoutUserInput,
};

export type RoleWhereInput = {
  AND?: Maybe<Array<RoleWhereInput>>,
  OR?: Maybe<Array<RoleWhereInput>>,
  NOT?: Maybe<Array<RoleWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  typeRole?: Maybe<IntNullableFilter>,
  type?: Maybe<RolesTypeRelationFilter>,
  User?: Maybe<UserListRelationFilter>,
};

export type RoleWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SrcAnalisa = {
  id: Scalars['Int'],
  group?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  kode_list?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
};

export type SrcAnalisaAvgAggregate = {
  id: Scalars['Float'],
};

export type SrcAnalisaCountAggregate = {
  id: Scalars['Int'],
  group?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['Int']>,
  field?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['Int']>,
  source?: Maybe<Scalars['Int']>,
  kode_list?: Maybe<Scalars['Int']>,
  alias?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type SrcAnalisaCreateInput = {
  group?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  kode_list?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
};

export type SrcAnalisaMaxAggregate = {
  id: Scalars['Int'],
  group?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  kode_list?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
};

export type SrcAnalisaMinAggregate = {
  id: Scalars['Int'],
  group?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  field?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  kode_list?: Maybe<Scalars['String']>,
  alias?: Maybe<Scalars['String']>,
};

export type SrcAnalisaOrderByInput = {
  id?: Maybe<SortOrder>,
  group?: Maybe<SortOrder>,
  label?: Maybe<SortOrder>,
  field?: Maybe<SortOrder>,
  type?: Maybe<SortOrder>,
  source?: Maybe<SortOrder>,
  kode_list?: Maybe<SortOrder>,
  alias?: Maybe<SortOrder>,
};

export enum SrcAnalisaScalarFieldEnum {
  Id = 'id',
  Group = 'group',
  Label = 'label',
  Field = 'field',
  Type = 'type',
  Source = 'source',
  KodeList = 'kode_list',
  Alias = 'alias'
}

export type SrcAnalisaSumAggregate = {
  id: Scalars['Int'],
};

export type SrcAnalisaUpdateInput = {
  group?: Maybe<NullableStringFieldUpdateOperationsInput>,
  label?: Maybe<NullableStringFieldUpdateOperationsInput>,
  field?: Maybe<NullableStringFieldUpdateOperationsInput>,
  type?: Maybe<NullableStringFieldUpdateOperationsInput>,
  source?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kode_list?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type SrcAnalisaUpdateManyMutationInput = {
  group?: Maybe<NullableStringFieldUpdateOperationsInput>,
  label?: Maybe<NullableStringFieldUpdateOperationsInput>,
  field?: Maybe<NullableStringFieldUpdateOperationsInput>,
  type?: Maybe<NullableStringFieldUpdateOperationsInput>,
  source?: Maybe<NullableStringFieldUpdateOperationsInput>,
  kode_list?: Maybe<NullableStringFieldUpdateOperationsInput>,
  alias?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type SrcAnalisaWhereInput = {
  AND?: Maybe<Array<SrcAnalisaWhereInput>>,
  OR?: Maybe<Array<SrcAnalisaWhereInput>>,
  NOT?: Maybe<Array<SrcAnalisaWhereInput>>,
  id?: Maybe<IntFilter>,
  group?: Maybe<StringNullableFilter>,
  label?: Maybe<StringNullableFilter>,
  field?: Maybe<StringNullableFilter>,
  type?: Maybe<StringNullableFilter>,
  source?: Maybe<StringNullableFilter>,
  kode_list?: Maybe<StringNullableFilter>,
  alias?: Maybe<StringNullableFilter>,
};

export type SrcAnalisaWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type SrcOperator = {
  id: Scalars['Int'],
  type?: Maybe<Scalars['String']>,
  operator?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
};

export type SrcOperatorAvgAggregate = {
  id: Scalars['Float'],
};

export type SrcOperatorCountAggregate = {
  id: Scalars['Int'],
  type?: Maybe<Scalars['Int']>,
  operator?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type SrcOperatorCreateInput = {
  type?: Maybe<Scalars['String']>,
  operator?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
};

export type SrcOperatorMaxAggregate = {
  id: Scalars['Int'],
  type?: Maybe<Scalars['String']>,
  operator?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
};

export type SrcOperatorMinAggregate = {
  id: Scalars['Int'],
  type?: Maybe<Scalars['String']>,
  operator?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
};

export type SrcOperatorOrderByInput = {
  id?: Maybe<SortOrder>,
  type?: Maybe<SortOrder>,
  operator?: Maybe<SortOrder>,
  label?: Maybe<SortOrder>,
};

export enum SrcOperatorScalarFieldEnum {
  Id = 'id',
  Type = 'type',
  Operator = 'operator',
  Label = 'label'
}

export type SrcOperatorSumAggregate = {
  id: Scalars['Int'],
};

export type SrcOperatorUpdateInput = {
  type?: Maybe<NullableStringFieldUpdateOperationsInput>,
  operator?: Maybe<NullableStringFieldUpdateOperationsInput>,
  label?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type SrcOperatorUpdateManyMutationInput = {
  type?: Maybe<NullableStringFieldUpdateOperationsInput>,
  operator?: Maybe<NullableStringFieldUpdateOperationsInput>,
  label?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type SrcOperatorWhereInput = {
  AND?: Maybe<Array<SrcOperatorWhereInput>>,
  OR?: Maybe<Array<SrcOperatorWhereInput>>,
  NOT?: Maybe<Array<SrcOperatorWhereInput>>,
  id?: Maybe<IntFilter>,
  type?: Maybe<StringNullableFilter>,
  operator?: Maybe<StringNullableFilter>,
  label?: Maybe<StringNullableFilter>,
};

export type SrcOperatorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type SrcTemplate = {
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
};

export type SrcTemplateAvgAggregate = {
  id: Scalars['Float'],
};

export type SrcTemplateCountAggregate = {
  id: Scalars['Int'],
  name?: Maybe<Scalars['Int']>,
  template?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type SrcTemplateCreateInput = {
  name?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
};

export type SrcTemplateMaxAggregate = {
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
};

export type SrcTemplateMinAggregate = {
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
};

export type SrcTemplateOrderByInput = {
  id?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  template?: Maybe<SortOrder>,
};

export enum SrcTemplateScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Template = 'template'
}

export type SrcTemplateSumAggregate = {
  id: Scalars['Int'],
};

export type SrcTemplateUpdateInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  template?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type SrcTemplateUpdateManyMutationInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  template?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type SrcTemplateWhereInput = {
  AND?: Maybe<Array<SrcTemplateWhereInput>>,
  OR?: Maybe<Array<SrcTemplateWhereInput>>,
  NOT?: Maybe<Array<SrcTemplateWhereInput>>,
  id?: Maybe<IntFilter>,
  name?: Maybe<StringNullableFilter>,
  template?: Maybe<StringNullableFilter>,
};

export type SrcTemplateWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>,
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
  not?: Maybe<NestedStringFilter>,
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
  not?: Maybe<NestedStringNullableFilter>,
};

export type User = {
  id: Scalars['Int'],
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  username?: Maybe<Scalars['String']>,
  userProfileId?: Maybe<Scalars['Int']>,
  profile?: Maybe<UserProfile>,
  CaseConsultationApp: Array<CaseConsultationApp>,
  CasePk: Array<CasePk>,
  logRequestBy: Array<LogRequest>,
  logRequestTo: Array<LogRequest>,
  LogRequestApp: Array<LogRequestApp>,
  roles_type: Array<Role>,
};


export type UserCaseConsultationAppArgs = {
  where?: Maybe<CaseConsultationAppWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationAppOrderByInput>>,
  cursor?: Maybe<CaseConsultationAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CaseConsultationAppScalarFieldEnum>>
};


export type UserCasePkArgs = {
  where?: Maybe<CasePkWhereInput>,
  orderBy?: Maybe<Array<CasePkOrderByInput>>,
  cursor?: Maybe<CasePkWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<CasePkScalarFieldEnum>>
};


export type UserLogRequestByArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestScalarFieldEnum>>
};


export type UserLogRequestToArgs = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  cursor?: Maybe<LogRequestWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestScalarFieldEnum>>
};


export type UserLogRequestAppArgs = {
  where?: Maybe<LogRequestAppWhereInput>,
  orderBy?: Maybe<Array<LogRequestAppOrderByInput>>,
  cursor?: Maybe<LogRequestAppWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<LogRequestAppScalarFieldEnum>>
};


export type UserRoles_TypeArgs = {
  where?: Maybe<RoleWhereInput>,
  orderBy?: Maybe<Array<RoleOrderByInput>>,
  cursor?: Maybe<RoleWhereUniqueInput>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<RoleScalarFieldEnum>>
};

export type UserAvgAggregate = {
  id: Scalars['Float'],
  userProfileId?: Maybe<Scalars['Float']>,
};

export type UserCountAggregate = {
  id: Scalars['Int'],
  address?: Maybe<Scalars['Int']>,
  avatar?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Int']>,
  deletedAt?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['Int']>,
  password?: Maybe<Scalars['Int']>,
  phone?: Maybe<Scalars['Int']>,
  position?: Maybe<Scalars['Int']>,
  rememberToken?: Maybe<Scalars['Int']>,
  roles?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  username?: Maybe<Scalars['Int']>,
  userProfileId?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type UserCreateInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppCreateNestedManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkCreateNestedManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestCreateNestedManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateNestedManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppCreateNestedManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleCreateNestedManyWithoutUserInput>,
};

export type UserCreateNestedManyWithoutRoles_TypeInput = {
  create?: Maybe<Array<UserCreateWithoutRoles_TypeInput>>,
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutRoles_TypeInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateNestedOneWithoutCaseConsultationAppInput = {
  create?: Maybe<UserCreateWithoutCaseConsultationAppInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCaseConsultationAppInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateNestedOneWithoutCasePkInput = {
  create?: Maybe<UserCreateWithoutCasePkInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCasePkInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateNestedOneWithoutLogRequestAppInput = {
  create?: Maybe<UserCreateWithoutLogRequestAppInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLogRequestAppInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateNestedOneWithoutLogRequestByInput = {
  create?: Maybe<UserCreateWithoutLogRequestByInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLogRequestByInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateNestedOneWithoutLogRequestToInput = {
  create?: Maybe<UserCreateWithoutLogRequestToInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLogRequestToInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateNestedOneWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProfileInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOrConnectWithoutCaseConsultationAppInput = {
  where: UserWhereUniqueInput,
  create: UserCreateWithoutCaseConsultationAppInput,
};

export type UserCreateOrConnectWithoutCasePkInput = {
  where: UserWhereUniqueInput,
  create: UserCreateWithoutCasePkInput,
};

export type UserCreateOrConnectWithoutLogRequestAppInput = {
  where: UserWhereUniqueInput,
  create: UserCreateWithoutLogRequestAppInput,
};

export type UserCreateOrConnectWithoutLogRequestByInput = {
  where: UserWhereUniqueInput,
  create: UserCreateWithoutLogRequestByInput,
};

export type UserCreateOrConnectWithoutLogRequestToInput = {
  where: UserWhereUniqueInput,
  create: UserCreateWithoutLogRequestToInput,
};

export type UserCreateOrConnectWithoutProfileInput = {
  where: UserWhereUniqueInput,
  create: UserCreateWithoutProfileInput,
};

export type UserCreateOrConnectWithoutRoles_TypeInput = {
  where: UserWhereUniqueInput,
  create: UserCreateWithoutRoles_TypeInput,
};

export type UserCreateWithoutCaseConsultationAppInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>,
  CasePk?: Maybe<CasePkCreateNestedManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestCreateNestedManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateNestedManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppCreateNestedManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleCreateNestedManyWithoutUserInput>,
};

export type UserCreateWithoutCasePkInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppCreateNestedManyWithoutAppConsultationInput>,
  logRequestBy?: Maybe<LogRequestCreateNestedManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateNestedManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppCreateNestedManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleCreateNestedManyWithoutUserInput>,
};

export type UserCreateWithoutLogRequestAppInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppCreateNestedManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkCreateNestedManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestCreateNestedManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateNestedManyWithoutRequestToInput>,
  roles_type?: Maybe<RoleCreateNestedManyWithoutUserInput>,
};

export type UserCreateWithoutLogRequestByInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppCreateNestedManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkCreateNestedManyWithoutPpPendampingInput>,
  logRequestTo?: Maybe<LogRequestCreateNestedManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppCreateNestedManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleCreateNestedManyWithoutUserInput>,
};

export type UserCreateWithoutLogRequestToInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppCreateNestedManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkCreateNestedManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestCreateNestedManyWithoutRequestByInput>,
  LogRequestApp?: Maybe<LogRequestAppCreateNestedManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleCreateNestedManyWithoutUserInput>,
};

export type UserCreateWithoutProfileInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  CaseConsultationApp?: Maybe<CaseConsultationAppCreateNestedManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkCreateNestedManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestCreateNestedManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateNestedManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppCreateNestedManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleCreateNestedManyWithoutUserInput>,
};

export type UserCreateWithoutRoles_TypeInput = {
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppCreateNestedManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkCreateNestedManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestCreateNestedManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestCreateNestedManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppCreateNestedManyWithoutAppConsultationInput>,
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>,
  some?: Maybe<UserWhereInput>,
  none?: Maybe<UserWhereInput>,
};

export type UserMaxAggregate = {
  id: Scalars['Int'],
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  userProfileId?: Maybe<Scalars['Int']>,
};

export type UserMinAggregate = {
  id: Scalars['Int'],
  address?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  rememberToken?: Maybe<Scalars['String']>,
  roles?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  username?: Maybe<Scalars['String']>,
  userProfileId?: Maybe<Scalars['Int']>,
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>,
  address?: Maybe<SortOrder>,
  avatar?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  deletedAt?: Maybe<SortOrder>,
  email?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  password?: Maybe<SortOrder>,
  phone?: Maybe<SortOrder>,
  position?: Maybe<SortOrder>,
  rememberToken?: Maybe<SortOrder>,
  roles?: Maybe<SortOrder>,
  status?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  username?: Maybe<SortOrder>,
  userProfileId?: Maybe<SortOrder>,
};

export type UserProfile = {
  id: Scalars['Int'],
  createdAt: Scalars['DateTime'],
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  User?: Maybe<User>,
};

export type UserProfileAvgAggregate = {
  id: Scalars['Float'],
};

export type UserProfileCountAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['Int']>,
  noContact?: Maybe<Scalars['Int']>,
  occupation?: Maybe<Scalars['Int']>,
  photo?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['Int']>,
  _all: Scalars['Int'],
};

export type UserProfileCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  User?: Maybe<UserCreateNestedOneWithoutProfileInput>,
};

export type UserProfileCreateNestedOneWithoutUserInput = {
  create?: Maybe<UserProfileCreateWithoutUserInput>,
  connectOrCreate?: Maybe<UserProfileCreateOrConnectWithoutUserInput>,
  connect?: Maybe<UserProfileWhereUniqueInput>,
};

export type UserProfileCreateOrConnectWithoutUserInput = {
  where: UserProfileWhereUniqueInput,
  create: UserProfileCreateWithoutUserInput,
};

export type UserProfileCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserProfileMaxAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserProfileMinAggregate = {
  id: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  noContact?: Maybe<Scalars['String']>,
  occupation?: Maybe<Scalars['String']>,
  photo?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserProfileOrderByInput = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  noContact?: Maybe<SortOrder>,
  occupation?: Maybe<SortOrder>,
  photo?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
};

export type UserProfileRelationFilter = {
  is?: Maybe<UserProfileWhereInput>,
  isNot?: Maybe<UserProfileWhereInput>,
};

export enum UserProfileScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  NoContact = 'noContact',
  Occupation = 'occupation',
  Photo = 'photo',
  UpdatedAt = 'updatedAt'
}

export type UserProfileSumAggregate = {
  id: Scalars['Int'],
};

export type UserProfileUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  noContact?: Maybe<NullableStringFieldUpdateOperationsInput>,
  occupation?: Maybe<NullableStringFieldUpdateOperationsInput>,
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  User?: Maybe<UserUpdateOneWithoutProfileInput>,
};

export type UserProfileUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  noContact?: Maybe<NullableStringFieldUpdateOperationsInput>,
  occupation?: Maybe<NullableStringFieldUpdateOperationsInput>,
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
};

export type UserProfileUpdateOneWithoutUserInput = {
  create?: Maybe<UserProfileCreateWithoutUserInput>,
  connectOrCreate?: Maybe<UserProfileCreateOrConnectWithoutUserInput>,
  upsert?: Maybe<UserProfileUpsertWithoutUserInput>,
  connect?: Maybe<UserProfileWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserProfileUpdateWithoutUserInput>,
};

export type UserProfileUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  noContact?: Maybe<NullableStringFieldUpdateOperationsInput>,
  occupation?: Maybe<NullableStringFieldUpdateOperationsInput>,
  photo?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
};

export type UserProfileUpsertWithoutUserInput = {
  update: UserProfileUpdateWithoutUserInput,
  create: UserProfileCreateWithoutUserInput,
};

export type UserProfileWhereInput = {
  AND?: Maybe<Array<UserProfileWhereInput>>,
  OR?: Maybe<Array<UserProfileWhereInput>>,
  NOT?: Maybe<Array<UserProfileWhereInput>>,
  id?: Maybe<IntFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  noContact?: Maybe<StringNullableFilter>,
  occupation?: Maybe<StringNullableFilter>,
  photo?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  User?: Maybe<UserRelationFilter>,
};

export type UserProfileWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>,
  isNot?: Maybe<UserWhereInput>,
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Address = 'address',
  Avatar = 'avatar',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Name = 'name',
  Password = 'password',
  Phone = 'phone',
  Position = 'position',
  RememberToken = 'rememberToken',
  Roles = 'roles',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  Username = 'username',
  UserProfileId = 'userProfileId'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>,
  OR?: Maybe<Array<UserScalarWhereInput>>,
  NOT?: Maybe<Array<UserScalarWhereInput>>,
  id?: Maybe<IntFilter>,
  address?: Maybe<StringNullableFilter>,
  avatar?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  deletedAt?: Maybe<DateTimeNullableFilter>,
  email?: Maybe<StringNullableFilter>,
  name?: Maybe<StringNullableFilter>,
  password?: Maybe<StringNullableFilter>,
  phone?: Maybe<StringNullableFilter>,
  position?: Maybe<StringNullableFilter>,
  rememberToken?: Maybe<StringNullableFilter>,
  roles?: Maybe<StringNullableFilter>,
  status?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  username?: Maybe<StringNullableFilter>,
  userProfileId?: Maybe<IntNullableFilter>,
};

export type UserSumAggregate = {
  id: Scalars['Int'],
  userProfileId?: Maybe<Scalars['Int']>,
};

export type UserUpdateInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  password?: Maybe<NullableStringFieldUpdateOperationsInput>,
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>,
  roles?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  username?: Maybe<NullableStringFieldUpdateOperationsInput>,
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppUpdateManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkUpdateManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserInput>,
};

export type UserUpdateManyMutationInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  password?: Maybe<NullableStringFieldUpdateOperationsInput>,
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>,
  roles?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  username?: Maybe<NullableStringFieldUpdateOperationsInput>,
};

export type UserUpdateManyWithoutRoles_TypeInput = {
  create?: Maybe<Array<UserCreateWithoutRoles_TypeInput>>,
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutRoles_TypeInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutRoles_TypeInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutRoles_TypeInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutRoles_TypeInput>>,
  deleteMany?: Maybe<Array<UserScalarWhereInput>>,
};

export type UserUpdateManyWithWhereWithoutRoles_TypeInput = {
  where: UserScalarWhereInput,
  data: UserUpdateManyMutationInput,
};

export type UserUpdateOneWithoutCaseConsultationAppInput = {
  create?: Maybe<UserCreateWithoutCaseConsultationAppInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCaseConsultationAppInput>,
  upsert?: Maybe<UserUpsertWithoutCaseConsultationAppInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateWithoutCaseConsultationAppInput>,
};

export type UserUpdateOneWithoutCasePkInput = {
  create?: Maybe<UserCreateWithoutCasePkInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCasePkInput>,
  upsert?: Maybe<UserUpsertWithoutCasePkInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateWithoutCasePkInput>,
};

export type UserUpdateOneWithoutLogRequestAppInput = {
  create?: Maybe<UserCreateWithoutLogRequestAppInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLogRequestAppInput>,
  upsert?: Maybe<UserUpsertWithoutLogRequestAppInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateWithoutLogRequestAppInput>,
};

export type UserUpdateOneWithoutLogRequestByInput = {
  create?: Maybe<UserCreateWithoutLogRequestByInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLogRequestByInput>,
  upsert?: Maybe<UserUpsertWithoutLogRequestByInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateWithoutLogRequestByInput>,
};

export type UserUpdateOneWithoutLogRequestToInput = {
  create?: Maybe<UserCreateWithoutLogRequestToInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLogRequestToInput>,
  upsert?: Maybe<UserUpsertWithoutLogRequestToInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateWithoutLogRequestToInput>,
};

export type UserUpdateOneWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>,
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProfileInput>,
  upsert?: Maybe<UserUpsertWithoutProfileInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<UserUpdateWithoutProfileInput>,
};

export type UserUpdateWithoutCaseConsultationAppInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  password?: Maybe<NullableStringFieldUpdateOperationsInput>,
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>,
  roles?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  username?: Maybe<NullableStringFieldUpdateOperationsInput>,
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>,
  CasePk?: Maybe<CasePkUpdateManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserInput>,
};

export type UserUpdateWithoutCasePkInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  password?: Maybe<NullableStringFieldUpdateOperationsInput>,
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>,
  roles?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  username?: Maybe<NullableStringFieldUpdateOperationsInput>,
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppUpdateManyWithoutAppConsultationInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserInput>,
};

export type UserUpdateWithoutLogRequestAppInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  password?: Maybe<NullableStringFieldUpdateOperationsInput>,
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>,
  roles?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  username?: Maybe<NullableStringFieldUpdateOperationsInput>,
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppUpdateManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkUpdateManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserInput>,
};

export type UserUpdateWithoutLogRequestByInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  password?: Maybe<NullableStringFieldUpdateOperationsInput>,
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>,
  roles?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  username?: Maybe<NullableStringFieldUpdateOperationsInput>,
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppUpdateManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkUpdateManyWithoutPpPendampingInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserInput>,
};

export type UserUpdateWithoutLogRequestToInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  password?: Maybe<NullableStringFieldUpdateOperationsInput>,
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>,
  roles?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  username?: Maybe<NullableStringFieldUpdateOperationsInput>,
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppUpdateManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkUpdateManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  LogRequestApp?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserInput>,
};

export type UserUpdateWithoutProfileInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  password?: Maybe<NullableStringFieldUpdateOperationsInput>,
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>,
  roles?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  username?: Maybe<NullableStringFieldUpdateOperationsInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppUpdateManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkUpdateManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
  roles_type?: Maybe<RoleUpdateManyWithoutUserInput>,
};

export type UserUpdateWithoutRoles_TypeInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>,
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>,
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>,
  email?: Maybe<NullableStringFieldUpdateOperationsInput>,
  name?: Maybe<NullableStringFieldUpdateOperationsInput>,
  password?: Maybe<NullableStringFieldUpdateOperationsInput>,
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>,
  position?: Maybe<NullableStringFieldUpdateOperationsInput>,
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>,
  roles?: Maybe<NullableStringFieldUpdateOperationsInput>,
  status?: Maybe<NullableStringFieldUpdateOperationsInput>,
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>,
  username?: Maybe<NullableStringFieldUpdateOperationsInput>,
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>,
  CaseConsultationApp?: Maybe<CaseConsultationAppUpdateManyWithoutAppConsultationInput>,
  CasePk?: Maybe<CasePkUpdateManyWithoutPpPendampingInput>,
  logRequestBy?: Maybe<LogRequestUpdateManyWithoutRequestByInput>,
  logRequestTo?: Maybe<LogRequestUpdateManyWithoutRequestToInput>,
  LogRequestApp?: Maybe<LogRequestAppUpdateManyWithoutAppConsultationInput>,
};

export type UserUpdateWithWhereUniqueWithoutRoles_TypeInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutRoles_TypeInput,
};

export type UserUpsertWithoutCaseConsultationAppInput = {
  update: UserUpdateWithoutCaseConsultationAppInput,
  create: UserCreateWithoutCaseConsultationAppInput,
};

export type UserUpsertWithoutCasePkInput = {
  update: UserUpdateWithoutCasePkInput,
  create: UserCreateWithoutCasePkInput,
};

export type UserUpsertWithoutLogRequestAppInput = {
  update: UserUpdateWithoutLogRequestAppInput,
  create: UserCreateWithoutLogRequestAppInput,
};

export type UserUpsertWithoutLogRequestByInput = {
  update: UserUpdateWithoutLogRequestByInput,
  create: UserCreateWithoutLogRequestByInput,
};

export type UserUpsertWithoutLogRequestToInput = {
  update: UserUpdateWithoutLogRequestToInput,
  create: UserCreateWithoutLogRequestToInput,
};

export type UserUpsertWithoutProfileInput = {
  update: UserUpdateWithoutProfileInput,
  create: UserCreateWithoutProfileInput,
};

export type UserUpsertWithWhereUniqueWithoutRoles_TypeInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutRoles_TypeInput,
  create: UserCreateWithoutRoles_TypeInput,
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
  id?: Maybe<IntFilter>,
  address?: Maybe<StringNullableFilter>,
  avatar?: Maybe<StringNullableFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  deletedAt?: Maybe<DateTimeNullableFilter>,
  email?: Maybe<StringNullableFilter>,
  name?: Maybe<StringNullableFilter>,
  password?: Maybe<StringNullableFilter>,
  phone?: Maybe<StringNullableFilter>,
  position?: Maybe<StringNullableFilter>,
  rememberToken?: Maybe<StringNullableFilter>,
  roles?: Maybe<StringNullableFilter>,
  status?: Maybe<StringNullableFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  username?: Maybe<StringNullableFilter>,
  userProfileId?: Maybe<IntNullableFilter>,
  profile?: Maybe<UserProfileRelationFilter>,
  CaseConsultationApp?: Maybe<CaseConsultationAppListRelationFilter>,
  CasePk?: Maybe<CasePkListRelationFilter>,
  logRequestBy?: Maybe<LogRequestListRelationFilter>,
  logRequestTo?: Maybe<LogRequestListRelationFilter>,
  LogRequestApp?: Maybe<LogRequestAppListRelationFilter>,
  roles_type?: Maybe<RoleListRelationFilter>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>,
  userProfileId?: Maybe<Scalars['Int']>,
};
export type DestroyRolesMutationVariables = {
  where: RoleWhereInput
};


export type DestroyRolesMutation = { deleteManyRole: Pick<AffectedRowsOutput, 'count'> };

export type DestroyLogMutationVariables = {
  where: LogRequestWhereInput
};


export type DestroyLogMutation = { deleteManyLogRequest: Pick<AffectedRowsOutput, 'count'> };

export type DestroyLitMutationVariables = {
  where: CaseProgressActivityLitWhereInput
};


export type DestroyLitMutation = { deleteManyCaseProgressActivityLit: Pick<AffectedRowsOutput, 'count'> };

export type DestroyNonlitMutationVariables = {
  where: CaseProgressActivityNonlitWhereInput
};


export type DestroyNonlitMutation = { deleteManyCaseProgressActivityNonlit: Pick<AffectedRowsOutput, 'count'> };

export type DestroyKorbanMutationVariables = {
  where: CaseKorbanWhereInput
};


export type DestroyKorbanMutation = { deleteManyCaseKorban: Pick<AffectedRowsOutput, 'count'> };

export type DestroyPelakuMutationVariables = {
  where: CasePelakuWhereInput
};


export type DestroyPelakuMutation = { deleteManyCasePelaku: Pick<AffectedRowsOutput, 'count'> };

export type DestroyCaseViolatedRightMutationVariables = {
  where: CaseViolatedRightWhereInput
};


export type DestroyCaseViolatedRightMutation = { deleteManyCaseViolatedRight: Pick<AffectedRowsOutput, 'count'> };

export type DestroyCaseClassificationMutationVariables = {
  where: CaseClassificationWhereInput
};


export type DestroyCaseClassificationMutation = { deleteManyCaseClassification: Pick<AffectedRowsOutput, 'count'> };

export type DestroyCaseProgressActivityMutationVariables = {
  where: CaseProgressActivityWhereInput
};


export type DestroyCaseProgressActivityMutation = { deleteManyCaseProgressActivity: Pick<AffectedRowsOutput, 'count'> };

export type DestroyCaseIssueMutationVariables = {
  where: CaseIssueWhereInput
};


export type DestroyCaseIssueMutation = { deleteManyCaseIssue: Pick<AffectedRowsOutput, 'count'> };

export type PostLogRequestMutationVariables = {
  data: LogRequestCreateInput
};


export type PostLogRequestMutation = { createLogRequest: (Pick<LogRequest, 'ID' | 'isiRequest' | 'jenisRequest' | 'tanggapanRequest' | 'tanggapanRequestIsi' | 'tglExpired' | 'tglRequest' | 'tglRespon'> & { caseId: Maybe<Pick<Renamedcase, 'id'>>, applicationId: Maybe<Pick<Application, 'id' | 'tahap'>>, networkId: Maybe<Pick<Network, 'id'>>, personId: Maybe<Pick<Person, 'id'>>, pp: Array<Pick<LogRequestApp, 'id'>>, requestBy: Maybe<Pick<User, 'id'>>, requestTo: Maybe<Pick<User, 'id'>> }) };

export type PostUserMutationVariables = {
  data: UserCreateInput
};


export type PostUserMutation = { createUser: (Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Maybe<Pick<UserProfile, 'id' | 'noContact'>> }) };

export type PostNetworkMutationVariables = {
  data: NetworkCreateInput
};


export type PostNetworkMutation = { createNetwork: Pick<Network, 'address' | 'contactPerson' | 'createdAt' | 'email' | 'id' | 'name' | 'noContact' | 'provinceId' | 'regencyId' | 'type' | 'status' | 'updatedAt'> };

export type PostClientMutationVariables = {
  data: ClientCreateInput
};


export type PostClientMutation = { createClient: (Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { applicationId: Maybe<Pick<Application, 'id'>>, personId: Maybe<Pick<Person, 'id'>> }) };

export type PostApplicationMutationVariables = {
  data: ApplicationCreateInput
};


export type PostApplicationMutation = { createApplication: (Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh'> & { wakilId: Maybe<Pick<Person, 'id' | 'namaLengkap'>>, case: Maybe<Pick<Renamedcase, 'id'>>, clients: Array<(Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { personId: Maybe<Pick<Person, 'id' | 'namaLengkap'>> })> }) };

export type PutCaseMutationVariables = {
  data: RenamedcaseUpdateInput,
  where: RenamedcaseWhereUniqueInput
};


export type PutCaseMutation = { updateRenamedcase: Maybe<(Pick<Renamedcase, 'id' | 'applicationId' | 'caseClosed' | 'caseClosedJenis' | 'createdAt' | 'createdBy' | 'hakTerlanggar' | 'issue' | 'judulKasus' | 'klasifikasiDok' | 'klasifikasiDok' | 'kronologiKasus' | 'lockDitolak' | 'statusPendampingan' | 'targetAdvokasi' | 'unlockPk' | 'unlockTransfer' | 'updatedAt' | 'updatedBy'> & { application: Maybe<(Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh' | 'tahap' | 'status'> & { wakilId: Maybe<Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon'>>, clients: Array<{ personId: Maybe<Pick<Person, 'namaLengkap'>> }> })>, classifications: Array<Pick<CaseClassification, 'id' | 'kodeMt'>>, consultations: Array<(Pick<CaseConsultation, 'id' | 'appKonsul' | 'createdAt' | 'createdBy' | 'isiKonsul' | 'judulAktifitas' | 'ppKonsul' | 'harapan' | 'saranHukum' | 'rencanaTindakLanjut' | 'tglKonsul' | 'updatedAt' | 'updatedBy'> & { apps: Array<{ appConsultation: Maybe<Pick<User, 'name' | 'id'>> }> })>, documents: Array<Pick<CaseDocument, 'jenisDokumen' | 'judulDokumen' | 'keterangan' | 'filename' | 'link'>>, issues: Array<Pick<CaseIssue, 'id' | 'kodeMt'>>, korbans: Array<(Pick<CaseKorban, 'id'> & { personId: Maybe<Pick<Person, 'namaLengkap' | 'id'>> })>, pelakus: Array<(Pick<CasePelaku, 'id' | 'jenisPelaku'> & { personId: Maybe<Pick<Person, 'namaLengkap' | 'id'>> })>, pk: Maybe<(Pick<CasePk, 'id' | 'createdAt' | 'createdBy' | 'didampingi' | 'legalMemo' | 'notulaRapat' | 'strategiAdvokasi' | 'targetAkhirAdvokasi' | 'statusAlasanTdk' | 'tglRapat'> & { ppPendamping: Maybe<(Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Maybe<Pick<UserProfile, 'id' | 'noContact'>> })> })>, progresses: Maybe<Pick<CaseProgress, 'id' | 'catatan' | 'jenisPeradilan'>>, activities: Array<(Pick<CaseProgressActivity, 'id' | 'capaian' | 'hambatan' | 'judulAktifitas' | 'position' | 'rencanaStrategi' | 'targetAdvokasi'> & { activitieslit: Array<Pick<CaseProgressActivityLit, 'id' | 'kodeMt'>>, activitiesnonlit: Array<Pick<CaseProgressActivityNonlit, 'id' | 'kodeMt'>> })>, transferreferrals: Array<Pick<CaseTransferReferral, 'id' | 'catatan' | 'document' | 'jenisTransferReferral' | 'networkId' | 'updatedAt' | 'updatedBy'>>, violatedrights: Array<Pick<CaseViolatedRight, 'id' | 'kodeMt'>> })> };

export type PutLogRequestMutationVariables = {
  data: LogRequestUpdateInput,
  where: LogRequestWhereUniqueInput
};


export type PutLogRequestMutation = { updateLogRequest: Maybe<(Pick<LogRequest, 'ID' | 'isiRequest' | 'jenisRequest' | 'tanggapanRequest' | 'tanggapanRequestIsi' | 'tglExpired' | 'tglRequest' | 'tglRespon'> & { caseId: Maybe<Pick<Renamedcase, 'id'>>, applicationId: Maybe<Pick<Application, 'id'>>, networkId: Maybe<Pick<Network, 'id'>>, personId: Maybe<Pick<Person, 'id'>>, pp: Array<Pick<LogRequestApp, 'id'>>, requestBy: Maybe<Pick<User, 'id'>>, requestTo: Maybe<Pick<User, 'id'>> })> };

export type PutUserMutationVariables = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type PutUserMutation = { updateUser: Maybe<(Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Maybe<Pick<UserProfile, 'id' | 'noContact'>> })> };

export type PutNetworkMutationVariables = {
  data: NetworkUpdateInput,
  where: NetworkWhereUniqueInput
};


export type PutNetworkMutation = { updateNetwork: Maybe<Pick<Network, 'address' | 'contactPerson' | 'createdAt' | 'email' | 'id' | 'name' | 'noContact' | 'provinceId' | 'regencyId' | 'type' | 'status' | 'updatedAt'>> };

export type PutApplicationMutationVariables = {
  data: ApplicationUpdateInput,
  where: ApplicationWhereUniqueInput
};


export type PutApplicationMutation = { updateApplication: Maybe<(Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh'> & { wakilId: Maybe<Pick<Person, 'id' | 'namaLengkap'>>, case: Maybe<Pick<Renamedcase, 'id'>>, clients: Array<(Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { personId: Maybe<Pick<Person, 'id' | 'namaLengkap'>> })> })> };

export type PutPersonMutationVariables = {
  data: PersonUpdateInput,
  where: PersonWhereUniqueInput
};


export type PutPersonMutation = { updatePerson: Maybe<(Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon' | 'tglLahir' | 'tmpLahir' | 'unitSatuan' | 'updatedAt' | 'updatedBy' | 'wargaNegara'> & { applications: Array<Pick<Application, 'id' | 'noReg' | 'createdAt'>>, clients: Array<(Pick<Client, 'id'> & { applicationId: Maybe<Pick<Application, 'id' | 'noReg' | 'createdAt'>> })>, documents: Array<Pick<PersonDocument, 'id' | 'title' | 'file'>> })> };

export type PostPersonMutationVariables = {
  data: PersonCreateInput
};


export type PostPersonMutation = { createPerson: (Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon' | 'tglLahir' | 'tmpLahir' | 'unitSatuan' | 'updatedAt' | 'updatedBy' | 'wargaNegara'> & { applications: Array<Pick<Application, 'id' | 'noReg' | 'createdAt'>>, clients: Array<(Pick<Client, 'id'> & { applicationId: Maybe<Pick<Application, 'id' | 'noReg' | 'createdAt'>> })>, documents: Array<Pick<PersonDocument, 'id' | 'title' | 'file'>> }) };

export type GetLogRequestQueryVariables = {
  where?: Maybe<LogRequestWhereInput>,
  orderBy?: Maybe<Array<LogRequestOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetLogRequestQuery = { logRequests: Array<(Pick<LogRequest, 'ID' | 'updatedAt' | 'isiRequest' | 'tanggapanRequestIsi' | 'jenisRequest' | 'statusRequest' | 'tanggapanRequest' | 'tglExpired' | 'tglRequest' | 'tglRespon'> & { caseId: Maybe<(Pick<Renamedcase, 'id' | 'judulKasus' | 'kronologiKasus'> & { transfer: Maybe<(Pick<CaseTransfer, 'id' | 'tglTransfer'> & { network: Maybe<Pick<Network, 'id' | 'name'>> })>, application: Maybe<(Pick<Application, 'id' | 'noReg'> & { clients: Array<(Pick<Client, 'id'> & { personId: Maybe<Pick<Person, 'id' | 'namaLengkap'>> })> })>, pk: Maybe<Pick<CasePk, 'id' | 'didampingi' | 'tglRapat'>> })>, applicationId: Maybe<(Pick<Application, 'id' | 'tahap' | 'noReg' | 'dudukPerara'> & { clients: Array<(Pick<Client, 'id'> & { personId: Maybe<Pick<Person, 'id' | 'namaLengkap'>> })> })>, networkId: Maybe<Pick<Network, 'id' | 'name'>>, personId: Maybe<Pick<Person, 'id' | 'namaLengkap'>>, pp: Array<(Pick<LogRequestApp, 'id'> & { appConsultation: Maybe<Pick<User, 'name' | 'id'>> })>, requestBy: Maybe<Pick<User, 'id' | 'name'>>, requestTo: Maybe<Pick<User, 'id'>> })> };

export type GetRolesTypeQueryVariables = {
  where?: Maybe<RolesTypeWhereInput>,
  orderBy?: Maybe<Array<RolesTypeOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetRolesTypeQuery = { rolesTypes: Array<Pick<RolesType, 'id' | 'description'>> };

export type GetNetworksQueryVariables = {
  where?: Maybe<NetworkWhereInput>,
  orderBy?: Maybe<Array<NetworkOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetNetworksQuery = { networks: Array<Pick<Network, 'address' | 'contactPerson' | 'createdAt' | 'email' | 'id' | 'name' | 'noContact' | 'provinceId' | 'regencyId' | 'type' | 'status' | 'updatedAt'>> };

export type GetUserQueryVariables = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<Array<UserOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetUserQuery = { users: Array<(Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Maybe<Pick<UserProfile, 'id' | 'noContact'>>, roles_type: Array<(Pick<Role, 'id'> & { type: Maybe<Pick<RolesType, 'id' | 'description'>> })> })> };

export type GetCaseQueryVariables = {
  where?: Maybe<RenamedcaseWhereInput>,
  orderBy?: Maybe<Array<RenamedcaseOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetCaseQuery = { renamedcases: Array<(Pick<Renamedcase, 'id' | 'applicationId' | 'caseClosed' | 'caseClosedJenis' | 'createdAt' | 'createdBy' | 'hakTerlanggar' | 'issue' | 'judulKasus' | 'klasifikasiDok' | 'klasifikasiDok' | 'kronologiKasus' | 'lockDitolak' | 'statusPendampingan' | 'targetAdvokasi' | 'unlockPk' | 'unlockTransfer' | 'updatedAt' | 'updatedBy'> & { transfer: Maybe<(Pick<CaseTransfer, 'id' | 'tglTransfer' | 'catatan' | 'createdBy' | 'updatedBy'> & { network: Maybe<Pick<Network, 'id' | 'name'>> })>, referrals: Array<(Pick<CaseReferral, 'id' | 'tglTransfer' | 'catatan' | 'createdBy' | 'updatedBy'> & { client: Maybe<Pick<Person, 'id' | 'namaLengkap'>>, network: Maybe<Pick<Network, 'id' | 'name'>> })>, application: Maybe<(Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh' | 'tahap' | 'status'> & { wakilId: Maybe<Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon'>>, clients: Array<(Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { personId: Maybe<Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon' | 'tglLahir' | 'tmpLahir' | 'unitSatuan' | 'updatedAt' | 'updatedBy' | 'wargaNegara'>> })> })>, classifications: Array<Pick<CaseClassification, 'id' | 'kodeMt'>>, consultations: Array<(Pick<CaseConsultation, 'id' | 'appKonsul' | 'createdAt' | 'createdBy' | 'isiKonsul' | 'judulAktifitas' | 'ppKonsul' | 'tglKonsul' | 'harapan' | 'saranHukum' | 'rencanaTindakLanjut' | 'updatedAt' | 'updatedBy'> & { caseId: Maybe<(Pick<Renamedcase, 'id'> & { application: Maybe<Pick<Application, 'id' | 'noReg'>> })>, apps: Array<(Pick<CaseConsultationApp, 'id'> & { appConsultation: Maybe<(Pick<User, 'name' | 'id'> & { roles_type: Array<(Pick<Role, 'id'> & { type: Maybe<Pick<RolesType, 'id'>> })> })> })> })>, documents: Array<Pick<CaseDocument, 'id' | 'jenisDokumen' | 'judulDokumen' | 'keterangan' | 'filename' | 'link' | 'createdAt'>>, issues: Array<Pick<CaseIssue, 'id' | 'kodeMt'>>, korbans: Array<(Pick<CaseKorban, 'id'> & { personId: Maybe<Pick<Person, 'namaLengkap' | 'id'>> })>, pelakus: Array<(Pick<CasePelaku, 'id' | 'jenisPelaku'> & { personId: Maybe<Pick<Person, 'namaLengkap' | 'id'>> })>, pk: Maybe<(Pick<CasePk, 'id' | 'createdAt' | 'createdBy' | 'didampingi' | 'legalMemo' | 'notulaRapat' | 'strategiAdvokasi' | 'targetAkhirAdvokasi' | 'statusAlasanTdk' | 'tglRapat'> & { ppPendamping: Maybe<(Pick<User, 'address' | 'avatar' | 'createdAt' | 'deletedAt' | 'email' | 'id' | 'name' | 'password' | 'phone' | 'position' | 'rememberToken' | 'roles' | 'status' | 'updatedAt' | 'username'> & { profile: Maybe<Pick<UserProfile, 'id' | 'noContact'>> })> })>, progresses: Maybe<Pick<CaseProgress, 'id' | 'catatan' | 'jenisPeradilan'>>, activities: Array<(Pick<CaseProgressActivity, 'id' | 'capaian' | 'hambatan' | 'tglAktifitas' | 'judulAktifitas' | 'position' | 'rencanaStrategi' | 'targetAdvokasi'> & { activitieslit: Array<Pick<CaseProgressActivityLit, 'id' | 'kodeMt'>>, activitiesnonlit: Array<Pick<CaseProgressActivityNonlit, 'id' | 'kodeMt'>> })>, transferreferrals: Array<Pick<CaseTransferReferral, 'id' | 'catatan' | 'document' | 'jenisTransferReferral' | 'networkId' | 'updatedAt' | 'updatedBy'>>, violatedrights: Array<Pick<CaseViolatedRight, 'id' | 'kodeMt'>>, logRequests: Array<(Pick<LogRequest, 'ID' | 'isiRequest' | 'tanggapanRequestIsi' | 'jenisRequest' | 'statusRequest' | 'tanggapanRequest' | 'tglExpired' | 'tglRequest' | 'tglRespon'> & { caseId: Maybe<Pick<Renamedcase, 'id' | 'judulKasus'>>, applicationId: Maybe<(Pick<Application, 'id' | 'tahap' | 'noReg' | 'dudukPerara'> & { clients: Array<(Pick<Client, 'id'> & { personId: Maybe<Pick<Person, 'id' | 'namaLengkap'>> })> })>, networkId: Maybe<Pick<Network, 'id'>>, personId: Maybe<Pick<Person, 'id'>>, pp: Array<(Pick<LogRequestApp, 'id'> & { appConsultation: Maybe<(Pick<User, 'name' | 'id'> & { roles_type: Array<(Pick<Role, 'id'> & { type: Maybe<Pick<RolesType, 'id'>> })> })> })>, requestBy: Maybe<Pick<User, 'id'>>, requestTo: Maybe<Pick<User, 'id'>> })> })> };

export type GetConsultationQueryVariables = {
  where?: Maybe<CaseConsultationWhereInput>,
  orderBy?: Maybe<Array<CaseConsultationOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetConsultationQuery = { caseConsultations: Array<Pick<CaseConsultation, 'id'>> };

export type GetPkQueryVariables = {
  where?: Maybe<CasePkWhereInput>,
  orderBy?: Maybe<Array<CasePkOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetPkQuery = { casePks: Array<Pick<CasePk, 'id'>> };

export type GetClientQueryVariables = {
  where?: Maybe<ClientWhereInput>,
  orderBy?: Maybe<Array<ClientOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetClientQuery = { clients: Array<(Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { applicationId: Maybe<Pick<Application, 'id'>>, personId: Maybe<Pick<Person, 'id'>> })> };

export type GetApplicationsQueryVariables = {
  where?: Maybe<ApplicationWhereInput>,
  orderBy?: Maybe<Array<ApplicationOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetApplicationsQuery = { applications: Array<(Pick<Application, 'id' | 'createdAt' | 'createdBy' | 'dudukPerara' | 'infoLbh' | 'jumlahPenerimaManfaat' | 'konfirmasiData' | 'noReg' | 'pernahKlien' | 'pernahPpLain' | 'ppLain' | 'regDate' | 'relasiWakilClient' | 'setujuAdvokasi' | 'statusPerwakilan' | 'updatedAt' | 'updatedBy' | 'waktuPernahKlien' | 'whyLbh'> & { wakilId: Maybe<Pick<Person, 'id' | 'namaLengkap' | 'alamatId'>>, case: Maybe<Pick<Renamedcase, 'id'>>, clients: Array<(Pick<Client, 'id' | 'alamatLokasi' | 'asetGedung' | 'asetKios' | 'asetLahanGarapan' | 'asetLapak' | 'asetMobil' | 'asetMotor' | 'asetRumah' | 'asetTanah' | 'asetToko' | 'asetWarung' | 'createdAt' | 'createdBy' | 'pendapatan' | 'sktm' | 'sktmUpload' | 'stmKeterangan' | 'tanggunganAnak' | 'tanggunganFamili' | 'tanggunganLain' | 'tanggunganPasangan' | 'updatedAt' | 'updatedBy' | 'usiaSaatKlien'> & { personId: Maybe<Pick<Person, 'id' | 'namaLengkap' | 'tglLahir' | 'tmpLahir' | 'alamatId' | 'pekerjaan' | 'jenisId' | 'nomorId'>> })> })> };

export type GetMtVocabsQueryVariables = {
  where?: Maybe<MtVocabWhereInput>,
  orderBy?: Maybe<Array<MtVocabOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type GetMtVocabsQuery = { mtVocabs: Array<Pick<MtVocab, 'KODE' | 'kode_induk' | 'level' | 'sembunyikan' | 'teks' | 'urutan'>> };

export type AllPersonQueryVariables = {
  where?: Maybe<PersonWhereInput>,
  orderBy?: Maybe<Array<PersonOrderByInput>>,
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>
};


export type AllPersonQuery = { people: Array<(Pick<Person, 'id' | 'agama' | 'alamatDomisili' | 'alamatId' | 'alatBantu' | 'alias' | 'createdAt' | 'createdBy' | 'disabilitas' | 'distrikDomisili' | 'distrikId' | 'domisiliSama' | 'email' | 'golDarah' | 'jenisDisabilitas' | 'jenisDomisili' | 'jenisId' | 'jenisKelamin' | 'jmlAnggota' | 'namaLengkap' | 'nomorId' | 'pekerjaan' | 'pendidikan' | 'statusPernikahan' | 'telepon' | 'tglLahir' | 'tmpLahir' | 'unitSatuan' | 'updatedAt' | 'updatedBy' | 'wargaNegara'> & { applications: Array<Pick<Application, 'id' | 'noReg' | 'createdAt'>>, clients: Array<(Pick<Client, 'id'> & { applicationId: Maybe<Pick<Application, 'id' | 'noReg' | 'createdAt'>> })>, documents: Array<Pick<PersonDocument, 'id' | 'title' | 'file'>> })> };

export const DestroyRolesDocument = gql`
    mutation destroyRoles($where: RoleWhereInput!) {
  deleteManyRole(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyRolesGQL extends Apollo.Mutation<DestroyRolesMutation, DestroyRolesMutationVariables> {
    document = DestroyRolesDocument;
    
  }
export const DestroyLogDocument = gql`
    mutation destroyLog($where: LogRequestWhereInput!) {
  deleteManyLogRequest(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyLogGQL extends Apollo.Mutation<DestroyLogMutation, DestroyLogMutationVariables> {
    document = DestroyLogDocument;
    
  }
export const DestroyLitDocument = gql`
    mutation destroyLit($where: CaseProgressActivityLitWhereInput!) {
  deleteManyCaseProgressActivityLit(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyLitGQL extends Apollo.Mutation<DestroyLitMutation, DestroyLitMutationVariables> {
    document = DestroyLitDocument;
    
  }
export const DestroyNonlitDocument = gql`
    mutation destroyNonlit($where: CaseProgressActivityNonlitWhereInput!) {
  deleteManyCaseProgressActivityNonlit(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyNonlitGQL extends Apollo.Mutation<DestroyNonlitMutation, DestroyNonlitMutationVariables> {
    document = DestroyNonlitDocument;
    
  }
export const DestroyKorbanDocument = gql`
    mutation destroyKorban($where: CaseKorbanWhereInput!) {
  deleteManyCaseKorban(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyKorbanGQL extends Apollo.Mutation<DestroyKorbanMutation, DestroyKorbanMutationVariables> {
    document = DestroyKorbanDocument;
    
  }
export const DestroyPelakuDocument = gql`
    mutation destroyPelaku($where: CasePelakuWhereInput!) {
  deleteManyCasePelaku(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyPelakuGQL extends Apollo.Mutation<DestroyPelakuMutation, DestroyPelakuMutationVariables> {
    document = DestroyPelakuDocument;
    
  }
export const DestroyCaseViolatedRightDocument = gql`
    mutation destroyCaseViolatedRight($where: CaseViolatedRightWhereInput!) {
  deleteManyCaseViolatedRight(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyCaseViolatedRightGQL extends Apollo.Mutation<DestroyCaseViolatedRightMutation, DestroyCaseViolatedRightMutationVariables> {
    document = DestroyCaseViolatedRightDocument;
    
  }
export const DestroyCaseClassificationDocument = gql`
    mutation destroyCaseClassification($where: CaseClassificationWhereInput!) {
  deleteManyCaseClassification(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyCaseClassificationGQL extends Apollo.Mutation<DestroyCaseClassificationMutation, DestroyCaseClassificationMutationVariables> {
    document = DestroyCaseClassificationDocument;
    
  }
export const DestroyCaseProgressActivityDocument = gql`
    mutation destroyCaseProgressActivity($where: CaseProgressActivityWhereInput!) {
  deleteManyCaseProgressActivity(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyCaseProgressActivityGQL extends Apollo.Mutation<DestroyCaseProgressActivityMutation, DestroyCaseProgressActivityMutationVariables> {
    document = DestroyCaseProgressActivityDocument;
    
  }
export const DestroyCaseIssueDocument = gql`
    mutation destroyCaseIssue($where: CaseIssueWhereInput!) {
  deleteManyCaseIssue(where: $where) {
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroyCaseIssueGQL extends Apollo.Mutation<DestroyCaseIssueMutation, DestroyCaseIssueMutationVariables> {
    document = DestroyCaseIssueDocument;
    
  }
export const PostLogRequestDocument = gql`
    mutation postLogRequest($data: LogRequestCreateInput!) {
  createLogRequest(data: $data) {
    ID
    caseId {
      id
    }
    isiRequest
    applicationId {
      id
      tahap
    }
    jenisRequest
    networkId {
      id
    }
    personId {
      id
    }
    pp {
      id
    }
    requestBy {
      id
    }
    requestTo {
      id
    }
    tanggapanRequest
    tanggapanRequestIsi
    tglExpired
    tglRequest
    tglRespon
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostLogRequestGQL extends Apollo.Mutation<PostLogRequestMutation, PostLogRequestMutationVariables> {
    document = PostLogRequestDocument;
    
  }
export const PostUserDocument = gql`
    mutation postUser($data: UserCreateInput!) {
  createUser(data: $data) {
    address
    avatar
    createdAt
    deletedAt
    email
    id
    name
    password
    phone
    position
    rememberToken
    roles
    status
    updatedAt
    username
    profile {
      id
      noContact
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostUserGQL extends Apollo.Mutation<PostUserMutation, PostUserMutationVariables> {
    document = PostUserDocument;
    
  }
export const PostNetworkDocument = gql`
    mutation postNetwork($data: NetworkCreateInput!) {
  createNetwork(data: $data) {
    address
    contactPerson
    createdAt
    email
    id
    name
    noContact
    provinceId
    regencyId
    type
    status
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostNetworkGQL extends Apollo.Mutation<PostNetworkMutation, PostNetworkMutationVariables> {
    document = PostNetworkDocument;
    
  }
export const PostClientDocument = gql`
    mutation postClient($data: ClientCreateInput!) {
  createClient(data: $data) {
    id
    alamatLokasi
    applicationId {
      id
    }
    asetGedung
    asetKios
    asetLahanGarapan
    asetLapak
    asetMobil
    asetMotor
    asetRumah
    asetTanah
    asetToko
    asetWarung
    createdAt
    createdBy
    pendapatan
    personId {
      id
    }
    sktm
    sktmUpload
    stmKeterangan
    tanggunganAnak
    tanggunganFamili
    tanggunganLain
    tanggunganPasangan
    updatedAt
    updatedBy
    usiaSaatKlien
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostClientGQL extends Apollo.Mutation<PostClientMutation, PostClientMutationVariables> {
    document = PostClientDocument;
    
  }
export const PostApplicationDocument = gql`
    mutation postApplication($data: ApplicationCreateInput!) {
  createApplication(data: $data) {
    id
    createdAt
    createdBy
    dudukPerara
    infoLbh
    jumlahPenerimaManfaat
    konfirmasiData
    noReg
    pernahKlien
    pernahPpLain
    ppLain
    regDate
    relasiWakilClient
    setujuAdvokasi
    statusPerwakilan
    updatedAt
    updatedBy
    wakilId {
      id
      namaLengkap
    }
    waktuPernahKlien
    whyLbh
    case {
      id
    }
    clients {
      id
      alamatLokasi
      asetGedung
      asetKios
      asetLahanGarapan
      asetLapak
      asetMobil
      asetMotor
      asetRumah
      asetTanah
      asetToko
      asetWarung
      createdAt
      createdBy
      pendapatan
      personId {
        id
        namaLengkap
      }
      sktm
      sktmUpload
      stmKeterangan
      tanggunganAnak
      tanggunganFamili
      tanggunganLain
      tanggunganPasangan
      updatedAt
      updatedBy
      usiaSaatKlien
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostApplicationGQL extends Apollo.Mutation<PostApplicationMutation, PostApplicationMutationVariables> {
    document = PostApplicationDocument;
    
  }
export const PutCaseDocument = gql`
    mutation putCase($data: RenamedcaseUpdateInput!, $where: RenamedcaseWhereUniqueInput!) {
  updateRenamedcase(data: $data, where: $where) {
    id
    applicationId
    caseClosed
    caseClosedJenis
    createdAt
    createdBy
    hakTerlanggar
    issue
    judulKasus
    klasifikasiDok
    klasifikasiDok
    kronologiKasus
    lockDitolak
    statusPendampingan
    targetAdvokasi
    unlockPk
    unlockTransfer
    updatedAt
    updatedBy
    application {
      id
      createdAt
      createdBy
      dudukPerara
      infoLbh
      jumlahPenerimaManfaat
      konfirmasiData
      noReg
      pernahKlien
      pernahPpLain
      ppLain
      regDate
      relasiWakilClient
      setujuAdvokasi
      statusPerwakilan
      updatedAt
      updatedBy
      wakilId {
        id
        agama
        alamatDomisili
        alamatId
        alatBantu
        alias
        createdAt
        createdBy
        disabilitas
        distrikDomisili
        distrikId
        domisiliSama
        email
        golDarah
        jenisDisabilitas
        jenisDomisili
        jenisId
        jenisKelamin
        jmlAnggota
        namaLengkap
        nomorId
        pekerjaan
        pendidikan
        statusPernikahan
        telepon
      }
      waktuPernahKlien
      whyLbh
      clients {
        personId {
          namaLengkap
        }
      }
      tahap
      status
    }
    classifications {
      id
      kodeMt
    }
    consultations {
      id
      appKonsul
      createdAt
      createdBy
      isiKonsul
      judulAktifitas
      ppKonsul
      harapan
      saranHukum
      rencanaTindakLanjut
      tglKonsul
      updatedAt
      updatedBy
      apps {
        appConsultation {
          name
          id
        }
      }
    }
    documents {
      jenisDokumen
      judulDokumen
      keterangan
      filename
      link
    }
    issues {
      id
      kodeMt
    }
    korbans {
      id
      personId {
        namaLengkap
        id
      }
    }
    pelakus {
      id
      personId {
        namaLengkap
        id
      }
      jenisPelaku
    }
    pk {
      id
      createdAt
      createdBy
      didampingi
      legalMemo
      notulaRapat
      strategiAdvokasi
      targetAkhirAdvokasi
      ppPendamping {
        address
        avatar
        createdAt
        deletedAt
        email
        id
        name
        password
        phone
        position
        rememberToken
        roles
        status
        updatedAt
        username
        profile {
          id
          noContact
        }
      }
      statusAlasanTdk
      tglRapat
    }
    progresses {
      id
      catatan
      jenisPeradilan
    }
    activities {
      id
      capaian
      hambatan
      judulAktifitas
      position
      rencanaStrategi
      targetAdvokasi
      activitieslit {
        id
        kodeMt
      }
      activitiesnonlit {
        id
        kodeMt
      }
    }
    transferreferrals {
      id
      catatan
      document
      jenisTransferReferral
      networkId
      updatedAt
      updatedBy
    }
    violatedrights {
      id
      kodeMt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutCaseGQL extends Apollo.Mutation<PutCaseMutation, PutCaseMutationVariables> {
    document = PutCaseDocument;
    
  }
export const PutLogRequestDocument = gql`
    mutation putLogRequest($data: LogRequestUpdateInput!, $where: LogRequestWhereUniqueInput!) {
  updateLogRequest(data: $data, where: $where) {
    ID
    caseId {
      id
    }
    isiRequest
    applicationId {
      id
    }
    jenisRequest
    networkId {
      id
    }
    personId {
      id
    }
    pp {
      id
    }
    requestBy {
      id
    }
    requestTo {
      id
    }
    tanggapanRequest
    tanggapanRequestIsi
    tglExpired
    tglRequest
    tglRespon
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutLogRequestGQL extends Apollo.Mutation<PutLogRequestMutation, PutLogRequestMutationVariables> {
    document = PutLogRequestDocument;
    
  }
export const PutUserDocument = gql`
    mutation putUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    address
    avatar
    createdAt
    deletedAt
    email
    id
    name
    password
    phone
    position
    rememberToken
    roles
    status
    updatedAt
    username
    profile {
      id
      noContact
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutUserGQL extends Apollo.Mutation<PutUserMutation, PutUserMutationVariables> {
    document = PutUserDocument;
    
  }
export const PutNetworkDocument = gql`
    mutation putNetwork($data: NetworkUpdateInput!, $where: NetworkWhereUniqueInput!) {
  updateNetwork(data: $data, where: $where) {
    address
    contactPerson
    createdAt
    email
    id
    name
    noContact
    provinceId
    regencyId
    type
    status
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutNetworkGQL extends Apollo.Mutation<PutNetworkMutation, PutNetworkMutationVariables> {
    document = PutNetworkDocument;
    
  }
export const PutApplicationDocument = gql`
    mutation putApplication($data: ApplicationUpdateInput!, $where: ApplicationWhereUniqueInput!) {
  updateApplication(data: $data, where: $where) {
    id
    createdAt
    createdBy
    dudukPerara
    infoLbh
    jumlahPenerimaManfaat
    konfirmasiData
    noReg
    pernahKlien
    pernahPpLain
    ppLain
    regDate
    relasiWakilClient
    setujuAdvokasi
    statusPerwakilan
    updatedAt
    updatedBy
    wakilId {
      id
      namaLengkap
    }
    waktuPernahKlien
    whyLbh
    case {
      id
    }
    clients {
      id
      alamatLokasi
      asetGedung
      asetKios
      asetLahanGarapan
      asetLapak
      asetMobil
      asetMotor
      asetRumah
      asetTanah
      asetToko
      asetWarung
      createdAt
      createdBy
      pendapatan
      personId {
        id
        namaLengkap
      }
      sktm
      sktmUpload
      stmKeterangan
      tanggunganAnak
      tanggunganFamili
      tanggunganLain
      tanggunganPasangan
      updatedAt
      updatedBy
      usiaSaatKlien
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutApplicationGQL extends Apollo.Mutation<PutApplicationMutation, PutApplicationMutationVariables> {
    document = PutApplicationDocument;
    
  }
export const PutPersonDocument = gql`
    mutation putPerson($data: PersonUpdateInput!, $where: PersonWhereUniqueInput!) {
  updatePerson(data: $data, where: $where) {
    id
    agama
    alamatDomisili
    alamatId
    alatBantu
    alias
    createdAt
    createdBy
    disabilitas
    distrikDomisili
    distrikId
    domisiliSama
    email
    golDarah
    jenisDisabilitas
    jenisDomisili
    jenisId
    jenisKelamin
    jmlAnggota
    namaLengkap
    nomorId
    pekerjaan
    pendidikan
    statusPernikahan
    telepon
    tglLahir
    tmpLahir
    unitSatuan
    updatedAt
    updatedBy
    wargaNegara
    applications {
      id
      noReg
      createdAt
    }
    clients {
      id
      applicationId {
        id
        noReg
        createdAt
      }
    }
    documents {
      id
      title
      file
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PutPersonGQL extends Apollo.Mutation<PutPersonMutation, PutPersonMutationVariables> {
    document = PutPersonDocument;
    
  }
export const PostPersonDocument = gql`
    mutation postPerson($data: PersonCreateInput!) {
  createPerson(data: $data) {
    id
    agama
    alamatDomisili
    alamatId
    alatBantu
    alias
    createdAt
    createdBy
    disabilitas
    distrikDomisili
    distrikId
    domisiliSama
    email
    golDarah
    jenisDisabilitas
    jenisDomisili
    jenisId
    jenisKelamin
    jmlAnggota
    namaLengkap
    nomorId
    pekerjaan
    pendidikan
    statusPernikahan
    telepon
    tglLahir
    tmpLahir
    unitSatuan
    updatedAt
    updatedBy
    wargaNegara
    applications {
      id
      noReg
      createdAt
    }
    clients {
      id
      applicationId {
        id
        noReg
        createdAt
      }
    }
    documents {
      id
      title
      file
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostPersonGQL extends Apollo.Mutation<PostPersonMutation, PostPersonMutationVariables> {
    document = PostPersonDocument;
    
  }
export const GetLogRequestDocument = gql`
    query getLogRequest($where: LogRequestWhereInput, $orderBy: [LogRequestOrderByInput!], $skip: Int, $take: Int) {
  logRequests(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    ID
    updatedAt
    caseId {
      id
      judulKasus
      transfer {
        id
        tglTransfer
        network {
          id
          name
        }
      }
      application {
        id
        noReg
        clients {
          id
          personId {
            id
            namaLengkap
          }
        }
      }
      kronologiKasus
      pk {
        id
        didampingi
        tglRapat
      }
    }
    isiRequest
    tanggapanRequestIsi
    applicationId {
      id
      tahap
      noReg
      dudukPerara
      clients {
        id
        personId {
          id
          namaLengkap
        }
      }
    }
    jenisRequest
    networkId {
      id
      name
    }
    personId {
      id
      namaLengkap
    }
    pp {
      id
      appConsultation {
        name
        id
      }
    }
    requestBy {
      id
      name
    }
    requestTo {
      id
    }
    statusRequest
    tanggapanRequest
    tglExpired
    tglRequest
    tglRespon
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLogRequestGQL extends Apollo.Query<GetLogRequestQuery, GetLogRequestQueryVariables> {
    document = GetLogRequestDocument;
    
  }
export const GetRolesTypeDocument = gql`
    query getRolesType($where: RolesTypeWhereInput, $orderBy: [RolesTypeOrderByInput!], $skip: Int, $take: Int) {
  rolesTypes(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRolesTypeGQL extends Apollo.Query<GetRolesTypeQuery, GetRolesTypeQueryVariables> {
    document = GetRolesTypeDocument;
    
  }
export const GetNetworksDocument = gql`
    query getNetworks($where: NetworkWhereInput, $orderBy: [NetworkOrderByInput!], $skip: Int, $take: Int) {
  networks(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    address
    contactPerson
    createdAt
    email
    id
    name
    noContact
    provinceId
    regencyId
    type
    status
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNetworksGQL extends Apollo.Query<GetNetworksQuery, GetNetworksQueryVariables> {
    document = GetNetworksDocument;
    
  }
export const GetUserDocument = gql`
    query getUser($where: UserWhereInput, $orderBy: [UserOrderByInput!], $skip: Int, $take: Int) {
  users(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    address
    avatar
    createdAt
    deletedAt
    email
    id
    name
    password
    phone
    position
    rememberToken
    roles
    status
    updatedAt
    username
    profile {
      id
      noContact
    }
    roles_type {
      id
      type {
        id
        description
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGQL extends Apollo.Query<GetUserQuery, GetUserQueryVariables> {
    document = GetUserDocument;
    
  }
export const GetCaseDocument = gql`
    query getCase($where: RenamedcaseWhereInput, $orderBy: [RenamedcaseOrderByInput!], $skip: Int, $take: Int) {
  renamedcases(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    applicationId
    caseClosed
    caseClosedJenis
    createdAt
    createdBy
    hakTerlanggar
    issue
    judulKasus
    klasifikasiDok
    klasifikasiDok
    kronologiKasus
    lockDitolak
    statusPendampingan
    targetAdvokasi
    unlockPk
    unlockTransfer
    updatedAt
    updatedBy
    transfer {
      id
      tglTransfer
      catatan
      network {
        id
        name
      }
      createdBy
      updatedBy
    }
    referrals {
      id
      client {
        id
        namaLengkap
      }
      tglTransfer
      catatan
      network {
        id
        name
      }
      createdBy
      updatedBy
    }
    application {
      id
      createdAt
      createdBy
      dudukPerara
      infoLbh
      jumlahPenerimaManfaat
      konfirmasiData
      noReg
      pernahKlien
      pernahPpLain
      ppLain
      regDate
      relasiWakilClient
      setujuAdvokasi
      statusPerwakilan
      updatedAt
      updatedBy
      wakilId {
        id
        agama
        alamatDomisili
        alamatId
        alatBantu
        alias
        createdAt
        createdBy
        disabilitas
        distrikDomisili
        distrikId
        domisiliSama
        email
        golDarah
        jenisDisabilitas
        jenisDomisili
        jenisId
        jenisKelamin
        jmlAnggota
        namaLengkap
        nomorId
        pekerjaan
        pendidikan
        statusPernikahan
        telepon
      }
      waktuPernahKlien
      whyLbh
      clients {
        id
        alamatLokasi
        asetGedung
        asetKios
        asetLahanGarapan
        asetLapak
        asetMobil
        asetMotor
        asetRumah
        asetTanah
        asetToko
        asetWarung
        createdAt
        createdBy
        pendapatan
        personId {
          id
          agama
          alamatDomisili
          alamatId
          alatBantu
          alias
          createdAt
          createdBy
          disabilitas
          distrikDomisili
          distrikId
          domisiliSama
          email
          golDarah
          jenisDisabilitas
          jenisDomisili
          jenisId
          jenisKelamin
          jmlAnggota
          namaLengkap
          nomorId
          pekerjaan
          pendidikan
          statusPernikahan
          telepon
          tglLahir
          tmpLahir
          unitSatuan
          updatedAt
          updatedBy
          wargaNegara
        }
        sktm
        sktmUpload
        stmKeterangan
        tanggunganAnak
        tanggunganFamili
        tanggunganLain
        tanggunganPasangan
        updatedAt
        updatedBy
        usiaSaatKlien
      }
      tahap
      status
    }
    classifications {
      id
      kodeMt
    }
    consultations {
      id
      caseId {
        id
        application {
          id
          noReg
        }
      }
      appKonsul
      createdAt
      createdBy
      isiKonsul
      judulAktifitas
      ppKonsul
      tglKonsul
      harapan
      saranHukum
      rencanaTindakLanjut
      updatedAt
      updatedBy
      apps {
        id
        appConsultation {
          name
          id
          roles_type {
            id
            type {
              id
            }
          }
        }
      }
    }
    documents {
      id
      jenisDokumen
      judulDokumen
      keterangan
      filename
      link
      createdAt
    }
    issues {
      id
      kodeMt
    }
    korbans {
      id
      personId {
        namaLengkap
        id
      }
    }
    pelakus {
      id
      personId {
        namaLengkap
        id
      }
      jenisPelaku
    }
    pk {
      id
      createdAt
      createdBy
      didampingi
      legalMemo
      notulaRapat
      strategiAdvokasi
      targetAkhirAdvokasi
      ppPendamping {
        address
        avatar
        createdAt
        deletedAt
        email
        id
        name
        password
        phone
        position
        rememberToken
        roles
        status
        updatedAt
        username
        profile {
          id
          noContact
        }
      }
      statusAlasanTdk
      tglRapat
    }
    progresses {
      id
      catatan
      jenisPeradilan
    }
    activities {
      id
      capaian
      hambatan
      tglAktifitas
      judulAktifitas
      position
      rencanaStrategi
      targetAdvokasi
      activitieslit {
        id
        kodeMt
      }
      activitiesnonlit {
        id
        kodeMt
      }
    }
    transferreferrals {
      id
      catatan
      document
      jenisTransferReferral
      networkId
      updatedAt
      updatedBy
    }
    violatedrights {
      id
      kodeMt
    }
    logRequests {
      ID
      caseId {
        id
        judulKasus
      }
      isiRequest
      tanggapanRequestIsi
      applicationId {
        id
        tahap
        noReg
        dudukPerara
        clients {
          id
          personId {
            id
            namaLengkap
          }
        }
      }
      jenisRequest
      networkId {
        id
      }
      personId {
        id
      }
      pp {
        id
        appConsultation {
          name
          id
          roles_type {
            id
            type {
              id
            }
          }
        }
      }
      requestBy {
        id
      }
      requestTo {
        id
      }
      statusRequest
      tanggapanRequest
      tglExpired
      tglRequest
      tglRespon
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCaseGQL extends Apollo.Query<GetCaseQuery, GetCaseQueryVariables> {
    document = GetCaseDocument;
    
  }
export const GetConsultationDocument = gql`
    query getConsultation($where: CaseConsultationWhereInput, $orderBy: [CaseConsultationOrderByInput!], $skip: Int, $take: Int) {
  caseConsultations(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetConsultationGQL extends Apollo.Query<GetConsultationQuery, GetConsultationQueryVariables> {
    document = GetConsultationDocument;
    
  }
export const GetPkDocument = gql`
    query getPk($where: CasePkWhereInput, $orderBy: [CasePkOrderByInput!], $skip: Int, $take: Int) {
  casePks(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPkGQL extends Apollo.Query<GetPkQuery, GetPkQueryVariables> {
    document = GetPkDocument;
    
  }
export const GetClientDocument = gql`
    query getClient($where: ClientWhereInput, $orderBy: [ClientOrderByInput!], $skip: Int, $take: Int) {
  clients(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    alamatLokasi
    applicationId {
      id
    }
    asetGedung
    asetKios
    asetLahanGarapan
    asetLapak
    asetMobil
    asetMotor
    asetRumah
    asetTanah
    asetToko
    asetWarung
    createdAt
    createdBy
    pendapatan
    personId {
      id
    }
    sktm
    sktmUpload
    stmKeterangan
    tanggunganAnak
    tanggunganFamili
    tanggunganLain
    tanggunganPasangan
    updatedAt
    updatedBy
    usiaSaatKlien
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetClientGQL extends Apollo.Query<GetClientQuery, GetClientQueryVariables> {
    document = GetClientDocument;
    
  }
export const GetApplicationsDocument = gql`
    query getApplications($where: ApplicationWhereInput, $orderBy: [ApplicationOrderByInput!], $skip: Int, $take: Int) {
  applications(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    createdAt
    createdBy
    dudukPerara
    infoLbh
    jumlahPenerimaManfaat
    konfirmasiData
    noReg
    pernahKlien
    pernahPpLain
    ppLain
    regDate
    relasiWakilClient
    setujuAdvokasi
    statusPerwakilan
    updatedAt
    updatedBy
    wakilId {
      id
      namaLengkap
      alamatId
    }
    waktuPernahKlien
    whyLbh
    case {
      id
    }
    clients {
      id
      alamatLokasi
      asetGedung
      asetKios
      asetLahanGarapan
      asetLapak
      asetMobil
      asetMotor
      asetRumah
      asetTanah
      asetToko
      asetWarung
      createdAt
      createdBy
      pendapatan
      personId {
        id
        namaLengkap
        tglLahir
        tmpLahir
        alamatId
        pekerjaan
        jenisId
        nomorId
      }
      sktm
      sktmUpload
      stmKeterangan
      tanggunganAnak
      tanggunganFamili
      tanggunganLain
      tanggunganPasangan
      updatedAt
      updatedBy
      usiaSaatKlien
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetApplicationsGQL extends Apollo.Query<GetApplicationsQuery, GetApplicationsQueryVariables> {
    document = GetApplicationsDocument;
    
  }
export const GetMtVocabsDocument = gql`
    query getMtVocabs($where: MtVocabWhereInput, $orderBy: [MtVocabOrderByInput!], $skip: Int, $take: Int) {
  mtVocabs(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    KODE
    kode_induk
    level
    sembunyikan
    teks
    urutan
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMtVocabsGQL extends Apollo.Query<GetMtVocabsQuery, GetMtVocabsQueryVariables> {
    document = GetMtVocabsDocument;
    
  }
export const AllPersonDocument = gql`
    query allPerson($where: PersonWhereInput, $orderBy: [PersonOrderByInput!], $skip: Int, $take: Int) {
  people(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    agama
    alamatDomisili
    alamatId
    alatBantu
    alias
    createdAt
    createdBy
    disabilitas
    distrikDomisili
    distrikId
    domisiliSama
    email
    golDarah
    jenisDisabilitas
    jenisDomisili
    jenisId
    jenisKelamin
    jmlAnggota
    namaLengkap
    nomorId
    pekerjaan
    pendidikan
    statusPernikahan
    telepon
    tglLahir
    tmpLahir
    unitSatuan
    updatedAt
    updatedBy
    wargaNegara
    applications {
      id
      noReg
      createdAt
    }
    clients {
      id
      applicationId {
        id
        noReg
        createdAt
      }
    }
    documents {
      id
      title
      file
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllPersonGQL extends Apollo.Query<AllPersonQuery, AllPersonQueryVariables> {
    document = AllPersonDocument;
    
  }export namespace DestroyRoles {
  export type Variables = DestroyRolesMutationVariables;
  export type Mutation = DestroyRolesMutation;
  export type DeleteManyRole = DestroyRolesMutation['deleteManyRole'];
}

export namespace DestroyLog {
  export type Variables = DestroyLogMutationVariables;
  export type Mutation = DestroyLogMutation;
  export type DeleteManyLogRequest = DestroyLogMutation['deleteManyLogRequest'];
}

export namespace DestroyLit {
  export type Variables = DestroyLitMutationVariables;
  export type Mutation = DestroyLitMutation;
  export type DeleteManyCaseProgressActivityLit = DestroyLitMutation['deleteManyCaseProgressActivityLit'];
}

export namespace DestroyNonlit {
  export type Variables = DestroyNonlitMutationVariables;
  export type Mutation = DestroyNonlitMutation;
  export type DeleteManyCaseProgressActivityNonlit = DestroyNonlitMutation['deleteManyCaseProgressActivityNonlit'];
}

export namespace DestroyKorban {
  export type Variables = DestroyKorbanMutationVariables;
  export type Mutation = DestroyKorbanMutation;
  export type DeleteManyCaseKorban = DestroyKorbanMutation['deleteManyCaseKorban'];
}

export namespace DestroyPelaku {
  export type Variables = DestroyPelakuMutationVariables;
  export type Mutation = DestroyPelakuMutation;
  export type DeleteManyCasePelaku = DestroyPelakuMutation['deleteManyCasePelaku'];
}

export namespace DestroyCaseViolatedRight {
  export type Variables = DestroyCaseViolatedRightMutationVariables;
  export type Mutation = DestroyCaseViolatedRightMutation;
  export type DeleteManyCaseViolatedRight = DestroyCaseViolatedRightMutation['deleteManyCaseViolatedRight'];
}

export namespace DestroyCaseClassification {
  export type Variables = DestroyCaseClassificationMutationVariables;
  export type Mutation = DestroyCaseClassificationMutation;
  export type DeleteManyCaseClassification = DestroyCaseClassificationMutation['deleteManyCaseClassification'];
}

export namespace DestroyCaseProgressActivity {
  export type Variables = DestroyCaseProgressActivityMutationVariables;
  export type Mutation = DestroyCaseProgressActivityMutation;
  export type DeleteManyCaseProgressActivity = DestroyCaseProgressActivityMutation['deleteManyCaseProgressActivity'];
}

export namespace DestroyCaseIssue {
  export type Variables = DestroyCaseIssueMutationVariables;
  export type Mutation = DestroyCaseIssueMutation;
  export type DeleteManyCaseIssue = DestroyCaseIssueMutation['deleteManyCaseIssue'];
}

export namespace PostLogRequest {
  export type Variables = PostLogRequestMutationVariables;
  export type Mutation = PostLogRequestMutation;
  export type CreateLogRequest = PostLogRequestMutation['createLogRequest'];
  export type CaseId = PostLogRequestMutation['createLogRequest']['caseId'];
  export type ApplicationId = PostLogRequestMutation['createLogRequest']['applicationId'];
  export type NetworkId = PostLogRequestMutation['createLogRequest']['networkId'];
  export type PersonId = PostLogRequestMutation['createLogRequest']['personId'];
  export type Pp = PostLogRequestMutation['createLogRequest']['pp'][0];
  export type RequestBy = PostLogRequestMutation['createLogRequest']['requestBy'];
  export type RequestTo = PostLogRequestMutation['createLogRequest']['requestTo'];
}

export namespace PostUser {
  export type Variables = PostUserMutationVariables;
  export type Mutation = PostUserMutation;
  export type CreateUser = PostUserMutation['createUser'];
  export type Profile = PostUserMutation['createUser']['profile'];
}

export namespace PostNetwork {
  export type Variables = PostNetworkMutationVariables;
  export type Mutation = PostNetworkMutation;
  export type CreateNetwork = PostNetworkMutation['createNetwork'];
}

export namespace PostClient {
  export type Variables = PostClientMutationVariables;
  export type Mutation = PostClientMutation;
  export type CreateClient = PostClientMutation['createClient'];
  export type ApplicationId = PostClientMutation['createClient']['applicationId'];
  export type PersonId = PostClientMutation['createClient']['personId'];
}

export namespace PostApplication {
  export type Variables = PostApplicationMutationVariables;
  export type Mutation = PostApplicationMutation;
  export type CreateApplication = PostApplicationMutation['createApplication'];
  export type WakilId = PostApplicationMutation['createApplication']['wakilId'];
  export type Case = PostApplicationMutation['createApplication']['case'];
  export type Clients = PostApplicationMutation['createApplication']['clients'][0];
  export type PersonId = PostApplicationMutation['createApplication']['clients'][0]['personId'];
}

export namespace PutCase {
  export type Variables = PutCaseMutationVariables;
  export type Mutation = PutCaseMutation;
  export type UpdateRenamedcase = PutCaseMutation['updateRenamedcase'];
  export type Application = PutCaseMutation['updateRenamedcase']['application'];
  export type WakilId = PutCaseMutation['updateRenamedcase']['application']['wakilId'];
  export type Clients = PutCaseMutation['updateRenamedcase']['application']['clients'][0];
  export type PersonId = PutCaseMutation['updateRenamedcase']['application']['clients'][0]['personId'];
  export type Classifications = PutCaseMutation['updateRenamedcase']['classifications'][0];
  export type Consultations = PutCaseMutation['updateRenamedcase']['consultations'][0];
  export type Apps = PutCaseMutation['updateRenamedcase']['consultations'][0]['apps'][0];
  export type AppConsultation = PutCaseMutation['updateRenamedcase']['consultations'][0]['apps'][0]['appConsultation'];
  export type Documents = PutCaseMutation['updateRenamedcase']['documents'][0];
  export type Issues = PutCaseMutation['updateRenamedcase']['issues'][0];
  export type Korbans = PutCaseMutation['updateRenamedcase']['korbans'][0];
  export type _PersonId = PutCaseMutation['updateRenamedcase']['korbans'][0]['personId'];
  export type Pelakus = PutCaseMutation['updateRenamedcase']['pelakus'][0];
  export type __PersonId = PutCaseMutation['updateRenamedcase']['pelakus'][0]['personId'];
  export type Pk = PutCaseMutation['updateRenamedcase']['pk'];
  export type PpPendamping = PutCaseMutation['updateRenamedcase']['pk']['ppPendamping'];
  export type Profile = PutCaseMutation['updateRenamedcase']['pk']['ppPendamping']['profile'];
  export type Progresses = PutCaseMutation['updateRenamedcase']['progresses'];
  export type Activities = PutCaseMutation['updateRenamedcase']['activities'][0];
  export type Activitieslit = PutCaseMutation['updateRenamedcase']['activities'][0]['activitieslit'][0];
  export type Activitiesnonlit = PutCaseMutation['updateRenamedcase']['activities'][0]['activitiesnonlit'][0];
  export type Transferreferrals = PutCaseMutation['updateRenamedcase']['transferreferrals'][0];
  export type Violatedrights = PutCaseMutation['updateRenamedcase']['violatedrights'][0];
}

export namespace PutLogRequest {
  export type Variables = PutLogRequestMutationVariables;
  export type Mutation = PutLogRequestMutation;
  export type UpdateLogRequest = PutLogRequestMutation['updateLogRequest'];
  export type CaseId = PutLogRequestMutation['updateLogRequest']['caseId'];
  export type ApplicationId = PutLogRequestMutation['updateLogRequest']['applicationId'];
  export type NetworkId = PutLogRequestMutation['updateLogRequest']['networkId'];
  export type PersonId = PutLogRequestMutation['updateLogRequest']['personId'];
  export type Pp = PutLogRequestMutation['updateLogRequest']['pp'][0];
  export type RequestBy = PutLogRequestMutation['updateLogRequest']['requestBy'];
  export type RequestTo = PutLogRequestMutation['updateLogRequest']['requestTo'];
}

export namespace PutUser {
  export type Variables = PutUserMutationVariables;
  export type Mutation = PutUserMutation;
  export type UpdateUser = PutUserMutation['updateUser'];
  export type Profile = PutUserMutation['updateUser']['profile'];
}

export namespace PutNetwork {
  export type Variables = PutNetworkMutationVariables;
  export type Mutation = PutNetworkMutation;
  export type UpdateNetwork = PutNetworkMutation['updateNetwork'];
}

export namespace PutApplication {
  export type Variables = PutApplicationMutationVariables;
  export type Mutation = PutApplicationMutation;
  export type UpdateApplication = PutApplicationMutation['updateApplication'];
  export type WakilId = PutApplicationMutation['updateApplication']['wakilId'];
  export type Case = PutApplicationMutation['updateApplication']['case'];
  export type Clients = PutApplicationMutation['updateApplication']['clients'][0];
  export type PersonId = PutApplicationMutation['updateApplication']['clients'][0]['personId'];
}

export namespace PutPerson {
  export type Variables = PutPersonMutationVariables;
  export type Mutation = PutPersonMutation;
  export type UpdatePerson = PutPersonMutation['updatePerson'];
  export type Applications = PutPersonMutation['updatePerson']['applications'][0];
  export type Clients = PutPersonMutation['updatePerson']['clients'][0];
  export type ApplicationId = PutPersonMutation['updatePerson']['clients'][0]['applicationId'];
  export type Documents = PutPersonMutation['updatePerson']['documents'][0];
}

export namespace PostPerson {
  export type Variables = PostPersonMutationVariables;
  export type Mutation = PostPersonMutation;
  export type CreatePerson = PostPersonMutation['createPerson'];
  export type Applications = PostPersonMutation['createPerson']['applications'][0];
  export type Clients = PostPersonMutation['createPerson']['clients'][0];
  export type ApplicationId = PostPersonMutation['createPerson']['clients'][0]['applicationId'];
  export type Documents = PostPersonMutation['createPerson']['documents'][0];
}

export namespace GetLogRequest {
  export type Variables = GetLogRequestQueryVariables;
  export type Query = GetLogRequestQuery;
  export type LogRequests = GetLogRequestQuery['logRequests'][0];
  export type CaseId = GetLogRequestQuery['logRequests'][0]['caseId'];
  export type Transfer = GetLogRequestQuery['logRequests'][0]['caseId']['transfer'];
  export type Network = GetLogRequestQuery['logRequests'][0]['caseId']['transfer']['network'];
  export type Application = GetLogRequestQuery['logRequests'][0]['caseId']['application'];
  export type Clients = GetLogRequestQuery['logRequests'][0]['caseId']['application']['clients'][0];
  export type PersonId = GetLogRequestQuery['logRequests'][0]['caseId']['application']['clients'][0]['personId'];
  export type Pk = GetLogRequestQuery['logRequests'][0]['caseId']['pk'];
  export type ApplicationId = GetLogRequestQuery['logRequests'][0]['applicationId'];
  export type _Clients = GetLogRequestQuery['logRequests'][0]['applicationId']['clients'][0];
  export type _PersonId = GetLogRequestQuery['logRequests'][0]['applicationId']['clients'][0]['personId'];
  export type NetworkId = GetLogRequestQuery['logRequests'][0]['networkId'];
  export type __PersonId = GetLogRequestQuery['logRequests'][0]['personId'];
  export type Pp = GetLogRequestQuery['logRequests'][0]['pp'][0];
  export type AppConsultation = GetLogRequestQuery['logRequests'][0]['pp'][0]['appConsultation'];
  export type RequestBy = GetLogRequestQuery['logRequests'][0]['requestBy'];
  export type RequestTo = GetLogRequestQuery['logRequests'][0]['requestTo'];
}

export namespace GetRolesType {
  export type Variables = GetRolesTypeQueryVariables;
  export type Query = GetRolesTypeQuery;
  export type RolesTypes = GetRolesTypeQuery['rolesTypes'][0];
}

export namespace GetNetworks {
  export type Variables = GetNetworksQueryVariables;
  export type Query = GetNetworksQuery;
  export type Networks = GetNetworksQuery['networks'][0];
}

export namespace GetUser {
  export type Variables = GetUserQueryVariables;
  export type Query = GetUserQuery;
  export type Users = GetUserQuery['users'][0];
  export type Profile = GetUserQuery['users'][0]['profile'];
  export type Roles_Type = GetUserQuery['users'][0]['roles_type'][0];
  export type Type = GetUserQuery['users'][0]['roles_type'][0]['type'];
}

export namespace GetCase {
  export type Variables = GetCaseQueryVariables;
  export type Query = GetCaseQuery;
  export type Renamedcases = GetCaseQuery['renamedcases'][0];
  export type Transfer = GetCaseQuery['renamedcases'][0]['transfer'];
  export type Network = GetCaseQuery['renamedcases'][0]['transfer']['network'];
  export type Referrals = GetCaseQuery['renamedcases'][0]['referrals'][0];
  export type Client = GetCaseQuery['renamedcases'][0]['referrals'][0]['client'];
  export type _Network = GetCaseQuery['renamedcases'][0]['referrals'][0]['network'];
  export type Application = GetCaseQuery['renamedcases'][0]['application'];
  export type WakilId = GetCaseQuery['renamedcases'][0]['application']['wakilId'];
  export type Clients = GetCaseQuery['renamedcases'][0]['application']['clients'][0];
  export type PersonId = GetCaseQuery['renamedcases'][0]['application']['clients'][0]['personId'];
  export type Classifications = GetCaseQuery['renamedcases'][0]['classifications'][0];
  export type Consultations = GetCaseQuery['renamedcases'][0]['consultations'][0];
  export type CaseId = GetCaseQuery['renamedcases'][0]['consultations'][0]['caseId'];
  export type _Application = GetCaseQuery['renamedcases'][0]['consultations'][0]['caseId']['application'];
  export type Apps = GetCaseQuery['renamedcases'][0]['consultations'][0]['apps'][0];
  export type AppConsultation = GetCaseQuery['renamedcases'][0]['consultations'][0]['apps'][0]['appConsultation'];
  export type Roles_Type = GetCaseQuery['renamedcases'][0]['consultations'][0]['apps'][0]['appConsultation']['roles_type'][0];
  export type Type = GetCaseQuery['renamedcases'][0]['consultations'][0]['apps'][0]['appConsultation']['roles_type'][0]['type'];
  export type Documents = GetCaseQuery['renamedcases'][0]['documents'][0];
  export type Issues = GetCaseQuery['renamedcases'][0]['issues'][0];
  export type Korbans = GetCaseQuery['renamedcases'][0]['korbans'][0];
  export type _PersonId = GetCaseQuery['renamedcases'][0]['korbans'][0]['personId'];
  export type Pelakus = GetCaseQuery['renamedcases'][0]['pelakus'][0];
  export type __PersonId = GetCaseQuery['renamedcases'][0]['pelakus'][0]['personId'];
  export type Pk = GetCaseQuery['renamedcases'][0]['pk'];
  export type PpPendamping = GetCaseQuery['renamedcases'][0]['pk']['ppPendamping'];
  export type Profile = GetCaseQuery['renamedcases'][0]['pk']['ppPendamping']['profile'];
  export type Progresses = GetCaseQuery['renamedcases'][0]['progresses'];
  export type Activities = GetCaseQuery['renamedcases'][0]['activities'][0];
  export type Activitieslit = GetCaseQuery['renamedcases'][0]['activities'][0]['activitieslit'][0];
  export type Activitiesnonlit = GetCaseQuery['renamedcases'][0]['activities'][0]['activitiesnonlit'][0];
  export type Transferreferrals = GetCaseQuery['renamedcases'][0]['transferreferrals'][0];
  export type Violatedrights = GetCaseQuery['renamedcases'][0]['violatedrights'][0];
  export type LogRequests = GetCaseQuery['renamedcases'][0]['logRequests'][0];
  export type _CaseId = GetCaseQuery['renamedcases'][0]['logRequests'][0]['caseId'];
  export type ApplicationId = GetCaseQuery['renamedcases'][0]['logRequests'][0]['applicationId'];
  export type _Clients = GetCaseQuery['renamedcases'][0]['logRequests'][0]['applicationId']['clients'][0];
  export type ___PersonId = GetCaseQuery['renamedcases'][0]['logRequests'][0]['applicationId']['clients'][0]['personId'];
  export type NetworkId = GetCaseQuery['renamedcases'][0]['logRequests'][0]['networkId'];
  export type ____PersonId = GetCaseQuery['renamedcases'][0]['logRequests'][0]['personId'];
  export type Pp = GetCaseQuery['renamedcases'][0]['logRequests'][0]['pp'][0];
  export type _AppConsultation = GetCaseQuery['renamedcases'][0]['logRequests'][0]['pp'][0]['appConsultation'];
  export type _Roles_Type = GetCaseQuery['renamedcases'][0]['logRequests'][0]['pp'][0]['appConsultation']['roles_type'][0];
  export type _Type = GetCaseQuery['renamedcases'][0]['logRequests'][0]['pp'][0]['appConsultation']['roles_type'][0]['type'];
  export type RequestBy = GetCaseQuery['renamedcases'][0]['logRequests'][0]['requestBy'];
  export type RequestTo = GetCaseQuery['renamedcases'][0]['logRequests'][0]['requestTo'];
}

export namespace GetConsultation {
  export type Variables = GetConsultationQueryVariables;
  export type Query = GetConsultationQuery;
  export type CaseConsultations = GetConsultationQuery['caseConsultations'][0];
}

export namespace GetPk {
  export type Variables = GetPkQueryVariables;
  export type Query = GetPkQuery;
  export type CasePks = GetPkQuery['casePks'][0];
}

export namespace GetClient {
  export type Variables = GetClientQueryVariables;
  export type Query = GetClientQuery;
  export type Clients = GetClientQuery['clients'][0];
  export type ApplicationId = GetClientQuery['clients'][0]['applicationId'];
  export type PersonId = GetClientQuery['clients'][0]['personId'];
}

export namespace GetApplications {
  export type Variables = GetApplicationsQueryVariables;
  export type Query = GetApplicationsQuery;
  export type Applications = GetApplicationsQuery['applications'][0];
  export type WakilId = GetApplicationsQuery['applications'][0]['wakilId'];
  export type Case = GetApplicationsQuery['applications'][0]['case'];
  export type Clients = GetApplicationsQuery['applications'][0]['clients'][0];
  export type PersonId = GetApplicationsQuery['applications'][0]['clients'][0]['personId'];
}

export namespace GetMtVocabs {
  export type Variables = GetMtVocabsQueryVariables;
  export type Query = GetMtVocabsQuery;
  export type MtVocabs = GetMtVocabsQuery['mtVocabs'][0];
}

export namespace AllPerson {
  export type Variables = AllPersonQueryVariables;
  export type Query = AllPersonQuery;
  export type People = AllPersonQuery['people'][0];
  export type Applications = AllPersonQuery['people'][0]['applications'][0];
  export type Clients = AllPersonQuery['people'][0]['clients'][0];
  export type ApplicationId = AllPersonQuery['people'][0]['clients'][0]['applicationId'];
  export type Documents = AllPersonQuery['people'][0]['documents'][0];
}
