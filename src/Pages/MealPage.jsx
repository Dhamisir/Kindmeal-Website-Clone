import { useEffect } from "react";
import axios from 'axios';
import { Button, Grid, GridItem, Image, Select, Text } from '@chakra-ui/react';
import { useState } from "react";
import LoadComponent from '../Components/Loading';
import { useRef } from "react";

export default function MealPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setLoading(true)
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => { console.log(res.data.categories); ref.current = res.data.categories; setData(res.data.categories); setLoading(false); })
            .catch((error) => { console.log(error) });
    }

    const handleChange=(event)=>{
        console.log(event.target.value);
        let value=event.target.value;
        if(value==="All")
        {
            setData(ref.current)
        }
        else
        {
            let filterData=ref.current.filter((ele)=>{
                        return ele.strCategory===value;
            });
            setData(filterData);
        }
    }

    const FilterCategory = () => {
        return (
            <>
                <Select w="70%" m="20px auto" onChange={handleChange} placeholder="All Categories">
                    <option value="All" >Show All</option>
                    {
                        ref.current.map((ele) => {
                            return (
                                <option value={ele.strCategory}>{ele.strCategory}</option>
                            )
                        })
                    }
                </Select>
            </>
        )
    }

    if (loading) {
        return <LoadComponent />
    }

    return (
        <>
            <FilterCategory />
            <Grid w="70%" m="50px auto" templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                {
                    data.map((ele) => {
                        return (
                            <GridItem boxShadow='lg' p="10px" key={ele.strCategoryThumb} w='100%'>
                                <Image m="auto" src={ele.strCategoryThumb} alt={ele.strCategory} />
                                <Text fontSize="2xl" bg="gray.300">{ele.strCategory}</Text>
                                <Text>{ele.strCategoryDescription}</Text>
                                <Button colorScheme='red'>Get Free Coupon</Button>
                            </GridItem>
                        )
                    })
                }
            </Grid>
        </>
    )
};
