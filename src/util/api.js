import {useState, useEffect} from 'react';
import {DateUtil} from './';

const {isDate, dateToString} = DateUtil;

const queryParamParser = param => {
    let paramString = Object.keys(param).map(name => {
        let value;
        
        if(isDate(param[name]))
            value = dateToString(param[name]);
        else
            value = param[name];

        return `${name}=${value}`;
    }).join('&');

    return '?' + paramString;
}

const useAPI = (method, url, params) => {
    const {queryParam, bodyParam, pathParam} = params;
    url += pathParam ? '/' + pathParam : '';
    url += queryParam ? queryParamParser(queryParam) : '';
    
    const fetchOption = {
        method: method,
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }

    if (method !== 'GET' && bodyParam) fetchOption['body'] = JSON.stringify(bodyParam);

    const [result, setResult] = useState({
        loading: false,
        data: [],
        error: ''
    });

    const [refresh, setRefresh] = useState(false);
    const refreshData = () => setRefresh(true);

    useEffect(() => {
        setResult({
            ...result,
            loading: true
        });

        fetch( url, fetchOption)
            .then(res => {       
                if (res.ok) {
                    if (res.status !== 204) {
                        return res.json();
                    }
                    else
                        return {
                            success: true
                        }
                }
                else {
                    let errorMsg = '';

                    if (res.status)
                        errorMsg += `[${res.status}]`;

                    if (res.statusText)
                        errorMsg += ` ${res.statusText}`;

                    throw(new Error(errorMsg));
                }
            })
            .then(data => {
                setResult({
                    loading: false,
                    success: true,
                    data
                })
            })
            .catch( json => {
                if( json.status === 'error' ) {
                    throw json;
                }
                
                return {
                    loading: false,
                    success: false,
                    error: json
                }
            });

        return () => {
            setResult({});
            setRefresh(false);
        }
    }, [refresh]);

    return [{...result, refreshData}];
}

export {
    useAPI
}