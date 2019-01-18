import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from './../comment';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('komentarz') comment: Comment;
  constructor() { }

  ngOnInit() {
  }

}
