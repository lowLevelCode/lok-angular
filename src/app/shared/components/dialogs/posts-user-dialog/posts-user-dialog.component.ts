import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostInputDialog } from 'src/app/interfaces/post.interface';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-posts-user-dialog',
  templateUrl: './posts-user-dialog.component.html',
  styleUrls: ['./posts-user-dialog.component.scss']
})
export class PostsUserDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PostsUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public postsInput: PostInputDialog,
    private readonly _responsiveService:ResponsiveService) {}

  ngOnInit():void {
    this._responsiveService.getMobileSizeState().subscribe((state:BreakpointState)=>{
      if(state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small])
        this.dialogRef.updateSize("90%");
    });  
  }
  onDeletePost(idPost:number) {    
    this.dialogRef.close(idPost);
  }
}
