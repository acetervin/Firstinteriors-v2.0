import penthouseImg from '@assets/generated_images/luxury_penthouse_living_room.png';
import villaImg from '@assets/generated_images/coastal_villa_interior.png';
import loftImg from '@assets/generated_images/industrial_loft_interior.png';
import retreatImg from '@assets/generated_images/zen_minimalist_retreat.png';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  value: string;
  timeline: string;
  image: string;
  gallery: { category: string; images: string[] }[];
}

export const projects: Project[] = [
  {
    id: "penthouse-sky",
    title: "The Azure Penthouse",
    category: "Residential",
    description: "A crowning jewel atop the city skyline, this penthouse blends modern sophistication with panoramic views. The design philosophy centers on 'floating above the noise', utilizing floor-to-ceiling glass and low-profile furnishings to maintain an unbroken connection with the horizon.",
    location: "New York, NY",
    year: "2024",
    value: "$12.5M",
    timeline: "14 Months",
    image: penthouseImg,
    gallery: [
      { category: "Living Room", images: [penthouseImg, loftImg, villaImg] },
      { category: "Kitchen", images: [villaImg, penthouseImg] },
      { category: "Details", images: [retreatImg, loftImg] }
    ]
  },
  {
    id: "coastal-calm",
    title: "Serenity Bay Villa",
    category: "Vacation Home",
    description: "Where the ocean meets architecture. This coastal residence uses a palette of bleached woods, travertine, and linen to echo the surrounding dunes. The open-plan layout invites the sea breeze into every corner of the home.",
    location: "Malibu, CA",
    year: "2023",
    value: "$8.2M",
    timeline: "18 Months",
    image: villaImg,
    gallery: [
      { category: "Living Room", images: [villaImg, retreatImg, penthouseImg] },
      { category: "Outdoor", images: [penthouseImg, villaImg] }
    ]
  },
  {
    id: "industrial-loft",
    title: "Ironworks Lofts",
    category: "Restoration",
    description: "Reimagining a 1920s textile factory into a contemporary living space. We preserved the original brickwork and steel beams while introducing warm leather textures and smart home technology to bridge the gap between past and future.",
    location: "Chicago, IL",
    year: "2023",
    value: "$4.1M",
    timeline: "9 Months",
    image: loftImg,
    gallery: [
      { category: "Main Hall", images: [loftImg, penthouseImg, retreatImg] },
      { category: "Workspace", images: [retreatImg, loftImg] }
    ]
  },
  {
    id: "zen-retreat",
    title: "Kiso Mountain Lodge",
    category: "Hospitality",
    description: "A sanctuary of silence in the deep forest. This retreat draws inspiration from traditional Japanese architecture, featuring charred cedar siding and stone hearths. Every window frames a specific view of the natural landscape.",
    location: "Nagano, Japan",
    year: "2025",
    value: "$15.0M",
    timeline: "24 Months",
    image: retreatImg,
    gallery: [
      { category: "Exterior", images: [retreatImg, villaImg] },
      { category: "Interiors", images: [loftImg, retreatImg, penthouseImg] }
    ]
  }
];
