import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }

  getstudents():Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit=10&page=1');
  }
  getstudent(id:any):Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students/'+id);
  }
  getFilteredStudents(term:string):Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students?filter='+term);
    
  }
  getPagedstudents(page:number):Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit=10&page='+page);
  }
  getSortedstudents(column:string,order:string):Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students?sortBy='+column+'&order='+order);
  }
  createstudent(data:any):Observable<any>{
    return this._httpClient.post('https://62b9299dff109cd1dc8ca34f.mockapi.io/students',data);
  }
  deletestudent(id:any):Observable<any>{
    return this._httpClient.delete('https://62b9299dff109cd1dc8ca34f.mockapi.io/students/'+id);
  }
  updatestudent(id:string,data:any):Observable<any>{
    return this._httpClient.put('https://62b9299dff109cd1dc8ca34f.mockapi.io/students/'+id,data);
  }
}
