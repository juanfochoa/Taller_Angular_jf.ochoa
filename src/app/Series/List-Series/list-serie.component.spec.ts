/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieListComponent } from './list-serie.component';

describe ('SerieListComponent', () => {
    let component: SerieListComponent;
    let fixture: ComponentFixture<SerieListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SerieListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SerieListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});