import { Comment } from './../comment';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: Comment[];
  constructor(private DaneKomentarzy: DataServiceService) {

    
  // this.comments = [
  // new Comment("Grzegorz", "Pierwszy komentarz"),
  // new Comment("Iza", "Super strona"),
  // new Comment("Alicja", "Fajny film wczoraj widziałam")
  // ]
  }
  ngOnInit() {
    this.comments = this.DaneKomentarzy.getKomentarze();
  }
  DodajComment(param){
    this.comments.unshift(param);
    }
  UsunComment(param){
    this.comments = this.comments.filter( e => e.imie!== param);
    }
}
