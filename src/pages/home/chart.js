import React, {useState, createRef, useEffect} from 'react';
import {DateUtil, Util} from '../../util';
import {Container, ChartContainer, Chart, ChartLabel} from './styles';
import {DATE_FORMAT_DATA} from '../../constants';
import AnimateElements from './animate';

const {dateAdd, dateToString, stringToDate} = DateUtil;
const {sortData, formatCurrency} = Util;

const AnimateChart = ({data = [], startDate, endDate}) => {
    const [conditions, setConditions] = useState({
        interval: 0.5,
        limit: 20
    });

    const handleChange = ({target: {name, value}}) => setConditions({
        ...conditions,
        [name]: value
    });

    const [showDate, setShowDate] = useState(startDate);
    
    const displayData = data.map(item => ({
        id: item.id,
        country: item.country,
        cases: item.cases[showDate] || 0,
        color: item.color
    })).sort(sortData('cases', 'desc')).slice(0, conditions.limit);

    const maxWidth = displayData.length > 0 ? displayData[0].cases || 1 : 1;

    const [timer, setTimer] = useState(false);
    const toggleTimer = () => {
        if (showDate !== startDate)
            setShowDate(startDate);
            
        setTimer(!timer);
    }

    const [repeat, setRepeat] = useState(false);
    const toggleRepeat = () => setRepeat(!repeat);

    const nextDate = () => {
        if (showDate === endDate)
            if (repeat)
                setShowDate(startDate);
            else
                return true;
        else {
            const d = dateToString(dateAdd(stringToDate(showDate, DATE_FORMAT_DATA), -1), DATE_FORMAT_DATA);
            setShowDate(d);
        }
    }

    useEffect(() => {
        if (timer) {
            console.log('Tick')
            const tick = (conditions.interval || 0) * 1000;
            let interval;

            if (tick > 0) {
                interval = setInterval(() => {
                    const stop = nextDate();

                    if (stop) {
                        console.log('Stop')
                        setTimer(false);
                        clearInterval(interval);
                    }
                }, tick);
                    
            }
            
            return () => clearInterval(interval);
        }
    });

    const intervalOptions = [0.1, 0.2, 0.5, 1, 2, 5];
    const limitOptions = [10, 20, 30, 40, 50]

    return (
        <>
            {
                showDate
                    ?   <>
                            <div>
                                <label for="limit">Rows display</label>
                                <select id="limit" name="limit" value={conditions.limit} onChange={handleChange} style={{marginLeft: '5px'}}>
                                    {
                                        limitOptions.map(value => (
                                            <option value={value}>{value}</option>
                                        ))
                                    }
                                </select>

                                <label for="interval" style={{marginLeft: '10px'}}>Interval(Second)</label>
                                <select id="interval" name="interval" value={conditions.interval} onChange={handleChange} style={{marginLeft: '5px'}}>
                                    {
                                        intervalOptions.map(value => (
                                            <option value={value}>{value}</option>
                                        ))
                                    }
                                </select>
                                <input type="checkbox" id="timer" name="timer" checked={timer} onClick={toggleTimer} style={{marginLeft: '10px'}} />
                                <label for="timer">Animate</label>

                                <input type="checkbox" id="repeat" name="repeat" checked={repeat} onClick={toggleRepeat} style={{marginLeft: '10px'}} />
                                <label for="repeat">Repeat</label>
                            </div>

                            {/* <div>
                                <label for="limit">Rows display</label>
                                <select id="limit" name="limit" value={conditions.limit} onChange={handleChange} style={{marginLeft: '5px'}}>
                                    {
                                        limitOptions.map(value => (
                                            <option value={value}>{value}</option>
                                        ))
                                    }
                                </select>
                            </div> */}

                            <br/>

                            <Container>
                                <ChartContainer>
                                    <strong>Date: {dateToString(stringToDate(showDate, 'M/D/YY'), 'DD/MM/YYYY')}</strong>

                                    <AnimateElements>
                                        {
                                            displayData.map(item => {
                                                const {id, country, cases, color} = item;
                                                const percentage = (cases * 100) / maxWidth;
                                                
                                                return (
                                                    <Chart key={id} id={id} width={percentage} color={color} ref={createRef()}>
                                                        <ChartLabel>{`${country} (${formatCurrency(cases, 0)})`}</ChartLabel>
                                                    </Chart>
                                                );
                                            })
                                        }
                                    </AnimateElements>
                                </ChartContainer>
                            </Container>
                        </>

                    :   <div>Not found result</div>
            }
        </>
    )
};

// export default React.memo(AnimateChart);
export default AnimateChart;