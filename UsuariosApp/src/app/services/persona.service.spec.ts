import { async, getTestBed, TestBed } from '@angular/core/testing';
import { PersonaService } from './persona.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

describe('PersonasRegistradasComponent', () => {
  let Injector: TestBed;
  let httpMock: HttpTestingController;


    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
        HttpClientTestingModule,
        HttpTestingController
        ],
        declarations: [
            PersonaService
        ],
      }).compileComponents();
      Injector = getTestBed();
      httpMock = Injector.get(HttpTestingController);

    }));
    
  });
  