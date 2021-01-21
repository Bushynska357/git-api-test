import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFavouriteReposDialogComponent } from './open-favourite-repos-dialog.component';

describe('OpenFavouriteReposDialogComponent', () => {
  let component: OpenFavouriteReposDialogComponent;
  let fixture: ComponentFixture<OpenFavouriteReposDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenFavouriteReposDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenFavouriteReposDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
