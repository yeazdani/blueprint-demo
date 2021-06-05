import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private _apiBaseUrl = environment.api.general.baseUrl;

  protected http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }
  /**
   * Returns base api url
   */
  public get baseApiUrl(): any {
    return this._apiBaseUrl;
  }

  /**
   * Builds http GET request with base url 
   * @param path 
   * @param params 
   */
  get(path: string, header?: any): Observable<any> {
    const headers = header;
    return this.http.get(`${this.baseApiUrl}${path}`, { headers });
  }
  /**
   * Builds http PUT request with base url
   * @param path 
   * @param body 
   */
  put(path: string, body: any, header?: any): Observable<any> {
    const headers = header;
    return this.http.put(`${this.baseApiUrl}${path}`, body, {
      headers
    });
  }
  /**
   * Builds http POST request with base url
   * @param path 
   * @param body 
   */
  post(path: string, body: any, header?: any): Observable<any> {
    const headers = header;
    return this.http.post(`${this.baseApiUrl}${path}`, body, {
      headers
    });
  }
  /**
   * Builds http DELETE request with base url
   * @param path 
   */
  delete(path: any, header?: any): Observable<any> {
    const headers = header;
    return this.http.delete(`${this.baseApiUrl}${path}/`, { headers });
  }

}
