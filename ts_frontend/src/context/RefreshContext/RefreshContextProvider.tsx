import {Dispatch, SetStateAction, createContext, useState} from "react";

export interface RefreshCtx {
    refresh: number;
    setRefresh: Dispatch<SetStateAction<number>>;
}

export const RefreshContext = createContext<RefreshCtx>({refresh: 0, setRefresh: () => 0});
const RefreshContextProvider = ({children}: { children: React.ReactNode }) => {
    const [refresh, setRefresh] = useState(0);

    const refreshContext: RefreshCtx = {
        refresh: refresh,
        setRefresh,
    }

    return (
        <RefreshContext.Provider value={refreshContext}>
            {children}
        </RefreshContext.Provider>
    )
}

export default RefreshContextProvider;