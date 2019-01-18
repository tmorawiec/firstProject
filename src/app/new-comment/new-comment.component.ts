import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from './../comment';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Output() commentCreated = new EventEmitter<Comment>();
  constructor() { }
  ngOnInit() {

  }
  AddComment(imie:string, komentarz:string) {
    this.commentCreated.emit(new Comment(imie,komentarz));
    }

}
