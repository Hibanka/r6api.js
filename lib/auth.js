"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTokenFileLocation = exports.setCredentials = exports.getToken = exports.getAuth = exports.login = void 0;
var os_1 = require("os");
var path_1 = require("path");
var fs_1 = require("fs");
var fetch_1 = require("./fetch");
var utils_1 = require("./utils");
var LOGIN_TIMEOUT;
var credentials = { email: '', password: '' };
var tokenFileName = 'r6api-token.json';
var TEN_MIN_IN_MS = 10 * 60 * 1000;
var tokenFile = path_1.join(os_1.tmpdir(), tokenFileName);
var getExpiration = function (auth) {
    return +new Date(auth.expiration) - +new Date() - TEN_MIN_IN_MS;
};
var login = function () { return __awaiter(void 0, void 0, void 0, function () {
    var lastAuth, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, fs_1.promises.readFile(tokenFile, 'utf8')
                    .then(function (auth) { return JSON.parse(auth); })
                    .catch(function () { return ''; })];
            case 1:
                lastAuth = _a.sent();
                if (lastAuth && getExpiration(lastAuth) > 0) {
                    setNextLogin(lastAuth);
                    return [2, lastAuth];
                }
                token = 'Basic ' + Buffer
                    .from(credentials.email + ":" + credentials.password, 'utf8')
                    .toString('base64');
                return [2, fetch_1.default(utils_1.URLS.LOGIN(), {
                        method: 'POST',
                        body: JSON.stringify({ rememberMe: true })
                    })(token)
                        .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(res && res.ticket && res.expiration)) return [3, 2];
                                    return [4, fs_1.promises.writeFile(tokenFile, JSON.stringify(res))];
                                case 1:
                                    _a.sent();
                                    return [2, res];
                                case 2: throw new Error("No response from login: " + JSON.stringify(res));
                            }
                        });
                    }); })
                        .catch(function (err) {
                        clearTimeout(LOGIN_TIMEOUT);
                        throw err;
                    })];
        }
    });
}); };
exports.login = login;
var setNextLogin = function (auth) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        LOGIN_TIMEOUT = setTimeout(function () { return exports.login(); }, getExpiration(auth));
        return [2];
    });
}); };
var getAuth = function () { return exports.login(); };
exports.getAuth = getAuth;
var getToken = function () { return exports.login().then(function (auth) { return "Ubi_v1 t=" + auth.ticket; }); };
exports.getToken = getToken;
var setCredentials = function (email, password) {
    credentials.email = email;
    credentials.password = password;
};
exports.setCredentials = setCredentials;
var setTokenFileLocation = function (dir) {
    tokenFile = path_1.join(dir, tokenFileName);
};
exports.setTokenFileLocation = setTokenFileLocation;
//# sourceMappingURL=auth.js.map