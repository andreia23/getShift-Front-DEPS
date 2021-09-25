import { TestBed } from '@angular/core/testing';

import { PedidoService } from './pedido.service';
import {PedidoFirestoreService} from './pedido-firestore.service';

describe('PedidoService', () => {
  let service: PedidoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
