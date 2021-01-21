import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenInfoReposDialogComponent } from './open-info-repos-dialog.component';

describe('OpenInfoReposDialogComponent', () => {
  let component: OpenInfoReposDialogComponent;
  let fixture: ComponentFixture<OpenInfoReposDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenInfoReposDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenInfoReposDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
