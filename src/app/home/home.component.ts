import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model.quiz';
import { QuizService } from '../quiz.service';
import { AnsArray } from '../model.answers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quiz: Quiz[];
  AnsSelected: number; 
  displayResult: boolean = false;
  displayAnswers: boolean = false;

  displayReview: boolean = false;
  index: number = 0;
  answers: AnsArray[];

  flag: boolean = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

  loadQuiz(): void {
    this.flag = true;
    this.quizService.loadQuizDetails().subscribe(data=>this.quiz = data);
  }


  option = 0;
  i = 0;
  quizNumber = 1;
  score = 0;
  question =null;
  option1 = null;
  option2 = null;
  option3 = null;
  option4 = null;
  answer = null;
  answerOption = 0;
  qAnswered: boolean = false;
  q1 = 0;
  q2 = 0;
  q3 = 0;
  
  
  loadQuizQuestion(){
    this.flag = true;
    this.i = 0;
   // this.loadQuiz();
    this.quizService.loadQuizDetails().subscribe(data=> {this.quiz = data;
    this.quizNumber = data[this.i].quizNumber;
    this.question = data[this.i].question;
    this.option1 = data[this.i].option1;
    this.option2 = data[this.i].option2;
    this.option3 = data[this.i].option3;
    this.option4 = data[this.i].option4;
    this.answer = data[this.i].answer;
    this.answerOption = data[this.i].answerOption;
   // this.i++;
   /**  this.quizNumber++;
    if(this.i == this.quiz.length){
      this.i = 0;
    } */

    
    console.log(this.quizNumber);
    console.log(data);
    console.log("value of i: (loadQuestion)" + this.i);
  })
  }

  loadNextQuizQuestion(){
    this.i++;
    if(this.i == this.quiz.length){
      this.i = 0;
    } 
    this.quizService.loadQuizDetails().subscribe(data=> {this.quiz = data;
      this.quizNumber = data[this.i].quizNumber;
      this.question = data[this.i].question;
      this.option1 = data[this.i].option1;
      this.option2 = data[this.i].option2;
      this.option3 = data[this.i].option3;
      this.option4 = data[this.i].option4;
      this.answer = data[this.i].answer;
      this.answerOption = data[this.i].answerOption;
      
      console.log(this.quizNumber);
      console.log(data);
      console.log("value of i: (nextQuestion)" +this.i);
      
    })
  }

  /**  loadPrevQuizQuestion(){
    console.log("value of i: (prevQuestion)"+this.i);
      if(this.i == 0){
        this.i = this.quiz.length;
      } 
      this.i--;
    this.quizService.loadQuizDetails().subscribe(data=> {this.quiz = data;
      this.quizNumber = data[this.i].quizNumber;
      this.question = data[this.i].question;
      this.option1 = data[this.i].option1;
      this.option2 = data[this.i].option2;
      this.option3 = data[this.i].option3;
      this.option4 = data[this.i].option4;
      this.answer = data[this.i].answer;
      this.answerOption = data[this.i].answerOption;
       
      console.log(this.quizNumber);
      console.log( data);
    })
  } */

  quizValidate(): void {
    console.log("The quiz ans are:" + this.AnsSelected);
    this.quizService.loadQuizDetails().subscribe(data=> {this.quiz = data;
      this.answerOption = data[this.i].answerOption;
      //data[this.i].qAnswered = true;
      //this.qAnswered = data[this.i].qAnswered;
      console.log("question flag 1" + data[this.i].qAnswered);

      console.log(this.answerOption);

      
       // this.answers["q" +this.quizNumber] = this.AnsSelected;
      

     // console.log("question flag 2" + datathis.qAnswered);
    if((this.AnsSelected == this.answerOption) && (data[this.i].qAnswered == false)){
      this.score++;
      data[this.i].qAnswered = true;
     // this.qAnswered = data[this.i].qAnswered;
      console.log("Answer is correct");
      console.log("question flag 3" + data[this.i].qAnswered);
      
    }else{
      console.log('answer wrong');
      console.log("question flag 4" + this.qAnswered);
    }
    })
      
  }

  quizSubmit(): void {
   // console.log("Your score is:" + this.score);
   // alert("Your score is:" + this.score + " out of 3");
   this.displayResult = true;
  }

  viewAnswers(): void{
    this.displayAnswers = true;
  }
  

}
