import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../app.constants'
import { IData } from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }
  /**
   * Get magazines endpoint
   */

  getMagazines({offset= '0', filter}) {
    return new Promise((resolve, reject) => {
      const params = {
        ts: AppSettings.API_TS,
        apikey: AppSettings.API_KEY,
        hash: AppSettings.API_HASH,
        orderBy: '-focDate',
        limit: '12',
        offset: offset,
        ...filter

      }
      console.log(params)
      this.http
        .get<IData>(`${AppSettings.API_ENDPOINT}/comics`, { params })
        .toPromise()
        .then((res: any) => resolve(res.data))
        .catch(error => reject(error));
    });
  }
  /**
   * Get series endpoint
   */

  getSeries() {
    return new Promise((resolve, reject) => {
      const params = {
        ts: AppSettings.API_TS,
        apikey: AppSettings.API_KEY,
        hash: AppSettings.API_HASH,
        orderBy: 'title',
        limit: '20',
        offset: '0'

      }
      this.http
        .get<IData>(`${AppSettings.API_ENDPOINT}/series`, { params })
        .toPromise()
        .then((res: any) => resolve(res.data))
        .catch(error => reject(error));
    });
  }
  /**
   * Get characters endpoint
   */

  getCharacters() {
    return new Promise((resolve, reject) => {
      const params = {
        ts: AppSettings.API_TS,
        apikey: AppSettings.API_KEY,
        hash: AppSettings.API_HASH,
        orderBy: 'name',
        limit: '50',
        offset: '0'

      }
      this.http
        .get<IData>(`${AppSettings.API_ENDPOINT}/characters`, { params })
        .toPromise()
        .then((res: any) => resolve(res.data))
        .catch(error => reject(error));
    });
  }

  /**
 * Get series endpoint
 */

  getCreators() {
    return new Promise((resolve, reject) => {
      const params = {
        ts: AppSettings.API_TS,
        apikey: AppSettings.API_KEY,
        hash: AppSettings.API_HASH,
        limit: '20',
        offset: '0'

      }
      this.http
        .get<IData>(`${AppSettings.API_ENDPOINT}/creators`, { params })
        .toPromise()
        .then((res: any) => resolve(res.data))
        .catch(error => reject(error));
    });
  }
  /**
 * Get series endpoint
 */

  getBanners() {
    return new Promise((resolve, reject) => {
      const params = {
        ts: AppSettings.API_TS,
        apikey: AppSettings.API_KEY,
        hash: AppSettings.API_HASH,
        limit: '5',
        offset: '0',
        orderBy:'-focDate'

      }
      this.http
        .get<IData>(`${AppSettings.API_ENDPOINT}/comics`, { params })
        .toPromise()
        .then((res: any) => resolve(res.data))
        .catch(error => reject(error));
    });
  }

}

