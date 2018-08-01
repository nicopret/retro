import { AvatarModule } from './avatar.module';

describe('AvatarModule', () => {
  let avatarModule: AvatarModule;

  beforeEach(() => {
    avatarModule = new AvatarModule();
  });

  it('should create an instance', () => {
    expect(avatarModule).toBeTruthy();
  });
});
