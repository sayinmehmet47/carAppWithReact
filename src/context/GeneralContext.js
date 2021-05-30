import { createContext, useReducer } from 'react';
import { favoriteReducer } from '../reducers/GeneralReducers';

export const GeneralContext = createContext();

const GeneralContextProvider = (props) => {
    const [favorites, dispatch] = useReducer(favoriteReducer,[{"id":"3","name":"Mustang"}])



  return (






    <GeneralContext.Provider value={{favorites,dispatch}}>

        {props.children}


    </GeneralContext.Provider>

  );
};

export default GeneralContextProvider;
