import { buildLogger, logger as winstonLogger } from './../../src/plugins/logger.plugin';


describe('plugins/logger.plugin.ts', () => {

    test('buildLogger should return a function logger', () => {

        const logger = buildLogger('test');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');

    })

    test('logger .log should log a message', () => {
        //preparacion con el espia
        const winstonLoggerLogSpy = jest.spyOn(winstonLogger, 'log');

        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        //estimulo
        logger.log(message);


        //verificacion
        expect(winstonLoggerLogSpy).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service
            }),
        );

    });

});