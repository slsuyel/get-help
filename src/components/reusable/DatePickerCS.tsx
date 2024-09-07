/* eslint-disable @typescript-eslint/no-explicit-any */
import { range } from 'lodash';
import { Dispatch, FC, SetStateAction } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type TDatePickerCSProps = {
  placeholder: string;
  date: Date | null;
  setDate: Dispatch<SetStateAction<Date | null>>;
};

const getYear = (date: Date) => {
  return date.getFullYear();
};

const getMonth = (date: Date) => {
  return date.getMonth();
};

const DatePickerCS: FC<TDatePickerCSProps> = ({
  date,
  setDate,
  placeholder,
}) => {
  const years = range(1960, getYear(new Date()) + 1, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <ReactDatePicker
      placeholderText={placeholder}
      className="d border d-block px-4 py-2 rounded fs-5"
      renderCustomHeader={({ date, changeYear, changeMonth }) => (
        <div
          style={{
            margin: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <select
            value={getYear(date)}
            onChange={({ target: { value } }: any) => changeYear(value)}
            className="px-3 py-1 rounded fs-5 no-scrollbar outline-none"
          >
            {years?.reverse()?.map((option: any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
            className="px-3 py-1 rounded fs-5 no-scrollbar outline-none"
          >
            {months.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      selected={date}
      onChange={(date: Date | null) => setDate(date)}
    />
  );
};

export default DatePickerCS;
