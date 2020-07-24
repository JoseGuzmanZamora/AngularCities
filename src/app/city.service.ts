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

  private handleError<T>(operation='operation', result?:T){
    return (error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getCities(): Observable<City[]>{
    return this.http.get<City[]>(this.url)
      .pipe(
        catchError(this.handleError<City[]>('getCities', []))
      );
  }

  getCity(id:number): Observable<City>{
    return this.http.get<City>(this.url + "/" + id);
  }

  updateCity(city:City): Observable<any>{
    return this.http.put(this.url + "/" + city.id, city, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateCity'))
    );
  }

  createCity(city:City):Observable<any>{
    return this.http.post(this.url,city,this.httpOptions).pipe(
      catchError(this.handleError<City>('createCity'))
    );
  }
}
