import {cse1} from './cse/cse1'
import { cse2 } from './cse/cse2';
import { cse3 } from './cse/cse3';
import { cse4 } from './cse/cse4';

const selectData = (course, sem)=>{
  if(course == "Computer Science"){
    if(sem == 1) return cse1
    else if(sem == 2) return cse2
    else if(sem ==3) return cse3
    else if(sem == 4) return cse4
    else if(sem == 5) return cse1
    else if(sem == 6) return cse1
    else return cse1
  }
}

export { selectData };
