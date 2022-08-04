import React, { useState } from 'react';
import '../App.css';
import { getMonthLength, getMonthName } from '../resources/dateFunctions';

const DayBlock = ({ dayNum }) => {
    return (
        <div className='dayBlock'>
            {dayNum}
        </div>
    );
}

const WeekRow = ({ rowNum, startDay, monthLength }) => {
    const weekStart = (rowNum * 7) - startDay;

    if (rowNum === 4 || rowNum === 5) {
        return (
            <div className={monthLength > weekStart ? 'weekRow' : 'hidden'}>
                <DayBlock dayNum={weekStart + 1 <= monthLength ? weekStart + 1 : null} />
                <DayBlock dayNum={weekStart + 2 <= monthLength ? weekStart + 2 : null} />
                <DayBlock dayNum={weekStart + 3 <= monthLength ? weekStart + 3 : null} />
                <DayBlock dayNum={weekStart + 4 <= monthLength ? weekStart + 4 : null} />
                <DayBlock dayNum={weekStart + 5 <= monthLength ? weekStart + 5 : null} />
                <DayBlock dayNum={weekStart + 6 <= monthLength ? weekStart + 6 : null} />
                <DayBlock dayNum={weekStart + 7 <= monthLength ? weekStart + 7 : null} />
            </div>
        );
    } else if (rowNum === 0) {
        return (
            <div className={'weekRow'}>
                <DayBlock dayNum={weekStart + 1 > 0 ? weekStart + 1 : null} />
                <DayBlock dayNum={weekStart + 2 > 0 ? weekStart + 2 : null} />
                <DayBlock dayNum={weekStart + 3 > 0 ? weekStart + 3 : null} />
                <DayBlock dayNum={weekStart + 4 > 0 ? weekStart + 4 : null} />
                <DayBlock dayNum={weekStart + 5 > 0 ? weekStart + 5 : null} />
                <DayBlock dayNum={weekStart + 6 > 0 ? weekStart + 6 : null} />
                <DayBlock dayNum={weekStart + 7 > 0 ? weekStart + 7 : null} />
            </div>
        );
    } else {
        return (
            <div className='weekRow'>
                <DayBlock dayNum={weekStart + 1} />
                <DayBlock dayNum={weekStart + 2} />
                <DayBlock dayNum={weekStart + 3} />
                <DayBlock dayNum={weekStart + 4} />
                <DayBlock dayNum={weekStart + 5} />
                <DayBlock dayNum={weekStart + 6} />
                <DayBlock dayNum={weekStart + 7} />
            </div>
        )
    }
}

const Calendar = () => {

    const currentDate = new Date();
    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());
    const [monthName, setMonthName] = useState(getMonthName(currentDate.getMonth()));

    const monthLength = getMonthLength(month, year);
    const startDay = new Date(year, month, 1).getDay();

    return (
        <div className='projectDiv'>
            <h5>Calendar</h5>
            <div className='sampleBlock calendarBlock'>
                <h6 className='monthAndYear'>{monthName}, {year}</h6>
                <div className='grid'>
                    <WeekRow rowNum={0} monthLength={monthLength} startDay={startDay} />
                    <WeekRow rowNum={1} monthLength={monthLength} startDay={startDay} />
                    <WeekRow rowNum={2} monthLength={monthLength} startDay={startDay} />
                    <WeekRow rowNum={3} monthLength={monthLength} startDay={startDay} />
                    <WeekRow rowNum={4} monthLength={monthLength} startDay={startDay} />
                    <WeekRow rowNum={5} monthLength={monthLength} startDay={startDay} />
                </div>
            </div>
        </div>
    )
}

export default Calendar;