import { fetchListings, fetchCategories } from './API.js';

describe('API', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          json: () => (Promise.resolve({ server: 'HELLO!' })),
        });
      });
    });
  });

  describe('fetchCategories', () => {
    it('should fetch categories', async () => {
      expect.assertions(2);

      const cats = await fetchCategories();

      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.reverb.com/api/categories/flat',
        {
          headers: {
            Accept: 'application/json',
            'Accept-Version': '3.0',
            'Content-Type': 'application/json'
          }
        }
      );

      expect(cats).toEqual({ server: 'HELLO!' });
    });
  });

  describe('fetchListings', () => {
    it('should fetch listings', async () => {
      expect.assertions(2);

      const listings = await fetchListings();

      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.reverb.com/api/listings',
        {
          headers: {
            Accept: 'application/json',
            'Accept-Version': '3.0',
            'Content-Type': 'application/json'
          }
        }
      );

      expect(listings).toEqual({ server: 'HELLO!' });
    });
  });
});
