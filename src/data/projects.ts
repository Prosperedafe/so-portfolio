export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bgColor: string[];
  displayImage: string[];
  bgImages?: string[]; // Add dedicated background images here
  descriptionImages?: string[];
  challengeImages?: string[];
  solutionImages?: string[];
  fullDescriptionBg?: string;
  challengeBg?: string;
  solutionBg?: string;
  solutionBackgroundImage?: string;
  nextProjectBg?: string;
  duration: string;
  tools: string[];
  role: string;
  challenges?: string;
  solutions: string;
}

export const projects: ProjectData[] = [
  {
    id: "farmconnect",
    title: "FarmConnect- Farm App Design",
    shortDescription:
      "A marketplace platform connecting farmers with pesticide sellers and produce buyers.",
    fullDescription:
      "FarmLink is a digital marketplace that connects farmers with pesticide sellers and produce buyers. It helps farmers easily find the right pest control solutions and sell their crops without the stress of transportation.",
    displayImage: [
      "/farm-app-1.png",
      "/farm-app-ui-1.png",
      "/farm-app-desc-1.png",
      "/farm-app-desc-2.png",
    ],
    bgColor: ["#0047AD6B", "#0047AD6B"],
    bgImages: [
      // "/my-beautiful-mockup.jpg",
      "", // 2nd gets blue background color
      "", // 3rd gets blue background color
      "/background2.jpg", // 4th gets new photo background
    ],
    descriptionImages: [
      "/farm-solution.png",
      // "/farm-app-desc-2.png",
      // "/farm-app-desc-3.png",
      // "/farm-app-desc-4.png",
    ],
    challengeImages: ["/farm-app-challenge.png"],
    solutionImages: ["/farm-app-solution-1.png"],
    fullDescriptionBg: "#E7E3BF",
    // challengeBg: "#CBCED0",
    solutionBg: "#C3BEAC",
    nextProjectBg: "#0F0F0F4D",
    duration: "2 Weeks",
    tools: ["Figma"],
    role: "UI/UX Designer",
    challenges:
      "The main challenge was farmers struggling with pest infestations and often cannot find the right pesticides quickly. Additionally, selling farm produce is stressful due to transportation and limited access to buyers.",
    solutions:
      "I analyzed the challenges farmers face, focusing on accessibility, usability, and trust, and designed a platform that simplifies both buying and selling by combining marketplace features with an easy-to-use interface tailored for farmers.",
  },
  {
    id: "cityhealth",
    title: "CityHealth-Hospital Website Design",
    shortDescription:
      "A clean and user-friendly hospital website that simplifies appointment booking and improves access to healthcare services through intuitive design.",
    fullDescription:
      "CityHealth is a modern hospital website designed to help patients easily access medical services,book appointments, and find the right care without confusion.",
    bgColor: ["#D9DAE0", "#E3E1E1", "#E3E1E1", "#0F0F0F4D"],
    displayImage: [
      "/city-health-ui.png",
      "/city-health-ui-2.png",
      "/city-health-desc.png",
      "/city-health-1.png",
    ],
    bgImages: [
      "", // 1st gets base background color
      "/my-beautiful-mockup.jpg",
      "/background3.jpg",
      "", // 4th gets base background color
    ],
    descriptionImages: [
      "/city-health-desc.png",
      "/city-health.png",
      "/city-health-desc-2.png",
      "/city-health-desc-3.png",
    ],
    challengeImages: ["/city-health-challenge-1.png"],
    solutionImages: [
      "/city-healthh.png",
    ],
    fullDescriptionBg: "#E9E9E9",
    challengeBg: "#fff",
    // solutionBg: "#0F0F0F4D",
    nextProjectBg: "#0047AD6B",
    duration: "3 Weeks",
    tools: ["Figma"],
    role: "UI/UX Designer",
    challenges:
      "Many hospital websites are cluttered, difficult to navigate, and do not clearly guide patients to important services like booking appointments or finding doctors. I designed a structured and intuitive interface that prioritizes important actions like booking appointments, exploring services, and contacting the hospital.",
    solutions:
      "The design focuses on clarity, trust, and ease of user experience Balancing a professional medical look with a simple and friendly user experience.",
  },
  {
    id: "elitemoto",
    title: "EliteMoto– Motorcycle Website Design",
    shortDescription:
      "A sleek motorcycle concept blending speed, control, and bold design into a refined visual experience.",
    fullDescription:
      "A modern motorcycle website designed to showcase high-performance bikes through bold visuals and a clean, intuitive user experience.",
    bgColor: ["#0047AD6B", "#ECE4C5", "#ECE4C5", "#0047AD6B"],
    displayImage: [
      "/elite-motto-solution-1.png",
      "/elite-motto-ui-2.png",
      "/elite-motto-desc-1.png",
      "/elite-motto-desc-2.png",
    ],
    duration: "3 Weeks",
    tools: ["Figma", "Adobe XD"],
    role: "Product Designer",
    descriptionImages: [
      "/elite-motto-desc-2.png",
    ],
    solutionImages: [
      "/elite-motto-solution-1.png",
      "/elite-motto-solution-2.png",
    ],
    fullDescriptionBg: "#E9E9E9",
    challengeBg: "#fff",
    solutionBg: "#C3BEAC",
    nextProjectBg: "#0047AD6B",
    // challenges: "Small businesses often lose track of inventory due to manual logging, leading to stockouts or overstocking.",
    solutions:
      "I designed a bold and modern interface that combines strong visuals with a structured layout, making it easy for users to browse motorcycles while experiencing the brand’s energy and performance.",
  },
];
