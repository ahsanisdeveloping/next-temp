import { Box, Image,Text,Heading,UnorderedList,ListItem } from "@chakra-ui/react";

const FounderVision = () => {
  return (
    <Box p={20}>
      <Box display="grid" gridColumn={3}  gap={10}>
        <Image src="/landingpage/founder.jpg" height="auto" width={300} rounded="xl"  />
        <Box >
            <Text>Helping people unlock their potential and bring their vision to life has always been my passion. I love encouraging people to uncover that special something within them—their unique contribution to the world—and supporting them in making it a reality.
            </Text>
            <Text>Over the years, this passion has led me to help in all sorts of ways. Whether it was encouraging young people to dream big during my time as a youth worker, becoming a photographer during the rise of a friend’s band, or designing labels for the mango pepper sauce of my favourite Caribbean street food vendor, I’ve always found joy in seeing others succeed.</Text>
        </Box>
      </Box>
      <Box><Text>A recurring challenge I’ve witnessed is this: how can small businesses or creators bring their ideas to the market sustainably, without a massive advertising budget? That question became the driving force behind <strong>Popin</strong>—a platform built to level the playing field for small businesses, creators, and entrepreneurs.</Text></Box>
      <Box><Heading>The Spark Behind Popin
      </Heading>
      <Text>Over the past 20 years, I’ve worked in technology across a range of industries, from charitable organisations to corporate giants like Visa. These experiences have shaped my understanding of innovation, community, and how technology can empower people when used thoughtfully.</Text>
      <Text>My inspiration for Popin came during my time working on Lower Marsh in Waterloo, home to one of the oldest markets in the country. The market was alive with creativity and culture—street food vendors sharing recipes and flavours, artisans showcasing their craftsmanship, and communities gathering to celebrate their passions.</Text>
      <Text>While I loved the vibrancy of the market, I couldn’t help but notice a challenge: not everyone knew when or where to find these amazing businesses. The excitement of these moments often passed unnoticed by many, only for people to discover them later on social media—the afterglow of local excitement.</Text>
      <Text>
      This realisation sparked an idea: what if there were a way to connect people to the exciting things happening around them in real time? And what if small businesses didn’t need huge advertising budgets to reach their community? That’s where Popin was born—a platform that seamlessly connects the physical to the digital, helping people discover what’s “Popin” around them effortlessly.</Text></Box>
      <Box>
        <Heading>A Vision for the Future</Heading>
        <Text>At its core, Popin is about creating connections. I believe that every product, service, or business has a natural community of customers—it’s just a matter of helping them find each other. Popin’s mission is to bridge that gap by making discovery effortless for both businesses and consumers.</Text>
        <Text>The platform is designed to:</Text>
        <UnorderedList>
            <ListItem>Highlight the unique artistry and craftsmanship that people pour into their work.
            </ListItem>
            <ListItem>Build stronger communities by keeping money circulating locally, rather than funnelling it into the hands of businesses with the biggest ad budgets.
            </ListItem>
            <ListItem>Empower entrepreneurs to focus on what they do best—creating—while Popin helps them build their community and grow their reach.</ListItem>
        </UnorderedList>
        <Text>I want Popin to be a place where businesses thrive because of their creativity, innovation, and dedication—not because they can outspend the competition.</Text>
      </Box>
      <Box>
        <Heading>What Drives Me</Heading>
        <Text>At the heart of Popin is my belief in family. To me, family means connection, support, and shared growth. These are the same values I want Popin to embody—a space where small businesses and their customers feel like they’re part of a community that supports and uplifts them.
        </Text>
        <Text>I’m also deeply motivated by my view of innovation as a force for good. I see AI not as a replacement for human ingenuity, but as a tool to enhance it. With Popin, I want to show how technology can empower entrepreneurs to focus on their artistry, their craftsmanship, and what makes them unique, while we take care of connecting them to their community.</Text>
      </Box>
    </Box>
  );
};

export default FounderVision;
