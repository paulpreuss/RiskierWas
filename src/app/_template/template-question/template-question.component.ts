import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    this.questionPing.emit(event);
  }
}
