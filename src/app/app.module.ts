import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateFooterComponent } from './_template/template-footer/template-footer.component';
import { TemplateQuestionComponent } from './_template/template-question/template-question.component';
import { TemplateAnswerComponent } from './_template/template-answer/template-answer.component';
import { PageGameComponent } from './page-game/page-game.component';
import { TemplateGroupComponent } from './_template/template-group/template-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
    TemplateQuestionComponent,
    TemplateAnswerComponent,
    PageGameComponent,
    TemplateGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
