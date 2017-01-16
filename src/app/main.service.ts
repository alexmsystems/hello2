import {Cource} from './cource';

export class DataService{
 
    private data: Cource[] = [
        {id: 1 , name: "Video Cource 1", courceDate: "01.01.2011", description: "Couurce 1 description", duration: 100},
        {id: 2 ,  name: "Video Cource 2", courceDate: "01.02.2011", description: "Couurce 2 description", duration: 200},
        {id: 3 ,  name: "Video Cource 3", courceDate: "01.03.2011", description: "Couurce 3 description", duration: 300},
        {id: 4 ,  name: "Video Cource 4", courceDate: "01.04.2011", description: "Couurce 4 description", duration: 400}		
    ];
    getData(): Cource[] {
         
        return this.data;
    }
    getItemData(id: number): Cource {
         
        return this.data[id-1];
    }
    addData(name: string, courceDate: number){
         
        this.data.push(new Cource(name, courceDate));
    }
}