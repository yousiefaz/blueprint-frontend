import { Feature, FeatureBlock } from "@/types/interfaces";

export const FEATURES: Feature[] = [
  {
    imageUrl: "/icons/trophy.png",
    title: "Real-Time Analytics",
    content:
      "Instantly track sales and performance to make faster, smarter decisions.",
  },
  {
    imageUrl: "/icons/vision.png",
    title: "Lead Management",
    content: "Organize, monitor, and nurture leads effortlessly in one place.",
  },
  {
    imageUrl: "/icons/chat.png",
    title: "Centralized Customer Data",
    content:
      "Access every customer interaction and detail without switching tools.",
  },
];

export const FEATURES_BLOCK: FeatureBlock[] = [
  {
    imageUrl: "/messaging.svg",
    title: "Integrated Messaging System",
    content:
      "Stay connected with your team and clients using instant, secure messaging built directly into your workflow.",
  },
  {
    imageUrl: "/task-management.svg",
    title: "Efficient Resource Allocation",
    content:
      "Optimize your team's productivity by assigning tasks, tracking availability, and managing resources effortlessly.",
    isReversed: true,
  },
];
