import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/_interface/answer';
import { Answerping } from 'src/app/_interface/answerping';
import { Question } from 'src/app/_interface/question';

@Component({
  selector: 'app-template-answer',
  templateUrl: './template-answer.component.html',
  styleUrls: ['./template-answer.component.sass']
})
export class TemplateAnswerComponent implements OnInit {

  @Input() answer: Answer;
  @Input() parentQuestion: Question;
  @Output() answerPing: EventEmitter<any> = new EventEmitter<any>();
  color: string;
  comment: string;
  ingame: boolean;

  constructor() { 
    this.color = '#313131';
    this.ingame = false;
  }

  ngOnInit(): void {
  }

  public startGame(): void {
    this.ingame = true;
  }

  public finishGame(): void {
    this.ingame = false;
  }

  public checkAnswer(): void {
    if (this.ingame) {
      this.reveal();
      const eventObject: Answerping = {
        label: 'checkanswer',
        answer: this.answer
      }
      this.answerPing.emit(eventObject);
    }
  }

  public reveal(): void {
    if (this.ingame) {
      if (this.answer.correct) {
        this.color = 'green';
      } else {
        this.color = 'red';
      }
      this.comment = this.answer.comment;
    }
  }
}
