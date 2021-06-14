"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownError = exports.InvalidCredentialsError = exports.MissingCredentialsError = exports.MissingHeaderError = exports.BadRequestError = exports.TooManyRequestsError = exports.UnknownAuthorizationError = void 0;
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
        return _super.call(this, message) || this;
    }
    return BaseError;
}(Error));
var UnknownAuthorizationError = (function (_super) {
    __extends(UnknownAuthorizationError, _super);
    function UnknownAuthorizationError(message) {
        return _super.call(this, "Unknown Authorization: " + message) || this;
    }
    return UnknownAuthorizationError;
}(BaseError));
exports.UnknownAuthorizationError = UnknownAuthorizationError;
var TooManyRequestsError = (function (_super) {
    __extends(TooManyRequestsError, _super);
    function TooManyRequestsError() {
        return _super.call(this, 'Too many requests') || this;
    }
    return TooManyRequestsError;
}(BaseError));
exports.TooManyRequestsError = TooManyRequestsError;
var BadRequestError = (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message) {
        return _super.call(this, "Bad request: " + message) || this;
    }
    return BadRequestError;
}(BaseError));
exports.BadRequestError = BadRequestError;
var MissingHeaderError = (function (_super) {
    __extends(MissingHeaderError, _super);
    function MissingHeaderError() {
        return _super.call(this, 'Missing header') || this;
    }
    return MissingHeaderError;
}(BaseError));
exports.MissingHeaderError = MissingHeaderError;
var MissingCredentialsError = (function (_super) {
    __extends(MissingCredentialsError, _super);
    function MissingCredentialsError() {
        return _super.call(this, 'Missing credentials') || this;
    }
    return MissingCredentialsError;
}(BaseError));
exports.MissingCredentialsError = MissingCredentialsError;
var InvalidCredentialsError = (function (_super) {
    __extends(InvalidCredentialsError, _super);
    function InvalidCredentialsError() {
        return _super.call(this, 'Invalid credentials') || this;
    }
    return InvalidCredentialsError;
}(BaseError));
exports.InvalidCredentialsError = InvalidCredentialsError;
var UnknownError = (function (_super) {
    __extends(UnknownError, _super);
    function UnknownError(message) {
        return _super.call(this, "Unknown Error: " + message) || this;
    }
    return UnknownError;
}(BaseError));
exports.UnknownError = UnknownError;
//# sourceMappingURL=errors.js.map