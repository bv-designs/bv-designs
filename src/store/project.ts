type TimelineEvent = {
  date: string;
  description: string;
};

type TeamMember = {
  name: string;
  role: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  overview: string;
  videoSrc: string;
  images: string[];
  testimonial: string;
  clientName: string;
  timeline: TimelineEvent[];
  specifications: string[];
  team: TeamMember[];
  relatedProjects?: {
    id: string;
    title: string;
    description: string;
  }[];
};

const projectData: Project[] = [
  {
    id: 'modern-villa',
    title: 'Modern Villa',
    description:
      'The Modern Villa project is a testament to contemporary architectural elegance. We approached this design with a focus on open space, natural light, and sustainable materials. Large glass facades allow for seamless integration with the surrounding landscape, while the use of reinforced concrete and natural stone ensures durability and aesthetics. The interior spaces are minimalist yet luxurious, with a neutral color palette accented by natural wood finishes. Our approach was to create a home that is both a work of art and a comfortable living space, featuring the latest in smart home technology and energy-efficient systems.',
    videoSrc: '/assets/videos/video1.mp4',
    images: [
      '/assets/images/Z_INT_4.png',
      '/assets/images/Z_INT_7.png',
      '/assets/images/Z_INT_6.png',
      '/assets/images/Z_INT_1.png',
      '/assets/images/Z_INT_2.png',
      '/assets/images/Z_INT_3.png',
    ],
    overview:
      'The Modern Villa blends aesthetics with functionality, featuring smart home systems, sustainable materials, and a seamless connection to the surrounding environment.',
    testimonial:
      'Working with the team was an incredible experience. The villa exceeds our expectations in every way.',
    clientName: 'John Doe',
    timeline: [
      {
        date: 'January 2023',
        description: 'Project conception and initial design',
      },
      {
        date: 'March 2023',
        description: 'Foundation and structural work completed',
      },
      {
        date: 'June 2023',
        description: 'Interior design and smart systems installation',
      },
      {
        date: 'September 2023',
        description: 'Project completion and client handover',
      },
    ],
    specifications: [
      'Reinforced concrete structure',
      'Large glass facades for natural light',
      'Smart home technology',
      'Sustainable materials',
      'Energy-efficient systems',
    ],
    team: [
      { name: 'Alice Johnson', role: 'Lead Architect' },
      { name: 'Bob Smith', role: 'Project Manager' },
      { name: 'Carol White', role: 'Interior Designer' },
    ],
    relatedProjects: [
      {
        id: 'urban-loft',
        title: 'Urban Loft',
        description: 'A modern residential oasis in an industrial space.',
      },
      {
        id: 'eco-friendly-retreat',
        title: 'Eco-Friendly Retreat',
        description: 'A sustainable sanctuary in harmony with nature.',
      },
    ],
  },
  {
    id: 'urban-loft',
    title: 'Urban Loft',
    description:
      'Urban Loft is an architectural project that reimagines an industrial space into a modern residential oasis. The design retains the raw beauty of the original structure, including exposed brick walls and steel beams, while introducing modern amenities and luxury finishes. We used reclaimed wood for the flooring and custom steel fixtures to maintain the industrial aesthetic. The approach was to create a space that feels expansive and airy, with an emphasis on sustainability and adaptive reuse. The result is a unique blend of historical charm and contemporary living, offering an urban retreat that is both stylish and functional.',
    videoSrc: '/assets/videos/video2.mp4',
    images: [
      '/assets/images/Z_INT_1.png',
      '/assets/images/Z_INT_2.png',
      '/assets/images/Z_INT_3.png',
    ],
    overview:
      'Urban Loft transforms an industrial space into a contemporary living environment while retaining its historic charm.',
    testimonial:
      'The Urban Loft is everything we hoped for and more. The blend of old and new is truly stunning.',
    clientName: 'Jane Smith',
    timeline: [
      {
        date: 'February 2023',
        description: 'Initial design and structural analysis',
      },
      { date: 'April 2023', description: 'Construction and restoration work' },
      {
        date: 'July 2023',
        description: 'Interior finishing and final touches',
      },
      {
        date: 'October 2023',
        description: 'Project completion and client handover',
      },
    ],
    specifications: [
      'Exposed brick walls and steel beams',
      'Reclaimed wood flooring',
      'Custom steel fixtures',
      'Sustainable design practices',
    ],
    team: [
      { name: 'Alice Johnson', role: 'Lead Architect' },
      { name: 'David Brown', role: 'Structural Engineer' },
      { name: 'Emily Green', role: 'Interior Designer' },
    ],
    relatedProjects: [
      {
        id: 'eco-friendly-retreat',
        title: 'Eco-Friendly Retreat',
        description: 'A sustainable sanctuary in harmony with nature.',
      },
      {
        id: 'coastal-residence',
        title: 'Coastal Residence',
        description: 'A luxurious beachfront home with stunning ocean views.',
      },
    ],
  },
  {
    id: 'eco-friendly-retreat',
    title: 'Eco-Friendly Retreat',
    description:
      'This Eco-Friendly Retreat is designed to be a sanctuary in harmony with nature. Located in a pristine natural environment, our design focuses on sustainability and minimal environmental impact. We used locally sourced, renewable materials such as bamboo and reclaimed wood, combined with innovative construction techniques to enhance energy efficiency. The retreat is powered by solar panels and incorporates a rainwater harvesting system. Our approach was to blend the structure with its natural surroundings, creating a serene escape that offers all the modern comforts without compromising on environmental responsibility. The result is a retreat that is not only beautiful but also sustainable and self-sufficient.',
    videoSrc: '/assets/videos/video3.mp4',
    images: [
      '/assets/images/Z_INT_4.png',
      '/assets/images/Z_INT_7.png',
      '/assets/images/Z_INT_6.png',
    ],
    overview:
      'Eco-Friendly Retreat combines luxury with sustainability, creating a self-sufficient sanctuary in harmony with nature.',
    testimonial:
      'This retreat is the perfect escape. We couldn’t be happier with the eco-friendly design.',
    clientName: 'Michael Brown',
    timeline: [
      {
        date: 'March 2023',
        description: 'Site selection and environmental analysis',
      },
      {
        date: 'May 2023',
        description: 'Construction with renewable materials',
      },
      {
        date: 'August 2023',
        description: 'Installation of sustainable systems',
      },
      {
        date: 'November 2023',
        description: 'Final inspection and client handover',
      },
    ],
    specifications: [
      'Locally sourced bamboo and reclaimed wood',
      'Solar panel energy system',
      'Rainwater harvesting system',
      'Minimal environmental impact design',
    ],
    team: [
      { name: 'Alice Johnson', role: 'Lead Architect' },
      { name: 'Chris Wilson', role: 'Sustainability Consultant' },
      { name: 'Laura Martin', role: 'Landscape Designer' },
    ],
    relatedProjects: [
      {
        id: 'modern-villa',
        title: 'Modern Villa',
        description:
          'A contemporary villa with cutting-edge design and technology.',
      },
      {
        id: 'coastal-residence',
        title: 'Coastal Residence',
        description: 'A luxurious beachfront home with stunning ocean views.',
      },
    ],
  },
  {
    id: 'coastal-residence',
    title: 'Coastal Residence',
    description:
      'The Coastal Residence project is a luxurious beachfront home designed to capture the essence of seaside living. The design features expansive windows and open-plan living areas that offer uninterrupted views of the ocean. We used materials like marine-grade timber, stainless steel, and tempered glass to withstand the coastal environment while providing a modern, sleek aesthetic. The interior design includes light, airy spaces with a focus on comfort and relaxation. Our approach was to create a home that feels like an extension of the beach itself, with seamless indoor-outdoor transitions and a layout that maximizes natural light and ventilation. This residence is the perfect escape for those who cherish the beauty of the sea and the comfort of modern living.',
    videoSrc: '/assets/videos/video4.mp4',
    images: [
      '/assets/images/Z_INT_4.png',
      '/assets/images/Z_INT_7.png',
      '/assets/images/Z_INT_6.png',
    ],
    overview:
      'Coastal Residence offers luxurious beachfront living with stunning ocean views and modern design.',
    testimonial:
      'Our dream home by the sea. The design perfectly captures the beauty of the coast.',
    clientName: 'Susan Lee',
    timeline: [
      {
        date: 'April 2023',
        description: 'Design and planning for coastal environment',
      },
      {
        date: 'June 2023',
        description: 'Construction with marine-grade materials',
      },
      {
        date: 'September 2023',
        description: 'Interior design and final touches',
      },
      {
        date: 'December 2023',
        description: 'Project completion and client handover',
      },
    ],
    specifications: [
      'Marine-grade timber and stainless steel',
      'Tempered glass windows',
      'Open-plan living areas',
      'Maximized natural light and ventilation',
    ],
    team: [
      { name: 'Alice Johnson', role: 'Lead Architect' },
      { name: 'Frank Miller', role: 'Construction Manager' },
      { name: 'Jessica Taylor', role: 'Interior Designer' },
    ],
    relatedProjects: [
      {
        id: 'urban-loft',
        title: 'Urban Loft',
        description: 'A modern residential oasis in an industrial space.',
      },
      {
        id: 'eco-friendly-retreat',
        title: 'Eco-Friendly Retreat',
        description: 'A sustainable sanctuary in harmony with nature.',
      },
    ],
  },
  {
    id: 'modern-villa-1',
    title: 'Modern Villa 1',
    description:
      'The Modern Villa project is a testament to contemporary architectural elegance. We approached this design with a focus on open space, natural light, and sustainable materials. Large glass facades allow for seamless integration with the surrounding landscape, while the use of reinforced concrete and natural stone ensures durability and aesthetics. The interior spaces are minimalist yet luxurious, with a neutral color palette accented by natural wood finishes. Our approach was to create a home that is both a work of art and a comfortable living space, featuring the latest in smart home technology and energy-efficient systems.',
    videoSrc: '/assets/videos/video1.mp4',
    images: [
      '/assets/images/Z_INT_4.png',
      '/assets/images/Z_INT_7.png',
      '/assets/images/Z_INT_6.png',
      '/assets/images/Z_INT_1.png',
      '/assets/images/Z_INT_2.png',
      '/assets/images/Z_INT_3.png',
    ],
    overview:
      'Modern Villa 1 combines modern design with luxurious amenities and smart home technology.',
    testimonial:
      'The design is stunning, and the technology makes living here a dream.',
    clientName: 'Karen White',
    timeline: [
      { date: 'January 2023', description: 'Initial design and planning' },
      { date: 'March 2023', description: 'Construction of main structure' },
      { date: 'June 2023', description: 'Interior design and finishing' },
      {
        date: 'September 2023',
        description: 'Final inspection and client handover',
      },
    ],
    specifications: [
      'Reinforced concrete and natural stone',
      'Large glass facades',
      'Smart home technology',
      'Energy-efficient systems',
    ],
    team: [
      { name: 'Alice Johnson', role: 'Lead Architect' },
      { name: 'George Williams', role: 'Project Manager' },
      { name: 'Sarah Thompson', role: 'Interior Designer' },
    ],
    relatedProjects: [
      {
        id: 'modern-villa-2',
        title: 'Modern Villa 2',
        description: 'Another contemporary villa with modern amenities.',
      },
      {
        id: 'eco-friendly-retreat',
        title: 'Eco-Friendly Retreat',
        description: 'A sustainable sanctuary in harmony with nature.',
      },
    ],
  },
  {
    id: 'modern-villa-2',
    title: 'Modern Villa 2',
    description:
      'The Modern Villa project is a testament to contemporary architectural elegance. We approached this design with a focus on open space, natural light, and sustainable materials. Large glass facades allow for seamless integration with the surrounding landscape, while the use of reinforced concrete and natural stone ensures durability and aesthetics. The interior spaces are minimalist yet luxurious, with a neutral color palette accented by natural wood finishes. Our approach was to create a home that is both a work of art and a comfortable living space, featuring the latest in smart home technology and energy-efficient systems.',
    videoSrc: '/assets/videos/video1.mp4',
    images: [
      '/assets/images/Z_INT_4.png',
      '/assets/images/Z_INT_7.png',
      '/assets/images/Z_INT_6.png',
      '/assets/images/Z_INT_1.png',
      '/assets/images/Z_INT_2.png',
      '/assets/images/Z_INT_3.png',
    ],
    overview:
      'Modern Villa 2 offers state-of-the-art design with smart home integration and sustainable materials.',
    testimonial:
      'A perfect blend of modern luxury and smart living. Highly recommend!',
    clientName: 'David Black',
    timeline: [
      { date: 'January 2023', description: 'Initial design and planning' },
      { date: 'March 2023', description: 'Construction of main structure' },
      { date: 'June 2023', description: 'Interior design and finishing' },
      {
        date: 'September 2023',
        description: 'Final inspection and client handover',
      },
    ],
    specifications: [
      'Reinforced concrete and natural stone',
      'Large glass facades',
      'Smart home technology',
      'Energy-efficient systems',
    ],
    team: [
      { name: 'Alice Johnson', role: 'Lead Architect' },
      { name: 'George Williams', role: 'Project Manager' },
      { name: 'Sarah Thompson', role: 'Interior Designer' },
    ],
    relatedProjects: [
      {
        id: 'modern-villa-1',
        title: 'Modern Villa 1',
        description: 'Another contemporary villa with modern amenities.',
      },
      {
        id: 'coastal-residence',
        title: 'Coastal Residence',
        description: 'A luxurious beachfront home with stunning ocean views.',
      },
    ],
  },
];

export { projectData };
export type { Project, TimelineEvent };
