
import React from 'react';
import type { NavLink, Stat, EsgItem, TimelineEvent, Service, Project, FaqItem, Testimonial, JobPosition, Benefit, EmployeeTestimonial } from './types';
import { UWAwardsIcon, UWCalendarIcon, UWEmployeesIcon, UWExperienceIcon, UWProjectsIcon } from './components/Icons';

import esgImg from './assets/images/EGSIMG.png';
import safetyBriefing2 from './assets/images/Safety Briefing 2.jpeg';
import safetyBriefing1 from './assets/images/Safety_Briefing_1.jpeg';
import envImg from './assets/images/IMG-20250906-WA0096.jpg';
import fibreWork7 from './assets/images/Fibre work 7.jpeg';
import leanImg from './assets/images/IMG-20250906-WA0099.jpg';
import safetyImg from './assets/images/IMG_1109.jpg';

import service1 from './assets/images/15_Nov_21_N105_Thomson_Rd_TH2.jpg';
import service2 from './assets/images/2021 Kampong Java Re-bar to Concrete Pipe Laying.jpg';
import service3 from './assets/images/Cable Lay 3.jpg';
import service4 from './assets/images/WhatsApp_Image_2025-09-06_at_14.14.36_5c8c50f7.jpg';

import milestone2007 from './assets/images/15 Nov 21 N105 Novena TH.jpg';
import milestone2008 from './assets/images/2021_Kampong_Java_Pipe_Laying.jpg';
import milestone2009 from './assets/images/IMG-20230522-WA0077.jpg';
import milestone2010 from './assets/images/Fibre work 6.jpeg';
import milestone2011 from './assets/images/IMG_1103.jpg';

import ms211 from './assets/images/15_Nov_21_N105_Thomson_Rd_TH2.jpg';
import ms212 from './assets/images/2021_Kampong_Java_Pipe_Laying.jpg';
import ms231 from './assets/images/WhatsApp_Image_2023-12-30_at_12.40.14_PM.jpeg';
import ms232 from './assets/images/setup.jpg';
import ms251 from './assets/images/WhatsApp Image 2025-06-10 at 6.52.31 PM (1).jpeg';
import ms252 from './assets/images/IMG-20250906-WA0099.jpg';

export const NAV_LINKS: NavLink[] = [
    { name: 'About', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Career', path: '/career' },
];

export const COMPANY_STATS: Stat[] = [
    { icon: UWCalendarIcon, value: '2007', label: 'Year Established' },
    { icon: UWExperienceIcon, value: '15+ years', label: 'Experience' },
    { icon: UWEmployeesIcon, value: '100+', label: 'Employees' },
    { icon: UWAwardsIcon, value: '10+', label: 'Awards' },
    { icon: UWProjectsIcon, value: '100+', label: 'Projects' },
];

export const ESG_DATA: EsgItem[] = [
    {
        id: '01',
        title: 'ESG',
        fullTitle: 'Our Culture\nEnvironmental, Social & Governance',
        description: 'We understand the environmental, social, and economic impact of our activities and that it is our responsibility to conduct our business in a transparent and ethical manner.',
        imageUrl: safetyBriefing1
    },
    {
        id: '02',
        title: 'Community',
        fullTitle: 'Our Commitment to Community',
        description: 'We actively engage with local communities, supporting initiatives that foster growth, education, and well-being. Our goal is to build lasting, positive relationships.',
        imageUrl: safetyBriefing2
    },
    {
        id: '03',
        title: 'DE & I',
        fullTitle: 'Diversity, Equity & Inclusion',
        description: 'We believe a diverse workforce drives innovation. We are committed to creating an inclusive environment where every employee feels valued, respected, and empowered.',
        imageUrl: safetyBriefing1
    },
    {
        id: '04',
        title: 'Environmental',
        fullTitle: 'Protecting Our Environment',
        description: 'Sustainability is at the core of our operations. We implement green practices and technologies to minimize our environmental footprint and protect natural resources.',
        imageUrl: service4
    },
    {
        id: '05',
        title: 'Innovation',
        fullTitle: 'Driving Innovation Forward',
        description: 'We invest in cutting-edge technology and continuous improvement to deliver smarter, more efficient, and more sustainable infrastructure solutions for the future.',
        imageUrl: fibreWork7
    },
    {
        id: '06',
        title: 'Lean',
        fullTitle: 'Lean Construction Principles',
        description: 'By adopting lean principles, we optimize workflows, reduce waste, and enhance value for our clients. Efficiency and quality are paramount in every project we undertake.',
        imageUrl: milestone2009
    },
    {
        id: '07',
        title: 'Safety',
        fullTitle: 'Uncompromising Safety Standards',
        description: 'The safety of our team and the public is our highest priority. We enforce rigorous safety protocols and training to ensure every worksite is a safe environment.',
        imageUrl: safetyImg
    },
];

export const SUCCESS_TIMELINE: TimelineEvent[] = [
    { year: '2007', title: 'Company Incorporation', description: 'Early growth in underground Power infrastructure works' },
    { year: '2010', title: 'BizSafe Star Certification', description: '' },
    { year: '2011', title: 'Commenced Telecommunication infrastructure works', description: 'ISO certification in 9001 (Quality Management Systems) & 14001 (Environmental Management Systems)' },
    { year: '2013', title: 'Obtained our First Main Contract in Distribution Power installation works', description: '' },
    { year: '2018', title: 'Started underground Public Water pipeline installation and Fibre cable installation and associated works', description: 'ISO certification in 45001 (Occupational Health & Safety)' },
    { year: '2020', title: 'LTA infrastructure works', description: '' },
    { year: '2022', title: 'eV Charging infrastructure works', description: '' },
];

export const SERVICES_DATA: Service[] = [
    {
        title: 'Civil Engineering Works',
        description: "Our civil engineering team specializes in pipe installation and comprehensive reinstatement works, including LTARoad reinstatement and temporary works. We deliver reliable and efficient solutions designed to ensure long-lasting infrastructure performance while minimizing disruption to the surrounding environment.",
        imageUrl: service1,
        layout: "right"
    },
    {
        title: 'Potable Watermains & Pipeline Works',
        description: "We handle a wide range of potable watermain and pipeline projects, including diversion, repairs, and upgrading works. Our experienced professionals also undertake PUB water pipe renewal works, ensuring safe, sustainable, and compliant water distribution systems that meet the highest industry standards.",
        imageUrl: milestone2008,
        layout: "left"
    },
    {
        title: 'In-door & Out-door Cable Installation Works',
        description: "We provide complete network infrastructure solutions, from planning to implementation. Our services include the laying and shifting of EHV, HT, LT, fibre, and copper cables, along with professional termination, patching, jointing, and splicing—ensuring seamless connectivity and optimal network performance.",
        imageUrl: service3,
        layout: "right"
    },
    {
        title: 'EV Charging Works',
        description: "Supporting the transition to sustainable mobility, we offer comprehensive EV charger installation services. From site preparation to commissioning, our team ensures every installation meets safety standards and delivers reliable charging solutions for both residential and commercial needs.",
        imageUrl: service4,
        layout: "left"
    }
];

export const PROJECTS_DATA: Project[] = Array.from({ length: 24 }, (_, i) => ({
    category: 'Server',
    location: 'Singapore',
    title: 'Server Room Setup',
    imageUrl: `https://picsum.photos/seed/project${i + 1}/400/300`
}));

export const MILESTONES_TIMELINE: { year: string; imageUrl: string }[] = [
    { year: '2021', imageUrl: ms211 },
    { year: '2021', imageUrl: ms212 },
    { year: '2023', imageUrl: ms231 },
    { year: '2023', imageUrl: ms232 },
    { year: '2025', imageUrl: ms251 },
    { year: '2025', imageUrl: ms252 },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        name: 'Daniel Evans',
        location: 'Bukit Timah, Singapore',
        quote: 'Impres0?u=benjaminsive work from the United Works team. They handled a complex structural engineering task with expertise and precision. Their commitment to quality is evident.',
        avatarUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg',
        rating: 5,
        position: { top: '45%', left: '45%' }
    },
    {
        name: 'Sarah Chen',
        location: 'Pasir Ris, Singapore',
        quote: 'The team was professional and efficient. Our project was completed ahead of schedule and under budget. Highly recommended!',
        avatarUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg',
        rating: 5,
        position: { top: '35%', left: '40%' }
    },
    {
        name: 'Mr. Benjamin Lee',
        location: 'Tampines, Singapore',
        quote: "United Works delivered exceptional service for our cable installation project. Their attention to detail, safety standards, and proactive communication set them apart. The team finished the work efficiently and exceeded our expectations. I highly recommend them for any large-scale infrastructure needs in Singapore!",
        avatarUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg',
        rating: 5,
        position: { top: '45%', left: '30%' }
    },
    {
        name: 'Emily Tan',
        location: 'Tuas, Singapore',
        quote: "Their in-building works were top-notch. The cabling is neat, and the fire-stop installations give us peace of mind. A very reliable partner.",
        avatarUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg',
        rating: 5,
        position: { top: '65%', left: '15%' }
    }
];

export const FAQ_DATA: FaqItem[] = [
    {
        question: 'What services does United Works provide?',
        answer: 'We specialize in underground cable and pipe installation, infrastructure development, reinstatement works, and advanced civil engineering solutions.'
    },
    {
        question: 'How can I request a project quote?',
        answer: 'You can request a project quote by filling out the contact form on our website, or by calling us directly. We will get back to you with a detailed quote as soon as possible.'
    },
    {
        question: 'What safety standards does United Works follow?',
        answer: 'United Works adheres to the strictest safety standards, including all local regulations and international best practices. Safety is our top priority on every project.'
    },
    {
        question: 'How do you manage project timelines and progress updates?',
        answer: 'We use advanced project management tools to track progress and ensure deadlines are met. We provide regular updates to our clients to keep them informed every step of the way.'
    },
    {
        question: 'Who should I contact in an emergency?',
        answer: 'For any project-related emergencies, please contact your designated project manager immediately. For general inquiries, you can reach our main office during business hours.'
    }
];

// Career Page Data
export const JOB_POSITIONS: JobPosition[] = [
    {
        id: 'civil-engineer-001',
        title: 'Senior Civil Engineer',
        department: 'Engineering',
        location: 'Singapore',
        type: 'Full-time',
        experience: '5+ years',
        description: 'Lead civil engineering projects including underground infrastructure, road works, and structural design. Manage project teams and ensure compliance with safety standards.',
        requirements: [
            'Bachelor\'s degree in Civil Engineering or related field',
            'Professional Engineer (PE) license preferred',
            '5+ years of civil engineering experience',
            'Experience with underground infrastructure projects',
            'Strong project management skills',
            'Knowledge of Singapore construction regulations'
        ],
        benefits: [
            'Competitive salary package',
            'Medical and dental insurance',
            'Professional development opportunities',
            'Flexible working arrangements',
            'Annual performance bonuses'
        ],
        postedDate: '2024-01-15',
        isActive: true
    },
    {
        id: 'project-manager-002',
        title: 'Project Manager',
        department: 'Operations',
        location: 'Singapore',
        type: 'Full-time',
        experience: '3+ years',
        description: 'Oversee infrastructure projects from planning to completion. Coordinate with clients, contractors, and internal teams to ensure project success.',
        requirements: [
            'Bachelor\'s degree in Engineering, Construction Management, or related field',
            '3+ years of project management experience',
            'PMP certification preferred',
            'Experience in infrastructure or construction projects',
            'Strong communication and leadership skills',
            'Proficiency in project management software'
        ],
        benefits: [
            'Competitive salary with performance incentives',
            'Comprehensive health coverage',
            'Professional certification support',
            'Team building activities',
            'Career advancement opportunities'
        ],
        postedDate: '2024-01-10',
        isActive: true
    },
    {
        id: 'safety-officer-003',
        title: 'Safety Officer',
        department: 'Safety & Compliance',
        location: 'Singapore',
        type: 'Full-time',
        experience: '2+ years',
        description: 'Ensure workplace safety compliance and implement safety protocols across all project sites. Conduct safety training and inspections.',
        requirements: [
            'Diploma in Occupational Safety or related field',
            '2+ years of safety experience in construction',
            'WSH certification preferred',
            'Knowledge of Singapore safety regulations',
            'Strong attention to detail',
            'Excellent communication skills'
        ],
        benefits: [
            'Competitive salary package',
            'Safety training and certifications',
            'Health and life insurance',
            'Transportation allowance',
            'Overtime compensation'
        ],
        postedDate: '2024-01-08',
        isActive: true
    },
    {
        id: 'electrical-technician-004',
        title: 'Electrical Technician',
        department: 'Technical Services',
        location: 'Singapore',
        type: 'Full-time',
        experience: '1+ years',
        description: 'Install, maintain, and repair electrical systems for infrastructure projects. Work with power cables, telecommunications, and building electrical systems.',
        requirements: [
            'ITE or Diploma in Electrical Engineering',
            '1+ years of electrical installation experience',
            'Valid electrical license',
            'Experience with power cable installation',
            'Ability to work in outdoor conditions',
            'Strong technical problem-solving skills'
        ],
        benefits: [
            'Competitive hourly rates',
            'Overtime pay opportunities',
            'Tool and equipment allowance',
            'Safety equipment provided',
            'Skills development programs'
        ],
        postedDate: '2024-01-05',
        isActive: true
    },
    {
        id: 'intern-civil-005',
        title: 'Civil Engineering Intern',
        department: 'Engineering',
        location: 'Singapore',
        type: 'Internship',
        experience: 'Fresh Graduate',
        description: 'Gain hands-on experience in civil engineering projects. Assist senior engineers with design, planning, and project coordination.',
        requirements: [
            'Currently pursuing or recently completed Civil Engineering degree',
            'Strong academic performance',
            'Basic knowledge of CAD software',
            'Willingness to learn and adapt',
            'Good communication skills',
            'Available for 3-6 months internship'
        ],
        benefits: [
            'Stipend provided',
            'Mentorship from senior engineers',
            'Real project experience',
            'Networking opportunities',
            'Potential full-time employment'
        ],
        postedDate: '2024-01-03',
        isActive: true
    }
];

export const BENEFITS_DATA: Benefit[] = [
    {
        icon: UWEmployeesIcon,
        title: 'Professional Growth',
        description: 'Continuous learning opportunities, mentorship programs, and career advancement paths to help you reach your full potential.'
    },
    {
        icon: UWAwardsIcon,
        title: 'Competitive Compensation',
        description: 'Attractive salary packages, performance bonuses, and comprehensive benefits including medical, dental, and life insurance.'
    },
    {
        icon: UWExperienceIcon,
        title: 'Work-Life Balance',
        description: 'Flexible working arrangements, paid time off, and employee wellness programs to support your personal and professional life.'
    },
    {
        icon: UWProjectsIcon,
        title: 'Innovation & Technology',
        description: 'Access to cutting-edge technology and tools, plus opportunities to work on challenging infrastructure projects.'
    },
    {
        icon: UWCalendarIcon,
        title: 'Safety First',
        description: 'Comprehensive safety training, modern equipment, and a strong safety culture that prioritizes your wellbeing.'
    }
];

export const EMPLOYEE_TESTIMONIALS: EmployeeTestimonial[] = [
    {
        name: 'Sarah Lim',
        position: 'Senior Civil Engineer',
        department: 'Engineering',
        quote: 'Working at United Works has been incredibly rewarding. The company\'s commitment to safety and quality is unmatched, and I\'ve had the opportunity to work on some of Singapore\'s most challenging infrastructure projects.',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/6069/6069202.png',
        yearsAtCompany: '5 years'
    },
    {
        name: 'David Chen',
        position: 'Project Manager',
        department: 'Operations',
        quote: 'The collaborative culture here is amazing. Everyone is committed to excellence, and the management truly values employee input and professional development.',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/6069/6069202.png',
        yearsAtCompany: '3 years'
    },
    {
        name: 'Priya Sharma',
        position: 'Safety Officer',
        department: 'Safety & Compliance',
        quote: 'United Works prioritizes safety above all else. I\'m proud to be part of a team that ensures every worker goes home safely to their families every day.',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/6069/6069202.png',
        yearsAtCompany: '4 years'
    },
    {
        name: 'Ahmad Rahman',
        position: 'Electrical Technician',
        department: 'Technical Services',
        quote: 'The company invests in the latest technology and provides excellent training. I\'ve grown both personally and professionally since joining the team.',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/6069/6069202.png',
        yearsAtCompany: '2 years'
    }
];