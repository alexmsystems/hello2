
//import {it, describe, expect, beforeEach, inject} from '@angular/testing';

import {DurationFormat} from './duration.pipe';


describe('MyPipe Tests', () => {
    let pipe:DurationFormat;
 
    beforeEach(() => {
        pipe = new DurationFormat();
    });
    it('Should capitalize all words in a string', () => {
        var result = pipe.transform('0', null);
 
        expect(result).toEqual('0 ч. 0 мин.');
    });
});
/*

describe('DataService',() =>{
    it('should return list', () => {
        let cs = new DurationFormat();
        
        
    } )
});

*/