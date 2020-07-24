import { Injectable } from '@angular/core';
import { City } from './city';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url = 'http://localhost:5000/cities';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(result?:T){
    return (error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getCities(): Observable<City[]>{
    return this.http.get<City[]>(this.url)
      .pipe(
        catchError(this.handleError<City[]>([]))
      );
  }

  getCity(id:number): Observable<City>{
    return this.http.get<City>(this.url + "/" + id)
      .pipe(
        catchError(this.handleError<City>())
      );
  }

  updateCity(city:City): Observable<any>{
    return this.http.put(this.url + "/" + city.id, city, this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  createCity(city:City):Observable<any>{
    return this.http.post(this.url,city,this.httpOptions).pipe(
      catchError(this.handleError<City>())
    );
  }

  updateUrl(id:number, url:string):Observable<any>{
    var send: Object[] = [
      {
        "op":"replace",
        "path":"/img_url",
        "value":url
      }
    ];
    return this.http.patch(this.url + '/' + id,send,this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  deleteCity(id:number): Observable<any> {
    return this.http.delete(this.url + '/' + id,this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }
}
