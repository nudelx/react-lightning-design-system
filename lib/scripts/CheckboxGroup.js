'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxGroup = function (_React$Component) {
  (0, _inherits3.default)(CheckboxGroup, _React$Component);

  function CheckboxGroup() {
    (0, _classCallCheck3.default)(this, CheckboxGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckboxGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(CheckboxGroup, [{
    key: 'onChange',
    value: function onChange(e) {
      var _this2 = this;

      if (this.props.onChange) {
        (function () {
          var values = [];
          _react2.default.Children.forEach(_this2.props.children, function (check, i) {
            var ref = check.props.ref || 'check' + (i + 1);
            var el = _reactDom2.default.findDOMNode(_this2.refs[ref]);
            var checkEl = el.querySelector('input[type=checkbox]');
            if (checkEl && checkEl.checked) {
              values.push(check.props.value);
            }
          });
          _this2.props.onChange(e, values);
        })();
      }
    }
  }, {
    key: 'renderControl',
    value: function renderControl(checkbox, i) {
      var props = { grouped: true, ref: checkbox.props.ref || 'check' + (i + 1) };
      if (this.props.name) {
        props.name = this.props.name;
      }
      return _react2.default.cloneElement(checkbox, props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var label = _props.label;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var style = _props.style;
      var required = _props.required;
      var error = _props.error;
      var onChange = _props.onChange;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'totalCols', 'cols', 'style', 'required', 'error', 'onChange', 'children']);

      var grpClassNames = (0, _classnames2.default)(className, 'slds-form-element', {
        'slds-has-error': error,
        'slds-is-required': required
      }, typeof totalCols === 'number' ? 'slds-size--' + (cols || 1) + '-of-' + totalCols : null);
      var grpStyles = typeof totalCols === 'number' ? (0, _extends3.default)({ display: 'inline-block' }, style) : style;
      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;
      return _react2.default.createElement(
        'fieldset',
        (0, _extends3.default)({ className: grpClassNames, style: grpStyles, onChange: this.onChange.bind(this) }, props),
        _react2.default.createElement(
          'legend',
          { className: 'slds-form-element__label slds-form-element__label--top' },
          label,
          required ? _react2.default.createElement(
            'abbr',
            { className: 'slds-required' },
            '*'
          ) : undefined
        ),
        _react2.default.createElement(
          'div',
          { className: 'slds-form-element__control', ref: 'controls' },
          _react2.default.Children.map(children, this.renderControl.bind(this)),
          errorMessage ? _react2.default.createElement(
            'div',
            { className: 'slds-form-element__help' },
            errorMessage
          ) : undefined
        )
      );
    }
  }]);
  return CheckboxGroup;
}(_react2.default.Component);

exports.default = CheckboxGroup;


CheckboxGroup.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  name: _react.PropTypes.string,
  totalCols: _react.PropTypes.number,
  style: _react.PropTypes.object,
  cols: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  children: _react.PropTypes.node
};

CheckboxGroup.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQixhOzs7Ozs7Ozs7OzZCQUNWLEMsRUFBRztBQUFBOztBQUNWLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUFBO0FBQ3ZCLGNBQU0sU0FBUyxFQUFmO0FBQ0EsMEJBQU0sUUFBTixDQUFlLE9BQWYsQ0FBdUIsT0FBSyxLQUFMLENBQVcsUUFBbEMsRUFBNEMsVUFBQyxLQUFELEVBQVEsQ0FBUixFQUFjO0FBQ3hELGdCQUFNLE1BQU0sTUFBTSxLQUFOLENBQVksR0FBWixJQUFtQixXQUFXLElBQUksQ0FBZixDQUEvQjtBQUNBLGdCQUFNLEtBQUssbUJBQVMsV0FBVCxDQUFxQixPQUFLLElBQUwsQ0FBVSxHQUFWLENBQXJCLENBQVg7QUFDQSxnQkFBTSxVQUFVLEdBQUcsYUFBSCxDQUFpQixzQkFBakIsQ0FBaEI7QUFDQSxnQkFBSSxXQUFXLFFBQVEsT0FBdkIsRUFBZ0M7QUFDOUIscUJBQU8sSUFBUCxDQUFZLE1BQU0sS0FBTixDQUFZLEtBQXhCO0FBQ0Q7QUFDRixXQVBEO0FBUUEsaUJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsTUFBdkI7QUFWdUI7QUFXeEI7QUFDRjs7O2tDQUVhLFEsRUFBVSxDLEVBQUc7QUFDekIsVUFBTSxRQUFRLEVBQUUsU0FBUyxJQUFYLEVBQWlCLEtBQUssU0FBUyxLQUFULENBQWUsR0FBZixJQUFzQixXQUFXLElBQUksQ0FBZixDQUE1QyxFQUFkO0FBQ0EsVUFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFmLEVBQXFCO0FBQ25CLGNBQU0sSUFBTixHQUFhLEtBQUssS0FBTCxDQUFXLElBQXhCO0FBQ0Q7QUFDRCxhQUFPLGdCQUFNLFlBQU4sQ0FBbUIsUUFBbkIsRUFBNkIsS0FBN0IsQ0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDNkYsS0FBSyxLQURsRztBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLEtBRFosVUFDWSxLQURaO0FBQUEsVUFDbUIsU0FEbkIsVUFDbUIsU0FEbkI7QUFBQSxVQUM4QixJQUQ5QixVQUM4QixJQUQ5QjtBQUFBLFVBQ29DLEtBRHBDLFVBQ29DLEtBRHBDO0FBQUEsVUFDMkMsUUFEM0MsVUFDMkMsUUFEM0M7QUFBQSxVQUNxRCxLQURyRCxVQUNxRCxLQURyRDtBQUFBLFVBQzRELFFBRDVELFVBQzRELFFBRDVEO0FBQUEsVUFDc0UsUUFEdEUsVUFDc0UsUUFEdEU7QUFBQSxVQUNtRixLQURuRjs7QUFFUCxVQUFNLGdCQUFnQiwwQkFDcEIsU0FEb0IsRUFFcEIsbUJBRm9CLEVBR3BCO0FBQ0UsMEJBQWtCLEtBRHBCO0FBRUUsNEJBQW9CO0FBRnRCLE9BSG9CLEVBT3BCLE9BQU8sU0FBUCxLQUFxQixRQUFyQixvQkFBOEMsUUFBUSxDQUF0RCxhQUE4RCxTQUE5RCxHQUE0RSxJQVB4RCxDQUF0QjtBQVNBLFVBQU0sWUFBWSxPQUFPLFNBQVAsS0FBcUIsUUFBckIsNEJBQWtDLFNBQVMsY0FBM0MsSUFBOEQsS0FBOUQsSUFBd0UsS0FBMUY7QUFDQSxVQUFNLGVBQ0osUUFDQyxPQUFPLEtBQVAsS0FBaUIsUUFBakIsR0FBNEIsS0FBNUIsR0FDQSxRQUFPLEtBQVAsdURBQU8sS0FBUCxPQUFpQixRQUFqQixHQUE0QixNQUFNLE9BQWxDLEdBQ0EsU0FIRCxHQUlBLFNBTEY7QUFNQSxhQUNFO0FBQUE7UUFBQSx5QkFBVSxXQUFZLGFBQXRCLEVBQXNDLE9BQVEsU0FBOUMsRUFBMEQsVUFBVyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBQXJFLElBQXFHLEtBQXJHO1FBQ0U7QUFBQTtVQUFBLEVBQVEsV0FBVSx3REFBbEI7VUFDSSxLQURKO1VBR0ksV0FDQTtBQUFBO1lBQUEsRUFBTSxXQUFVLGVBQWhCO1lBQUE7QUFBQSxXQURBLEdBRUE7QUFMSixTQURGO1FBU0U7QUFBQTtVQUFBLEVBQUssV0FBVSw0QkFBZixFQUE0QyxLQUFJLFVBQWhEO1VBQ0ksZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkIsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQTdCLENBREo7VUFHSSxlQUNBO0FBQUE7WUFBQSxFQUFLLFdBQVUseUJBQWY7WUFBMkM7QUFBM0MsV0FEQSxHQUVBO0FBTEo7QUFURixPQURGO0FBb0JEOzs7RUE5RHdDLGdCQUFNLFM7O2tCQUE1QixhOzs7QUFrRXJCLGNBQWMsU0FBZCxHQUEwQjtBQUN4QixhQUFXLGlCQUFVLE1BREc7QUFFeEIsU0FBTyxpQkFBVSxNQUZPO0FBR3hCLFlBQVUsaUJBQVUsSUFISTtBQUl4QixTQUFPLGlCQUFVLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVUsSUFEZSxFQUV6QixpQkFBVSxNQUZlLEVBR3pCLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDZCxhQUFTLGlCQUFVO0FBREwsR0FBaEIsQ0FIeUIsQ0FBcEIsQ0FKaUI7QUFXeEIsUUFBTSxpQkFBVSxNQVhRO0FBWXhCLGFBQVcsaUJBQVUsTUFaRztBQWF4QixTQUFPLGlCQUFVLE1BYk87QUFjeEIsUUFBTSxpQkFBVSxNQWRRO0FBZXhCLFlBQVUsaUJBQVUsSUFmSTtBQWdCeEIsWUFBVSxpQkFBVTtBQWhCSSxDQUExQjs7QUFtQkEsY0FBYyxhQUFkLEdBQThCLElBQTlCIiwiZmlsZSI6IkNoZWNrYm94R3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgb25DaGFuZ2UoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoZWNrLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZiA9IGNoZWNrLnByb3BzLnJlZiB8fCAnY2hlY2snICsgKGkgKyAxKTtcbiAgICAgICAgY29uc3QgZWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbcmVmXSk7XG4gICAgICAgIGNvbnN0IGNoZWNrRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICBpZiAoY2hlY2tFbCAmJiBjaGVja0VsLmNoZWNrZWQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChjaGVjay5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNvbnRyb2woY2hlY2tib3gsIGkpIHtcbiAgICBjb25zdCBwcm9wcyA9IHsgZ3JvdXBlZDogdHJ1ZSwgcmVmOiBjaGVja2JveC5wcm9wcy5yZWYgfHwgJ2NoZWNrJyArIChpICsgMSkgfTtcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lKSB7XG4gICAgICBwcm9wcy5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoZWNrYm94LCBwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCB0b3RhbENvbHMsIGNvbHMsIHN0eWxlLCByZXF1aXJlZCwgZXJyb3IsIG9uQ2hhbmdlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxuICAgICAge1xuICAgICAgICAnc2xkcy1oYXMtZXJyb3InOiBlcnJvcixcbiAgICAgICAgJ3NsZHMtaXMtcmVxdWlyZWQnOiByZXF1aXJlZCxcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IGBzbGRzLXNpemUtLSR7Y29scyB8fCAxfS1vZi0ke3RvdGFsQ29sc31gIDogbnVsbFxuICAgICk7XG4gICAgY29uc3QgZ3JwU3R5bGVzID0gdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCAuLi5zdHlsZSB9IDogc3R5bGU7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yID9cbiAgICAgICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOlxuICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICB1bmRlZmluZWQpIDpcbiAgICAgIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSBzdHlsZT17IGdycFN0eWxlcyB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpIH0geyAuLi5wcm9wcyB9ID5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCBzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwtLXRvcCc+XG4gICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQgP1xuICAgICAgICAgICAgPGFiYnIgY2xhc3NOYW1lPSdzbGRzLXJlcXVpcmVkJz4qPC9hYmJyPiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnIHJlZj0nY29udHJvbHMnPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNvbnRyb2wuYmluZCh0aGlzKSkgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2hlbHAnPnsgZXJyb3JNZXNzYWdlIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbkNoZWNrYm94R3JvdXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5DaGVja2JveEdyb3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19