import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

export const Plans = {
  arcade_monthly: {
    name: "arcade",
    price: 9,
    yearly: false,
    icon: arcade,
  },
  arcade_yearly: {
    name: "arcade",
    price: 90,
    yearly: true,
    icon: arcade,
  },
  advanced_monthly: {
    name: "advanced",
    price: 12,
    yearly: false,
    icon: advanced,
  },
  advanced_yearly: {
    name: "advanced",
    price: 120,
    yearly: true,
    icon: advanced,
  },
  pro_monthly: {
    name: "pro",
    price: 15,
    yearly: false,
    icon: pro,
  },
  pro_yearly: {
    name: "pro",
    price: 150,
    yearly: true,
    icon: pro,
  },
};

export const Adds = {
  online_service: {
    name: "Online service",
    price: {
      yearly: 10,
      monthly: 1,
    },
    description: "Access to multiplayer games",
  },
  larger_storage_monthly: {
    name: "Larger storage",
    price: {
      yearly: 20,
      monthly: 2,
    },
    description: "Extra 1TB of cloud save",
  },
  customizable_profile_monthly: {
    name: "Customizable profile",
    price: {
      yearly: 20,
      monthly: 2,
    },
    description: "Custom theme on your profile",
  },
};
