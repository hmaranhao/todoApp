import * as crypto from 'crypto'

export interface NameId {
  _id?: string;
  name?: string;
}

export abstract class BaseEntity<T> {
  protected _id: string
  public props: T

  get id() {
    return this._id
  }

  constructor(props: T, _id?: string) {
    this.props = props
    this._id = _id ?? crypto.randomUUID()
  }
  
}