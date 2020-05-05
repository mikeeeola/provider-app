import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobHistoryPage } from './job-history.page';

describe('JobHistoryPage', () => {
  let component: JobHistoryPage;
  let fixture: ComponentFixture<JobHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
