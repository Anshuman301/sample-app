import { Text, VStack } from "@chakra-ui/react"
import { useContext } from "react"
import { translate } from "../utils/text"
import { LangContext } from "../component/context/LangProvider"

export default function Content() {
    const {lang} = useContext(LangContext)
    return (
        <VStack>
            <Text>My Sample App</Text>
            <Text>{translate.PARAGRAPH_TEXT[lang as 'en' | 'hi']}</Text>
        </VStack>
    )
}