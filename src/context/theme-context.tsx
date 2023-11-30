import { 
    createContext,
    useContext,
    useReducer,
    useEffect 
} from "react";

import themeReducer from "./themeReducer";

const themeContext = createContext({
    themeState: {
        primary: 'color-6',
        background: 'bg-2'
    },
    themeHandler: (buttonClassName: string) => {
        console.log(buttonClassName)
    }
})

type Props = {
    children: React.ReactNode
}

const initialThemeState = localStorage.getItem('themeSettings') ?
    JSON.parse(localStorage.getItem('themeSettings') || '{}') :
    {
        primary: 'color-6',
        background: 'bg-2'
    }

export const ThemeContextProvider = (props: Props) => {

    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState)

    const themeHandler = (buttonClassName: string) => {
        dispatchTheme({
            type: buttonClassName
        })
    }

    useEffect(() => {
        localStorage.setItem('themeSettings', JSON.stringify(themeState))
    }, [themeState.primary, themeState.background])

    return(
        <themeContext.Provider
            value={{themeState, themeHandler}}
        >
            {props.children}
        </themeContext.Provider>
    )
}

const useThemeContext = () => useContext(themeContext)

export default useThemeContext