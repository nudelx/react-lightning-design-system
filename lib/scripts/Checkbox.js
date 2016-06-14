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

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'renderCheckbox',
    value: function renderCheckbox(_ref) {
      var className = _ref.className;
      var label = _ref.label;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label']);

      var checkClassNames = (0, _classnames2.default)(className, 'slds-checkbox');
      return _react2.default.createElement(
        'label',
        { className: checkClassNames },
        _react2.default.createElement('input', (0, _extends3.default)({ type: 'checkbox' }, props)),
        _react2.default.createElement('span', { className: 'slds-checkbox--faux' }),
        _react2.default.createElement(
          'span',
          { className: 'slds-form-element__label' },
          label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var grouped = _props.grouped;
      var required = _props.required;
      var error = _props.error;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var props = (0, _objectWithoutProperties3.default)(_props, ['grouped', 'required', 'error', 'totalCols', 'cols']);

      var formElemProps = { required: required, error: error, totalCols: totalCols, cols: cols };
      return grouped ? this.renderCheckbox(props) : _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        this.renderCheckbox(props)
      );
    }
  }]);
  return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;


Checkbox.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  name: _react.PropTypes.string,
  value: _react.PropTypes.any,
  grouped: _react.PropTypes.bool,
  checked: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQixROzs7Ozs7Ozs7O3lDQUU0QjtBQUFBLFVBQTlCLFNBQThCLFFBQTlCLFNBQThCO0FBQUEsVUFBbkIsS0FBbUIsUUFBbkIsS0FBbUI7QUFBQSxVQUFULEtBQVM7O0FBQzdDLFVBQU0sa0JBQWtCLDBCQUFXLFNBQVgsRUFBc0IsZUFBdEIsQ0FBeEI7QUFDQSxhQUNFO0FBQUE7UUFBQSxFQUFPLFdBQVksZUFBbkI7UUFDRSxnRUFBTyxNQUFLLFVBQVosSUFBNEIsS0FBNUIsRUFERjtRQUVFLHdDQUFNLFdBQVUscUJBQWhCLEdBRkY7UUFHRTtBQUFBO1VBQUEsRUFBTSxXQUFVLDBCQUFoQjtVQUE2QztBQUE3QztBQUhGLE9BREY7QUFPRDs7OzZCQUVRO0FBQUEsbUJBQ3lELEtBQUssS0FEOUQ7QUFBQSxVQUNDLE9BREQsVUFDQyxPQUREO0FBQUEsVUFDVSxRQURWLFVBQ1UsUUFEVjtBQUFBLFVBQ29CLEtBRHBCLFVBQ29CLEtBRHBCO0FBQUEsVUFDMkIsU0FEM0IsVUFDMkIsU0FEM0I7QUFBQSxVQUNzQyxJQUR0QyxVQUNzQyxJQUR0QztBQUFBLFVBQytDLEtBRC9DOztBQUVQLFVBQU0sZ0JBQWdCLEVBQUUsa0JBQUYsRUFBWSxZQUFaLEVBQW1CLG9CQUFuQixFQUE4QixVQUE5QixFQUF0QjtBQUNBLGFBQ0UsVUFDQSxLQUFLLGNBQUwsQ0FBb0IsS0FBcEIsQ0FEQSxHQUVBO0FBQUE7UUFBa0IsYUFBbEI7UUFDSSxLQUFLLGNBQUwsQ0FBb0IsS0FBcEI7QUFESixPQUhGO0FBT0Q7OztFQXZCbUMsZ0JBQU0sUzs7a0JBQXZCLFE7OztBQTJCckIsU0FBUyxTQUFULEdBQXFCO0FBQ25CLGFBQVcsaUJBQVUsTUFERjtBQUVuQixTQUFPLGlCQUFVLE1BRkU7QUFHbkIsWUFBVSxpQkFBVSxJQUhEO0FBSW5CLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQURlLEVBRXpCLGlCQUFVLE1BRmUsRUFHekIsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVU7QUFETCxHQUFoQixDQUh5QixDQUFwQixDQUpZO0FBV25CLGFBQVcsaUJBQVUsTUFYRjtBQVluQixRQUFNLGlCQUFVLE1BWkc7QUFhbkIsUUFBTSxpQkFBVSxNQWJHO0FBY25CLFNBQU8saUJBQVUsR0FkRTtBQWVuQixXQUFTLGlCQUFVLElBZkE7QUFnQm5CLFdBQVMsaUJBQVUsSUFoQkE7QUFpQm5CLGtCQUFnQixpQkFBVTtBQWpCUCxDQUFyQiIsImZpbGUiOiJDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyQ2hlY2tib3goeyBjbGFzc05hbWUsIGxhYmVsLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgY2hlY2tDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWNoZWNrYm94Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9eyBjaGVja0NsYXNzTmFtZXMgfT5cbiAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyB7IC4uLnByb3BzIH0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWNoZWNrYm94LS1mYXV4Jz48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJz57IGxhYmVsIH08L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cGVkLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMgfTtcbiAgICByZXR1cm4gKFxuICAgICAgZ3JvdXBlZCA/XG4gICAgICB0aGlzLnJlbmRlckNoZWNrYm94KHByb3BzKSA6XG4gICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJDaGVja2JveChwcm9wcykgfVxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG5cbn1cblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgZ3JvdXBlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIl19