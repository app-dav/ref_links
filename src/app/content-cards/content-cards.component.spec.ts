/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentCardsComponent } from './content-cards.component';
import {CardComponent} from "./card.component";
import {MainContentService} from "../services/main-content.service";
import {ContentCard} from "../models/content-card";
import {MaterialModule} from "@angular/material";

describe('ContentCardsComponent', () => {
  let component: ContentCardsComponent;
  let fixture: ComponentFixture<ContentCardsComponent>;

 /* beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCardsComponent, ContentCardsComponent,CardComponent
      ],
      providers: [ MaterialModule
        ,{provide: MainContentService, useValue:
        {getContent(): any {
        return [
          new ContentCard("Ides", "These programs are integrated development environments", 1, "", null),
        new ContentCard("Learning", "This area has content to help you learn to program. there are tutorials, videos and blogs.", 2, "", null),
        new ContentCard("Language", "These are some great languages to start learning with", 3, "", null),
        ]}}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
