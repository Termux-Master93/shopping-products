//investigates singleton
import { createContext, useState } from "react";
/* 1=>Create the Context */
export const FiltersContext = createContext()
/** 2=>create the provider, for proveer the context  the componets */
export function FiltersProvider({ children }) {
    const [filter, setFilter] = useState({ //initial status the  filters
        category: 'all',
        minPrice: 10
    })
    return (
        <FiltersContext.Provider value={{ //passt the sttaus and update status   the status the FiltersProvider
            filter,
            setFilter,
        }}>
            {children}
        </FiltersContext.Provider >
    )
}
