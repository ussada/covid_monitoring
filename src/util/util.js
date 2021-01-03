import {DateUtil} from './';

const sortData = (fields, sortType = 'asc') => {
    return (a, b) => {
        const sort = name => {
            if (typeof a === 'object' && !DateUtil.isDate(a)) {
                if (a[name] < b[name])
                return -1;

            if (a[name] > b[name])
                return 1;
            }
            else {
                if (a < b)
                    return -1;
                
                if (a > b)
                    return 1;
            }
        }

        let result = 0;
        
        if (Array.isArray(fields)) {
            fields.map(name => result = sort(name));
        }
        else if (typeof fields === 'string')
            result = sort(fields);
        
        return sortType === 'asc' ? result : -result;
    }
}

const toNumber = value => {
    switch(typeof value) {
        case 'string':
            return Number.isNaN(Number(value)) ? value : Number(value);
  
        default :
            return value;
    }
}

const formatCurrency = (x, decimal = 2) => {
    if(isNaN(x))
      x = 0;
    
    const value = toNumber(x);
    return value.toFixed(decimal).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export {
    sortData,
    toNumber,
    formatCurrency
}