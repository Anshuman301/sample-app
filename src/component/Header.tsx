import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/react.svg"
import { Box, Button, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LangContext } from "./context/LangProvider";
import { useNavigate } from "react-router";
import { LangType, translate } from "../utils/text";

export default function Header() {
    const {setLang, lang} = useContext(LangContext)
    const navigate = useNavigate()
    return (
        <HStack justifyContent={'space-between'} borderRadius={'10px'} alignItems={'center'} height={'72px'} px={'20px'} boxShadow={'1px 2px 4px white'}>
            <Box onClick={() => navigate('/')}>
                <Image src={logo} />
            </Box>
            <HStack columnGap={'30px'}>
                <Text onClick={() => navigate('blogs')}>{translate.BLOG[lang as LangType]}</Text>
                <Text onClick={() => navigate('products')}>{translate.PRODUCT[lang as LangType]}</Text>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                       {lang  === 'en' ? 'English': 'Hindi'}
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => setLang('en')}>English</MenuItem>
                        <MenuItem onClick={() => setLang('hi')}>Hindi</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </HStack>
    )
}