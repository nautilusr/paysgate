import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
            return `[${timestamp}] ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.printf(({ level, message }) => {
                    return `${level}: ${message}`;
                })
            )
        }),
        new winston.transports.File({
            filename: './log/error.log',
            level: 'error',
            format: winston.format.combine(
                winston.format.printf(({ level, message, timestamp, stack }) => {
                    let logMessage = `[${timestamp}] ${level}: ${message}`;
                    if (stack) {
                        logMessage += '\n' + stack;
                    }
                    return logMessage;
                })
            )
        })
    ]
});

export default logger;
