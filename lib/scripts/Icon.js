'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _svg4everybody = require('svg4everybody');

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

var Icon = function (_React$Component) {
  (0, _inherits3.default)(Icon, _React$Component);

  function Icon(props) {
    (0, _classCallCheck3.default)(this, Icon);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Icon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkIconColor();
      var svgEl = _reactDom2.default.findDOMNode(this.refs.svgIcon);
      svgEl.setAttribute('focusable', this.props.tabIndex >= 0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkIconColor();
    }
  }, {
    key: 'getIconColor',
    value: function getIconColor(fillColor, category, icon) {
      return this.state.iconColor ? this.state.iconColor : category === 'doctype' ? null : fillColor === 'none' ? null : fillColor ? fillColor : category === 'utility' ? null : category === 'custom' ? icon.replace(/^custom/, 'custom-') : category === 'action' && /^new_custom/.test(icon) ? icon.replace(/^new_custom/, 'custom-') : category + '-' + (icon || '').replace(/_/g, '-');
    }
  }, {
    key: 'checkIconColor',
    value: function checkIconColor() {
      var _props = this.props;
      var fillColor = _props.fillColor;
      var _props$category = _props.category;
      var category = _props$category === undefined ? 'utility' : _props$category;
      var container = _props.container;

      if (fillColor === 'none' || category === 'doctype' || !fillColor && category === 'utility') {
        return;
      }
      var el = _reactDom2.default.findDOMNode(container ? this.refs.iconContainer : this.refs.svgIcon);
      if (!el) {
        return;
      }
      var bgColorStyle = getComputedStyle(el)['background-color'];
      if (/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/.test(bgColorStyle)) {
        // if no background color set to the icon
        this.setState({ iconColor: 'standard-default' });
      }
    }
  }, {
    key: 'renderSVG',
    value: function renderSVG(_ref) {
      var _classnames;

      var className = _ref.className;
      var _ref$category = _ref.category;
      var category = _ref$category === undefined ? 'utility' : _ref$category;
      var icon = _ref.icon;
      var size = _ref.size;
      var align = _ref.align;
      var fillColor = _ref.fillColor;
      var container = _ref.container;
      var _ref$textColor = _ref.textColor;
      var textColor = _ref$textColor === undefined ? 'default' : _ref$textColor;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'category', 'icon', 'size', 'align', 'fillColor', 'container', 'textColor']);

      var iconColor = this.getIconColor(fillColor, category, icon);
      var iconClassNames = (0, _classnames3.default)((_classnames = {
        'slds-icon': !/slds\-button__icon/.test(className)
      }, (0, _defineProperty3.default)(_classnames, 'slds-icon--' + size, /^(x-small|small|large)$/.test(size)), (0, _defineProperty3.default)(_classnames, 'slds-icon-text-' + textColor, /^(default|warning|error)$/.test(textColor) && !container && !iconColor), (0, _defineProperty3.default)(_classnames, 'slds-icon-' + iconColor, !container && iconColor), (0, _defineProperty3.default)(_classnames, 'slds-m-left--x-small', align === 'right'), (0, _defineProperty3.default)(_classnames, 'slds-m-right--x-small', align === 'left'), _classnames), className);
      var useHtml = '<use xlink:href="' + _util2.default.getAssetRoot() + '/icons/' + category + '-sprite/svg/symbols.svg#' + icon + '"></use>';
      return _react2.default.createElement('svg', (0, _extends3.default)({ className: iconClassNames,
        'aria-hidden': true,
        dangerouslySetInnerHTML: { __html: useHtml },
        ref: 'svgIcon'
      }, props));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var container = _props2.container;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['container']);
      var category = props.category;
      var icon = props.icon;


      if (icon.indexOf(':') > 0) {
        var _icon$split = icon.split(':');

        var _icon$split2 = (0, _slicedToArray3.default)(_icon$split, 2);

        category = _icon$split2[0];
        icon = _icon$split2[1];
      }
      if (container) {
        var className = props.className;
        var fillColor = props.fillColor;
        var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'fillColor']);

        var iconColor = this.getIconColor(fillColor, category, icon);
        var containerClassName = (0, _classnames3.default)('slds-icon__container', container === 'circle' ? 'slds-icon__container--circle' : null, iconColor ? 'slds-icon-' + iconColor : null, className);
        return _react2.default.createElement(
          'span',
          { className: containerClassName, ref: 'iconContainer' },
          this.renderSVG((0, _extends3.default)({ category: category, icon: icon, fillColor: iconColor, container: container }, pprops))
        );
      }

      return this.renderSVG((0, _extends3.default)({}, props, { category: category, icon: icon }));
    }
  }]);
  return Icon;
}(_react2.default.Component);

exports.default = Icon;


Icon.propTypes = {
  className: _react.PropTypes.string,
  category: _react.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']),
  icon: _react.PropTypes.string,
  container: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['default', 'circle'])]),
  color: _react.PropTypes.string,
  textColor: _react.PropTypes.oneOf(['default', 'warning', 'error']),
  tabIndex: _react.PropTypes.number,
  fillColor: _react.PropTypes.string
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0lBRXFCLEk7OztBQUNuQixnQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBSyxjQUFMO0FBQ0EsVUFBTSxRQUFRLG1CQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsT0FBL0IsQ0FBZDtBQUNBLFlBQU0sWUFBTixDQUFtQixXQUFuQixFQUFnQyxLQUFLLEtBQUwsQ0FBVyxRQUFYLElBQXVCLENBQXZEO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsV0FBSyxjQUFMO0FBQ0Q7OztpQ0FFWSxTLEVBQVcsUSxFQUFVLEksRUFBTTtBQUN0QyxhQUNFLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsS0FBSyxLQUFMLENBQVcsU0FBbEMsR0FDQSxhQUFhLFNBQWIsR0FBeUIsSUFBekIsR0FDQSxjQUFjLE1BQWQsR0FBdUIsSUFBdkIsR0FDQSxZQUFZLFNBQVosR0FDQSxhQUFhLFNBQWIsR0FBeUIsSUFBekIsR0FDQSxhQUFhLFFBQWIsR0FBd0IsS0FBSyxPQUFMLENBQWEsU0FBYixFQUF3QixTQUF4QixDQUF4QixHQUNBLGFBQWEsUUFBYixJQUF5QixjQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBekIsR0FBb0QsS0FBSyxPQUFMLENBQWEsYUFBYixFQUE0QixTQUE1QixDQUFwRCxHQUNBLFdBQVcsR0FBWCxHQUFpQixDQUFDLFFBQVEsRUFBVCxFQUFhLE9BQWIsQ0FBcUIsSUFBckIsRUFBMkIsR0FBM0IsQ0FSbkI7QUFVRDs7O3FDQUVnQjtBQUFBLG1CQUN3QyxLQUFLLEtBRDdDO0FBQUEsVUFD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QXpCLEdBQTBELElBRmpDLEVBR3pCLDJCQUF5QixTQUF6QixHQUF1QyxJQUhkLEVBSXpCLFNBSnlCLENBQTNCO0FBTUEsZUFDRTtBQUFBO1VBQUEsRUFBTSxXQUFZLGtCQUFsQixFQUF1QyxLQUFJLGVBQTNDO1VBQ0ksS0FBSyxTQUFMLDBCQUFpQixrQkFBakIsRUFBMkIsVUFBM0IsRUFBaUMsV0FBVyxTQUE1QyxFQUF1RCxvQkFBdkQsSUFBcUUsTUFBckU7QUFESixTQURGO0FBS0Q7O0FBRUQsYUFBTyxLQUFLLFNBQUwsNEJBQW9CLEtBQXBCLElBQTJCLGtCQUEzQixFQUFxQyxVQUFyQyxJQUFQO0FBQ0Q7OztFQTFGK0IsZ0JBQU0sUzs7a0JBQW5CLEk7OztBQTZGckIsS0FBSyxTQUFMLEdBQWlCO0FBQ2YsYUFBVyxpQkFBVSxNQUROO0FBRWYsWUFBVSxpQkFBVSxLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsU0FBckIsRUFBZ0MsVUFBaEMsRUFBNEMsU0FBNUMsQ0FBaEIsQ0FGSztBQUdmLFFBQU0saUJBQVUsTUFIRDtBQUlmLGFBQVcsaUJBQVUsU0FBVixDQUFvQixDQUM3QixpQkFBVSxJQURtQixFQUU3QixpQkFBVSxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFFBQVosQ0FBaEIsQ0FGNkIsQ0FBcEIsQ0FKSTtBQVFmLFNBQU8saUJBQVUsTUFSRjtBQVNmLGFBQVcsaUJBQVUsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLENBQWhCLENBVEk7QUFVZixZQUFVLGlCQUFVLE1BVkw7QUFXZixhQUFXLGlCQUFVO0FBWE4sQ0FBakIiLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG5zdmc0ZXZlcnlib2R5KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNoZWNrSWNvbkNvbG9yKCk7XG4gICAgY29uc3Qgc3ZnRWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc3ZnSWNvbik7XG4gICAgc3ZnRWwuc2V0QXR0cmlidXRlKCdmb2N1c2FibGUnLCB0aGlzLnByb3BzLnRhYkluZGV4ID49IDApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuY2hlY2tJY29uQ29sb3IoKTtcbiAgfVxuXG4gIGdldEljb25Db2xvcihmaWxsQ29sb3IsIGNhdGVnb3J5LCBpY29uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUuaWNvbkNvbG9yID8gdGhpcy5zdGF0ZS5pY29uQ29sb3IgOlxuICAgICAgY2F0ZWdvcnkgPT09ICdkb2N0eXBlJyA/IG51bGwgOlxuICAgICAgZmlsbENvbG9yID09PSAnbm9uZScgPyBudWxsIDpcbiAgICAgIGZpbGxDb2xvciA/IGZpbGxDb2xvciA6XG4gICAgICBjYXRlZ29yeSA9PT0gJ3V0aWxpdHknID8gbnVsbCA6XG4gICAgICBjYXRlZ29yeSA9PT0gJ2N1c3RvbScgPyBpY29uLnJlcGxhY2UoL15jdXN0b20vLCAnY3VzdG9tLScpIDpcbiAgICAgIGNhdGVnb3J5ID09PSAnYWN0aW9uJyAmJiAvXm5ld19jdXN0b20vLnRlc3QoaWNvbikgPyBpY29uLnJlcGxhY2UoL15uZXdfY3VzdG9tLywgJ2N1c3RvbS0nKSA6XG4gICAgICBjYXRlZ29yeSArICctJyArIChpY29uIHx8ICcnKS5yZXBsYWNlKC9fL2csICctJylcbiAgICApO1xuICB9XG5cbiAgY2hlY2tJY29uQ29sb3IoKSB7XG4gICAgY29uc3QgeyBmaWxsQ29sb3IsIGNhdGVnb3J5ID0gJ3V0aWxpdHknLCBjb250YWluZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGZpbGxDb2xvciA9PT0gJ25vbmUnIHx8IGNhdGVnb3J5ID09PSAnZG9jdHlwZScgfHwgKCFmaWxsQ29sb3IgJiYgY2F0ZWdvcnkgPT09ICd1dGlsaXR5JykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZShjb250YWluZXIgPyB0aGlzLnJlZnMuaWNvbkNvbnRhaW5lciA6IHRoaXMucmVmcy5zdmdJY29uKTtcbiAgICBpZiAoIWVsKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IGJnQ29sb3JTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpWydiYWNrZ3JvdW5kLWNvbG9yJ107XG4gICAgaWYgKC9eKHRyYW5zcGFyZW50fHJnYmFcXCgwLFxccyowLFxccyowLFxccyowXFwpKSQvLnRlc3QoYmdDb2xvclN0eWxlKSkgeyAvLyBpZiBubyBiYWNrZ3JvdW5kIGNvbG9yIHNldCB0byB0aGUgaWNvblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGljb25Db2xvcjogJ3N0YW5kYXJkLWRlZmF1bHQnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNWRyh7IGNsYXNzTmFtZSwgY2F0ZWdvcnkgPSAndXRpbGl0eScsIGljb24sIHNpemUsIGFsaWduLCBmaWxsQ29sb3IsIGNvbnRhaW5lciwgdGV4dENvbG9yID0gJ2RlZmF1bHQnLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5nZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbik7XG4gICAgY29uc3QgaWNvbkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAge1xuICAgICAgICAnc2xkcy1pY29uJzogIS9zbGRzXFwtYnV0dG9uX19pY29uLy50ZXN0KGNsYXNzTmFtZSksXG4gICAgICAgIFtgc2xkcy1pY29uLS0ke3NpemV9YF06IC9eKHgtc21hbGx8c21hbGx8bGFyZ2UpJC8udGVzdChzaXplKSxcbiAgICAgICAgW2BzbGRzLWljb24tdGV4dC0ke3RleHRDb2xvcn1gXTogL14oZGVmYXVsdHx3YXJuaW5nfGVycm9yKSQvLnRlc3QodGV4dENvbG9yKSAmJiAhY29udGFpbmVyICYmICFpY29uQ29sb3IsXG4gICAgICAgIFtgc2xkcy1pY29uLSR7aWNvbkNvbG9yfWBdOiAhY29udGFpbmVyICYmIGljb25Db2xvcixcbiAgICAgICAgJ3NsZHMtbS1sZWZ0LS14LXNtYWxsJzogYWxpZ24gPT09ICdyaWdodCcsXG4gICAgICAgICdzbGRzLW0tcmlnaHQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ2xlZnQnLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgY29uc3QgdXNlSHRtbCA9IGA8dXNlIHhsaW5rOmhyZWY9XCIkeyB1dGlsLmdldEFzc2V0Um9vdCgpIH0vaWNvbnMvJHtjYXRlZ29yeX0tc3ByaXRlL3N2Zy9zeW1ib2xzLnN2ZyMke2ljb259XCI+PC91c2U+YDtcbiAgICByZXR1cm4gKFxuICAgICAgPHN2ZyBjbGFzc05hbWU9eyBpY29uQ2xhc3NOYW1lcyB9XG4gICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IHVzZUh0bWwgfSB9XG4gICAgICAgIHJlZj0nc3ZnSWNvbidcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgeyBjYXRlZ29yeSwgaWNvbiB9ID0gcHJvcHM7XG5cbiAgICBpZiAoaWNvbi5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICBbY2F0ZWdvcnksIGljb25dID0gaWNvbi5zcGxpdCgnOicpO1xuICAgIH1cbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBjb25zdCB7IGNsYXNzTmFtZSwgZmlsbENvbG9yLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5nZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbik7XG4gICAgICBjb25zdCBjb250YWluZXJDbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgICAnc2xkcy1pY29uX19jb250YWluZXInLFxuICAgICAgICBjb250YWluZXIgPT09ICdjaXJjbGUnID8gJ3NsZHMtaWNvbl9fY29udGFpbmVyLS1jaXJjbGUnIDogbnVsbCxcbiAgICAgICAgaWNvbkNvbG9yID8gYHNsZHMtaWNvbi0ke2ljb25Db2xvcn1gIDogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgY29udGFpbmVyQ2xhc3NOYW1lIH0gcmVmPSdpY29uQ29udGFpbmVyJz5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU1ZHKHsgY2F0ZWdvcnksIGljb24sIGZpbGxDb2xvcjogaWNvbkNvbG9yLCBjb250YWluZXIsIC4uLnBwcm9wcyB9KSB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU1ZHKHsgLi4ucHJvcHMsIGNhdGVnb3J5LCBpY29uIH0pO1xuICB9XG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMub25lT2YoWydhY3Rpb24nLCAnY3VzdG9tJywgJ2RvY3R5cGUnLCAnc3RhbmRhcmQnLCAndXRpbGl0eSddKSxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NpcmNsZSddKSxcbiAgXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnd2FybmluZycsICdlcnJvciddKSxcbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZpbGxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iXX0=