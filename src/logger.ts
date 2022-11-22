type LogFunction = (msg: string) => void;

export class Logger {
  constructor(private location?: string) {}

  public setLocation(location: string): void {
    this.location = location;
  }

  public log(msg: string): void {
    if (this.location) {
      this.logWithLocation(console.log, msg);
    } else {
      console.log(msg);
    }
  }

  public error(msg: string): void {
    if (this.location) {
      this.logWithLocation(console.error, msg);
    } else {
      console.error(msg);
    }
  }

  private logWithLocation(cb: LogFunction, msg: string): void {
    if (!this.location) {
      throw new Error('Location not defined in logger');
    }

    const messageToLog = `${this.location} ---> ${msg}`;
    cb(messageToLog);
  }
}
