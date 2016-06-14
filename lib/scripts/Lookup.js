'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _DropdownMenu = require('./DropdownMenu');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */

var LookupSelection = function (_Component) {
  (0, _inherits3.default)(LookupSelection, _Component);

  function LookupSelection() {
    (0, _classCallCheck3.default)(this, LookupSelection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LookupSelection).apply(this, arguments));
  }

  (0, _createClass3.default)(LookupSelection, [{
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 8 || e.keyCode === 46) {
        // Bacspace / DEL
        e.preventDefault();
        e.stopPropagation();
        if (this.props.onResetSelection) {
          this.props.onResetSelection();
        }
      }
    }
  }, {
    key: 'renderPill',
    value: function renderPill(selected) {
      var onPillClick = function onPillClick(e) {
        e.target.focus();
        e.preventDefault();
        e.stopPropagation();
      };
      return _react2.default.createElement(
        'a',
        { className: 'slds-pill slds-truncate',
          id: this.props.id,
          ref: 'pill',
          onKeyDown: this.onKeyDown.bind(this),
          onClick: onPillClick,
          tabIndex: 0
        },
        selected.icon ? _react2.default.createElement(_Icon2.default, { className: 'slds-pill__icon', category: selected.category, icon: selected.icon }) : undefined,
        _react2.default.createElement(
          'span',
          { className: 'slds-pill__label' },
          selected.label
        ),
        _react2.default.createElement(_Button2.default, { className: 'slds-pill__remove', type: 'icon-bare', icon: 'close', alt: 'Remove',
          tabIndex: -1,
          onClick: this.props.onResetSelection
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var hidden = _props.hidden;
      var selected = _props.selected;

      var lookupClassNames = (0, _classnames2.default)({ 'slds-hide': hidden });
      return _react2.default.createElement(
        'div',
        { className: lookupClassNames },
        _react2.default.createElement(
          'div',
          { className: 'slds-pill__container' },
          selected ? this.renderPill(selected) : undefined
        )
      );
    }
  }]);
  return LookupSelection;
}(_react.Component);

var LookupEntryType = _react.PropTypes.shape({
  category: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  label: _react.PropTypes.string,
  value: _react.PropTypes.string,
  context: _react.PropTypes.object
});

LookupSelection.propTypes = {
  id: _react.PropTypes.string,
  selected: LookupEntryType,
  hidden: _react.PropTypes.bool,
  onResetSelection: _react.PropTypes.func
};

/**
 *
 */

var LookupSearch = function (_Component2) {
  (0, _inherits3.default)(LookupSearch, _Component2);

  function LookupSearch(props) {
    (0, _classCallCheck3.default)(this, LookupSearch);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LookupSearch).call(this, props));

    (0, _util.registerStyle)('lookupSearch', [['.slds-lookup[data-scope="multi"] .react-slds-lookup-scope-selector', '{ min-width: 3rem; }'], ['.slds-lookup[data-scope="multi"] .react-slds-lookup-scope-selector .slds-dropdown-trigger', '{ margin-left: 0; }'], ['.slds-lookup[data-scope="multi"] .react-slds-lookup-scope-selector .slds-dropdown-trigger .slds-button', '{ padding: 0 0.25rem; }'], ['.slds-lookup[data-scope="multi"] .slds-box--border', '{ background-color: white; }'], ['.slds-lookup[data-scope="multi"] .slds-box--border .slds-input--bare', '{ height: 2.15rem; width: 100%; }']]);
    return _this2;
  }

  (0, _createClass3.default)(LookupSearch, [{
    key: 'onLookupIconClick',
    value: function onLookupIconClick() {
      this.props.onSubmit();
    }
  }, {
    key: 'onInputKeyDown',
    value: function onInputKeyDown(e) {
      if (e.keyCode === 13) {
        // return key
        e.preventDefault();
        e.stopPropagation();
        var searchText = e.target.value;
        if (searchText) {
          this.props.onSubmit();
        } else {
          // if no search text, quit lookup search
          this.props.onComplete();
        }
      } else if (e.keyCode === 40) {
        // down key
        e.preventDefault();
        e.stopPropagation();
        this.props.onPressDown();
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        // quit lookup search (cancel)
        var cancel = true;
        this.props.onComplete(cancel);
      }
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      var searchText = e.target.value;
      this.props.onChange(searchText);
    }
  }, {
    key: 'onInputBlur',
    value: function onInputBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'onScopeMenuClick',
    value: function onScopeMenuClick(e) {
      if (this.props.onScopeMenuClick) {
        this.props.onScopeMenuClick(e);
      }
    }
  }, {
    key: 'onMenuItemClick',
    value: function onMenuItemClick(scope) {
      if (this.props.onScopeChange) {
        this.props.onScopeChange(scope.value);
      }
    }
  }, {
    key: 'renderSearchInput',
    value: function renderSearchInput(props) {
      var className = props.className;
      var hidden = props.hidden;
      var searchText = props.searchText;

      var searchInputClassNames = (0, _classnames2.default)('slds-grid', 'slds-input-has-icon', props.iconAlign === 'left' ? 'slds-input-has-icon--left' : 'slds-input-has-icon--right', { 'slds-hide': hidden }, className);
      return _react2.default.createElement(
        'div',
        { className: searchInputClassNames },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({}, props, {
          ref: 'input',
          value: searchText,
          onKeyDown: this.onInputKeyDown.bind(this),
          onChange: this.onInputChange.bind(this),
          onBlur: this.onInputBlur.bind(this)
        })),
        _react2.default.createElement(_Icon2.default, { icon: 'search', className: 'slds-input__icon', style: { cursor: 'pointer' },
          onClick: this.onLookupIconClick.bind(this)
        })
      );
    }
  }, {
    key: 'renderScopeSelector',
    value: function renderScopeSelector(scopes, target) {
      var targetScope = scopes[0] || {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(scopes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var scope = _step.value;

          if (scope.value === target) {
            targetScope = scope;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var icon = _react2.default.createElement(_Icon2.default, { icon: targetScope.icon || 'none', size: 'x-small' });
      var selectorClassNames = (0, _classnames2.default)('slds-grid', 'slds-grid--align-center', 'slds-grid--vertical-align-center', 'react-slds-lookup-scope-selector');
      return _react2.default.createElement(
        'div',
        { className: selectorClassNames },
        _react2.default.createElement(
          _DropdownButton2.default,
          { label: icon,
            onClick: this.onScopeMenuClick.bind(this),
            onMenuItemClick: this.onMenuItemClick.bind(this),
            onBlur: this.onInputBlur.bind(this)
          },
          scopes.map(function (scope) {
            return _react2.default.createElement(_DropdownMenu.DropdownMenuItem, (0, _extends3.default)({ key: scope.value }, scope));
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var scopes = _props2.scopes;
      var hidden = _props2.hidden;
      var className = _props2.className;
      var targetScope = _props2.targetScope;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['scopes', 'hidden', 'className', 'targetScope']);

      if (scopes) {
        var lookupSearchClassNames = (0, _classnames2.default)('slds-grid', 'slds-form-element__control', 'slds-box--border', { 'slds-hide': hidden });
        var styles = { 'WebkitFlexWrap': 'nowrap', 'msFlexWrap': 'nowrap', flexWrap: 'nowrap' };
        return _react2.default.createElement(
          'div',
          { className: lookupSearchClassNames, style: styles },
          this.renderScopeSelector(scopes, targetScope),
          this.renderSearchInput((0, _extends3.default)({}, props, { className: 'slds-col', bare: true }))
        );
      }
      return this.renderSearchInput(this.props);
    }
  }]);
  return LookupSearch;
}(_react.Component);

LookupSearch.propTypes = {
  className: _react.PropTypes.string,
  hidden: _react.PropTypes.bool,
  searchText: _react.PropTypes.string,
  scopes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.string,
    icon: _react.PropTypes.string,
    externalIcon: _react.PropTypes.object
  })),
  targetScope: _react.PropTypes.any,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onScopeMenuClick: _react.PropTypes.func,
  onScopeChange: _react.PropTypes.func,
  onPressDown: _react.PropTypes.func,
  onSubmit: _react.PropTypes.func,
  onComplete: _react.PropTypes.func
};

/**
 *
 */

var LookupCandidateList = function (_Component3) {
  (0, _inherits3.default)(LookupCandidateList, _Component3);

  function LookupCandidateList() {
    (0, _classCallCheck3.default)(this, LookupCandidateList);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LookupCandidateList).apply(this, arguments));
  }

  (0, _createClass3.default)(LookupCandidateList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.focus) {
        this.focusToTargetItemEl(0);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.focus && !prevProps.focus) {
        this.focusToTargetItemEl(0);
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(entry) {
      if (this.props.onSelect) {
        this.props.onSelect(entry);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 38 || e.keyCode === 40) {
        // UP/DOWN
        e.preventDefault();
        e.stopPropagation();
        var currentEl = e.target.parentElement;
        var itemEl = e.keyCode === 40 ? currentEl.nextSibling : currentEl.previousSibling;
        while (itemEl) {
          var anchorEl = itemEl.querySelector('.react-slds-candidate[tabIndex]');
          if (anchorEl && !anchorEl.disabled) {
            anchorEl.focus();
            return;
          }
          itemEl = e.keyCode === 40 ? itemEl.nextSibling : itemEl.previousSibling;
        }
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        this.onSelect(null);
      }
    }
  }, {
    key: 'focusToTargetItemEl',
    value: function focusToTargetItemEl(index) {
      var el = _reactDom2.default.findDOMNode(this);
      var anchors = el.querySelectorAll('.react-slds-candidate[tabIndex]');
      if (anchors[index]) {
        anchors[index].focus();
      }
    }
  }, {
    key: 'renderCustomIcon',
    value: function renderCustomIcon(entry) {
      return _react2.default.createElement(
        'div',
        { key: entry.label, className: 'custom_icon' },
        _react2.default.createElement(
          'div',
          { style: { 'display': 'inline-block' } },
          _react2.default.createElement(
            'span',
            { className: 'slds-avatar slds-avatar--circle slds-avatar--small' },
            _react2.default.createElement('img', { src: entry.context.img, alt: 'entry.context.title' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'slds-text-body--regular ', style: { 'verticalAlign': 'middle', 'display': 'inline-block', 'paddingLeft': '10px' } },
          _react2.default.createElement(
            'div',
            { style: { color: '#0270d2' } },
            entry.context.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'slds-text-body--small' },
            entry.context.sub_title
          )
        )
      );
    }
  }, {
    key: 'renderCandidate',
    value: function renderCandidate(entry) {
      var _this4 = this;

      var icon = entry.context ? this.renderCustomIcon(entry) : _react2.default.createElement(_Icon2.default, { category: entry.category, icon: entry.icon, size: 'small' });

      return _react2.default.createElement(
        'li',
        { className: 'slds-lookup__item', key: entry.value },
        _react2.default.createElement(
          'a',
          { className: 'slds-truncate react-slds-candidate', tabIndex: -1, role: 'option',
            onKeyDown: function onKeyDown(e) {
              return e.keyCode === 13 && _this4.onSelect(entry);
            },
            onBlur: this.props.onBlur,
            onClick: function onClick() {
              return _this4.onSelect(entry);
            }
          },
          icon,
          !this.props.hideLabel ? entry.label : null
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var _props3$data = _props3.data;
      var data = _props3$data === undefined ? [] : _props3$data;
      var hidden = _props3.hidden;
      var loading = _props3.loading;
      var header = _props3.header;
      var footer = _props3.footer;
      var _props3$filter = _props3.filter;
      var filter = _props3$filter === undefined ? function () {
        return true;
      } : _props3$filter;

      var lookupMenuClassNames = (0, _classnames2.default)('slds-lookup__menu', { 'slds-hide': hidden });
      return _react2.default.createElement(
        'div',
        { className: lookupMenuClassNames, role: 'listbox',
          onKeyDown: this.onKeyDown.bind(this)
        },
        header ? _react2.default.createElement(
          'div',
          { className: 'slds-lookup__item' },
          header
        ) : undefined,
        _react2.default.createElement(
          'ul',
          { className: 'slds-lookup__list', role: 'presentation' },
          data.filter(filter).map(this.renderCandidate.bind(this)),
          loading ? _react2.default.createElement(
            'li',
            { className: 'slds-lookup__item', key: 'loading' },
            _react2.default.createElement(_Spinner2.default, { size: 'small', style: { margin: '0 auto' } })
          ) : undefined
        ),
        footer ? _react2.default.createElement(
          'div',
          { className: 'slds-lookup__item' },
          footer
        ) : undefined
      );
    }
  }]);
  return LookupCandidateList;
}(_react.Component);

LookupCandidateList.propTypes = {
  data: _react.PropTypes.arrayOf(LookupEntryType),
  focus: _react.PropTypes.bool,
  loading: _react.PropTypes.bool,
  hidden: _react.PropTypes.bool,
  hideLabel: _react.PropTypes.bool,
  filter: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  header: _react.PropTypes.node,
  footer: _react.PropTypes.node
};

/**
 *
 */

var Lookup = function (_Component4) {
  (0, _inherits3.default)(Lookup, _Component4);

  function Lookup(props) {
    (0, _classCallCheck3.default)(this, Lookup);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Lookup).call(this, props));

    _this5.state = {
      id: 'form-element-' + (0, _uuid2.default)(),
      selected: props.defaultSelected,
      opened: props.defaultOpened,
      searchText: props.defaultSearchText,
      targetScope: props.defaultTargetScope,
      focusFirstCandidate: false
    };
    return _this5;
  }

  (0, _createClass3.default)(Lookup, [{
    key: 'onScopeMenuClick',
    value: function onScopeMenuClick(e) {
      this.setState({ opened: false });
      if (this.props.onScopeMenuClick) {
        this.props.onScopeMenuClick(e);
      }
    }
  }, {
    key: 'onScopeChange',
    value: function onScopeChange(targetScope) {
      this.setState({ targetScope: targetScope });
      if (this.props.onScopeChange) {
        this.props.onScopeChange(targetScope);
      }
    }
  }, {
    key: 'onSearchTextChange',
    value: function onSearchTextChange(searchText) {
      this.setState({ searchText: searchText });
      if (this.props.onSearchTextChange) {
        this.props.onSearchTextChange(searchText);
      }
    }
  }, {
    key: 'onLookupRequest',
    value: function onLookupRequest(searchText) {
      this.setState({ opened: true });
      if (this.props.onLookupRequest) {
        this.props.onLookupRequest(searchText);
      }
    }
  }, {
    key: 'onResetSelection',
    value: function onResetSelection() {
      var _this6 = this;

      this.setState({ selected: null });
      if (this.props.onSelect) {
        this.props.onSelect(null);
      }
      this.onSearchTextChange('');
      this.onLookupRequest('');
      setTimeout(function () {
        var searchElem = _reactDom2.default.findDOMNode(_this6.refs.search);
        var inputElem = searchElem.querySelector('input');
        inputElem.focus();
      }, 10);
    }
  }, {
    key: 'onLookupItemSelect',
    value: function onLookupItemSelect(selected) {
      var _this7 = this;

      if (selected) {
        this.setState({ selected: selected, opened: false });
        if (this.props.onSelect) {
          this.props.onSelect(selected);
        }
        setTimeout(function () {
          var selectionElem = _reactDom2.default.findDOMNode(_this7.refs.selection);
          var pillElem = selectionElem.querySelector('a');
          if (pillElem) {
            pillElem.focus();
          }
        }, 10);
      } else {
        this.setState({ opened: false });
        setTimeout(function () {
          var searchElem = _reactDom2.default.findDOMNode(_this7.refs.search);
          var inputElem = searchElem.querySelector('input');
          inputElem.focus();
        }, 10);
      }
      if (this.props.onComplete) {
        this.props.onComplete(); // tell the component container to quit lookup
      }
    }
  }, {
    key: 'onFocusFirstCandidate',
    value: function onFocusFirstCandidate() {
      var _this8 = this;

      var _props$opened = this.props.opened;
      var opened = _props$opened === undefined ? this.state.opened : _props$opened;

      if (!opened) {
        this.onLookupRequest(this.state.searchText);
      } else {
        this.setState({ focusFirstCandidate: true });
        setTimeout(function () {
          _this8.setState({ focusFirstCandidate: false });
        }, 10);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var _this9 = this;

      setTimeout(function () {
        if (!_this9.isFocusedInComponent()) {
          _this9.setState({ opened: false });
          if (_this9.props.onBlur) {
            _this9.props.onBlur();
          }
          if (_this9.props.onComplete) {
            _this9.props.onComplete(true); // quit lookup (cancel)
          }
        }
      }, 10);
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
    key: 'render',
    value: function render() {
      var _this10 = this;

      var id = this.props.id || this.state.id;
      var _props4 = this.props;
      var totalCols = _props4.totalCols;
      var cols = _props4.cols;
      var label = _props4.label;
      var required = _props4.required;
      var error = _props4.error;
      var className = _props4.className;
      var _props4$selected = _props4.selected;
      var selected = _props4$selected === undefined ? this.state.selected : _props4$selected;
      var defaultSelected = _props4.defaultSelected;
      var _props4$opened = _props4.opened;
      var opened = _props4$opened === undefined ? this.state.opened : _props4$opened;
      var defaultOpened = _props4.defaultOpened;
      var _props4$searchText = _props4.searchText;
      var searchText = _props4$searchText === undefined ? this.state.searchText : _props4$searchText;
      var defaultSearchText = _props4.defaultSearchText;
      var _props4$targetScope = _props4.targetScope;
      var targetScope = _props4$targetScope === undefined ? this.state.targetScope : _props4$targetScope;
      var defaultTargetScope = _props4.defaultTargetScope;
      var loading = _props4.loading;
      var lookupFilter = _props4.lookupFilter;
      var listHeader = _props4.listHeader;
      var listFooter = _props4.listFooter;
      var data = _props4.data;
      var hideLabel = _props4.hideLabel;
      var onSelect = _props4.onSelect;
      var onBlur = _props4.onBlur;
      var onComplete = _props4.onComplete;
      var onScopeChange = _props4.onScopeChange;
      var onScopeMenuClick = _props4.onScopeMenuClick;
      var onSearchTextChange = _props4.onSearchTextChange;
      var onLookupRequest = _props4.onLookupRequest;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['totalCols', 'cols', 'label', 'required', 'error', 'className', 'selected', 'defaultSelected', 'opened', 'defaultOpened', 'searchText', 'defaultSearchText', 'targetScope', 'defaultTargetScope', 'loading', 'lookupFilter', 'listHeader', 'listFooter', 'data', 'hideLabel', 'onSelect', 'onBlur', 'onComplete', 'onScopeChange', 'onScopeMenuClick', 'onSearchTextChange', 'onLookupRequest']);

      var dropdown = _react2.default.createElement(LookupCandidateList, {
        ref: 'candidateList',
        data: data,
        focus: this.state.focusFirstCandidate,
        hidden: !opened,
        hideLabel: hideLabel,
        loading: loading,
        filter: lookupFilter ? function (entry) {
          return lookupFilter(entry, searchText, targetScope);
        } : undefined,
        header: listHeader,
        footer: listFooter,
        onSelect: this.onLookupItemSelect.bind(this),
        onBlur: this.onBlur.bind(this)
      });
      var lookupClassNames = (0, _classnames2.default)('slds-lookup', { 'slds-has-selection': selected }, className);
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error, dropdown: dropdown };
      return _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        _react2.default.createElement(
          'div',
          { className: lookupClassNames,
            'data-select': 'single',
            'data-scope': props.scopes ? 'multi' : 'single',
            'data-typeahead': false
          },
          selected ? _react2.default.createElement(LookupSelection, {
            id: id,
            ref: 'selection',
            selected: selected,
            onResetSelection: this.onResetSelection.bind(this)
          }) : _react2.default.createElement(LookupSearch, (0, _extends3.default)({}, props, {
            id: id,
            ref: 'search',
            searchText: searchText,
            targetScope: targetScope,
            onScopeMenuClick: this.onScopeMenuClick.bind(this),
            onScopeChange: this.onScopeChange.bind(this),
            onChange: this.onSearchTextChange.bind(this),
            onSubmit: function onSubmit() {
              return _this10.onLookupRequest(searchText);
            },
            onPressDown: this.onFocusFirstCandidate.bind(this),
            onComplete: onComplete,
            onBlur: this.onBlur.bind(this)
          }))
        )
      );
    }
  }]);
  return Lookup;
}(_react.Component);

exports.default = Lookup;


Lookup.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  selected: LookupEntryType,
  defaultSelected: LookupEntryType,
  opened: _react.PropTypes.bool,
  hideLabel: _react.PropTypes.bool,
  defaultOpened: _react.PropTypes.bool,
  searchText: _react.PropTypes.string,
  defaultSearchText: _react.PropTypes.string,
  loading: _react.PropTypes.bool,
  data: _react.PropTypes.arrayOf(LookupEntryType),
  lookupFilter: _react.PropTypes.func,
  listHeader: _react.PropTypes.node,
  listFooter: _react.PropTypes.node,
  scopes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.string,
    icon: _react.PropTypes.string,
    iconAlign: _react.PropTypes.string
  })),
  targetScope: _react.PropTypes.string,
  defaultTargetScope: _react.PropTypes.string,
  onSearchTextChange: _react.PropTypes.func,
  onScopeMenuClick: _react.PropTypes.func,
  onScopeChange: _react.PropTypes.func,
  onLookupRequest: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onComplete: _react.PropTypes.func,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number
};

Lookup.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBS00sZTs7Ozs7Ozs7Ozs4QkFDTSxDLEVBQUc7QUFDWCxVQUFJLEVBQUUsT0FBRixLQUFjLENBQWQsSUFBbUIsRUFBRSxPQUFGLEtBQWMsRUFBckMsRUFBeUM7O0FBQ3ZDLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLFlBQUksS0FBSyxLQUFMLENBQVcsZ0JBQWYsRUFBaUM7QUFDL0IsZUFBSyxLQUFMLENBQVcsZ0JBQVg7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVSxRLEVBQVU7QUFDbkIsVUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLENBQUQsRUFBTztBQUN6QixVQUFFLE1BQUYsQ0FBUyxLQUFUO0FBQ0EsVUFBRSxjQUFGO0FBQ0EsVUFBRSxlQUFGO0FBQ0QsT0FKRDtBQUtBLGFBQ0U7QUFBQTtRQUFBLEVBQUcsV0FBVSx5QkFBYjtBQUNFLGNBQUssS0FBSyxLQUFMLENBQVcsRUFEbEI7QUFFRSxlQUFJLE1BRk47QUFHRSxxQkFBWSxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCLENBSGQ7QUFJRSxtQkFBVSxXQUpaO0FBS0Usb0JBQVc7QUFMYjtRQVFJLFNBQVMsSUFBVCxHQUNBLGdEQUFNLFdBQVUsaUJBQWhCLEVBQWtDLFVBQVcsU0FBUyxRQUF0RCxFQUFpRSxNQUFPLFNBQVMsSUFBakYsR0FEQSxHQUVBLFNBVko7UUFZRTtBQUFBO1VBQUEsRUFBTSxXQUFVLGtCQUFoQjtVQUFxQyxTQUFTO0FBQTlDLFNBWkY7UUFhRSxrREFBUSxXQUFVLG1CQUFsQixFQUFzQyxNQUFLLFdBQTNDLEVBQXVELE1B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QkFBZSxpQkFBVSxJQWxCUjtBQW1CakIsY0FBWSxpQkFBVSxNQW5CTDtBQW9CakIscUJBQW1CLGlCQUFVLE1BcEJaO0FBcUJqQixXQUFTLGlCQUFVLElBckJGO0FBc0JqQixRQUFNLGlCQUFVLE9BQVYsQ0FBa0IsZUFBbEIsQ0F0Qlc7QUF1QmpCLGdCQUFjLGlCQUFVLElBdkJQO0FBd0JqQixjQUFZLGlCQUFVLElBeEJMO0FBeUJqQixjQUFZLGlCQUFVLElBekJMO0FBMEJqQixVQUFRLGlCQUFVLE9BQVYsQ0FDTixpQkFBVSxLQUFWLENBQWdCO0FBQ2QsV0FBTyxpQkFBVSxNQURIO0FBRWQsV0FBTyxpQkFBVSxNQUZIO0FBR2QsVUFBTSxpQkFBVSxNQUhGO0FBSWQsZUFBVyxpQkFBVTtBQUpQLEdBQWhCLENBRE0sQ0ExQlM7QUFrQ2pCLGVBQWEsaUJBQVUsTUFsQ047QUFtQ2pCLHNCQUFvQixpQkFBVSxNQW5DYjtBQW9DakIsc0JBQW9CLGlCQUFVLElBcENiO0FBcUNqQixvQkFBa0IsaUJBQVUsSUFyQ1g7QUFzQ2pCLGlCQUFlLGlCQUFVLElBdENSO0FBdUNqQixtQkFBaUIsaUJBQVUsSUF2Q1Y7QUF3Q2pCLFVBQVEsaUJBQVUsSUF4Q0Q7QUF5Q2pCLFlBQVUsaUJBQVUsSUF6Q0g7QUEwQ2pCLGNBQVksaUJBQVUsSUExQ0w7QUEyQ2pCLGFBQVcsaUJBQVUsTUEzQ0o7QUE0Q2pCLFFBQU0saUJBQVU7QUE1Q0MsQ0FBbkI7O0FBK0NBLE9BQU8sYUFBUCxHQUF1QixJQUF2QiIsImZpbGUiOiJMb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqXG4gKi9cbmNsYXNzIExvb2t1cFNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCB8fCBlLmtleUNvZGUgPT09IDQ2KSB7IC8vIEJhY3NwYWNlIC8gREVMXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJQaWxsKHNlbGVjdGVkKSB7XG4gICAgY29uc3Qgb25QaWxsQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuZm9jdXMoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgY2xhc3NOYW1lPSdzbGRzLXBpbGwgc2xkcy10cnVuY2F0ZSdcbiAgICAgICAgaWQ9eyB0aGlzLnByb3BzLmlkIH1cbiAgICAgICAgcmVmPSdwaWxsJ1xuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25DbGljaz17IG9uUGlsbENsaWNrIH1cbiAgICAgICAgdGFiSW5kZXg9eyAwIH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkLmljb24gP1xuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nc2xkcy1waWxsX19pY29uJyBjYXRlZ29yeT17IHNlbGVjdGVkLmNhdGVnb3J5IH0gaWNvbj17IHNlbGVjdGVkLmljb24gfSAvPiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2xhYmVsJz57IHNlbGVjdGVkLmxhYmVsIH08L3NwYW4+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX3JlbW92ZScgdHlwZT0naWNvbi1iYXJlJyBpY29uPSdjbG9zZScgYWx0PSdSZW1vdmUnXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbiB9XG4gICAgICAgIC8+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhpZGRlbiwgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1waWxsX19jb250YWluZXInPlxuICAgICAgICAgIHsgc2VsZWN0ZWQgPyB0aGlzLnJlbmRlclBpbGwoc2VsZWN0ZWQpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuY29uc3QgTG9va3VwRW50cnlUeXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGV4dDogUHJvcFR5cGVzLm9iamVjdCxcbn0pO1xuXG5Mb29rdXBTZWxlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25SZXNldFNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgTG9va3VwU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgcmVnaXN0ZXJTdHlsZSgnbG9va3VwU2VhcmNoJywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InLFxuICAgICAgICAneyBtaW4td2lkdGg6IDNyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxuICAgICAgICAneyBtYXJnaW4tbGVmdDogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3IgLnNsZHMtZHJvcGRvd24tdHJpZ2dlciAuc2xkcy1idXR0b24nLFxuICAgICAgICAneyBwYWRkaW5nOiAwIDAuMjVyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnNsZHMtYm94LS1ib3JkZXInLFxuICAgICAgICAneyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAuc2xkcy1ib3gtLWJvcmRlciAuc2xkcy1pbnB1dC0tYmFyZScsXG4gICAgICAgICd7IGhlaWdodDogMi4xNXJlbTsgd2lkdGg6IDEwMCU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIG9uTG9va3VwSWNvbkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25TdWJtaXQoKTtcbiAgfVxuXG4gIG9uSW5wdXRLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyByZXR1cm4ga2V5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHNlYXJjaFRleHQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgbm8gc2VhcmNoIHRleHQsIHF1aXQgbG9va3VwIHNlYXJjaFxuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLm9uUHJlc3NEb3duKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIHF1aXQgbG9va3VwIHNlYXJjaCAoY2FuY2VsKVxuICAgICAgY29uc3QgY2FuY2VsID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZShjYW5jZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNlYXJjaFRleHQpO1xuICB9XG5cbiAgb25JbnB1dEJsdXIoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XG4gICAgfVxuICB9XG5cbiAgb25TY29wZU1lbnVDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUl0ZW1DbGljayhzY29wZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZUNoYW5nZShzY29wZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2VhcmNoSW5wdXQocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaGlkZGVuLCBzZWFyY2hUZXh0IH0gPSBwcm9wcztcbiAgICBjb25zdCBzZWFyY2hJbnB1dENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAnc2xkcy1pbnB1dC1oYXMtaWNvbicsXG4gICAgICAocHJvcHMuaWNvbkFsaWduID09PSAnbGVmdCcpID8gKCdzbGRzLWlucHV0LWhhcy1pY29uLS1sZWZ0JykgOiAoJ3NsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0JyksXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2VhcmNoSW5wdXRDbGFzc05hbWVzIH0+XG4gICAgICAgIDxJbnB1dCB7IC4uLnByb3BzIH1cbiAgICAgICAgICByZWY9J2lucHV0J1xuICAgICAgICAgIHZhbHVlPXsgc2VhcmNoVGV4dCB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgICA8SWNvbiBpY29uPSdzZWFyY2gnIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbicgc3R5bGU9eyB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTG9va3VwSWNvbkNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNjb3BlU2VsZWN0b3Ioc2NvcGVzLCB0YXJnZXQpIHtcbiAgICBsZXQgdGFyZ2V0U2NvcGUgPSBzY29wZXNbMF0gfHwge307XG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmIChzY29wZS52YWx1ZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldFNjb3BlID0gc2NvcGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpY29uID0gPEljb24gaWNvbj17IHRhcmdldFNjb3BlLmljb24gfHwgJ25vbmUnIH0gc2l6ZT0neC1zbWFsbCcgLz47XG4gICAgY29uc3Qgc2VsZWN0b3JDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgJ3NsZHMtZ3JpZC0tYWxpZ24tY2VudGVyJyxcbiAgICAgICdzbGRzLWdyaWQtLXZlcnRpY2FsLWFsaWduLWNlbnRlcicsXG4gICAgICAncmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzZWxlY3RvckNsYXNzTmFtZXMgfT5cbiAgICAgICAgPERyb3Bkb3duQnV0dG9uIGxhYmVsPXsgaWNvbiB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uTWVudUl0ZW1DbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyLmJpbmQodGhpcykgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBzY29wZXMubWFwKChzY29wZSkgPT4gPERyb3Bkb3duTWVudUl0ZW0ga2V5PXsgc2NvcGUudmFsdWUgfSB7IC4uLnNjb3BlIH0gLz4pIH1cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY29wZXMsIGhpZGRlbiwgY2xhc3NOYW1lLCB0YXJnZXRTY29wZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNjb3Blcykge1xuICAgICAgY29uc3QgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgICAnc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxuICAgICAgICAnc2xkcy1ib3gtLWJvcmRlcicsXG4gICAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XG4gICAgICApO1xuICAgICAgY29uc3Qgc3R5bGVzID0geyAnV2Via2l0RmxleFdyYXAnOiAnbm93cmFwJywgJ21zRmxleFdyYXAnOiAnbm93cmFwJywgZmxleFdyYXA6ICdub3dyYXAnIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvb2t1cFNlYXJjaENsYXNzTmFtZXMgfSBzdHlsZT17IHN0eWxlcyB9PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTY29wZVNlbGVjdG9yKHNjb3BlcywgdGFyZ2V0U2NvcGUpIH1cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2VhcmNoSW5wdXQoeyAuLi5wcm9wcywgY2xhc3NOYW1lOiAnc2xkcy1jb2wnLCBiYXJlOiB0cnVlIH0pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh0aGlzLnByb3BzKTtcbiAgfVxuXG59XG5cblxuTG9va3VwU2VhcmNoLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGV4dGVybmFsSWNvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB9KVxuICApLFxuICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLmFueSxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlTWVudUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUHJlc3NEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgTG9va3VwQ2FuZGlkYXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgwKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9jdXMgJiYgIXByZXZQcm9wcy5mb2N1cykge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKDApO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0KGVudHJ5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZW50cnkpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSA0MCkgeyAvLyBVUC9ET1dOXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgY3VycmVudEVsID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGxldCBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gY3VycmVudEVsLm5leHRTaWJsaW5nIDogY3VycmVudEVsLnByZXZpb3VzU2libGluZztcbiAgICAgIHdoaWxlIChpdGVtRWwpIHtcbiAgICAgICAgY29uc3QgYW5jaG9yRWwgPSBpdGVtRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtY2FuZGlkYXRlW3RhYkluZGV4XScpO1xuICAgICAgICBpZiAoYW5jaG9yRWwgJiYgIWFuY2hvckVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgYW5jaG9yRWwuZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGl0ZW1FbC5uZXh0U2libGluZyA6IGl0ZW1FbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMub25TZWxlY3QobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNUb1RhcmdldEl0ZW1FbChpbmRleCkge1xuICAgIGNvbnN0IGVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgY29uc3QgYW5jaG9ycyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcbiAgICBpZiAoYW5jaG9yc1tpbmRleF0pIHtcbiAgICAgIGFuY2hvcnNbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ3VzdG9tSWNvbihlbnRyeSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXsgZW50cnkubGFiZWwgfSBjbGFzc05hbWU9e2BjdXN0b21faWNvbmB9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9eyB7ICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycgfSB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWF2YXRhciBzbGRzLWF2YXRhci0tY2lyY2xlIHNsZHMtYXZhdGFyLS1zbWFsbCcgPlxuICAgICAgICAgICAgIDxpbWcgc3JjPXsgZW50cnkuY29udGV4dC5pbWcgfSBhbHQ9J2VudHJ5LmNvbnRleHQudGl0bGUnIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtdGV4dC1ib2R5LS1yZWd1bGFyICcgc3R5bGU9e3sgJ3ZlcnRpY2FsQWxpZ24nOiAnbWlkZGxlJywgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJywgJ3BhZGRpbmdMZWZ0JzogJzEwcHgnIH19ID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjMDI3MGQyJyB9fSA+eyBlbnRyeS5jb250ZXh0LnRpdGxlIH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXRleHQtYm9keS0tc21hbGwnPntlbnRyeS5jb250ZXh0LnN1Yl90aXRsZX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbiAgfVxuXG4gIHJlbmRlckNhbmRpZGF0ZShlbnRyeSkge1xuICAgIGNvbnN0IGljb24gPSBlbnRyeS5jb250ZXh0ID9cbiAgICAgIHRoaXMucmVuZGVyQ3VzdG9tSWNvbihlbnRyeSkgOlxuICAgICAgPEljb24gY2F0ZWdvcnk9eyBlbnRyeS5jYXRlZ29yeSB9IGljb249eyBlbnRyeS5pY29uIH0gc2l6ZT0nc21hbGwnIC8+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJyBrZXk9eyBlbnRyeS52YWx1ZSB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUgcmVhY3Qtc2xkcy1jYW5kaWRhdGUnIHRhYkluZGV4PXsgLTEgfSByb2xlPSdvcHRpb24nXG4gICAgICAgICAgb25LZXlEb3duPXsgKGUpID0+IGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5vblNlbGVjdChlbnRyeSkgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMucHJvcHMub25CbHVyIH1cbiAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5vblNlbGVjdChlbnRyeSkgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBpY29uIH1cbiAgICAgICAgICB7ICF0aGlzLnByb3BzLmhpZGVMYWJlbCA/IGVudHJ5LmxhYmVsIDogbnVsbCB9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgPSBbXSwgaGlkZGVuLCBsb2FkaW5nLCBoZWFkZXIsIGZvb3RlciwgZmlsdGVyID0gKCkgPT4gdHJ1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBNZW51Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1sb29rdXBfX21lbnUnLFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvb2t1cE1lbnVDbGFzc05hbWVzIH0gcm9sZT0nbGlzdGJveCdcbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXIgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBoZWFkZXIgfTwvZGl2PiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2xpc3QnIHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5maWx0ZXIoZmlsdGVyKS5tYXAodGhpcy5yZW5kZXJDYW5kaWRhdGUuYmluZCh0aGlzKSlcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbScga2V5PSdsb2FkaW5nJz5cbiAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT0nc21hbGwnIHN0eWxlPXsgeyBtYXJnaW46ICcwIGF1dG8nIH0gfSAvPlxuICAgICAgICAgICAgPC9saT4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7XG4gICAgICAgICAgZm9vdGVyID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgZm9vdGVyIH08L2Rpdj4gOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuTG9va3VwQ2FuZGlkYXRlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKExvb2t1cEVudHJ5VHlwZSksXG4gIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGVMYWJlbDogUHJvcFR5cGVzLmJvb2wsXG4gIGZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgZm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIHNlbGVjdGVkOiBwcm9wcy5kZWZhdWx0U2VsZWN0ZWQsXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXG4gICAgICBzZWFyY2hUZXh0OiBwcm9wcy5kZWZhdWx0U2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlOiBwcm9wcy5kZWZhdWx0VGFyZ2V0U2NvcGUsXG4gICAgICBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgb25TY29wZU1lbnVDbGljayhlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0U2NvcGUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHRhcmdldFNjb3BlKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaFRleHRDaGFuZ2Uoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXh0IH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaFRleHRDaGFuZ2Uoc2VhcmNoVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgb25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNldFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IG51bGwgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QobnVsbCk7XG4gICAgfVxuICAgIHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlKCcnKTtcbiAgICB0aGlzLm9uTG9va3VwUmVxdWVzdCgnJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzZWFyY2hFbGVtID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNlYXJjaCk7XG4gICAgICBjb25zdCBpbnB1dEVsZW0gPSBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkxvb2t1cEl0ZW1TZWxlY3Qoc2VsZWN0ZWQpIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZCwgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVsZW0gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc2VsZWN0aW9uKTtcbiAgICAgICAgY29uc3QgcGlsbEVsZW0gPSBzZWxlY3Rpb25FbGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICAgICAgaWYgKHBpbGxFbGVtKSB7IHBpbGxFbGVtLmZvY3VzKCk7IH1cbiAgICAgIH0sIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoRWxlbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zZWFyY2gpO1xuICAgICAgICBjb25zdCBpbnB1dEVsZW0gPSBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTsgLy8gdGVsbCB0aGUgY29tcG9uZW50IGNvbnRhaW5lciB0byBxdWl0IGxvb2t1cFxuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXNGaXJzdENhbmRpZGF0ZSgpIHtcbiAgICBjb25zdCB7IG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghb3BlbmVkKSB7XG4gICAgICB0aGlzLm9uTG9va3VwUmVxdWVzdCh0aGlzLnN0YXRlLnNlYXJjaFRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNGaXJzdENhbmRpZGF0ZTogdHJ1ZSB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNGaXJzdENhbmRpZGF0ZTogZmFsc2UgfSk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSh0cnVlKTsgLy8gcXVpdCBsb29rdXAgKGNhbmNlbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCwgZGVmYXVsdFNlbGVjdGVkLFxuICAgICAgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQsIGRlZmF1bHRPcGVuZWQsXG4gICAgICBzZWFyY2hUZXh0ID0gdGhpcy5zdGF0ZS5zZWFyY2hUZXh0LCBkZWZhdWx0U2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlID0gdGhpcy5zdGF0ZS50YXJnZXRTY29wZSwgZGVmYXVsdFRhcmdldFNjb3BlLFxuICAgICAgbG9hZGluZywgbG9va3VwRmlsdGVyLFxuICAgICAgbGlzdEhlYWRlciwgbGlzdEZvb3RlcixcbiAgICAgIGRhdGEsXG4gICAgICBoaWRlTGFiZWwsXG4gICAgICBvblNlbGVjdCwgb25CbHVyLCBvbkNvbXBsZXRlLFxuICAgICAgb25TY29wZUNoYW5nZSwgb25TY29wZU1lbnVDbGljaywgb25TZWFyY2hUZXh0Q2hhbmdlLCBvbkxvb2t1cFJlcXVlc3QsXG4gICAgICAuLi5wcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wZG93biA9IChcbiAgICAgIDxMb29rdXBDYW5kaWRhdGVMaXN0XG4gICAgICAgIHJlZj0nY2FuZGlkYXRlTGlzdCdcbiAgICAgICAgZGF0YT17IGRhdGEgfVxuICAgICAgICBmb2N1cz17IHRoaXMuc3RhdGUuZm9jdXNGaXJzdENhbmRpZGF0ZSB9XG4gICAgICAgIGhpZGRlbj17ICFvcGVuZWQgfVxuICAgICAgICBoaWRlTGFiZWw9eyBoaWRlTGFiZWwgfVxuICAgICAgICBsb2FkaW5nPXsgbG9hZGluZyB9XG4gICAgICAgIGZpbHRlcj17IGxvb2t1cEZpbHRlciA/IChlbnRyeSkgPT4gbG9va3VwRmlsdGVyKGVudHJ5LCBzZWFyY2hUZXh0LCB0YXJnZXRTY29wZSkgOiB1bmRlZmluZWQgfVxuICAgICAgICBoZWFkZXI9eyBsaXN0SGVhZGVyIH1cbiAgICAgICAgZm9vdGVyPXsgbGlzdEZvb3RlciB9XG4gICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkxvb2t1cEl0ZW1TZWxlY3QuYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgLz5cbiAgICApO1xuICAgIGNvbnN0IGxvb2t1cENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtbG9va3VwJyxcbiAgICAgIHsgJ3NsZHMtaGFzLXNlbGVjdGlvbic6IHNlbGVjdGVkIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBsb29rdXBDbGFzc05hbWVzIH1cbiAgICAgICAgICBkYXRhLXNlbGVjdD0nc2luZ2xlJ1xuICAgICAgICAgIGRhdGEtc2NvcGU9eyBwcm9wcy5zY29wZXMgPyAnbXVsdGknIDogJ3NpbmdsZScgfVxuICAgICAgICAgIGRhdGEtdHlwZWFoZWFkPXsgZmFsc2UgfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0ZWQgP1xuICAgICAgICAgICAgPExvb2t1cFNlbGVjdGlvblxuICAgICAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICAgICAgcmVmPSdzZWxlY3Rpb24nXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICAgICAgICBvblJlc2V0U2VsZWN0aW9uPXsgdGhpcy5vblJlc2V0U2VsZWN0aW9uLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgLz4gOlxuICAgICAgICAgICAgPExvb2t1cFNlYXJjaCB7IC4uLnByb3BzIH1cbiAgICAgICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgIHJlZj0nc2VhcmNoJ1xuICAgICAgICAgICAgICBzZWFyY2hUZXh0PXsgc2VhcmNoVGV4dCB9XG4gICAgICAgICAgICAgIHRhcmdldFNjb3BlPXsgdGFyZ2V0U2NvcGUgfVxuICAgICAgICAgICAgICBvblNjb3BlTWVudUNsaWNrPXsgdGhpcy5vblNjb3BlTWVudUNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICBvblNjb3BlQ2hhbmdlPXsgdGhpcy5vblNjb3BlQ2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICBvblN1Ym1pdD17ICgpID0+IHRoaXMub25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpIH1cbiAgICAgICAgICAgICAgb25QcmVzc0Rvd249eyB0aGlzLm9uRm9jdXNGaXJzdENhbmRpZGF0ZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17IG9uQ29tcGxldGUgfVxuICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5cbkxvb2t1cC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgZGVmYXVsdFNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gIG9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGVMYWJlbDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0U2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKExvb2t1cEVudHJ5VHlwZSksXG4gIGxvb2t1cEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGxpc3RIZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxuICBsaXN0Rm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpY29uQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSlcbiAgKSxcbiAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRUYXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWFyY2hUZXh0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkxvb2t1cFJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5Mb29rdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=