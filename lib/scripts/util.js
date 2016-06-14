'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.setAssetRoot = setAssetRoot;
exports.getAssetRoot = getAssetRoot;
exports.registerStyle = registerStyle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assetRoot = '/assets';

function setAssetRoot(path) {
  assetRoot = path;
}

function getAssetRoot() {
  return assetRoot;
}

function registerStyle(styleName, rules) {
  var styleId = 'react-slds-cssfix-' + styleName;
  var style = document.getElementById(styleId);
  if (style) {
    return;
  }
  style = document.createElement('style');
  style.id = styleId;
  style.appendChild(document.createTextNode(''));
  document.documentElement.appendChild(style);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(rules), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ruleSet = _step.value;

      var declaration = ruleSet.pop();
      var selectors = ruleSet;
      selectors = selectors.concat(selectors.map(function (s) {
        return '.slds ' + s;
      }));
      var rule = selectors.join(', ') + ' ' + declaration;
      style.sheet.insertRule(rule, 0);
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
}

exports.default = { setAssetRoot: setAssetRoot, getAssetRoot: getAssetRoot, registerStyle: registerStyle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztRQUVnQixZLEdBQUEsWTtRQUlBLFksR0FBQSxZO1FBSUEsYSxHQUFBLGE7Ozs7QUFWaEIsSUFBSSxZQUFZLFNBQWhCOztBQUVPLFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUNqQyxjQUFZLElBQVo7QUFDRDs7QUFFTSxTQUFTLFlBQVQsR0FBd0I7QUFDN0IsU0FBTyxTQUFQO0FBQ0Q7O0FBRU0sU0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQzlDLE1BQU0sVUFBVSx1QkFBdUIsU0FBdkM7QUFDQSxNQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJLEtBQUosRUFBVztBQUFFO0FBQVM7QUFDdEIsVUFBUSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBLFFBQU0sRUFBTixHQUFXLE9BQVg7QUFDQSxRQUFNLFdBQU4sQ0FBa0IsU0FBUyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0EsV0FBUyxlQUFULENBQXlCLFdBQXpCLENBQXFDLEtBQXJDO0FBUDhDO0FBQUE7QUFBQTs7QUFBQTtBQVE5QyxvREFBc0IsS0FBdEIsNEdBQTZCO0FBQUEsVUFBbEIsT0FBa0I7O0FBQzNCLFVBQU0sY0FBYyxRQUFRLEdBQVIsRUFBcEI7QUFDQSxVQUFJLFlBQVksT0FBaEI7QUFDQSxrQkFBWSxVQUFVLE1BQVYsQ0FBaUIsVUFBVSxHQUFWLENBQWMsVUFBQyxDQUFEO0FBQUEsZUFBTyxXQUFXLENBQWxCO0FBQUEsT0FBZCxDQUFqQixDQUFaO0FBQ0EsVUFBTSxPQUFPLFVBQVUsSUFBVixDQUFlLElBQWYsSUFBdUIsR0FBdkIsR0FBNkIsV0FBMUM7QUFDQSxZQUFNLEtBQU4sQ0FBWSxVQUFaLENBQXVCLElBQXZCLEVBQTZCLENBQTdCO0FBQ0Q7QUFkNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWUvQzs7a0JBRWMsRUFBRSwwQkFBRixFQUFnQiwwQkFBaEIsRUFBOEIsNEJBQTlCLEUiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhc3NldFJvb3QgPSAnL2Fzc2V0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBc3NldFJvb3QocGF0aCkge1xuICBhc3NldFJvb3QgPSBwYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNzZXRSb290KCkge1xuICByZXR1cm4gYXNzZXRSb290O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTdHlsZShzdHlsZU5hbWUsIHJ1bGVzKSB7XG4gIGNvbnN0IHN0eWxlSWQgPSAncmVhY3Qtc2xkcy1jc3NmaXgtJyArIHN0eWxlTmFtZTtcbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCk7XG4gIGlmIChzdHlsZSkgeyByZXR1cm47IH1cbiAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5pZCA9IHN0eWxlSWQ7XG4gIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIGZvciAoY29uc3QgcnVsZVNldCBvZiBydWxlcykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gcnVsZVNldC5wb3AoKTtcbiAgICBsZXQgc2VsZWN0b3JzID0gcnVsZVNldDtcbiAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuY29uY2F0KHNlbGVjdG9ycy5tYXAoKHMpID0+ICcuc2xkcyAnICsgcykpO1xuICAgIGNvbnN0IHJ1bGUgPSBzZWxlY3RvcnMuam9pbignLCAnKSArICcgJyArIGRlY2xhcmF0aW9uO1xuICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUocnVsZSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBzZXRBc3NldFJvb3QsIGdldEFzc2V0Um9vdCwgcmVnaXN0ZXJTdHlsZSB9O1xuIl19