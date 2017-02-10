import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration_format'})
export class DurationFormat implements PipeTransform {
  transform(value: string, args: string[]): any {    
    
   if (!value) return value;
    if (Number(value)==0)

       return  "0 ч. 0 мин." 
     
    else 
       return String(Math.ceil(Number(value)/60)-1) + "ч. " + String(Number(value)%60) + "мин.";
  }
}