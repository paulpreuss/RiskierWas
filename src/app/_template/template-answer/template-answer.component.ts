import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/_interface/answer';
import { Answerping } from 'src/app/_interface/answerping';

@Component({
  selector: 'app-template-answer',
  templateUrl: './template-answer.component.html',
  styleUrls: ['./template-answer.component.sass']
})
export class TemplateAnswerComponent implements OnInit {

  @Input() answer: Answer;
  @Output() answerPing: EventEmitter<any> = new EventEmitter<any>();
  color: string;

  constructor() { 
    this.color = '#313131';
  }

  ngOnInit(): void {
  }

  public checkAnswer(): void {
    if (this.answer.correct) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }

    const eventObject: Answerping = {
      label: 'checkanswer',
      answer: this.answer
    }
    this.answerPing.emit(eventObject);
  }
}
