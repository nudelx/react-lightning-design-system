import React from 'react';

import { TimeInput, DateInput, DropdownButton, MenuItem } from 'react-lightning-design-system';

export default class AlexExamples extends React.Component {

  click(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        <TimeInput label='alex' defaultValue='12AM' required={false} resolution={30} format={12} />
        <DateInput label='DateInput #2' defaultValue='2015-12-24' defaultOpened={false} required={false} error={''} />
        <DropdownButton label='Simple' menuAlign='left'>
            <MenuItem onClick={ this.click.bind(this) }>Menu Item #1</MenuItem>
            <MenuItem onClick={ this.click.bind(this) }>Menu Item #2</MenuItem>
            <MenuItem onClick={ this.click.bind(this) }>Menu Item #3</MenuItem>
          </DropdownButton>
      </div>
    );
  }
}
