'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormElement = function (_React$Component) {
  (0, _inherits3.default)(FormElement, _React$Component);

  function FormElement(props) {
    (0, _classCallCheck3.default)(this, FormElement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormElement).call(this, props));

    (0, _util.registerStyle)('dropdown', [['.react-slds-dropdown-control-wrapper', '{ height: 0; }'], ['.slds-has-error .react-slds-dropdown-control-wrapper', '{ height: auto; }'], ['.react-slds-dropdown-control-wrapper > .slds-form-element__control', '{ position: relative; padding-top: 0.1px; margin-top: -0.1px }'], ['.react-slds-dropdown-form-element', '{ position: static; }'], ['.slds-form--horizontal .react-slds-dropdown-control-wrapper .slds-dropdown', '{ top: -1em; }'], ['.slds-form--horizontal .react-slds-dropdown-control-wrapper .slds-lookup__menu', '{ top: -1em; }'], ['.slds-form--horizontal .slds-has-error .react-slds-dropdown-control-wrapper .slds-dropdown', '{ top: 0; }'], ['.slds-modal .react-slds-dropdown-control-wrapper > .slds-form-element__control', '{ position: absolute; }']]);
    return _this;
  }

  (0, _createClass3.default)(FormElement, [{
    key: 'renderFormElement',
    value: function renderFormElement(props) {
      var className = props.className;
      var error = props.error;
      var totalCols = props.totalCols;
      var _props$cols = props.cols;
      var cols = _props$cols === undefined ? 1 : _props$cols;
      var children = props.children;

      var formElementClassNames = (0, _classnames3.default)('slds-form-element', (0, _defineProperty3.default)({
        'slds-has-error': error
      }, 'slds-size--' + cols + '-of-' + totalCols, typeof totalCols === 'number'), className);
      return _react2.default.createElement(
        'div',
        { className: formElementClassNames },
        children
      );
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var _props = this.props;
      var id = _props.id;
      var label = _props.label;
      var required = _props.required;

      return label ? _react2.default.createElement(
        'label',
        { className: 'slds-form-element__label', htmlFor: id },
        label,
        required ? _react2.default.createElement(
          'abbr',
          { className: 'slds-required' },
          '*'
        ) : undefined
      ) : undefined;
    }
  }, {
    key: 'renderControl',
    value: function renderControl(props) {
      var error = props.error;
      var children = props.children;

      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;
      return _react2.default.createElement(
        'div',
        { className: 'slds-form-element__control' },
        children,
        errorMessage ? _react2.default.createElement(
          'span',
          { className: 'slds-form-element__help' },
          errorMessage
        ) : undefined
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var dropdown = _props2.dropdown;
      var className = _props2.className;
      var totalCols = _props2.totalCols;
      var cols = _props2.cols;
      var error = _props2.error;
      var children = _props2.children;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['dropdown', 'className', 'totalCols', 'cols', 'error', 'children']);

      var labelElem = this.renderLabel();
      if (dropdown) {
        var _controlElem = this.renderControl({ children: children });
        var _formElemChildren = [labelElem, _controlElem];
        var innerFormElem = this.renderFormElement((0, _extends3.default)({}, props, { children: _formElemChildren }));
        var outerControlElem = this.renderControl({ error: error, children: dropdown });
        var outerFormElemChildren = [innerFormElem, _react2.default.createElement(
          'div',
          { className: 'react-slds-dropdown-control-wrapper' },
          outerControlElem
        )];
        var outerFormClassName = (0, _classnames3.default)('react-slds-dropdown-form-element', className);
        return this.renderFormElement((0, _extends3.default)({}, props, { error: error, totalCols: totalCols, cols: cols,
          className: outerFormClassName,
          children: outerFormElemChildren
        }));
      }
      var controlElem = this.renderControl({ children: children, error: error });
      var formElemChildren = [labelElem, controlElem];
      return this.renderFormElement((0, _extends3.default)({}, props, { className: className, error: error, totalCols: totalCols, cols: cols,
        children: formElemChildren
      }));
    }
  }]);
  return FormElement;
}(_react2.default.Component);

exports.default = FormElement;


FormElement.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  cols: _react.PropTypes.number,
  totalCols: _react.PropTypes.number,
  dropdown: _react.PropTypes.element,
  children: _react.PropTypes.element
};

FormElement.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm1FbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQixXOzs7QUFFbkIsdUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHFIQUNYLEtBRFc7O0FBRWpCLDZCQUFjLFVBQWQsRUFBMEIsQ0FDeEIsQ0FDRSxzQ0FERixFQUVFLGdCQUZGLENBRHdCLEVBS3hCLENBQ0Usc0RBREYsRUFFRSxtQkFGRixDQUx3QixFQVN4QixDQUNFLG9FQURGLEVBRUUsZ0VBRkYsQ0FUd0IsRUFheEIsQ0FDRSxtQ0FERixFQUVFLHVCQUZGLENBYndCLEVBaUJ4QixDQUNFLDRFQURGLEVBRUUsZ0JBRkYsQ0FqQndCLEVBcUJ4QixDQUNFLGdGQURGLEVBRUUsZ0JBRkYsQ0FyQndCLEVBeUJ4QixDQUNFLDRGQURGLEVBRUUsYUFGRixDQXpCd0IsRUE2QnhCLENBQ0UsZ0ZBREYsRUFFRSx5QkFGRixDQTdCd0IsQ0FBMUI7QUFGaUI7QUFvQ2xCOzs7O3NDQUVpQixLLEVBQU87QUFBQSxVQUNmLFNBRGUsR0FDcUMsS0FEckMsQ0FDZixTQURlO0FBQUEsVUFDSixLQURJLEdBQ3FDLEtBRHJDLENBQ0osS0FESTtBQUFBLFVBQ0csU0FESCxHQUNxQyxLQURyQyxDQUNHLFNBREg7QUFBQSx3QkFDcUMsS0FEckMsQ0FDYyxJQURkO0FBQUEsVUFDYyxJQURkLCtCQUNxQixDQURyQjtBQUFBLFVBQ3dCLFFBRHhCLEdBQ3FDLEtBRHJDLENBQ3dCLFFBRHhCOztBQUV2QixVQUFNLHdCQUF3QiwwQkFDNUIsbUJBRDRCO0FBRzFCLDBCQUFrQjtBQUhRLHlCQUlYLElBSlcsWUFJQSxTQUpBLEVBSWMsT0FBTyxTQUFQLEtBQXFCLFFBSm5DLEdBTTVCLFNBTjRCLENBQTlCO0FBUUEsYUFDRTtBQUFBO1FBQUEsRUFBSyxXQUFZLHFC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YUFBUyxpQkFBVTtBQURMLEdBQWhCLENBSHlCLENBQXBCLENBTGU7QUFZdEIsUUFBTSxpQkFBVSxNQVpNO0FBYXRCLGFBQVcsaUJBQVUsTUFiQztBQWN0QixZQUFVLGlCQUFVLE9BZEU7QUFldEIsWUFBVSxpQkFBVTtBQWZFLENBQXhCOztBQWtCQSxZQUFZLGFBQVosR0FBNEIsSUFBNUIiLCJmaWxlIjoiRm9ybUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRWxlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgcmVnaXN0ZXJTdHlsZSgnZHJvcGRvd24nLCBbXG4gICAgICBbXG4gICAgICAgICcucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXInLFxuICAgICAgICAneyBoZWlnaHQ6IDA7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXInLFxuICAgICAgICAneyBoZWlnaHQ6IGF1dG87IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5yZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlciA+IC5zbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXG4gICAgICAgICd7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy10b3A6IDAuMXB4OyBtYXJnaW4tdG9wOiAtMC4xcHggfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtZHJvcGRvd24tZm9ybS1lbGVtZW50JyxcbiAgICAgICAgJ3sgcG9zaXRpb246IHN0YXRpYzsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtZm9ybS0taG9yaXpvbnRhbCAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXIgLnNsZHMtZHJvcGRvd24nLFxuICAgICAgICAneyB0b3A6IC0xZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWZvcm0tLWhvcml6b250YWwgLnJlYWN0LXNsZHMtZHJvcGRvd24tY29udHJvbC13cmFwcGVyIC5zbGRzLWxvb2t1cF9fbWVudScsXG4gICAgICAgICd7IHRvcDogLTFlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtZm9ybS0taG9yaXpvbnRhbCAuc2xkcy1oYXMtZXJyb3IgLnJlYWN0LXNsZHMtZHJvcGRvd24tY29udHJvbC13cmFwcGVyIC5zbGRzLWRyb3Bkb3duJyxcbiAgICAgICAgJ3sgdG9wOiAwOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1tb2RhbCAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXIgPiAuc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxuICAgICAgICAneyBwb3NpdGlvbjogYWJzb2x1dGU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIHJlbmRlckZvcm1FbGVtZW50KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMgPSAxLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudCcsXG4gICAgICB7XG4gICAgICAgICdzbGRzLWhhcy1lcnJvcic6IGVycm9yLFxuICAgICAgICBbYHNsZHMtc2l6ZS0tJHtjb2xzfS1vZi0ke3RvdGFsQ29sc31gXTogdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBmb3JtRWxlbWVudENsYXNzTmFtZXMgfT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGFiZWwoKSB7XG4gICAgY29uc3QgeyBpZCwgbGFiZWwsIHJlcXVpcmVkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICBsYWJlbCA/XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnIGh0bWxGb3I9eyBpZCB9PlxuICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAge1xuICAgICAgICAgIHJlcXVpcmVkID9cbiAgICAgICAgICA8YWJiciBjbGFzc05hbWU9J3NsZHMtcmVxdWlyZWQnPio8L2FiYnI+IDpcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgPC9sYWJlbD4gOlxuICAgICAgdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNvbnRyb2wocHJvcHMpIHtcbiAgICBjb25zdCB7IGVycm9yLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yID9cbiAgICAgICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOlxuICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICB1bmRlZmluZWQpIDpcbiAgICAgIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJz5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgIHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2hlbHAnPnsgZXJyb3JNZXNzYWdlIH08L3NwYW4+IDpcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRyb3Bkb3duLCBjbGFzc05hbWUsIHRvdGFsQ29scywgY29scywgZXJyb3IsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsYWJlbEVsZW0gPSB0aGlzLnJlbmRlckxhYmVsKCk7XG4gICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICBjb25zdCBjb250cm9sRWxlbSA9IHRoaXMucmVuZGVyQ29udHJvbCh7IGNoaWxkcmVuIH0pO1xuICAgICAgY29uc3QgZm9ybUVsZW1DaGlsZHJlbiA9IFtsYWJlbEVsZW0sIGNvbnRyb2xFbGVtXTtcbiAgICAgIGNvbnN0IGlubmVyRm9ybUVsZW0gPSB0aGlzLnJlbmRlckZvcm1FbGVtZW50KHsgLi4ucHJvcHMsIGNoaWxkcmVuOiBmb3JtRWxlbUNoaWxkcmVuIH0pO1xuICAgICAgY29uc3Qgb3V0ZXJDb250cm9sRWxlbSA9IHRoaXMucmVuZGVyQ29udHJvbCh7IGVycm9yLCBjaGlsZHJlbjogZHJvcGRvd24gfSk7XG4gICAgICBjb25zdCBvdXRlckZvcm1FbGVtQ2hpbGRyZW4gPSBbXG4gICAgICAgIGlubmVyRm9ybUVsZW0sXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlcic+eyBvdXRlckNvbnRyb2xFbGVtIH08L2Rpdj4sXG4gICAgICBdO1xuICAgICAgY29uc3Qgb3V0ZXJGb3JtQ2xhc3NOYW1lID0gY2xhc3NuYW1lcygncmVhY3Qtc2xkcy1kcm9wZG93bi1mb3JtLWVsZW1lbnQnLCBjbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRm9ybUVsZW1lbnQoe1xuICAgICAgICAuLi5wcm9wcywgZXJyb3IsIHRvdGFsQ29scywgY29scyxcbiAgICAgICAgY2xhc3NOYW1lOiBvdXRlckZvcm1DbGFzc05hbWUsXG4gICAgICAgIGNoaWxkcmVuOiBvdXRlckZvcm1FbGVtQ2hpbGRyZW4sXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbEVsZW0gPSB0aGlzLnJlbmRlckNvbnRyb2woeyBjaGlsZHJlbiwgZXJyb3IgfSk7XG4gICAgY29uc3QgZm9ybUVsZW1DaGlsZHJlbiA9IFtsYWJlbEVsZW0sIGNvbnRyb2xFbGVtXTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtRWxlbWVudCh7XG4gICAgICAuLi5wcm9wcywgY2xhc3NOYW1lLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgY2hpbGRyZW46IGZvcm1FbGVtQ2hpbGRyZW4sXG4gICAgfSk7XG4gIH1cblxufVxuXG5Gb3JtRWxlbWVudC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBkcm9wZG93bjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcbn07XG5cbkZvcm1FbGVtZW50LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19