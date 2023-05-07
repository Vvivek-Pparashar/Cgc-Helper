import {cse1} from './cse/cse1'
import { cse2 } from './cse/cse2';
import { cse3 } from './cse/cse3';
import { cse4 } from './cse/cse4';
import { cse5 } from './cse/cse5';
import { cse6 } from './cse/cse6';
import { cse7 } from './cse/cse7';

const selectData = (course, sem)=>{
  if(course == "Computer Science"){
    if(sem == 1) return cse1
    else if(sem == 2) return cse2
    else if(sem ==3) return cse3
    else if(sem == 4) return cse4
    else if(sem == 5) return cse5
    else if(sem == 6) return cse6
    else return cse7
  }
}

export { selectData };
