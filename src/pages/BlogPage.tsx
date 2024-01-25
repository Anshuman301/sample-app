import { Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type BlogType = {
    title: string;
    details: string;
}
export default function BlogPage() {
    const [data, setData] = useState<BlogType | null>(null)
    useEffect(() => {
        (async function fetchData() {
            const resp = await fetch('http://localhost:9001/blogs', {
                method: 'GET'
            })
            const data = await resp.json();
            setData(data)
        })()
    }, [])
    if(data)
    return (
        <VStack>
        <Text>{data.title}</Text>
                <Text>{data.details}</Text>
        </VStack>
    )
    return null;
}