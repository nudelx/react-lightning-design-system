'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = function (_React$Component) {
  (0, _inherits3.default)(Badge, _React$Component);

  function Badge() {
    (0, _classCallCheck3.default)(this, Badge);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Badge).apply(this, arguments));
  }

  (0, _createClass3.default)(Badge, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var type = _props.type;
      var label = _props.label;

      var typeClassName = type ? 'slds-theme--' + type : null;
      var badgeClassNames = (0, _classnames2.default)('slds-badge', typeClassName);
      return _react2.default.createElement(
        'span',
        { className: badgeClassNames },
        label || children
      );
    }
  }]);
  return Badge;
}(_react2.default.Component);

exports.default = Badge;


var BADGE_TYPES = ['default', 'shade', 'inverse'];

Badge.propTypes = {
  type: _react.PropTypes.oneOf(BADGE_TYPES),
  label: _react.PropTypes.string,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0JhZGdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCLEs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQSxtQkFDMkIsS0FBSyxLQURoQztBQUFBLFVBQ0MsUUFERCxVQUNDLFFBREQ7QUFBQSxVQUNXLElBRFgsVUFDVyxJQURYO0FBQUEsVUFDaUIsS0FEakIsVUFDaUIsS0FEakI7O0FBRVAsVUFBTSxnQkFBZ0Isd0JBQXNCLElBQXRCLEdBQStCLElBQXJEO0FBQ0EsVUFBTSxrQkFBa0IsMEJBQ3RCLFlBRHNCLEVBRXRCLGFBRnNCLENBQXhCO0FBSUEsYUFDRTtBQUFBO1FBQUEsRUFBTSxXQUFZLGVBQWxCO1FBQ0ksU0FBUztBQURiLE9BREY7QUFLRDs7O0VBYmdDLGdCQUFNLFM7O2tCQUFwQixLOzs7QUFnQnJCLElBQU0sY0FBYyxDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLFNBQXJCLENBQXBCOztBQUVBLE1BQU0sU0FBTixHQUFrQjtBQUNoQixRQUFNLGlCQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsQ0FEVTtBQUVoQixTQUFPLGlCQUFVLE1BRkQ7QUFHaEIsWUFBVSxpQkFBVTtBQUhKLENBQWxCIiwiZmlsZSI6IkJhZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWRnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB0eXBlLCBsYWJlbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0eXBlQ2xhc3NOYW1lID0gdHlwZSA/IGBzbGRzLXRoZW1lLS0ke3R5cGV9YCA6IG51bGw7XG4gICAgY29uc3QgYmFkZ2VDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWJhZGdlJyxcbiAgICAgIHR5cGVDbGFzc05hbWVcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9eyBiYWRnZUNsYXNzTmFtZXMgfT5cbiAgICAgICAgeyBsYWJlbCB8fCBjaGlsZHJlbiB9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBCQURHRV9UWVBFUyA9IFsnZGVmYXVsdCcsICdzaGFkZScsICdpbnZlcnNlJ107XG5cbkJhZGdlLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKEJBREdFX1RZUEVTKSxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=