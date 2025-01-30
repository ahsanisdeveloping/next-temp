"use client";

import { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

const faqData = {
  consumers: [
    {
      question: "What is Popin for Consumers?",
      answer:
        "Popin is your guide to discovering local pop-up businesses! Explore food stalls, unique shops, events, and fitness classes in your neighborhood. Use the real-time map to see what’s nearby and never miss out on exciting local experiences. \n Follow your favorite vendors and stay connected as you explore everything your community has to offer!",
    },
    {
      question: "How do I find pop-ups and events?",
      answer:
        "Create an account to get started. You can use text or voice search to describe what you’re looking for, and results will appear based on your location and whether the business is currently live. Or, simply explore the map, and pop-ups will appear as you search!",
    },
    {
      question: "Can I purchase items directly through the platform?",
      answer:
        "Not yet! While the purchasing feature isn’t available in the MVP, it’s coming soon to make shopping with your favorite pop-ups even easier. Stay tuned!",
    },
    {
      question: "How can I receive updates from my favorite pop-ups?",
      answer:
        "Follow your favorite pop-ups on the platform to get real-time updates about their location, new offerings, and upcoming events—all in one place.",
    },
    {
      question: "What types of pop-ups can I find on Popin?",
      answer:
        "Popin showcases a variety of pop-ups, including food trucks, artisan markets, art galleries, and wellness events. The four main categories are Food & Drink, Entertainment, Health & Wellbeing, and Community & Business.",
    },
    {
      question: "How can I provide feedback on a pop-up I visited?",
      answer:
        "For now, Popin doesn’t have a review or rating feature. However, you can support pop-ups by sharing their profile with others and following them for updates!",
    },
  ],
  businesses: [
    {
      question: "What is Popin for Businesses?",
      answer:
        "Popin is a web platform designed to help your pop-up business stand out and connect with your local community. Create a profile to showcase your business, share updates, and let customers find you easily on our real-time interactive map. \n It’s your go-to tool to grow your reach and build a loyal following!",
    },
    {
      question: "How do I get my pop-up business listed on Popin?",
      answer:
        "Sign up on the Popin website, create your profile, add your business details, and submit it for approval. Once approved, your business will be listed on our platform, and you’ll have a 1-week free trial to explore all the features before purchasing credits or a subscription.",
    },
    {
      question:
        "What features does Popin offer to help promote my pop-up business?",
      answer:
        "Popin places your business on a real-time interactive map, making it easy for people nearby to discover you. Your customers can also follow your pop-up, helping you build a community and keep them updated on your next moves. \n While digital sales aren’t available yet, they’ll be coming soon, giving you even more ways to reach and serve your audience.",
    },
    {
      question: "Is there a fee to join Popin as a business user?",
      answer:
        "After your free one-week trial, you’ll need to purchase credits or a subscription to list your business on Popin and use the platform.",
    },
    {
      question: "How can I measure the impact of my presence on Popin?",
      answer:
        "Popin provides analytics tools to track visitor interactions and engagement with your profile. While purchase tracking isn’t available yet, insights will grow as the platform evolves to give you even more ways to measure your success.",
    },
    {
      question: "Can I update my pop-up’s profile and offerings regularly?",
      answer:
        "Yes, you can update your profile and offerings anytime to keep your audience informed about what’s new and available.",
    },
  ],
  general: [
    {
      question: "What is Popin?",
      answer:
        "Popin is your gateway to discovering and promoting local pop-up businesses! For consumers, it’s an easy way to explore food stalls, shops, events, and fitness classes nearby using our real-time interactive map. \n For businesses, it’s a platform to showcase what you do, connect with customers, and grow your community. Share updates, gain visibility, and engage with your audience—all from one easy-to-use platform, optimized for web and mobile.",
    },
    {
      question: "Where is Popin available?",
      answer:
        "Popin is available in multiple cities across the country. Check out the platform to see active pop-ups in your area!",
    },
    {
      question:
        "How does Popin ensure the quality of pop-ups featured on the platform?",
      answer:
        "Every pop-up that registers on Popin goes through a review process to ensure they meet our standards for quality and service.",
    },
    {
      question: "Is there customer support available for Popin users?",
      answer:
        "Yes, Popin offers customer support through the platform. If you have questions or run into any issues, our team is here to help.",
    },
    {
      question: "How can I stay informed about the latest updates from Popin?",
      answer:
        "Sign up for our newsletter and follow us on social media to hear about new features, city launches, and special announcements.",
    },
  ],
};

export default function FAQSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  // 🌙 Dark Mode Colors
  const bg = useColorModeValue("white", "gray.900"); // Background
  const textColor = useColorModeValue("black", "whiteAlpha.900"); // Text color
  const tabBorder = useColorModeValue("#ff7e47", "#ff7e47"); // Gradient border for tabs
  const dividerColor = useColorModeValue("#ff7e47", "gray.500"); // Divider color
  const accordionBg = useColorModeValue("white", "gray.800"); // Accordion background

  return (
    <Box
      maxW="900px"
      mx="auto"
      py={10}
      px={[4, 6, 8]}
      bg={bg}
      borderRadius="lg"
    >
      {/* Title */}
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        mb={6}
        color={tabBorder}
        textAlign="center"
      >
        Frequently Asked Questions
      </Text>

      {/* Tabs */}
      <Tabs index={selectedTab} onChange={setSelectedTab} variant="unstyled">
        <TabList
          justifyContent="center"
          borderBottom="1px solid"
          borderColor={dividerColor}
          pb={2}
          flexWrap="wrap"
        >
          <Tab
            _selected={{
              color: tabBorder,
              borderBottom: `2px solid ${tabBorder}`,
            }}
            px={[2, 4]}
            fontSize={["sm", "md"]}
            _focus={{ outline: "none", boxShadow: "none" }}
            _focusVisible={{ outline: "none", boxShadow: "none" }}
          >
            For Consumers
          </Tab>
          <Tab
            _selected={{
              color: tabBorder,
              borderBottom: `2px solid ${tabBorder}`,
            }}
            px={[2, 4]}
            fontSize={["sm", "md"]}
            _focus={{ outline: "none", boxShadow: "none" }}
            _focusVisible={{ outline: "none", boxShadow: "none" }}
          >
            For Businesses
          </Tab>
          <Tab
            _selected={{
              color: tabBorder,
              borderBottom: `2px solid ${tabBorder}`,
            }}
            px={[2, 4]}
            fontSize={["sm", "md"]}
            _focus={{ outline: "none", boxShadow: "none" }}
            _focusVisible={{ outline: "none", boxShadow: "none" }}
          >
            General FAQs
          </Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanels>
          <TabPanel>
            <FAQList
              faqs={faqData.consumers}
              accordionBg={accordionBg}
              dividerColor={dividerColor}
            />
          </TabPanel>
          <TabPanel>
            <FAQList
              faqs={faqData.businesses}
              accordionBg={accordionBg}
              dividerColor={dividerColor}
            />
          </TabPanel>
          <TabPanel>
            <FAQList
              faqs={faqData.general}
              accordionBg={accordionBg}
              dividerColor={dividerColor}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

// Reusable FAQ List Component
function FAQList({
  faqs,
  accordionBg,
  dividerColor,
}: {
  faqs: { question: string; answer: string }[];
  accordionBg: string;
  dividerColor: string;
}) {
  return (
    <Accordion allowToggle>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} border="none">
          <h2>
            <AccordionButton
              _expanded={{ color: "#ff7e47", fontWeight: "bold" }}
              bg={accordionBg}
              py={[2, 3]}
              px={[2, 4]}
              borderRadius="md"
              fontSize={["sm", "md"]}
              _focus={{ outline: "none", boxShadow: "none" }}
              _focusVisible={{ outline: "none", boxShadow: "none" }}
            >
              <Box flex="1" textAlign="left">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize={["sm", "md"]}>
            {faq.answer}
          </AccordionPanel>
          <Divider borderColor={dividerColor} />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
