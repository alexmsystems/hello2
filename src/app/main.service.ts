import {Injectable} from '@angular/core';
import {Cource} from './cource';

@Injectable()
export class DataService{
    private currenUser: string = "";        
    private data: Cource[] = [
        {id: 1 ,  name: "Video Cource 1", courceDate: "01.01.2011", description: "Couurce 1 description", duration: 100},
        {id: 2 ,  name: "Video Cource 2", courceDate: "01.02.2011", description: "Couurce 2 description", duration: 200},
        {id: 4 ,  name: "Video Cource 3", courceDate: "01.03.2011", description: "Couurce 3 description", duration: 300},
        {id: 5 ,  name: "Video Cource 4", courceDate: "01.04.2011", description: "Couurce 4 description", duration: 400}		
    ];
    getData(): Cource[] {
        
        return this.data;
    }
    getItemData(id: number): Cource {
        var getCources: Cource[];       
        getCources = this.data.filter(function( obj ) { return obj.id == id;});
        return getCources[0];
    }
    addData(name: string, courceDate: string, description: string, duration: number ){        
        var newId: number;
        var tempCource: Cource;
        tempCource = this.data[this.data.length-1];
        newId = tempCource.id+1;
        this.data.push(new Cource(newId,name, courceDate,description,duration));
    }
    editData(id: number, name: string, courceDate: string, description: string, duration: number ){     
       
      var editId;
      var editCource: Cource;
      var editCources: Cource[];      

      for (var i in this.data) {
        if (this.data[i].id == id) {
            editId = i;
            }
        }

      this.data[editId].name = name;
      this.data[editId].courceDate = courceDate;
      this.data[editId].description = description;
      this.data[editId].duration = duration;
      
    }
    deleteData(id: number)
    {
         var deleteId;
               for (var i in this.data) {
        if (this.data[i].id == id) {
            deleteId = i;
            }
        }
         this.data.splice(Number(deleteId), 1);
    }

    isAuth()
    {
        if (this.currenUser=="")
          return false;
        else
          return true;
    }
    logIn(name: string, pass:string)
    {
        if (name == "q" && pass == "q")
        this.currenUser=name;        
    }
}