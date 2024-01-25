import { Box, Button, HStack, Input, Modal, ModalBody, ModalContent, Text, VStack } from "@chakra-ui/react";
import { ChangeEvent, useContext, useState } from "react";
import { LangContext } from "./context/LangProvider";
import { LangType, translate } from "../utils/text";

export default function Footer() {
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState({name:'', email: ''})
    const {lang} = useContext(LangContext)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setInput(prev => ({...prev, [name]: value}))
    }
    return (
        <>
        <HStack justify={'flex-end'} px={'30px'} columnGap={'30px'} position={'absolute'} bottom='0' width={'calc(100% - 60px)'}>
            <Box>
                <Button onClick={() => setOpen(true)}>{translate.CONTACT_US[lang as LangType]}</Button>
            </Box>
            <Box>
            <Button as='a' href="mailto:anshumanprsd@gmail.com">{translate.EMAIL_US[lang as LangType]}</Button>
            </Box>
        </HStack>
        <Modal closeOnEsc isOpen={open} onClose={() => setOpen(false)} size={'sm'} colorScheme="whiteAlpha" isCentered >
        {/* <ModalOverlay/> */}
        <ModalContent>
            <ModalBody>
                <VStack width={['80%', '80%', '50%']} pos={'absolute'} top={'200px'} left={'25%'}  height={['200px','200px', '400px']} bgColor={'skyblue'} borderRadius={'10px'}>
                    <Box>
                        <Text>{translate.NAME[lang as LangType]}</Text>
                        <Input placeholder="Enter name" name="name" type="text" onChange={handleChange}/>
                    </Box>
                    <Box>
                        <Text>{translate.EMAIL[lang as LangType]}</Text>
                        <Input placeholder="Enter email" type="email" name='email' onChange={handleChange}/>
                    </Box>
                    <Button as= 'a' href={`mailto:anshumanprsd@gmail.com?subject=FormDetails&body=Name:${input?.name}\nEmail:${input.email}`} >{translate.SUBMIT[lang as LangType]}</Button>
                </VStack>
            </ModalBody>
        </ModalContent>
    </Modal>
    </>

    )
}