import useStore from '../../../src/hooks/useStore';
import {
  cleanCurrentUser, resetUserStore, setApiKey, setCurrentUser,
} from '../../../src/store/user';

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore();
  });

  it('should set  current user', () => {
    const store = useStore();
    setCurrentUser({ name: 'Vinicius' });
    expect(store.User.currentUser.name).toBe('Vinicius');
  });

  it('should set api_key in current user', () => {
    const store = useStore();
    setApiKey('123456');
    expect(store.User.currentUser.apiKey).toBe('123456');
  });

  it('should clean current user', () => {
    const store = useStore();
    setCurrentUser({ name: 'Vinicius' });
    expect(store.User.currentUser.name).toBe('Vinicius');
    cleanCurrentUser();
    expect(store.User.currentUser.name).toBeFalsy();
  });
});
