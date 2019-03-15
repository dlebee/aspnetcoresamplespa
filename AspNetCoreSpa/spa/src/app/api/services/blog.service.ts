/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Blog } from '../models/blog';
@Injectable({
  providedIn: 'root',
})
class BlogService extends __BaseService {
  static readonly GetPath = '/api/v1/blog/{page}/{pageSize}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `BlogService.GetParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `page`:
   *
   * @return Success
   */
  GetResponse(params: BlogService.GetParams): __Observable<__StrictHttpResponse<Array<Blog>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/blog/${params.page}/${params.pageSize}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Blog>>;
      })
    );
  }
  /**
   * @param params The `BlogService.GetParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `page`:
   *
   * @return Success
   */
  Get(params: BlogService.GetParams): __Observable<Array<Blog>> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as Array<Blog>)
    );
  }
}

module BlogService {

  /**
   * Parameters for Get
   */
  export interface GetParams {
    pageSize: number;
    page: number;
  }
}

export { BlogService }
