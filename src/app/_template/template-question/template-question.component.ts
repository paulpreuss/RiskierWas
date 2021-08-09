import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Answerping } from 'src/app/_interface/answerping';
import { Question } from '../../_interface/question';
import { TemplateAnswerComponent } from '../template-answer/template-answer.component';

@Component({
  selector: 'app-template-question',
  templateUrl: './template-question.component.html',
  styleUrls: ['./template-question.component.sass']
})
export class TemplateQuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() questionPing: EventEmitter<any> = new EventEmitter<any>();
  @ViewChildren(TemplateAnswerComponent) answers: QueryList<TemplateAnswerComponent>;

  ingame: boolean;

  constructor() {
    this.ingame = false;
  }

  ngOnInit(): void {
  }

  public startGame() {
    this.ingame = true;
    this.answers.forEach(instance => {
      instance.startGame();
    });
  }

  public finishGame() {
    this.ingame = false;
    this.answers.forEach(instance => {
      instance.finishGame();
    });
  }

  public checkAnswer(event?: Answerping): void {
    if (this.ingame) {
      if (event.answer.correct) {
        this.question.answersCorrect--;
      }
  
      if (this.question.answersCorrect == 0) {
        this.answers.forEach(instance => {
          instance.reveal();
        })
      }
      this.questionPing.emit(event);
    }
  }
}
