import {formatCurrency} from '../scripts/utils/money.js';

//Test Suite
console.log('test suite : formatCurrency');

//Basic Case
console.log('converts cents into dollars');
if(formatCurrency(2095) === '20.95'){
    console.log('Passed');
}
else{
    console.log('Failed');
}

//Edge Case
console.log('rounds up to nearest sent');
if(formatCurrency(2000.4) === '20.00'){
    console.log('Passed');
}
else{
    console.log('Failed');
}