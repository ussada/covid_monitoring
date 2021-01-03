import {useState, useMemo} from 'react';
import {API, DateUtil, Util} from '../../util';
import {DATE_FORMAT_DATA, END_POINTS} from '../../constants';
import Chart from './chart';

const {useAPI} = API;
const {dateToString, stringToDate} = DateUtil;
const {sortData} = Util;

const randomColor = (brightness = 1) => {
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness * 85, brightness * 85, brightness * 85]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(
      function (x) {
        return Math.round(x / 2.0);
      }
    );
    return "rgb(" + mixedrgb.join(",") + ")";
};


const Home = () => {
    const [conditions, setConditions] = useState({
        lastdays: 30
    });

    const handleChange = ({target: {name, value}}) => setConditions({
        ...conditions,
        [name]: value
    });

    const url = END_POINTS.HISTORY;
    const [{data: historyData, loading, refreshData: refreshHistory}] = useAPI('get', url, {queryParam: conditions});
    const [displayData, setDisplayData] = useState([]);

    const search = () => refreshHistory();

    useMemo(() => {
        const datas = historyData.map((item = {}, idx) => ({
            id: idx + 1,
            country: item.country,
            cases: item.timeline ? item.timeline.cases || {} : {},
            color: randomColor()
        }));

        setDisplayData(datas);
    }, [historyData]);
    
    const days = displayData && displayData.length > 0 ? Object.keys(displayData[0].cases).map(s => stringToDate(s, DATE_FORMAT_DATA)).sort(sortData('', 'desc')) : [];
    const startDate = days.length > 0 ? dateToString(days[0], DATE_FORMAT_DATA) : undefined;
    const endDate = days.length > 0 ? dateToString(days[days.length-1], DATE_FORMAT_DATA) : undefined;

    const handleKeypress = e => {
        if (e.charCode === 13) {
            e.preventDefault();
            search();
        }
    }
    
    return (
        <>
            <div>
                <label for="lastdays">Lastdays</label>
                <input id="lastdays" name="lastdays" onChange={handleChange} onKeyPress={handleKeypress} value={conditions.lastdays} style={{marginLeft: '5px'}} />
                <button id="search" type="button" onClick={search} style={{marginLeft: '5px', cursor: 'pointer'}}>Search</button>
            </div>
            <br/>

            {
                loading
                    ?   <p>Loading...</p>
                    :   <Chart data={displayData} startDate={startDate} endDate={endDate} />
            }
        </>
    )
}

export default Home;