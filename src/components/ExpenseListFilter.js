import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setSortBy, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {
  state = {
    calenderFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }))
  };
  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value));
        }} />
        
        <select value={this.props.filters.sortBy} onChange={(e) => {
            this.props.dispatch(setSortBy(e.target.value));
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilter);