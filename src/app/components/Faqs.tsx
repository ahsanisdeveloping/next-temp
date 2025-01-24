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
} from "@chakra-ui/react";

const faqData = {
  consumers: [
    { question: "What is Popin for Consumers?", answer: "Popin helps consumers discover unique pop-up events near them." },
    { question: "How do I find pop-up events near me?", answer: "You can use the Popin app's location-based search to find events." },
    { question: "Can I purchase items directly through the app?", answer: "Yes, Popin allows in-app purchases for certain vendors." },
    { question: "How can I receive updates from my favorite pop-ups?", answer: "You can follow pop-ups and enable notifications in the app." },
    { question: "What types of pop-ups can I expect to find on Popin?", answer: "Food, fashion, wellness, and more!" },
    { question: "How can I provide feedback on a pop-up I visited?", answer: "You can leave a review on the event page within the app." },
  ],
  businesses: [
    { question: "How can businesses register on Popin?", answer: "Businesses can sign up through our vendor portal." },
    { question: "What benefits does Popin offer for businesses?", answer: "Increased visibility, customer engagement, and analytics." },
    { question: "Can I track the performance of my pop-ups?", answer: "Yes, Popin provides insights on sales and foot traffic." },
    { question: "How do I promote my pop-up on Popin?", answer: "You can use featured listings and sponsored ads to increase reach." },
  ],
  general: [
    { question: "Is Popin free to use?", answer: "Yes, Popin is free for consumers, while vendors have paid plans." },
    { question: "What locations does Popin support?", answer: "Popin is available in multiple cities, check our website for details." },
    { question: "How do I contact support?", answer: "You can contact support via the help section in the app." },
  ],
};

export default function FAQSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  const getFAQs = () => {
    if (selectedTab === 0) return faqData.consumers;
    if (selectedTab === 1) return faqData.businesses;
    return faqData.general;
  };

  return (
    <Box maxW="800px" mx="auto" py={10}>
      {/* Title */}
      <Text fontSize="2xl" fontWeight="bold" mb={4} color="orange.500">
        Frequently Asked Questions
      </Text>

      {/* Tabs */}
      <Tabs index={selectedTab} onChange={setSelectedTab} variant="unstyled">
        <TabList >
          <Tab _selected={{ color: "#ff7e47", borderBottom: "2px solid #ff7e47" }} px={4}>
            For Consumers
          </Tab>
          <Tab _selected={{ color: "#ff7e47", borderBottom: "2px solid #ff7e47" }} px={4}>
            For Businesses
          </Tab>
          <Tab _selected={{ color: "#ff7e47", borderBottom: "2px solid #ff7e47" }} px={4}>
            General FAQs
          </Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanels>
          <TabPanel>
            <FAQList faqs={faqData.consumers} />
          </TabPanel>
          <TabPanel>
            <FAQList faqs={faqData.businesses} />
          </TabPanel>
          <TabPanel>
            <FAQList faqs={faqData.general} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

// Reusable FAQ List Component
function FAQList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <Accordion allowToggle>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} border="none">
          <h2>
            <AccordionButton _expanded={{ color: "#ff7e47" }}>
              <Box flex="1" textAlign="left" fontWeight="bold">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          <Divider borderColor="#ff7e47" />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
