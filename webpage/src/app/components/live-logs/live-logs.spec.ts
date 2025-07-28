import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveLogsComponent } from './live-logs';

describe('LiveLogsComponent', () => {
  let component: LiveLogsComponent;
  let fixture: ComponentFixture<LiveLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveLogsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LiveLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});