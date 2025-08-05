import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesContainerItemComponent } from './images-container-item.component';

describe('ImagesContainerItemComponent', () => {
  let component: ImagesContainerItemComponent;
  let fixture: ComponentFixture<ImagesContainerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesContainerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesContainerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
