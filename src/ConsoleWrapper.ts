export class ConsoleWrapper {
  private static instance: ConsoleWrapper;

  wrapper: Console;

  originalLog: Function;
  originalInfo: Function;
  originalDebug: Function;
  originalError: Function;
  originalException: Function;
  originalTrace: Function;
  originalWarn: Function;

  constructor(originalConsole: Console) {
    this.wrapper = originalConsole;
    this.originalLog = originalConsole.log;
    this.originalInfo = originalConsole.info;
    this.originalDebug = originalConsole.debug;
    this.originalError = originalConsole.error;
    this.originalException = originalConsole.exception;
    this.originalTrace = originalConsole.trace;
    this.originalWarn = originalConsole.warn;
  }

  private static getInstance() {
    return this.instance;
  }

  static init(originalConsole: Console) {
    const instance = new ConsoleWrapper(originalConsole);
    this.instance = instance;
    instance.intercept();
  }

  private intercept(): void {
    this.wrapper.log = this.log.bind(this);
    this.wrapper.info = this.info.bind(this);
    this.wrapper.debug = this.debug.bind(this);
    this.wrapper.error = this.error.bind(this);
    this.wrapper.exception = this.exception.bind(this);
    this.wrapper.trace = this.trace.bind(this);
    this.wrapper.warn = this.warn.bind(this);
  }

  debug(message?: any, ...optionalParams: any[]): void {
    this.originalDebug(message, ...optionalParams);
  }

  error(message?: any, ...optionalParams: any[]): void {
    this.originalError(message, ...optionalParams);
  }

  exception(message?: string, ...optionalParams: any[]): void {
    this.originalException(message, ...optionalParams);
  }

  info(message?: any, ...optionalParams: any[]): void {
    this.originalInfo(message, ...optionalParams);
  }

  log(message?: any, ...optionalParams: any[]): void {
    this.originalLog(message, ...optionalParams);
  }

  trace(message?: any, ...optionalParams: any[]): void {
    this.originalTrace(message, ...optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]): void {
    this.originalWarn(message, ...optionalParams);
  }
}
