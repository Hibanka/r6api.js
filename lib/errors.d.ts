declare abstract class BaseError extends Error {
    constructor(message: string);
}
export declare class UnknownAuthorizationError extends BaseError {
    constructor(message: string | number);
}
export declare class TooManyRequestsError extends BaseError {
    constructor();
}
export declare class BadRequestError extends BaseError {
    constructor(message: string | number);
}
export declare class MissingHeaderError extends BaseError {
    constructor();
}
export declare class MissingCredentialsError extends BaseError {
    constructor();
}
export declare class InvalidCredentialsError extends BaseError {
    constructor();
}
export declare class UnknownError extends BaseError {
    constructor(message: string);
}
export {};
//# sourceMappingURL=errors.d.ts.map