import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHistoryModule } from './project-history.module';
import { ProjectHistoryComponent } from './project-history.component';

describe('ProjectHistoryComponent', () => {
  let component: ProjectHistoryComponent;
  let fixture: ComponentFixture<ProjectHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ProjectHistoryModule ],
      declarations: [ ProjectHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
