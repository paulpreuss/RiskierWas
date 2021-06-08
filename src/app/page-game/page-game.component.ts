import { Component, OnInit } from '@angular/core';
import { Answerping } from '../_interface/answerping';
import { Group } from '../_interface/group';
import { Question } from '../_interface/question';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.sass']
})
export class PageGameComponent implements OnInit {

  groups: Group[];
  activeQuestion: Question;

  constructor() {
    this.groups = [
      { id: 1, score: 0, active: true },
      { id: 2, score: 0, active: false }
    ];
    this.activeQuestion = {
      id: 1,
      label: 'Was ist das größte Gemälde der Welt?',
      answers: [
        {
          label: 'Test Test Test Test Test Test Test Test',
          correct: true
        },
        {
          label: 'Test Test Test',
          correct: true
        },
        {
          label: 'Test Test Test Test',
          correct: true
        },
        {
          label: 'Test Test',
          correct: true
        },
        {
          label: 'Test Test Test Test Test',
          correct: false
        },
        {
          label: 'Test Test Test',
          correct: false
        },
        {
          label: 'Test',
          correct: false
        },
        {
          label: 'Test Test',
          correct: false
        }
      ],
      answersCorrect: 8
    };
  }

  ngOnInit(): void {
  }


  public add(): void {
    this.groups.push(
      {
        id: this.groups.length + 1,
        score: 0,
        active: false
      }
    );
  }

  public remove(): void {
    if (this.groups.length > 2) {
      this.groups.pop();
    }
  }

  public ckeckAnswer(event?: Answerping): void {
    let answerWasCorrect = true;
    this.groups.forEach(group => {
      if (group.active) {
        if (event.answer.correct) {
          group.score += 100;
        }
        else {
          group.score = 0;
          answerWasCorrect = false;
        }
      }
    });
    if (!answerWasCorrect) {
      this.goToNextGroup();
    }
  }

  public goToNextGroup(): void {
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].active) {
        this.groups[i].active = false;
        if (i +1 == this.groups.length) {
          this.groups[0].active = true;
        } else {
          this.groups[i + 1].active = true;
        }
      }
      break;
    }
  }
}
