import React, {useEffect} from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import {renderCalendarGraph} from '../../actions/calenderActions'
import { useSelector, useDispatch } from 'react-redux';

const CalendarGraph = () => {

    const calendarGraph = useSelector((state) => state.calendarGraph);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(renderCalendarGraph())
    }, [dispatch] );
    return (
        <>
    <ResponsiveCalendar
        data={calendarGraph.data}
        from="2020-01-08"
        to="2020-12-31"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
        </>
    )
}

export default CalendarGraph





