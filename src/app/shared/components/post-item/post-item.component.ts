import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { SweetAlertService } from 'src/app/services/dialogs.service';

import { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() avatarImg:string;
  @Input() post:Post;
  @Output() onDelete = new EventEmitter<number>();

  constructor(private readonly _sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
  }

  async onClear(idPost:number) {
    const result:SweetAlertResult = 
    await this._sweetAlertService.confirmDelete('¿Quieres eliminar este Post?');
    if(result.isConfirmed){
      this.onDelete.emit(idPost);
    }
  }

}
