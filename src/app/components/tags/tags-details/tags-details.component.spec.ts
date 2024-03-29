import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDetailsComponent } from './tags-details.component';

describe('TagsDetailsComponent', () => {
  let component: TagsDetailsComponent;
  let fixture: ComponentFixture<TagsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
