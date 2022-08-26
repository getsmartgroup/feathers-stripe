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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler_1 = __importDefault(require("../errorHandler"));
var normalizeQuery_1 = __importDefault(require("../normalizeQuery"));
var base_1 = __importDefault(require("./base"));
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.find = function (params) {
            return _this.stripe.paymentMethods.list((0, normalizeQuery_1.default)(params)).catch(errorHandler_1.default);
        };
        _this.get = function (id) { return _this.stripe.paymentMethods.retrieve(id).catch(errorHandler_1.default); };
        _this.create = function (data) {
            return _this.stripe.paymentMethods.create(data).catch(errorHandler_1.default);
        };
        _this.patch = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.update.apply(_this, args);
        };
        _this.update = function (id, data) {
            return _this.stripe.paymentMethods.update(id, data).catch(errorHandler_1.default);
        };
        _this.remove = function (id, params) {
            return _this.stripe.paymentMethods.detach(id, params.stripe).catch(errorHandler_1.default);
        };
        return _this;
    }
    return Service;
}(base_1.default));
exports.default = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudE1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9QYXltZW50TWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUVBQTBDO0FBQzFDLHFFQUE4QztBQUM5QyxnREFBeUI7QUFFekI7SUFBcUMsMkJBQUk7SUFBekM7UUFBQSxxRUFnQkM7UUFmQSxVQUFJLEdBQUcsVUFBQyxNQUFjO1lBQ3JCLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUEsd0JBQWMsRUFBQyxNQUFNLENBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBWSxDQUFDO1FBQWxGLENBQWtGLENBQUE7UUFFbkYsU0FBRyxHQUFHLFVBQUMsRUFBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBWSxDQUFDLEVBQTNELENBQTJELENBQUE7UUFFakYsWUFBTSxHQUFHLFVBQUMsSUFBc0M7WUFDL0MsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFZLENBQUM7UUFBM0QsQ0FBMkQsQ0FBQTtRQUU1RCxXQUFLLEdBQUc7WUFBQyxjQUFtQjtpQkFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO2dCQUFuQix5QkFBbUI7O1lBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxPQUFYLEtBQUksRUFBVyxJQUFJO1FBQW5CLENBQW9CLENBQUE7UUFFckQsWUFBTSxHQUFHLFVBQUMsRUFBVSxFQUFFLElBQVM7WUFDOUIsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBWSxDQUFDO1FBQS9ELENBQStELENBQUE7UUFFaEUsWUFBTSxHQUFHLFVBQUMsRUFBVSxFQUFFLE1BQWM7WUFDbkMsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQVksQ0FBQztRQUF4RSxDQUF3RSxDQUFBOztJQUMxRSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFoQkQsQ0FBcUMsY0FBSSxHQWdCeEMifQ==