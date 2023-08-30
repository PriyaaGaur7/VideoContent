import React from 'react'
import { Box, Container, Heading, Img, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.avif";
import img2 from "../assets/2.avif";
import img3 from "../assets/3.avif";
import img4 from "../assets/4.avif";
import img5 from "../assets/5.jpg";

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container maxW={'container.xl'} minH={'100vh'}
            p={'16'}>
                <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>
                    Services
                </Heading>
                <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column", "row"]}>

                    <Img src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg"}/>
                    <Text letterSpacing=
                    {"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam modi, repudiandae vel consequuntur, aspernatur sit magni, quo quis exercitationem ipsum amet! Ea aliquid totam assumenda rem nihil labore harum fugiat facere voluptatibus impedit vitae, tempore maxime veritatis nostrum ex in iusto neque nesciunt id aspernatur perferendis unde dolorem. Animi aliquid natus omnis fugit blanditiis. Magni, ipsam maxime. Est, eius! Molestias nihil iure odit eveniet, ab quas nisi quod, quae suscipit atque quia. Ipsum, sapiente soluta! Odit error quia quibusdam nihil libero eum cum corrupti atque sequi totam repellat dicta, animi ea vero, beatae voluptatem dolorem esse inventore qui ducimus!
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>

        <Box w={"full"} h={"100vh"}>
            <Img src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Img src={img2} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Img src={img3} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}{...headingOptions}>
                Gaming On Console
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Img src={img4} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}{...headingOptions}>
               Night Life is Cool
            </Heading>
        </Box>

    </Carousel>
)


export default Home