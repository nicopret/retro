import { CardListRadioModule } from './card-list-radio.module';

describe('CardListRadioModule', () => {
  let cardListRadioModule: CardListRadioModule;

  beforeEach(() => {
    cardListRadioModule = new CardListRadioModule();
  });

  it('should create an instance', () => {
    expect(cardListRadioModule).toBeTruthy();
  });
});
