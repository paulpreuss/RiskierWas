import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Answerping } from 'src/app/_interface/answerping';
import { Question } from '../../_interface/question';

@Component({
  selector: 'app-template-question',
  templateUrl: './template-question.component.html',
  styleUrls: ['./template-question.component.sass']
})
export class TemplateQuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() questionPing: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public checkAnswer(event?: Answerping): void {
    if (event.answer.correct) {
      this.question.answersCorrect--;
    }

    if (this.question.answersCorrect == 0) {

    }
    this.questionPing.emit(event);
  }
}
