'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function (_React$Component) {
  (0, _inherits3.default)(Spinner, _React$Component);

  function Spinner() {
    (0, _classCallCheck3.default)(this, Spinner);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Spinner).apply(this, arguments));
  }

  (0, _createClass3.default)(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var size = _props.size;
      var type = _props.type;
      var alt = _props.alt;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'size', 'type', 'alt']);

      var spinnerClassNames = (0, _classnames2.default)(className, 'slds-spinner--' + size);
      var spinnerImgName = type === 'brand' ? 'slds_spinner_brand' : type === 'inverse' ? 'slds_spinner_inverse' : 'slds_spinner';
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: spinnerClassNames }, props),
        _react2.default.createElement('img', { src: _util2.default.getAssetRoot() + '/images/spinners/' + spinnerImgName + '.gif', alt: alt })
      );
    }
  }]);
  return Spinner;
}(_react2.default.Component);

exports.default = Spinner;


Spinner.propTypes = {
  className: _react.PropTypes.string,
  type: _react.PropTypes.string,
  size: _react.PropTypes.string,
  alt: _react.PropTypes.string
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCLE87Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQSxtQkFDMEMsS0FBSyxLQUQvQztBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLElBRFosVUFDWSxJQURaO0FBQUEsVUFDa0IsSUFEbEIsVUFDa0IsSUFEbEI7QUFBQSxVQUN3QixHQUR4QixVQUN3QixHQUR4QjtBQUFBLFVBQ2dDLEtBRGhDOztBQUVQLFVBQU0sb0JBQW9CLDBCQUFXLFNBQVgscUJBQXVDLElBQXZDLENBQTFCO0FBQ0EsVUFBTSxpQkFDSixTQUFTLE9BQVQsR0FBbUIsb0JBQW5CLEdBQ0EsU0FBUyxTQUFULEdBQXFCLHNCQUFyQixHQUNBLGNBSEY7QUFJQSxhQUNFO0FBQUE7UUFBQSx5QkFBSyxXQUFZLGlCQUFqQixJQUEwQyxLQUExQztRQUNFLHVDQUFLLEtBQVMsZUFBSyxZQUFMLEVBQVQseUJBQWdELGNBQWhELFNBQUwsRUFBNEUsS0FBTSxHQUFsRjtBQURGLE9BREY7QUFLRDs7O0VBYmtDLGdCQUFNLFM7O2tCQUF0QixPOzs7QUFnQnJCLFFBQVEsU0FBUixHQUFvQjtBQUNsQixhQUFXLGlCQUFVLE1BREg7QUFFbEIsUUFBTSxpQkFBVSxNQUZFO0FBR2xCLFFBQU0saUJBQVUsTUFIRTtBQUlsQixPQUFLLGlCQUFVO0FBSkcsQ0FBcEIiLCJmaWxlIjoiU3Bpbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpbm5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc2l6ZSwgdHlwZSwgYWx0LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzcGlubmVyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCBgc2xkcy1zcGlubmVyLS0ke3NpemV9YCk7XG4gICAgY29uc3Qgc3Bpbm5lckltZ05hbWUgPVxuICAgICAgdHlwZSA9PT0gJ2JyYW5kJyA/ICdzbGRzX3NwaW5uZXJfYnJhbmQnIDpcbiAgICAgIHR5cGUgPT09ICdpbnZlcnNlJyA/ICdzbGRzX3NwaW5uZXJfaW52ZXJzZScgOlxuICAgICAgJ3NsZHNfc3Bpbm5lcic7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3Bpbm5lckNsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XG4gICAgICAgIDxpbWcgc3JjPXsgYCR7dXRpbC5nZXRBc3NldFJvb3QoKX0vaW1hZ2VzL3NwaW5uZXJzLyR7c3Bpbm5lckltZ05hbWV9LmdpZmAgfSBhbHQ9eyBhbHQgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl19