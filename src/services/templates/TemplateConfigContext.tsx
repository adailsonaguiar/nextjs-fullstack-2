import React from "react";
import type {TemplateConfig} from "@src/services/templates/withTemplateConfig";

type TemplateConfigProviderProps = {
  value: TemplateConfig;
  children?: React.ReactNode;
}

const TemplateConfigContext = React.createContext({} as TemplateConfig);

export const TemplateConfigProvider = ({value, children}: TemplateConfigProviderProps) => {
   return (
     <TemplateConfigContext.Provider value={value}>
       {children}
     </TemplateConfigContext.Provider>
   )
}

export const useTemplateConfig = () => React.useContext(TemplateConfigContext)
