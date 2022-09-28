import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function CategorySection(props) {
    const { data } = props;
    // console.log(data)
    return (
        <>
            <Box boxShadow='lg' p="10px" m="20px auto" w="70%">
                <Flex justifyContent="space-between" mb="5px">
                    <Text fontSize="md">CATEGORIES</Text>
                    <Link to='/FoodPage/categories.php'><Text fontSize="md">See More</Text></Link>
                </Flex>
                <Grid  templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)',lg:'repeat(5,1fr)' }} gap={6}>
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
};


export function YummySection(props) {
    const { data } = props;
    const see='a=Canadian';
    // console.log(data)
    return (
        <>
            <Box boxShadow='lg' p="10px" m="20px auto" w="70%">
                <Flex justifyContent="space-between" mb="5px">
                    <Text fontSize="md">Yummylicious Moments</Text>
                    <Link to={`/FoodPage/${see}`}><Text fontSize="md">See More</Text></Link>
                </Flex>
                <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)',lg:'repeat(5,1fr)' }} gap={6}>
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
};


export function DiscoverSection(props) {
    const { data } = props;
    const see='c=Seafood';
    // console.log(data)
    return (
        <>
            <Box boxShadow='lg' p="10px" m="20px auto" w="70%">
                <Flex justifyContent="space-between" mb="5px">
                    <Text fontSize="md">Discover Restaurants</Text>
                    <Link to={`/FoodPage/${see}`}><Text fontSize="md">See More</Text></Link>
                </Flex>
                <Grid  templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)',lg:'repeat(5,1fr)' }} gap={6}>
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
};
