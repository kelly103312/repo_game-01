import React, { createContext, useContext, useEffect, useState } from 'react';

// Crear el contexto de vidas

export const LifesContext = createContext();

export const useLifes = () => {
    const context = useContext(LifesContext)
    if(!context){
        console.error("No existe el contexto");
        return;
    }
  return context;
}

// Proveedor de contexto
export const LifesProvider = ({ children }) => {
    const [lifes, setLifes] = useState(3);

    const restarLifes = () => {
      setLifes(lifes - 1);
      console.log(lifes);
      return lifes;
    };
    console.log(lifes);


  return (
    <LifesContext.Provider value={({ lifes, restarLifes })}>
      {children}
    </LifesContext.Provider>
  );
};

