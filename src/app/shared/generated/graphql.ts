export type Maybe<T> = T | null;

export interface ApplicationWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ApplicationWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ApplicationWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ApplicationWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  dudukPerara?: Maybe<string>;
  /** All values that are not equal to given value. */
  dudukPerara_not?: Maybe<string>;
  /** All values that are contained in given list. */
  dudukPerara_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  dudukPerara_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  dudukPerara_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  dudukPerara_lte?: Maybe<string>;
  /** All values greater than the given value. */
  dudukPerara_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  dudukPerara_gte?: Maybe<string>;
  /** All values containing the given string. */
  dudukPerara_contains?: Maybe<string>;
  /** All values not containing the given string. */
  dudukPerara_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  dudukPerara_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  dudukPerara_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  dudukPerara_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  dudukPerara_not_ends_with?: Maybe<string>;

  infoLbh?: Maybe<string>;
  /** All values that are not equal to given value. */
  infoLbh_not?: Maybe<string>;
  /** All values that are contained in given list. */
  infoLbh_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  infoLbh_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  infoLbh_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  infoLbh_lte?: Maybe<string>;
  /** All values greater than the given value. */
  infoLbh_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  infoLbh_gte?: Maybe<string>;
  /** All values containing the given string. */
  infoLbh_contains?: Maybe<string>;
  /** All values not containing the given string. */
  infoLbh_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  infoLbh_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  infoLbh_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  infoLbh_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  infoLbh_not_ends_with?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;
  /** All values that are not equal to given value. */
  jumlahPenerimaManfaat_not?: Maybe<number>;
  /** All values that are contained in given list. */
  jumlahPenerimaManfaat_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  jumlahPenerimaManfaat_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  jumlahPenerimaManfaat_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  jumlahPenerimaManfaat_lte?: Maybe<number>;
  /** All values greater than the given value. */
  jumlahPenerimaManfaat_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  jumlahPenerimaManfaat_gte?: Maybe<number>;

  konfirmasiData?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  konfirmasiData_not?: Maybe<boolean>;

  noReg?: Maybe<string>;
  /** All values that are not equal to given value. */
  noReg_not?: Maybe<string>;
  /** All values that are contained in given list. */
  noReg_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  noReg_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  noReg_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  noReg_lte?: Maybe<string>;
  /** All values greater than the given value. */
  noReg_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  noReg_gte?: Maybe<string>;
  /** All values containing the given string. */
  noReg_contains?: Maybe<string>;
  /** All values not containing the given string. */
  noReg_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  noReg_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  noReg_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  noReg_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  noReg_not_ends_with?: Maybe<string>;

  pernahKlien?: Maybe<string>;
  /** All values that are not equal to given value. */
  pernahKlien_not?: Maybe<string>;
  /** All values that are contained in given list. */
  pernahKlien_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  pernahKlien_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  pernahKlien_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  pernahKlien_lte?: Maybe<string>;
  /** All values greater than the given value. */
  pernahKlien_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  pernahKlien_gte?: Maybe<string>;
  /** All values containing the given string. */
  pernahKlien_contains?: Maybe<string>;
  /** All values not containing the given string. */
  pernahKlien_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  pernahKlien_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  pernahKlien_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  pernahKlien_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  pernahKlien_not_ends_with?: Maybe<string>;

  pernahPpLain?: Maybe<string>;
  /** All values that are not equal to given value. */
  pernahPpLain_not?: Maybe<string>;
  /** All values that are contained in given list. */
  pernahPpLain_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  pernahPpLain_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  pernahPpLain_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  pernahPpLain_lte?: Maybe<string>;
  /** All values greater than the given value. */
  pernahPpLain_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  pernahPpLain_gte?: Maybe<string>;
  /** All values containing the given string. */
  pernahPpLain_contains?: Maybe<string>;
  /** All values not containing the given string. */
  pernahPpLain_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  pernahPpLain_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  pernahPpLain_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  pernahPpLain_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  pernahPpLain_not_ends_with?: Maybe<string>;

  ppLain?: Maybe<string>;
  /** All values that are not equal to given value. */
  ppLain_not?: Maybe<string>;
  /** All values that are contained in given list. */
  ppLain_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  ppLain_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  ppLain_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  ppLain_lte?: Maybe<string>;
  /** All values greater than the given value. */
  ppLain_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  ppLain_gte?: Maybe<string>;
  /** All values containing the given string. */
  ppLain_contains?: Maybe<string>;
  /** All values not containing the given string. */
  ppLain_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  ppLain_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  ppLain_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  ppLain_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  ppLain_not_ends_with?: Maybe<string>;

  regDate?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  regDate_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  regDate_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  regDate_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  regDate_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  regDate_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  regDate_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  regDate_gte?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;
  /** All values that are not equal to given value. */
  relasiWakilClient_not?: Maybe<string>;
  /** All values that are contained in given list. */
  relasiWakilClient_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  relasiWakilClient_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  relasiWakilClient_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  relasiWakilClient_lte?: Maybe<string>;
  /** All values greater than the given value. */
  relasiWakilClient_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  relasiWakilClient_gte?: Maybe<string>;
  /** All values containing the given string. */
  relasiWakilClient_contains?: Maybe<string>;
  /** All values not containing the given string. */
  relasiWakilClient_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  relasiWakilClient_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  relasiWakilClient_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  relasiWakilClient_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  relasiWakilClient_not_ends_with?: Maybe<string>;

  setujuAdvokasi?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  setujuAdvokasi_not?: Maybe<boolean>;

  statusPerwakilan?: Maybe<string>;
  /** All values that are not equal to given value. */
  statusPerwakilan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  statusPerwakilan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  statusPerwakilan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  statusPerwakilan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  statusPerwakilan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  statusPerwakilan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  statusPerwakilan_gte?: Maybe<string>;
  /** All values containing the given string. */
  statusPerwakilan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  statusPerwakilan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  statusPerwakilan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  statusPerwakilan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  statusPerwakilan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  statusPerwakilan_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;
  /** All values that are not equal to given value. */
  waktuPernahKlien_not?: Maybe<string>;
  /** All values that are contained in given list. */
  waktuPernahKlien_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  waktuPernahKlien_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  waktuPernahKlien_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  waktuPernahKlien_lte?: Maybe<string>;
  /** All values greater than the given value. */
  waktuPernahKlien_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  waktuPernahKlien_gte?: Maybe<string>;
  /** All values containing the given string. */
  waktuPernahKlien_contains?: Maybe<string>;
  /** All values not containing the given string. */
  waktuPernahKlien_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  waktuPernahKlien_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  waktuPernahKlien_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  waktuPernahKlien_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  waktuPernahKlien_not_ends_with?: Maybe<string>;

  whyLbh?: Maybe<string>;
  /** All values that are not equal to given value. */
  whyLbh_not?: Maybe<string>;
  /** All values that are contained in given list. */
  whyLbh_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  whyLbh_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  whyLbh_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  whyLbh_lte?: Maybe<string>;
  /** All values greater than the given value. */
  whyLbh_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  whyLbh_gte?: Maybe<string>;
  /** All values containing the given string. */
  whyLbh_contains?: Maybe<string>;
  /** All values not containing the given string. */
  whyLbh_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  whyLbh_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  whyLbh_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  whyLbh_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  whyLbh_not_ends_with?: Maybe<string>;

  wakilId?: Maybe<PersonWhereInput>;

  case?: Maybe<CaseWhereInput>;

  clients_every?: Maybe<ClientWhereInput>;

  clients_some?: Maybe<ClientWhereInput>;

  clients_none?: Maybe<ClientWhereInput>;
}

export interface PersonWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PersonWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PersonWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PersonWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  agama?: Maybe<string>;
  /** All values that are not equal to given value. */
  agama_not?: Maybe<string>;
  /** All values that are contained in given list. */
  agama_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  agama_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  agama_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  agama_lte?: Maybe<string>;
  /** All values greater than the given value. */
  agama_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  agama_gte?: Maybe<string>;
  /** All values containing the given string. */
  agama_contains?: Maybe<string>;
  /** All values not containing the given string. */
  agama_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  agama_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  agama_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  agama_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  agama_not_ends_with?: Maybe<string>;

  alamatDomisili?: Maybe<string>;
  /** All values that are not equal to given value. */
  alamatDomisili_not?: Maybe<string>;
  /** All values that are contained in given list. */
  alamatDomisili_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  alamatDomisili_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  alamatDomisili_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  alamatDomisili_lte?: Maybe<string>;
  /** All values greater than the given value. */
  alamatDomisili_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  alamatDomisili_gte?: Maybe<string>;
  /** All values containing the given string. */
  alamatDomisili_contains?: Maybe<string>;
  /** All values not containing the given string. */
  alamatDomisili_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  alamatDomisili_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  alamatDomisili_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  alamatDomisili_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  alamatDomisili_not_ends_with?: Maybe<string>;

  alamatId?: Maybe<string>;
  /** All values that are not equal to given value. */
  alamatId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  alamatId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  alamatId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  alamatId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  alamatId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  alamatId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  alamatId_gte?: Maybe<string>;
  /** All values containing the given string. */
  alamatId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  alamatId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  alamatId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  alamatId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  alamatId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  alamatId_not_ends_with?: Maybe<string>;

  alatBantu?: Maybe<string>;
  /** All values that are not equal to given value. */
  alatBantu_not?: Maybe<string>;
  /** All values that are contained in given list. */
  alatBantu_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  alatBantu_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  alatBantu_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  alatBantu_lte?: Maybe<string>;
  /** All values greater than the given value. */
  alatBantu_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  alatBantu_gte?: Maybe<string>;
  /** All values containing the given string. */
  alatBantu_contains?: Maybe<string>;
  /** All values not containing the given string. */
  alatBantu_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  alatBantu_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  alatBantu_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  alatBantu_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  alatBantu_not_ends_with?: Maybe<string>;

  alias?: Maybe<string>;
  /** All values that are not equal to given value. */
  alias_not?: Maybe<string>;
  /** All values that are contained in given list. */
  alias_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  alias_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  alias_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  alias_lte?: Maybe<string>;
  /** All values greater than the given value. */
  alias_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  alias_gte?: Maybe<string>;
  /** All values containing the given string. */
  alias_contains?: Maybe<string>;
  /** All values not containing the given string. */
  alias_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  alias_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  alias_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  alias_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  alias_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  disabilitas?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  disabilitas_not?: Maybe<boolean>;

  distrikDomisili?: Maybe<string>;
  /** All values that are not equal to given value. */
  distrikDomisili_not?: Maybe<string>;
  /** All values that are contained in given list. */
  distrikDomisili_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  distrikDomisili_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  distrikDomisili_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  distrikDomisili_lte?: Maybe<string>;
  /** All values greater than the given value. */
  distrikDomisili_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  distrikDomisili_gte?: Maybe<string>;
  /** All values containing the given string. */
  distrikDomisili_contains?: Maybe<string>;
  /** All values not containing the given string. */
  distrikDomisili_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  distrikDomisili_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  distrikDomisili_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  distrikDomisili_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  distrikDomisili_not_ends_with?: Maybe<string>;

  distrikId?: Maybe<string>;
  /** All values that are not equal to given value. */
  distrikId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  distrikId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  distrikId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  distrikId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  distrikId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  distrikId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  distrikId_gte?: Maybe<string>;
  /** All values containing the given string. */
  distrikId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  distrikId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  distrikId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  distrikId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  distrikId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  distrikId_not_ends_with?: Maybe<string>;

  domisiliSama?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  domisiliSama_not?: Maybe<boolean>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  golDarah?: Maybe<string>;
  /** All values that are not equal to given value. */
  golDarah_not?: Maybe<string>;
  /** All values that are contained in given list. */
  golDarah_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  golDarah_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  golDarah_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  golDarah_lte?: Maybe<string>;
  /** All values greater than the given value. */
  golDarah_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  golDarah_gte?: Maybe<string>;
  /** All values containing the given string. */
  golDarah_contains?: Maybe<string>;
  /** All values not containing the given string. */
  golDarah_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  golDarah_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  golDarah_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  golDarah_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  golDarah_not_ends_with?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisDisabilitas_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisDisabilitas_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisDisabilitas_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisDisabilitas_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisDisabilitas_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisDisabilitas_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisDisabilitas_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisDisabilitas_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisDisabilitas_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisDisabilitas_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisDisabilitas_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisDisabilitas_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisDisabilitas_not_ends_with?: Maybe<string>;

  jenisDomisili?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisDomisili_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisDomisili_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisDomisili_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisDomisili_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisDomisili_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisDomisili_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisDomisili_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisDomisili_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisDomisili_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisDomisili_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisDomisili_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisDomisili_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisDomisili_not_ends_with?: Maybe<string>;

  jenisId?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisId_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisId_not_ends_with?: Maybe<string>;

  jenisKelamin?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisKelamin_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisKelamin_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisKelamin_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisKelamin_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisKelamin_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisKelamin_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisKelamin_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisKelamin_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisKelamin_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisKelamin_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisKelamin_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisKelamin_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisKelamin_not_ends_with?: Maybe<string>;

  jmlAnggota?: Maybe<number>;
  /** All values that are not equal to given value. */
  jmlAnggota_not?: Maybe<number>;
  /** All values that are contained in given list. */
  jmlAnggota_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  jmlAnggota_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  jmlAnggota_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  jmlAnggota_lte?: Maybe<number>;
  /** All values greater than the given value. */
  jmlAnggota_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  jmlAnggota_gte?: Maybe<number>;

  namaLengkap?: Maybe<string>;
  /** All values that are not equal to given value. */
  namaLengkap_not?: Maybe<string>;
  /** All values that are contained in given list. */
  namaLengkap_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  namaLengkap_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  namaLengkap_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  namaLengkap_lte?: Maybe<string>;
  /** All values greater than the given value. */
  namaLengkap_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  namaLengkap_gte?: Maybe<string>;
  /** All values containing the given string. */
  namaLengkap_contains?: Maybe<string>;
  /** All values not containing the given string. */
  namaLengkap_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  namaLengkap_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  namaLengkap_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  namaLengkap_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  namaLengkap_not_ends_with?: Maybe<string>;

  nomorId?: Maybe<string>;
  /** All values that are not equal to given value. */
  nomorId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  nomorId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  nomorId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  nomorId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  nomorId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  nomorId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  nomorId_gte?: Maybe<string>;
  /** All values containing the given string. */
  nomorId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  nomorId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  nomorId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  nomorId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  nomorId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  nomorId_not_ends_with?: Maybe<string>;

  pekerjaan?: Maybe<string>;
  /** All values that are not equal to given value. */
  pekerjaan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  pekerjaan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  pekerjaan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  pekerjaan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  pekerjaan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  pekerjaan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  pekerjaan_gte?: Maybe<string>;
  /** All values containing the given string. */
  pekerjaan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  pekerjaan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  pekerjaan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  pekerjaan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  pekerjaan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  pekerjaan_not_ends_with?: Maybe<string>;

  pendidikan?: Maybe<string>;
  /** All values that are not equal to given value. */
  pendidikan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  pendidikan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  pendidikan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  pendidikan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  pendidikan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  pendidikan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  pendidikan_gte?: Maybe<string>;
  /** All values containing the given string. */
  pendidikan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  pendidikan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  pendidikan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  pendidikan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  pendidikan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  pendidikan_not_ends_with?: Maybe<string>;

  statusPernikahan?: Maybe<string>;
  /** All values that are not equal to given value. */
  statusPernikahan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  statusPernikahan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  statusPernikahan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  statusPernikahan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  statusPernikahan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  statusPernikahan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  statusPernikahan_gte?: Maybe<string>;
  /** All values containing the given string. */
  statusPernikahan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  statusPernikahan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  statusPernikahan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  statusPernikahan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  statusPernikahan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  statusPernikahan_not_ends_with?: Maybe<string>;

  telepon?: Maybe<string>;
  /** All values that are not equal to given value. */
  telepon_not?: Maybe<string>;
  /** All values that are contained in given list. */
  telepon_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  telepon_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  telepon_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  telepon_lte?: Maybe<string>;
  /** All values greater than the given value. */
  telepon_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  telepon_gte?: Maybe<string>;
  /** All values containing the given string. */
  telepon_contains?: Maybe<string>;
  /** All values not containing the given string. */
  telepon_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  telepon_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  telepon_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  telepon_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  telepon_not_ends_with?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglLahir_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglLahir_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglLahir_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglLahir_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglLahir_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglLahir_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglLahir_gte?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;
  /** All values that are not equal to given value. */
  tmpLahir_not?: Maybe<string>;
  /** All values that are contained in given list. */
  tmpLahir_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  tmpLahir_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  tmpLahir_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  tmpLahir_lte?: Maybe<string>;
  /** All values greater than the given value. */
  tmpLahir_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  tmpLahir_gte?: Maybe<string>;
  /** All values containing the given string. */
  tmpLahir_contains?: Maybe<string>;
  /** All values not containing the given string. */
  tmpLahir_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  tmpLahir_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  tmpLahir_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  tmpLahir_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  tmpLahir_not_ends_with?: Maybe<string>;

  unitSatuan?: Maybe<string>;
  /** All values that are not equal to given value. */
  unitSatuan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  unitSatuan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  unitSatuan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  unitSatuan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  unitSatuan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  unitSatuan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  unitSatuan_gte?: Maybe<string>;
  /** All values containing the given string. */
  unitSatuan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  unitSatuan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  unitSatuan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  unitSatuan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  unitSatuan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  unitSatuan_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  wargaNegara?: Maybe<string>;
  /** All values that are not equal to given value. */
  wargaNegara_not?: Maybe<string>;
  /** All values that are contained in given list. */
  wargaNegara_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  wargaNegara_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  wargaNegara_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  wargaNegara_lte?: Maybe<string>;
  /** All values greater than the given value. */
  wargaNegara_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  wargaNegara_gte?: Maybe<string>;
  /** All values containing the given string. */
  wargaNegara_contains?: Maybe<string>;
  /** All values not containing the given string. */
  wargaNegara_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  wargaNegara_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  wargaNegara_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  wargaNegara_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  wargaNegara_not_ends_with?: Maybe<string>;

  applications_every?: Maybe<ApplicationWhereInput>;

  applications_some?: Maybe<ApplicationWhereInput>;

  applications_none?: Maybe<ApplicationWhereInput>;

  casekorbans_every?: Maybe<CaseKorbanWhereInput>;

  casekorbans_some?: Maybe<CaseKorbanWhereInput>;

  casekorbans_none?: Maybe<CaseKorbanWhereInput>;

  casepelakus_every?: Maybe<CasePelakuWhereInput>;

  casepelakus_some?: Maybe<CasePelakuWhereInput>;

  casepelakus_none?: Maybe<CasePelakuWhereInput>;

  clients_every?: Maybe<ClientWhereInput>;

  clients_some?: Maybe<ClientWhereInput>;

  clients_none?: Maybe<ClientWhereInput>;

  documents_every?: Maybe<PersonDocumentWhereInput>;

  documents_some?: Maybe<PersonDocumentWhereInput>;

  documents_none?: Maybe<PersonDocumentWhereInput>;
}

export interface CaseKorbanWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseKorbanWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseKorbanWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseKorbanWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  caseId?: Maybe<CaseWhereInput>;

  personId?: Maybe<PersonWhereInput>;
}

export interface CaseWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  applicationId?: Maybe<number>;
  /** All values that are not equal to given value. */
  applicationId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  applicationId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  applicationId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  applicationId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  applicationId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  applicationId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  applicationId_gte?: Maybe<number>;

  caseClosed?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  caseClosed_not?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;
  /** All values that are not equal to given value. */
  caseClosedJenis_not?: Maybe<string>;
  /** All values that are contained in given list. */
  caseClosedJenis_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  caseClosedJenis_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  caseClosedJenis_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  caseClosedJenis_lte?: Maybe<string>;
  /** All values greater than the given value. */
  caseClosedJenis_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  caseClosedJenis_gte?: Maybe<string>;
  /** All values containing the given string. */
  caseClosedJenis_contains?: Maybe<string>;
  /** All values not containing the given string. */
  caseClosedJenis_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  caseClosedJenis_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  caseClosedJenis_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  caseClosedJenis_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  caseClosedJenis_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;
  /** All values that are not equal to given value. */
  hakTerlanggar_not?: Maybe<string>;
  /** All values that are contained in given list. */
  hakTerlanggar_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  hakTerlanggar_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  hakTerlanggar_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  hakTerlanggar_lte?: Maybe<string>;
  /** All values greater than the given value. */
  hakTerlanggar_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  hakTerlanggar_gte?: Maybe<string>;
  /** All values containing the given string. */
  hakTerlanggar_contains?: Maybe<string>;
  /** All values not containing the given string. */
  hakTerlanggar_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  hakTerlanggar_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  hakTerlanggar_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  hakTerlanggar_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  hakTerlanggar_not_ends_with?: Maybe<string>;

  issue?: Maybe<string>;
  /** All values that are not equal to given value. */
  issue_not?: Maybe<string>;
  /** All values that are contained in given list. */
  issue_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  issue_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  issue_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  issue_lte?: Maybe<string>;
  /** All values greater than the given value. */
  issue_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  issue_gte?: Maybe<string>;
  /** All values containing the given string. */
  issue_contains?: Maybe<string>;
  /** All values not containing the given string. */
  issue_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  issue_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  issue_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  issue_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  issue_not_ends_with?: Maybe<string>;

  judulKasus?: Maybe<string>;
  /** All values that are not equal to given value. */
  judulKasus_not?: Maybe<string>;
  /** All values that are contained in given list. */
  judulKasus_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  judulKasus_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  judulKasus_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  judulKasus_lte?: Maybe<string>;
  /** All values greater than the given value. */
  judulKasus_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  judulKasus_gte?: Maybe<string>;
  /** All values containing the given string. */
  judulKasus_contains?: Maybe<string>;
  /** All values not containing the given string. */
  judulKasus_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  judulKasus_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  judulKasus_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  judulKasus_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  judulKasus_not_ends_with?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;
  /** All values that are not equal to given value. */
  klasifikasiDok_not?: Maybe<string>;
  /** All values that are contained in given list. */
  klasifikasiDok_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  klasifikasiDok_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  klasifikasiDok_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  klasifikasiDok_lte?: Maybe<string>;
  /** All values greater than the given value. */
  klasifikasiDok_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  klasifikasiDok_gte?: Maybe<string>;
  /** All values containing the given string. */
  klasifikasiDok_contains?: Maybe<string>;
  /** All values not containing the given string. */
  klasifikasiDok_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  klasifikasiDok_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  klasifikasiDok_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  klasifikasiDok_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  klasifikasiDok_not_ends_with?: Maybe<string>;

  kronologiKasus?: Maybe<string>;
  /** All values that are not equal to given value. */
  kronologiKasus_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kronologiKasus_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kronologiKasus_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kronologiKasus_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kronologiKasus_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kronologiKasus_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kronologiKasus_gte?: Maybe<string>;
  /** All values containing the given string. */
  kronologiKasus_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kronologiKasus_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kronologiKasus_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kronologiKasus_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kronologiKasus_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kronologiKasus_not_ends_with?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  lockDitolak_not?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;
  /** All values that are not equal to given value. */
  statusPendampingan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  statusPendampingan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  statusPendampingan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  statusPendampingan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  statusPendampingan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  statusPendampingan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  statusPendampingan_gte?: Maybe<string>;
  /** All values containing the given string. */
  statusPendampingan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  statusPendampingan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  statusPendampingan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  statusPendampingan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  statusPendampingan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  statusPendampingan_not_ends_with?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;
  /** All values that are not equal to given value. */
  targetAdvokasi_not?: Maybe<string>;
  /** All values that are contained in given list. */
  targetAdvokasi_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  targetAdvokasi_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  targetAdvokasi_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  targetAdvokasi_lte?: Maybe<string>;
  /** All values greater than the given value. */
  targetAdvokasi_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  targetAdvokasi_gte?: Maybe<string>;
  /** All values containing the given string. */
  targetAdvokasi_contains?: Maybe<string>;
  /** All values not containing the given string. */
  targetAdvokasi_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  targetAdvokasi_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  targetAdvokasi_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  targetAdvokasi_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  targetAdvokasi_not_ends_with?: Maybe<string>;

  unlockPk?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  unlockPk_not?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  unlockTransfer_not?: Maybe<boolean>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  application?: Maybe<ApplicationWhereInput>;

  clients_every?: Maybe<ClientWhereInput>;

  clients_some?: Maybe<ClientWhereInput>;

  clients_none?: Maybe<ClientWhereInput>;

  classifications_every?: Maybe<CaseClassificationWhereInput>;

  classifications_some?: Maybe<CaseClassificationWhereInput>;

  classifications_none?: Maybe<CaseClassificationWhereInput>;

  consultations_every?: Maybe<CaseConsultationWhereInput>;

  consultations_some?: Maybe<CaseConsultationWhereInput>;

  consultations_none?: Maybe<CaseConsultationWhereInput>;

  documents_every?: Maybe<CaseDocumentWhereInput>;

  documents_some?: Maybe<CaseDocumentWhereInput>;

  documents_none?: Maybe<CaseDocumentWhereInput>;

  issues_every?: Maybe<CaseIssueWhereInput>;

  issues_some?: Maybe<CaseIssueWhereInput>;

  issues_none?: Maybe<CaseIssueWhereInput>;

  korbans_every?: Maybe<CaseKorbanWhereInput>;

  korbans_some?: Maybe<CaseKorbanWhereInput>;

  korbans_none?: Maybe<CaseKorbanWhereInput>;

  pelakus_every?: Maybe<CasePelakuWhereInput>;

  pelakus_some?: Maybe<CasePelakuWhereInput>;

  pelakus_none?: Maybe<CasePelakuWhereInput>;

  pks_every?: Maybe<CasePkWhereInput>;

  pks_some?: Maybe<CasePkWhereInput>;

  pks_none?: Maybe<CasePkWhereInput>;

  progresses_every?: Maybe<CaseProgressWhereInput>;

  progresses_some?: Maybe<CaseProgressWhereInput>;

  progresses_none?: Maybe<CaseProgressWhereInput>;

  activities_every?: Maybe<CaseProgressActivityWhereInput>;

  activities_some?: Maybe<CaseProgressActivityWhereInput>;

  activities_none?: Maybe<CaseProgressActivityWhereInput>;

  transferreferrals_every?: Maybe<CaseTransferReferralWhereInput>;

  transferreferrals_some?: Maybe<CaseTransferReferralWhereInput>;

  transferreferrals_none?: Maybe<CaseTransferReferralWhereInput>;

  violatedrights_every?: Maybe<CaseViolatedRightWhereInput>;

  violatedrights_some?: Maybe<CaseViolatedRightWhereInput>;

  violatedrights_none?: Maybe<CaseViolatedRightWhereInput>;
}

export interface ClientWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ClientWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ClientWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ClientWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  alamatLokasi?: Maybe<string>;
  /** All values that are not equal to given value. */
  alamatLokasi_not?: Maybe<string>;
  /** All values that are contained in given list. */
  alamatLokasi_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  alamatLokasi_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  alamatLokasi_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  alamatLokasi_lte?: Maybe<string>;
  /** All values greater than the given value. */
  alamatLokasi_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  alamatLokasi_gte?: Maybe<string>;
  /** All values containing the given string. */
  alamatLokasi_contains?: Maybe<string>;
  /** All values not containing the given string. */
  alamatLokasi_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  alamatLokasi_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  alamatLokasi_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  alamatLokasi_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  alamatLokasi_not_ends_with?: Maybe<string>;

  asetGedung?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetGedung_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetGedung_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetGedung_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetGedung_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetGedung_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetGedung_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetGedung_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetGedung_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetGedung_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetGedung_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetGedung_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetGedung_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetGedung_not_ends_with?: Maybe<string>;

  asetKios?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetKios_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetKios_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetKios_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetKios_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetKios_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetKios_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetKios_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetKios_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetKios_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetKios_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetKios_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetKios_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetKios_not_ends_with?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetLahanGarapan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetLahanGarapan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetLahanGarapan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetLahanGarapan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetLahanGarapan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetLahanGarapan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetLahanGarapan_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetLahanGarapan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetLahanGarapan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetLahanGarapan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetLahanGarapan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetLahanGarapan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetLahanGarapan_not_ends_with?: Maybe<string>;

  asetLapak?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetLapak_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetLapak_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetLapak_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetLapak_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetLapak_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetLapak_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetLapak_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetLapak_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetLapak_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetLapak_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetLapak_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetLapak_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetLapak_not_ends_with?: Maybe<string>;

  asetMobil?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetMobil_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetMobil_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetMobil_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetMobil_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetMobil_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetMobil_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetMobil_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetMobil_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetMobil_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetMobil_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetMobil_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetMobil_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetMobil_not_ends_with?: Maybe<string>;

  asetMotor?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetMotor_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetMotor_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetMotor_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetMotor_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetMotor_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetMotor_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetMotor_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetMotor_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetMotor_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetMotor_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetMotor_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetMotor_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetMotor_not_ends_with?: Maybe<string>;

  asetRumah?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetRumah_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetRumah_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetRumah_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetRumah_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetRumah_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetRumah_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetRumah_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetRumah_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetRumah_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetRumah_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetRumah_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetRumah_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetRumah_not_ends_with?: Maybe<string>;

  asetTanah?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetTanah_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetTanah_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetTanah_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetTanah_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetTanah_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetTanah_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetTanah_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetTanah_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetTanah_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetTanah_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetTanah_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetTanah_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetTanah_not_ends_with?: Maybe<string>;

  asetToko?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetToko_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetToko_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetToko_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetToko_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetToko_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetToko_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetToko_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetToko_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetToko_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetToko_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetToko_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetToko_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetToko_not_ends_with?: Maybe<string>;

  asetWarung?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetWarung_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetWarung_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetWarung_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetWarung_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetWarung_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetWarung_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetWarung_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetWarung_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetWarung_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetWarung_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetWarung_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetWarung_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetWarung_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  pendapatan?: Maybe<string>;
  /** All values that are not equal to given value. */
  pendapatan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  pendapatan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  pendapatan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  pendapatan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  pendapatan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  pendapatan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  pendapatan_gte?: Maybe<string>;
  /** All values containing the given string. */
  pendapatan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  pendapatan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  pendapatan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  pendapatan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  pendapatan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  pendapatan_not_ends_with?: Maybe<string>;

  sktm?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  sktm_not?: Maybe<boolean>;

  sktmUpload?: Maybe<string>;
  /** All values that are not equal to given value. */
  sktmUpload_not?: Maybe<string>;
  /** All values that are contained in given list. */
  sktmUpload_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  sktmUpload_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  sktmUpload_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  sktmUpload_lte?: Maybe<string>;
  /** All values greater than the given value. */
  sktmUpload_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  sktmUpload_gte?: Maybe<string>;
  /** All values containing the given string. */
  sktmUpload_contains?: Maybe<string>;
  /** All values not containing the given string. */
  sktmUpload_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  sktmUpload_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  sktmUpload_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  sktmUpload_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  sktmUpload_not_ends_with?: Maybe<string>;

  stmKeterangan?: Maybe<string>;
  /** All values that are not equal to given value. */
  stmKeterangan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  stmKeterangan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  stmKeterangan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  stmKeterangan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  stmKeterangan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  stmKeterangan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  stmKeterangan_gte?: Maybe<string>;
  /** All values containing the given string. */
  stmKeterangan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  stmKeterangan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  stmKeterangan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  stmKeterangan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  stmKeterangan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  stmKeterangan_not_ends_with?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;
  /** All values that are not equal to given value. */
  tanggunganAnak_not?: Maybe<number>;
  /** All values that are contained in given list. */
  tanggunganAnak_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  tanggunganAnak_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  tanggunganAnak_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  tanggunganAnak_lte?: Maybe<number>;
  /** All values greater than the given value. */
  tanggunganAnak_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  tanggunganAnak_gte?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;
  /** All values that are not equal to given value. */
  tanggunganFamili_not?: Maybe<number>;
  /** All values that are contained in given list. */
  tanggunganFamili_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  tanggunganFamili_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  tanggunganFamili_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  tanggunganFamili_lte?: Maybe<number>;
  /** All values greater than the given value. */
  tanggunganFamili_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  tanggunganFamili_gte?: Maybe<number>;

  tanggunganLain?: Maybe<number>;
  /** All values that are not equal to given value. */
  tanggunganLain_not?: Maybe<number>;
  /** All values that are contained in given list. */
  tanggunganLain_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  tanggunganLain_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  tanggunganLain_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  tanggunganLain_lte?: Maybe<number>;
  /** All values greater than the given value. */
  tanggunganLain_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  tanggunganLain_gte?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;
  /** All values that are not equal to given value. */
  tanggunganPasangan_not?: Maybe<number>;
  /** All values that are contained in given list. */
  tanggunganPasangan_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  tanggunganPasangan_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  tanggunganPasangan_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  tanggunganPasangan_lte?: Maybe<number>;
  /** All values greater than the given value. */
  tanggunganPasangan_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  tanggunganPasangan_gte?: Maybe<number>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;
  /** All values that are not equal to given value. */
  usiaSaatKlien_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usiaSaatKlien_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usiaSaatKlien_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usiaSaatKlien_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usiaSaatKlien_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usiaSaatKlien_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usiaSaatKlien_gte?: Maybe<number>;

  applicationId?: Maybe<ApplicationWhereInput>;

  personId?: Maybe<PersonWhereInput>;

  caseid?: Maybe<CaseWhereInput>;
}

export interface CaseClassificationWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseClassificationWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseClassificationWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseClassificationWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;

  caseId?: Maybe<CaseWhereInput>;
}

export interface CaseConsultationWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseConsultationWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseConsultationWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseConsultationWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  appKonsul?: Maybe<string>;
  /** All values that are not equal to given value. */
  appKonsul_not?: Maybe<string>;
  /** All values that are contained in given list. */
  appKonsul_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  appKonsul_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  appKonsul_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  appKonsul_lte?: Maybe<string>;
  /** All values greater than the given value. */
  appKonsul_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  appKonsul_gte?: Maybe<string>;
  /** All values containing the given string. */
  appKonsul_contains?: Maybe<string>;
  /** All values not containing the given string. */
  appKonsul_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  appKonsul_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  appKonsul_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  appKonsul_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  appKonsul_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  isiKonsul?: Maybe<string>;
  /** All values that are not equal to given value. */
  isiKonsul_not?: Maybe<string>;
  /** All values that are contained in given list. */
  isiKonsul_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  isiKonsul_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  isiKonsul_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  isiKonsul_lte?: Maybe<string>;
  /** All values greater than the given value. */
  isiKonsul_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  isiKonsul_gte?: Maybe<string>;
  /** All values containing the given string. */
  isiKonsul_contains?: Maybe<string>;
  /** All values not containing the given string. */
  isiKonsul_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  isiKonsul_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  isiKonsul_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  isiKonsul_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  isiKonsul_not_ends_with?: Maybe<string>;

  judulAktifitas?: Maybe<string>;
  /** All values that are not equal to given value. */
  judulAktifitas_not?: Maybe<string>;
  /** All values that are contained in given list. */
  judulAktifitas_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  judulAktifitas_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  judulAktifitas_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  judulAktifitas_lte?: Maybe<string>;
  /** All values greater than the given value. */
  judulAktifitas_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  judulAktifitas_gte?: Maybe<string>;
  /** All values containing the given string. */
  judulAktifitas_contains?: Maybe<string>;
  /** All values not containing the given string. */
  judulAktifitas_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  judulAktifitas_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  judulAktifitas_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  judulAktifitas_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  judulAktifitas_not_ends_with?: Maybe<string>;

  ppKonsul?: Maybe<string>;
  /** All values that are not equal to given value. */
  ppKonsul_not?: Maybe<string>;
  /** All values that are contained in given list. */
  ppKonsul_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  ppKonsul_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  ppKonsul_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  ppKonsul_lte?: Maybe<string>;
  /** All values greater than the given value. */
  ppKonsul_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  ppKonsul_gte?: Maybe<string>;
  /** All values containing the given string. */
  ppKonsul_contains?: Maybe<string>;
  /** All values not containing the given string. */
  ppKonsul_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  ppKonsul_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  ppKonsul_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  ppKonsul_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  ppKonsul_not_ends_with?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglKonsul_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglKonsul_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglKonsul_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglKonsul_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglKonsul_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglKonsul_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglKonsul_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  caseId?: Maybe<CaseWhereInput>;

  apps_every?: Maybe<CaseConsultationAppWhereInput>;

  apps_some?: Maybe<CaseConsultationAppWhereInput>;

  apps_none?: Maybe<CaseConsultationAppWhereInput>;
}

export interface CaseConsultationAppWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseConsultationAppWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseConsultationAppWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseConsultationAppWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  appConsultation?: Maybe<string>;
  /** All values that are not equal to given value. */
  appConsultation_not?: Maybe<string>;
  /** All values that are contained in given list. */
  appConsultation_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  appConsultation_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  appConsultation_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  appConsultation_lte?: Maybe<string>;
  /** All values greater than the given value. */
  appConsultation_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  appConsultation_gte?: Maybe<string>;
  /** All values containing the given string. */
  appConsultation_contains?: Maybe<string>;
  /** All values not containing the given string. */
  appConsultation_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  appConsultation_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  appConsultation_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  appConsultation_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  appConsultation_not_ends_with?: Maybe<string>;

  caseConsultationId?: Maybe<CaseConsultationWhereInput>;
}

export interface CaseDocumentWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseDocumentWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseDocumentWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseDocumentWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  jenisDokumen?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisDokumen_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisDokumen_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisDokumen_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisDokumen_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisDokumen_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisDokumen_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisDokumen_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisDokumen_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisDokumen_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisDokumen_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisDokumen_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisDokumen_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisDokumen_not_ends_with?: Maybe<string>;

  judulDokumen?: Maybe<string>;
  /** All values that are not equal to given value. */
  judulDokumen_not?: Maybe<string>;
  /** All values that are contained in given list. */
  judulDokumen_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  judulDokumen_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  judulDokumen_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  judulDokumen_lte?: Maybe<string>;
  /** All values greater than the given value. */
  judulDokumen_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  judulDokumen_gte?: Maybe<string>;
  /** All values containing the given string. */
  judulDokumen_contains?: Maybe<string>;
  /** All values not containing the given string. */
  judulDokumen_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  judulDokumen_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  judulDokumen_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  judulDokumen_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  judulDokumen_not_ends_with?: Maybe<string>;

  keterangan?: Maybe<string>;
  /** All values that are not equal to given value. */
  keterangan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  keterangan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  keterangan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  keterangan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  keterangan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  keterangan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  keterangan_gte?: Maybe<string>;
  /** All values containing the given string. */
  keterangan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  keterangan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  keterangan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  keterangan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  keterangan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  keterangan_not_ends_with?: Maybe<string>;

  link?: Maybe<string>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<string>;
  /** All values that are contained in given list. */
  link_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  link_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  link_lte?: Maybe<string>;
  /** All values greater than the given value. */
  link_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  link_gte?: Maybe<string>;
  /** All values containing the given string. */
  link_contains?: Maybe<string>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  link_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  caseId?: Maybe<CaseWhereInput>;
}

export interface CaseIssueWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseIssueWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseIssueWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseIssueWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;

  caseId?: Maybe<CaseWhereInput>;
}

export interface CasePelakuWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CasePelakuWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CasePelakuWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CasePelakuWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  caseId?: Maybe<CaseWhereInput>;

  personId?: Maybe<PersonWhereInput>;
}

export interface CasePkWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CasePkWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CasePkWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CasePkWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  didampingi?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  didampingi_not?: Maybe<boolean>;

  legalMemo?: Maybe<string>;
  /** All values that are not equal to given value. */
  legalMemo_not?: Maybe<string>;
  /** All values that are contained in given list. */
  legalMemo_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  legalMemo_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  legalMemo_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  legalMemo_lte?: Maybe<string>;
  /** All values greater than the given value. */
  legalMemo_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  legalMemo_gte?: Maybe<string>;
  /** All values containing the given string. */
  legalMemo_contains?: Maybe<string>;
  /** All values not containing the given string. */
  legalMemo_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  legalMemo_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  legalMemo_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  legalMemo_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  legalMemo_not_ends_with?: Maybe<string>;

  notulaRapat?: Maybe<string>;
  /** All values that are not equal to given value. */
  notulaRapat_not?: Maybe<string>;
  /** All values that are contained in given list. */
  notulaRapat_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  notulaRapat_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  notulaRapat_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  notulaRapat_lte?: Maybe<string>;
  /** All values greater than the given value. */
  notulaRapat_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  notulaRapat_gte?: Maybe<string>;
  /** All values containing the given string. */
  notulaRapat_contains?: Maybe<string>;
  /** All values not containing the given string. */
  notulaRapat_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  notulaRapat_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  notulaRapat_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  notulaRapat_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  notulaRapat_not_ends_with?: Maybe<string>;

  ppPendamping?: Maybe<number>;
  /** All values that are not equal to given value. */
  ppPendamping_not?: Maybe<number>;
  /** All values that are contained in given list. */
  ppPendamping_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  ppPendamping_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  ppPendamping_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  ppPendamping_lte?: Maybe<number>;
  /** All values greater than the given value. */
  ppPendamping_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  ppPendamping_gte?: Maybe<number>;

  statusAlasanTdk?: Maybe<string>;
  /** All values that are not equal to given value. */
  statusAlasanTdk_not?: Maybe<string>;
  /** All values that are contained in given list. */
  statusAlasanTdk_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  statusAlasanTdk_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  statusAlasanTdk_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  statusAlasanTdk_lte?: Maybe<string>;
  /** All values greater than the given value. */
  statusAlasanTdk_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  statusAlasanTdk_gte?: Maybe<string>;
  /** All values containing the given string. */
  statusAlasanTdk_contains?: Maybe<string>;
  /** All values not containing the given string. */
  statusAlasanTdk_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  statusAlasanTdk_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  statusAlasanTdk_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  statusAlasanTdk_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  statusAlasanTdk_not_ends_with?: Maybe<string>;

  tglRapat?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglRapat_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglRapat_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglRapat_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglRapat_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglRapat_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglRapat_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglRapat_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  caseId?: Maybe<CaseWhereInput>;
}

export interface CaseProgressWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  catatan?: Maybe<string>;
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  catatan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  catatan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  catatan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<string>;
  /** All values containing the given string. */
  catatan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  jenisPeradilan?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisPeradilan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisPeradilan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisPeradilan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisPeradilan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisPeradilan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisPeradilan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisPeradilan_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisPeradilan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisPeradilan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisPeradilan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisPeradilan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisPeradilan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisPeradilan_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  caseId?: Maybe<CaseWhereInput>;
}

export interface CaseProgressActivityWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressActivityWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressActivityWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressActivityWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  capaian?: Maybe<string>;
  /** All values that are not equal to given value. */
  capaian_not?: Maybe<string>;
  /** All values that are contained in given list. */
  capaian_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  capaian_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  capaian_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  capaian_lte?: Maybe<string>;
  /** All values greater than the given value. */
  capaian_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  capaian_gte?: Maybe<string>;
  /** All values containing the given string. */
  capaian_contains?: Maybe<string>;
  /** All values not containing the given string. */
  capaian_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  capaian_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  capaian_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  capaian_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  capaian_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  hambatan?: Maybe<string>;
  /** All values that are not equal to given value. */
  hambatan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  hambatan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  hambatan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  hambatan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  hambatan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  hambatan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  hambatan_gte?: Maybe<string>;
  /** All values containing the given string. */
  hambatan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  hambatan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  hambatan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  hambatan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  hambatan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  hambatan_not_ends_with?: Maybe<string>;

  judulAktifitas?: Maybe<string>;
  /** All values that are not equal to given value. */
  judulAktifitas_not?: Maybe<string>;
  /** All values that are contained in given list. */
  judulAktifitas_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  judulAktifitas_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  judulAktifitas_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  judulAktifitas_lte?: Maybe<string>;
  /** All values greater than the given value. */
  judulAktifitas_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  judulAktifitas_gte?: Maybe<string>;
  /** All values containing the given string. */
  judulAktifitas_contains?: Maybe<string>;
  /** All values not containing the given string. */
  judulAktifitas_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  judulAktifitas_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  judulAktifitas_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  judulAktifitas_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  judulAktifitas_not_ends_with?: Maybe<string>;

  position?: Maybe<string>;
  /** All values that are not equal to given value. */
  position_not?: Maybe<string>;
  /** All values that are contained in given list. */
  position_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  position_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  position_lte?: Maybe<string>;
  /** All values greater than the given value. */
  position_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  position_gte?: Maybe<string>;
  /** All values containing the given string. */
  position_contains?: Maybe<string>;
  /** All values not containing the given string. */
  position_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  position_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  position_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  position_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  position_not_ends_with?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;
  /** All values that are not equal to given value. */
  rencanaStrategi_not?: Maybe<string>;
  /** All values that are contained in given list. */
  rencanaStrategi_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  rencanaStrategi_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  rencanaStrategi_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  rencanaStrategi_lte?: Maybe<string>;
  /** All values greater than the given value. */
  rencanaStrategi_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  rencanaStrategi_gte?: Maybe<string>;
  /** All values containing the given string. */
  rencanaStrategi_contains?: Maybe<string>;
  /** All values not containing the given string. */
  rencanaStrategi_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  rencanaStrategi_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  rencanaStrategi_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  rencanaStrategi_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  rencanaStrategi_not_ends_with?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;
  /** All values that are not equal to given value. */
  targetAdvokasi_not?: Maybe<string>;
  /** All values that are contained in given list. */
  targetAdvokasi_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  targetAdvokasi_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  targetAdvokasi_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  targetAdvokasi_lte?: Maybe<string>;
  /** All values greater than the given value. */
  targetAdvokasi_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  targetAdvokasi_gte?: Maybe<string>;
  /** All values containing the given string. */
  targetAdvokasi_contains?: Maybe<string>;
  /** All values not containing the given string. */
  targetAdvokasi_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  targetAdvokasi_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  targetAdvokasi_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  targetAdvokasi_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  targetAdvokasi_not_ends_with?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglAktifitas_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglAktifitas_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglAktifitas_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglAktifitas_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglAktifitas_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglAktifitas_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglAktifitas_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  caseId?: Maybe<CaseWhereInput>;

  activitieslit_every?: Maybe<CaseProgressActivityLitWhereInput>;

  activitieslit_some?: Maybe<CaseProgressActivityLitWhereInput>;

  activitieslit_none?: Maybe<CaseProgressActivityLitWhereInput>;

  activitiesnonlit_every?: Maybe<CaseProgressActivityNonlitWhereInput>;

  activitiesnonlit_some?: Maybe<CaseProgressActivityNonlitWhereInput>;

  activitiesnonlit_none?: Maybe<CaseProgressActivityNonlitWhereInput>;
}

export interface CaseProgressActivityLitWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressActivityLitWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressActivityLitWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressActivityLitWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;

  caseProgressActivityId?: Maybe<CaseProgressActivityWhereInput>;
}

export interface CaseProgressActivityNonlitWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressActivityNonlitWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressActivityNonlitWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressActivityNonlitWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;

  caseProgressActivityId?: Maybe<CaseProgressActivityWhereInput>;
}

export interface CaseTransferReferralWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseTransferReferralWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseTransferReferralWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseTransferReferralWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  catatan?: Maybe<string>;
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  catatan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  catatan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  catatan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<string>;
  /** All values containing the given string. */
  catatan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  document?: Maybe<string>;
  /** All values that are not equal to given value. */
  document_not?: Maybe<string>;
  /** All values that are contained in given list. */
  document_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  document_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  document_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  document_lte?: Maybe<string>;
  /** All values greater than the given value. */
  document_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  document_gte?: Maybe<string>;
  /** All values containing the given string. */
  document_contains?: Maybe<string>;
  /** All values not containing the given string. */
  document_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  document_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  document_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  document_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  document_not_ends_with?: Maybe<string>;

  jenisTransferReferral?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisTransferReferral_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisTransferReferral_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisTransferReferral_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisTransferReferral_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisTransferReferral_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisTransferReferral_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisTransferReferral_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisTransferReferral_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisTransferReferral_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisTransferReferral_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisTransferReferral_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisTransferReferral_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisTransferReferral_not_ends_with?: Maybe<string>;

  networkId?: Maybe<number>;
  /** All values that are not equal to given value. */
  networkId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  networkId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  networkId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  networkId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  networkId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  networkId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  networkId_gte?: Maybe<number>;

  tglTransferReferral?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglTransferReferral_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglTransferReferral_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglTransferReferral_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglTransferReferral_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglTransferReferral_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglTransferReferral_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglTransferReferral_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  caseId?: Maybe<CaseWhereInput>;
}

export interface CaseViolatedRightWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseViolatedRightWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseViolatedRightWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseViolatedRightWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;

  caseId?: Maybe<CaseWhereInput>;
}

export interface PersonDocumentWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PersonDocumentWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PersonDocumentWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PersonDocumentWhereInput[]>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  deletedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  deletedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  deletedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  deletedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  deletedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  deletedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  deletedAt_gte?: Maybe<DateTime>;

  file?: Maybe<number>;
  /** All values that are not equal to given value. */
  file_not?: Maybe<number>;
  /** All values that are contained in given list. */
  file_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  file_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  file_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  file_lte?: Maybe<number>;
  /** All values greater than the given value. */
  file_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  file_gte?: Maybe<number>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  title?: Maybe<number>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<number>;
  /** All values that are contained in given list. */
  title_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<number>;
  /** All values greater than the given value. */
  title_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<number>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  personId?: Maybe<PersonWhereInput>;
}

export interface DaftarPengacaraWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<DaftarPengacaraWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<DaftarPengacaraWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<DaftarPengacaraWhereInput[]>;

  ID?: Maybe<number>;
  /** All values that are not equal to given value. */
  ID_not?: Maybe<number>;
  /** All values that are contained in given list. */
  ID_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  ID_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  ID_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  ID_lte?: Maybe<number>;
  /** All values greater than the given value. */
  ID_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  ID_gte?: Maybe<number>;

  jabatan?: Maybe<string>;
  /** All values that are not equal to given value. */
  jabatan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jabatan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jabatan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jabatan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jabatan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jabatan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jabatan_gte?: Maybe<string>;
  /** All values containing the given string. */
  jabatan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jabatan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jabatan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jabatan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jabatan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jabatan_not_ends_with?: Maybe<string>;

  namaLengkap?: Maybe<string>;
  /** All values that are not equal to given value. */
  namaLengkap_not?: Maybe<string>;
  /** All values that are contained in given list. */
  namaLengkap_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  namaLengkap_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  namaLengkap_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  namaLengkap_lte?: Maybe<string>;
  /** All values greater than the given value. */
  namaLengkap_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  namaLengkap_gte?: Maybe<string>;
  /** All values containing the given string. */
  namaLengkap_contains?: Maybe<string>;
  /** All values not containing the given string. */
  namaLengkap_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  namaLengkap_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  namaLengkap_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  namaLengkap_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  namaLengkap_not_ends_with?: Maybe<string>;

  sembunyikan?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  sembunyikan_not?: Maybe<boolean>;
}

export interface DataDictWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<DataDictWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<DataDictWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<DataDictWhereInput[]>;

  fieldNumber?: Maybe<string>;
  /** All values that are not equal to given value. */
  fieldNumber_not?: Maybe<string>;
  /** All values that are contained in given list. */
  fieldNumber_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  fieldNumber_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  fieldNumber_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  fieldNumber_lte?: Maybe<string>;
  /** All values greater than the given value. */
  fieldNumber_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  fieldNumber_gte?: Maybe<string>;
  /** All values containing the given string. */
  fieldNumber_contains?: Maybe<string>;
  /** All values not containing the given string. */
  fieldNumber_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  fieldNumber_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  fieldNumber_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  fieldNumber_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  fieldNumber_not_ends_with?: Maybe<string>;

  dataType?: Maybe<string>;
  /** All values that are not equal to given value. */
  dataType_not?: Maybe<string>;
  /** All values that are contained in given list. */
  dataType_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  dataType_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  dataType_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  dataType_lte?: Maybe<string>;
  /** All values greater than the given value. */
  dataType_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  dataType_gte?: Maybe<string>;
  /** All values containing the given string. */
  dataType_contains?: Maybe<string>;
  /** All values not containing the given string. */
  dataType_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  dataType_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  dataType_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  dataType_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  dataType_not_ends_with?: Maybe<string>;

  entity?: Maybe<string>;
  /** All values that are not equal to given value. */
  entity_not?: Maybe<string>;
  /** All values that are contained in given list. */
  entity_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  entity_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  entity_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  entity_lte?: Maybe<string>;
  /** All values greater than the given value. */
  entity_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  entity_gte?: Maybe<string>;
  /** All values containing the given string. */
  entity_contains?: Maybe<string>;
  /** All values not containing the given string. */
  entity_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  entity_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  entity_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  entity_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  entity_not_ends_with?: Maybe<string>;

  fieldName?: Maybe<string>;
  /** All values that are not equal to given value. */
  fieldName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  fieldName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  fieldName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  fieldName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  fieldName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  fieldName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  fieldName_gte?: Maybe<string>;
  /** All values containing the given string. */
  fieldName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  fieldName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  fieldName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  fieldName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  fieldName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  fieldName_not_ends_with?: Maybe<string>;

  fieldType?: Maybe<string>;
  /** All values that are not equal to given value. */
  fieldType_not?: Maybe<string>;
  /** All values that are contained in given list. */
  fieldType_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  fieldType_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  fieldType_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  fieldType_lte?: Maybe<string>;
  /** All values greater than the given value. */
  fieldType_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  fieldType_gte?: Maybe<string>;
  /** All values containing the given string. */
  fieldType_contains?: Maybe<string>;
  /** All values not containing the given string. */
  fieldType_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  fieldType_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  fieldType_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  fieldType_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  fieldType_not_ends_with?: Maybe<string>;

  isRepeat?: Maybe<string>;
  /** All values that are not equal to given value. */
  isRepeat_not?: Maybe<string>;
  /** All values that are contained in given list. */
  isRepeat_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  isRepeat_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  isRepeat_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  isRepeat_lte?: Maybe<string>;
  /** All values greater than the given value. */
  isRepeat_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  isRepeat_gte?: Maybe<string>;
  /** All values containing the given string. */
  isRepeat_contains?: Maybe<string>;
  /** All values not containing the given string. */
  isRepeat_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  isRepeat_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  isRepeat_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  isRepeat_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  isRepeat_not_ends_with?: Maybe<string>;

  linkField?: Maybe<string>;
  /** All values that are not equal to given value. */
  linkField_not?: Maybe<string>;
  /** All values that are contained in given list. */
  linkField_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  linkField_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  linkField_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  linkField_lte?: Maybe<string>;
  /** All values greater than the given value. */
  linkField_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  linkField_gte?: Maybe<string>;
  /** All values containing the given string. */
  linkField_contains?: Maybe<string>;
  /** All values not containing the given string. */
  linkField_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  linkField_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  linkField_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  linkField_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  linkField_not_ends_with?: Maybe<string>;

  linkTable?: Maybe<string>;
  /** All values that are not equal to given value. */
  linkTable_not?: Maybe<string>;
  /** All values that are contained in given list. */
  linkTable_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  linkTable_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  linkTable_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  linkTable_lte?: Maybe<string>;
  /** All values greater than the given value. */
  linkTable_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  linkTable_gte?: Maybe<string>;
  /** All values containing the given string. */
  linkTable_contains?: Maybe<string>;
  /** All values not containing the given string. */
  linkTable_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  linkTable_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  linkTable_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  linkTable_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  linkTable_not_ends_with?: Maybe<string>;

  listCode?: Maybe<string>;
  /** All values that are not equal to given value. */
  listCode_not?: Maybe<string>;
  /** All values that are contained in given list. */
  listCode_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  listCode_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  listCode_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  listCode_lte?: Maybe<string>;
  /** All values greater than the given value. */
  listCode_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  listCode_gte?: Maybe<string>;
  /** All values containing the given string. */
  listCode_contains?: Maybe<string>;
  /** All values not containing the given string. */
  listCode_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  listCode_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  listCode_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  listCode_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  listCode_not_ends_with?: Maybe<string>;

  required?: Maybe<string>;
  /** All values that are not equal to given value. */
  required_not?: Maybe<string>;
  /** All values that are contained in given list. */
  required_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  required_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  required_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  required_lte?: Maybe<string>;
  /** All values greater than the given value. */
  required_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  required_gte?: Maybe<string>;
  /** All values containing the given string. */
  required_contains?: Maybe<string>;
  /** All values not containing the given string. */
  required_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  required_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  required_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  required_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  required_not_ends_with?: Maybe<string>;

  validation?: Maybe<string>;
  /** All values that are not equal to given value. */
  validation_not?: Maybe<string>;
  /** All values that are contained in given list. */
  validation_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  validation_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  validation_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  validation_lte?: Maybe<string>;
  /** All values greater than the given value. */
  validation_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  validation_gte?: Maybe<string>;
  /** All values containing the given string. */
  validation_contains?: Maybe<string>;
  /** All values not containing the given string. */
  validation_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  validation_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  validation_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  validation_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  validation_not_ends_with?: Maybe<string>;

  visibleSelectQuery?: Maybe<string>;
  /** All values that are not equal to given value. */
  visibleSelectQuery_not?: Maybe<string>;
  /** All values that are contained in given list. */
  visibleSelectQuery_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  visibleSelectQuery_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  visibleSelectQuery_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  visibleSelectQuery_lte?: Maybe<string>;
  /** All values greater than the given value. */
  visibleSelectQuery_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  visibleSelectQuery_gte?: Maybe<string>;
  /** All values containing the given string. */
  visibleSelectQuery_contains?: Maybe<string>;
  /** All values not containing the given string. */
  visibleSelectQuery_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  visibleSelectQuery_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  visibleSelectQuery_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  visibleSelectQuery_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  visibleSelectQuery_not_ends_with?: Maybe<string>;

  locals_every?: Maybe<DataDictLocalWhereInput>;

  locals_some?: Maybe<DataDictLocalWhereInput>;

  locals_none?: Maybe<DataDictLocalWhereInput>;
}

export interface DataDictLocalWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<DataDictLocalWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<DataDictLocalWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<DataDictLocalWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  label?: Maybe<string>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<string>;
  /** All values that are contained in given list. */
  label_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  label_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  label_lte?: Maybe<string>;
  /** All values greater than the given value. */
  label_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  label_gte?: Maybe<string>;
  /** All values containing the given string. */
  label_contains?: Maybe<string>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  label_not_ends_with?: Maybe<string>;

  lang?: Maybe<string>;
  /** All values that are not equal to given value. */
  lang_not?: Maybe<string>;
  /** All values that are contained in given list. */
  lang_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  lang_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  lang_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  lang_lte?: Maybe<string>;
  /** All values greater than the given value. */
  lang_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  lang_gte?: Maybe<string>;
  /** All values containing the given string. */
  lang_contains?: Maybe<string>;
  /** All values not containing the given string. */
  lang_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  lang_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  lang_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  lang_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  lang_not_ends_with?: Maybe<string>;

  fieldNumber?: Maybe<DataDictWhereInput>;
}

export interface LogRequestWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<LogRequestWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<LogRequestWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LogRequestWhereInput[]>;

  ID?: Maybe<number>;
  /** All values that are not equal to given value. */
  ID_not?: Maybe<number>;
  /** All values that are contained in given list. */
  ID_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  ID_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  ID_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  ID_lte?: Maybe<number>;
  /** All values greater than the given value. */
  ID_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  ID_gte?: Maybe<number>;

  caseId?: Maybe<number>;
  /** All values that are not equal to given value. */
  caseId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  caseId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  caseId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  caseId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  caseId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  caseId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  caseId_gte?: Maybe<number>;

  isiRequest?: Maybe<string>;
  /** All values that are not equal to given value. */
  isiRequest_not?: Maybe<string>;
  /** All values that are contained in given list. */
  isiRequest_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  isiRequest_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  isiRequest_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  isiRequest_lte?: Maybe<string>;
  /** All values greater than the given value. */
  isiRequest_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  isiRequest_gte?: Maybe<string>;
  /** All values containing the given string. */
  isiRequest_contains?: Maybe<string>;
  /** All values not containing the given string. */
  isiRequest_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  isiRequest_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  isiRequest_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  isiRequest_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  isiRequest_not_ends_with?: Maybe<string>;

  jenisRequest?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisRequest_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisRequest_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisRequest_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisRequest_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisRequest_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisRequest_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisRequest_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisRequest_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisRequest_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisRequest_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisRequest_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisRequest_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisRequest_not_ends_with?: Maybe<string>;

  networkId?: Maybe<number>;
  /** All values that are not equal to given value. */
  networkId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  networkId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  networkId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  networkId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  networkId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  networkId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  networkId_gte?: Maybe<number>;

  personId?: Maybe<number>;
  /** All values that are not equal to given value. */
  personId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  personId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  personId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  personId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  personId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  personId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  personId_gte?: Maybe<number>;

  pp?: Maybe<number>;
  /** All values that are not equal to given value. */
  pp_not?: Maybe<number>;
  /** All values that are contained in given list. */
  pp_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  pp_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  pp_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  pp_lte?: Maybe<number>;
  /** All values greater than the given value. */
  pp_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  pp_gte?: Maybe<number>;

  requestBy?: Maybe<number>;
  /** All values that are not equal to given value. */
  requestBy_not?: Maybe<number>;
  /** All values that are contained in given list. */
  requestBy_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  requestBy_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  requestBy_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  requestBy_lte?: Maybe<number>;
  /** All values greater than the given value. */
  requestBy_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  requestBy_gte?: Maybe<number>;

  requestTo?: Maybe<number>;
  /** All values that are not equal to given value. */
  requestTo_not?: Maybe<number>;
  /** All values that are contained in given list. */
  requestTo_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  requestTo_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  requestTo_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  requestTo_lte?: Maybe<number>;
  /** All values greater than the given value. */
  requestTo_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  requestTo_gte?: Maybe<number>;

  tanggapanRequest?: Maybe<string>;
  /** All values that are not equal to given value. */
  tanggapanRequest_not?: Maybe<string>;
  /** All values that are contained in given list. */
  tanggapanRequest_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  tanggapanRequest_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  tanggapanRequest_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  tanggapanRequest_lte?: Maybe<string>;
  /** All values greater than the given value. */
  tanggapanRequest_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  tanggapanRequest_gte?: Maybe<string>;
  /** All values containing the given string. */
  tanggapanRequest_contains?: Maybe<string>;
  /** All values not containing the given string. */
  tanggapanRequest_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  tanggapanRequest_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  tanggapanRequest_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  tanggapanRequest_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  tanggapanRequest_not_ends_with?: Maybe<string>;

  tglExpired?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglExpired_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglExpired_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglExpired_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglExpired_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglExpired_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglExpired_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglExpired_gte?: Maybe<DateTime>;

  tglRequest?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglRequest_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglRequest_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglRequest_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglRequest_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglRequest_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglRequest_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglRequest_gte?: Maybe<DateTime>;

  tglRespon?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglRespon_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglRespon_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglRespon_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglRespon_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglRespon_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglRespon_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglRespon_gte?: Maybe<DateTime>;
}

export interface LogRequestAppWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<LogRequestAppWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<LogRequestAppWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LogRequestAppWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  appConsultation?: Maybe<string>;
  /** All values that are not equal to given value. */
  appConsultation_not?: Maybe<string>;
  /** All values that are contained in given list. */
  appConsultation_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  appConsultation_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  appConsultation_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  appConsultation_lte?: Maybe<string>;
  /** All values greater than the given value. */
  appConsultation_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  appConsultation_gte?: Maybe<string>;
  /** All values containing the given string. */
  appConsultation_contains?: Maybe<string>;
  /** All values not containing the given string. */
  appConsultation_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  appConsultation_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  appConsultation_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  appConsultation_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  appConsultation_not_ends_with?: Maybe<string>;

  logRequestId?: Maybe<number>;
  /** All values that are not equal to given value. */
  logRequestId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  logRequestId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  logRequestId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  logRequestId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  logRequestId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  logRequestId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  logRequestId_gte?: Maybe<number>;
}

export interface MtVocabWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MtVocabWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<MtVocabWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MtVocabWhereInput[]>;

  KODE?: Maybe<string>;
  /** All values that are not equal to given value. */
  KODE_not?: Maybe<string>;
  /** All values that are contained in given list. */
  KODE_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  KODE_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  KODE_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  KODE_lte?: Maybe<string>;
  /** All values greater than the given value. */
  KODE_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  KODE_gte?: Maybe<string>;
  /** All values containing the given string. */
  KODE_contains?: Maybe<string>;
  /** All values not containing the given string. */
  KODE_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  KODE_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  KODE_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  KODE_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  KODE_not_ends_with?: Maybe<string>;

  kode_induk?: Maybe<string>;
  /** All values that are not equal to given value. */
  kode_induk_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kode_induk_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kode_induk_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kode_induk_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kode_induk_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kode_induk_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kode_induk_gte?: Maybe<string>;
  /** All values containing the given string. */
  kode_induk_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kode_induk_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kode_induk_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kode_induk_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kode_induk_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kode_induk_not_ends_with?: Maybe<string>;

  level?: Maybe<number>;
  /** All values that are not equal to given value. */
  level_not?: Maybe<number>;
  /** All values that are contained in given list. */
  level_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  level_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  level_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  level_lte?: Maybe<number>;
  /** All values greater than the given value. */
  level_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  level_gte?: Maybe<number>;

  sembunyikan?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  sembunyikan_not?: Maybe<boolean>;

  teks?: Maybe<string>;
  /** All values that are not equal to given value. */
  teks_not?: Maybe<string>;
  /** All values that are contained in given list. */
  teks_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  teks_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  teks_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  teks_lte?: Maybe<string>;
  /** All values greater than the given value. */
  teks_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  teks_gte?: Maybe<string>;
  /** All values containing the given string. */
  teks_contains?: Maybe<string>;
  /** All values not containing the given string. */
  teks_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  teks_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  teks_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  teks_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  teks_not_ends_with?: Maybe<string>;

  urutan?: Maybe<number>;
  /** All values that are not equal to given value. */
  urutan_not?: Maybe<number>;
  /** All values that are contained in given list. */
  urutan_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  urutan_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  urutan_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  urutan_lte?: Maybe<number>;
  /** All values greater than the given value. */
  urutan_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  urutan_gte?: Maybe<number>;

  kode_list?: Maybe<MtVocabGroupWhereInput>;
}

export interface MtVocabGroupWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MtVocabGroupWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<MtVocabGroupWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MtVocabGroupWhereInput[]>;

  kode_list?: Maybe<number>;
  /** All values that are not equal to given value. */
  kode_list_not?: Maybe<number>;
  /** All values that are contained in given list. */
  kode_list_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  kode_list_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  kode_list_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  kode_list_lte?: Maybe<number>;
  /** All values greater than the given value. */
  kode_list_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  kode_list_gte?: Maybe<number>;

  nama_list?: Maybe<string>;
  /** All values that are not equal to given value. */
  nama_list_not?: Maybe<string>;
  /** All values that are contained in given list. */
  nama_list_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  nama_list_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  nama_list_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  nama_list_lte?: Maybe<string>;
  /** All values greater than the given value. */
  nama_list_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  nama_list_gte?: Maybe<string>;
  /** All values containing the given string. */
  nama_list_contains?: Maybe<string>;
  /** All values not containing the given string. */
  nama_list_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  nama_list_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  nama_list_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  nama_list_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  nama_list_not_ends_with?: Maybe<string>;

  mtvocabs_every?: Maybe<MtVocabWhereInput>;

  mtvocabs_some?: Maybe<MtVocabWhereInput>;

  mtvocabs_none?: Maybe<MtVocabWhereInput>;
}

export interface NetworkWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<NetworkWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<NetworkWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<NetworkWhereInput[]>;

  address?: Maybe<string>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<string>;
  /** All values that are contained in given list. */
  address_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  address_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<string>;
  /** All values greater than the given value. */
  address_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<string>;
  /** All values containing the given string. */
  address_contains?: Maybe<string>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<string>;

  contactPerson?: Maybe<string>;
  /** All values that are not equal to given value. */
  contactPerson_not?: Maybe<string>;
  /** All values that are contained in given list. */
  contactPerson_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  contactPerson_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  contactPerson_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  contactPerson_lte?: Maybe<string>;
  /** All values greater than the given value. */
  contactPerson_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  contactPerson_gte?: Maybe<string>;
  /** All values containing the given string. */
  contactPerson_contains?: Maybe<string>;
  /** All values not containing the given string. */
  contactPerson_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  contactPerson_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  contactPerson_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  contactPerson_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  contactPerson_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  noContact?: Maybe<string>;
  /** All values that are not equal to given value. */
  noContact_not?: Maybe<string>;
  /** All values that are contained in given list. */
  noContact_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  noContact_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  noContact_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  noContact_lte?: Maybe<string>;
  /** All values greater than the given value. */
  noContact_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  noContact_gte?: Maybe<string>;
  /** All values containing the given string. */
  noContact_contains?: Maybe<string>;
  /** All values not containing the given string. */
  noContact_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  noContact_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  noContact_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  noContact_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  noContact_not_ends_with?: Maybe<string>;

  provinceId?: Maybe<number>;
  /** All values that are not equal to given value. */
  provinceId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  provinceId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  provinceId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  provinceId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  provinceId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  provinceId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  provinceId_gte?: Maybe<number>;

  regencyId?: Maybe<number>;
  /** All values that are not equal to given value. */
  regencyId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  regencyId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  regencyId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  regencyId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  regencyId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  regencyId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  regencyId_gte?: Maybe<number>;

  type?: Maybe<string>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<string>;
  /** All values that are contained in given list. */
  type_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  type_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  type_lte?: Maybe<string>;
  /** All values greater than the given value. */
  type_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  type_gte?: Maybe<string>;
  /** All values containing the given string. */
  type_contains?: Maybe<string>;
  /** All values not containing the given string. */
  type_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  type_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  type_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  type_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  type_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface RoleWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<RoleWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<RoleWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<RoleWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  type?: Maybe<number>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<number>;
  /** All values that are contained in given list. */
  type_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  type_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  type_lte?: Maybe<number>;
  /** All values greater than the given value. */
  type_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  type_gte?: Maybe<number>;

  userId?: Maybe<number>;
  /** All values that are not equal to given value. */
  userId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  userId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  userId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  userId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  userId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  userId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  userId_gte?: Maybe<number>;
}

export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserWhereInput[]>;

  address?: Maybe<string>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<string>;
  /** All values that are contained in given list. */
  address_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  address_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<string>;
  /** All values greater than the given value. */
  address_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<string>;
  /** All values containing the given string. */
  address_contains?: Maybe<string>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<string>;

  avatar?: Maybe<string>;
  /** All values that are not equal to given value. */
  avatar_not?: Maybe<string>;
  /** All values that are contained in given list. */
  avatar_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  avatar_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  avatar_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  avatar_lte?: Maybe<string>;
  /** All values greater than the given value. */
  avatar_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  avatar_gte?: Maybe<string>;
  /** All values containing the given string. */
  avatar_contains?: Maybe<string>;
  /** All values not containing the given string. */
  avatar_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  avatar_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  avatar_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  avatar_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  avatar_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  deletedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  deletedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  deletedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  deletedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  deletedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  deletedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  deletedAt_gte?: Maybe<DateTime>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  password?: Maybe<string>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<string>;
  /** All values that are contained in given list. */
  password_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  password_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<string>;
  /** All values greater than the given value. */
  password_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<string>;
  /** All values containing the given string. */
  password_contains?: Maybe<string>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<string>;

  phone?: Maybe<string>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<string>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  phone_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<string>;
  /** All values greater than the given value. */
  phone_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<string>;
  /** All values containing the given string. */
  phone_contains?: Maybe<string>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<string>;

  position?: Maybe<string>;
  /** All values that are not equal to given value. */
  position_not?: Maybe<string>;
  /** All values that are contained in given list. */
  position_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  position_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  position_lte?: Maybe<string>;
  /** All values greater than the given value. */
  position_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  position_gte?: Maybe<string>;
  /** All values containing the given string. */
  position_contains?: Maybe<string>;
  /** All values not containing the given string. */
  position_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  position_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  position_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  position_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  position_not_ends_with?: Maybe<string>;

  rememberToken?: Maybe<string>;
  /** All values that are not equal to given value. */
  rememberToken_not?: Maybe<string>;
  /** All values that are contained in given list. */
  rememberToken_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  rememberToken_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  rememberToken_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  rememberToken_lte?: Maybe<string>;
  /** All values greater than the given value. */
  rememberToken_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  rememberToken_gte?: Maybe<string>;
  /** All values containing the given string. */
  rememberToken_contains?: Maybe<string>;
  /** All values not containing the given string. */
  rememberToken_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  rememberToken_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  rememberToken_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  rememberToken_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  rememberToken_not_ends_with?: Maybe<string>;

  roles?: Maybe<string>;
  /** All values that are not equal to given value. */
  roles_not?: Maybe<string>;
  /** All values that are contained in given list. */
  roles_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  roles_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  roles_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  roles_lte?: Maybe<string>;
  /** All values greater than the given value. */
  roles_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  roles_gte?: Maybe<string>;
  /** All values containing the given string. */
  roles_contains?: Maybe<string>;
  /** All values not containing the given string. */
  roles_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  roles_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  roles_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  roles_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  roles_not_ends_with?: Maybe<string>;

  status?: Maybe<string>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<string>;
  /** All values that are contained in given list. */
  status_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  status_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<string>;
  /** All values greater than the given value. */
  status_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<string>;
  /** All values containing the given string. */
  status_contains?: Maybe<string>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  username?: Maybe<string>;
  /** All values that are not equal to given value. */
  username_not?: Maybe<string>;
  /** All values that are contained in given list. */
  username_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  username_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  username_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  username_lte?: Maybe<string>;
  /** All values greater than the given value. */
  username_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  username_gte?: Maybe<string>;
  /** All values containing the given string. */
  username_contains?: Maybe<string>;
  /** All values not containing the given string. */
  username_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  username_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  username_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  username_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  username_not_ends_with?: Maybe<string>;

  profile?: Maybe<UserProfileWhereInput>;
}

export interface UserProfileWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserProfileWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserProfileWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserProfileWhereInput[]>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  noContact?: Maybe<string>;
  /** All values that are not equal to given value. */
  noContact_not?: Maybe<string>;
  /** All values that are contained in given list. */
  noContact_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  noContact_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  noContact_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  noContact_lte?: Maybe<string>;
  /** All values greater than the given value. */
  noContact_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  noContact_gte?: Maybe<string>;
  /** All values containing the given string. */
  noContact_contains?: Maybe<string>;
  /** All values not containing the given string. */
  noContact_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  noContact_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  noContact_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  noContact_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  noContact_not_ends_with?: Maybe<string>;

  occupation?: Maybe<string>;
  /** All values that are not equal to given value. */
  occupation_not?: Maybe<string>;
  /** All values that are contained in given list. */
  occupation_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  occupation_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  occupation_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  occupation_lte?: Maybe<string>;
  /** All values greater than the given value. */
  occupation_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  occupation_gte?: Maybe<string>;
  /** All values containing the given string. */
  occupation_contains?: Maybe<string>;
  /** All values not containing the given string. */
  occupation_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  occupation_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  occupation_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  occupation_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  occupation_not_ends_with?: Maybe<string>;

  photo?: Maybe<string>;
  /** All values that are not equal to given value. */
  photo_not?: Maybe<string>;
  /** All values that are contained in given list. */
  photo_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  photo_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  photo_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  photo_lte?: Maybe<string>;
  /** All values greater than the given value. */
  photo_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  photo_gte?: Maybe<string>;
  /** All values containing the given string. */
  photo_contains?: Maybe<string>;
  /** All values not containing the given string. */
  photo_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  photo_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  photo_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  photo_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  photo_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  userId?: Maybe<UserWhereInput>;
}

export interface ApplicationWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseClassificationWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseConsultationWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseConsultationAppWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseDocumentWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseIssueWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseKorbanWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CasePelakuWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CasePkWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseProgressWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseProgressActivityWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseProgressActivityLitWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseProgressActivityNonlitWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseTransferReferralWhereUniqueInput {
  id?: Maybe<number>;
}

export interface CaseViolatedRightWhereUniqueInput {
  id?: Maybe<number>;
}

export interface ClientWhereUniqueInput {
  id?: Maybe<number>;
}

export interface DaftarPengacaraWhereUniqueInput {
  ID?: Maybe<number>;
}

export interface DataDictWhereUniqueInput {
  fieldNumber?: Maybe<string>;
}

export interface DataDictLocalWhereUniqueInput {
  id?: Maybe<number>;
}

export interface LogRequestWhereUniqueInput {
  ID?: Maybe<number>;
}

export interface LogRequestAppWhereUniqueInput {
  id?: Maybe<number>;
}

export interface MtVocabWhereUniqueInput {
  KODE?: Maybe<string>;
}

export interface MtVocabGroupWhereUniqueInput {
  kode_list?: Maybe<number>;
}

export interface NetworkWhereUniqueInput {
  id?: Maybe<number>;
}

export interface PersonWhereUniqueInput {
  id?: Maybe<number>;
}

export interface PersonDocumentWhereUniqueInput {
  id?: Maybe<number>;
}

export interface RoleWhereUniqueInput {
  id?: Maybe<number>;
}

export interface UserWhereUniqueInput {
  id?: Maybe<number>;
}

export interface UserProfileWhereUniqueInput {
  id?: Maybe<number>;
}

export interface ApplicationCreateInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData: boolean;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi: boolean;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;

  wakilId: PersonCreateOneWithoutApplicationsInput;

  case: CaseCreateOneWithoutApplicationInput;

  clients?: Maybe<ClientCreateManyWithoutApplicationIdInput>;
}

export interface PersonCreateOneWithoutApplicationsInput {
  create?: Maybe<PersonCreateWithoutApplicationsInput>;

  connect?: Maybe<PersonWhereUniqueInput>;
}

export interface PersonCreateWithoutApplicationsInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas: boolean;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama: boolean;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;

  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
}

export interface CaseKorbanCreateManyWithoutPersonIdInput {
  create?: Maybe<CaseKorbanCreateWithoutPersonIdInput[]>;

  connect?: Maybe<CaseKorbanWhereUniqueInput[]>;
}

export interface CaseKorbanCreateWithoutPersonIdInput {
  caseId: CaseCreateOneWithoutKorbansInput;
}

export interface CaseCreateOneWithoutKorbansInput {
  create?: Maybe<CaseCreateWithoutKorbansInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutKorbansInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface ApplicationCreateOneWithoutCaseInput {
  create?: Maybe<ApplicationCreateWithoutCaseInput>;

  connect?: Maybe<ApplicationWhereUniqueInput>;
}

export interface ApplicationCreateWithoutCaseInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData: boolean;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi: boolean;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;

  wakilId: PersonCreateOneWithoutApplicationsInput;

  clients?: Maybe<ClientCreateManyWithoutApplicationIdInput>;
}

export interface ClientCreateManyWithoutApplicationIdInput {
  create?: Maybe<ClientCreateWithoutApplicationIdInput[]>;

  connect?: Maybe<ClientWhereUniqueInput[]>;
}

export interface ClientCreateWithoutApplicationIdInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm: boolean;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;

  personId: PersonCreateOneWithoutClientsInput;

  caseid: CaseCreateOneWithoutClientsInput;
}

export interface PersonCreateOneWithoutClientsInput {
  create?: Maybe<PersonCreateWithoutClientsInput>;

  connect?: Maybe<PersonWhereUniqueInput>;
}

export interface PersonCreateWithoutClientsInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas: boolean;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama: boolean;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>;

  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;

  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
}

export interface ApplicationCreateManyWithoutWakilIdInput {
  create?: Maybe<ApplicationCreateWithoutWakilIdInput[]>;

  connect?: Maybe<ApplicationWhereUniqueInput[]>;
}

export interface ApplicationCreateWithoutWakilIdInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData: boolean;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi: boolean;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;

  case: CaseCreateOneWithoutApplicationInput;

  clients?: Maybe<ClientCreateManyWithoutApplicationIdInput>;
}

export interface CaseCreateOneWithoutApplicationInput {
  create?: Maybe<CaseCreateWithoutApplicationInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutApplicationInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface ClientCreateManyWithoutCaseidInput {
  create?: Maybe<ClientCreateWithoutCaseidInput[]>;

  connect?: Maybe<ClientWhereUniqueInput[]>;
}

export interface ClientCreateWithoutCaseidInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm: boolean;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;

  applicationId: ApplicationCreateOneWithoutClientsInput;

  personId: PersonCreateOneWithoutClientsInput;
}

export interface ApplicationCreateOneWithoutClientsInput {
  create?: Maybe<ApplicationCreateWithoutClientsInput>;

  connect?: Maybe<ApplicationWhereUniqueInput>;
}

export interface ApplicationCreateWithoutClientsInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData: boolean;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi: boolean;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;

  wakilId: PersonCreateOneWithoutApplicationsInput;

  case: CaseCreateOneWithoutApplicationInput;
}

export interface CaseClassificationCreateManyWithoutCaseIdInput {
  create?: Maybe<CaseClassificationCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseClassificationWhereUniqueInput[]>;
}

export interface CaseClassificationCreateWithoutCaseIdInput {
  kodeMt?: Maybe<string>;
}

export interface CaseConsultationCreateManyWithoutCaseIdInput {
  create?: Maybe<CaseConsultationCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseConsultationWhereUniqueInput[]>;
}

export interface CaseConsultationCreateWithoutCaseIdInput {
  appKonsul?: Maybe<string>;

  createdBy?: Maybe<string>;

  isiKonsul?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  ppKonsul?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  apps?: Maybe<CaseConsultationAppCreateManyWithoutCaseConsultationIdInput>;
}

export interface CaseConsultationAppCreateManyWithoutCaseConsultationIdInput {
  create?: Maybe<CaseConsultationAppCreateWithoutCaseConsultationIdInput[]>;

  connect?: Maybe<CaseConsultationAppWhereUniqueInput[]>;
}

export interface CaseConsultationAppCreateWithoutCaseConsultationIdInput {
  appConsultation?: Maybe<string>;
}

export interface CaseDocumentCreateManyWithoutCaseIdInput {
  create?: Maybe<CaseDocumentCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseDocumentWhereUniqueInput[]>;
}

export interface CaseDocumentCreateWithoutCaseIdInput {
  createdBy?: Maybe<string>;

  jenisDokumen?: Maybe<string>;

  judulDokumen?: Maybe<string>;

  keterangan?: Maybe<string>;

  link?: Maybe<string>;

  updatedBy?: Maybe<string>;
}

export interface CaseIssueCreateManyWithoutCaseIdInput {
  create?: Maybe<CaseIssueCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseIssueWhereUniqueInput[]>;
}

export interface CaseIssueCreateWithoutCaseIdInput {
  kodeMt?: Maybe<string>;
}

export interface CaseKorbanCreateManyWithoutCaseIdInput {
  create?: Maybe<CaseKorbanCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseKorbanWhereUniqueInput[]>;
}

export interface CaseKorbanCreateWithoutCaseIdInput {
  personId?: Maybe<PersonCreateOneWithoutCasekorbansInput>;
}

export interface PersonCreateOneWithoutCasekorbansInput {
  create?: Maybe<PersonCreateWithoutCasekorbansInput>;

  connect?: Maybe<PersonWhereUniqueInput>;
}

export interface PersonCreateWithoutCasekorbansInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas: boolean;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama: boolean;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>;

  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
}

export interface CasePelakuCreateManyWithoutPersonIdInput {
  create?: Maybe<CasePelakuCreateWithoutPersonIdInput[]>;

  connect?: Maybe<CasePelakuWhereUniqueInput[]>;
}

export interface CasePelakuCreateWithoutPersonIdInput {
  caseId: CaseCreateOneWithoutPelakusInput;
}

export interface CaseCreateOneWithoutPelakusInput {
  create?: Maybe<CaseCreateWithoutPelakusInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutPelakusInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CasePkCreateManyWithoutCaseIdInput {
  create?: Maybe<CasePkCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CasePkWhereUniqueInput[]>;
}

export interface CasePkCreateWithoutCaseIdInput {
  createdBy?: Maybe<string>;

  didampingi: boolean;

  legalMemo?: Maybe<string>;

  notulaRapat?: Maybe<string>;

  ppPendamping?: Maybe<number>;

  statusAlasanTdk?: Maybe<string>;

  tglRapat?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseProgressCreateManyWithoutCaseIdInput {
  create?: Maybe<CaseProgressCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseProgressWhereUniqueInput[]>;
}

export interface CaseProgressCreateWithoutCaseIdInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  jenisPeradilan?: Maybe<string>;

  updatedBy?: Maybe<string>;
}

export interface CaseProgressActivityCreateManyWithoutCaseIdInput {
  create?: Maybe<CaseProgressActivityCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseProgressActivityWhereUniqueInput[]>;
}

export interface CaseProgressActivityCreateWithoutCaseIdInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  activitieslit?: Maybe<CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput>;

  activitiesnonlit?: Maybe<CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput>;
}

export interface CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput {
  create?: Maybe<CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>;

  connect?: Maybe<CaseProgressActivityLitWhereUniqueInput[]>;
}

export interface CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput {
  kodeMt?: Maybe<string>;
}

export interface CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput {
  create?: Maybe<CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput[]>;

  connect?: Maybe<CaseProgressActivityNonlitWhereUniqueInput[]>;
}

export interface CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput {
  kodeMt?: Maybe<string>;
}

export interface CaseTransferReferralCreateManyWithoutCaseIdInput {
  create?: Maybe<CaseTransferReferralCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseTransferReferralWhereUniqueInput[]>;
}

export interface CaseTransferReferralCreateWithoutCaseIdInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  document?: Maybe<string>;

  jenisTransferReferral?: Maybe<string>;

  networkId?: Maybe<number>;

  tglTransferReferral?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseViolatedRightCreateManyWithoutCaseIdInput {
  create?: Maybe<CaseViolatedRightCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseViolatedRightWhereUniqueInput[]>;
}

export interface CaseViolatedRightCreateWithoutCaseIdInput {
  kodeMt?: Maybe<string>;
}

export interface ClientCreateManyWithoutPersonIdInput {
  create?: Maybe<ClientCreateWithoutPersonIdInput[]>;

  connect?: Maybe<ClientWhereUniqueInput[]>;
}

export interface ClientCreateWithoutPersonIdInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm: boolean;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;

  applicationId: ApplicationCreateOneWithoutClientsInput;

  caseid: CaseCreateOneWithoutClientsInput;
}

export interface CaseCreateOneWithoutClientsInput {
  create?: Maybe<CaseCreateWithoutClientsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutClientsInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CasePelakuCreateManyWithoutCaseIdInput {
  create?: Maybe<CasePelakuCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CasePelakuWhereUniqueInput[]>;
}

export interface CasePelakuCreateWithoutCaseIdInput {
  personId?: Maybe<PersonCreateOneWithoutCasepelakusInput>;
}

export interface PersonCreateOneWithoutCasepelakusInput {
  create?: Maybe<PersonCreateWithoutCasepelakusInput>;

  connect?: Maybe<PersonWhereUniqueInput>;
}

export interface PersonCreateWithoutCasepelakusInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas: boolean;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama: boolean;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>;

  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
}

export interface PersonDocumentCreateManyWithoutPersonIdInput {
  create?: Maybe<PersonDocumentCreateWithoutPersonIdInput[]>;

  connect?: Maybe<PersonDocumentWhereUniqueInput[]>;
}

export interface PersonDocumentCreateWithoutPersonIdInput {
  deletedAt?: Maybe<DateTime>;

  file?: Maybe<number>;

  title?: Maybe<number>;
}

export interface CaseCreateInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CaseClassificationCreateInput {
  kodeMt?: Maybe<string>;

  caseId: CaseCreateOneWithoutClassificationsInput;
}

export interface CaseCreateOneWithoutClassificationsInput {
  create?: Maybe<CaseCreateWithoutClassificationsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutClassificationsInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CaseConsultationCreateInput {
  appKonsul?: Maybe<string>;

  createdBy?: Maybe<string>;

  isiKonsul?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  ppKonsul?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId: CaseCreateOneWithoutConsultationsInput;

  apps?: Maybe<CaseConsultationAppCreateManyWithoutCaseConsultationIdInput>;
}

export interface CaseCreateOneWithoutConsultationsInput {
  create?: Maybe<CaseCreateWithoutConsultationsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutConsultationsInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CaseConsultationAppCreateInput {
  appConsultation?: Maybe<string>;

  caseConsultationId: CaseConsultationCreateOneWithoutAppsInput;
}

export interface CaseConsultationCreateOneWithoutAppsInput {
  create?: Maybe<CaseConsultationCreateWithoutAppsInput>;

  connect?: Maybe<CaseConsultationWhereUniqueInput>;
}

export interface CaseConsultationCreateWithoutAppsInput {
  appKonsul?: Maybe<string>;

  createdBy?: Maybe<string>;

  isiKonsul?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  ppKonsul?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId: CaseCreateOneWithoutConsultationsInput;
}

export interface CaseDocumentCreateInput {
  createdBy?: Maybe<string>;

  jenisDokumen?: Maybe<string>;

  judulDokumen?: Maybe<string>;

  keterangan?: Maybe<string>;

  link?: Maybe<string>;

  updatedBy?: Maybe<string>;

  caseId: CaseCreateOneWithoutDocumentsInput;
}

export interface CaseCreateOneWithoutDocumentsInput {
  create?: Maybe<CaseCreateWithoutDocumentsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutDocumentsInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CaseIssueCreateInput {
  kodeMt?: Maybe<string>;

  caseId: CaseCreateOneWithoutIssuesInput;
}

export interface CaseCreateOneWithoutIssuesInput {
  create?: Maybe<CaseCreateWithoutIssuesInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutIssuesInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CaseKorbanCreateInput {
  caseId: CaseCreateOneWithoutKorbansInput;

  personId?: Maybe<PersonCreateOneWithoutCasekorbansInput>;
}

export interface CasePelakuCreateInput {
  caseId: CaseCreateOneWithoutPelakusInput;

  personId?: Maybe<PersonCreateOneWithoutCasepelakusInput>;
}

export interface CasePkCreateInput {
  createdBy?: Maybe<string>;

  didampingi: boolean;

  legalMemo?: Maybe<string>;

  notulaRapat?: Maybe<string>;

  ppPendamping?: Maybe<number>;

  statusAlasanTdk?: Maybe<string>;

  tglRapat?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId: CaseCreateOneWithoutPksInput;
}

export interface CaseCreateOneWithoutPksInput {
  create?: Maybe<CaseCreateWithoutPksInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutPksInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CaseProgressCreateInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  jenisPeradilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  caseId: CaseCreateOneWithoutProgressesInput;
}

export interface CaseCreateOneWithoutProgressesInput {
  create?: Maybe<CaseCreateWithoutProgressesInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutProgressesInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CaseProgressActivityCreateInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId: CaseCreateOneWithoutActivitiesInput;

  activitieslit?: Maybe<CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput>;

  activitiesnonlit?: Maybe<CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput>;
}

export interface CaseCreateOneWithoutActivitiesInput {
  create?: Maybe<CaseCreateWithoutActivitiesInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutActivitiesInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CaseProgressActivityLitCreateInput {
  kodeMt?: Maybe<string>;

  caseProgressActivityId: CaseProgressActivityCreateOneWithoutActivitieslitInput;
}

export interface CaseProgressActivityCreateOneWithoutActivitieslitInput {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitieslitInput>;

  connect?: Maybe<CaseProgressActivityWhereUniqueInput>;
}

export interface CaseProgressActivityCreateWithoutActivitieslitInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId: CaseCreateOneWithoutActivitiesInput;

  activitiesnonlit?: Maybe<CaseProgressActivityNonlitCreateManyWithoutCaseProgressActivityIdInput>;
}

export interface CaseProgressActivityNonlitCreateInput {
  kodeMt?: Maybe<string>;

  caseProgressActivityId: CaseProgressActivityCreateOneWithoutActivitiesnonlitInput;
}

export interface CaseProgressActivityCreateOneWithoutActivitiesnonlitInput {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitiesnonlitInput>;

  connect?: Maybe<CaseProgressActivityWhereUniqueInput>;
}

export interface CaseProgressActivityCreateWithoutActivitiesnonlitInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId: CaseCreateOneWithoutActivitiesInput;

  activitieslit?: Maybe<CaseProgressActivityLitCreateManyWithoutCaseProgressActivityIdInput>;
}

export interface CaseTransferReferralCreateInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  document?: Maybe<string>;

  jenisTransferReferral?: Maybe<string>;

  networkId?: Maybe<number>;

  tglTransferReferral?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId: CaseCreateOneWithoutTransferreferralsInput;
}

export interface CaseCreateOneWithoutTransferreferralsInput {
  create?: Maybe<CaseCreateWithoutTransferreferralsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutTransferreferralsInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightCreateManyWithoutCaseIdInput>;
}

export interface CaseViolatedRightCreateInput {
  kodeMt?: Maybe<string>;

  caseId: CaseCreateOneWithoutViolatedrightsInput;
}

export interface CaseCreateOneWithoutViolatedrightsInput {
  create?: Maybe<CaseCreateWithoutViolatedrightsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;
}

export interface CaseCreateWithoutViolatedrightsInput {
  applicationId?: Maybe<number>;

  caseClosed: boolean;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak: boolean;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk: boolean;

  unlockTransfer: boolean;

  updatedBy?: Maybe<string>;

  application: ApplicationCreateOneWithoutCaseInput;

  clients?: Maybe<ClientCreateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationCreateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationCreateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentCreateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueCreateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanCreateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuCreateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkCreateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressCreateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityCreateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralCreateManyWithoutCaseIdInput>;
}

export interface ClientCreateInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm: boolean;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;

  applicationId: ApplicationCreateOneWithoutClientsInput;

  personId: PersonCreateOneWithoutClientsInput;

  caseid: CaseCreateOneWithoutClientsInput;
}

export interface DaftarPengacaraCreateInput {
  jabatan?: Maybe<string>;

  namaLengkap?: Maybe<string>;

  sembunyikan: boolean;
}

export interface DataDictCreateInput {
  fieldNumber?: Maybe<string>;

  dataType?: Maybe<string>;

  entity?: Maybe<string>;

  fieldName?: Maybe<string>;

  fieldType?: Maybe<string>;

  isRepeat?: Maybe<string>;

  linkField?: Maybe<string>;

  linkTable?: Maybe<string>;

  listCode?: Maybe<string>;

  required?: Maybe<string>;

  validation?: Maybe<string>;

  visibleSelectQuery?: Maybe<string>;

  locals?: Maybe<DataDictLocalCreateManyWithoutFieldNumberInput>;
}

export interface DataDictLocalCreateManyWithoutFieldNumberInput {
  create?: Maybe<DataDictLocalCreateWithoutFieldNumberInput[]>;

  connect?: Maybe<DataDictLocalWhereUniqueInput[]>;
}

export interface DataDictLocalCreateWithoutFieldNumberInput {
  label?: Maybe<string>;

  lang?: Maybe<string>;
}

export interface DataDictLocalCreateInput {
  label?: Maybe<string>;

  lang?: Maybe<string>;

  fieldNumber: DataDictCreateOneWithoutLocalsInput;
}

export interface DataDictCreateOneWithoutLocalsInput {
  create?: Maybe<DataDictCreateWithoutLocalsInput>;

  connect?: Maybe<DataDictWhereUniqueInput>;
}

export interface DataDictCreateWithoutLocalsInput {
  fieldNumber?: Maybe<string>;

  dataType?: Maybe<string>;

  entity?: Maybe<string>;

  fieldName?: Maybe<string>;

  fieldType?: Maybe<string>;

  isRepeat?: Maybe<string>;

  linkField?: Maybe<string>;

  linkTable?: Maybe<string>;

  listCode?: Maybe<string>;

  required?: Maybe<string>;

  validation?: Maybe<string>;

  visibleSelectQuery?: Maybe<string>;
}

export interface LogRequestCreateInput {
  caseId?: Maybe<number>;

  isiRequest?: Maybe<string>;

  jenisRequest?: Maybe<string>;

  networkId?: Maybe<number>;

  personId?: Maybe<number>;

  pp?: Maybe<number>;

  requestBy?: Maybe<number>;

  requestTo?: Maybe<number>;

  tanggapanRequest?: Maybe<string>;

  tglExpired?: Maybe<DateTime>;

  tglRequest?: Maybe<DateTime>;

  tglRespon?: Maybe<DateTime>;
}

export interface LogRequestAppCreateInput {
  appConsultation?: Maybe<string>;

  logRequestId?: Maybe<number>;
}

export interface MtVocabCreateInput {
  KODE?: Maybe<string>;

  kode_induk?: Maybe<string>;

  level?: Maybe<number>;

  sembunyikan: boolean;

  teks?: Maybe<string>;

  urutan?: Maybe<number>;

  kode_list?: Maybe<MtVocabGroupCreateOneWithoutMtvocabsInput>;
}

export interface MtVocabGroupCreateOneWithoutMtvocabsInput {
  create?: Maybe<MtVocabGroupCreateWithoutMtvocabsInput>;

  connect?: Maybe<MtVocabGroupWhereUniqueInput>;
}

export interface MtVocabGroupCreateWithoutMtvocabsInput {
  nama_list?: Maybe<string>;
}

export interface MtVocabGroupCreateInput {
  nama_list?: Maybe<string>;

  mtvocabs?: Maybe<MtVocabCreateManyWithoutKodeListInput>;
}

export interface MtVocabCreateManyWithoutKodeListInput {
  create?: Maybe<MtVocabCreateWithoutKodeListInput[]>;

  connect?: Maybe<MtVocabWhereUniqueInput[]>;
}

export interface MtVocabCreateWithoutKodeListInput {
  KODE?: Maybe<string>;

  kode_induk?: Maybe<string>;

  level?: Maybe<number>;

  sembunyikan: boolean;

  teks?: Maybe<string>;

  urutan?: Maybe<number>;
}

export interface NetworkCreateInput {
  address?: Maybe<string>;

  contactPerson?: Maybe<string>;

  email?: Maybe<string>;

  name?: Maybe<string>;

  noContact?: Maybe<string>;

  provinceId?: Maybe<number>;

  regencyId?: Maybe<number>;

  type?: Maybe<string>;
}

export interface PersonCreateInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas: boolean;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama: boolean;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>;

  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;

  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentCreateManyWithoutPersonIdInput>;
}

export interface PersonDocumentCreateInput {
  deletedAt?: Maybe<DateTime>;

  file?: Maybe<number>;

  title?: Maybe<number>;

  personId: PersonCreateOneWithoutDocumentsInput;
}

export interface PersonCreateOneWithoutDocumentsInput {
  create?: Maybe<PersonCreateWithoutDocumentsInput>;

  connect?: Maybe<PersonWhereUniqueInput>;
}

export interface PersonCreateWithoutDocumentsInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas: boolean;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama: boolean;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationCreateManyWithoutWakilIdInput>;

  casekorbans?: Maybe<CaseKorbanCreateManyWithoutPersonIdInput>;

  casepelakus?: Maybe<CasePelakuCreateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientCreateManyWithoutPersonIdInput>;
}

export interface RoleCreateInput {
  type?: Maybe<number>;

  userId?: Maybe<number>;
}

export interface UserCreateInput {
  address?: Maybe<string>;

  avatar?: Maybe<string>;

  deletedAt?: Maybe<DateTime>;

  email?: Maybe<string>;

  name?: Maybe<string>;

  password?: Maybe<string>;

  phone?: Maybe<string>;

  position?: Maybe<string>;

  rememberToken?: Maybe<string>;

  roles?: Maybe<string>;

  status?: Maybe<string>;

  username?: Maybe<string>;

  profile: UserProfileCreateOneWithoutUserIdInput;
}

export interface UserProfileCreateOneWithoutUserIdInput {
  create?: Maybe<UserProfileCreateWithoutUserIdInput>;

  connect?: Maybe<UserProfileWhereUniqueInput>;
}

export interface UserProfileCreateWithoutUserIdInput {
  noContact?: Maybe<string>;

  occupation?: Maybe<string>;

  photo?: Maybe<string>;
}

export interface UserProfileCreateInput {
  noContact?: Maybe<string>;

  occupation?: Maybe<string>;

  photo?: Maybe<string>;

  userId: UserCreateOneWithoutProfileInput;
}

export interface UserCreateOneWithoutProfileInput {
  create?: Maybe<UserCreateWithoutProfileInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutProfileInput {
  address?: Maybe<string>;

  avatar?: Maybe<string>;

  deletedAt?: Maybe<DateTime>;

  email?: Maybe<string>;

  name?: Maybe<string>;

  password?: Maybe<string>;

  phone?: Maybe<string>;

  position?: Maybe<string>;

  rememberToken?: Maybe<string>;

  roles?: Maybe<string>;

  status?: Maybe<string>;

  username?: Maybe<string>;
}

export interface ApplicationUpdateInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData?: Maybe<boolean>;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi?: Maybe<boolean>;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;

  wakilId?: Maybe<PersonUpdateOneRequiredWithoutApplicationsInput>;

  case?: Maybe<CaseUpdateOneRequiredWithoutApplicationInput>;

  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>;
}

export interface PersonUpdateOneRequiredWithoutApplicationsInput {
  create?: Maybe<PersonCreateWithoutApplicationsInput>;

  connect?: Maybe<PersonWhereUniqueInput>;

  update?: Maybe<PersonUpdateWithoutApplicationsDataInput>;

  upsert?: Maybe<PersonUpsertWithoutApplicationsInput>;
}

export interface PersonUpdateWithoutApplicationsDataInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas?: Maybe<boolean>;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama?: Maybe<boolean>;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;

  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
}

export interface CaseKorbanUpdateManyWithoutPersonIdInput {
  create?: Maybe<CaseKorbanCreateWithoutPersonIdInput[]>;

  connect?: Maybe<CaseKorbanWhereUniqueInput[]>;

  set?: Maybe<CaseKorbanWhereUniqueInput[]>;

  disconnect?: Maybe<CaseKorbanWhereUniqueInput[]>;

  delete?: Maybe<CaseKorbanWhereUniqueInput[]>;

  update?: Maybe<CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput[]>;

  deleteMany?: Maybe<CaseKorbanScalarWhereInput[]>;

  upsert?: Maybe<CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput[]>;
}

export interface CaseKorbanUpdateWithWhereUniqueWithoutPersonIdInput {
  where: CaseKorbanWhereUniqueInput;

  data: CaseKorbanUpdateWithoutPersonIdDataInput;
}

export interface CaseKorbanUpdateWithoutPersonIdDataInput {
  caseId?: Maybe<CaseUpdateOneRequiredWithoutKorbansInput>;
}

export interface CaseUpdateOneRequiredWithoutKorbansInput {
  create?: Maybe<CaseCreateWithoutKorbansInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutKorbansDataInput>;

  upsert?: Maybe<CaseUpsertWithoutKorbansInput>;
}

export interface CaseUpdateWithoutKorbansDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface ApplicationUpdateOneRequiredWithoutCaseInput {
  create?: Maybe<ApplicationCreateWithoutCaseInput>;

  connect?: Maybe<ApplicationWhereUniqueInput>;

  update?: Maybe<ApplicationUpdateWithoutCaseDataInput>;

  upsert?: Maybe<ApplicationUpsertWithoutCaseInput>;
}

export interface ApplicationUpdateWithoutCaseDataInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData?: Maybe<boolean>;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi?: Maybe<boolean>;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;

  wakilId?: Maybe<PersonUpdateOneRequiredWithoutApplicationsInput>;

  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>;
}

export interface ClientUpdateManyWithoutApplicationIdInput {
  create?: Maybe<ClientCreateWithoutApplicationIdInput[]>;

  connect?: Maybe<ClientWhereUniqueInput[]>;

  set?: Maybe<ClientWhereUniqueInput[]>;

  disconnect?: Maybe<ClientWhereUniqueInput[]>;

  delete?: Maybe<ClientWhereUniqueInput[]>;

  update?: Maybe<ClientUpdateWithWhereUniqueWithoutApplicationIdInput[]>;

  updateMany?: Maybe<ClientUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<ClientScalarWhereInput[]>;

  upsert?: Maybe<ClientUpsertWithWhereUniqueWithoutApplicationIdInput[]>;
}

export interface ClientUpdateWithWhereUniqueWithoutApplicationIdInput {
  where: ClientWhereUniqueInput;

  data: ClientUpdateWithoutApplicationIdDataInput;
}

export interface ClientUpdateWithoutApplicationIdDataInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm?: Maybe<boolean>;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;

  personId?: Maybe<PersonUpdateOneRequiredWithoutClientsInput>;

  caseid?: Maybe<CaseUpdateOneRequiredWithoutClientsInput>;
}

export interface PersonUpdateOneRequiredWithoutClientsInput {
  create?: Maybe<PersonCreateWithoutClientsInput>;

  connect?: Maybe<PersonWhereUniqueInput>;

  update?: Maybe<PersonUpdateWithoutClientsDataInput>;

  upsert?: Maybe<PersonUpsertWithoutClientsInput>;
}

export interface PersonUpdateWithoutClientsDataInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas?: Maybe<boolean>;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama?: Maybe<boolean>;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;

  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;

  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
}

export interface ApplicationUpdateManyWithoutWakilIdInput {
  create?: Maybe<ApplicationCreateWithoutWakilIdInput[]>;

  connect?: Maybe<ApplicationWhereUniqueInput[]>;

  set?: Maybe<ApplicationWhereUniqueInput[]>;

  disconnect?: Maybe<ApplicationWhereUniqueInput[]>;

  delete?: Maybe<ApplicationWhereUniqueInput[]>;

  update?: Maybe<ApplicationUpdateWithWhereUniqueWithoutWakilIdInput[]>;

  updateMany?: Maybe<ApplicationUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<ApplicationScalarWhereInput[]>;

  upsert?: Maybe<ApplicationUpsertWithWhereUniqueWithoutWakilIdInput[]>;
}

export interface ApplicationUpdateWithWhereUniqueWithoutWakilIdInput {
  where: ApplicationWhereUniqueInput;

  data: ApplicationUpdateWithoutWakilIdDataInput;
}

export interface ApplicationUpdateWithoutWakilIdDataInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData?: Maybe<boolean>;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi?: Maybe<boolean>;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;

  case?: Maybe<CaseUpdateOneRequiredWithoutApplicationInput>;

  clients?: Maybe<ClientUpdateManyWithoutApplicationIdInput>;
}

export interface CaseUpdateOneRequiredWithoutApplicationInput {
  create?: Maybe<CaseCreateWithoutApplicationInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutApplicationDataInput>;

  upsert?: Maybe<CaseUpsertWithoutApplicationInput>;
}

export interface CaseUpdateWithoutApplicationDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface ClientUpdateManyWithoutCaseidInput {
  create?: Maybe<ClientCreateWithoutCaseidInput[]>;

  connect?: Maybe<ClientWhereUniqueInput[]>;

  set?: Maybe<ClientWhereUniqueInput[]>;

  disconnect?: Maybe<ClientWhereUniqueInput[]>;

  delete?: Maybe<ClientWhereUniqueInput[]>;

  update?: Maybe<ClientUpdateWithWhereUniqueWithoutCaseidInput[]>;

  updateMany?: Maybe<ClientUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<ClientScalarWhereInput[]>;

  upsert?: Maybe<ClientUpsertWithWhereUniqueWithoutCaseidInput[]>;
}

export interface ClientUpdateWithWhereUniqueWithoutCaseidInput {
  where: ClientWhereUniqueInput;

  data: ClientUpdateWithoutCaseidDataInput;
}

export interface ClientUpdateWithoutCaseidDataInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm?: Maybe<boolean>;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;

  applicationId?: Maybe<ApplicationUpdateOneRequiredWithoutClientsInput>;

  personId?: Maybe<PersonUpdateOneRequiredWithoutClientsInput>;
}

export interface ApplicationUpdateOneRequiredWithoutClientsInput {
  create?: Maybe<ApplicationCreateWithoutClientsInput>;

  connect?: Maybe<ApplicationWhereUniqueInput>;

  update?: Maybe<ApplicationUpdateWithoutClientsDataInput>;

  upsert?: Maybe<ApplicationUpsertWithoutClientsInput>;
}

export interface ApplicationUpdateWithoutClientsDataInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData?: Maybe<boolean>;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi?: Maybe<boolean>;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;

  wakilId?: Maybe<PersonUpdateOneRequiredWithoutApplicationsInput>;

  case?: Maybe<CaseUpdateOneRequiredWithoutApplicationInput>;
}

export interface ApplicationUpsertWithoutClientsInput {
  update: ApplicationUpdateWithoutClientsDataInput;

  create: ApplicationCreateWithoutClientsInput;
}

export interface ClientUpdateManyWithWhereNestedInput {
  where: ClientScalarWhereInput;

  data: ClientUpdateManyDataInput;
}

export interface ClientScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ClientScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ClientScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ClientScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  alamatLokasi?: Maybe<string>;
  /** All values that are not equal to given value. */
  alamatLokasi_not?: Maybe<string>;
  /** All values that are contained in given list. */
  alamatLokasi_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  alamatLokasi_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  alamatLokasi_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  alamatLokasi_lte?: Maybe<string>;
  /** All values greater than the given value. */
  alamatLokasi_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  alamatLokasi_gte?: Maybe<string>;
  /** All values containing the given string. */
  alamatLokasi_contains?: Maybe<string>;
  /** All values not containing the given string. */
  alamatLokasi_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  alamatLokasi_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  alamatLokasi_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  alamatLokasi_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  alamatLokasi_not_ends_with?: Maybe<string>;

  asetGedung?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetGedung_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetGedung_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetGedung_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetGedung_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetGedung_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetGedung_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetGedung_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetGedung_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetGedung_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetGedung_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetGedung_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetGedung_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetGedung_not_ends_with?: Maybe<string>;

  asetKios?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetKios_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetKios_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetKios_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetKios_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetKios_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetKios_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetKios_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetKios_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetKios_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetKios_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetKios_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetKios_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetKios_not_ends_with?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetLahanGarapan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetLahanGarapan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetLahanGarapan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetLahanGarapan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetLahanGarapan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetLahanGarapan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetLahanGarapan_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetLahanGarapan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetLahanGarapan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetLahanGarapan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetLahanGarapan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetLahanGarapan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetLahanGarapan_not_ends_with?: Maybe<string>;

  asetLapak?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetLapak_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetLapak_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetLapak_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetLapak_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetLapak_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetLapak_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetLapak_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetLapak_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetLapak_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetLapak_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetLapak_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetLapak_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetLapak_not_ends_with?: Maybe<string>;

  asetMobil?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetMobil_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetMobil_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetMobil_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetMobil_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetMobil_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetMobil_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetMobil_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetMobil_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetMobil_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetMobil_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetMobil_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetMobil_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetMobil_not_ends_with?: Maybe<string>;

  asetMotor?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetMotor_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetMotor_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetMotor_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetMotor_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetMotor_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetMotor_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetMotor_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetMotor_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetMotor_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetMotor_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetMotor_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetMotor_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetMotor_not_ends_with?: Maybe<string>;

  asetRumah?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetRumah_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetRumah_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetRumah_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetRumah_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetRumah_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetRumah_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetRumah_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetRumah_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetRumah_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetRumah_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetRumah_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetRumah_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetRumah_not_ends_with?: Maybe<string>;

  asetTanah?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetTanah_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetTanah_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetTanah_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetTanah_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetTanah_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetTanah_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetTanah_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetTanah_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetTanah_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetTanah_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetTanah_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetTanah_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetTanah_not_ends_with?: Maybe<string>;

  asetToko?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetToko_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetToko_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetToko_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetToko_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetToko_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetToko_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetToko_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetToko_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetToko_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetToko_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetToko_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetToko_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetToko_not_ends_with?: Maybe<string>;

  asetWarung?: Maybe<string>;
  /** All values that are not equal to given value. */
  asetWarung_not?: Maybe<string>;
  /** All values that are contained in given list. */
  asetWarung_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  asetWarung_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  asetWarung_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  asetWarung_lte?: Maybe<string>;
  /** All values greater than the given value. */
  asetWarung_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  asetWarung_gte?: Maybe<string>;
  /** All values containing the given string. */
  asetWarung_contains?: Maybe<string>;
  /** All values not containing the given string. */
  asetWarung_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  asetWarung_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  asetWarung_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  asetWarung_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  asetWarung_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  pendapatan?: Maybe<string>;
  /** All values that are not equal to given value. */
  pendapatan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  pendapatan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  pendapatan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  pendapatan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  pendapatan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  pendapatan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  pendapatan_gte?: Maybe<string>;
  /** All values containing the given string. */
  pendapatan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  pendapatan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  pendapatan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  pendapatan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  pendapatan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  pendapatan_not_ends_with?: Maybe<string>;

  sktm?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  sktm_not?: Maybe<boolean>;

  sktmUpload?: Maybe<string>;
  /** All values that are not equal to given value. */
  sktmUpload_not?: Maybe<string>;
  /** All values that are contained in given list. */
  sktmUpload_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  sktmUpload_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  sktmUpload_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  sktmUpload_lte?: Maybe<string>;
  /** All values greater than the given value. */
  sktmUpload_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  sktmUpload_gte?: Maybe<string>;
  /** All values containing the given string. */
  sktmUpload_contains?: Maybe<string>;
  /** All values not containing the given string. */
  sktmUpload_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  sktmUpload_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  sktmUpload_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  sktmUpload_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  sktmUpload_not_ends_with?: Maybe<string>;

  stmKeterangan?: Maybe<string>;
  /** All values that are not equal to given value. */
  stmKeterangan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  stmKeterangan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  stmKeterangan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  stmKeterangan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  stmKeterangan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  stmKeterangan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  stmKeterangan_gte?: Maybe<string>;
  /** All values containing the given string. */
  stmKeterangan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  stmKeterangan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  stmKeterangan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  stmKeterangan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  stmKeterangan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  stmKeterangan_not_ends_with?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;
  /** All values that are not equal to given value. */
  tanggunganAnak_not?: Maybe<number>;
  /** All values that are contained in given list. */
  tanggunganAnak_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  tanggunganAnak_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  tanggunganAnak_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  tanggunganAnak_lte?: Maybe<number>;
  /** All values greater than the given value. */
  tanggunganAnak_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  tanggunganAnak_gte?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;
  /** All values that are not equal to given value. */
  tanggunganFamili_not?: Maybe<number>;
  /** All values that are contained in given list. */
  tanggunganFamili_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  tanggunganFamili_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  tanggunganFamili_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  tanggunganFamili_lte?: Maybe<number>;
  /** All values greater than the given value. */
  tanggunganFamili_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  tanggunganFamili_gte?: Maybe<number>;

  tanggunganLain?: Maybe<number>;
  /** All values that are not equal to given value. */
  tanggunganLain_not?: Maybe<number>;
  /** All values that are contained in given list. */
  tanggunganLain_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  tanggunganLain_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  tanggunganLain_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  tanggunganLain_lte?: Maybe<number>;
  /** All values greater than the given value. */
  tanggunganLain_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  tanggunganLain_gte?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;
  /** All values that are not equal to given value. */
  tanggunganPasangan_not?: Maybe<number>;
  /** All values that are contained in given list. */
  tanggunganPasangan_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  tanggunganPasangan_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  tanggunganPasangan_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  tanggunganPasangan_lte?: Maybe<number>;
  /** All values greater than the given value. */
  tanggunganPasangan_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  tanggunganPasangan_gte?: Maybe<number>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;
  /** All values that are not equal to given value. */
  usiaSaatKlien_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usiaSaatKlien_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usiaSaatKlien_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usiaSaatKlien_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usiaSaatKlien_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usiaSaatKlien_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usiaSaatKlien_gte?: Maybe<number>;
}

export interface ClientUpdateManyDataInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm?: Maybe<boolean>;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;
}

export interface ClientUpsertWithWhereUniqueWithoutCaseidInput {
  where: ClientWhereUniqueInput;

  update: ClientUpdateWithoutCaseidDataInput;

  create: ClientCreateWithoutCaseidInput;
}

export interface CaseClassificationUpdateManyWithoutCaseIdInput {
  create?: Maybe<CaseClassificationCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseClassificationWhereUniqueInput[]>;

  set?: Maybe<CaseClassificationWhereUniqueInput[]>;

  disconnect?: Maybe<CaseClassificationWhereUniqueInput[]>;

  delete?: Maybe<CaseClassificationWhereUniqueInput[]>;

  update?: Maybe<CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  updateMany?: Maybe<CaseClassificationUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseClassificationScalarWhereInput[]>;

  upsert?: Maybe<CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CaseClassificationUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CaseClassificationWhereUniqueInput;

  data: CaseClassificationUpdateWithoutCaseIdDataInput;
}

export interface CaseClassificationUpdateWithoutCaseIdDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseClassificationUpdateManyWithWhereNestedInput {
  where: CaseClassificationScalarWhereInput;

  data: CaseClassificationUpdateManyDataInput;
}

export interface CaseClassificationScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseClassificationScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseClassificationScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseClassificationScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;
}

export interface CaseClassificationUpdateManyDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CaseClassificationWhereUniqueInput;

  update: CaseClassificationUpdateWithoutCaseIdDataInput;

  create: CaseClassificationCreateWithoutCaseIdInput;
}

export interface CaseConsultationUpdateManyWithoutCaseIdInput {
  create?: Maybe<CaseConsultationCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseConsultationWhereUniqueInput[]>;

  set?: Maybe<CaseConsultationWhereUniqueInput[]>;

  disconnect?: Maybe<CaseConsultationWhereUniqueInput[]>;

  delete?: Maybe<CaseConsultationWhereUniqueInput[]>;

  update?: Maybe<CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  updateMany?: Maybe<CaseConsultationUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseConsultationScalarWhereInput[]>;

  upsert?: Maybe<CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CaseConsultationUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CaseConsultationWhereUniqueInput;

  data: CaseConsultationUpdateWithoutCaseIdDataInput;
}

export interface CaseConsultationUpdateWithoutCaseIdDataInput {
  appKonsul?: Maybe<string>;

  createdBy?: Maybe<string>;

  isiKonsul?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  ppKonsul?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  apps?: Maybe<CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput>;
}

export interface CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput {
  create?: Maybe<CaseConsultationAppCreateWithoutCaseConsultationIdInput[]>;

  connect?: Maybe<CaseConsultationAppWhereUniqueInput[]>;

  set?: Maybe<CaseConsultationAppWhereUniqueInput[]>;

  disconnect?: Maybe<CaseConsultationAppWhereUniqueInput[]>;

  delete?: Maybe<CaseConsultationAppWhereUniqueInput[]>;

  update?: Maybe<CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput[]>;

  updateMany?: Maybe<CaseConsultationAppUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseConsultationAppScalarWhereInput[]>;

  upsert?: Maybe<CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput[]>;
}

export interface CaseConsultationAppUpdateWithWhereUniqueWithoutCaseConsultationIdInput {
  where: CaseConsultationAppWhereUniqueInput;

  data: CaseConsultationAppUpdateWithoutCaseConsultationIdDataInput;
}

export interface CaseConsultationAppUpdateWithoutCaseConsultationIdDataInput {
  appConsultation?: Maybe<string>;
}

export interface CaseConsultationAppUpdateManyWithWhereNestedInput {
  where: CaseConsultationAppScalarWhereInput;

  data: CaseConsultationAppUpdateManyDataInput;
}

export interface CaseConsultationAppScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseConsultationAppScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseConsultationAppScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseConsultationAppScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  appConsultation?: Maybe<string>;
  /** All values that are not equal to given value. */
  appConsultation_not?: Maybe<string>;
  /** All values that are contained in given list. */
  appConsultation_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  appConsultation_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  appConsultation_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  appConsultation_lte?: Maybe<string>;
  /** All values greater than the given value. */
  appConsultation_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  appConsultation_gte?: Maybe<string>;
  /** All values containing the given string. */
  appConsultation_contains?: Maybe<string>;
  /** All values not containing the given string. */
  appConsultation_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  appConsultation_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  appConsultation_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  appConsultation_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  appConsultation_not_ends_with?: Maybe<string>;
}

export interface CaseConsultationAppUpdateManyDataInput {
  appConsultation?: Maybe<string>;
}

export interface CaseConsultationAppUpsertWithWhereUniqueWithoutCaseConsultationIdInput {
  where: CaseConsultationAppWhereUniqueInput;

  update: CaseConsultationAppUpdateWithoutCaseConsultationIdDataInput;

  create: CaseConsultationAppCreateWithoutCaseConsultationIdInput;
}

export interface CaseConsultationUpdateManyWithWhereNestedInput {
  where: CaseConsultationScalarWhereInput;

  data: CaseConsultationUpdateManyDataInput;
}

export interface CaseConsultationScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseConsultationScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseConsultationScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseConsultationScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  appKonsul?: Maybe<string>;
  /** All values that are not equal to given value. */
  appKonsul_not?: Maybe<string>;
  /** All values that are contained in given list. */
  appKonsul_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  appKonsul_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  appKonsul_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  appKonsul_lte?: Maybe<string>;
  /** All values greater than the given value. */
  appKonsul_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  appKonsul_gte?: Maybe<string>;
  /** All values containing the given string. */
  appKonsul_contains?: Maybe<string>;
  /** All values not containing the given string. */
  appKonsul_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  appKonsul_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  appKonsul_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  appKonsul_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  appKonsul_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  isiKonsul?: Maybe<string>;
  /** All values that are not equal to given value. */
  isiKonsul_not?: Maybe<string>;
  /** All values that are contained in given list. */
  isiKonsul_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  isiKonsul_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  isiKonsul_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  isiKonsul_lte?: Maybe<string>;
  /** All values greater than the given value. */
  isiKonsul_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  isiKonsul_gte?: Maybe<string>;
  /** All values containing the given string. */
  isiKonsul_contains?: Maybe<string>;
  /** All values not containing the given string. */
  isiKonsul_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  isiKonsul_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  isiKonsul_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  isiKonsul_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  isiKonsul_not_ends_with?: Maybe<string>;

  judulAktifitas?: Maybe<string>;
  /** All values that are not equal to given value. */
  judulAktifitas_not?: Maybe<string>;
  /** All values that are contained in given list. */
  judulAktifitas_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  judulAktifitas_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  judulAktifitas_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  judulAktifitas_lte?: Maybe<string>;
  /** All values greater than the given value. */
  judulAktifitas_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  judulAktifitas_gte?: Maybe<string>;
  /** All values containing the given string. */
  judulAktifitas_contains?: Maybe<string>;
  /** All values not containing the given string. */
  judulAktifitas_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  judulAktifitas_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  judulAktifitas_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  judulAktifitas_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  judulAktifitas_not_ends_with?: Maybe<string>;

  ppKonsul?: Maybe<string>;
  /** All values that are not equal to given value. */
  ppKonsul_not?: Maybe<string>;
  /** All values that are contained in given list. */
  ppKonsul_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  ppKonsul_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  ppKonsul_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  ppKonsul_lte?: Maybe<string>;
  /** All values greater than the given value. */
  ppKonsul_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  ppKonsul_gte?: Maybe<string>;
  /** All values containing the given string. */
  ppKonsul_contains?: Maybe<string>;
  /** All values not containing the given string. */
  ppKonsul_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  ppKonsul_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  ppKonsul_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  ppKonsul_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  ppKonsul_not_ends_with?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglKonsul_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglKonsul_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglKonsul_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglKonsul_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglKonsul_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglKonsul_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglKonsul_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;
}

export interface CaseConsultationUpdateManyDataInput {
  appKonsul?: Maybe<string>;

  createdBy?: Maybe<string>;

  isiKonsul?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  ppKonsul?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseConsultationUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CaseConsultationWhereUniqueInput;

  update: CaseConsultationUpdateWithoutCaseIdDataInput;

  create: CaseConsultationCreateWithoutCaseIdInput;
}

export interface CaseDocumentUpdateManyWithoutCaseIdInput {
  create?: Maybe<CaseDocumentCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseDocumentWhereUniqueInput[]>;

  set?: Maybe<CaseDocumentWhereUniqueInput[]>;

  disconnect?: Maybe<CaseDocumentWhereUniqueInput[]>;

  delete?: Maybe<CaseDocumentWhereUniqueInput[]>;

  update?: Maybe<CaseDocumentUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  updateMany?: Maybe<CaseDocumentUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseDocumentScalarWhereInput[]>;

  upsert?: Maybe<CaseDocumentUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CaseDocumentUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CaseDocumentWhereUniqueInput;

  data: CaseDocumentUpdateWithoutCaseIdDataInput;
}

export interface CaseDocumentUpdateWithoutCaseIdDataInput {
  createdBy?: Maybe<string>;

  jenisDokumen?: Maybe<string>;

  judulDokumen?: Maybe<string>;

  keterangan?: Maybe<string>;

  link?: Maybe<string>;

  updatedBy?: Maybe<string>;
}

export interface CaseDocumentUpdateManyWithWhereNestedInput {
  where: CaseDocumentScalarWhereInput;

  data: CaseDocumentUpdateManyDataInput;
}

export interface CaseDocumentScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseDocumentScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseDocumentScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseDocumentScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  jenisDokumen?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisDokumen_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisDokumen_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisDokumen_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisDokumen_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisDokumen_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisDokumen_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisDokumen_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisDokumen_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisDokumen_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisDokumen_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisDokumen_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisDokumen_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisDokumen_not_ends_with?: Maybe<string>;

  judulDokumen?: Maybe<string>;
  /** All values that are not equal to given value. */
  judulDokumen_not?: Maybe<string>;
  /** All values that are contained in given list. */
  judulDokumen_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  judulDokumen_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  judulDokumen_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  judulDokumen_lte?: Maybe<string>;
  /** All values greater than the given value. */
  judulDokumen_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  judulDokumen_gte?: Maybe<string>;
  /** All values containing the given string. */
  judulDokumen_contains?: Maybe<string>;
  /** All values not containing the given string. */
  judulDokumen_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  judulDokumen_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  judulDokumen_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  judulDokumen_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  judulDokumen_not_ends_with?: Maybe<string>;

  keterangan?: Maybe<string>;
  /** All values that are not equal to given value. */
  keterangan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  keterangan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  keterangan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  keterangan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  keterangan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  keterangan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  keterangan_gte?: Maybe<string>;
  /** All values containing the given string. */
  keterangan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  keterangan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  keterangan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  keterangan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  keterangan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  keterangan_not_ends_with?: Maybe<string>;

  link?: Maybe<string>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<string>;
  /** All values that are contained in given list. */
  link_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  link_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  link_lte?: Maybe<string>;
  /** All values greater than the given value. */
  link_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  link_gte?: Maybe<string>;
  /** All values containing the given string. */
  link_contains?: Maybe<string>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  link_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;
}

export interface CaseDocumentUpdateManyDataInput {
  createdBy?: Maybe<string>;

  jenisDokumen?: Maybe<string>;

  judulDokumen?: Maybe<string>;

  keterangan?: Maybe<string>;

  link?: Maybe<string>;

  updatedBy?: Maybe<string>;
}

export interface CaseDocumentUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CaseDocumentWhereUniqueInput;

  update: CaseDocumentUpdateWithoutCaseIdDataInput;

  create: CaseDocumentCreateWithoutCaseIdInput;
}

export interface CaseIssueUpdateManyWithoutCaseIdInput {
  create?: Maybe<CaseIssueCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseIssueWhereUniqueInput[]>;

  set?: Maybe<CaseIssueWhereUniqueInput[]>;

  disconnect?: Maybe<CaseIssueWhereUniqueInput[]>;

  delete?: Maybe<CaseIssueWhereUniqueInput[]>;

  update?: Maybe<CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  updateMany?: Maybe<CaseIssueUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseIssueScalarWhereInput[]>;

  upsert?: Maybe<CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CaseIssueUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CaseIssueWhereUniqueInput;

  data: CaseIssueUpdateWithoutCaseIdDataInput;
}

export interface CaseIssueUpdateWithoutCaseIdDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseIssueUpdateManyWithWhereNestedInput {
  where: CaseIssueScalarWhereInput;

  data: CaseIssueUpdateManyDataInput;
}

export interface CaseIssueScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseIssueScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseIssueScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseIssueScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;
}

export interface CaseIssueUpdateManyDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseIssueUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CaseIssueWhereUniqueInput;

  update: CaseIssueUpdateWithoutCaseIdDataInput;

  create: CaseIssueCreateWithoutCaseIdInput;
}

export interface CaseKorbanUpdateManyWithoutCaseIdInput {
  create?: Maybe<CaseKorbanCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseKorbanWhereUniqueInput[]>;

  set?: Maybe<CaseKorbanWhereUniqueInput[]>;

  disconnect?: Maybe<CaseKorbanWhereUniqueInput[]>;

  delete?: Maybe<CaseKorbanWhereUniqueInput[]>;

  update?: Maybe<CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  deleteMany?: Maybe<CaseKorbanScalarWhereInput[]>;

  upsert?: Maybe<CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CaseKorbanUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CaseKorbanWhereUniqueInput;

  data: CaseKorbanUpdateWithoutCaseIdDataInput;
}

export interface CaseKorbanUpdateWithoutCaseIdDataInput {
  personId?: Maybe<PersonUpdateOneWithoutCasekorbansInput>;
}

export interface PersonUpdateOneWithoutCasekorbansInput {
  create?: Maybe<PersonCreateWithoutCasekorbansInput>;

  connect?: Maybe<PersonWhereUniqueInput>;

  disconnect?: Maybe<boolean>;

  delete?: Maybe<boolean>;

  update?: Maybe<PersonUpdateWithoutCasekorbansDataInput>;

  upsert?: Maybe<PersonUpsertWithoutCasekorbansInput>;
}

export interface PersonUpdateWithoutCasekorbansDataInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas?: Maybe<boolean>;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama?: Maybe<boolean>;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;

  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
}

export interface CasePelakuUpdateManyWithoutPersonIdInput {
  create?: Maybe<CasePelakuCreateWithoutPersonIdInput[]>;

  connect?: Maybe<CasePelakuWhereUniqueInput[]>;

  set?: Maybe<CasePelakuWhereUniqueInput[]>;

  disconnect?: Maybe<CasePelakuWhereUniqueInput[]>;

  delete?: Maybe<CasePelakuWhereUniqueInput[]>;

  update?: Maybe<CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput[]>;

  deleteMany?: Maybe<CasePelakuScalarWhereInput[]>;

  upsert?: Maybe<CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput[]>;
}

export interface CasePelakuUpdateWithWhereUniqueWithoutPersonIdInput {
  where: CasePelakuWhereUniqueInput;

  data: CasePelakuUpdateWithoutPersonIdDataInput;
}

export interface CasePelakuUpdateWithoutPersonIdDataInput {
  caseId?: Maybe<CaseUpdateOneRequiredWithoutPelakusInput>;
}

export interface CaseUpdateOneRequiredWithoutPelakusInput {
  create?: Maybe<CaseCreateWithoutPelakusInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutPelakusDataInput>;

  upsert?: Maybe<CaseUpsertWithoutPelakusInput>;
}

export interface CaseUpdateWithoutPelakusDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CasePkUpdateManyWithoutCaseIdInput {
  create?: Maybe<CasePkCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CasePkWhereUniqueInput[]>;

  set?: Maybe<CasePkWhereUniqueInput[]>;

  disconnect?: Maybe<CasePkWhereUniqueInput[]>;

  delete?: Maybe<CasePkWhereUniqueInput[]>;

  update?: Maybe<CasePkUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  updateMany?: Maybe<CasePkUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CasePkScalarWhereInput[]>;

  upsert?: Maybe<CasePkUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CasePkUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CasePkWhereUniqueInput;

  data: CasePkUpdateWithoutCaseIdDataInput;
}

export interface CasePkUpdateWithoutCaseIdDataInput {
  createdBy?: Maybe<string>;

  didampingi?: Maybe<boolean>;

  legalMemo?: Maybe<string>;

  notulaRapat?: Maybe<string>;

  ppPendamping?: Maybe<number>;

  statusAlasanTdk?: Maybe<string>;

  tglRapat?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CasePkUpdateManyWithWhereNestedInput {
  where: CasePkScalarWhereInput;

  data: CasePkUpdateManyDataInput;
}

export interface CasePkScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CasePkScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CasePkScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CasePkScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  didampingi?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  didampingi_not?: Maybe<boolean>;

  legalMemo?: Maybe<string>;
  /** All values that are not equal to given value. */
  legalMemo_not?: Maybe<string>;
  /** All values that are contained in given list. */
  legalMemo_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  legalMemo_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  legalMemo_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  legalMemo_lte?: Maybe<string>;
  /** All values greater than the given value. */
  legalMemo_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  legalMemo_gte?: Maybe<string>;
  /** All values containing the given string. */
  legalMemo_contains?: Maybe<string>;
  /** All values not containing the given string. */
  legalMemo_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  legalMemo_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  legalMemo_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  legalMemo_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  legalMemo_not_ends_with?: Maybe<string>;

  notulaRapat?: Maybe<string>;
  /** All values that are not equal to given value. */
  notulaRapat_not?: Maybe<string>;
  /** All values that are contained in given list. */
  notulaRapat_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  notulaRapat_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  notulaRapat_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  notulaRapat_lte?: Maybe<string>;
  /** All values greater than the given value. */
  notulaRapat_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  notulaRapat_gte?: Maybe<string>;
  /** All values containing the given string. */
  notulaRapat_contains?: Maybe<string>;
  /** All values not containing the given string. */
  notulaRapat_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  notulaRapat_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  notulaRapat_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  notulaRapat_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  notulaRapat_not_ends_with?: Maybe<string>;

  ppPendamping?: Maybe<number>;
  /** All values that are not equal to given value. */
  ppPendamping_not?: Maybe<number>;
  /** All values that are contained in given list. */
  ppPendamping_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  ppPendamping_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  ppPendamping_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  ppPendamping_lte?: Maybe<number>;
  /** All values greater than the given value. */
  ppPendamping_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  ppPendamping_gte?: Maybe<number>;

  statusAlasanTdk?: Maybe<string>;
  /** All values that are not equal to given value. */
  statusAlasanTdk_not?: Maybe<string>;
  /** All values that are contained in given list. */
  statusAlasanTdk_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  statusAlasanTdk_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  statusAlasanTdk_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  statusAlasanTdk_lte?: Maybe<string>;
  /** All values greater than the given value. */
  statusAlasanTdk_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  statusAlasanTdk_gte?: Maybe<string>;
  /** All values containing the given string. */
  statusAlasanTdk_contains?: Maybe<string>;
  /** All values not containing the given string. */
  statusAlasanTdk_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  statusAlasanTdk_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  statusAlasanTdk_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  statusAlasanTdk_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  statusAlasanTdk_not_ends_with?: Maybe<string>;

  tglRapat?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglRapat_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglRapat_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglRapat_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglRapat_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglRapat_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglRapat_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglRapat_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;
}

export interface CasePkUpdateManyDataInput {
  createdBy?: Maybe<string>;

  didampingi?: Maybe<boolean>;

  legalMemo?: Maybe<string>;

  notulaRapat?: Maybe<string>;

  ppPendamping?: Maybe<number>;

  statusAlasanTdk?: Maybe<string>;

  tglRapat?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CasePkUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CasePkWhereUniqueInput;

  update: CasePkUpdateWithoutCaseIdDataInput;

  create: CasePkCreateWithoutCaseIdInput;
}

export interface CaseProgressUpdateManyWithoutCaseIdInput {
  create?: Maybe<CaseProgressCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseProgressWhereUniqueInput[]>;

  set?: Maybe<CaseProgressWhereUniqueInput[]>;

  disconnect?: Maybe<CaseProgressWhereUniqueInput[]>;

  delete?: Maybe<CaseProgressWhereUniqueInput[]>;

  update?: Maybe<CaseProgressUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  updateMany?: Maybe<CaseProgressUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseProgressScalarWhereInput[]>;

  upsert?: Maybe<CaseProgressUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CaseProgressUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CaseProgressWhereUniqueInput;

  data: CaseProgressUpdateWithoutCaseIdDataInput;
}

export interface CaseProgressUpdateWithoutCaseIdDataInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  jenisPeradilan?: Maybe<string>;

  updatedBy?: Maybe<string>;
}

export interface CaseProgressUpdateManyWithWhereNestedInput {
  where: CaseProgressScalarWhereInput;

  data: CaseProgressUpdateManyDataInput;
}

export interface CaseProgressScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  catatan?: Maybe<string>;
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  catatan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  catatan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  catatan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<string>;
  /** All values containing the given string. */
  catatan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  jenisPeradilan?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisPeradilan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisPeradilan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisPeradilan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisPeradilan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisPeradilan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisPeradilan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisPeradilan_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisPeradilan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisPeradilan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisPeradilan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisPeradilan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisPeradilan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisPeradilan_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;
}

export interface CaseProgressUpdateManyDataInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  jenisPeradilan?: Maybe<string>;

  updatedBy?: Maybe<string>;
}

export interface CaseProgressUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CaseProgressWhereUniqueInput;

  update: CaseProgressUpdateWithoutCaseIdDataInput;

  create: CaseProgressCreateWithoutCaseIdInput;
}

export interface CaseProgressActivityUpdateManyWithoutCaseIdInput {
  create?: Maybe<CaseProgressActivityCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseProgressActivityWhereUniqueInput[]>;

  set?: Maybe<CaseProgressActivityWhereUniqueInput[]>;

  disconnect?: Maybe<CaseProgressActivityWhereUniqueInput[]>;

  delete?: Maybe<CaseProgressActivityWhereUniqueInput[]>;

  update?: Maybe<CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  updateMany?: Maybe<CaseProgressActivityUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseProgressActivityScalarWhereInput[]>;

  upsert?: Maybe<CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CaseProgressActivityUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CaseProgressActivityWhereUniqueInput;

  data: CaseProgressActivityUpdateWithoutCaseIdDataInput;
}

export interface CaseProgressActivityUpdateWithoutCaseIdDataInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  activitieslit?: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>;

  activitiesnonlit?: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>;
}

export interface CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput {
  create?: Maybe<CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[]>;

  connect?: Maybe<CaseProgressActivityLitWhereUniqueInput[]>;

  set?: Maybe<CaseProgressActivityLitWhereUniqueInput[]>;

  disconnect?: Maybe<CaseProgressActivityLitWhereUniqueInput[]>;

  delete?: Maybe<CaseProgressActivityLitWhereUniqueInput[]>;

  update?: Maybe<CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput[]>;

  updateMany?: Maybe<CaseProgressActivityLitUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseProgressActivityLitScalarWhereInput[]>;

  upsert?: Maybe<CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput[]>;
}

export interface CaseProgressActivityLitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput {
  where: CaseProgressActivityLitWhereUniqueInput;

  data: CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdDataInput;
}

export interface CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseProgressActivityLitUpdateManyWithWhereNestedInput {
  where: CaseProgressActivityLitScalarWhereInput;

  data: CaseProgressActivityLitUpdateManyDataInput;
}

export interface CaseProgressActivityLitScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressActivityLitScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressActivityLitScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressActivityLitScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;
}

export interface CaseProgressActivityLitUpdateManyDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseProgressActivityLitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput {
  where: CaseProgressActivityLitWhereUniqueInput;

  update: CaseProgressActivityLitUpdateWithoutCaseProgressActivityIdDataInput;

  create: CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput;
}

export interface CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput {
  create?: Maybe<CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput[]>;

  connect?: Maybe<CaseProgressActivityNonlitWhereUniqueInput[]>;

  set?: Maybe<CaseProgressActivityNonlitWhereUniqueInput[]>;

  disconnect?: Maybe<CaseProgressActivityNonlitWhereUniqueInput[]>;

  delete?: Maybe<CaseProgressActivityNonlitWhereUniqueInput[]>;

  update?: Maybe<CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput[]>;

  updateMany?: Maybe<CaseProgressActivityNonlitUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseProgressActivityNonlitScalarWhereInput[]>;

  upsert?: Maybe<CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput[]>;
}

export interface CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput {
  where: CaseProgressActivityNonlitWhereUniqueInput;

  data: CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdDataInput;
}

export interface CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseProgressActivityNonlitUpdateManyWithWhereNestedInput {
  where: CaseProgressActivityNonlitScalarWhereInput;

  data: CaseProgressActivityNonlitUpdateManyDataInput;
}

export interface CaseProgressActivityNonlitScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressActivityNonlitScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressActivityNonlitScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressActivityNonlitScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;
}

export interface CaseProgressActivityNonlitUpdateManyDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseProgressActivityNonlitUpsertWithWhereUniqueWithoutCaseProgressActivityIdInput {
  where: CaseProgressActivityNonlitWhereUniqueInput;

  update: CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdDataInput;

  create: CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput;
}

export interface CaseProgressActivityUpdateManyWithWhereNestedInput {
  where: CaseProgressActivityScalarWhereInput;

  data: CaseProgressActivityUpdateManyDataInput;
}

export interface CaseProgressActivityScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressActivityScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressActivityScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressActivityScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  capaian?: Maybe<string>;
  /** All values that are not equal to given value. */
  capaian_not?: Maybe<string>;
  /** All values that are contained in given list. */
  capaian_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  capaian_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  capaian_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  capaian_lte?: Maybe<string>;
  /** All values greater than the given value. */
  capaian_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  capaian_gte?: Maybe<string>;
  /** All values containing the given string. */
  capaian_contains?: Maybe<string>;
  /** All values not containing the given string. */
  capaian_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  capaian_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  capaian_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  capaian_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  capaian_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  hambatan?: Maybe<string>;
  /** All values that are not equal to given value. */
  hambatan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  hambatan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  hambatan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  hambatan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  hambatan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  hambatan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  hambatan_gte?: Maybe<string>;
  /** All values containing the given string. */
  hambatan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  hambatan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  hambatan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  hambatan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  hambatan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  hambatan_not_ends_with?: Maybe<string>;

  judulAktifitas?: Maybe<string>;
  /** All values that are not equal to given value. */
  judulAktifitas_not?: Maybe<string>;
  /** All values that are contained in given list. */
  judulAktifitas_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  judulAktifitas_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  judulAktifitas_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  judulAktifitas_lte?: Maybe<string>;
  /** All values greater than the given value. */
  judulAktifitas_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  judulAktifitas_gte?: Maybe<string>;
  /** All values containing the given string. */
  judulAktifitas_contains?: Maybe<string>;
  /** All values not containing the given string. */
  judulAktifitas_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  judulAktifitas_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  judulAktifitas_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  judulAktifitas_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  judulAktifitas_not_ends_with?: Maybe<string>;

  position?: Maybe<string>;
  /** All values that are not equal to given value. */
  position_not?: Maybe<string>;
  /** All values that are contained in given list. */
  position_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  position_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  position_lte?: Maybe<string>;
  /** All values greater than the given value. */
  position_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  position_gte?: Maybe<string>;
  /** All values containing the given string. */
  position_contains?: Maybe<string>;
  /** All values not containing the given string. */
  position_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  position_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  position_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  position_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  position_not_ends_with?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;
  /** All values that are not equal to given value. */
  rencanaStrategi_not?: Maybe<string>;
  /** All values that are contained in given list. */
  rencanaStrategi_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  rencanaStrategi_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  rencanaStrategi_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  rencanaStrategi_lte?: Maybe<string>;
  /** All values greater than the given value. */
  rencanaStrategi_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  rencanaStrategi_gte?: Maybe<string>;
  /** All values containing the given string. */
  rencanaStrategi_contains?: Maybe<string>;
  /** All values not containing the given string. */
  rencanaStrategi_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  rencanaStrategi_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  rencanaStrategi_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  rencanaStrategi_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  rencanaStrategi_not_ends_with?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;
  /** All values that are not equal to given value. */
  targetAdvokasi_not?: Maybe<string>;
  /** All values that are contained in given list. */
  targetAdvokasi_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  targetAdvokasi_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  targetAdvokasi_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  targetAdvokasi_lte?: Maybe<string>;
  /** All values greater than the given value. */
  targetAdvokasi_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  targetAdvokasi_gte?: Maybe<string>;
  /** All values containing the given string. */
  targetAdvokasi_contains?: Maybe<string>;
  /** All values not containing the given string. */
  targetAdvokasi_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  targetAdvokasi_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  targetAdvokasi_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  targetAdvokasi_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  targetAdvokasi_not_ends_with?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglAktifitas_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglAktifitas_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglAktifitas_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglAktifitas_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglAktifitas_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglAktifitas_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglAktifitas_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;
}

export interface CaseProgressActivityUpdateManyDataInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseProgressActivityUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CaseProgressActivityWhereUniqueInput;

  update: CaseProgressActivityUpdateWithoutCaseIdDataInput;

  create: CaseProgressActivityCreateWithoutCaseIdInput;
}

export interface CaseTransferReferralUpdateManyWithoutCaseIdInput {
  create?: Maybe<CaseTransferReferralCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseTransferReferralWhereUniqueInput[]>;

  set?: Maybe<CaseTransferReferralWhereUniqueInput[]>;

  disconnect?: Maybe<CaseTransferReferralWhereUniqueInput[]>;

  delete?: Maybe<CaseTransferReferralWhereUniqueInput[]>;

  update?: Maybe<CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  updateMany?: Maybe<CaseTransferReferralUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseTransferReferralScalarWhereInput[]>;

  upsert?: Maybe<CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CaseTransferReferralWhereUniqueInput;

  data: CaseTransferReferralUpdateWithoutCaseIdDataInput;
}

export interface CaseTransferReferralUpdateWithoutCaseIdDataInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  document?: Maybe<string>;

  jenisTransferReferral?: Maybe<string>;

  networkId?: Maybe<number>;

  tglTransferReferral?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseTransferReferralUpdateManyWithWhereNestedInput {
  where: CaseTransferReferralScalarWhereInput;

  data: CaseTransferReferralUpdateManyDataInput;
}

export interface CaseTransferReferralScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseTransferReferralScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseTransferReferralScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseTransferReferralScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  catatan?: Maybe<string>;
  /** All values that are not equal to given value. */
  catatan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  catatan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  catatan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  catatan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  catatan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  catatan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  catatan_gte?: Maybe<string>;
  /** All values containing the given string. */
  catatan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  catatan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  catatan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  catatan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  catatan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  catatan_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  document?: Maybe<string>;
  /** All values that are not equal to given value. */
  document_not?: Maybe<string>;
  /** All values that are contained in given list. */
  document_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  document_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  document_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  document_lte?: Maybe<string>;
  /** All values greater than the given value. */
  document_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  document_gte?: Maybe<string>;
  /** All values containing the given string. */
  document_contains?: Maybe<string>;
  /** All values not containing the given string. */
  document_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  document_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  document_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  document_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  document_not_ends_with?: Maybe<string>;

  jenisTransferReferral?: Maybe<string>;
  /** All values that are not equal to given value. */
  jenisTransferReferral_not?: Maybe<string>;
  /** All values that are contained in given list. */
  jenisTransferReferral_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  jenisTransferReferral_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  jenisTransferReferral_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  jenisTransferReferral_lte?: Maybe<string>;
  /** All values greater than the given value. */
  jenisTransferReferral_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  jenisTransferReferral_gte?: Maybe<string>;
  /** All values containing the given string. */
  jenisTransferReferral_contains?: Maybe<string>;
  /** All values not containing the given string. */
  jenisTransferReferral_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  jenisTransferReferral_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  jenisTransferReferral_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  jenisTransferReferral_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  jenisTransferReferral_not_ends_with?: Maybe<string>;

  networkId?: Maybe<number>;
  /** All values that are not equal to given value. */
  networkId_not?: Maybe<number>;
  /** All values that are contained in given list. */
  networkId_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  networkId_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  networkId_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  networkId_lte?: Maybe<number>;
  /** All values greater than the given value. */
  networkId_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  networkId_gte?: Maybe<number>;

  tglTransferReferral?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  tglTransferReferral_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  tglTransferReferral_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  tglTransferReferral_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  tglTransferReferral_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  tglTransferReferral_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  tglTransferReferral_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  tglTransferReferral_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;
}

export interface CaseTransferReferralUpdateManyDataInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  document?: Maybe<string>;

  jenisTransferReferral?: Maybe<string>;

  networkId?: Maybe<number>;

  tglTransferReferral?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CaseTransferReferralWhereUniqueInput;

  update: CaseTransferReferralUpdateWithoutCaseIdDataInput;

  create: CaseTransferReferralCreateWithoutCaseIdInput;
}

export interface CaseViolatedRightUpdateManyWithoutCaseIdInput {
  create?: Maybe<CaseViolatedRightCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CaseViolatedRightWhereUniqueInput[]>;

  set?: Maybe<CaseViolatedRightWhereUniqueInput[]>;

  disconnect?: Maybe<CaseViolatedRightWhereUniqueInput[]>;

  delete?: Maybe<CaseViolatedRightWhereUniqueInput[]>;

  update?: Maybe<CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  updateMany?: Maybe<CaseViolatedRightUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CaseViolatedRightScalarWhereInput[]>;

  upsert?: Maybe<CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CaseViolatedRightUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CaseViolatedRightWhereUniqueInput;

  data: CaseViolatedRightUpdateWithoutCaseIdDataInput;
}

export interface CaseViolatedRightUpdateWithoutCaseIdDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseViolatedRightUpdateManyWithWhereNestedInput {
  where: CaseViolatedRightScalarWhereInput;

  data: CaseViolatedRightUpdateManyDataInput;
}

export interface CaseViolatedRightScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseViolatedRightScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseViolatedRightScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseViolatedRightScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  kodeMt?: Maybe<string>;
  /** All values that are not equal to given value. */
  kodeMt_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kodeMt_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kodeMt_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kodeMt_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kodeMt_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kodeMt_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kodeMt_gte?: Maybe<string>;
  /** All values containing the given string. */
  kodeMt_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kodeMt_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kodeMt_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kodeMt_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kodeMt_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kodeMt_not_ends_with?: Maybe<string>;
}

export interface CaseViolatedRightUpdateManyDataInput {
  kodeMt?: Maybe<string>;
}

export interface CaseViolatedRightUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CaseViolatedRightWhereUniqueInput;

  update: CaseViolatedRightUpdateWithoutCaseIdDataInput;

  create: CaseViolatedRightCreateWithoutCaseIdInput;
}

export interface CaseUpsertWithoutPelakusInput {
  update: CaseUpdateWithoutPelakusDataInput;

  create: CaseCreateWithoutPelakusInput;
}

export interface CasePelakuScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CasePelakuScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CasePelakuScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CasePelakuScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;
}

export interface CasePelakuUpsertWithWhereUniqueWithoutPersonIdInput {
  where: CasePelakuWhereUniqueInput;

  update: CasePelakuUpdateWithoutPersonIdDataInput;

  create: CasePelakuCreateWithoutPersonIdInput;
}

export interface ClientUpdateManyWithoutPersonIdInput {
  create?: Maybe<ClientCreateWithoutPersonIdInput[]>;

  connect?: Maybe<ClientWhereUniqueInput[]>;

  set?: Maybe<ClientWhereUniqueInput[]>;

  disconnect?: Maybe<ClientWhereUniqueInput[]>;

  delete?: Maybe<ClientWhereUniqueInput[]>;

  update?: Maybe<ClientUpdateWithWhereUniqueWithoutPersonIdInput[]>;

  updateMany?: Maybe<ClientUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<ClientScalarWhereInput[]>;

  upsert?: Maybe<ClientUpsertWithWhereUniqueWithoutPersonIdInput[]>;
}

export interface ClientUpdateWithWhereUniqueWithoutPersonIdInput {
  where: ClientWhereUniqueInput;

  data: ClientUpdateWithoutPersonIdDataInput;
}

export interface ClientUpdateWithoutPersonIdDataInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm?: Maybe<boolean>;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;

  applicationId?: Maybe<ApplicationUpdateOneRequiredWithoutClientsInput>;

  caseid?: Maybe<CaseUpdateOneRequiredWithoutClientsInput>;
}

export interface CaseUpdateOneRequiredWithoutClientsInput {
  create?: Maybe<CaseCreateWithoutClientsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutClientsDataInput>;

  upsert?: Maybe<CaseUpsertWithoutClientsInput>;
}

export interface CaseUpdateWithoutClientsDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CasePelakuUpdateManyWithoutCaseIdInput {
  create?: Maybe<CasePelakuCreateWithoutCaseIdInput[]>;

  connect?: Maybe<CasePelakuWhereUniqueInput[]>;

  set?: Maybe<CasePelakuWhereUniqueInput[]>;

  disconnect?: Maybe<CasePelakuWhereUniqueInput[]>;

  delete?: Maybe<CasePelakuWhereUniqueInput[]>;

  update?: Maybe<CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput[]>;

  deleteMany?: Maybe<CasePelakuScalarWhereInput[]>;

  upsert?: Maybe<CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput[]>;
}

export interface CasePelakuUpdateWithWhereUniqueWithoutCaseIdInput {
  where: CasePelakuWhereUniqueInput;

  data: CasePelakuUpdateWithoutCaseIdDataInput;
}

export interface CasePelakuUpdateWithoutCaseIdDataInput {
  personId?: Maybe<PersonUpdateOneWithoutCasepelakusInput>;
}

export interface PersonUpdateOneWithoutCasepelakusInput {
  create?: Maybe<PersonCreateWithoutCasepelakusInput>;

  connect?: Maybe<PersonWhereUniqueInput>;

  disconnect?: Maybe<boolean>;

  delete?: Maybe<boolean>;

  update?: Maybe<PersonUpdateWithoutCasepelakusDataInput>;

  upsert?: Maybe<PersonUpsertWithoutCasepelakusInput>;
}

export interface PersonUpdateWithoutCasepelakusDataInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas?: Maybe<boolean>;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama?: Maybe<boolean>;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;

  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
}

export interface PersonDocumentUpdateManyWithoutPersonIdInput {
  create?: Maybe<PersonDocumentCreateWithoutPersonIdInput[]>;

  connect?: Maybe<PersonDocumentWhereUniqueInput[]>;

  set?: Maybe<PersonDocumentWhereUniqueInput[]>;

  disconnect?: Maybe<PersonDocumentWhereUniqueInput[]>;

  delete?: Maybe<PersonDocumentWhereUniqueInput[]>;

  update?: Maybe<PersonDocumentUpdateWithWhereUniqueWithoutPersonIdInput[]>;

  updateMany?: Maybe<PersonDocumentUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<PersonDocumentScalarWhereInput[]>;

  upsert?: Maybe<PersonDocumentUpsertWithWhereUniqueWithoutPersonIdInput[]>;
}

export interface PersonDocumentUpdateWithWhereUniqueWithoutPersonIdInput {
  where: PersonDocumentWhereUniqueInput;

  data: PersonDocumentUpdateWithoutPersonIdDataInput;
}

export interface PersonDocumentUpdateWithoutPersonIdDataInput {
  deletedAt?: Maybe<DateTime>;

  file?: Maybe<number>;

  title?: Maybe<number>;
}

export interface PersonDocumentUpdateManyWithWhereNestedInput {
  where: PersonDocumentScalarWhereInput;

  data: PersonDocumentUpdateManyDataInput;
}

export interface PersonDocumentScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PersonDocumentScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PersonDocumentScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PersonDocumentScalarWhereInput[]>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  deletedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  deletedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  deletedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  deletedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  deletedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  deletedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  deletedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  deletedAt_gte?: Maybe<DateTime>;

  file?: Maybe<number>;
  /** All values that are not equal to given value. */
  file_not?: Maybe<number>;
  /** All values that are contained in given list. */
  file_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  file_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  file_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  file_lte?: Maybe<number>;
  /** All values greater than the given value. */
  file_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  file_gte?: Maybe<number>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  title?: Maybe<number>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<number>;
  /** All values that are contained in given list. */
  title_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<number>;
  /** All values greater than the given value. */
  title_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<number>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface PersonDocumentUpdateManyDataInput {
  deletedAt?: Maybe<DateTime>;

  file?: Maybe<number>;

  title?: Maybe<number>;
}

export interface PersonDocumentUpsertWithWhereUniqueWithoutPersonIdInput {
  where: PersonDocumentWhereUniqueInput;

  update: PersonDocumentUpdateWithoutPersonIdDataInput;

  create: PersonDocumentCreateWithoutPersonIdInput;
}

export interface PersonUpsertWithoutCasepelakusInput {
  update: PersonUpdateWithoutCasepelakusDataInput;

  create: PersonCreateWithoutCasepelakusInput;
}

export interface CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CasePelakuWhereUniqueInput;

  update: CasePelakuUpdateWithoutCaseIdDataInput;

  create: CasePelakuCreateWithoutCaseIdInput;
}

export interface CaseUpsertWithoutClientsInput {
  update: CaseUpdateWithoutClientsDataInput;

  create: CaseCreateWithoutClientsInput;
}

export interface ClientUpsertWithWhereUniqueWithoutPersonIdInput {
  where: ClientWhereUniqueInput;

  update: ClientUpdateWithoutPersonIdDataInput;

  create: ClientCreateWithoutPersonIdInput;
}

export interface PersonUpsertWithoutCasekorbansInput {
  update: PersonUpdateWithoutCasekorbansDataInput;

  create: PersonCreateWithoutCasekorbansInput;
}

export interface CaseKorbanScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseKorbanScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseKorbanScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseKorbanScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;
}

export interface CaseKorbanUpsertWithWhereUniqueWithoutCaseIdInput {
  where: CaseKorbanWhereUniqueInput;

  update: CaseKorbanUpdateWithoutCaseIdDataInput;

  create: CaseKorbanCreateWithoutCaseIdInput;
}

export interface CaseUpsertWithoutApplicationInput {
  update: CaseUpdateWithoutApplicationDataInput;

  create: CaseCreateWithoutApplicationInput;
}

export interface ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput;

  data: ApplicationUpdateManyDataInput;
}

export interface ApplicationScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ApplicationScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ApplicationScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ApplicationScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  createdBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  createdBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  createdBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  createdBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  createdBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  createdBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  createdBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  createdBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  createdBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  createdBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  createdBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  createdBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  createdBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  createdBy_not_ends_with?: Maybe<string>;

  dudukPerara?: Maybe<string>;
  /** All values that are not equal to given value. */
  dudukPerara_not?: Maybe<string>;
  /** All values that are contained in given list. */
  dudukPerara_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  dudukPerara_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  dudukPerara_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  dudukPerara_lte?: Maybe<string>;
  /** All values greater than the given value. */
  dudukPerara_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  dudukPerara_gte?: Maybe<string>;
  /** All values containing the given string. */
  dudukPerara_contains?: Maybe<string>;
  /** All values not containing the given string. */
  dudukPerara_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  dudukPerara_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  dudukPerara_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  dudukPerara_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  dudukPerara_not_ends_with?: Maybe<string>;

  infoLbh?: Maybe<string>;
  /** All values that are not equal to given value. */
  infoLbh_not?: Maybe<string>;
  /** All values that are contained in given list. */
  infoLbh_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  infoLbh_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  infoLbh_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  infoLbh_lte?: Maybe<string>;
  /** All values greater than the given value. */
  infoLbh_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  infoLbh_gte?: Maybe<string>;
  /** All values containing the given string. */
  infoLbh_contains?: Maybe<string>;
  /** All values not containing the given string. */
  infoLbh_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  infoLbh_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  infoLbh_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  infoLbh_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  infoLbh_not_ends_with?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;
  /** All values that are not equal to given value. */
  jumlahPenerimaManfaat_not?: Maybe<number>;
  /** All values that are contained in given list. */
  jumlahPenerimaManfaat_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  jumlahPenerimaManfaat_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  jumlahPenerimaManfaat_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  jumlahPenerimaManfaat_lte?: Maybe<number>;
  /** All values greater than the given value. */
  jumlahPenerimaManfaat_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  jumlahPenerimaManfaat_gte?: Maybe<number>;

  konfirmasiData?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  konfirmasiData_not?: Maybe<boolean>;

  noReg?: Maybe<string>;
  /** All values that are not equal to given value. */
  noReg_not?: Maybe<string>;
  /** All values that are contained in given list. */
  noReg_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  noReg_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  noReg_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  noReg_lte?: Maybe<string>;
  /** All values greater than the given value. */
  noReg_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  noReg_gte?: Maybe<string>;
  /** All values containing the given string. */
  noReg_contains?: Maybe<string>;
  /** All values not containing the given string. */
  noReg_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  noReg_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  noReg_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  noReg_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  noReg_not_ends_with?: Maybe<string>;

  pernahKlien?: Maybe<string>;
  /** All values that are not equal to given value. */
  pernahKlien_not?: Maybe<string>;
  /** All values that are contained in given list. */
  pernahKlien_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  pernahKlien_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  pernahKlien_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  pernahKlien_lte?: Maybe<string>;
  /** All values greater than the given value. */
  pernahKlien_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  pernahKlien_gte?: Maybe<string>;
  /** All values containing the given string. */
  pernahKlien_contains?: Maybe<string>;
  /** All values not containing the given string. */
  pernahKlien_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  pernahKlien_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  pernahKlien_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  pernahKlien_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  pernahKlien_not_ends_with?: Maybe<string>;

  pernahPpLain?: Maybe<string>;
  /** All values that are not equal to given value. */
  pernahPpLain_not?: Maybe<string>;
  /** All values that are contained in given list. */
  pernahPpLain_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  pernahPpLain_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  pernahPpLain_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  pernahPpLain_lte?: Maybe<string>;
  /** All values greater than the given value. */
  pernahPpLain_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  pernahPpLain_gte?: Maybe<string>;
  /** All values containing the given string. */
  pernahPpLain_contains?: Maybe<string>;
  /** All values not containing the given string. */
  pernahPpLain_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  pernahPpLain_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  pernahPpLain_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  pernahPpLain_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  pernahPpLain_not_ends_with?: Maybe<string>;

  ppLain?: Maybe<string>;
  /** All values that are not equal to given value. */
  ppLain_not?: Maybe<string>;
  /** All values that are contained in given list. */
  ppLain_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  ppLain_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  ppLain_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  ppLain_lte?: Maybe<string>;
  /** All values greater than the given value. */
  ppLain_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  ppLain_gte?: Maybe<string>;
  /** All values containing the given string. */
  ppLain_contains?: Maybe<string>;
  /** All values not containing the given string. */
  ppLain_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  ppLain_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  ppLain_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  ppLain_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  ppLain_not_ends_with?: Maybe<string>;

  regDate?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  regDate_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  regDate_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  regDate_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  regDate_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  regDate_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  regDate_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  regDate_gte?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;
  /** All values that are not equal to given value. */
  relasiWakilClient_not?: Maybe<string>;
  /** All values that are contained in given list. */
  relasiWakilClient_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  relasiWakilClient_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  relasiWakilClient_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  relasiWakilClient_lte?: Maybe<string>;
  /** All values greater than the given value. */
  relasiWakilClient_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  relasiWakilClient_gte?: Maybe<string>;
  /** All values containing the given string. */
  relasiWakilClient_contains?: Maybe<string>;
  /** All values not containing the given string. */
  relasiWakilClient_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  relasiWakilClient_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  relasiWakilClient_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  relasiWakilClient_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  relasiWakilClient_not_ends_with?: Maybe<string>;

  setujuAdvokasi?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  setujuAdvokasi_not?: Maybe<boolean>;

  statusPerwakilan?: Maybe<string>;
  /** All values that are not equal to given value. */
  statusPerwakilan_not?: Maybe<string>;
  /** All values that are contained in given list. */
  statusPerwakilan_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  statusPerwakilan_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  statusPerwakilan_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  statusPerwakilan_lte?: Maybe<string>;
  /** All values greater than the given value. */
  statusPerwakilan_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  statusPerwakilan_gte?: Maybe<string>;
  /** All values containing the given string. */
  statusPerwakilan_contains?: Maybe<string>;
  /** All values not containing the given string. */
  statusPerwakilan_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  statusPerwakilan_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  statusPerwakilan_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  statusPerwakilan_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  statusPerwakilan_not_ends_with?: Maybe<string>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
  /** All values that are not equal to given value. */
  updatedBy_not?: Maybe<string>;
  /** All values that are contained in given list. */
  updatedBy_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  updatedBy_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  updatedBy_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  updatedBy_lte?: Maybe<string>;
  /** All values greater than the given value. */
  updatedBy_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  updatedBy_gte?: Maybe<string>;
  /** All values containing the given string. */
  updatedBy_contains?: Maybe<string>;
  /** All values not containing the given string. */
  updatedBy_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  updatedBy_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  updatedBy_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  updatedBy_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  updatedBy_not_ends_with?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;
  /** All values that are not equal to given value. */
  waktuPernahKlien_not?: Maybe<string>;
  /** All values that are contained in given list. */
  waktuPernahKlien_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  waktuPernahKlien_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  waktuPernahKlien_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  waktuPernahKlien_lte?: Maybe<string>;
  /** All values greater than the given value. */
  waktuPernahKlien_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  waktuPernahKlien_gte?: Maybe<string>;
  /** All values containing the given string. */
  waktuPernahKlien_contains?: Maybe<string>;
  /** All values not containing the given string. */
  waktuPernahKlien_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  waktuPernahKlien_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  waktuPernahKlien_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  waktuPernahKlien_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  waktuPernahKlien_not_ends_with?: Maybe<string>;

  whyLbh?: Maybe<string>;
  /** All values that are not equal to given value. */
  whyLbh_not?: Maybe<string>;
  /** All values that are contained in given list. */
  whyLbh_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  whyLbh_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  whyLbh_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  whyLbh_lte?: Maybe<string>;
  /** All values greater than the given value. */
  whyLbh_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  whyLbh_gte?: Maybe<string>;
  /** All values containing the given string. */
  whyLbh_contains?: Maybe<string>;
  /** All values not containing the given string. */
  whyLbh_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  whyLbh_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  whyLbh_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  whyLbh_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  whyLbh_not_ends_with?: Maybe<string>;
}

export interface ApplicationUpdateManyDataInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData?: Maybe<boolean>;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi?: Maybe<boolean>;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;
}

export interface ApplicationUpsertWithWhereUniqueWithoutWakilIdInput {
  where: ApplicationWhereUniqueInput;

  update: ApplicationUpdateWithoutWakilIdDataInput;

  create: ApplicationCreateWithoutWakilIdInput;
}

export interface PersonUpsertWithoutClientsInput {
  update: PersonUpdateWithoutClientsDataInput;

  create: PersonCreateWithoutClientsInput;
}

export interface ClientUpsertWithWhereUniqueWithoutApplicationIdInput {
  where: ClientWhereUniqueInput;

  update: ClientUpdateWithoutApplicationIdDataInput;

  create: ClientCreateWithoutApplicationIdInput;
}

export interface ApplicationUpsertWithoutCaseInput {
  update: ApplicationUpdateWithoutCaseDataInput;

  create: ApplicationCreateWithoutCaseInput;
}

export interface CaseUpsertWithoutKorbansInput {
  update: CaseUpdateWithoutKorbansDataInput;

  create: CaseCreateWithoutKorbansInput;
}

export interface CaseKorbanUpsertWithWhereUniqueWithoutPersonIdInput {
  where: CaseKorbanWhereUniqueInput;

  update: CaseKorbanUpdateWithoutPersonIdDataInput;

  create: CaseKorbanCreateWithoutPersonIdInput;
}

export interface PersonUpsertWithoutApplicationsInput {
  update: PersonUpdateWithoutApplicationsDataInput;

  create: PersonCreateWithoutApplicationsInput;
}

export interface CaseUpdateInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CaseClassificationUpdateInput {
  kodeMt?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutClassificationsInput>;
}

export interface CaseUpdateOneRequiredWithoutClassificationsInput {
  create?: Maybe<CaseCreateWithoutClassificationsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutClassificationsDataInput>;

  upsert?: Maybe<CaseUpsertWithoutClassificationsInput>;
}

export interface CaseUpdateWithoutClassificationsDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CaseUpsertWithoutClassificationsInput {
  update: CaseUpdateWithoutClassificationsDataInput;

  create: CaseCreateWithoutClassificationsInput;
}

export interface CaseConsultationUpdateInput {
  appKonsul?: Maybe<string>;

  createdBy?: Maybe<string>;

  isiKonsul?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  ppKonsul?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutConsultationsInput>;

  apps?: Maybe<CaseConsultationAppUpdateManyWithoutCaseConsultationIdInput>;
}

export interface CaseUpdateOneRequiredWithoutConsultationsInput {
  create?: Maybe<CaseCreateWithoutConsultationsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutConsultationsDataInput>;

  upsert?: Maybe<CaseUpsertWithoutConsultationsInput>;
}

export interface CaseUpdateWithoutConsultationsDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CaseUpsertWithoutConsultationsInput {
  update: CaseUpdateWithoutConsultationsDataInput;

  create: CaseCreateWithoutConsultationsInput;
}

export interface CaseConsultationAppUpdateInput {
  appConsultation?: Maybe<string>;

  caseConsultationId?: Maybe<CaseConsultationUpdateOneRequiredWithoutAppsInput>;
}

export interface CaseConsultationUpdateOneRequiredWithoutAppsInput {
  create?: Maybe<CaseConsultationCreateWithoutAppsInput>;

  connect?: Maybe<CaseConsultationWhereUniqueInput>;

  update?: Maybe<CaseConsultationUpdateWithoutAppsDataInput>;

  upsert?: Maybe<CaseConsultationUpsertWithoutAppsInput>;
}

export interface CaseConsultationUpdateWithoutAppsDataInput {
  appKonsul?: Maybe<string>;

  createdBy?: Maybe<string>;

  isiKonsul?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  ppKonsul?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutConsultationsInput>;
}

export interface CaseConsultationUpsertWithoutAppsInput {
  update: CaseConsultationUpdateWithoutAppsDataInput;

  create: CaseConsultationCreateWithoutAppsInput;
}

export interface CaseDocumentUpdateInput {
  createdBy?: Maybe<string>;

  jenisDokumen?: Maybe<string>;

  judulDokumen?: Maybe<string>;

  keterangan?: Maybe<string>;

  link?: Maybe<string>;

  updatedBy?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutDocumentsInput>;
}

export interface CaseUpdateOneRequiredWithoutDocumentsInput {
  create?: Maybe<CaseCreateWithoutDocumentsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutDocumentsDataInput>;

  upsert?: Maybe<CaseUpsertWithoutDocumentsInput>;
}

export interface CaseUpdateWithoutDocumentsDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CaseUpsertWithoutDocumentsInput {
  update: CaseUpdateWithoutDocumentsDataInput;

  create: CaseCreateWithoutDocumentsInput;
}

export interface CaseIssueUpdateInput {
  kodeMt?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutIssuesInput>;
}

export interface CaseUpdateOneRequiredWithoutIssuesInput {
  create?: Maybe<CaseCreateWithoutIssuesInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutIssuesDataInput>;

  upsert?: Maybe<CaseUpsertWithoutIssuesInput>;
}

export interface CaseUpdateWithoutIssuesDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CaseUpsertWithoutIssuesInput {
  update: CaseUpdateWithoutIssuesDataInput;

  create: CaseCreateWithoutIssuesInput;
}

export interface CaseKorbanUpdateInput {
  caseId?: Maybe<CaseUpdateOneRequiredWithoutKorbansInput>;

  personId?: Maybe<PersonUpdateOneWithoutCasekorbansInput>;
}

export interface CasePelakuUpdateInput {
  caseId?: Maybe<CaseUpdateOneRequiredWithoutPelakusInput>;

  personId?: Maybe<PersonUpdateOneWithoutCasepelakusInput>;
}

export interface CasePkUpdateInput {
  createdBy?: Maybe<string>;

  didampingi?: Maybe<boolean>;

  legalMemo?: Maybe<string>;

  notulaRapat?: Maybe<string>;

  ppPendamping?: Maybe<number>;

  statusAlasanTdk?: Maybe<string>;

  tglRapat?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutPksInput>;
}

export interface CaseUpdateOneRequiredWithoutPksInput {
  create?: Maybe<CaseCreateWithoutPksInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutPksDataInput>;

  upsert?: Maybe<CaseUpsertWithoutPksInput>;
}

export interface CaseUpdateWithoutPksDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CaseUpsertWithoutPksInput {
  update: CaseUpdateWithoutPksDataInput;

  create: CaseCreateWithoutPksInput;
}

export interface CaseProgressUpdateInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  jenisPeradilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutProgressesInput>;
}

export interface CaseUpdateOneRequiredWithoutProgressesInput {
  create?: Maybe<CaseCreateWithoutProgressesInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutProgressesDataInput>;

  upsert?: Maybe<CaseUpsertWithoutProgressesInput>;
}

export interface CaseUpdateWithoutProgressesDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CaseUpsertWithoutProgressesInput {
  update: CaseUpdateWithoutProgressesDataInput;

  create: CaseCreateWithoutProgressesInput;
}

export interface CaseProgressActivityUpdateInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutActivitiesInput>;

  activitieslit?: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>;

  activitiesnonlit?: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>;
}

export interface CaseUpdateOneRequiredWithoutActivitiesInput {
  create?: Maybe<CaseCreateWithoutActivitiesInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutActivitiesDataInput>;

  upsert?: Maybe<CaseUpsertWithoutActivitiesInput>;
}

export interface CaseUpdateWithoutActivitiesDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CaseUpsertWithoutActivitiesInput {
  update: CaseUpdateWithoutActivitiesDataInput;

  create: CaseCreateWithoutActivitiesInput;
}

export interface CaseProgressActivityLitUpdateInput {
  kodeMt?: Maybe<string>;

  caseProgressActivityId?: Maybe<CaseProgressActivityUpdateOneRequiredWithoutActivitieslitInput>;
}

export interface CaseProgressActivityUpdateOneRequiredWithoutActivitieslitInput {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitieslitInput>;

  connect?: Maybe<CaseProgressActivityWhereUniqueInput>;

  update?: Maybe<CaseProgressActivityUpdateWithoutActivitieslitDataInput>;

  upsert?: Maybe<CaseProgressActivityUpsertWithoutActivitieslitInput>;
}

export interface CaseProgressActivityUpdateWithoutActivitieslitDataInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutActivitiesInput>;

  activitiesnonlit?: Maybe<CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput>;
}

export interface CaseProgressActivityUpsertWithoutActivitieslitInput {
  update: CaseProgressActivityUpdateWithoutActivitieslitDataInput;

  create: CaseProgressActivityCreateWithoutActivitieslitInput;
}

export interface CaseProgressActivityNonlitUpdateInput {
  kodeMt?: Maybe<string>;

  caseProgressActivityId?: Maybe<CaseProgressActivityUpdateOneRequiredWithoutActivitiesnonlitInput>;
}

export interface CaseProgressActivityUpdateOneRequiredWithoutActivitiesnonlitInput {
  create?: Maybe<CaseProgressActivityCreateWithoutActivitiesnonlitInput>;

  connect?: Maybe<CaseProgressActivityWhereUniqueInput>;

  update?: Maybe<CaseProgressActivityUpdateWithoutActivitiesnonlitDataInput>;

  upsert?: Maybe<CaseProgressActivityUpsertWithoutActivitiesnonlitInput>;
}

export interface CaseProgressActivityUpdateWithoutActivitiesnonlitDataInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutActivitiesInput>;

  activitieslit?: Maybe<CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput>;
}

export interface CaseProgressActivityUpsertWithoutActivitiesnonlitInput {
  update: CaseProgressActivityUpdateWithoutActivitiesnonlitDataInput;

  create: CaseProgressActivityCreateWithoutActivitiesnonlitInput;
}

export interface CaseTransferReferralUpdateInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  document?: Maybe<string>;

  jenisTransferReferral?: Maybe<string>;

  networkId?: Maybe<number>;

  tglTransferReferral?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutTransferreferralsInput>;
}

export interface CaseUpdateOneRequiredWithoutTransferreferralsInput {
  create?: Maybe<CaseCreateWithoutTransferreferralsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutTransferreferralsDataInput>;

  upsert?: Maybe<CaseUpsertWithoutTransferreferralsInput>;
}

export interface CaseUpdateWithoutTransferreferralsDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  violatedrights?: Maybe<CaseViolatedRightUpdateManyWithoutCaseIdInput>;
}

export interface CaseUpsertWithoutTransferreferralsInput {
  update: CaseUpdateWithoutTransferreferralsDataInput;

  create: CaseCreateWithoutTransferreferralsInput;
}

export interface CaseViolatedRightUpdateInput {
  kodeMt?: Maybe<string>;

  caseId?: Maybe<CaseUpdateOneRequiredWithoutViolatedrightsInput>;
}

export interface CaseUpdateOneRequiredWithoutViolatedrightsInput {
  create?: Maybe<CaseCreateWithoutViolatedrightsInput>;

  connect?: Maybe<CaseWhereUniqueInput>;

  update?: Maybe<CaseUpdateWithoutViolatedrightsDataInput>;

  upsert?: Maybe<CaseUpsertWithoutViolatedrightsInput>;
}

export interface CaseUpdateWithoutViolatedrightsDataInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;

  application?: Maybe<ApplicationUpdateOneRequiredWithoutCaseInput>;

  clients?: Maybe<ClientUpdateManyWithoutCaseidInput>;

  classifications?: Maybe<CaseClassificationUpdateManyWithoutCaseIdInput>;

  consultations?: Maybe<CaseConsultationUpdateManyWithoutCaseIdInput>;

  documents?: Maybe<CaseDocumentUpdateManyWithoutCaseIdInput>;

  issues?: Maybe<CaseIssueUpdateManyWithoutCaseIdInput>;

  korbans?: Maybe<CaseKorbanUpdateManyWithoutCaseIdInput>;

  pelakus?: Maybe<CasePelakuUpdateManyWithoutCaseIdInput>;

  pks?: Maybe<CasePkUpdateManyWithoutCaseIdInput>;

  progresses?: Maybe<CaseProgressUpdateManyWithoutCaseIdInput>;

  activities?: Maybe<CaseProgressActivityUpdateManyWithoutCaseIdInput>;

  transferreferrals?: Maybe<CaseTransferReferralUpdateManyWithoutCaseIdInput>;
}

export interface CaseUpsertWithoutViolatedrightsInput {
  update: CaseUpdateWithoutViolatedrightsDataInput;

  create: CaseCreateWithoutViolatedrightsInput;
}

export interface ClientUpdateInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm?: Maybe<boolean>;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;

  applicationId?: Maybe<ApplicationUpdateOneRequiredWithoutClientsInput>;

  personId?: Maybe<PersonUpdateOneRequiredWithoutClientsInput>;

  caseid?: Maybe<CaseUpdateOneRequiredWithoutClientsInput>;
}

export interface DaftarPengacaraUpdateInput {
  jabatan?: Maybe<string>;

  namaLengkap?: Maybe<string>;

  sembunyikan?: Maybe<boolean>;
}

export interface DataDictUpdateInput {
  dataType?: Maybe<string>;

  entity?: Maybe<string>;

  fieldName?: Maybe<string>;

  fieldType?: Maybe<string>;

  isRepeat?: Maybe<string>;

  linkField?: Maybe<string>;

  linkTable?: Maybe<string>;

  listCode?: Maybe<string>;

  required?: Maybe<string>;

  validation?: Maybe<string>;

  visibleSelectQuery?: Maybe<string>;

  locals?: Maybe<DataDictLocalUpdateManyWithoutFieldNumberInput>;
}

export interface DataDictLocalUpdateManyWithoutFieldNumberInput {
  create?: Maybe<DataDictLocalCreateWithoutFieldNumberInput[]>;

  connect?: Maybe<DataDictLocalWhereUniqueInput[]>;

  set?: Maybe<DataDictLocalWhereUniqueInput[]>;

  disconnect?: Maybe<DataDictLocalWhereUniqueInput[]>;

  delete?: Maybe<DataDictLocalWhereUniqueInput[]>;

  update?: Maybe<DataDictLocalUpdateWithWhereUniqueWithoutFieldNumberInput[]>;

  updateMany?: Maybe<DataDictLocalUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<DataDictLocalScalarWhereInput[]>;

  upsert?: Maybe<DataDictLocalUpsertWithWhereUniqueWithoutFieldNumberInput[]>;
}

export interface DataDictLocalUpdateWithWhereUniqueWithoutFieldNumberInput {
  where: DataDictLocalWhereUniqueInput;

  data: DataDictLocalUpdateWithoutFieldNumberDataInput;
}

export interface DataDictLocalUpdateWithoutFieldNumberDataInput {
  label?: Maybe<string>;

  lang?: Maybe<string>;
}

export interface DataDictLocalUpdateManyWithWhereNestedInput {
  where: DataDictLocalScalarWhereInput;

  data: DataDictLocalUpdateManyDataInput;
}

export interface DataDictLocalScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<DataDictLocalScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<DataDictLocalScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<DataDictLocalScalarWhereInput[]>;

  id?: Maybe<number>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<number>;
  /** All values that are contained in given list. */
  id_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<number>;
  /** All values greater than the given value. */
  id_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<number>;

  label?: Maybe<string>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<string>;
  /** All values that are contained in given list. */
  label_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  label_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  label_lte?: Maybe<string>;
  /** All values greater than the given value. */
  label_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  label_gte?: Maybe<string>;
  /** All values containing the given string. */
  label_contains?: Maybe<string>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  label_not_ends_with?: Maybe<string>;

  lang?: Maybe<string>;
  /** All values that are not equal to given value. */
  lang_not?: Maybe<string>;
  /** All values that are contained in given list. */
  lang_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  lang_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  lang_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  lang_lte?: Maybe<string>;
  /** All values greater than the given value. */
  lang_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  lang_gte?: Maybe<string>;
  /** All values containing the given string. */
  lang_contains?: Maybe<string>;
  /** All values not containing the given string. */
  lang_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  lang_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  lang_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  lang_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  lang_not_ends_with?: Maybe<string>;
}

export interface DataDictLocalUpdateManyDataInput {
  label?: Maybe<string>;

  lang?: Maybe<string>;
}

export interface DataDictLocalUpsertWithWhereUniqueWithoutFieldNumberInput {
  where: DataDictLocalWhereUniqueInput;

  update: DataDictLocalUpdateWithoutFieldNumberDataInput;

  create: DataDictLocalCreateWithoutFieldNumberInput;
}

export interface DataDictLocalUpdateInput {
  label?: Maybe<string>;

  lang?: Maybe<string>;

  fieldNumber?: Maybe<DataDictUpdateOneRequiredWithoutLocalsInput>;
}

export interface DataDictUpdateOneRequiredWithoutLocalsInput {
  create?: Maybe<DataDictCreateWithoutLocalsInput>;

  connect?: Maybe<DataDictWhereUniqueInput>;

  update?: Maybe<DataDictUpdateWithoutLocalsDataInput>;

  upsert?: Maybe<DataDictUpsertWithoutLocalsInput>;
}

export interface DataDictUpdateWithoutLocalsDataInput {
  dataType?: Maybe<string>;

  entity?: Maybe<string>;

  fieldName?: Maybe<string>;

  fieldType?: Maybe<string>;

  isRepeat?: Maybe<string>;

  linkField?: Maybe<string>;

  linkTable?: Maybe<string>;

  listCode?: Maybe<string>;

  required?: Maybe<string>;

  validation?: Maybe<string>;

  visibleSelectQuery?: Maybe<string>;
}

export interface DataDictUpsertWithoutLocalsInput {
  update: DataDictUpdateWithoutLocalsDataInput;

  create: DataDictCreateWithoutLocalsInput;
}

export interface LogRequestUpdateInput {
  caseId?: Maybe<number>;

  isiRequest?: Maybe<string>;

  jenisRequest?: Maybe<string>;

  networkId?: Maybe<number>;

  personId?: Maybe<number>;

  pp?: Maybe<number>;

  requestBy?: Maybe<number>;

  requestTo?: Maybe<number>;

  tanggapanRequest?: Maybe<string>;

  tglExpired?: Maybe<DateTime>;

  tglRequest?: Maybe<DateTime>;

  tglRespon?: Maybe<DateTime>;
}

export interface LogRequestAppUpdateInput {
  appConsultation?: Maybe<string>;

  logRequestId?: Maybe<number>;
}

export interface MtVocabUpdateInput {
  kode_induk?: Maybe<string>;

  level?: Maybe<number>;

  sembunyikan?: Maybe<boolean>;

  teks?: Maybe<string>;

  urutan?: Maybe<number>;

  kode_list?: Maybe<MtVocabGroupUpdateOneWithoutMtvocabsInput>;
}

export interface MtVocabGroupUpdateOneWithoutMtvocabsInput {
  create?: Maybe<MtVocabGroupCreateWithoutMtvocabsInput>;

  connect?: Maybe<MtVocabGroupWhereUniqueInput>;

  disconnect?: Maybe<boolean>;

  delete?: Maybe<boolean>;

  update?: Maybe<MtVocabGroupUpdateWithoutMtvocabsDataInput>;

  upsert?: Maybe<MtVocabGroupUpsertWithoutMtvocabsInput>;
}

export interface MtVocabGroupUpdateWithoutMtvocabsDataInput {
  nama_list?: Maybe<string>;
}

export interface MtVocabGroupUpsertWithoutMtvocabsInput {
  update: MtVocabGroupUpdateWithoutMtvocabsDataInput;

  create: MtVocabGroupCreateWithoutMtvocabsInput;
}

export interface MtVocabGroupUpdateInput {
  nama_list?: Maybe<string>;

  mtvocabs?: Maybe<MtVocabUpdateManyWithoutKodeListInput>;
}

export interface MtVocabUpdateManyWithoutKodeListInput {
  create?: Maybe<MtVocabCreateWithoutKodeListInput[]>;

  connect?: Maybe<MtVocabWhereUniqueInput[]>;

  set?: Maybe<MtVocabWhereUniqueInput[]>;

  disconnect?: Maybe<MtVocabWhereUniqueInput[]>;

  delete?: Maybe<MtVocabWhereUniqueInput[]>;

  update?: Maybe<MtVocabUpdateWithWhereUniqueWithoutKodeListInput[]>;

  updateMany?: Maybe<MtVocabUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<MtVocabScalarWhereInput[]>;

  upsert?: Maybe<MtVocabUpsertWithWhereUniqueWithoutKodeListInput[]>;
}

export interface MtVocabUpdateWithWhereUniqueWithoutKodeListInput {
  where: MtVocabWhereUniqueInput;

  data: MtVocabUpdateWithoutKodeListDataInput;
}

export interface MtVocabUpdateWithoutKodeListDataInput {
  kode_induk?: Maybe<string>;

  level?: Maybe<number>;

  sembunyikan?: Maybe<boolean>;

  teks?: Maybe<string>;

  urutan?: Maybe<number>;
}

export interface MtVocabUpdateManyWithWhereNestedInput {
  where: MtVocabScalarWhereInput;

  data: MtVocabUpdateManyDataInput;
}

export interface MtVocabScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MtVocabScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<MtVocabScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MtVocabScalarWhereInput[]>;

  KODE?: Maybe<string>;
  /** All values that are not equal to given value. */
  KODE_not?: Maybe<string>;
  /** All values that are contained in given list. */
  KODE_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  KODE_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  KODE_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  KODE_lte?: Maybe<string>;
  /** All values greater than the given value. */
  KODE_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  KODE_gte?: Maybe<string>;
  /** All values containing the given string. */
  KODE_contains?: Maybe<string>;
  /** All values not containing the given string. */
  KODE_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  KODE_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  KODE_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  KODE_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  KODE_not_ends_with?: Maybe<string>;

  kode_induk?: Maybe<string>;
  /** All values that are not equal to given value. */
  kode_induk_not?: Maybe<string>;
  /** All values that are contained in given list. */
  kode_induk_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  kode_induk_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  kode_induk_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  kode_induk_lte?: Maybe<string>;
  /** All values greater than the given value. */
  kode_induk_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  kode_induk_gte?: Maybe<string>;
  /** All values containing the given string. */
  kode_induk_contains?: Maybe<string>;
  /** All values not containing the given string. */
  kode_induk_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  kode_induk_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  kode_induk_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  kode_induk_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  kode_induk_not_ends_with?: Maybe<string>;

  level?: Maybe<number>;
  /** All values that are not equal to given value. */
  level_not?: Maybe<number>;
  /** All values that are contained in given list. */
  level_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  level_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  level_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  level_lte?: Maybe<number>;
  /** All values greater than the given value. */
  level_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  level_gte?: Maybe<number>;

  sembunyikan?: Maybe<boolean>;
  /** All values that are not equal to given value. */
  sembunyikan_not?: Maybe<boolean>;

  teks?: Maybe<string>;
  /** All values that are not equal to given value. */
  teks_not?: Maybe<string>;
  /** All values that are contained in given list. */
  teks_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  teks_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  teks_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  teks_lte?: Maybe<string>;
  /** All values greater than the given value. */
  teks_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  teks_gte?: Maybe<string>;
  /** All values containing the given string. */
  teks_contains?: Maybe<string>;
  /** All values not containing the given string. */
  teks_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  teks_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  teks_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  teks_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  teks_not_ends_with?: Maybe<string>;

  urutan?: Maybe<number>;
  /** All values that are not equal to given value. */
  urutan_not?: Maybe<number>;
  /** All values that are contained in given list. */
  urutan_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  urutan_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  urutan_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  urutan_lte?: Maybe<number>;
  /** All values greater than the given value. */
  urutan_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  urutan_gte?: Maybe<number>;
}

export interface MtVocabUpdateManyDataInput {
  kode_induk?: Maybe<string>;

  level?: Maybe<number>;

  sembunyikan?: Maybe<boolean>;

  teks?: Maybe<string>;

  urutan?: Maybe<number>;
}

export interface MtVocabUpsertWithWhereUniqueWithoutKodeListInput {
  where: MtVocabWhereUniqueInput;

  update: MtVocabUpdateWithoutKodeListDataInput;

  create: MtVocabCreateWithoutKodeListInput;
}

export interface NetworkUpdateInput {
  address?: Maybe<string>;

  contactPerson?: Maybe<string>;

  email?: Maybe<string>;

  name?: Maybe<string>;

  noContact?: Maybe<string>;

  provinceId?: Maybe<number>;

  regencyId?: Maybe<number>;

  type?: Maybe<string>;
}

export interface PersonUpdateInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas?: Maybe<boolean>;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama?: Maybe<boolean>;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;

  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;

  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>;

  documents?: Maybe<PersonDocumentUpdateManyWithoutPersonIdInput>;
}

export interface PersonDocumentUpdateInput {
  deletedAt?: Maybe<DateTime>;

  file?: Maybe<number>;

  title?: Maybe<number>;

  personId?: Maybe<PersonUpdateOneRequiredWithoutDocumentsInput>;
}

export interface PersonUpdateOneRequiredWithoutDocumentsInput {
  create?: Maybe<PersonCreateWithoutDocumentsInput>;

  connect?: Maybe<PersonWhereUniqueInput>;

  update?: Maybe<PersonUpdateWithoutDocumentsDataInput>;

  upsert?: Maybe<PersonUpsertWithoutDocumentsInput>;
}

export interface PersonUpdateWithoutDocumentsDataInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas?: Maybe<boolean>;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama?: Maybe<boolean>;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;

  applications?: Maybe<ApplicationUpdateManyWithoutWakilIdInput>;

  casekorbans?: Maybe<CaseKorbanUpdateManyWithoutPersonIdInput>;

  casepelakus?: Maybe<CasePelakuUpdateManyWithoutPersonIdInput>;

  clients?: Maybe<ClientUpdateManyWithoutPersonIdInput>;
}

export interface PersonUpsertWithoutDocumentsInput {
  update: PersonUpdateWithoutDocumentsDataInput;

  create: PersonCreateWithoutDocumentsInput;
}

export interface RoleUpdateInput {
  type?: Maybe<number>;

  userId?: Maybe<number>;
}

export interface UserUpdateInput {
  address?: Maybe<string>;

  avatar?: Maybe<string>;

  deletedAt?: Maybe<DateTime>;

  email?: Maybe<string>;

  name?: Maybe<string>;

  password?: Maybe<string>;

  phone?: Maybe<string>;

  position?: Maybe<string>;

  rememberToken?: Maybe<string>;

  roles?: Maybe<string>;

  status?: Maybe<string>;

  username?: Maybe<string>;

  profile?: Maybe<UserProfileUpdateOneRequiredWithoutUserIdInput>;
}

export interface UserProfileUpdateOneRequiredWithoutUserIdInput {
  create?: Maybe<UserProfileCreateWithoutUserIdInput>;

  connect?: Maybe<UserProfileWhereUniqueInput>;

  update?: Maybe<UserProfileUpdateWithoutUserIdDataInput>;

  upsert?: Maybe<UserProfileUpsertWithoutUserIdInput>;
}

export interface UserProfileUpdateWithoutUserIdDataInput {
  noContact?: Maybe<string>;

  occupation?: Maybe<string>;

  photo?: Maybe<string>;
}

export interface UserProfileUpsertWithoutUserIdInput {
  update: UserProfileUpdateWithoutUserIdDataInput;

  create: UserProfileCreateWithoutUserIdInput;
}

export interface UserProfileUpdateInput {
  noContact?: Maybe<string>;

  occupation?: Maybe<string>;

  photo?: Maybe<string>;

  userId?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
}

export interface UserUpdateOneRequiredWithoutProfileInput {
  create?: Maybe<UserCreateWithoutProfileInput>;

  connect?: Maybe<UserWhereUniqueInput>;

  update?: Maybe<UserUpdateWithoutProfileDataInput>;

  upsert?: Maybe<UserUpsertWithoutProfileInput>;
}

export interface UserUpdateWithoutProfileDataInput {
  address?: Maybe<string>;

  avatar?: Maybe<string>;

  deletedAt?: Maybe<DateTime>;

  email?: Maybe<string>;

  name?: Maybe<string>;

  password?: Maybe<string>;

  phone?: Maybe<string>;

  position?: Maybe<string>;

  rememberToken?: Maybe<string>;

  roles?: Maybe<string>;

  status?: Maybe<string>;

  username?: Maybe<string>;
}

export interface UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput;

  create: UserCreateWithoutProfileInput;
}

export interface ApplicationUpdateManyMutationInput {
  createdBy?: Maybe<string>;

  dudukPerara?: Maybe<string>;

  infoLbh?: Maybe<string>;

  jumlahPenerimaManfaat?: Maybe<number>;

  konfirmasiData?: Maybe<boolean>;

  noReg?: Maybe<string>;

  pernahKlien?: Maybe<string>;

  pernahPpLain?: Maybe<string>;

  ppLain?: Maybe<string>;

  regDate?: Maybe<DateTime>;

  relasiWakilClient?: Maybe<string>;

  setujuAdvokasi?: Maybe<boolean>;

  statusPerwakilan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  waktuPernahKlien?: Maybe<string>;

  whyLbh?: Maybe<string>;
}

export interface CaseUpdateManyMutationInput {
  applicationId?: Maybe<number>;

  caseClosed?: Maybe<boolean>;

  caseClosedJenis?: Maybe<string>;

  createdBy?: Maybe<string>;

  hakTerlanggar?: Maybe<string>;

  issue?: Maybe<string>;

  judulKasus?: Maybe<string>;

  klasifikasiDok?: Maybe<string>;

  kronologiKasus?: Maybe<string>;

  lockDitolak?: Maybe<boolean>;

  statusPendampingan?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  unlockPk?: Maybe<boolean>;

  unlockTransfer?: Maybe<boolean>;

  updatedBy?: Maybe<string>;
}

export interface CaseClassificationUpdateManyMutationInput {
  kodeMt?: Maybe<string>;
}

export interface CaseConsultationUpdateManyMutationInput {
  appKonsul?: Maybe<string>;

  createdBy?: Maybe<string>;

  isiKonsul?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  ppKonsul?: Maybe<string>;

  tglKonsul?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseConsultationAppUpdateManyMutationInput {
  appConsultation?: Maybe<string>;
}

export interface CaseDocumentUpdateManyMutationInput {
  createdBy?: Maybe<string>;

  jenisDokumen?: Maybe<string>;

  judulDokumen?: Maybe<string>;

  keterangan?: Maybe<string>;

  link?: Maybe<string>;

  updatedBy?: Maybe<string>;
}

export interface CaseIssueUpdateManyMutationInput {
  kodeMt?: Maybe<string>;
}

export interface CasePkUpdateManyMutationInput {
  createdBy?: Maybe<string>;

  didampingi?: Maybe<boolean>;

  legalMemo?: Maybe<string>;

  notulaRapat?: Maybe<string>;

  ppPendamping?: Maybe<number>;

  statusAlasanTdk?: Maybe<string>;

  tglRapat?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseProgressUpdateManyMutationInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  jenisPeradilan?: Maybe<string>;

  updatedBy?: Maybe<string>;
}

export interface CaseProgressActivityUpdateManyMutationInput {
  capaian?: Maybe<string>;

  createdBy?: Maybe<string>;

  hambatan?: Maybe<string>;

  judulAktifitas?: Maybe<string>;

  position?: Maybe<string>;

  rencanaStrategi?: Maybe<string>;

  targetAdvokasi?: Maybe<string>;

  tglAktifitas?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseProgressActivityLitUpdateManyMutationInput {
  kodeMt?: Maybe<string>;
}

export interface CaseProgressActivityNonlitUpdateManyMutationInput {
  kodeMt?: Maybe<string>;
}

export interface CaseTransferReferralUpdateManyMutationInput {
  catatan?: Maybe<string>;

  createdBy?: Maybe<string>;

  document?: Maybe<string>;

  jenisTransferReferral?: Maybe<string>;

  networkId?: Maybe<number>;

  tglTransferReferral?: Maybe<DateTime>;

  updatedBy?: Maybe<string>;
}

export interface CaseViolatedRightUpdateManyMutationInput {
  kodeMt?: Maybe<string>;
}

export interface ClientUpdateManyMutationInput {
  alamatLokasi?: Maybe<string>;

  asetGedung?: Maybe<string>;

  asetKios?: Maybe<string>;

  asetLahanGarapan?: Maybe<string>;

  asetLapak?: Maybe<string>;

  asetMobil?: Maybe<string>;

  asetMotor?: Maybe<string>;

  asetRumah?: Maybe<string>;

  asetTanah?: Maybe<string>;

  asetToko?: Maybe<string>;

  asetWarung?: Maybe<string>;

  createdBy?: Maybe<string>;

  pendapatan?: Maybe<string>;

  sktm?: Maybe<boolean>;

  sktmUpload?: Maybe<string>;

  stmKeterangan?: Maybe<string>;

  tanggunganAnak?: Maybe<number>;

  tanggunganFamili?: Maybe<number>;

  tanggunganLain?: Maybe<number>;

  tanggunganPasangan?: Maybe<number>;

  updatedBy?: Maybe<string>;

  usiaSaatKlien?: Maybe<number>;
}

export interface DaftarPengacaraUpdateManyMutationInput {
  jabatan?: Maybe<string>;

  namaLengkap?: Maybe<string>;

  sembunyikan?: Maybe<boolean>;
}

export interface DataDictUpdateManyMutationInput {
  dataType?: Maybe<string>;

  entity?: Maybe<string>;

  fieldName?: Maybe<string>;

  fieldType?: Maybe<string>;

  isRepeat?: Maybe<string>;

  linkField?: Maybe<string>;

  linkTable?: Maybe<string>;

  listCode?: Maybe<string>;

  required?: Maybe<string>;

  validation?: Maybe<string>;

  visibleSelectQuery?: Maybe<string>;
}

export interface DataDictLocalUpdateManyMutationInput {
  label?: Maybe<string>;

  lang?: Maybe<string>;
}

export interface LogRequestUpdateManyMutationInput {
  caseId?: Maybe<number>;

  isiRequest?: Maybe<string>;

  jenisRequest?: Maybe<string>;

  networkId?: Maybe<number>;

  personId?: Maybe<number>;

  pp?: Maybe<number>;

  requestBy?: Maybe<number>;

  requestTo?: Maybe<number>;

  tanggapanRequest?: Maybe<string>;

  tglExpired?: Maybe<DateTime>;

  tglRequest?: Maybe<DateTime>;

  tglRespon?: Maybe<DateTime>;
}

export interface LogRequestAppUpdateManyMutationInput {
  appConsultation?: Maybe<string>;

  logRequestId?: Maybe<number>;
}

export interface MtVocabUpdateManyMutationInput {
  kode_induk?: Maybe<string>;

  level?: Maybe<number>;

  sembunyikan?: Maybe<boolean>;

  teks?: Maybe<string>;

  urutan?: Maybe<number>;
}

export interface MtVocabGroupUpdateManyMutationInput {
  nama_list?: Maybe<string>;
}

export interface NetworkUpdateManyMutationInput {
  address?: Maybe<string>;

  contactPerson?: Maybe<string>;

  email?: Maybe<string>;

  name?: Maybe<string>;

  noContact?: Maybe<string>;

  provinceId?: Maybe<number>;

  regencyId?: Maybe<number>;

  type?: Maybe<string>;
}

export interface PersonUpdateManyMutationInput {
  agama?: Maybe<string>;

  alamatDomisili?: Maybe<string>;

  alamatId?: Maybe<string>;

  alatBantu?: Maybe<string>;

  alias?: Maybe<string>;

  createdBy?: Maybe<string>;

  disabilitas?: Maybe<boolean>;

  distrikDomisili?: Maybe<string>;

  distrikId?: Maybe<string>;

  domisiliSama?: Maybe<boolean>;

  email?: Maybe<string>;

  golDarah?: Maybe<string>;

  jenisDisabilitas?: Maybe<string>;

  jenisDomisili?: Maybe<string>;

  jenisId?: Maybe<string>;

  jenisKelamin?: Maybe<string>;

  jmlAnggota?: Maybe<number>;

  namaLengkap?: Maybe<string>;

  nomorId?: Maybe<string>;

  pekerjaan?: Maybe<string>;

  pendidikan?: Maybe<string>;

  statusPernikahan?: Maybe<string>;

  telepon?: Maybe<string>;

  tglLahir?: Maybe<DateTime>;

  tmpLahir?: Maybe<string>;

  unitSatuan?: Maybe<string>;

  updatedBy?: Maybe<string>;

  wargaNegara?: Maybe<string>;
}

export interface PersonDocumentUpdateManyMutationInput {
  deletedAt?: Maybe<DateTime>;

  file?: Maybe<number>;

  title?: Maybe<number>;
}

export interface RoleUpdateManyMutationInput {
  type?: Maybe<number>;

  userId?: Maybe<number>;
}

export interface UserUpdateManyMutationInput {
  address?: Maybe<string>;

  avatar?: Maybe<string>;

  deletedAt?: Maybe<DateTime>;

  email?: Maybe<string>;

  name?: Maybe<string>;

  password?: Maybe<string>;

  phone?: Maybe<string>;

  position?: Maybe<string>;

  rememberToken?: Maybe<string>;

  roles?: Maybe<string>;

  status?: Maybe<string>;

  username?: Maybe<string>;
}

export interface UserProfileUpdateManyMutationInput {
  noContact?: Maybe<string>;

  occupation?: Maybe<string>;

  photo?: Maybe<string>;
}

export interface ApplicationSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ApplicationSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ApplicationSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ApplicationSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ApplicationWhereInput>;
}

export interface CaseSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseWhereInput>;
}

export interface CaseClassificationSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseClassificationSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseClassificationSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseClassificationSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseClassificationWhereInput>;
}

export interface CaseConsultationSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseConsultationSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseConsultationSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseConsultationSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseConsultationWhereInput>;
}

export interface CaseConsultationAppSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseConsultationAppSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseConsultationAppSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseConsultationAppSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseConsultationAppWhereInput>;
}

export interface CaseDocumentSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseDocumentSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseDocumentSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseDocumentSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseDocumentWhereInput>;
}

export interface CaseIssueSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseIssueSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseIssueSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseIssueSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseIssueWhereInput>;
}

export interface CaseKorbanSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseKorbanSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseKorbanSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseKorbanSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseKorbanWhereInput>;
}

export interface CasePelakuSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CasePelakuSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CasePelakuSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CasePelakuSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CasePelakuWhereInput>;
}

export interface CasePkSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CasePkSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CasePkSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CasePkSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CasePkWhereInput>;
}

export interface CaseProgressSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseProgressWhereInput>;
}

export interface CaseProgressActivitySubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressActivitySubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressActivitySubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressActivitySubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseProgressActivityWhereInput>;
}

export interface CaseProgressActivityLitSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressActivityLitSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressActivityLitSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressActivityLitSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseProgressActivityLitWhereInput>;
}

export interface CaseProgressActivityNonlitSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseProgressActivityNonlitSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseProgressActivityNonlitSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseProgressActivityNonlitSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseProgressActivityNonlitWhereInput>;
}

export interface CaseTransferReferralSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseTransferReferralSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseTransferReferralSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseTransferReferralSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseTransferReferralWhereInput>;
}

export interface CaseViolatedRightSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CaseViolatedRightSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CaseViolatedRightSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CaseViolatedRightSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CaseViolatedRightWhereInput>;
}

export interface ClientSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ClientSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ClientSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ClientSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ClientWhereInput>;
}

export interface DaftarPengacaraSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<DaftarPengacaraSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<DaftarPengacaraSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<DaftarPengacaraSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<DaftarPengacaraWhereInput>;
}

export interface DataDictSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<DataDictSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<DataDictSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<DataDictSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<DataDictWhereInput>;
}

export interface DataDictLocalSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<DataDictLocalSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<DataDictLocalSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<DataDictLocalSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<DataDictLocalWhereInput>;
}

export interface LogRequestSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<LogRequestSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<LogRequestSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LogRequestSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<LogRequestWhereInput>;
}

export interface LogRequestAppSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<LogRequestAppSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<LogRequestAppSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LogRequestAppSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<LogRequestAppWhereInput>;
}

export interface MtVocabSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MtVocabSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<MtVocabSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MtVocabSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<MtVocabWhereInput>;
}

export interface MtVocabGroupSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MtVocabGroupSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<MtVocabGroupSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<MtVocabGroupSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<MtVocabGroupWhereInput>;
}

export interface NetworkSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<NetworkSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<NetworkSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<NetworkSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<NetworkWhereInput>;
}

export interface PersonSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PersonSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PersonSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PersonSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<PersonWhereInput>;
}

export interface PersonDocumentSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PersonDocumentSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PersonDocumentSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PersonDocumentSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<PersonDocumentWhereInput>;
}

export interface RoleSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<RoleSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<RoleSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<RoleSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<RoleWhereInput>;
}

export interface UserSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<UserWhereInput>;
}

export interface UserProfileSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserProfileSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserProfileSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserProfileSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<UserProfileWhereInput>;
}

export enum ApplicationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  DudukPeraraAsc = 'dudukPerara_ASC',
  DudukPeraraDesc = 'dudukPerara_DESC',
  InfoLbhAsc = 'infoLbh_ASC',
  InfoLbhDesc = 'infoLbh_DESC',
  JumlahPenerimaManfaatAsc = 'jumlahPenerimaManfaat_ASC',
  JumlahPenerimaManfaatDesc = 'jumlahPenerimaManfaat_DESC',
  KonfirmasiDataAsc = 'konfirmasiData_ASC',
  KonfirmasiDataDesc = 'konfirmasiData_DESC',
  NoRegAsc = 'noReg_ASC',
  NoRegDesc = 'noReg_DESC',
  PernahKlienAsc = 'pernahKlien_ASC',
  PernahKlienDesc = 'pernahKlien_DESC',
  PernahPpLainAsc = 'pernahPpLain_ASC',
  PernahPpLainDesc = 'pernahPpLain_DESC',
  PpLainAsc = 'ppLain_ASC',
  PpLainDesc = 'ppLain_DESC',
  RegDateAsc = 'regDate_ASC',
  RegDateDesc = 'regDate_DESC',
  RelasiWakilClientAsc = 'relasiWakilClient_ASC',
  RelasiWakilClientDesc = 'relasiWakilClient_DESC',
  SetujuAdvokasiAsc = 'setujuAdvokasi_ASC',
  SetujuAdvokasiDesc = 'setujuAdvokasi_DESC',
  StatusPerwakilanAsc = 'statusPerwakilan_ASC',
  StatusPerwakilanDesc = 'statusPerwakilan_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  WaktuPernahKlienAsc = 'waktuPernahKlien_ASC',
  WaktuPernahKlienDesc = 'waktuPernahKlien_DESC',
  WhyLbhAsc = 'whyLbh_ASC',
  WhyLbhDesc = 'whyLbh_DESC',
}

export enum CaseKorbanOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export enum ClientOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AlamatLokasiAsc = 'alamatLokasi_ASC',
  AlamatLokasiDesc = 'alamatLokasi_DESC',
  AsetGedungAsc = 'asetGedung_ASC',
  AsetGedungDesc = 'asetGedung_DESC',
  AsetKiosAsc = 'asetKios_ASC',
  AsetKiosDesc = 'asetKios_DESC',
  AsetLahanGarapanAsc = 'asetLahanGarapan_ASC',
  AsetLahanGarapanDesc = 'asetLahanGarapan_DESC',
  AsetLapakAsc = 'asetLapak_ASC',
  AsetLapakDesc = 'asetLapak_DESC',
  AsetMobilAsc = 'asetMobil_ASC',
  AsetMobilDesc = 'asetMobil_DESC',
  AsetMotorAsc = 'asetMotor_ASC',
  AsetMotorDesc = 'asetMotor_DESC',
  AsetRumahAsc = 'asetRumah_ASC',
  AsetRumahDesc = 'asetRumah_DESC',
  AsetTanahAsc = 'asetTanah_ASC',
  AsetTanahDesc = 'asetTanah_DESC',
  AsetTokoAsc = 'asetToko_ASC',
  AsetTokoDesc = 'asetToko_DESC',
  AsetWarungAsc = 'asetWarung_ASC',
  AsetWarungDesc = 'asetWarung_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  PendapatanAsc = 'pendapatan_ASC',
  PendapatanDesc = 'pendapatan_DESC',
  SktmAsc = 'sktm_ASC',
  SktmDesc = 'sktm_DESC',
  SktmUploadAsc = 'sktmUpload_ASC',
  SktmUploadDesc = 'sktmUpload_DESC',
  StmKeteranganAsc = 'stmKeterangan_ASC',
  StmKeteranganDesc = 'stmKeterangan_DESC',
  TanggunganAnakAsc = 'tanggunganAnak_ASC',
  TanggunganAnakDesc = 'tanggunganAnak_DESC',
  TanggunganFamiliAsc = 'tanggunganFamili_ASC',
  TanggunganFamiliDesc = 'tanggunganFamili_DESC',
  TanggunganLainAsc = 'tanggunganLain_ASC',
  TanggunganLainDesc = 'tanggunganLain_DESC',
  TanggunganPasanganAsc = 'tanggunganPasangan_ASC',
  TanggunganPasanganDesc = 'tanggunganPasangan_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  UsiaSaatKlienAsc = 'usiaSaatKlien_ASC',
  UsiaSaatKlienDesc = 'usiaSaatKlien_DESC',
}

export enum CaseClassificationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC',
}

export enum CaseConsultationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AppKonsulAsc = 'appKonsul_ASC',
  AppKonsulDesc = 'appKonsul_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  IsiKonsulAsc = 'isiKonsul_ASC',
  IsiKonsulDesc = 'isiKonsul_DESC',
  JudulAktifitasAsc = 'judulAktifitas_ASC',
  JudulAktifitasDesc = 'judulAktifitas_DESC',
  PpKonsulAsc = 'ppKonsul_ASC',
  PpKonsulDesc = 'ppKonsul_DESC',
  TglKonsulAsc = 'tglKonsul_ASC',
  TglKonsulDesc = 'tglKonsul_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
}

export enum CaseConsultationAppOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AppConsultationAsc = 'appConsultation_ASC',
  AppConsultationDesc = 'appConsultation_DESC',
}

export enum CaseDocumentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  JenisDokumenAsc = 'jenisDokumen_ASC',
  JenisDokumenDesc = 'jenisDokumen_DESC',
  JudulDokumenAsc = 'judulDokumen_ASC',
  JudulDokumenDesc = 'judulDokumen_DESC',
  KeteranganAsc = 'keterangan_ASC',
  KeteranganDesc = 'keterangan_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
}

export enum CaseIssueOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC',
}

export enum CasePelakuOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export enum CasePkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  DidampingiAsc = 'didampingi_ASC',
  DidampingiDesc = 'didampingi_DESC',
  LegalMemoAsc = 'legalMemo_ASC',
  LegalMemoDesc = 'legalMemo_DESC',
  NotulaRapatAsc = 'notulaRapat_ASC',
  NotulaRapatDesc = 'notulaRapat_DESC',
  PpPendampingAsc = 'ppPendamping_ASC',
  PpPendampingDesc = 'ppPendamping_DESC',
  StatusAlasanTdkAsc = 'statusAlasanTdk_ASC',
  StatusAlasanTdkDesc = 'statusAlasanTdk_DESC',
  TglRapatAsc = 'tglRapat_ASC',
  TglRapatDesc = 'tglRapat_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
}

export enum CaseProgressOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CatatanAsc = 'catatan_ASC',
  CatatanDesc = 'catatan_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  JenisPeradilanAsc = 'jenisPeradilan_ASC',
  JenisPeradilanDesc = 'jenisPeradilan_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
}

export enum CaseProgressActivityOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CapaianAsc = 'capaian_ASC',
  CapaianDesc = 'capaian_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  HambatanAsc = 'hambatan_ASC',
  HambatanDesc = 'hambatan_DESC',
  JudulAktifitasAsc = 'judulAktifitas_ASC',
  JudulAktifitasDesc = 'judulAktifitas_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  RencanaStrategiAsc = 'rencanaStrategi_ASC',
  RencanaStrategiDesc = 'rencanaStrategi_DESC',
  TargetAdvokasiAsc = 'targetAdvokasi_ASC',
  TargetAdvokasiDesc = 'targetAdvokasi_DESC',
  TglAktifitasAsc = 'tglAktifitas_ASC',
  TglAktifitasDesc = 'tglAktifitas_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
}

export enum CaseProgressActivityLitOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC',
}

export enum CaseProgressActivityNonlitOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC',
}

export enum CaseTransferReferralOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CatatanAsc = 'catatan_ASC',
  CatatanDesc = 'catatan_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  DocumentAsc = 'document_ASC',
  DocumentDesc = 'document_DESC',
  JenisTransferReferralAsc = 'jenisTransferReferral_ASC',
  JenisTransferReferralDesc = 'jenisTransferReferral_DESC',
  NetworkIdAsc = 'networkId_ASC',
  NetworkIdDesc = 'networkId_DESC',
  TglTransferReferralAsc = 'tglTransferReferral_ASC',
  TglTransferReferralDesc = 'tglTransferReferral_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
}

export enum CaseViolatedRightOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KodeMtAsc = 'kodeMt_ASC',
  KodeMtDesc = 'kodeMt_DESC',
}

export enum PersonDocumentOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  FileAsc = 'file_ASC',
  FileDesc = 'file_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum CaseOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ApplicationIdAsc = 'applicationId_ASC',
  ApplicationIdDesc = 'applicationId_DESC',
  CaseClosedAsc = 'caseClosed_ASC',
  CaseClosedDesc = 'caseClosed_DESC',
  CaseClosedJenisAsc = 'caseClosedJenis_ASC',
  CaseClosedJenisDesc = 'caseClosedJenis_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  HakTerlanggarAsc = 'hakTerlanggar_ASC',
  HakTerlanggarDesc = 'hakTerlanggar_DESC',
  IssueAsc = 'issue_ASC',
  IssueDesc = 'issue_DESC',
  JudulKasusAsc = 'judulKasus_ASC',
  JudulKasusDesc = 'judulKasus_DESC',
  KlasifikasiDokAsc = 'klasifikasiDok_ASC',
  KlasifikasiDokDesc = 'klasifikasiDok_DESC',
  KronologiKasusAsc = 'kronologiKasus_ASC',
  KronologiKasusDesc = 'kronologiKasus_DESC',
  LockDitolakAsc = 'lockDitolak_ASC',
  LockDitolakDesc = 'lockDitolak_DESC',
  StatusPendampinganAsc = 'statusPendampingan_ASC',
  StatusPendampinganDesc = 'statusPendampingan_DESC',
  TargetAdvokasiAsc = 'targetAdvokasi_ASC',
  TargetAdvokasiDesc = 'targetAdvokasi_DESC',
  UnlockPkAsc = 'unlockPk_ASC',
  UnlockPkDesc = 'unlockPk_DESC',
  UnlockTransferAsc = 'unlockTransfer_ASC',
  UnlockTransferDesc = 'unlockTransfer_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
}

export enum DaftarPengacaraOrderByInput {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  JabatanAsc = 'jabatan_ASC',
  JabatanDesc = 'jabatan_DESC',
  NamaLengkapAsc = 'namaLengkap_ASC',
  NamaLengkapDesc = 'namaLengkap_DESC',
  SembunyikanAsc = 'sembunyikan_ASC',
  SembunyikanDesc = 'sembunyikan_DESC',
}

export enum DataDictOrderByInput {
  FieldNumberAsc = 'fieldNumber_ASC',
  FieldNumberDesc = 'fieldNumber_DESC',
  DataTypeAsc = 'dataType_ASC',
  DataTypeDesc = 'dataType_DESC',
  EntityAsc = 'entity_ASC',
  EntityDesc = 'entity_DESC',
  FieldNameAsc = 'fieldName_ASC',
  FieldNameDesc = 'fieldName_DESC',
  FieldTypeAsc = 'fieldType_ASC',
  FieldTypeDesc = 'fieldType_DESC',
  IsRepeatAsc = 'isRepeat_ASC',
  IsRepeatDesc = 'isRepeat_DESC',
  LinkFieldAsc = 'linkField_ASC',
  LinkFieldDesc = 'linkField_DESC',
  LinkTableAsc = 'linkTable_ASC',
  LinkTableDesc = 'linkTable_DESC',
  ListCodeAsc = 'listCode_ASC',
  ListCodeDesc = 'listCode_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  ValidationAsc = 'validation_ASC',
  ValidationDesc = 'validation_DESC',
  VisibleSelectQueryAsc = 'visibleSelectQuery_ASC',
  VisibleSelectQueryDesc = 'visibleSelectQuery_DESC',
}

export enum DataDictLocalOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LangAsc = 'lang_ASC',
  LangDesc = 'lang_DESC',
}

export enum LogRequestOrderByInput {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CaseIdAsc = 'caseId_ASC',
  CaseIdDesc = 'caseId_DESC',
  IsiRequestAsc = 'isiRequest_ASC',
  IsiRequestDesc = 'isiRequest_DESC',
  JenisRequestAsc = 'jenisRequest_ASC',
  JenisRequestDesc = 'jenisRequest_DESC',
  NetworkIdAsc = 'networkId_ASC',
  NetworkIdDesc = 'networkId_DESC',
  PersonIdAsc = 'personId_ASC',
  PersonIdDesc = 'personId_DESC',
  PpAsc = 'pp_ASC',
  PpDesc = 'pp_DESC',
  RequestByAsc = 'requestBy_ASC',
  RequestByDesc = 'requestBy_DESC',
  RequestToAsc = 'requestTo_ASC',
  RequestToDesc = 'requestTo_DESC',
  TanggapanRequestAsc = 'tanggapanRequest_ASC',
  TanggapanRequestDesc = 'tanggapanRequest_DESC',
  TglExpiredAsc = 'tglExpired_ASC',
  TglExpiredDesc = 'tglExpired_DESC',
  TglRequestAsc = 'tglRequest_ASC',
  TglRequestDesc = 'tglRequest_DESC',
  TglResponAsc = 'tglRespon_ASC',
  TglResponDesc = 'tglRespon_DESC',
}

export enum LogRequestAppOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AppConsultationAsc = 'appConsultation_ASC',
  AppConsultationDesc = 'appConsultation_DESC',
  LogRequestIdAsc = 'logRequestId_ASC',
  LogRequestIdDesc = 'logRequestId_DESC',
}

export enum MtVocabOrderByInput {
  KodeAsc = 'KODE_ASC',
  KodeDesc = 'KODE_DESC',
  KodeIndukAsc = 'kode_induk_ASC',
  KodeIndukDesc = 'kode_induk_DESC',
  LevelAsc = 'level_ASC',
  LevelDesc = 'level_DESC',
  SembunyikanAsc = 'sembunyikan_ASC',
  SembunyikanDesc = 'sembunyikan_DESC',
  TeksAsc = 'teks_ASC',
  TeksDesc = 'teks_DESC',
  UrutanAsc = 'urutan_ASC',
  UrutanDesc = 'urutan_DESC',
}

export enum MtVocabGroupOrderByInput {
  KodeListAsc = 'kode_list_ASC',
  KodeListDesc = 'kode_list_DESC',
  NamaListAsc = 'nama_list_ASC',
  NamaListDesc = 'nama_list_DESC',
}

export enum NetworkOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  ContactPersonAsc = 'contactPerson_ASC',
  ContactPersonDesc = 'contactPerson_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoContactAsc = 'noContact_ASC',
  NoContactDesc = 'noContact_DESC',
  ProvinceIdAsc = 'provinceId_ASC',
  ProvinceIdDesc = 'provinceId_DESC',
  RegencyIdAsc = 'regencyId_ASC',
  RegencyIdDesc = 'regencyId_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum PersonOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AgamaAsc = 'agama_ASC',
  AgamaDesc = 'agama_DESC',
  AlamatDomisiliAsc = 'alamatDomisili_ASC',
  AlamatDomisiliDesc = 'alamatDomisili_DESC',
  AlamatIdAsc = 'alamatId_ASC',
  AlamatIdDesc = 'alamatId_DESC',
  AlatBantuAsc = 'alatBantu_ASC',
  AlatBantuDesc = 'alatBantu_DESC',
  AliasAsc = 'alias_ASC',
  AliasDesc = 'alias_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  DisabilitasAsc = 'disabilitas_ASC',
  DisabilitasDesc = 'disabilitas_DESC',
  DistrikDomisiliAsc = 'distrikDomisili_ASC',
  DistrikDomisiliDesc = 'distrikDomisili_DESC',
  DistrikIdAsc = 'distrikId_ASC',
  DistrikIdDesc = 'distrikId_DESC',
  DomisiliSamaAsc = 'domisiliSama_ASC',
  DomisiliSamaDesc = 'domisiliSama_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GolDarahAsc = 'golDarah_ASC',
  GolDarahDesc = 'golDarah_DESC',
  JenisDisabilitasAsc = 'jenisDisabilitas_ASC',
  JenisDisabilitasDesc = 'jenisDisabilitas_DESC',
  JenisDomisiliAsc = 'jenisDomisili_ASC',
  JenisDomisiliDesc = 'jenisDomisili_DESC',
  JenisIdAsc = 'jenisId_ASC',
  JenisIdDesc = 'jenisId_DESC',
  JenisKelaminAsc = 'jenisKelamin_ASC',
  JenisKelaminDesc = 'jenisKelamin_DESC',
  JmlAnggotaAsc = 'jmlAnggota_ASC',
  JmlAnggotaDesc = 'jmlAnggota_DESC',
  NamaLengkapAsc = 'namaLengkap_ASC',
  NamaLengkapDesc = 'namaLengkap_DESC',
  NomorIdAsc = 'nomorId_ASC',
  NomorIdDesc = 'nomorId_DESC',
  PekerjaanAsc = 'pekerjaan_ASC',
  PekerjaanDesc = 'pekerjaan_DESC',
  PendidikanAsc = 'pendidikan_ASC',
  PendidikanDesc = 'pendidikan_DESC',
  StatusPernikahanAsc = 'statusPernikahan_ASC',
  StatusPernikahanDesc = 'statusPernikahan_DESC',
  TeleponAsc = 'telepon_ASC',
  TeleponDesc = 'telepon_DESC',
  TglLahirAsc = 'tglLahir_ASC',
  TglLahirDesc = 'tglLahir_DESC',
  TmpLahirAsc = 'tmpLahir_ASC',
  TmpLahirDesc = 'tmpLahir_DESC',
  UnitSatuanAsc = 'unitSatuan_ASC',
  UnitSatuanDesc = 'unitSatuan_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  WargaNegaraAsc = 'wargaNegara_ASC',
  WargaNegaraDesc = 'wargaNegara_DESC',
}

export enum RoleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UserIdAsc = 'userId_ASC',
  UserIdDesc = 'userId_DESC',
}

export enum UserOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  RememberTokenAsc = 'rememberToken_ASC',
  RememberTokenDesc = 'rememberToken_DESC',
  RolesAsc = 'roles_ASC',
  RolesDesc = 'roles_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC',
}

export enum UserProfileOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NoContactAsc = 'noContact_ASC',
  NoContactDesc = 'noContact_DESC',
  OccupationAsc = 'occupation_ASC',
  OccupationDesc = 'occupation_DESC',
  PhotoAsc = 'photo_ASC',
  PhotoDesc = 'photo_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

export type DateTime = any;

/** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;

// ====================================================
// Documents
// ====================================================

export namespace AllPerson {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    persons: (Maybe<Persons>)[];
  };

  export type Persons = {
    __typename?: 'Person';

    id: number;

    agama: Maybe<string>;

    alamatDomisili: Maybe<string>;

    alamatId: Maybe<string>;

    alatBantu: Maybe<string>;

    alias: Maybe<string>;

    createdAt: DateTime;

    createdBy: Maybe<string>;

    disabilitas: boolean;

    distrikDomisili: Maybe<string>;

    distrikId: Maybe<string>;

    domisiliSama: boolean;

    email: Maybe<string>;

    golDarah: Maybe<string>;

    jenisDisabilitas: Maybe<string>;

    jenisDomisili: Maybe<string>;

    jenisId: Maybe<string>;

    jenisKelamin: Maybe<string>;

    jmlAnggota: Maybe<number>;

    namaLengkap: Maybe<string>;

    nomorId: Maybe<string>;

    pekerjaan: Maybe<string>;

    pendidikan: Maybe<string>;

    statusPernikahan: Maybe<string>;

    telepon: Maybe<string>;

    tglLahir: Maybe<DateTime>;

    tmpLahir: Maybe<string>;

    unitSatuan: Maybe<string>;

    updatedAt: DateTime;

    updatedBy: Maybe<string>;

    wargaNegara: Maybe<string>;

    applications: Maybe<Applications[]>;

    clients: Maybe<Clients[]>;

    documents: Maybe<Documents[]>;
  };

  export type Applications = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: DateTime;
  };

  export type Clients = {
    __typename?: 'Client';

    id: number;

    applicationId: ApplicationId;
  };

  export type ApplicationId = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: DateTime;
  };

  export type Documents = {
    __typename?: 'PersonDocument';

    id: number;

    title: Maybe<number>;

    file: Maybe<number>;
  };
}

export namespace AllPersonnnn {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    persons: (Maybe<Persons>)[];
  };

  export type Persons = {
    __typename?: 'Person';

    id: number;

    agama: Maybe<string>;

    alamatDomisili: Maybe<string>;

    alamatId: Maybe<string>;

    alatBantu: Maybe<string>;

    alias: Maybe<string>;

    createdAt: DateTime;

    createdBy: Maybe<string>;

    disabilitas: boolean;

    distrikDomisili: Maybe<string>;

    distrikId: Maybe<string>;

    domisiliSama: boolean;

    email: Maybe<string>;

    golDarah: Maybe<string>;

    jenisDisabilitas: Maybe<string>;

    jenisDomisili: Maybe<string>;

    jenisId: Maybe<string>;

    jenisKelamin: Maybe<string>;

    jmlAnggota: Maybe<number>;

    namaLengkap: Maybe<string>;

    nomorId: Maybe<string>;

    pekerjaan: Maybe<string>;

    pendidikan: Maybe<string>;

    statusPernikahan: Maybe<string>;

    telepon: Maybe<string>;

    tglLahir: Maybe<DateTime>;

    tmpLahir: Maybe<string>;

    unitSatuan: Maybe<string>;

    updatedAt: DateTime;

    updatedBy: Maybe<string>;

    wargaNegara: Maybe<string>;

    applications: Maybe<Applications[]>;

    clients: Maybe<Clients[]>;

    documents: Maybe<Documents[]>;
  };

  export type Applications = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: DateTime;
  };

  export type Clients = {
    __typename?: 'Client';

    id: number;

    applicationId: ApplicationId;
  };

  export type ApplicationId = {
    __typename?: 'Application';

    id: number;

    noReg: Maybe<string>;

    createdAt: DateTime;
  };

  export type Documents = {
    __typename?: 'PersonDocument';

    id: number;

    title: Maybe<number>;

    file: Maybe<number>;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

import gql from 'graphql-tag';

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: 'root',
})
export class AllPersonGQL extends Apollo.Query<AllPerson.Query, AllPerson.Variables> {
  document: any = gql`
    query allPerson {
      persons {
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
}
@Injectable({
  providedIn: 'root',
})
export class AllPersonnnnGQL extends Apollo.Query<AllPersonnnn.Query, AllPersonnnn.Variables> {
  document: any = gql`
    query allPersonnnn {
      persons {
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
}

// ====================================================
// END: Apollo Angular template
// ====================================================
