import { Box, Grid, Image, Text } from "@chakra-ui/react"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from 'react-router-dom';

export default function FoodPage() {
    const [data, setData] = useState([]);
    const { see } = useParams();
    // console.log(see)

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        let get = (see === "categories.php") ? axios.get(`https://www.themealdb.com/api/json/v1/1/${see}`) : axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${see}`);
        get.then((res) => {
            console.log(res)
            if (see === "categories.php") {
                setData(res.data.categories);
            }
            else {
                setData(res.data.meals);
            }
        })
            .catch((error) => {
                console.log(error);
            })
    }

    const GridCategory = () => {
        return (
            <>
                <Box boxShadow='lg' p="10px" m="20px auto" w="70%">
                    <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(5,1fr)' }} gap={6}>
                        {
                            data.map((ele) => {
                                return (
                                    <Box key={ele.strCategoryThumb} boxShadow='base'>
                                        <Image w="100%" src={ele.strCategoryThumb} alt={ele.strCategory} />
                                        <Text>{ele.strCategory}</Text>
                                    </Box>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </>
        )
    }

    const GridMeals = () => {
        return (
            <>
                <Box boxShadow='lg' p="10px" m="20px auto" w="70%">
                    <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(5,1fr)' }} gap={6}>
                        {
                            data.map((ele) => {
                                return (
                                    <Box key={ele.strMealThumb} boxShadow='base'>
                                        <Image w="100%" src={ele.strMealThumb} alt={ele.strMeal} />
                                        <Text>{ele.strMeal}</Text>
                                    </Box>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </>
        )
    }

    return (
        <>
            {
                (see === "categories.php") ? <GridCategory /> : <GridMeals />
            }
        </>
    )
};
