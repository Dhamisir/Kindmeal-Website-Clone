import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FeatureItem = (props) => {
    const { link, title, comment } = props
    return (
        <>
            <GridItem justifyContent="center" boxShadow='xs' p='6' >
                <Image m="auto" src={link} alt="error" />
                <Text>{title}</Text>
                <Text fontSize="xs">{comment}</Text>
            </GridItem>
        </>
    )
}


export default function HomeFeatures() {
    return (
        <>
            <Box w="70%" m="auto">

                {/* promotion section */}
                <Heading mt="50px" fontSize="2xl" color="gray.600">Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform</Heading>
                <Flex mt="50px" justifyContent="center" alignItems="center">
                    <Text m="10px" color="gray.600">Brought to you by</Text>
                    <Image width="20%" src="https://www.kindmeal.my/images/logo-petfinder-v2.png" alt="PetFinder.my" />
                </Flex>
                <Text color="gray.600" fontSize="xl">Instant coupon & dining. No upfront coupon payment, booking or printing.</Text>

                {/* features */}
                <Grid mt="50px" templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)',lg:'repeat(4,1fr)' }} gap={6}>
                    <FeatureItem link="https://www.kindmeal.my/images/intro_deal.png" title="Get Great Deals" comment="Show our FREE digital coupons to instantly enjoy exciting deals" />
                    <FeatureItem link="https://www.kindmeal.my/images/intro_kindmoment.png" title="Share KindMoments" comment="Spread the joy by sharing your yummy dining moments" />
                    <FeatureItem link="https://www.kindmeal.my/images/intro_menu.png" title="Discover Delicious Food" comment="Explore the latest exquisite offerings and creative menus" />
                    <FeatureItem link="https://www.kindmeal.my/images/intro_friends.png" title="Meet Food Lovers" comment="Make new, compassionate friends and share great food tips" />
                </Grid>

                <Text fontSize="lg" color="gray.600" mt="50px" >Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
                    Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!
                </Text>

                <Link to="/signup"><Button mt="50px" p="50px" borderRadius="10px" colorScheme='red' fontSize={{base:"xl",md:"5xl"}} >Join KindMeal Now   </Button></Link>

                <Box mt="50px">
                    <Text fontSize="2xl" color="gray.600">Featured On</Text>
                    <Image src="https://www.kindmeal.my/images/media-feature2.png" alt="Featured-on" />
                </Box>
            </Box>
            <Box mt="50px" bg="gray.200">
                <Center>
                    <Image src="https://www.kindmeal.my/images/banner_whykindmeal.png" />
                </Center>
            </Box>
        </>
    )
};
