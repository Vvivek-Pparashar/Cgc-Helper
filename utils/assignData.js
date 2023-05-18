import {cse1} from './cse/cse1'
import { cse2 } from './cse/cse2';
import { cse3 } from './cse/cse3';
import { cse4 } from './cse/cse4';
import { cse5 } from './cse/cse5';
import { cse6 } from './cse/cse6';
import { cse7 } from './cse/cse7';
import { ele1 } from './electrical/ele1';
import { ele2 } from './electrical/ele2';
import { ele3 } from './electrical/ele3';
import { ele4 } from './electrical/ele4';
import { ele5 } from './electrical/ele5';
import { ele6 } from './electrical/ele6';
import { ele7 } from './electrical/ele7';
import { it1 } from './it/it1';
import { it2 } from './it/it2';

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

  if(course == "Electronics"){
    if(sem == 1) return ele1
    else if(sem == 2) return ele2
    else if(sem ==3) return ele3
    else if(sem == 4) return ele4
    else if(sem == 5) return ele5
    else if(sem == 6) return ele6
    else return ele7
  }

  if(course == "Information Tehnology"){
    if(sem == 1) return it1
    else if(sem == 2) return it2

    /// because no data available for it that's why used cse data(also in cgc assign)
    else if(sem ==3) return cse3
    else if(sem == 4) return cse4
    else if(sem == 5) return cse5
    else if(sem == 6) return cse6
    else return cse7
  }

  if(course == "BCA"){
    if(sem == 1) return ele7
    else if(sem == 2) return ele7

    /// because no data available for it that's why used cse data(also in cgc assign)
    else if(sem ==3) return ele7
    else if(sem == 4) return ele7
    else if(sem == 5) return ele7
    else if(sem == 6) return ele7
    else return ele7
  }

  if(course == "Mechanical"){
    if(sem == 1) return ele7
    else if(sem == 2) return ele7

    /// because no data available for it that's why used cse data(also in cgc assign)
    else if(sem ==3) return ele7
    else if(sem == 4) return ele7
    else if(sem == 5) return ele7
    else if(sem == 6) return ele7
    else return ele7
  }
}

export { selectData };
