import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsUserDialogComponent } from './posts-user-dialog.component';

describe('PostsUserDialogComponent', () => {
  let component: PostsUserDialogComponent;
  let fixture: ComponentFixture<PostsUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
