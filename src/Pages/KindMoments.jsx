import { Box, Flex, Grid, GridItem, Heading, Image, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaHeart } from 'react-icons/fa';
import LoadComponent from "../Components/Loading";

export default function KindMoments() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        console.log("check")
        setLoading(true);
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((res) => { ref.current = res.data.meals; setData(res.data.meals); setLoading(false) })
            .catch((error) => { console.log(error) })
    }


    if (loading) {
        return <LoadComponent />
    }

    const handleChange = (event) => {
        // console.log(event.target.value)
        let value = event.target.value;
        if (value == "htl") {
            let newData = [...ref.current];
            let sortData = newData.sort((a, b) => b.idMeal - a.idMeal);
            // console.log("htl",sortData)
            // console.log("ref",ref.current)
            setData(sortData)
        }
        else if (value == "lth") {
            let newData = [...ref.current];
            let sortData = newData.sort((a, b) => a.idMeal - b.idMeal);
            // console.log("lth",sortData)
            // console.log("ref",ref.current)
            setData(sortData)
        }
        else {
            setData(ref.current)
        }
    }

    const SortRating = () => {
        return (
            <>
                <Select w="70%" m="20px auto" onChange={handleChange} placeholder="Sort Rating">
                    <option value="All" >Show All</option>
                    <option value="htl">Sort Rating High To Low</option>
                    <option value="lth">Sort Rating Low To High</option>
                </Select>
            </>
        )
    }

    return (
        <>
            {/* header */}
            <Box bg="gray.100">
                <Box w={{ base: "90%", sm: "70%" }} p={{ base: "10px", sm: "50px" }} m="auto">
                    <Heading>KindMoments   |  Saving Lives with Yummy Photos</Heading>
                    <Text>Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. Share your interesting KindMoments, and build your own fans and followers to encourage kind, healthy meals.</Text>
                    <Text>
                        Download our mobile app to easily showcase your masterpieces and interact with food lovers.
                        Get started sharing your tasty moments now.</Text>
                </Box>
            </Box>

            {/* sort Filter */}
            <SortRating />

            {/* ShowData */}

            <Grid w="70%" m="50px auto" templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
                {
                    data.map((ele) => {
                        return (
                            <>
                                <GridItem key={ele.strMealThumb} p="10px 0px" boxShadow='lg' w='100%'>
                                    <Image w="100%" src={ele.strMealThumb} alt={ele.strMeal} />
                                    <Text p="5px"><b>{ele.strMeal}</b></Text>
                                    <Flex justifyContent="center" alignItems="center">
                                        <FaHeart color="red" />
                                        <Text m="10px">{ele.idMeal}</Text>
                                    </Flex>
                                </GridItem>
                            </>
                        )
                    })
                }
            </Grid>
        </>
    )
};
