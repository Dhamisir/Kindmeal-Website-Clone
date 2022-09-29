import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useRef } from "react";
import LoadComponent from './Loading';

export default function Banner() {
    const [random, setRandom] = useState({});
    const [loading, setLoading] = useState(true);
    const ref = useRef(null);
    
    useEffect(() => {
        ref.current = setTimeout(getRandom, 5000)
        const cleanup = () => {
            clearTimeout(ref.current);
        }
        return cleanup;
    }, [random])

    const getRandom = () => {
        console.log("getRandom")
        setLoading(true);
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => { console.log(res.data.meals[0]); setRandom(res.data.meals[0]); setLoading(false) })
            .catch((error) => { console.log(error) })
    }

    const BannerComponent = () => {
        return (
            <>
                <Box pos="relative" w={{base:"90%",md:"70%"}} m="auto" h={{base:"200px",md:"500px"}}>
                    <Image w="100%" h="100%" src={random.strMealThumb} />
                    <Text w="100%" bgColor="blackAlpha.500" pos="absolute" bottom="0" color="white" p="10px" fontSize="xl">{random.strMeal}</Text>
                </Box>
            </>
        )
    }

    return (
        <>
            {(loading)?<LoadComponent/>:<BannerComponent/>}
        </>
    )
};
