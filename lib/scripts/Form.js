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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function (_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form() {
    (0, _classCallCheck3.default)(this, Form);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Form).apply(this, arguments));
  }

  (0, _createClass3.default)(Form, [{
    key: 'renderFormElement',
    value: function renderFormElement(element) {
      var klass = element.type;
      if (!klass.isFormElement) {
        var _element$props = element.props;
        var _element$props$id = _element$props.id;
        var id = _element$props$id === undefined ? 'form-element-' + (0, _uuid2.default)() : _element$props$id;
        var label = _element$props.label;
        var required = _element$props.required;
        var error = _element$props.error;
        var totalCols = _element$props.totalCols;
        var cols = _element$props.cols;
        var children = _element$props.children;
        var props = (0, _objectWithoutProperties3.default)(_element$props, ['id', 'label', 'required', 'error', 'totalCols', 'cols', 'children']);

        var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.cloneElement(element, { id: id, label: undefined, required: undefined, error: undefined })
        );
      }
      return element;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var type = _props.type;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'type', 'children']);

      var formClassNames = (0, _classnames2.default)(className, 'slds-form--' + type);
      return _react2.default.createElement(
        'form',
        (0, _extends3.default)({ className: formClassNames }, props),
        _react2.default.Children.map(children, this.renderFormElement.bind(this))
      );
    }
  }]);
  return Form;
}(_react2.default.Component);

exports.default = Form;


var FORM_TYPES = ['stacked', 'horizontal', 'inline', 'compound'];

Form.propTypes = {
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(FORM_TYPES),
  children: _react.PropTypes.node
};

Form.defaultProps = {
  type: 'stacked'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUIsSTs7Ozs7Ozs7OztzQ0FDRCxPLEVBQVM7QUFDekIsVUFBTSxRQUFRLFFBQVEsSUFBdEI7QUFDQSxVQUFJLENBQUMsTUFBTSxhQUFYLEVBQTBCO0FBQUEsNkJBQytFLFFBQVEsS0FEdkY7QUFBQSwrQ0FDaEIsRUFEZ0I7QUFBQSxZQUNoQixFQURnQix1REFDSyxxQkFETDtBQUFBLFlBQ2UsS0FEZixrQkFDZSxLQURmO0FBQUEsWUFDc0IsUUFEdEIsa0JBQ3NCLFFBRHRCO0FBQUEsWUFDZ0MsS0FEaEMsa0JBQ2dDLEtBRGhDO0FBQUEsWUFDdUMsU0FEdkMsa0JBQ3VDLFNBRHZDO0FBQUEsWUFDa0QsSUFEbEQsa0JBQ2tELElBRGxEO0FBQUEsWUFDd0QsUUFEeEQsa0JBQ3dELFFBRHhEO0FBQUEsWUFDcUUsS0FEckU7O0FBRXhCLFlBQU0sZ0JBQWdCLEVBQUUsTUFBRixFQUFNLFlBQU4sRUFBYSxrQkFBYixFQUF1QixZQUF2QixFQUE4QixvQkFBOUIsRUFBeUMsVUFBekMsRUFBdEI7QUFDQSxlQUNFO0FBQUE7VUFBa0IsYUFBbEI7VUFDSSxnQkFBTSxZQUFOLENBQW1CLE9BQW5CLEVBQTRCLEVBQUUsTUFBRixFQUFNLE9BQU8sU0FBYixFQUF3QixVQUFVLFNBQWxDLEVBQTZDLE9BQU8sU0FBcEQsRUFBNUI7QUFESixTQURGO0FBS0Q7QUFDRCxhQUFPLE9BQVA7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ3lDLEtBQUssS0FEOUM7QUFBQSxVQUNDLFNBREQsVUFDQyxTQUREO0FBQUEsVUFDWSxJQURaLFVBQ1ksSUFEWjtBQUFBLFVBQ2tCLFFBRGxCLFVBQ2tCLFFBRGxCO0FBQUEsVUFDK0IsS0FEL0I7O0FBRVAsVUFBTSxpQkFBaUIsMEJBQVcsU0FBWCxrQkFBb0MsSUFBcEMsQ0FBdkI7QUFDQSxhQUNFO0FBQUE7UUFBQSx5QkFBTSxXQUFZLGNBQWxCLElBQXdDLEtBQXhDO1FBQ0ksZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkIsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUE3QjtBQURKLE9BREY7QUFLRDs7O0VBdkIrQixnQkFBTSxTOztrQkFBbkIsSTs7O0FBMEJyQixJQUFNLGFBQWEsQ0FBQyxTQUFELEVBQVksWUFBWixFQUEwQixRQUExQixFQUFvQyxVQUFwQyxDQUFuQjs7QUFFQSxLQUFLLFNBQUwsR0FBaUI7QUFDZixhQUFXLGlCQUFVLE1BRE47QUFFZixRQUFNLGlCQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FGUztBQUdmLFlBQVUsaUJBQVU7QUFITCxDQUFqQjs7QUFNQSxLQUFLLFlBQUwsR0FBb0I7QUFDbEIsUUFBTTtBQURZLENBQXBCIiwiZmlsZSI6IkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyRm9ybUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGtsYXNzID0gZWxlbWVudC50eXBlO1xuICAgIGlmICgha2xhc3MuaXNGb3JtRWxlbWVudCkge1xuICAgICAgY29uc3QgeyBpZCA9IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IGVsZW1lbnQucHJvcHM7XG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgICAgeyBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwgeyBpZCwgbGFiZWw6IHVuZGVmaW5lZCwgcmVxdWlyZWQ6IHVuZGVmaW5lZCwgZXJyb3I6IHVuZGVmaW5lZCB9KSB9XG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgdHlwZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZvcm1DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGBzbGRzLWZvcm0tLSR7dHlwZX1gKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXsgZm9ybUNsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckZvcm1FbGVtZW50LmJpbmQodGhpcykpIH1cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEZPUk1fVFlQRVMgPSBbJ3N0YWNrZWQnLCAnaG9yaXpvbnRhbCcsICdpbmxpbmUnLCAnY29tcG91bmQnXTtcblxuRm9ybS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKEZPUk1fVFlQRVMpLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5Gb3JtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3N0YWNrZWQnLFxufTtcbiJdfQ==