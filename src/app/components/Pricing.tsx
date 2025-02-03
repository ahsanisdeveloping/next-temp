"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const pricingPlans = [
  {
    id: "free",
    title: "Consumers",
    price: "£0",
    description:
      "Always free! Enjoy unlimited access to Popin’s interactive map, connect with local pop-up businesses in real-time, and get instant vendor updates and notifications for events near you.",
    features: [
      "Service is free",
      "No subscription required",
      "Enjoy benefits without cost",
    ],
    buttonText: "Select",
  },
  {
    id: "pro",
    title: "Pop Flex - Pay as You Go",
    price: "£10",
    description:
      "Get 10 Pops with up to 240 hours of map visibility, a custom online profile, invites to pop-up meetups, and sourced pitching opportunities—perfect for flexible pop-up schedules.",
    features: [
      "Up to 240 hrs of Map Visibility",
      "Custom Pop-up page",
      "Pop-up Business meetups",
      "Monthly Pitching Opportunities",
    ],
    buttonText: "Select",
  },
  {
    id: "enterprise",
    title: "Pop Unlimited",
    price: "£20",
    description:
      "Enjoy unlimited map visibility, a custom profile, exclusive invites to pop-up meetups, and priority access to pitching opportunities—ideal for pop-up businesses that stay active.",
    features: [
      "Unlimited Map Visibility throughout the Month",
      "Custom Pop-up Profile Site",
      "Pop-up Business Meetups",
      "Monthly Pitching Opportunities",
      "Single or Multi Site Popups",
    ],
    buttonText: "Select",
    badge: "Great Starting Point",
  },
];

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState("free");

  // 🌙 Dark Mode Colors
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("black", "whiteAlpha.900");
  const secondaryText = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  // Responsive column layout
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box maxW="1000px" mx="auto" py={10} textAlign="center" bg={bg} px={[4, 6, 8]}>
      {/* Title */}
      <Text fontSize={["2xl", "3xl"]} fontWeight="bold" color="#ff7e47">
        Plans & Pricing
      </Text>

      {/* Pricing Cards */}
      <Grid
        templateColumns={`repeat(${columns}, 1fr)`}
        gap={6}
        mt={8}
        alignItems="center"
      >
        {pricingPlans.map((plan) => {
          const isSelected = selectedPlan === plan.id;

          return (
            <GridItem
              key={plan.id}
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              height="100%" // Ensures uniform height
              backgroundImage={isSelected ? "linear-gradient(to right, #ff7e47, #fb6d6f)" : "none"}
              backgroundColor={!isSelected ? cardBg : "transparent"}
              color={isSelected ? "white" : textColor}
              border="1px solid"
              borderColor={isSelected ? "transparent" : borderColor}
              textAlign="center"
              cursor="pointer"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.02)" }}
              onClick={() => setSelectedPlan(plan.id)}
              display="flex"
              flexDirection="column"
            >
              {/* Content Wrapper to push button down */}
              <Box flex="1">
                {/* Plan Title */}
                <Text fontSize="xl" fontWeight="bold">
                  {plan.title}
                </Text>
                {plan.badge && (
                  <Badge colorScheme="red" mb={2} mt={1}>
                    {plan.badge}
                  </Badge>
                )}

                {/* Price */}
                <Text fontSize={["3xl", "4xl"]} fontWeight="bold" mt={2}>
                  {plan.price}
                </Text>
                <Text fontSize="sm" color={isSelected ? "whiteAlpha.800" : secondaryText}>
                  {plan.description}
                </Text>

                {/* Features */}
                <VStack align="start" spacing={2} mt={4}>
                  {plan.features.map((feature, i) => (
                    <HStack key={i}>
                      <Icon as={CheckCircleIcon} color={isSelected ? "white" : "green.400"} />
                      <Text fontSize="sm">{feature}</Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>

              {/* Button stays at the bottom */}
              <Button
                mt="auto"
                color={isSelected ? "black" : "white"}
                backgroundImage={isSelected ? "" : "linear-gradient(to right, #ff7e47, #fb6d6f)"}
                backgroundColor={isSelected ? "white" : "transparent"}
                _hover={{ opacity: 0.9 }}
                w="full"
                variant="outline"
                fontSize={["md", "lg"]}
              >
                {plan.buttonText}
              </Button>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
