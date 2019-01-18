import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentComponent } from './comment/comment.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
