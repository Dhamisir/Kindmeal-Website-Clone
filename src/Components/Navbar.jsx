import { Grid, GridItem, Image, Button, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Text, Box } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa"
import { NavLink } from 'react-router-dom';


const navLinkStyles = ({ isActive }) => {
    return {
        backgroundColor: isActive ? '#229760' : '#2BB673',
        padding: isActive ? '5px 20px' : '5px 20px',
    }
}

const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Link onClick={onOpen}>Singup</Link>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Image src='https://www.kindmeal.my/images/logo-kindmeal.png' alt='Dan Abramov' />
                        <center>
                            <Text>Join KindMeal For FREE Now</Text>
                            <Text fontSize='sm'>Please select the type of membership to proceed</Text>
                        </center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex border='1px' borderColor='gray.200' p="5px" direction="column">
                            <Flex>
                                <Image src='https://www.kindmeal.my/images/join_normal.png' alt='Food Lover' />
                                <Box m="0px 10px">
                                    <Text fontSize="lg"><b>Food Lover</b></Text>
                                    <Text fontSize="sm">Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</Text>
                                </Box>
                            </Flex>
                            <Box></Box>
                        </Flex>
                        <Flex mt="10px" border='1px' borderColor='gray.200' p="5px" direction="column">
                            <Flex>
                                <Image src='https://www.kindmeal.my/images/join_shop.png' alt='Food Lover' />
                                <Box m="0px 10px">
                                    <Text fontSize="lg"><b>
                                        Restaurant / Shop Owner</b></Text>
                                    <Text fontSize="sm">List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. </Text>
                                </Box>
                            </Flex>
                            <Box></Box>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost'>Forgot Password</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default function Navbar() {
    return (
        <>
            <Grid p="10px" justifyContent="space-between" templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)' }} w="70%" m="auto" gap={2} alignItems="center">
                <GridItem>
                    <Link href="/" ><Image src='https://www.kindmeal.my/images/logo-kindmeal.png' alt='Dan Abramov' /></Link>
                </GridItem>
                <GridItem>
                    <Flex justifyContent="center">
                        <Link m="10px" href="https://www.facebook.com/KindMeal.my" isExternal><FaFacebook fontSize="40px" color="#CECECE" /></Link>
                        <Link m="10px" href="https://twitter.com/KindMeal" isExternal><FaTwitter fontSize="40px" color="#CECECE" /></Link>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Button colorScheme='blue' border="none" m="5px" bg="#214A83" color="white" p="5px 20px" pr="15px" borderRadius="5px" >Facebook</Button>
                    <Button colorScheme='grey' border="none" m="5px" bg="#555555" color="white" p="5px 20px" pr="15px" borderRadius="5px">Email</Button>
                    <Signup />
                </GridItem>
            </Grid>

            <Box bg="#2BB673" p="0px 0px">
                <Flex direction={{ base: "column", md: "row" }} color="white" w="70%" m="auto" justifyContent="space-around">
                    <NavLink style={navLinkStyles} to="/" end><Link fontSize="xl">Home</Link></NavLink>
                    <NavLink style={navLinkStyles} to="/mealpage" end><Link fontSize="xl">MealPage</Link></NavLink>
                    <NavLink style={navLinkStyles} to="/kindmoments" end><Link fontSize="xl">KindMoments</Link></NavLink>
                    <NavLink style={navLinkStyles} to="/help" end><Link fontSize="xl">Help</Link></NavLink>
                </Flex>
            </Box>
        </>
    )
};
