import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz} from './model.quiz';

@Injectable({
  providedIn: 'root' //It is equal to Providers:: [ProductService]
})
export class QuizService {

  constructor(private httpClient: HttpClient) { } //DI for httpClient

  loadQuizDetails():Observable<Quiz[]>{
    return this.httpClient.get<Quiz[]>("http://localhost:3000/response");
  }
}
