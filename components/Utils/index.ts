
import { TYPE} from "../DataProvider";

export const getCountWithKey = (chartOption:string,data:TYPE[])  => {
      const map = new Map();
      data.forEach(key => {
        let state ; 
        if(chartOption === 'State-wise'){
          state = key.State ; 
        }
        else if(chartOption === 'Year-wise'){
          state = key['Date of Registration']
        }
        else {
          state=key['Sector Type']
        }
        if(map.has(state))
        { const currentValue = map.get(state);
          map.set(state,currentValue +1);
        }
        else {
          map.set(state,1);
        }
      });
     return Array.from(map,([states,noOfSectors]) => ({"states":states,'noOfSectors':noOfSectors}))
    }


export const  getStatesUnderSociety = (society:string,data:TYPE[]) => {
      let states :string = "" ;
        data.forEach((value)=>{
        if(value["Name of Society"] === society)
        states =  value["Area of Operation"] ; 
        
      })
      let States : string[] = states.split(',')
      States = States.map((state)=>{
        return state.trim();
      })
      let object:any ={}; 
      States.forEach((state)=>{
        object[state] = {value:1500} ;
      })
      return object ;

} 

export const getSociety = (data:TYPE[]) => {
  return data.map((datum)=>{
    return datum["Name of Society"];
  })
}