const logger = require('pino')

logger.level = "trace"

logger.trace("pino trace")
logger.debug("pino debug")
logger.info("pino warn")
logger.warn("pino error")
logger.error("pino error")
logger.fatal("pino fatal")