import { Tenant } from "interfaces/tenant";

const Tenants: Record<string, Tenant> = {
  "create-it": {
    id: 7,
    name: "Create IT",
    logo: "/img/company-logo/createit.jpg",
    slug: "create-it",
    position: [125, 275] /* Posisi di Map */,
    pageType: 0,
    aboutUs:
      "Create It is an EduTech Platform focused on Project-Based and Creative Economy-related curriculum to help final year students, fresh grads, and career-shifters to become creative agile talent to build a professional track in the digital & creative industry. So far, we have 3 major Profession outcomes: Creativepreneur, professional, and Content Creators / Freelance. Let’s Create with Create It!",
    hiring: "https://www.linkedin.com/company/createitindonesia/",
    socialMedia: {
      instagram: "https://www.instagram.com/createit_id/",
    },
    galleryText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
    videoUrl: "https://youtube.com/embed/dPATKpw0eks",
    gallery: [
      "/img/company-gallery/create-it/ict-expo-1.jpg",
      "/img/company-gallery/create-it/ict-expo-2.jpg",
      "/img/company-gallery/create-it/nakama-2020.jpeg",
      "/img/company-gallery/create-it/nextdev-1.jpeg",
      "/img/company-gallery/create-it/nextdev-2.jpeg",
      "/img/company-gallery/create-it/startup-weekend.jpeg",
      "/img/company-gallery/create-it/the-greaterhub.PNG",
      "/img/company-gallery/create-it/ui-studentpreneur.jpeg",
      "/img/company-gallery/create-it/wice-2020.png",
    ],
    contactLink: "http://www.whatsapp.com"
  },
  dino: {
    id: 5,
    name: "Dino",
    logo: "/img/company-logo/dino.png",
    slug: "dino",
    position: [125, 210] /* Posisi di Map */,
    pageType: 1,
    aboutUs:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
    socialMedia: {
      instagram: "https://www.instagram.com/arkavidia/",
      linkedin: "https://www.google.com",
      email: "https://www.email.com"
    },
    galleryText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
    videoUrl: "https://youtube.com/embed/nuEOflvWDPg",
    gallery: [
      "/img/company-logo/dino.png",
      "/img/company-logo/dino.png",
      "/img/company-logo/dino.png",
      "/img/company-logo/dino.png",
    ],
    contactLink: "https://www.whatsapp.com"
  },
};

export default Tenants;
