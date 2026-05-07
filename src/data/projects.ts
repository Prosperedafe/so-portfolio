export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bgColor: string;
  imagePlaceholder: string;
  duration: string;
  tools: string[];
  role: string;
  challenges: string;
  solutions: string;
  nextProjectId?: string;
}

export const projects: ProjectData[] = [
  {
    id: "farmlink",
    title: "FarmLink- Farm App Design",
    shortDescription: "A marketplace platform connecting farmers with pesticide sellers and produce buyers.",
    fullDescription: "FarmLink is a digital marketplace that connects farmers with pesticide sellers and produce buyers. It helps farmers easily find the right pest control solutions and sell their crops without the stress of transportation.",
    bgColor: "#9BB6DA",
    imagePlaceholder: "Farm App Mockup",
    duration: "2 Weeks",
    tools: ["Figma"],
    role: "UI/UX Designer",
    challenges: "The main challenge was farmers struggling with pest infestations and often cannot find the right pesticides quickly. Additionally, selling farm produce is stressful due to transportation and limited access to buyers.",
    solutions: "I analyzed the challenges farmers face, focusing on accessibility, usability, and trust, and designed a platform that simplifies both buying and selling by combining marketplace features with an easy-to-use interface tailored for farmers.",
    nextProjectId: "inventory-app"
  },
  {
    id: "inventory-app",
    title: "Inventory Management App",
    shortDescription: "A comprehensive dashboard for tracking stock and managing sales.",
    fullDescription: "A robust inventory management system designed for small to medium enterprises to track stock levels, orders, sales and deliveries in real-time.",
    bgColor: "#EFE7CE",
    imagePlaceholder: "Inventory Mockup",
    duration: "3 Weeks",
    tools: ["Figma", "Adobe XD"],
    role: "Product Designer",
    challenges: "Small businesses often lose track of inventory due to manual logging, leading to stockouts or overstocking.",
    solutions: "Developed an automated alert system and a visual dashboard that provides real-time insights into stock health and sales trends.",
    nextProjectId: "cityhealth"
  },
  {
    id: "cityhealth",
    title: "CityHealth- Hospital Website Design",
    shortDescription: "A clean and user-friendly hospital website that simplifies appointment booking.",
    fullDescription: "A modern healthcare platform focused on bridging the gap between patients and medical professionals through a seamless digital experience.",
    bgColor: "#BDBDBD",
    imagePlaceholder: "Hospital Mockup",
    duration: "4 Weeks",
    tools: ["Figma", "React"],
    role: "UI/UX Designer",
    challenges: "Patients found it difficult to navigate through complex medical services and book appointments efficiently.",
    solutions: "Simplified the information architecture and implemented a quick-booking widget available on every page, reducing booking time by 40%.",
    nextProjectId: "farmlink"
  }
];
