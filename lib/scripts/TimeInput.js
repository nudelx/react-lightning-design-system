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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Datepicker = require('./Datepicker');

var _Datepicker2 = _interopRequireDefault(_Datepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeInput = function (_React$Component) {
  (0, _inherits3.default)(TimeInput, _React$Component);

  function TimeInput(props) {
    (0, _classCallCheck3.default)(this, TimeInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TimeInput).call(this, props));

    _this.state = {
      id: 'form-element-' + (0, _uuid2.default)(),
      opened: props.defaultOpened || false
    };
    return _this;
  }

  (0, _createClass3.default)(TimeInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.onValueChange && prevState.value !== this.state.value) {
        this.props.onValueChange(this.state.value, prevState.value);
      }
    }
  }, {
    key: 'onDateIconClick',
    value: function onDateIconClick() {
      var _this2 = this;

      setTimeout(function () {
        _this2.showDatepicker();
      }, 10);
    }
  }, {
    key: 'onInputKeyDown',
    value: function onInputKeyDown(e) {
      var _this3 = this;

      if (e.keyCode === 13) {
        // return key
        e.preventDefault();
        e.stopPropagation();
        this.setValueFromInput(e.target.value);
        if (this.props.onComplete) {
          setTimeout(function () {
            _this3.props.onComplete();
          }, 10);
        }
      } else if (e.keyCode === 40) {
        // down key
        this.showDatepicker();
        e.preventDefault();
        e.stopPropagation();
      }
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      var inputValue = e.target.value;
      this.setState({ inputValue: inputValue });
      if (this.props.onChange) {
        this.props.onChange(e, inputValue);
      }
    }
  }, {
    key: 'onInputBlur',
    value: function onInputBlur(e) {
      var _this4 = this;

      this.setValueFromInput(e.target.value);
      setTimeout(function () {
        if (!_this4.isFocusedInComponent()) {
          if (_this4.props.onBlur) {
            _this4.props.onBlur();
          }
          if (_this4.props.onComplete) {
            _this4.props.onComplete();
          }
        }
      }, 10);
    }
  }, {
    key: 'onDatepickerSelect',
    value: function onDatepickerSelect(value) {
      var _this5 = this;

      this.setState({ value: value, inputValue: undefined });
      setTimeout(function () {
        _this5.setState({ opened: false });
        var inputEl = _reactDom2.default.findDOMNode(_this5.refs.input);
        if (inputEl) {
          inputEl.focus();
          inputEl.select();
        }
        if (_this5.props.onComplete) {
          _this5.props.onComplete();
        }
      }, 200);
    }
  }, {
    key: 'onDatepickerBlur',
    value: function onDatepickerBlur() {
      var _this6 = this;

      this.setState({ opened: false });
      setTimeout(function () {
        if (!_this6.isFocusedInComponent()) {
          if (_this6.props.onBlur) {
            _this6.props.onBlur();
          }
          if (_this6.props.onComplete) {
            _this6.props.onComplete();
          }
        }
      }, 10);
    }
  }, {
    key: 'onDatepickerClose',
    value: function onDatepickerClose() {
      this.setState({ opened: false });
      var inputEl = _reactDom2.default.findDOMNode(this.refs.input);
      if (inputEl) {
        inputEl.focus();
        inputEl.select();
      }
    }
  }, {
    key: 'setValueFromInput',
    value: function setValueFromInput(inputValue) {
      var value = this.state.value;
      if (!inputValue) {
        value = '';
      } else {
        value = (0, _moment2.default)(inputValue, this.props.dateFormat);
        if (value.isValid()) {
          value = value.format('YYYY-MM-DD');
        } else {
          value = '';
        }
      }
      this.setState({ value: value, inputValue: undefined });
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var rootEl = _reactDom2.default.findDOMNode(this);
      var targetEl = document.activeElement;
      while (targetEl && targetEl !== rootEl) {
        targetEl = targetEl.parentNode;
      }
      return !!targetEl;
    }
  }, {
    key: 'showDatepicker',
    value: function showDatepicker() {
      var value = this.state.value;
      if (typeof this.state.inputValue !== 'undefined') {
        value = (0, _moment2.default)(this.state.inputValue, this.props.dateFormat);
        if (value.isValid()) {
          value = value.format('YYYY-MM-DD');
        } else {
          value = this.state.value;
        }
      }
      this.setState({ opened: true, value: value });
    }
  }, {
    key: 'renderInput',
    value: function renderInput(_ref) {
      var inputValue = _ref.inputValue;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['inputValue']);

      return _react2.default.createElement(
        'div',
        { className: 'slds-input-has-icon slds-input-has-icon--right' },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({ ref: 'input', value: inputValue }, props, {
          onKeyDown: this.onInputKeyDown.bind(this),
          onChange: this.onInputChange.bind(this),
          onBlur: this.onInputBlur.bind(this)
        })),
        _react2.default.createElement(_Icon2.default, { icon: 'event', className: 'slds-input__icon', style: { cursor: 'pointer' },
          onClick: this.onDateIconClick.bind(this)
        })
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown(dateValue) {
      var datepickerClassNames = (0, _classnames2.default)('slds-dropdown', 'slds-dropdown--left');
      return this.state.opened ? _react2.default.createElement(_Datepicker2.default, { className: datepickerClassNames, selectedDate: dateValue, autoFocus: true,
        onSelect: this.onDatepickerSelect.bind(this),
        onBlur: this.onDatepickerBlur.bind(this),
        onClose: this.onDatepickerClose.bind(this)
      }) : _react2.default.createElement('div', null);
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.id || this.state.id;
      var _props = this.props;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var label = _props.label;
      var required = _props.required;
      var error = _props.error;
      var defaultValue = _props.defaultValue;
      var value = _props.value;
      var dateFormat = _props.dateFormat;
      var onChange = _props.onChange;
      var onKeyDown = _props.onKeyDown;
      var onBlur = _props.onBlur;
      var props = (0, _objectWithoutProperties3.default)(_props, ['totalCols', 'cols', 'label', 'required', 'error', 'defaultValue', 'value', 'dateFormat', 'onChange', 'onKeyDown', 'onBlur']);

      // const dateValue =
      //   typeof value !== 'undefined' ? value :
      //   typeof this.state.value !== 'undefined' ? this.state.value :
      //   defaultValue;
      // const mvalue = moment(dateValue, 'YYYY-MM-DD');
      // const inputValue =
      //   typeof this.state.inputValue !== 'undefined' ? this.state.inputValue :
      //   typeof dateValue !== 'undefined' && mvalue.isValid() ? mvalue.format(dateFormat) :
      //   null;
      // const dropdown = this.renderDropdown(dateValue);

      var inputValue = '11';
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error };
      return _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        this.renderInput((0, _extends3.default)({ id: id, inputValue: inputValue }, props))
      );
    }
  }]);
  return TimeInput;
}(_react2.default.Component);

exports.default = TimeInput;


TimeInput.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  value: _react.PropTypes.string,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  defaultValue: _react.PropTypes.string,
  defaultOpened: _react.PropTypes.bool,
  dateFormat: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  onValueChange: _react.PropTypes.func,
  onComplete: _react.PropTypes.func
};

TimeInput.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RpbWVJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUIsUzs7O0FBQ25CLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLDRCQUFvQixxQkFEVDtBQUVYLGNBQVMsTUFBTSxhQUFOLElBQXVCO0FBRnJCLEtBQWI7QUFGaUI7QUFNbEI7Ozs7dUNBRWtCLFMsRUFBVyxTLEVBQVc7QUFDdkMsVUFBSSxLQUFLLEtBQUwsQ0FBVyxhQUFYLElBQTRCLFVBQVUsS0FBVixLQUFvQixLQUFLLEtBQUwsQ0FBVyxLQUEvRCxFQUFzRTtBQUNwRSxhQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEtBQUssS0FBTCxDQUFXLEtBQXBDLEVBQTJDLFVBQVUsS0FBckQ7QUFDRDtBQUNGOzs7c0NBRWlCO0FBQUE7O0FBQ2hCLGlCQUFXLFlBQU07QUFDZixlQUFLLGNBQUw7QUFDRCxPQUZELEVBRUcsRUFGSDtBQUdEOzs7bUNBRWMsQyxFQUFHO0FBQUE7O0FBQ2hCLFVBQUksRUFBRSxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7O0FBQ3BCLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLGFBQUssaUJBQUwsQ0FBdUIsRUFBRSxNQUFGLENBQVMsS0FBaEM7QUFDQSxZQUFJLEtBQUssS0FBTCxDQUFXLFVBQWYsRUFBMkI7QUFDekIscUJBQVcsWUFBTTtBQUNmLG1CQUFLLEtBQUwsQ0FBVyxVQUFYO0FBQ0QsV0FGRCxFQUVHLEVBRkg7QUFHRDtBQUNGLE9BVEQsTUFTTyxJQUFJLEVBQUUsT0FBRixLQUFjLEVBQWxCLEVBQXNCOztBQUMzQixhQUFLLGNBQUw7QUFDQSxVQUFFLGNBQUY7QUFDQSxVQUFFLGVBQUY7QUFDRDtBQUNELFVBQUksS0FBSyxLQUFMLENBQVcsU0FBZixFQUEwQjtBQUN4QixhQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLENBQXJCO0FBQ0Q7QUFDRjs7O2tDQUVhLEMsRUFBRztBQUNmLFVBQU0sYUFBYSxFQUFFLE1BQUYsQ0FBUyxLQUE1QjtBQUNBLFdBQUssUUFBTCxDQUFjLEVBQUUsc0JBQUYsRUFBZDtBQUNBLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLFVBQXZCO0FBQ0Q7QUFDRjs7O2dDQUVXLEMsRUFBRztBQUFBOztBQUNiLFdBQUssaUJBQUwsQ0FBdUIsRUFBRSxNQUFGLENBQVMsS0FBaEM7QUFDQSxpQkFBVyxZQUFNO0FBQ2YsWUFBSSxDQUFDLE9BQUssb0JBQUwsRUFBTCxFQUFrQztBQUNoQyxjQUFJLE9BQUssS0FBTCxDQUFXLE1BQWYsRUFBdUI7QUFDckIsbUJBQUssS0FBTCxDQUFXLE1BQVg7QUFDRDtBQUNELGNBQUksT0FBSyxLQUFMLENBQVcsVUFBZixFQUEyQjtBQUN6QixtQkFBSyxLQUFMLENBQVcsVUFBWDtBQUNEO0FBQ0Y7QUFDRixPQVRELEVBU0csRUFUSDtBQVVEOzs7dUNBRWtCLEssRUFBTztBQUFBOztBQUN4QixXQUFLLFFBQUwsQ0FBYyxFQUFFLFlBQUYsRUFBUyxZQUFZLFNBQXJCLEVBQWQ7QUFDQSxpQkFBVyxZQUFNO0FBQ2YsZUFBSyxRQUFMLENBQWMsRUFBRSxRQUFRLEtBQVYsRUFBZDtBQUNBLFlBQU0sVUFBVSxtQkFBUyxXQUFULENBQXFCLE9BQUssSUFBTCxDQUFVLEtBQS9CLENBQWhCO0FBQ0EsWUFBSSxPQUFKLEVBQWE7QUFDWCxrQkFBUSxLQUFSO0FBQ0Esa0JBQVEsTUFBUjtBQUNEO0FBQ0QsWUFBSSxPQUFLLEtBQUwsQ0FBVyxVQUFmLEVBQTJCO0FBQ3pCLGlCQUFLLEtBQUwsQ0FBVyxVQUFYO0FBQ0Q7QUFDRixPQVZELEVBVUcsR0FWSDtBQVdEOzs7dUNBRWtCO0FBQUE7O0FBQ2pCLFdBQUssUUFBTCxDQUFjLEVBQUUsUUFBUSxLQUFWLEVBQWQ7QUFDQSxpQkFBVyxZQUFNO0FBQ2YsWUFBSSxDQUFDLE9BQUssb0JBQUwsRUFBTCxFQUFrQztBQUNoQyxjQUFJLE9BQUssS0FBTCxDQUFXLE1BQWYsRUFBdUI7QUFDckIsbUJBQUssS0FBTCxDQUFXLE1BQVg7QUFDRDtBQUNELGNBQUksT0FBSyxLQUFMLENBQVcsVUFBZixFQUEyQjtBQUN6QixtQkFBSyxLQUFMLENBQVcsVUFBWDtBQUNEO0FBQ0Y7QUFDRixPQVRELEVBU0csRUFUSDtBQVVEOzs7d0NBRW1CO0FBQ2xCLFdBQUssUUFBTCxDQUFjLEVBQUUsUUFBUSxLQUFWLEVBQWQ7QUFDQSxVQUFNLFVBQVUsbUJBQVMsV0FBVCxDQUFxQixLQUFLLElBQUwsQ0FBVSxLQUEvQixDQUFoQjtBQUNBLFVBQUksT0FBSixFQUFhO0FBQ1gsZ0JBQVEsS0FBUjtBQUNBLGdCQUFRLE1BQVI7QUFDRDtBQUNGOzs7c0NBRWlCLFUsRUFBWTtBQUM1QixVQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsS0FBdkI7QUFDQSxVQUFJLENBQUMsVUFBTCxFQUFpQjtBQUNmLGdCQUFRLEVBQVI7QUFDRCxPQUZELE1BRU87QUFDTCxnQkFBUSxzQkFBTyxVQUFQLEVBQW1CLEtBQUssS0FBTCxDQUFXLFVBQTlCLENBQVI7QUFDQSxZQUFJLE1BQU0sT0FBTixFQUFKLEVBQXFCO0FBQ25CLGtCQUFRLE1BQU0sTUFBTixDQUFhLFlBQWIsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMLGtCQUFRLEVBQVI7QUFDRDtBQUNGO0FBQ0QsV0FBSyxRQUFMLENBQWMsRUFBRSxZQUFGLEVBQVMsWUFBWSxTQUFyQixFQUFkO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsVUFBTSxTQUFTLG1CQUFTLFdBQVQsQ0FBcUIsSUFBckIsQ0FBZjtBQUNBLFVBQUksV0FBVyxTQUFTLGFBQXhCO0FBQ0EsYUFBTyxZQUFZLGFBQWEsTUFBaEMsRUFBd0M7QUFDdEMsbUJBQVcsU0FBUyxVQUFwQjtBQUNEO0FBQ0QsYUFBTyxDQUFDLENBQUMsUUFBVDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQXZCO0FBQ0EsVUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLFVBQWxCLEtBQWlDLFdBQXJDLEVBQWtEO0FBQ2hELGdCQUFRLHNCQUFPLEtBQUssS0FBTCxDQUFXLFVBQWxCLEVBQThCLEtBQUssS0FBTCxDQUFXLFVBQXpDLENBQVI7QUFDQSxZQUFJLE1BQU0sT0FBTixFQUFKLEVBQXFCO0FBQ25CLGtCQUFRLE1BQU0sTUFBTixDQUFhLFlBQWIsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMLGtCQUFRLEtBQUssS0FBTCxDQUFXLEtBQW5CO0FBQ0Q7QUFDRjtBQUNELFdBQUssUUFBTCxDQUFjLEVBQUUsUUFBUSxJQUFWLEVBQWdCLFlBQWhCLEVBQWQ7QUFDRDs7O3NDQUVxQztBQUFBLFVBQXhCLFVBQXdCLFFBQXhCLFVBQXdCO0FBQUEsVUFBVCxLQUFTOztBQUNwQyxhQUNFO0FBQUE7UUFBQSxFQUFLLFdBQVUsZ0RBQWY7UUFDRSx3RUFBTyxLQUFJLE9BQVgsRUFBbUIsT0FBUSxVQUEzQixJQUE2QyxLQUE3QztBQUNFLHFCQUFZLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixJQUF6QixDQURkO0FBRUUsb0JBQVcsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBRmI7QUFHRSxrQkFBUyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEI7QUFIWCxXQURGO1FBTUUsZ0RBQU0sTUFBSyxPQUFYLEVBQW1CLFdBQVUsa0JBQTdCLEVBQWdELE9BQVEsRUFBRSxRQUFRLFNBQVYsRUFBeEQ7QUFDRSxtQkFBVSxLQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsSUFBMUI7QUFEWjtBQU5GLE9BREY7QUFZRDs7O21DQUVjLFMsRUFBVztBQUN4QixVQUFNLHVCQUF1QiwwQkFDM0IsZUFEMkIsRUFFM0IscUJBRjJCLENBQTdCO0FBSUEsYUFDRSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQ0Esc0RBQVksV0FBWSxvQkFBeEIsRUFBK0MsY0FBZSxTQUE5RCxFQUEwRSxlQUExRTtBQUNFLGtCQUFXLEtBQUssa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FEYjtBQUVFLGdCQUFTLEtBQUssZ0JBQUwsQ0FBc0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FGWDtBQUdFLGlCQUFVLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUI7QUFIWixRQURBLEdBTUEsMENBUEY7QUFTRDs7OzZCQUVRO0FBQ1AsVUFBTSxLQUFLLEtBQUssS0FBTCxDQUFXLEVBQVgsSUFBaUIsS0FBSyxLQUFMLENBQVcsRUFBdkM7QUFETyxtQkFNSCxLQUFLLEtBTkY7QUFBQSxVQUdMLFNBSEssVUFHTCxTQUhLO0FBQUEsVUFHTSxJQUhOLFVBR00sSUFITjtBQUFBLFVBR1ksS0FIWixVQUdZLEtBSFo7QUFBQSxVQUdtQixRQUhuQixVQUdtQixRQUhuQjtBQUFBLFVBRzZCLEtBSDdCLFVBRzZCLEtBSDdCO0FBQUEsVUFJTCxZQUpLLFVBSUwsWUFKSztBQUFBLFVBSVMsS0FKVCxVQUlTLEtBSlQ7QUFBQSxVQUlnQixVQUpoQixVQUlnQixVQUpoQjtBQUFBLFVBS0wsUUFMSyxVQUtMLFFBTEs7QUFBQSxVQUtLLFNBTEwsVUFLSyxTQUxMO0FBQUEsVUFLZ0IsTUFMaEIsVUFLZ0IsTUFMaEI7QUFBQSxVQUsyQixLQUwzQjs7Ozs7Ozs7Ozs7OztBQWtCUCxVQUFNLGFBQWEsSUFBbkI7QUFDQSxVQUFNLGdCQUFnQixFQUFFLE1BQUYsRUFBTSxvQkFBTixFQUFpQixVQUFqQixFQUF1QixZQUF2QixFQUE4QixrQkFBOUIsRUFBd0MsWUFBeEMsRUFBdEI7QUFDQSxhQUNFO0FBQUE7UUFBa0IsYUFBbEI7UUFDSSxLQUFLLFdBQUwsMEJBQW1CLE1BQW5CLEVBQXVCLHNCQUF2QixJQUFzQyxLQUF0QztBQURKLE9BREY7QUFLRDs7O0VBbE1vQyxnQkFBTSxTOztrQkFBeEIsUzs7O0FBcU1yQixVQUFVLFNBQVYsR0FBc0I7QUFDcEIsTUFBSSxpQkFBVSxNQURNO0FBRXBCLGFBQVcsaUJBQVUsTUFGRDtBQUdwQixTQUFPLGlCQUFVLE1BSEc7QUFJcEIsWUFBVSxpQkFBVSxJQUpBO0FBS3BCLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQURlLEVBRXpCLGlCQUFVLE1BRmUsRUFHekIsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVU7QUFETCxHQUFoQixDQUh5QixDQUFwQixDQUxhO0FBWXBCLGFBQVcsaUJBQVUsTUFaRDtBQWFwQixRQUFNLGlCQUFVLE1BYkk7QUFjcEIsU0FBTyxpQkFBVSxNQWRHO0FBZXBCLGFBQVcsaUJBQVUsSUFmRDtBQWdCcEIsVUFBUSxpQkFBVSxJQWhCRTtBQWlCcEIsZ0JBQWMsaUJBQVUsTUFqQko7QUFrQnBCLGlCQUFlLGlCQUFVLElBbEJMO0FBbUJwQixjQUFZLGlCQUFVLE1BbkJGO0FBb0JwQixZQUFVLGlCQUFVLElBcEJBO0FBcUJwQixpQkFBZSxpQkFBVSxJQXJCTDtBQXNCcEIsY0FBWSxpQkFBVTtBQXRCRixDQUF0Qjs7QUF5QkEsVUFBVSxhQUFWLEdBQTBCLElBQTFCIiwiZmlsZSI6IlRpbWVJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnLi9EYXRlcGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IChwcm9wcy5kZWZhdWx0T3BlbmVkIHx8IGZhbHNlKSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSAmJiBwcmV2U3RhdGUudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlLCBwcmV2U3RhdGUudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUljb25DbGljaygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbklucHV0S2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dEJsdXIoZSkge1xuICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkRhdGVwaWNrZXJTZWxlY3QodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgY29uc3QgaW5wdXRFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbnB1dCk7XG4gICAgICBpZiAoaW5wdXRFbCkge1xuICAgICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICAgIGlucHV0RWwuc2VsZWN0KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIDIwMCk7XG4gIH1cblxuICBvbkRhdGVwaWNrZXJCbHVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkRhdGVwaWNrZXJDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBjb25zdCBpbnB1dEVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0KTtcbiAgICBpZiAoaW5wdXRFbCkge1xuICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZUZyb21JbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICBzaG93RGF0ZXBpY2tlcigpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSBtb21lbnQodGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCB0aGlzLnByb3BzLmRhdGVGb3JtYXQpO1xuICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcklucHV0KHsgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1pbnB1dC1oYXMtaWNvbiBzbGRzLWlucHV0LWhhcy1pY29uLS1yaWdodCc+XG4gICAgICAgIDxJbnB1dCByZWY9J2lucHV0JyB2YWx1ZT17IGlucHV0VmFsdWUgfSB7IC4uLnByb3BzIH1cbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxJY29uIGljb249J2V2ZW50JyBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nIHN0eWxlPXsgeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkRhdGVJY29uQ2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24oZGF0ZVZhbHVlKSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgJ3NsZHMtZHJvcGRvd24tLWxlZnQnXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgPERhdGVwaWNrZXIgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfSBzZWxlY3RlZERhdGU9eyBkYXRlVmFsdWUgfSBhdXRvRm9jdXNcbiAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdC5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkRhdGVwaWNrZXJCbHVyLmJpbmQodGhpcykgfVxuICAgICAgICBvbkNsb3NlPXsgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZS5iaW5kKHRoaXMpIH1cbiAgICAgIC8+IDpcbiAgICAgIDxkaXYgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGRlZmF1bHRWYWx1ZSwgdmFsdWUsIGRhdGVGb3JtYXQsXG4gICAgICBvbkNoYW5nZSwgb25LZXlEb3duLCBvbkJsdXIsIC4uLnByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gY29uc3QgZGF0ZVZhbHVlID1cbiAgICAvLyAgIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6XG4gICAgLy8gICB0eXBlb2YgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLnZhbHVlIDpcbiAgICAvLyAgIGRlZmF1bHRWYWx1ZTtcbiAgICAvLyBjb25zdCBtdmFsdWUgPSBtb21lbnQoZGF0ZVZhbHVlLCAnWVlZWS1NTS1ERCcpO1xuICAgIC8vIGNvbnN0IGlucHV0VmFsdWUgPVxuICAgIC8vICAgdHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLmlucHV0VmFsdWUgOlxuICAgIC8vICAgdHlwZW9mIGRhdGVWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbXZhbHVlLmlzVmFsaWQoKSA/IG12YWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgOlxuICAgIC8vICAgbnVsbDtcbiAgICAvLyBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24oZGF0ZVZhbHVlKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gJzExJztcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlcklucHV0KHsgaWQsIGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5UaW1lSW5wdXQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgXSksXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuVGltZUlucHV0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19