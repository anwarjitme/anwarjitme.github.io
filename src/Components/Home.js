import { Box, Button, Container, Divider, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Typewriter from "typewriter-effect";
const About = () => {
  return (
    <section className="top">
      {/* <Flex> */}
      <div className="profile_container">
        <VStack className="name_div">
          <Text fontSize="sm" color="#545fc4">
            Hi, I am
          </Text>
          <HStack>
            <Text color="#fff" fontSize="2xl">
              Anwar
            </Text>
            <Image boxSize="50px" src="/images/Hand_Wave.gif" alt="ok" />
          </HStack>
          <Text fontSize={25} color="#545fc4">
            I am a
          </Text>
          <Typewriter
            className="typewriter"
            onInit={(typewriter) => {
              typewriter

                .typeString("MERN Stack Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Front-end Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Back-end Developer")
                .start()
                .pauseFor(1000)
                .start();
            }}
          />
          <HStack>
            <Button colorScheme="purple" size="xs" variant="outline">
              Download CV
            </Button>
            <Button colorScheme="purple" size="xs" px={7}>
              Contact
            </Button>
          </HStack>
        </VStack>
        <div className="divider">
          <Divider orientation="horizontal" />
        </div>

        <div className="pic_div">
          <img
            className="profile_pic"
            src="/images/profile_photo.jpg"
            alt="profile"
          />
        </div>
      </div>
      <Divider orientation="horizontal" />
      
    </section>
  );
}

export default About