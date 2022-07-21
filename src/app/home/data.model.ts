/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/naming-convention */
export class StoreAccount {
  public group: string;
  public store_id: string;
  public websiteEmail: string;
  public address: string;
  public telephone: string;
  public vatNumber: string;

  constructor(
    group: string,
    store_id: string,
    websiteEmail: string,
    address: string,
    telephone: string,
    vatNumber: string
  ) {
    this.group = group;
    this.store_id = store_id;
    this.websiteEmail = websiteEmail;
    this.address = address;
    this.telephone = telephone;
    this.vatNumber = vatNumber;
  }
}
