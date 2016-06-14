'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Grid).apply(this, arguments));
  }

  (0, _createClass3.default)(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var frame = _props.frame;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'frame', 'children']);

      var gridClassNames = (0, _classnames2.default)(className, 'slds-grid', 'slds-grid--vertical', frame ? 'slds-grid--frame' : null);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: gridClassNames }, props),
        children
      );
    }
  }]);
  return Grid;
}(_react.Component);

Grid.propTypes = {
  className: _react.PropTypes.string,
  frame: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

var Row = exports.Row = function (_Component2) {
  (0, _inherits3.default)(Row, _Component2);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'renderColumn',
    value: function renderColumn(colProps, child) {
      /* eslint-disable no-use-before-define */
      if (child.type !== Col) {
        return _react2.default.createElement(
          Col,
          colProps,
          child
        );
      }

      var childProps = (0, _keys2.default)(colProps).reduce(function (cprops, key) {
        cprops[key] = child.props[key] || colProps[key];
        return cprops;
      }, {});
      return _react2.default.cloneElement(child, childProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var align = _props2.align;
      var nowrap = _props2.nowrap;
      var nowrapSmall = _props2.nowrapSmall;
      var nowrapMedium = _props2.nowrapMedium;
      var nowrapLarge = _props2.nowrapLarge;
      var cols = _props2.cols;
      var colsSmall = _props2.colsSmall;
      var colsMedium = _props2.colsMedium;
      var colsLarge = _props2.colsLarge;
      var children = _props2.children;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'align', 'nowrap', 'nowrapSmall', 'nowrapMedium', 'nowrapLarge', 'cols', 'colsSmall', 'colsMedium', 'colsLarge', 'children']);

      var rowClassNames = (0, _classnames2.default)(className, 'slds-grid', align ? 'slds-grid--align-' + align : null, nowrap ? 'slds-nowrap' : 'slds-wrap', nowrapSmall ? 'slds-nowrap--small' : null, nowrapMedium ? 'slds-nowrap--medium' : null, nowrapLarge ? 'slds-nowrap--large' : null);
      var totalCols = cols || function () {
        var cnt = 0;
        _react2.default.Children.forEach(children, function (child) {
          return cnt += child.props.cols || 1;
        });
        return cnt;
      }();
      var colProps = {
        totalCols: totalCols,
        totalColsSmall: colsSmall || totalCols,
        totalColsMedium: colsMedium || totalCols,
        totalColsLarge: colsLarge || totalCols
      };
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rowClassNames }, props),
        _react2.default.Children.map(children, this.renderColumn.bind(this, colProps))
      );
    }
  }]);
  return Row;
}(_react.Component);

var ROW_ALIGNS = ['center', 'space', 'spread'];

Row.propTypes = {
  className: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(ROW_ALIGNS),
  nowrap: _react.PropTypes.bool,
  nowrapSmall: _react.PropTypes.bool,
  nowrapMedium: _react.PropTypes.bool,
  nowrapLarge: _react.PropTypes.bool,
  cols: _react.PropTypes.number,
  colsSmall: _react.PropTypes.number,
  colsMedium: _react.PropTypes.number,
  colsLarge: _react.PropTypes.number,
  children: _react.PropTypes.node
};

function adjustCols(colNum, large) {
  if (colNum > 6) {
    return large ? 12 : 6;
  }
  return colNum;
}

var Col = exports.Col = function (_Component3) {
  (0, _inherits3.default)(Col, _Component3);

  function Col() {
    (0, _classCallCheck3.default)(this, Col);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Col).apply(this, arguments));
  }

  (0, _createClass3.default)(Col, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var padded = _props3.padded;
      var align = _props3.align;
      var noFlex = _props3.noFlex;
      var order = _props3.order;
      var orderSmall = _props3.orderSmall;
      var orderMedium = _props3.orderMedium;
      var orderLarge = _props3.orderLarge;
      var cols = _props3.cols;
      var colsSmall = _props3.colsSmall;
      var colsMedium = _props3.colsMedium;
      var colsLarge = _props3.colsLarge;
      var totalCols = _props3.totalCols;
      var totalColsSmall = _props3.totalColsSmall;
      var totalColsMedium = _props3.totalColsMedium;
      var totalColsLarge = _props3.totalColsLarge;
      var children = _props3.children;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'padded', 'align', 'noFlex', 'order', 'orderSmall', 'orderMedium', 'orderLarge', 'cols', 'colsSmall', 'colsMedium', 'colsLarge', 'totalCols', 'totalColsSmall', 'totalColsMedium', 'totalColsLarge', 'children']);

      var rowClassNames = (0, _classnames2.default)(className, padded ? 'slds-col--padded' + (/^(medium|large)$/.test(padded) ? '-' + padded : '') : 'slds-col', align ? 'slds-align-' + align : null, noFlex ? 'slds-no-flex' : null, order ? 'slds-order--' + order : null, orderSmall ? 'slds-small-order--' + orderSmall : null, orderMedium ? 'slds-medium-order--' + orderMedium : null, orderLarge ? 'slds-large-order--' + orderLarge : null, cols && totalCols ? 'slds-size--' + cols + '-of-' + adjustCols(totalCols, true) : null, colsSmall && totalColsSmall ? 'slds-small-size--' + colsSmall + '-of-' + adjustCols(totalColsSmall) : null, colsMedium && totalColsMedium ? 'slds-medium-size--' + colsMedium + '-of-' + adjustCols(totalColsMedium) : null, colsLarge && totalColsMedium ? 'slds-large-size--' + colsLarge + '-of-' + adjustCols(totalColsLarge, true) : null);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rowClassNames }, props),
        children
      );
    }
  }]);
  return Col;
}(_react.Component);

var COL_ALIGNS = ['top', 'medium', 'bottom'];

Col.propTypes = {
  className: _react.PropTypes.string,
  padded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
  align: _react.PropTypes.oneOf(COL_ALIGNS),
  noFlex: _react.PropTypes.bool,
  order: _react.PropTypes.number,
  orderSmall: _react.PropTypes.number,
  orderMedium: _react.PropTypes.number,
  orderLarge: _react.PropTypes.number,
  nowrap: _react.PropTypes.bool,
  cols: _react.PropTypes.number,
  colsSmall: _react.PropTypes.number,
  colsMedium: _react.PropTypes.number,
  colsLarge: _react.PropTypes.number,
  totalCols: _react.PropTypes.number,
  totalColsSmall: _react.PropTypes.number,
  totalColsMedium: _react.PropTypes.number,
  totalColsLarge: _react.PropTypes.number,
  children: _react.PropTypes.node
};

exports.default = Grid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0dyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRU0sSTs7Ozs7Ozs7Ozs2QkFDSztBQUFBLG1CQUMwQyxLQUFLLEtBRC9DO0FBQUEsVUFDQyxTQURELFVBQ0MsU0FERDtBQUFBLFVBQ1ksS0FEWixVQUNZLEtBRFo7QUFBQSxVQUNtQixRQURuQixVQUNtQixRQURuQjtBQUFBLFVBQ2dDLEtBRGhDOztBQUVQLFVBQU0saUJBQWlCLDBCQUNyQixTQURxQixFQUNWLFdBRFUsRUFDRyxxQkFESCxFQUVyQixRQUFRLGtCQUFSLEdBQTZCLElBRlIsQ0FBdkI7QUFJQSxhQUNFO0FBQUE7UUFBQSx5QkFBSyxXQUFZLGNBQWpCLElBQXVDLEtBQXZDO1FBQ0k7QUFESixPQURGO0FBS0Q7Ozs7O0FBR0gsS0FBSyxTQUFMLEdBQWlCO0FBQ2YsYUFBVyxpQkFBVSxNQUROO0FBRWYsU0FBTyxpQkFBVSxJQUZGO0FBR2YsWUFBVSxpQkFBVTtBQUhMLENBQWpCOztJQU1hLEcsV0FBQSxHOzs7Ozs7Ozs7O2lDQUNFLFEsRUFBVSxLLEVBQU87O0FBRTVCLFVBQUksTUFBTSxJQUFOLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEIsZUFBTztBQUFDLGFBQUQ7VUFBVSxRQUFWO1VBQXVCO0FBQXZCLFNBQVA7QUFDRDs7QUFFRCxVQUFNLGFBQWEsb0JBQVksUUFBWixFQUFzQixNQUF0QixDQUE2QixVQUFDLE1BQUQsRUFBUyxHQUFULEVBQWlCO0FBQy9ELGVBQU8sR0FBUCxJQUFjLE1BQU0sS0FBTixDQUFZLEdBQVosS0FBb0IsU0FBUyxHQUFULENBQWxDO0FBQ0EsZUFBTyxNQUFQO0FBQ0QsT0FIa0IsRUFHaEIsRUFIZ0IsQ0FBbkI7QUFJQSxhQUFPLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEIsVUFBMUIsQ0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxvQkFLSCxLQUFLLEtBTEY7QUFBQSxVQUVMLFNBRkssV0FFTCxTQUZLO0FBQUEsVUFFTSxLQUZOLFdBRU0sS0FGTjtBQUFBLFVBRWEsTUFGYixXQUVhLE1BRmI7QUFBQSxVQUVxQixXQUZyQixXQUVxQixXQUZyQjtBQUFBLFVBRWtDLFlBRmxDLFdBRWtDLFlBRmxDO0FBQUEsVUFFZ0QsV0FGaEQsV0FFZ0QsV0FGaEQ7QUFBQSxVQUdMLElBSEssV0FHTCxJQUhLO0FBQUEsVUFHQyxTQUhELFdBR0MsU0FIRDtBQUFBLFVBR1ksVUFIWixXQUdZLFVBSFo7QUFBQSxVQUd3QixTQUh4QixXQUd3QixTQUh4QjtBQUFBLFVBSUwsUUFKSyxXQUlMLFFBSks7QUFBQSxVQUlRLEtBSlI7O0FBTVAsVUFBTSxnQkFBZ0IsMEJBQ3BCLFNBRG9CLEVBQ1QsV0FEUyxFQUVwQiw4QkFBNEIsS0FBNUIsR0FBc0MsSUFGbEIsRUFHcEIseUJBQXlCLFdBSEwsRUFJcEIsY0FBYyxvQkFBZCxHQUFxQyxJQUpqQixFQUtwQixlQUFlLHFCQUFmLEdBQXVDLElBTG5CLEVBTXBCLGNBQWMsb0JBQWQsR0FBcUMsSUFOakIsQ0FBdEI7QUFRQSxVQUFNLFlBQVksUUFBUyxZQUFNO0FBQy9CLFlBQUksTUFBTSxDQUFWO0FBQ0Esd0JBQU0sUUFBTixDQUFlLE9BQWYsQ0FBdUIsUUFBdkIsRUFBaUMsVUFBQyxLQUFEO0FBQUEsaUJBQVcsT0FBTyxNQUFNLEtBQU4sQ0FBWSxJQUFaLElBQW9CLENBQXRDO0FBQUEsU0FBakM7QUFDQSxlQUFPLEdBQVA7QUFDRCxPQUp5QixFQUExQjtBQUtBLFVBQU0sV0FBVztBQUNmLDRCQURlO0FBRWYsd0JBQWdCLGFBQWEsU0FGZDtBQUdmLHlCQUFpQixjQUFjLFNBSGhCO0FBSWYsd0JBQWdCLGFBQWE7QUFKZCxPQUFqQjtBQU1BLGFBQ0U7QUFBQTtRQUFBLHlCQUFLLFdBQVksYUFBakIsSUFBc0MsS0FBdEM7UUFDSSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixRQUFuQixFQUE2QixLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsUUFBN0IsQ0FBN0I7QUFESixPQURGO0FBS0Q7Ozs7O0FBR0gsSUFBTSxhQUFhLENBQ2pCLFFBRGlCLEVBRWpCLE9BRmlCLEVBR2pCLFFBSGlCLENBQW5COztBQU1BLElBQUksU0FBSixHQUFnQjtBQUNkLGFBQVcsaUJBQVUsTUFEUDtBQUVkLFNBQU8saUJBQVUsS0FBVixDQUFnQixVQUFoQixDQUZPO0FBR2QsVUFBUSxpQkFBVSxJQUhKO0FBSWQsZUFBYSxpQkFBVSxJQUpUO0FBS2QsZ0JBQWMsaUJBQVUsSUFMVjtBQU1kLGVBQWEsaUJBQVUsSUFOVDtBQU9kLFFBQU0saUJBQVUsTUFQRjtBQVFkLGFBQVcsaUJBQVUsTUFSUDtBQVNkLGNBQVksaUJBQVUsTUFUUjtBQVVkLGFBQVcsaUJBQVUsTUFWUDtBQVdkLFlBQVUsaUJBQVU7QUFYTixDQUFoQjs7QUFlQSxTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEIsS0FBNUIsRUFBbUM7QUFDakMsTUFBSSxTQUFTLENBQWIsRUFBZ0I7QUFDZCxXQUFPLFFBQVEsRUFBUixHQUFhLENBQXBCO0FBQ0Q7QUFDRCxTQUFPLE1BQVA7QUFDRDs7SUFFWSxHLFdBQUEsRzs7Ozs7Ozs7Ozs2QkFDRjtBQUFBLG9CQU9ILEtBQUssS0FQRjtBQUFBLFVBRUwsU0FGSyxXQUVMLFNBRks7QUFBQSxVQUVNLE1BRk4sV0FFTSxNQUZOO0FBQUEsVUFFYyxLQUZkLFdBRWMsS0FGZDtBQUFBLFVBRXFCLE1BRnJCLFdBRXFCLE1BRnJCO0FBQUEsVUFHTCxLQUhLLFdBR0wsS0FISztBQUFBLFVBR0UsVUFIRixXQUdFLFVBSEY7QUFBQSxVQUdjLFdBSGQsV0FHYyxXQUhkO0FBQUEsVUFHMkIsVUFIM0IsV0FHMkIsVUFIM0I7QUFBQSxVQUlMLElBSkssV0FJTCxJQUpLO0FBQUEsVUFJQyxTQUpELFdBSUMsU0FKRDtBQUFBLFVBSVksVUFKWixXQUlZLFVBSlo7QUFBQSxVQUl3QixTQUp4QixXQUl3QixTQUp4QjtBQUFBLFVBS0wsU0FMSyxXQUtMLFNBTEs7QUFBQSxVQUtNLGNBTE4sV0FLTSxjQUxOO0FBQUEsVUFLc0IsZUFMdEIsV0FLc0IsZUFMdEI7QUFBQSxVQUt1QyxjQUx2QyxXQUt1QyxjQUx2QztBQUFBLFVBTUwsUUFOSyxXQU1MLFFBTks7QUFBQSxVQU1RLEtBTlI7O0FBUVAsVUFBTSxnQkFBZ0IsMEJBQ3BCLFNBRG9CLEVBRXBCLCtCQUNxQixtQkFBbUIsSUFBbkIsQ0FBd0IsTUFBeEIsSUFBa0MsTUFBTSxNQUF4QyxHQUFpRCxFQUR0RSxJQUVFLFVBSmtCLEVBS3BCLHdCQUFzQixLQUF0QixHQUFnQyxJQUxaLEVBTXBCLFNBQVMsY0FBVCxHQUEwQixJQU5OLEVBT3BCLHlCQUF1QixLQUF2QixHQUFpQyxJQVBiLEVBUXBCLG9DQUFrQyxVQUFsQyxHQUFpRCxJQVI3QixFQVNwQixzQ0FBb0MsV0FBcEMsR0FBb0QsSUFUaEMsRUFVcEIsb0NBQWtDLFVBQWxDLEdBQWlELElBVjdCLEVBV3BCLFFBQVEsU0FBUixtQkFBa0MsSUFBbEMsWUFBNkMsV0FBVyxTQUFYLEVBQXNCLElBQXRCLENBQTdDLEdBQTZFLElBWHpELEVBWXBCLGFBQWEsY0FBYix5QkFBa0QsU0FBbEQsWUFBa0UsV0FBVyxjQUFYLENBQWxFLEdBQWlHLElBWjdFLEVBYXBCLGNBQWMsZUFBZCwwQkFBcUQsVUFBckQsWUFBc0UsV0FBVyxlQUFYLENBQXRFLEdBQXNHLElBYmxGLEVBY3BCLGFBQWEsZUFBYix5QkFBbUQsU0FBbkQsWUFBbUUsV0FBVyxjQUFYLEVBQTJCLElBQTNCLENBQW5FLEdBQXdHLElBZHBGLENBQXRCO0FBZ0JBLGFBQ0U7QUFBQTtRQUFBLHlCQUFLLFdBQVksYUFBakIsSUFBc0MsS0FBdEM7UUFDSTtBQURKLE9BREY7QUFLRDs7Ozs7QUFHSCxJQUFNLGFBQWEsQ0FDakIsS0FEaUIsRUFFakIsUUFGaUIsRUFHakIsUUFIaUIsQ0FBbkI7O0FBTUEsSUFBSSxTQUFKLEdBQWdCO0FBQ2QsYUFBVyxpQkFBVSxNQURQO0FBRWQsVUFBUSxpQkFBVSxTQUFWLENBQW9CLENBQzFCLGlCQUFVLElBRGdCLEVBRTFCLGlCQUFVLE1BRmdCLENBQXBCLENBRk07QUFNZCxTQUFPLGlCQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FOTztBQU9kLFVBQVEsaUJBQVUsSUFQSjtBQVFkLFNBQU8saUJBQVUsTUFSSDtBQVNkLGNBQVksaUJBQVUsTUFUUjtBQVVkLGVBQWEsaUJBQVUsTUFWVDtBQVdkLGNBQVksaUJBQVUsTUFYUjtBQVlkLFVBQVEsaUJBQVUsSUFaSjtBQWFkLFFBQU0saUJBQVUsTUFiRjtBQWNkLGFBQVcsaUJBQVUsTUFkUDtBQWVkLGNBQVksaUJBQVUsTUFmUjtBQWdCZCxhQUFXLGlCQUFVLE1BaEJQO0FBaUJkLGFBQVcsaUJBQVUsTUFqQlA7QUFrQmQsa0JBQWdCLGlCQUFVLE1BbEJaO0FBbUJkLG1CQUFpQixpQkFBVSxNQW5CYjtBQW9CZCxrQkFBZ0IsaUJBQVUsTUFwQlo7QUFxQmQsWUFBVSxpQkFBVTtBQXJCTixDQUFoQjs7a0JBeUJlLEkiLCJmaWxlIjoiR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBmcmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdyaWRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSwgJ3NsZHMtZ3JpZCcsICdzbGRzLWdyaWQtLXZlcnRpY2FsJyxcbiAgICAgIGZyYW1lID8gJ3NsZHMtZ3JpZC0tZnJhbWUnIDogbnVsbFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZ3JpZENsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5HcmlkLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmcmFtZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjbGFzcyBSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXJDb2x1bW4oY29sUHJvcHMsIGNoaWxkKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbiAgICBpZiAoY2hpbGQudHlwZSAhPT0gQ29sKSB7XG4gICAgICByZXR1cm4gPENvbCB7IC4uLmNvbFByb3BzIH0+eyBjaGlsZCB9PC9Db2w+O1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSBPYmplY3Qua2V5cyhjb2xQcm9wcykucmVkdWNlKChjcHJvcHMsIGtleSkgPT4ge1xuICAgICAgY3Byb3BzW2tleV0gPSBjaGlsZC5wcm9wc1trZXldIHx8IGNvbFByb3BzW2tleV07XG4gICAgICByZXR1cm4gY3Byb3BzO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIGFsaWduLCBub3dyYXAsIG5vd3JhcFNtYWxsLCBub3dyYXBNZWRpdW0sIG5vd3JhcExhcmdlLFxuICAgICAgY29scywgY29sc1NtYWxsLCBjb2xzTWVkaXVtLCBjb2xzTGFyZ2UsXG4gICAgICBjaGlsZHJlbiwgLi4ucHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgcm93Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsICdzbGRzLWdyaWQnLFxuICAgICAgYWxpZ24gPyBgc2xkcy1ncmlkLS1hbGlnbi0ke2FsaWdufWAgOiBudWxsLFxuICAgICAgbm93cmFwID8gYHNsZHMtbm93cmFwYCA6ICdzbGRzLXdyYXAnLFxuICAgICAgbm93cmFwU21hbGwgPyAnc2xkcy1ub3dyYXAtLXNtYWxsJyA6IG51bGwsXG4gICAgICBub3dyYXBNZWRpdW0gPyAnc2xkcy1ub3dyYXAtLW1lZGl1bScgOiBudWxsLFxuICAgICAgbm93cmFwTGFyZ2UgPyAnc2xkcy1ub3dyYXAtLWxhcmdlJyA6IG51bGxcbiAgICApO1xuICAgIGNvbnN0IHRvdGFsQ29scyA9IGNvbHMgfHwgKCgpID0+IHtcbiAgICAgIGxldCBjbnQgPSAwO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgKGNoaWxkKSA9PiBjbnQgKz0gY2hpbGQucHJvcHMuY29scyB8fCAxKTtcbiAgICAgIHJldHVybiBjbnQ7XG4gICAgfSkoKTtcbiAgICBjb25zdCBjb2xQcm9wcyA9IHtcbiAgICAgIHRvdGFsQ29scyxcbiAgICAgIHRvdGFsQ29sc1NtYWxsOiBjb2xzU21hbGwgfHwgdG90YWxDb2xzLFxuICAgICAgdG90YWxDb2xzTWVkaXVtOiBjb2xzTWVkaXVtIHx8IHRvdGFsQ29scyxcbiAgICAgIHRvdGFsQ29sc0xhcmdlOiBjb2xzTGFyZ2UgfHwgdG90YWxDb2xzLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgcm93Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29sdW1uLmJpbmQodGhpcywgY29sUHJvcHMpKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFJPV19BTElHTlMgPSBbXG4gICdjZW50ZXInLFxuICAnc3BhY2UnLFxuICAnc3ByZWFkJyxcbl07XG5cblJvdy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihST1dfQUxJR05TKSxcbiAgbm93cmFwOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm93cmFwU21hbGw6IFByb3BUeXBlcy5ib29sLFxuICBub3dyYXBNZWRpdW06IFByb3BUeXBlcy5ib29sLFxuICBub3dyYXBMYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHNTbWFsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc01lZGl1bTogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc0xhcmdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cbmZ1bmN0aW9uIGFkanVzdENvbHMoY29sTnVtLCBsYXJnZSkge1xuICBpZiAoY29sTnVtID4gNikge1xuICAgIHJldHVybiBsYXJnZSA/IDEyIDogNjtcbiAgfVxuICByZXR1cm4gY29sTnVtO1xufVxuXG5leHBvcnQgY2xhc3MgQ29sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgcGFkZGVkLCBhbGlnbiwgbm9GbGV4LFxuICAgICAgb3JkZXIsIG9yZGVyU21hbGwsIG9yZGVyTWVkaXVtLCBvcmRlckxhcmdlLFxuICAgICAgY29scywgY29sc1NtYWxsLCBjb2xzTWVkaXVtLCBjb2xzTGFyZ2UsXG4gICAgICB0b3RhbENvbHMsIHRvdGFsQ29sc1NtYWxsLCB0b3RhbENvbHNNZWRpdW0sIHRvdGFsQ29sc0xhcmdlLFxuICAgICAgY2hpbGRyZW4sIC4uLnByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJvd0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgcGFkZGVkID9cbiAgICAgICAgYHNsZHMtY29sLS1wYWRkZWQkey9eKG1lZGl1bXxsYXJnZSkkLy50ZXN0KHBhZGRlZCkgPyAnLScgKyBwYWRkZWQgOiAnJ31gIDpcbiAgICAgICAgJ3NsZHMtY29sJyxcbiAgICAgIGFsaWduID8gYHNsZHMtYWxpZ24tJHthbGlnbn1gIDogbnVsbCxcbiAgICAgIG5vRmxleCA/ICdzbGRzLW5vLWZsZXgnIDogbnVsbCxcbiAgICAgIG9yZGVyID8gYHNsZHMtb3JkZXItLSR7b3JkZXJ9YCA6IG51bGwsXG4gICAgICBvcmRlclNtYWxsID8gYHNsZHMtc21hbGwtb3JkZXItLSR7b3JkZXJTbWFsbH1gIDogbnVsbCxcbiAgICAgIG9yZGVyTWVkaXVtID8gYHNsZHMtbWVkaXVtLW9yZGVyLS0ke29yZGVyTWVkaXVtfWAgOiBudWxsLFxuICAgICAgb3JkZXJMYXJnZSA/IGBzbGRzLWxhcmdlLW9yZGVyLS0ke29yZGVyTGFyZ2V9YCA6IG51bGwsXG4gICAgICBjb2xzICYmIHRvdGFsQ29scyA/IGBzbGRzLXNpemUtLSR7Y29sc30tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29scywgdHJ1ZSl9YCA6IG51bGwsXG4gICAgICBjb2xzU21hbGwgJiYgdG90YWxDb2xzU21hbGwgPyBgc2xkcy1zbWFsbC1zaXplLS0ke2NvbHNTbWFsbH0tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29sc1NtYWxsKX1gIDogbnVsbCxcbiAgICAgIGNvbHNNZWRpdW0gJiYgdG90YWxDb2xzTWVkaXVtID8gYHNsZHMtbWVkaXVtLXNpemUtLSR7Y29sc01lZGl1bX0tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29sc01lZGl1bSl9YCA6IG51bGwsXG4gICAgICBjb2xzTGFyZ2UgJiYgdG90YWxDb2xzTWVkaXVtID8gYHNsZHMtbGFyZ2Utc2l6ZS0tJHtjb2xzTGFyZ2V9LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHNMYXJnZSwgdHJ1ZSl9YCA6IG51bGxcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHJvd0NsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBDT0xfQUxJR05TID0gW1xuICAndG9wJyxcbiAgJ21lZGl1bScsXG4gICdib3R0b20nLFxuXTtcblxuQ29sLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYWRkZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKENPTF9BTElHTlMpLFxuICBub0ZsZXg6IFByb3BUeXBlcy5ib29sLFxuICBvcmRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgb3JkZXJTbWFsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgb3JkZXJNZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXG4gIG9yZGVyTGFyZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIG5vd3JhcDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHNTbWFsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc01lZGl1bTogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc0xhcmdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvdGFsQ29sc1NtYWxsOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3RhbENvbHNNZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvdGFsQ29sc0xhcmdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iXX0=