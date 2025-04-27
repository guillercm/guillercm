import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmyGeneratorComponent } from './readmy-generator.component';

describe('ReadmyGeneratorComponent', () => {
  let component: ReadmyGeneratorComponent;
  let fixture: ComponentFixture<ReadmyGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadmyGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadmyGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
