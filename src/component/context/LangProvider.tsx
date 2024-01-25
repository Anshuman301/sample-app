import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react"

interface LangValueType {
    lang: string,
    setLang: Dispatch<SetStateAction<string>>
}
export const LangContext = createContext<LangValueType>({
    lang: 'en',
    setLang: () => {}
})
interface Props {
    children: ReactElement
}
export default function LangProvider({children}: Props) {
    const [lang, setLang]  = useState(localStorage.getItem('lang') || 'en')
    return (
        <LangContext.Provider value={{
            lang, setLang
        }}>
            {children}
        </LangContext.Provider>
    )
}