import nock from 'nock';

import { Testsdk } from '../../../src';

import { PassthroughService } from '../../../src/services/passthrough/Passthrough';

describe('test PassthroughService object', () => {
  it('should be an object', () => {
    expect(typeof PassthroughService).toBe('function');
  });
});

describe('test Passthrough', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Testsdk({});

    nock.cleanAll();
  });

  describe('test passthroughControllerPassthroughRequest', () => {
    test('test api call', () => {
      const scope = nock('http://api.example.com')
        .post('/passthrough?integrationId=reprehenderit&linkedUserId=rerum')
        .reply(200, { data: {} });
      return sdk.passthrough
        .passthroughControllerPassthroughRequest({}, 'reprehenderit', 'rerum')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://api.example.com')
        .post('/passthrough?integrationId=quos&linkedUserId=laudantium')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.passthrough.passthroughControllerPassthroughRequest(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://api.example.com')
        .post('/passthrough?integrationId=cupiditate&linkedUserId=nobis')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.passthrough.passthroughControllerPassthroughRequest({}, 'cupiditate', 'nobis'),
      ).rejects.toThrow();
    });
  });
});
