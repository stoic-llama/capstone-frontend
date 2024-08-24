import healthcheck from '@/serverMiddleware/healthcheck.js'; 

describe('healthcheck serverMiddleware', () => {
  let req;
  let res;
  let mockFormattedDateNow;

  beforeEach(() => {
    req = {};
    res = {
      setHeader: jest.fn(),
      statusCode: 0,
      end: jest.fn(),
    };
    // Mock process.uptime() to return a fixed value
    jest.spyOn(process, 'uptime').mockReturnValue(1234);
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore original implementations
  });

  it('should handle successful response', () => {
    mockFormattedDateNow = jest.fn().mockReturnValue('2024-08-24T12:34:56Z');

    healthcheck.handler(req, res, mockFormattedDateNow);

    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
    expect(res.statusCode).toBe(200);
    expect(res.end).toHaveBeenCalledWith(
      JSON.stringify({
        name: 'capstone-frontend',
        message: 'OK',
        uptime: '1234 seconds',
        timestamp: '2024-08-24T12:34:56Z',
      })
    );
  });

  it('validate date formatting', () => {
    const result = healthcheck.formattedDateNow();
    const pattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    expect(result).toMatch(pattern);
  });
});
