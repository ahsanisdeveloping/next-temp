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
      "Upto 240 hrs of Map Visibility",
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
      "Single or Multi Site Popus",
    ],
    buttonText: "Select",
    badge: "Great Starting Point",
  },
];

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState("free"); // Default to Enterprise

  return (
    <Box maxW="1000px" mx="auto" py={10} textAlign="center">
      {/* Title */}
      <Text fontSize="3xl" fontWeight="bold" color="#ff7e47">
        Plans & Pricing
      </Text>

      {/* Pricing Cards */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
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
              height={510} // Fixed height to ensure uniformity
              backgroundImage={
                isSelected
                  ? "linear-gradient(to right, #ff7e47, #fb6d6f)"
                  : "none"
              }
              backgroundColor={!isSelected ? "white" : "transparent"}
              color={isSelected ? "white" : "black"}
              border="1px solid"
              borderColor={isSelected ? "transparent" : "gray.200"}
              textAlign="center"
              cursor="pointer"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.02)" }}
              onClick={() => setSelectedPlan(plan.id)}
              display="flex" // Makes the card a flex container
              flexDirection="column" // Ensures items stack vertically
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
                <Text fontSize="4xl" fontWeight="bold" mt={2}>
                  {plan.price}
                </Text>
                <Text
                  fontSize="sm"
                  color={isSelected ? "whiteAlpha.800" : "gray.500"}
                >
                  {plan.description}
                </Text>

                {/* Features */}
                <VStack align="start" spacing={2} mt={4}>
                  {plan.features.map((feature, i) => (
                    <HStack key={i}>
                      <Icon
                        as={CheckCircleIcon}
                        color={isSelected ? "white" : "green.400"}
                      />
                      <Text fontSize="sm">{feature}</Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>

              {/* Button stays at the bottom */}
              <Button
                mt="auto" // Pushes it to the bottom
                color={isSelected ? "black" : "white"}
                backgroundImage={
                  isSelected
                    ? "white"
                    : "linear-gradient(to right, #ff7e47, #fb6d6f)"
                }
                backgroundColor={isSelected ? "white" : "transparent"}
                _hover={{ opacity: 0.9 }}
                w="full"
                variant="outline"
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
