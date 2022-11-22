export declare class Logger {
    private location?;
    constructor(location?: string | undefined);
    setLocation(location: string): void;
    log(msg: string): void;
    error(msg: string): void;
    private logWithLocation;
}
