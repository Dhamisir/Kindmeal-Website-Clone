import { Box, Grid, GridItem, ListItem, OrderedList, Text } from "@chakra-ui/react";

const FooterItem = () => {
    return (
        <>
            <GridItem w='100%'>
                <OrderedList listStyleType="none">
                    <ListItem><b>General</b></ListItem>
                    <ListItem>Consectetur adipiscing</ListItem>
                    <ListItem>Integer molestie</ListItem>
                    <ListItem>Facilisis aliquet</ListItem>
                    <ListItem>Consectetur adipiscing</ListItem>
                    <ListItem>Integer molestie</ListItem>
                    <ListItem>Facilisis aliquet</ListItem>
                </OrderedList>
            </GridItem>
        </>
    )
}

export default function Footer() {
    return (
        <>
            <Box bg="#2BB673">
                <Grid color="white" p="30px" w="70%" m="auto" templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)',lg:'repeat(5,1fr)' }} gap={6}>
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                </Grid>
                <Text w="70%" m="auto" color="white" fontSize="xs">Copyright © KindMeal.my, 2014 - 2022. All rights reserved.
                    This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</Text>
            </Box>
        </>
    )
};
