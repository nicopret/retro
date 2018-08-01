import { CardListCheckboxModule } from './card-list-checkbox.module';

describe('CardListCheckboxModule', () => {
  let cardListCheckboxModule: CardListCheckboxModule;

  beforeEach(() => {
    cardListCheckboxModule = new CardListCheckboxModule();
  });

  it('should create an instance', () => {
    expect(cardListCheckboxModule).toBeTruthy();
  });
});
