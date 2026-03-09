export interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  category: string;
  condition?: string;
  datePosted: string;
  description?: string;
  seller?: {
    name: string;
    rating: number;
    joinedDate: string;
  };
}

export const categories = [
  { id: 'cars', name: 'Cars', icon: 'Car' },
  { id: 'apartments', name: 'Apartments', icon: 'Building2' },
  { id: 'jobs', name: 'Jobs', icon: 'Briefcase' },
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone' },
  { id: 'furniture', name: 'Furniture', icon: 'Armchair' },
  { id: 'services', name: 'Services', icon: 'Wrench' },
];

export const mockListings: Listing[] = [
  {
    id: '1',
    title: '2020 Honda Civic LX - Low Mileage',
    price: 18500,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop',
    category: 'cars',
    condition: 'Excellent',
    datePosted: '2024-03-01',
    description: 'Well-maintained 2020 Honda Civic LX with only 25,000 miles. Single owner, clean title. Regular maintenance records available. Excellent fuel economy and reliability.',
    seller: {
      name: 'John Martinez',
      rating: 4.8,
      joinedDate: '2020-05-15'
    }
  },
  {
    id: '2',
    title: 'Modern 2BR Apartment - Downtown',
    price: 2800,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    category: 'apartments',
    condition: 'Like New',
    datePosted: '2024-03-04',
    description: 'Beautiful modern 2-bedroom apartment in the heart of downtown. Features include hardwood floors, stainless steel appliances, in-unit washer/dryer, and stunning city views.',
    seller: {
      name: 'Sarah Johnson',
      rating: 4.9,
      joinedDate: '2019-08-20'
    }
  },
  {
    id: '3',
    title: 'Senior Software Engineer - React',
    price: 150000,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    category: 'jobs',
    datePosted: '2024-03-05',
    description: 'Join our growing tech startup as a Senior Software Engineer. Work with cutting-edge technologies including React, Node.js, and AWS. Competitive salary, equity, and benefits package.',
    seller: {
      name: 'TechCorp Recruiters',
      rating: 4.7,
      joinedDate: '2021-01-10'
    }
  },
  {
    id: '4',
    title: 'iPhone 14 Pro Max - 256GB',
    price: 999,
    location: 'San Jose, CA',
    image: 'https://images.unsplash.com/photo-1635425730507-26c324aadbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBwcm8lMjBzbWFydHBob25lJTIwYmxhY2t8ZW58MXx8fHwxNzcyNzgwMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'electronics',
    condition: 'Like New',
    datePosted: '2024-03-03',
    description: 'iPhone 14 Pro Max in Space Black. 256GB storage, unlocked for all carriers. Comes with original box and accessories. Screen protector and case included.',
    seller: {
      name: 'Mike Chen',
      rating: 4.9,
      joinedDate: '2020-11-22'
    }
  },
  {
    id: '5',
    title: 'Mid-Century Modern Sofa',
    price: 650,
    location: 'Oakland, CA',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    category: 'furniture',
    condition: 'Good',
    datePosted: '2024-03-02',
    description: 'Beautiful mid-century modern sofa in excellent condition. Teal fabric with wooden legs. Very comfortable and stylish. Perfect for any living room.',
    seller: {
      name: 'Emily Davis',
      rating: 4.6,
      joinedDate: '2022-03-15'
    }
  },
  {
    id: '6',
    title: 'Professional Cleaning Services',
    price: 120,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
    category: 'services',
    datePosted: '2024-03-06',
    description: 'Professional residential and commercial cleaning services. Experienced team, eco-friendly products, competitive rates. Weekly, bi-weekly, or one-time deep cleaning available.',
    seller: {
      name: 'CleanPro Services',
      rating: 4.8,
      joinedDate: '2018-06-30'
    }
  },
  {
    id: '7',
    title: 'MacBook Pro 14" M2 Pro',
    price: 1899,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
    category: 'electronics',
    condition: 'Excellent',
    datePosted: '2024-03-05',
    description: 'MacBook Pro 14" with M2 Pro chip, 16GB RAM, 512GB SSD. Space Gray. Barely used, in perfect condition. Includes original charger and box.',
    seller: {
      name: 'Alex Wong',
      rating: 4.9,
      joinedDate: '2021-09-12'
    }
  },
  {
    id: '8',
    title: 'Dining Table Set - 6 Chairs',
    price: 450,
    location: 'Berkeley, CA',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
    category: 'furniture',
    condition: 'Good',
    datePosted: '2024-03-04',
    description: 'Solid wood dining table with 6 matching chairs. Great for family dinners and entertaining. Minor wear, otherwise in great condition.',
    seller: {
      name: 'Robert Taylor',
      rating: 4.5,
      joinedDate: '2020-12-05'
    }
  },
  {
    id: '9',
    title: '2019 Toyota Camry SE',
    price: 21500,
    location: 'San Jose, CA',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
    category: 'cars',
    condition: 'Excellent',
    datePosted: '2024-03-03',
    description: 'Reliable 2019 Toyota Camry SE with 35,000 miles. One owner, non-smoker, garage kept. Advanced safety features, backup camera, and more.',
    seller: {
      name: 'David Kim',
      rating: 4.7,
      joinedDate: '2019-04-20'
    }
  },
  {
    id: '10',
    title: 'Luxury 1BR Loft - Waterfront',
    price: 3200,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    category: 'apartments',
    condition: 'Like New',
    datePosted: '2024-03-06',
    description: 'Stunning waterfront loft with high ceilings, exposed brick, and floor-to-ceiling windows. Includes parking and access to building gym and rooftop terrace.',
    seller: {
      name: 'Premier Properties',
      rating: 4.8,
      joinedDate: '2017-02-28'
    }
  },
  {
    id: '11',
    title: 'Sony WH-1000XM5 Headphones',
    price: 299,
    location: 'Palo Alto, CA',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop',
    category: 'electronics',
    condition: 'Like New',
    datePosted: '2024-03-05',
    description: 'Premium noise-canceling headphones in black. Excellent condition, barely used. Includes carrying case and all original accessories.',
    seller: {
      name: 'Jennifer Lee',
      rating: 4.9,
      joinedDate: '2021-07-18'
    }
  },
  {
    id: '12',
    title: 'Marketing Manager - Tech Startup',
    price: 110000,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    category: 'jobs',
    datePosted: '2024-03-06',
    description: 'Exciting opportunity for an experienced Marketing Manager to join our fast-growing SaaS startup. Lead marketing initiatives and grow our brand.',
    seller: {
      name: 'Growth Ventures',
      rating: 4.6,
      joinedDate: '2022-05-01'
    }
  },
  // Additional Cars
  {
    id: '13',
    title: '2021 Ford F-150 XLT - 4WD',
    price: 35000,
    location: 'Sacramento, CA',
    image: 'https://images.unsplash.com/photo-1758219944301-48c0bac14d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JkJTIwdHJ1Y2slMjBwaWNrdXAlMjB2ZWhpY2xlfGVufDF8fHx8MTc3Mjc4MDQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cars',
    condition: 'Excellent',
    datePosted: '2024-03-06',
    description: 'Powerful Ford F-150 XLT with 4WD. Perfect for work or weekend adventures. Well maintained with complete service history.',
    seller: {
      name: 'Tom Anderson',
      rating: 4.7,
      joinedDate: '2019-11-10'
    }
  },
  {
    id: '14',
    title: '2023 Tesla Model 3 - Long Range',
    price: 42000,
    location: 'Palo Alto, CA',
    image: 'https://images.unsplash.com/photo-1651544022918-92083a5b7d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXNsYSUyMGVsZWN0cmljJTIwY2FyJTIwbW9kZXJufGVufDF8fHx8MTc3Mjc4MDQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cars',
    condition: 'Like New',
    datePosted: '2024-03-05',
    description: 'Almost new Tesla Model 3 Long Range. Autopilot enabled, premium interior, barely driven. Factory warranty still active.',
    seller: {
      name: 'Lisa Park',
      rating: 5.0,
      joinedDate: '2023-01-15'
    }
  },
  {
    id: '15',
    title: '2018 BMW 3 Series - 330i',
    price: 26500,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1731142582229-e0ee70302c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjBzZWRhbiUyMGx1eHVyeSUyMGNhcnxlbnwxfHx8fDE3NzI3ODA0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cars',
    condition: 'Excellent',
    datePosted: '2024-03-04',
    description: 'Luxury BMW 330i with premium package. Leather seats, navigation, sunroof. Meticulously maintained with full service records.',
    seller: {
      name: 'James Wilson',
      rating: 4.8,
      joinedDate: '2020-07-22'
    }
  },
  {
    id: '16',
    title: '2020 Jeep Wrangler Unlimited',
    price: 38000,
    location: 'Oakland, CA',
    image: 'https://images.unsplash.com/photo-1711654264472-2c163827e381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWVwJTIwd3JhbmdsZXIlMjBzdXYlMjBvZmZyb2FkfGVufDF8fHx8MTc3Mjc4MDQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cars',
    condition: 'Excellent',
    datePosted: '2024-03-05',
    description: 'Adventure-ready Jeep Wrangler Unlimited. 4-door, hardtop, upgraded suspension. Perfect for off-road enthusiasts.',
    seller: {
      name: 'Steve Martinez',
      rating: 4.6,
      joinedDate: '2018-09-05'
    }
  },
  // Additional Apartments
  {
    id: '17',
    title: 'Spacious 3BR Apartment - Bedroom Views',
    price: 3500,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGJlZHJvb218ZW58MXx8fHwxNzcyNzgwNDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'apartments',
    condition: 'Excellent',
    datePosted: '2024-03-05',
    description: 'Bright and spacious 3-bedroom apartment with modern finishes. Updated kitchen, walk-in closets, and parking included.',
    seller: {
      name: 'Urban Living Properties',
      rating: 4.7,
      joinedDate: '2018-03-12'
    }
  },
  {
    id: '18',
    title: 'Minimalist Studio - Downtown',
    price: 1800,
    location: 'San Jose, CA',
    image: 'https://images.unsplash.com/photo-1769733336073-7ddbeb680a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBhcGFydG1lbnQlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MjczMDIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'apartments',
    condition: 'Like New',
    datePosted: '2024-03-06',
    description: 'Modern minimalist studio in the heart of downtown. Perfect for young professionals. All utilities included.',
    seller: {
      name: 'Metro Rentals',
      rating: 4.5,
      joinedDate: '2020-06-18'
    }
  },
  {
    id: '19',
    title: 'Luxury Penthouse - City Views',
    price: 5500,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc3Mjc0NTM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'apartments',
    condition: 'Excellent',
    datePosted: '2024-03-04',
    description: 'Stunning penthouse with panoramic city views. Floor-to-ceiling windows, private terrace, concierge service.',
    seller: {
      name: 'Luxury Living SF',
      rating: 4.9,
      joinedDate: '2017-11-30'
    }
  },
  {
    id: '20',
    title: 'Cozy 1BR - Perfect for Singles',
    price: 2200,
    location: 'Oakland, CA',
    image: 'https://images.unsplash.com/photo-1612419299101-6c294dc2901d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYXBhcnRtZW50JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzI3MjAzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'apartments',
    condition: 'Good',
    datePosted: '2024-03-03',
    description: 'Charming 1-bedroom apartment in quiet neighborhood. Close to public transit, restaurants, and shops.',
    seller: {
      name: 'Oakland Housing Co',
      rating: 4.4,
      joinedDate: '2019-05-20'
    }
  },
  // Additional Jobs
  {
    id: '21',
    title: 'Product Designer - UI/UX',
    price: 125000,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1615274821871-18e23b3bc16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc3Mjc4MDQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'jobs',
    datePosted: '2024-03-05',
    description: 'Looking for a talented Product Designer to join our team. Create beautiful user experiences for our mobile and web apps.',
    seller: {
      name: 'Design Studio Inc',
      rating: 4.8,
      joinedDate: '2020-02-14'
    }
  },
  {
    id: '22',
    title: 'Executive Chef - Fine Dining',
    price: 95000,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWZ8ZW58MXx8fHwxNzcyNzgwNDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'jobs',
    datePosted: '2024-03-04',
    description: 'Upscale restaurant seeking experienced Executive Chef. Lead kitchen operations, create innovative menus, manage team.',
    seller: {
      name: 'Gourmet Restaurants Group',
      rating: 4.6,
      joinedDate: '2016-08-25'
    }
  },
  {
    id: '23',
    title: 'Data Analyst - Business Intelligence',
    price: 98000,
    location: 'San Jose, CA',
    image: 'https://images.unsplash.com/photo-1721593979313-8661afd501c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzdCUyMGNoYXJ0cyUyMG9mZmljZXxlbnwxfHx8fDE3NzI3ODA0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'jobs',
    datePosted: '2024-03-06',
    description: 'Join our analytics team to drive data-driven decisions. Work with SQL, Python, and modern BI tools. Remote flexible.',
    seller: {
      name: 'Analytics Corp',
      rating: 4.7,
      joinedDate: '2021-04-10'
    }
  },
  {
    id: '24',
    title: 'Creative Director - Advertising',
    price: 140000,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1758627506826-0658170e5cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI3NDIxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'jobs',
    datePosted: '2024-03-03',
    description: 'Lead creative vision for major brand campaigns. Manage creative team, collaborate with clients, push boundaries.',
    seller: {
      name: 'Creative Agency SF',
      rating: 4.9,
      joinedDate: '2015-12-01'
    }
  },
  // Additional Electronics
  {
    id: '25',
    title: 'Samsung Galaxy S23 Ultra - 512GB',
    price: 899,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1627609834360-74948f361335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwZ2FsYXh5JTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NzI3ODA0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'electronics',
    condition: 'Like New',
    datePosted: '2024-03-06',
    description: 'Samsung Galaxy S23 Ultra in Phantom Black. 512GB storage, S Pen included. Barely used, mint condition.',
    seller: {
      name: 'Tech Traders',
      rating: 4.8,
      joinedDate: '2021-03-08'
    }
  },
  {
    id: '26',
    title: 'PlayStation 5 - Disc Edition',
    price: 450,
    location: 'Oakland, CA',
    image: 'https://images.unsplash.com/photo-1665041974623-d398d035023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwcGxheXN0YXRpb258ZW58MXx8fHwxNzcyNjk0NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'electronics',
    condition: 'Excellent',
    datePosted: '2024-03-05',
    description: 'PS5 disc edition with two controllers. Includes several games. Excellent condition, barely used.',
    seller: {
      name: 'Gaming Hub',
      rating: 4.7,
      joinedDate: '2022-01-20'
    }
  },
  {
    id: '27',
    title: 'Canon EOS R6 - Mirrorless Camera',
    price: 1899,
    location: 'San Jose, CA',
    image: 'https://images.unsplash.com/photo-1751107996128-6a85dae2a7e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5vbiUyMGNhbWVyYSUyMGRzbHIlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzI3ODA0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'electronics',
    condition: 'Excellent',
    datePosted: '2024-03-04',
    description: 'Professional Canon EOS R6 mirrorless camera. Low shutter count, includes 24-105mm lens and accessories.',
    seller: {
      name: 'Pro Photo Gear',
      rating: 4.9,
      joinedDate: '2019-07-15'
    }
  },
  {
    id: '28',
    title: 'iPad Pro 12.9" - 256GB (2023)',
    price: 899,
    location: 'Palo Alto, CA',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBpcGFkJTIwZGV2aWNlfGVufDF8fHx8MTc3Mjc0NTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'electronics',
    condition: 'Like New',
    datePosted: '2024-03-03',
    description: 'Latest iPad Pro 12.9" with M2 chip. Includes Apple Pencil and Magic Keyboard. Perfect for creatives.',
    seller: {
      name: 'Apple Reseller Pro',
      rating: 4.8,
      joinedDate: '2020-09-30'
    }
  },
  // Additional Furniture
  {
    id: '29',
    title: 'Velvet Accent Chair - Blue',
    price: 380,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1758728836289-a1a981297912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcm1jaGFpciUyMHZlbHZldCUyMGJsdWV8ZW58MXx8fHwxNzcyNzgwNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'furniture',
    condition: 'Like New',
    datePosted: '2024-03-06',
    description: 'Stunning modern accent chair in rich blue velvet. Gold metal legs. Perfect statement piece for any room.',
    seller: {
      name: 'Furniture Gallery',
      rating: 4.7,
      joinedDate: '2018-04-12'
    }
  },
  {
    id: '30',
    title: 'Home Office Desk - Wooden',
    price: 420,
    location: 'Berkeley, CA',
    image: 'https://images.unsplash.com/photo-1637762646936-29b68cd6670d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZXNrJTIwaG9tZSUyMG9mZmljZXxlbnwxfHx8fDE3NzI3ODA0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'furniture',
    condition: 'Excellent',
    datePosted: '2024-03-05',
    description: 'Solid wood home office desk with drawers. Perfect for remote work. Spacious surface, built-in cable management.',
    seller: {
      name: 'Office Furniture Plus',
      rating: 4.6,
      joinedDate: '2020-10-05'
    }
  },
  {
    id: '31',
    title: 'King Size Bed Frame - Modern',
    price: 550,
    location: 'San Jose, CA',
    image: 'https://images.unsplash.com/photo-1689626698503-47934d011285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5nJTIwYmVkJTIwYmVkcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzI3ODA0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'furniture',
    condition: 'Like New',
    datePosted: '2024-03-04',
    description: 'Beautiful modern king size bed frame with upholstered headboard. Neutral color, storage underneath.',
    seller: {
      name: 'Bedroom Essentials',
      rating: 4.8,
      joinedDate: '2019-06-18'
    }
  },
  {
    id: '32',
    title: 'Wooden Bookshelf - 5 Tier',
    price: 280,
    location: 'Oakland, CA',
    image: 'https://images.unsplash.com/photo-1758801966638-dfd34dae251c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjBsaWJyYXJ5JTIwd29vZGVufGVufDF8fHx8MTc3Mjc4MDQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'furniture',
    condition: 'Good',
    datePosted: '2024-03-03',
    description: 'Tall wooden bookshelf with 5 adjustable shelves. Perfect for book lovers. Sturdy construction, natural wood finish.',
    seller: {
      name: 'Home Decor Store',
      rating: 4.5,
      joinedDate: '2021-02-28'
    }
  },
  // Additional Services
  {
    id: '33',
    title: 'Plumbing Repair Services',
    price: 85,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1770656506117-2372e446b6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwdG9vbHMlMjByZXBhaXIlMjBzZXJ2aWNlfGVufDF8fHx8MTc3Mjc4MDQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'services',
    datePosted: '2024-03-06',
    description: 'Licensed plumber available for all repairs. Same-day service, reasonable rates. Emergency services available 24/7.',
    seller: {
      name: 'Bay Area Plumbing',
      rating: 4.9,
      joinedDate: '2017-03-15'
    }
  },
  {
    id: '34',
    title: 'Electrical Installation & Repair',
    price: 95,
    location: 'Oakland, CA',
    image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmslMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNzgwNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'services',
    datePosted: '2024-03-05',
    description: 'Certified electrician for residential and commercial work. Panel upgrades, lighting, outlets, and more.',
    seller: {
      name: 'Pro Electric Services',
      rating: 4.8,
      joinedDate: '2018-11-20'
    }
  },
  {
    id: '35',
    title: 'Personal Training - Fitness Coach',
    price: 75,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1685633224791-6e4d8f680516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBmaXRuZXNzJTIwZ3ltfGVufDF8fHx8MTc3MjY5MTYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'services',
    datePosted: '2024-03-04',
    description: 'Certified personal trainer offering one-on-one and group sessions. Customized workout plans, nutrition guidance.',
    seller: {
      name: 'FitLife Coaching',
      rating: 5.0,
      joinedDate: '2020-01-10'
    }
  },
  {
    id: '36',
    title: 'Moving & Relocation Services',
    price: 150,
    location: 'San Jose, CA',
    image: 'https://images.unsplash.com/photo-1770562525550-95705f7fb944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpbmclMjBzZXJ2aWNlJTIwdHJ1Y2slMjBib3hlc3xlbnwxfHx8fDE3NzI3ODA0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'services',
    datePosted: '2024-03-03',
    description: 'Professional moving services for local and long-distance moves. Packing, loading, and careful handling of your belongings.',
    seller: {
      name: 'Swift Movers Inc',
      rating: 4.7,
      joinedDate: '2016-05-12'
    }
  },
];