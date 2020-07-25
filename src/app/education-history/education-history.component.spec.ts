import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationHistoryModule } from './education-history.module';
import { EducationHistoryComponent } from './education-history.component';

describe('EducationHistoryComponent', () => {
  let component: EducationHistoryComponent;
  let fixture: ComponentFixture<EducationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EducationHistoryModule],
      declarations: [ EducationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
