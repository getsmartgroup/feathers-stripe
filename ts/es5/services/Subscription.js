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
            return _this.stripe.subscriptions
                .list(normalizeQuery_1.default(params))
                .then(function (res) { return res.data; })
                .catch(errorHandler_1.default);
        };
        _this.get = function (id) {
            return _this.stripe.subscriptions.retrieve(id).catch(errorHandler_1.default);
        };
        _this.create = function (data) {
            return _this.stripe.subscriptions.create(data).catch(errorHandler_1.default);
        };
        _this.patch = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.update.apply(_this, args);
        };
        _this.update = function (id, data) {
            return _this.stripe.subscriptions.update(id, data).catch(errorHandler_1.default);
        };
        _this.remove = function (id, params) {
            return _this.stripe.subscriptions.del(id, params.stripe).catch(errorHandler_1.default);
        };
        return _this;
    }
    return Service;
}(base_1.default));
exports.default = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL1N1YnNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlFQUEwQztBQUMxQyxxRUFBOEM7QUFDOUMsZ0RBQXlCO0FBRXpCO0lBQXFDLDJCQUFJO0lBQXpDO1FBQUEscUVBb0JDO1FBbkJBLFVBQUksR0FBRyxVQUFDLE1BQWM7WUFDckIsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWE7aUJBQ3ZCLElBQUksQ0FBQyx3QkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QixJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFSLENBQVEsQ0FBQztpQkFDckIsS0FBSyxDQUFDLHNCQUFZLENBQUM7UUFIckIsQ0FHcUIsQ0FBQTtRQUV0QixTQUFHLEdBQUcsVUFBQyxFQUFVO1lBQ2hCLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBWSxDQUFDO1FBQTFELENBQTBELENBQUE7UUFFM0QsWUFBTSxHQUFHLFVBQUMsSUFBcUM7WUFDOUMsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFZLENBQUM7UUFBMUQsQ0FBMEQsQ0FBQTtRQUUzRCxXQUFLLEdBQUc7WUFBQyxjQUFtQjtpQkFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO2dCQUFuQix5QkFBbUI7O1lBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxPQUFYLEtBQUksRUFBVyxJQUFJO1FBQW5CLENBQW9CLENBQUE7UUFFckQsWUFBTSxHQUFHLFVBQUMsRUFBVSxFQUFFLElBQVM7WUFDOUIsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBWSxDQUFDO1FBQTlELENBQThELENBQUE7UUFFL0QsWUFBTSxHQUFHLFVBQUMsRUFBVSxFQUFFLE1BQWM7WUFDbkMsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQVksQ0FBQztRQUFwRSxDQUFvRSxDQUFBOztJQUN0RSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFwQkQsQ0FBcUMsY0FBSSxHQW9CeEMifQ==