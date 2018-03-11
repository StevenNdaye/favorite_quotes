import {Injectable} from '@angular/core';

/*
  Generated class for the SettingsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsServiceProvider {

  setAltBackground(value: boolean) {
    this._altBackground = value;
  }

  private _altBackground = false;

  isAltBackground() {
    return this._altBackground;
  }
}
