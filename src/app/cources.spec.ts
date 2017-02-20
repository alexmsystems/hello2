import {DataService} from './main.service';
import {Cource} from './cource';


describe('Data  Service',() =>{

let service:DataService = new DataService();

    it('should return list', () => {
        //let cs = new Cource();
        let cources = service.getData();
        expect(cources.length).toBe(4);
    } )
});
