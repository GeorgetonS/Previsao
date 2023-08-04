import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrevisaoPage } from './previsao.page';

describe('PrevisaoPage', () => {
  let component: PrevisaoPage;
  let fixture: ComponentFixture<PrevisaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrevisaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
