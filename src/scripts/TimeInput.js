import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import moment from 'moment';
import uuid from 'uuid';
import FormElement from './FormElement';
import Input from './Input';
import Icon from './Icon';
// import Datepicker from './Datepicker';
import DropdownMenu, { DropdownMenuItem } from './DropdownMenu';
// import DropdownMenuItem from './DropdownMenu';

export default class TimeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: `form-element-${uuid()}`,
      opened: (props.defaultOpened || false),
    };

    this._timeepoch = {
      10: 600,
      15: 900,
      20: 1200,
      25: 1500,
      30: 1800,
      DAY: 86400,
    };
  }

  componentWillMount() {
    this._options = this.buildTimeOptions(this.props.resolution, this.props.format);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onValueChange && prevState.value !== this.state.value) {
      this.props.onValueChange(this.state.value, prevState.value);
    }
  }

  onTimeIconClick() {
    setTimeout(() => {
      this.showDatepicker();
    }, 10);
  }

  onInputKeyDown(e) {
    if (e.keyCode === 13) { // return key
      e.preventDefault();
      e.stopPropagation();
      this.setValueFromInput(e.target.value);
      if (this.props.onComplete) {
        setTimeout(() => {
          this.props.onComplete();
        }, 10);
      }
    } else if (e.keyCode === 40) { // down key
      this.showDatepicker();
      e.preventDefault();
      e.stopPropagation();
    }
    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }

  onInputChange(e) {
    const inputValue = e.target.value;
    this.setState({ inputValue });
    if (this.props.onChange) {
      this.props.onChange(e, inputValue);
    }
  }

  onInputBlur(e) {
    this.setValueFromInput(e.target.value);
    setTimeout(() => {
      if (!this.isFocusedInComponent()) {
        if (this.props.onBlur) {
          this.props.onBlur();
        }
        if (this.props.onComplete) {
          this.props.onComplete();
        }
      }
    }, 10);
  }

  onDatepickerSelect(value) {
    this.setState({ value, inputValue: undefined });
    setTimeout(() => {
      this.setState({ opened: false });
      const inputEl = ReactDOM.findDOMNode(this.refs.input);
      if (inputEl) {
        inputEl.focus();
        inputEl.select();
      }
      if (this.props.onComplete) {
        this.props.onComplete();
      }
    }, 200);
  }

  onDatepickerBlur() {
    this.setState({ opened: false });
    setTimeout(() => {
      if (!this.isFocusedInComponent()) {
        if (this.props.onBlur) {
          this.props.onBlur();
        }
        if (this.props.onComplete) {
          this.props.onComplete();
        }
      }
    }, 10);
  }

  onDatepickerClose() {
    this.setState({ opened: false });
    const inputEl = ReactDOM.findDOMNode(this.refs.input);
    if (inputEl) {
      inputEl.focus();
      inputEl.select();
    }
  }

  setValueFromInput(inputValue) {
    let value = this.state.value;
    if (!inputValue) {
      value = '';
    } else {
      value = moment(inputValue, this.props.dateFormat);
      if (value.isValid()) {
        value = value.format('YYYY-MM-DD');
      } else {
        value = '';
      }
    }
    this.setState({ value, inputValue: undefined });
  }

  isFocusedInComponent() {
    const rootEl = ReactDOM.findDOMNode(this);
    let targetEl = document.activeElement;
    while (targetEl && targetEl !== rootEl) {
      targetEl = targetEl.parentNode;
    }
    return !!targetEl;
  }

  showDatepicker() {
    let value = this.state.value;
    if (typeof this.state.inputValue !== 'undefined') {
      value = moment(this.state.inputValue, this.props.dateFormat);
      if (value.isValid()) {
        value = value.format('YYYY-MM-DD');
      } else {
        value = this.state.value;
      }
    }
    this.setState({ opened: true, value });
  }

  showTimemenu() {
    setTimeout(() => {
      this.setState({ opened: !this.state.opened });
    }, 10);
  }

  buildTimeOptions(resolution, format) { // min 10 - max 30 || default 30 min || format 12||24
    const step = (resolution in this._timeepoch) ? (resolution) : (30);
    let loops = (this._timeepoch.DAY / this._timeepoch[step]) + 1;
    let [hour, min, AMPM] = [0, 0, 'AM'];
    let minToDisplay;
    let hour12format;
    const options = [];
    while (loops) {
      minToDisplay = (min === 0) ? ('00') : (min);
      hour12format = (hour > 12) ? (hour - 12) : (hour);
      hour12format = (hour === 0) ? (12) : (hour12format);
      hour12format = (hour < 10 && format === 12) ? ('0' + hour) : (hour12format); // optional
      options.push(<DropdownMenuItem key={loops}>
        {(format === 12) ? (hour12format + ':' + minToDisplay + ' ' + AMPM) : (hour + ':' + minToDisplay)}
      </DropdownMenuItem>);
      min += step;
      if (min === 60) {
        hour += 1;
        min = 0;
      }
      if (hour === 12 && min === 0) {
        AMPM = (AMPM === 'AM') ? ('PM') : ('AM');
      }
      loops--;
    }
    return options;
  }

  // renderDropdown(dateValue) {
  //   const datepickerClassNames = classnames(
  //     'slds-dropdown',
  //     'slds-dropdown--left'
  //   );
  //   return (
  //     this.state.opened ?
  //     <Datepicker className={ datepickerClassNames } selectedDate={ dateValue } autoFocus
  //       onSelect={ this.onDatepickerSelect.bind(this) }
  //       onBlur={ this.onDatepickerBlur.bind(this) }
  //       onClose={ this.onDatepickerClose.bind(this) }
  //     /> :
  //     <div />
  //   );
  // }

  renderInput({ inputValue, ...props }) {
    return (
      <div className='slds-input-has-icon slds-input-has-icon--right'>
        <Input ref='input' value={ inputValue } { ...props }
          onKeyDown={ this.onInputKeyDown.bind(this) }
          onChange={ this.onInputChange.bind(this) }
          onBlur={ this.onInputBlur.bind(this) }
        />
        <Icon icon='clock' className='slds-input__icon' style={ { cursor: 'pointer' } }
          onClick={ this.showTimemenu.bind(this) }
        />
      </div>
    );
  }

  render() {
    const id = this.props.id || this.state.id;
    const {
      className,
      totalCols, cols, label, required, error,
      defaultValue, value, dateFormat,
      onChange, onKeyDown, onBlur, ...props,
    } = this.props;

    const dropdownClassNames = classnames(
      className,
      'slds-dropdown-trigger',
      // 'slds-dropdown--length-5', /// not supported instamita
      {
        'react-slds-dropdown-opened': this.state.opened,
      }
    );
    // const dateValue = '12/25/1995';
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
    const inputValue = '11';
    const formElemProps = { id, totalCols, cols, label, required, error };
    return (
      <FormElement { ...formElemProps }>
        <div className={ dropdownClassNames }>
        { this.renderInput({ id, inputValue, ...props }) }
        <DropdownMenu align={ 'left' }
          size={ 'small' }
          ref='dropdown'
        >
          {this._options}
        </DropdownMenu>
        </div>
      </FormElement>
    );
  }
}

TimeInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  format: PropTypes.number,
  resolution: PropTypes.number,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({
      message: PropTypes.string,
    }),
  ]),
  totalCols: PropTypes.number,
  cols: PropTypes.number,
  value: PropTypes.string,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  defaultOpened: PropTypes.bool,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func,
  onComplete: PropTypes.func,
};

TimeInput.isFormElement = true;


// import React, { PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import classnames from 'classnames';
// import Button from './Button';
// import DropdownMenu from './DropdownMenu';
// import Input from './Input';
// import Icon from './Icon';
// import { registerStyle } from './util';

// export default class TimeInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { opened: false };
//     registerStyle('no-hover-popup', [
//       [
//         '.slds-dropdown-trigger:hover .slds-dropdown--menu.react-slds-no-hover-popup',
//         '{ visibility: hidden; opacity: 0; }',
//       ],
//       [
//         '.slds-dropdown-trigger.react-slds-dropdown-opened .slds-dropdown--menu',
//         '{ visibility: visible !important; opacity: 1 !important; }',
//       ],
//     ]);
//   }

//   onBlur() {
//     setTimeout(() => {
//       if (!this.isFocusedInComponent()) {
//         this.setState({ opened: false });
//         if (this.props.onBlur) {
//           this.props.onBlur();
//         }
//       }
//     }, 10);
//   }

//   onKeyDown(e) {
//     if (e.keyCode === 40) { // down
//       e.preventDefault();
//       e.stopPropagation();
//       if (!this.state.opened) {
//         this.setState({ opened: true });
//         if (this.props.onClick) {
//           this.props.onClick(e);
//         }
//         setTimeout(() => {
//           this.focusToTargetItemEl();
//         }, 20);
//       } else {
//         this.focusToTargetItemEl();
//       }
//     } else if (e.keyCode === 27) { // ESC
//       e.preventDefault();
//       e.stopPropagation();
//       this.setState({ opened: false });
//     }
//   }

//   onTriggerClick(...args) {
//     if (!this.props.hoverPopup) {
//       this.setState({ opened: !this.state.opened });
//     }
//     if (this.props.onClick) {
//       this.props.onClick(...args);
//     }
//   }

//   onMenuItemClick(...args) {
//     if (!this.props.hoverPopup) {
//       setTimeout(() => {
//         const triggerElem = ReactDOM.findDOMNode(this.refs.trigger);
//         if (triggerElem) triggerElem.focus();
//         this.setState({ opened: false });
//       }, 10);
//     }
//     if (this.props.onMenuItemClick) {
//       this.props.onMenuItemClick(...args);
//     }
//   }

//   onMenuClose() {
//     const triggerElem = ReactDOM.findDOMNode(this.refs.trigger);
//     triggerElem.focus();
//     this.setState({ opened: false });
//   }

//   isFocusedInComponent() {
//     const rootEl = ReactDOM.findDOMNode(this);
//     let targetEl = document.activeElement;
//     while (targetEl && targetEl !== rootEl) {
//       targetEl = targetEl.parentNode;
//     }
//     return !!targetEl;
//   }

//   focusToTargetItemEl() {
//     const dropdownEl = ReactDOM.findDOMNode(this.refs.dropdown);
//     const firstItemEl =
//       dropdownEl.querySelector('.slds-is-selected > .react-slds-menuitem[tabIndex]') ||
//       dropdownEl.querySelector('.react-slds-menuitem[tabIndex]');
//     if (firstItemEl) {
//       firstItemEl.focus();
//     }
//   }

//   renderButton({ grouped, isFirstInGroup, isLastInGroup, ...props }) {
//     const button = (
//       <Button { ...props } aria-haspopup
//         ref='trigger'
//         onClick={ this.onTriggerClick.bind(this) }
//         onKeyDown={ this.onKeyDown.bind(this) }
//         onBlur={ this.onBlur.bind(this) }
//       />
//     );

//     if (grouped) {
//       const noneStyle = { display: 'none' };
//       return (
//         <div className='slds-button-group'>
//           { isFirstInGroup ? null : <button className='slds-button' style={ noneStyle }></button> }
//           { button }
//           { isLastInGroup ? null : <button className='slds-button' style={ noneStyle }></button> }
//         </div>
//       );
//     }

//     return button;
//   }
//   renderInput({ inputValue, ...props }) {
//     return (
//       <div className='slds-input-has-icon slds-input-has-icon--right'>
//         <Input ref='input' value={ inputValue } { ...props }
//           onKeyDown={ this.onInputKeyDown.bind(this) }
//           onChange={ this.onInputChange.bind(this) }
//           onBlur={ this.onInputBlur.bind(this) }
//         />
//         <Icon icon='clock' className='slds-input__icon' style={ { cursor: 'pointer' } }
//           onClick={ this.onTimeIconClick.bind(this) }
//         />
//       </div>
//     );
//   }

//   render() {
//     const { className, menuAlign = 'left', menuSize, nubbinTop, hoverPopup, menuHeader, type, label, children, ...props } = this.props;
//     let { icon } = this.props;
//     const dropdownClassNames = classnames(
//       className,
//       'slds-dropdown-trigger',
//       {
//         'slds-button-space-left': !props.grouped,
//         'react-slds-dropdown-opened': this.state.opened,
//       }
//     );
//     let iconMore = null;
//     if (!label && !icon) {
//       icon = 'down';
//     }
//     if (label || type === 'icon-more') {
//       iconMore = 'down';
//     }

//     return (
//       <div className={ dropdownClassNames }>
//         { this.renderButton({ type, label, icon, iconMore, ...props }) }
//         <DropdownMenu align={ menuAlign } header={ menuHeader } size={ menuSize }
//           nubbinTop={ nubbinTop } hoverPopup={ hoverPopup }
//           ref='dropdown'
//           onMenuItemClick={ this.onMenuItemClick.bind(this) }
//           onMenuClose={ this.onMenuClose.bind(this) }
//           onBlur={ this.onBlur.bind(this) }
//         >
//           { children }
//         </DropdownMenu>
//       </div>
//     );
//   }

// }

// TimeInput.propTypes = {
//   className: PropTypes.string,
//   label: PropTypes.node,
//   type: PropTypes.string,
//   icon: PropTypes.string,
//   menuAlign: PropTypes.oneOf(['left', 'center', 'right']),
//   menuSize: PropTypes.oneOf(['small', 'medium', 'large']),
//   menuHeader: PropTypes.string,
//   nubbinTop: PropTypes.bool,
//   hoverPopup: PropTypes.bool,
//   onBlur: PropTypes.func,
//   onClick: PropTypes.func,
//   onMenuItemClick: PropTypes.func,
//   grouped: PropTypes.bool,
//   isFirstInGroup: PropTypes.bool,
//   isLastInGroup: PropTypes.bool,
//   children: PropTypes.node,
// };
