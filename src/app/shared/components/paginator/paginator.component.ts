import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  numberPages: number[];
  @Input() page:number = 1;  
  @Output() onPaginate = new EventEmitter<number>();

  @Input() set totalPage(totalPage: number) { 
    this.numberPages = [];
    for (let index = 1; index <= totalPage; index++) {      
      this.numberPages.push(index);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onPage(numberPage:number){
    this.onPaginate.emit(numberPage);
  }
}
