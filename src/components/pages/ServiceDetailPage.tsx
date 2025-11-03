import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Star, Target, TrendingUp, Award, Megaphone, Globe, Palette, Camera, MessageSquare, Newspaper, Rocket, Users, Clock, Shield, Zap, BarChart3, DollarSign, Lightbulb, HeadphonesIcon, TrendingDown, AlertCircle, Code, Brain, MonitorPlay, Play, Mail, Smartphone, Search, ShoppingCart, PenTool, Video, Trophy, MapPin } from 'lucide-react';
import { AutoCarousel } from '../ui/AutoCarousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { SEOHead } from '../SEOHead';
import { getAllKeywords, getPageKeywords } from '../../utils/seoKeywords';
import { StructuredData, organizationSchema, getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from '../../utils/structuredData';

export function ServiceDetailPage() {
  const { slug } = useParams();

  const getServiceData = () => {
    const serviceDatabase: Record<string, any> = {
      'digital-marketing': {
        title: 'Digital Marketing Services',
        description: 'Complete digital dominance: SEO that ranks #1, PPC that converts at 6X ROAS, social media that goes viral, content that sells, and email automation that nurtures leads into customers.',
        tagline: 'SEO #1 Rankings. PPC 6X ROAS. Social Media Viral Growth.',
        icon: TrendingUp,
        features: [
          'Search Engine Optimization (SEO) - Complete Technical + On-Page + Off-Page',
          'Pay-Per-Click Advertising (PPC) - Google Ads, Bing Ads, Shopping Campaigns',
          'Social Media Marketing - Strategy, Content, Community, Ads (FB, IG, LI, Twitter)',
          'Content Marketing - Blog Writing, Video Scripts, Ebooks, Whitepapers',
          'Email Marketing - Automation, Segmentation, Personalization, Drip Campaigns',
          'Conversion Rate Optimization - A/B Testing, Landing Pages, UX Optimization',
          'Analytics & Reporting - GA4, Data Studio, Custom Dashboards',
          'Marketing Automation - HubSpot, ActiveCampaign, Lead Nurturing',
          'Local SEO & GMB - Google My Business, Review Management, Citations',
          'Influencer Marketing - Outreach, Campaign Management, ROI Tracking',
        ],
        benefits: [
          'Increase organic traffic by 2-3X within 12 months through SEO',
          'Reduce customer acquisition cost by 40-60% with targeted campaigns',
          'Build sustainable, scalable growth engines across all channels',
          'Real-time performance tracking with transparent dashboards',
          'Own your digital presence across search, social, email, and paid',
        ],
        stats: [
          { metric: '2-3X', label: 'Typical Traffic Growth', description: 'Within 12 months', icon: TrendingUp },
          { metric: '3-5X', label: 'Typical ROI', description: 'On marketing spend', icon: DollarSign },
          { metric: '74+', label: 'Campaigns Run', description: 'Successfully executed', icon: Users },
          { metric: '7 Years', label: 'Experience', description: 'Serving businesses', icon: Target },
        ],
        packages: [
          {
            name: 'Startup Growth',
            price: '₹35,000/month',
            features: ['SEO (10 keywords)', 'Social Media (2 platforms, 15 posts)', 'Content (6 blogs)', 'Email (3 campaigns)', 'Monthly reports', 'Strategy calls'],
            ideal: 'Startups & small businesses',
          },
          {
            name: 'Business Accelerator',
            price: '₹75,000/month',
            features: ['SEO (25 keywords)', 'Social Media (4 platforms, 40 posts)', 'Content (15 pieces)', 'Email automation', 'Google Ads management', 'Bi-weekly reports', 'Dedicated manager'],
            ideal: 'Scaling businesses',
            popular: true,
          },
          {
            name: 'Enterprise Domination',
            price: 'Custom Pricing',
            features: ['Unlimited keywords', 'All channels (SEO, PPC, Social, Content)', 'Unlimited content', 'Advanced automation', 'Dedicated team (5+ specialists)', 'Real-time dashboard', 'White-glove service'],
            ideal: 'Large organizations & brands',
          },
        ],
        process: [
          { step: '01', title: 'Complete Digital Audit', description: 'Deep dive into your website, competitors, keywords, backlinks, social media, and current performance. Identify gaps and opportunities.' },
          { step: '02', title: 'Strategic Roadmap', description: 'Custom multi-channel strategy with clear KPIs, timelines, budget allocation, and projected ROI. Approved before execution.' },
          { step: '03', title: 'Multi-Channel Execution', description: 'Launch campaigns across SEO, PPC, social media, content marketing, and email. All channels working in synergy.' },
          { step: '04', title: 'Continuous Optimization', description: 'Daily monitoring, A/B testing, bid adjustments, content refinement. We never stop improving your campaigns.' },
          { step: '05', title: 'Scaling & Reporting', description: 'Scale winning campaigns aggressively. Transparent weekly/monthly reports with actionable insights and growth recommendations.' },
        ],
        whyChooseUs: [
          { icon: Award, title: 'Proven Expertise', description: '74+ successful campaigns delivered for 96+ clients. ISO 9001:2015 certified processes.' },
          { icon: Users, title: 'Certified Specialists', description: '50+ marketing experts with Google Ads, Facebook Blueprint, HubSpot certifications.' },
          { icon: BarChart3, title: 'Data-Driven Decisions', description: 'Every strategy backed by analytics, testing, and competitive intelligence. No guesswork.' },
          { icon: Shield, title: 'Full Transparency', description: 'Real-time dashboards, unlimited reporting access, weekly strategy calls. Complete visibility.' },
        ],
        faqs: [
          { question: 'How long before I see SEO results?', answer: 'SEO typically shows initial improvements in 3-4 months, with significant traffic growth by 6-9 months. PPC and social ads can generate leads within 2-3 weeks of launch.' },
          { question: 'Do you guarantee Google #1 rankings?', answer: 'We cannot ethically guarantee specific rankings, but 78% of our targeted keywords reach top 3 positions within 6 months, with 45% hitting #1.' },
          { question: 'Can I customize my package?', answer: 'Absolutely! All packages are fully customizable based on your industry, goals, budget, and timeline. We create tailored strategies for every client.' },
          { question: 'What makes your ROI so high?', answer: 'We focus on holistic multi-channel strategies (SEO + PPC + Social + Content) which deliver 3-5X better results than single-channel campaigns. Plus continuous optimization.' },
        ],
        tools: ['Google Analytics 4', 'SEMrush', 'Ahrefs', 'Moz Pro', 'Google Ads', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Hotjar', 'Google Tag Manager'],
        industries: ['Healthcare', 'E-commerce', 'Technology', 'Education', 'Real Estate', 'Finance', 'Legal', 'Hospitality', 'Manufacturing', 'Retail'],
        caseStudies: [
          { client: 'Healthcare Startup', result: '3X organic traffic increase', time: '10 months', metric: 'Consistent patient inquiry growth' },
          { client: 'E-commerce Fashion Brand', result: '180% increase in online sales', time: '8 months', metric: 'Multi-channel campaign success' },
          { client: 'B2B SaaS Platform', result: '4.5X ROI on Google Ads', time: '6 months', metric: 'Qualified enterprise lead generation' },
        ],
        testimonials: [
          { name: 'Dr. Rajesh Kumar', company: 'HealthCare Plus', text: 'Inchtomilez transformed our digital presence completely. Traffic grew from 400 to 12,000 monthly visitors in 9 months. Patient bookings increased significantly. Best marketing investment ever!', rating: 5 },
          { name: 'Priya Sharma', company: 'Fashion Forward', text: 'Their multi-channel approach is brilliant. SEO rankings improved, PPC ROAS hit 5X, and social media engagement grew substantially. Our online sales doubled in 6 months.', rating: 5 },
        ],
      },
      'advertising': {
        title: 'Advertising Services',
        description: 'Multi-channel advertising mastery: Google Ads that convert at 7X ROAS, Meta campaigns that scale profitably, LinkedIn B2B campaigns, YouTube video ads, programmatic display, and traditional OOH advertising.',
        tagline: 'Creative That Stops. Campaigns That Convert. ROI That Scales.',
        icon: Megaphone,
        features: [
          'Google Ads - Search, Display, Shopping, YouTube, Performance Max Campaigns',
          'Meta Advertising - Facebook, Instagram Stories/Reels, Messenger Ads',
          'LinkedIn Ads - Sponsored Content, InMail, Lead Gen Forms, Account-Based Marketing',
          'YouTube Advertising - TrueView, Bumper Ads, Discovery Ads',
          'Programmatic Display - Real-time bidding, Advanced audience targeting',
          'Twitter/X Ads - Promoted tweets, Trends, In-stream video ads',
          'TikTok Advertising - In-feed ads, Branded effects, TopView campaigns',
          'Native Advertising - Sponsored content, In-feed native ads',
          'Retargeting & Remarketing - Pixel-based, List-based, Dynamic remarketing',
          'Ad Creative Production - Copywriting, Design, Video production, A/B testing',
        ],
        benefits: [
          'Reach your exact target audience with laser precision',
          'Maximize advertising ROI with 3-5X typical ROAS',
          'Unified multi-channel campaign management and optimization',
          'Real-time performance tracking and daily optimization',
          'Scale successful campaigns profitably across all platforms',
        ],
        stats: [
          { metric: '3-5X', label: 'Typical ROAS', description: 'Return on ad spend', icon: DollarSign },
          { metric: '74+', label: 'Campaigns Run', description: 'Successfully executed', icon: Target },
          { metric: '7 Years', label: 'Experience', description: 'Running campaigns', icon: TrendingUp },
          { metric: '40-60%', label: 'Cost Reduction', description: 'With optimization', icon: TrendingDown },
        ],
        packages: [
          {
            name: 'Launch Campaign',
            price: '₹50,000/month',
            features: ['Google Ads OR Social Ads', '₹30K ad budget included', 'Ad creative (5 variants)', 'Basic targeting & optimization', 'Weekly performance reports'],
            ideal: 'New advertisers',
          },
          {
            name: 'Growth Campaign',
            price: '₹1,45,000/month',
            features: ['Multi-platform (Google + Meta/LinkedIn)', '₹1L ad budget included', 'Video ads production', 'Advanced targeting + audiences', 'A/B testing + optimization', 'Daily monitoring & reports'],
            ideal: 'Scaling brands',
            popular: true,
          },
          {
            name: 'Enterprise Campaign',
            price: 'Custom Pricing',
            features: ['All platforms (Google, Meta, LinkedIn, YouTube)', 'Unlimited ad budget management', 'Full creative production team', 'Dedicated specialists team', 'Real-time dashboard', 'White-label reporting'],
            ideal: 'Large advertisers',
          },
        ],
        process: [
          { step: '01', title: 'Campaign Strategy', description: 'Define objectives, KPIs, target audience, budget allocation, and channel selection based on your goals and industry.' },
          { step: '02', title: 'Creative Development', description: 'Design high-converting ad creatives, compelling copy, video ads, and optimized landing pages that drive action.' },
          { step: '03', title: 'Campaign Launch', description: 'Set up tracking pixels, conversion tracking, launch campaigns across selected platforms with proper targeting.' },
          { step: '04', title: 'Daily Optimization', description: 'Monitor performance daily, adjust bids, pause underperforming ads, scale winners, test new creatives.' },
          { step: '05', title: 'Scaling & Reporting', description: 'Aggressively scale profitable campaigns. Provide detailed performance reports with insights and recommendations.' },
        ],
        whyChooseUs: [
          { icon: Award, title: 'Certified Ad Experts', description: 'Google Ads, Facebook Blueprint, LinkedIn certified specialists managing your campaigns.' },
          { icon: DollarSign, title: 'ROI-Focused', description: '3-5X typical ROAS with continuous optimization and testing. We make every rupee count.' },
          { icon: Zap, title: 'Fast Results', description: 'See qualified leads within 48-72 hours of campaign launch. No 6-month waiting periods.' },
          { icon: Users, title: 'In-House Creative Team', description: '50+ specialists for ad creatives, videos, landing pages — no outsourcing.' },
        ],
        faqs: [
          { question: 'What is the minimum ad budget?', answer: 'We recommend minimum ₹30K/month for Google Ads or ₹20K/month for social media ads to see meaningful results. Higher budgets allow for faster testing and scaling.' },
          { question: 'How do you ensure targeting accuracy?', answer: 'We use advanced audience targeting including demographics, interests, behaviors, lookalike audiences, custom audiences, and remarketing lists for precise targeting.' },
          { question: 'Can you create video ads?', answer: 'Yes! Our in-house creative team produces professional video ads optimized for YouTube, Facebook, Instagram, LinkedIn, and display campaigns.' },
          { question: 'How quickly can campaigns launch?', answer: 'Most campaigns launch within 5-7 business days after strategy approval, creative development, and account setup.' },
        ],
        tools: ['Google Ads', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'Google Tag Manager', 'Hotjar', 'Unbounce', 'Canva Pro', 'Adobe Creative Cloud', 'Google Analytics 4', 'SEMrush'],
        industries: ['E-commerce', 'Real Estate', 'Healthcare', 'Education', 'Finance', 'Technology', 'Automotive', 'Travel', 'Fashion', 'Food & Beverage'],
        caseStudies: [
          { client: 'Real Estate Developer', result: '4.5X ROAS on Facebook Ads', time: '4 months', metric: 'Consistent qualified property leads' },
          { client: 'E-Learning Platform', result: 'Low cost per student enrollment', time: '6 months', metric: 'Sustained enrollment growth' },
          { client: 'D2C Fashion Brand', result: '180% increase in online sales', time: '8 months', metric: 'Profitable paid advertising' },
        ],
        testimonials: [
          { name: 'Amit Patel', company: 'Prime Properties', text: 'Their Google Ads campaigns delivered qualified leads consistently over 4 months. ROAS was excellent at 4.5X. Every lead was verified and ready to buy!', rating: 5 },
          { name: 'Sneha Kapoor', company: 'FitLife Nutrition', text: 'Finally found an agency that truly understands Facebook Ads. Our cost per sale dropped by 50% in 2 months. Scaling profitably now!', rating: 5 },
        ],
      },
      'branding': {
        title: 'Branding & Identity Services',
        description: 'Complete brand transformation: Strategic brand positioning, unforgettable logo design, comprehensive visual identity systems, brand guidelines, voice development — Turn startups into household names.',
        tagline: 'Brands That Last. Identities That Dominate Markets.',
        icon: Award,
        features: [
          'Brand Strategy & Positioning - Market research, Competitor analysis, Unique positioning',
          'Logo Design - Multiple concepts, Revisions, Vector files, All formats',
          'Visual Identity System - Color palette, Typography, Design elements, Patterns',
          'Brand Guidelines - Comprehensive documentation, Usage rules, Do\'s and Don\'ts',
          'Brand Collateral - Business cards, Letterheads, Email signatures, Presentation templates',
          'Packaging Design - Product packaging, Labels, Box design',
          'Brand Voice & Messaging - Tone, Language guidelines, Taglines, Brand story',
          'Brand Launch Strategy - Go-to-market plan, Launch campaigns',
          'Rebranding Services - Brand audit, Transition strategy, Asset recreation',
          'Trademark & Copyright Support - Filing assistance, Legal documentation',
        ],
        benefits: [
          'Stand out in crowded markets with unique positioning',
          'Increase brand recall and customer loyalty by 150-200%',
          'Command premium pricing (15-30% higher than competitors)',
          'Build trust and credibility instantly with professional identity',
          'Scale consistently with comprehensive brand guidelines',
        ],
        stats: [
          { metric: '100+', label: 'Brands Managed', description: 'Growing businesses', icon: Award },
          { metric: '7 Years', label: 'Experience', description: 'Building brands', icon: DollarSign },
          { metric: '150-200%', label: 'Brand Recall Lift', description: 'Typical improvement', icon: TrendingUp },
          { metric: '98%', label: 'Client Satisfaction', description: 'Verified rating', icon: Star },
        ],
        packages: [
          {
            name: 'Startup Identity',
            price: '₹95,000',
            features: ['Logo design (3 concepts)', 'Basic visual identity', 'Business card design', 'Letterhead template', 'Social media kit', '2 revision rounds'],
            ideal: 'New businesses',
          },
          {
            name: 'Complete Branding',
            price: '₹2,45,000',
            features: ['Full brand strategy', 'Logo design (5 concepts)', 'Complete visual identity', 'Brand guidelines (30+ pages)', 'All collateral design', 'Packaging (if applicable)', 'Unlimited revisions', '6 months support'],
            ideal: 'Growing businesses',
            popular: true,
          },
          {
            name: 'Enterprise Rebranding',
            price: 'Custom Pricing',
            features: ['Complete brand audit', 'Market research', 'Strategic repositioning', 'Full identity redesign', 'Comprehensive guidelines', 'Asset recreation', 'Launch campaign', 'Change management support'],
            ideal: 'Established brands',
          },
        ],
        process: [
          { step: '01', title: 'Discovery & Research', description: 'Deep dive into your business, values, target audience, competitors, and market positioning. Foundation for strategy.' },
          { step: '02', title: 'Brand Strategy', description: 'Define brand positioning, personality, voice, messaging architecture, and unique value proposition.' },
          { step: '03', title: 'Visual Identity Creation', description: 'Design logo concepts, color systems, typography, visual elements based on approved strategy.' },
          { step: '04', title: 'Refinement & Guidelines', description: 'Refine designs based on feedback. Create comprehensive brand guidelines for consistent application.' },
          { step: '05', title: 'Launch & Support', description: 'Deliver all assets, support brand implementation, monitor consistency, provide ongoing guidance.' },
        ],
        whyChooseUs: [
          { icon: Award, title: 'Award-Winning Design', description: '156 brands created with 98% client satisfaction. Multiple design awards.' },
          { icon: Brain, title: 'Strategy-First Approach', description: 'We don\'t just design logos — we build strategic brand foundations that last decades.' },
          { icon: Users, title: 'Experienced Team', description: '12+ years combined experience. Worked with startups to Fortune 500 companies.' },
          { icon: Shield, title: 'Trademark Support', description: 'We ensure your brand is legally protected with trademark filing assistance included.' },
        ],
        faqs: [
          { question: 'How long does branding take?', answer: 'Startup Identity: 3-4 weeks. Complete Branding: 6-8 weeks. Enterprise Rebranding: 10-12 weeks. Timeline depends on feedback cycles and scope.' },
          { question: 'Do I own the brand assets?', answer: 'Absolutely! You receive full ownership of all brand assets including source files, vector files, and comprehensive usage rights.' },
          { question: 'What if I don\'t like initial concepts?', answer: 'We provide multiple revision rounds. Our process ensures alignment at each stage. 98% of clients approve within 2 revision rounds.' },
          { question: 'Do you help with trademark registration?', answer: 'Yes! We provide trademark filing assistance, conduct similarity searches, and guide you through the registration process.' },
        ],
        tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Adobe InDesign', 'Canva Pro', 'Procreate', 'Adobe After Effects (for motion)'],
        industries: ['Technology', 'Healthcare', 'E-commerce', 'Finance', 'Education', 'Fashion', 'Food & Beverage', 'Real Estate', 'Professional Services', 'Manufacturing'],
        caseStudies: [
          { client: 'Tech Startup', result: 'Complete brand identity from scratch', time: '8 weeks', metric: 'Successfully raised Series A (brand strength cited by investors)' },
          { client: 'Healthcare Chain', result: 'Rebranding across 12 locations', time: '10 weeks', metric: '2X increase in brand recall and patient trust' },
          { client: 'D2C Brand', result: 'Premium positioning through rebranding', time: '6 weeks', metric: '35% price increase maintained successfully' },
        ],
        testimonials: [
          { name: 'Vikram Singh', company: 'TechVentures', text: 'The brand identity Inchtomilez created became our biggest asset. Investors specifically mentioned our professional branding during Series A discussions. Worth every rupee!', rating: 5 },
          { name: 'Meera Joshi', company: 'Organic Foods Co', text: 'We went from looking like a local shop to a premium national brand. Sales doubled after the rebrand. Their strategic approach is brilliant!', rating: 5 },
        ],
      },
      'website-development': {
        title: 'Website & App Development',
        description: 'Lightning-fast websites (<2s load time), conversion-optimized e-commerce platforms, beautiful mobile apps (iOS & Android), stunning UI/UX design — Built to sell, designed to delight users.',
        tagline: 'Websites That Convert. Apps Users Love. Speed That Wins.',
        icon: Globe,
        features: [
          'Custom Website Design - Mobile-first, Responsive, Modern UI/UX',
          'E-commerce Development - Shopify, WooCommerce, Custom platforms',
          'Mobile App Development - iOS, Android, React Native, Flutter',
          'CMS Integration - WordPress, Webflow, Custom CMS',
          'Speed Optimization - <2s load time, Core Web Vitals optimization',
          'SEO-Optimized Architecture - Clean code, Schema markup, Meta tags',
          'Security Implementation - SSL, Firewall, Regular backups, Malware protection',
          'Payment Gateway Integration - Stripe, Razorpay, PayPal, UPI',
          'API Integrations - CRM, Email, Analytics, Third-party services',
          '12 Months Support & Maintenance - Updates, Backups, Monitoring',
        ],
        benefits: [
          'Increase conversions 2-3X with optimized UX design',
          'Rank higher on Google with SEO-friendly architecture',
          'Load in <2 seconds for superior user experience',
          'Mobile-responsive design that works on all devices',
          'Scalable platform that grows with your business',
        ],
        stats: [
          { metric: '60+', label: 'Websites Built', description: 'Since 2018', icon: Globe },
          { metric: '<2s', label: 'Avg Load Time', description: 'Industry standard: 4-6s', icon: Zap },
          { metric: '4.9★', label: 'Client Rating', description: 'Based on 200+ reviews', icon: Star },
          { metric: '2-3X', label: 'Typical Conversion Lift', description: 'Post-redesign', icon: TrendingUp },
        ],
        packages: [
          {
            name: 'Business Website',
            price: '₹65,000',
            features: ['5-8 pages', 'Custom design', 'Mobile responsive', 'Contact form', 'SEO basics', 'Speed optimized', '3 months support'],
            ideal: 'Small businesses',
          },
          {
            name: 'E-commerce Store',
            price: '₹1,85,000',
            features: ['Shopify/WooCommerce', 'Unlimited products', 'Payment gateway', 'Inventory management', 'Customer accounts', 'SEO optimized', 'Marketing integrations', '12 months support'],
            ideal: 'Online stores',
            popular: true,
          },
          {
            name: 'Enterprise Platform',
            price: 'Custom Pricing',
            features: ['Custom development', 'Advanced features', 'Third-party integrations', 'Custom CMS/Dashboard', 'Security audit', 'Scalable infrastructure', '24/7 monitoring', 'Dedicated team'],
            ideal: 'Large businesses',
          },
        ],
        process: [
          { step: '01', title: 'Requirements & Planning', description: 'Understand your business goals, target audience, features needed, competitor analysis, and project scope.' },
          { step: '02', title: 'Design & Prototyping', description: 'Create wireframes, visual designs, interactive prototypes. Get approval before development starts.' },
          { step: '03', title: 'Development & Testing', description: 'Build website/app with clean code, implement features, conduct thorough testing across devices.' },
          { step: '04', title: 'Launch & Optimization', description: 'Deploy to production, configure hosting, SSL, analytics, speed optimization, final QA checks.' },
          { step: '05', title: 'Support & Maintenance', description: 'Ongoing updates, security patches, backups, performance monitoring, feature additions.' },
        ],
        whyChooseUs: [
          { icon: Zap, title: 'Lightning Fast', description: '<2s average load time. 90+ Google PageSpeed scores. Superior performance guaranteed.' },
          { icon: Award, title: 'Award-Winning Design', description: '365 successful projects with 4.9★ average rating. Beautiful and functional.' },
          { icon: Shield, title: 'Security First', description: 'SSL, firewall, regular backups, malware protection, PCI compliance for e-commerce.' },
          { icon: Users, title: 'Full-Stack Team', description: 'Designers, front-end, back-end, QA specialists — complete in-house team.' },
        ],
        faqs: [
          { question: 'How long does development take?', answer: 'Business website: 3-4 weeks. E-commerce store: 6-8 weeks. Enterprise platform: 10-16 weeks. Timeline depends on scope and feedback cycles.' },
          { question: 'Will my website be mobile-friendly?', answer: 'Absolutely! All websites are mobile-first, responsive, and tested across 10+ devices and browsers for perfect compatibility.' },
          { question: 'Do I own the website code?', answer: 'Yes! You receive full ownership of all code, designs, and assets. No vendor lock-in. Complete freedom to modify later.' },
          { question: 'What about hosting and domain?', answer: 'We help you select and set up hosting (AWS, DigitalOcean, or shared hosting based on needs). Domain registration assistance included.' },
        ],
        tools: ['React', 'Next.js', 'WordPress', 'Shopify', 'Webflow', 'Tailwind CSS', 'Node.js', 'MongoDB', 'AWS', 'Figma', 'Adobe XD'],
        industries: ['E-commerce', 'Healthcare', 'Education', 'Real Estate', 'Professional Services', 'Manufacturing', 'Hospitality', 'Finance', 'Technology', 'Non-Profit'],
        caseStudies: [
          { client: 'Fashion E-commerce', result: 'Complete Shopify store with 2,500 products', time: '7 weeks', metric: 'Strong sales performance in first 6 months' },
          { client: 'Healthcare Clinic', result: 'Patient portal + appointment booking', time: '5 weeks', metric: '500+ online bookings monthly' },
          { client: 'Real Estate Portal', result: 'Property listing platform with 5,000+ listings', time: '12 weeks', metric: 'Successfully facilitating property transactions' },
        ],
        testimonials: [
          { name: 'Rohan Mehta', company: 'Urban Fashion', text: 'Our new e-commerce store is absolutely stunning. Load time is under 2 seconds, conversion rate increased 180%, and we\'re getting compliments from customers daily!', rating: 5 },
          { name: 'Dr. Anjali Sharma', company: 'HealthCare Plus', text: 'The patient portal they built has transformed our operations. Online appointments increased 400%. The team is professional and supportive!', rating: 5 },
        ],
      },
      'software-development': {
        title: 'Software Development Services',
        description: 'Custom enterprise software, scalable SaaS platforms, CRM systems, API integrations, marketing automation tools — Modern tech stacks (React, Node, Python, AWS) with 99.9% uptime guaranteed.',
        tagline: 'Enterprise Solutions That Scale. Code Quality That Lasts.',
        icon: MonitorPlay,
        features: [
          'Custom Software Development - Tailored solutions for unique business needs',
          'SaaS Platform Development - Multi-tenant, Subscription billing, User management',
          'CRM & ERP Systems - Sales automation, Customer management, Inventory',
          'API Development & Integration - RESTful APIs, Third-party integrations',
          'Business Process Automation - Workflow automation, Task management',
          'Database Design & Optimization - MySQL, PostgreSQL, MongoDB, Redis',
          'Cloud Infrastructure Setup - AWS, Google Cloud, Azure deployment',
          'Mobile Backend Development - iOS/Android app backends',
          'Testing & Quality Assurance - Unit tests, Integration tests, Security audits',
          'Maintenance & Support - 24/7 monitoring, Updates, Bug fixes',
        ],
        benefits: [
          'Automate repetitive tasks and save 40+ hours weekly',
          'Scale your operations without hiring proportionally',
          'Centralize data and improve decision-making by 60%',
          'Integrate all tools and eliminate data silos',
          '99.9% uptime with enterprise-grade infrastructure',
        ],
        stats: [
          { metric: '142', label: 'Products Built', description: 'SaaS, CRM, Custom', icon: Code },
          { metric: '99.9%', label: 'Uptime Guarantee', description: 'Enterprise SLA', icon: Shield },
          { metric: '40+hrs', label: 'Time Saved', description: 'Per week typical', icon: Clock },
          { metric: '7 Years', label: 'Experience', description: 'Building software', icon: DollarSign },
        ],
        packages: [
          {
            name: 'MVP Development',
            price: '₹3,50,000',
            features: ['Core features only', 'Web-based platform', 'User authentication', 'Basic dashboard', 'Database setup', '3 months support'],
            ideal: 'Startups validating ideas',
          },
          {
            name: 'Full Product',
            price: '₹12,50,000',
            features: ['Complete feature set', 'Web + Mobile apps', 'Advanced features', 'Third-party integrations', 'Scalable architecture', 'Security audit', '12 months support'],
            ideal: 'Growing businesses',
            popular: true,
          },
          {
            name: 'Enterprise Solution',
            price: 'Custom Pricing',
            features: ['Custom architecture', 'Unlimited features', 'Multi-platform', 'Advanced security', 'Dedicated team', 'White-label options', '24/7 support', 'SLA guarantee'],
            ideal: 'Large enterprises',
          },
        ],
        process: [
          { step: '01', title: 'Requirements Analysis', description: 'Deep dive into business processes, pain points, user needs, technical requirements, and integration needs.' },
          { step: '02', title: 'Architecture & Design', description: 'Design system architecture, database schema, API structure, UI/UX flows, and technology stack selection.' },
          { step: '03', title: 'Agile Development', description: 'Build in 2-week sprints with regular demos, continuous integration, automated testing, code reviews.' },
          { step: '04', title: 'Testing & QA', description: 'Comprehensive testing including unit tests, integration tests, load testing, security audits, UAT.' },
          { step: '05', title: 'Deployment & Monitoring', description: 'Production deployment, infrastructure setup, monitoring dashboards, documentation, team training.' },
        ],
        whyChooseUs: [
          { icon: Code, title: 'Expert Developers', description: '15+ senior developers with 8+ years experience each. Modern tech stacks and best practices.' },
          { icon: Shield, title: '99.9% Uptime SLA', description: 'Enterprise-grade infrastructure with automatic scaling, backups, and disaster recovery.' },
          { icon: Zap, title: 'Agile Methodology', description: 'Bi-weekly sprints, regular demos, continuous feedback, faster time to market.' },
          { icon: Users, title: 'Dedicated Team', description: 'Project manager, architects, developers, QA specialists assigned to your project.' },
        ],
        faqs: [
          { question: 'How long does custom software take?', answer: 'MVP: 3-4 months. Full Product: 6-9 months. Enterprise Solution: 10-18 months. We use agile sprints to deliver working features every 2 weeks.' },
          { question: 'What tech stack do you use?', answer: 'Front-end: React, Next.js, Vue. Back-end: Node.js, Python, PHP. Database: PostgreSQL, MongoDB. Cloud: AWS, Google Cloud. We choose based on your needs.' },
          { question: 'Can you integrate with existing systems?', answer: 'Yes! We specialize in API integrations with CRMs (Salesforce, HubSpot), ERPs, payment gateways, marketing tools, and custom legacy systems.' },
          { question: 'What about ongoing maintenance?', answer: 'All projects include support periods. We offer ongoing maintenance plans with 24/7 monitoring, updates, bug fixes, and feature additions.' },
        ],
        tools: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'Git', 'Jest', 'TypeScript'],
        industries: ['Technology', 'Healthcare', 'Finance', 'E-commerce', 'Manufacturing', 'Education', 'Logistics', 'Real Estate', 'Professional Services', 'Government'],
        caseStudies: [
          { client: 'Logistics SaaS', result: 'Complete fleet management platform', time: '8 months', metric: '5,000+ vehicles tracked successfully' },
          { client: 'Healthcare CRM', result: 'Patient management system for 50+ clinics', time: '10 months', metric: '100K+ patient records, 60% time savings' },
          { client: 'E-commerce Backend', result: 'Custom multi-vendor marketplace backend', time: '6 months', metric: 'High GMV performance in first year' },
        ],
        testimonials: [
          { name: 'Arjun Reddy', company: 'LogiTech Solutions', text: 'The SaaS platform they built has become our primary revenue source. Clean code, scalable architecture, and their team is brilliant. Worth every rupee!', rating: 5 },
          { name: 'Dr. Kavita Nair', company: 'MedChain Clinics', text: 'Our custom CRM has transformed how we manage patients across 50 clinics. Integration with everything was seamless. Best tech investment we made!', rating: 5 },
        ],
      },
      'graphic-design': {
        title: 'Graphic Design & Creative Services',
        description: 'Visual storytelling that captivates: Social media graphics, marketing collateral, packaging design, infographics, motion graphics, animation — Professional designs that drive engagement and conversions.',
        tagline: 'Design That Captivates. Creativity That Converts.',
        icon: Palette,
        features: [
          'Social Media Graphics - Instagram, Facebook, LinkedIn posts, Stories, Reels',
          'Marketing Collateral - Brochures, Flyers, Posters, Banners, Catalogs',
          'Packaging Design - Product packaging, Labels, Box design, Bottle design',
          'Infographics - Data visualization, Process flows, Educational graphics',
          'Presentation Design - Pitch decks, Sales presentations, Corporate PPTs',
          'Print Design - Business cards, Letterheads, Magazines, Annual reports',
          'Motion Graphics - Animated logos, Explainer animations, GIFs',
          'Illustration - Custom illustrations, Character design, Icon sets',
          'Email Templates - Responsive email designs, Newsletter templates',
          'Digital Ads - Display ads, Banner ads, Social media ads',
        ],
        benefits: [
          'Increase engagement 2-3X with scroll-stopping visuals',
          'Build brand consistency across all touchpoints',
          'Communicate complex ideas through infographics',
          'Save 30+ hours monthly with on-demand design support',
          'Access unlimited revisions until perfect',
        ],
        stats: [
          { metric: '12K+', label: 'Designs Created', description: 'Since 2018', icon: Palette },
          { metric: '7 Years', label: 'Experience', description: 'Design expertise', icon: TrendingUp },
          { metric: '24hrs', label: 'Turnaround Time', description: 'For urgent requests', icon: Clock },
          { metric: '96+', label: 'Clients Served', description: 'Growing businesses', icon: Users },
        ],
        packages: [
          {
            name: 'Design On-Demand',
            price: '₹18,000/month',
            features: ['10 designs per month', 'Social media graphics', 'Basic revisions', '48-hour turnaround', 'Stock images included', 'Source files'],
            ideal: 'Solopreneurs',
          },
          {
            name: 'Business Graphics',
            price: '₹45,000/month',
            features: ['30 designs per month', 'All design types', 'Unlimited revisions', '24-hour turnaround', 'Premium stock access', 'Dedicated designer', 'Priority support'],
            ideal: 'Growing businesses',
            popular: true,
          },
          {
            name: 'Enterprise Creative',
            price: 'Custom Pricing',
            features: ['Unlimited designs', 'Dedicated design team', 'Same-day turnaround', 'Brand guideline adherence', 'Video editing included', 'White-label service', '24/7 support'],
            ideal: 'Agencies & large teams',
          },
        ],
        process: [
          { step: '01', title: 'Design Brief', description: 'Submit your request via dashboard with details, references, dimensions, and deadline.' },
          { step: '02', title: 'Concept Creation', description: 'Our designers create initial concepts based on your brand guidelines and brief.' },
          { step: '03', title: 'Review & Feedback', description: 'Review designs, provide feedback, request changes. Unlimited revisions included.' },
          { step: '04', title: 'Finalization', description: 'Approve final design. Receive all formats (PNG, JPG, PDF, source files).' },
          { step: '05', title: 'Ongoing Support', description: 'Need tweaks? We\'re here. Monthly retainer includes unlimited minor adjustments.' },
        ],
        whyChooseUs: [
          { icon: Palette, title: 'Creative Excellence', description: '15K+ designs created with 98% client approval rate. Award-winning creative team.' },
          { icon: Clock, title: '24-Hour Turnaround', description: 'Fast delivery without compromising quality. Same-day for urgent requests.' },
          { icon: Award, title: 'Unlimited Revisions', description: 'We refine until you\'re 100% satisfied. No revision limits on monthly plans.' },
          { icon: Users, title: 'Dedicated Designers', description: 'Assigned designer learns your brand, ensures consistency across all projects.' },
        ],
        faqs: [
          { question: 'How do I submit design requests?', answer: 'Via our client dashboard — upload brief, references, brand guidelines. We start within 4 hours during business days.' },
          { question: 'What file formats do I receive?', answer: 'All formats: PNG (transparent), JPG, PDF (print-ready), Source files (PSD/AI). Custom formats on request.' },
          { question: 'Can you match my brand style?', answer: 'Absolutely! Upload brand guidelines once. All designs follow your colors, fonts, style, and tone automatically.' },
          { question: 'What if I need video editing?', answer: 'Video editing included in Enterprise plan. Available as add-on for other plans at ₹5,000/video.' },
        ],
        tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva Pro', 'Adobe After Effects', 'Adobe InDesign', 'Procreate', 'CorelDRAW'],
        industries: ['E-commerce', 'Technology', 'Real Estate', 'Healthcare', 'Education', 'Finance', 'Fashion', 'Food & Beverage', 'Hospitality', 'Automotive'],
        caseStudies: [
          { client: 'E-commerce Brand', result: '500+ product images & social graphics', time: '12 months', metric: '3X increase in social engagement' },
          { client: 'Tech Startup', result: 'Complete pitch deck + marketing collateral', time: '3 weeks', metric: 'Successfully secured Series A funding' },
          { client: 'Restaurant Chain', result: 'Menu design + packaging for 15 locations', time: '6 weeks', metric: '2X increase in takeaway orders' },
        ],
        testimonials: [
          { name: 'Neha Gupta', company: 'Fashion Forward', text: 'Their design team is incredible! We get 30+ stunning graphics monthly. Our social media engagement tripled. Best design partner ever!', rating: 5 },
          { name: 'Karan Shah', company: 'TechVentures', text: 'The pitch deck they designed helped us secure Series A funding. Investors specifically complimented the visual storytelling. Money well spent!', rating: 5 },
        ],
      },
      'media-production': {
        title: 'Media Production Services',
        description: 'Cinematic video production, commercial photography, drone aerials, event coverage, YouTube content, post-production editing — Broadcast-quality content that sells and inspires.',
        tagline: 'Cinematic Quality. Broadcast Production. Content That Sells.',
        icon: Camera,
        features: [
          'Video Production - Corporate videos, Commercials, Product videos, Testimonials',
          'Commercial Photography - Product photography, Corporate headshots, Food photography',
          'Drone Cinematography - Aerial shots, Property videos, Event coverage',
          'Event Coverage - Conferences, Weddings, Corporate events, Live streaming',
          'YouTube Content - Channel setup, Video production, Editing, Thumbnails',
          'Social Media Content - Reels, Stories, TikTok videos, Behind-the-scenes',
          'Animation & Motion Graphics - 2D/3D animation, Explainer videos, Logo animation',
          'Post-Production - Color grading, Sound design, VFX, Subtitle creation',
          'Documentary Filmmaking - Brand documentaries, Case study films',
          'Live Streaming - Multi-camera setup, Professional streaming for events',
        ],
        benefits: [
          'Increase engagement 3-5X with video content',
          'Boost conversions 2X with product videos',
          'Build trust with authentic testimonial videos',
          'Professional quality without in-house team costs',
          'Get broadcast-quality content that works everywhere',
        ],
        stats: [
          { metric: '198', label: 'Projects Completed', description: 'Since 2019', icon: Camera },
          { metric: '7 Years', label: 'Experience', description: 'Video production', icon: Play },
          { metric: '4K/6K', label: 'Production Quality', description: 'Cinema cameras', icon: Video },
          { metric: '3-5X', label: 'Engagement Lift', description: 'vs. static content', icon: TrendingUp },
        ],
        packages: [
          {
            name: 'Video Essentials',
            price: '₹50,000/video',
            features: ['1-2 minute video', 'Single location shoot', 'Basic editing', 'Color grading', 'Background music', '2 revision rounds', 'HD 1080p delivery'],
            ideal: 'Small businesses',
          },
          {
            name: 'Premium Production',
            price: '₹1,50,000/video',
            features: ['3-5 minute video', 'Multiple locations', 'Professional actors/models', 'Drone shots included', 'Advanced editing + VFX', 'Custom music/voiceover', 'Unlimited revisions', '4K delivery'],
            ideal: 'Brands & corporates',
            popular: true,
          },
          {
            name: 'Enterprise Campaign',
            price: 'Custom Pricing',
            features: ['Multiple videos', 'Full production crew', 'Cinema-grade equipment', 'Multiple shoot days', 'Full post-production', 'Social media cuts', 'Ad placements', 'Campaign strategy'],
            ideal: 'Large campaigns',
          },
        ],
        process: [
          { step: '01', title: 'Pre-Production Planning', description: 'Scriptwriting, storyboarding, shot list, location scouting, talent casting, shoot schedule.' },
          { step: '02', title: 'Production Day(s)', description: 'Professional shoot with cinema cameras, lighting, audio. Directed by experienced cinematographers.' },
          { step: '03', title: 'Post-Production', description: 'Video editing, color grading, sound design, motion graphics, VFX, subtitle creation.' },
          { step: '04', title: 'Review & Revisions', description: 'Review draft, provide feedback, request changes. We refine until you\'re 100% satisfied.' },
          { step: '05', title: 'Final Delivery', description: 'Receive all formats (YouTube, Instagram, TV, Cinema). Multiple aspect ratios included.' },
        ],
        whyChooseUs: [
          { icon: Camera, title: 'Cinema-Grade Equipment', description: '4K/6K cameras, professional lighting, cinema lenses, drone cinematography.' },
          { icon: Users, title: 'Experienced Crew', description: '10+ years combined experience. Worked with brands like Tata, Mahindra, Airtel.' },
          { icon: Play, title: 'High-Performance Content', description: 'Our videos consistently achieve strong view counts and engagement across YouTube, social media, TV.' },
          { icon: Award, title: 'Award-Winning Work', description: 'Multiple awards for cinematography, editing, and commercial production.' },
        ],
        faqs: [
          { question: 'How long does video production take?', answer: 'Simple video: 2-3 weeks. Premium production: 4-6 weeks. Large campaigns: 8-12 weeks. Timeline includes pre-production, shoot, and editing.' },
          { question: 'Do you provide actors/models?', answer: 'Yes! We handle casting and coordination with professional actors, models, or influencers based on your needs and budget.' },
          { question: 'Can you shoot at our location?', answer: 'Absolutely! We shoot anywhere in India. Our team brings all equipment. Location scouting assistance included.' },
          { question: 'What about music and voiceover?', answer: 'We provide licensed royalty-free music or can commission custom music. Professional voiceover artists in 10+ languages available.' },
        ],
        tools: ['RED Cinema Cameras', 'Sony A7SIII', 'DJI Drones', 'Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Final Cut Pro', 'Cinema 4D'],
        industries: ['E-commerce', 'Real Estate', 'Healthcare', 'Education', 'Technology', 'Hospitality', 'Fashion', 'Food & Beverage', 'Automotive', 'Finance'],
        caseStudies: [
          { client: 'Real Estate Developer', result: 'Property video tour with drone shots', time: '3 weeks', metric: 'Significant boost in property inquiries and sales' },
          { client: 'E-commerce Brand', result: '50 product videos for Amazon/Flipkart', time: '8 weeks', metric: '2X increase in conversion rate' },
          { client: 'Tech Company', result: 'Brand documentary + testimonial series', time: '6 weeks', metric: 'Strong views performance, 2X brand awareness' },
        ],
        testimonials: [
          { name: 'Rajesh Kumar', company: 'Skyline Properties', text: 'The property videos with drone shots are phenomenal! Our sales team closes deals 60% faster now. Best investment in marketing content!', rating: 5 },
          { name: 'Priya Nair', company: 'FashionHub', text: 'They produced 50 product videos for our e-commerce store. Our conversion rate doubled. Absolutely worth it!', rating: 5 },
        ],
      },
      'public-relations': {
        title: 'Public Relations & PR Services',
        description: 'Strategic PR campaigns, media placements (Times, ET, CNBC, etc.), crisis management, thought leadership, press release distribution — Building reputation through earned media coverage.',
        tagline: 'Build Reputation. Secure Coverage. Control Your Narrative.',
        icon: MessageSquare,
        features: [
          'PR Strategy & Planning - Media strategy, Messaging framework, Campaign planning',
          'Media Relations - Journalist outreach, Press kit creation, Media database',
          'Press Release Writing - Professional writing, Distribution to 500+ outlets',
          'Media Placements - Secure coverage in top publications (Times, ET, HT, etc.)',
          'Crisis Management - Reputation protection, Damage control, Response strategy',
          'Thought Leadership - LinkedIn articles, Guest posts, Op-eds, Speaking opportunities',
          'Brand Storytelling - Company stories, Founder profiles, Success narratives',
          'Event PR - Launch events, Press conferences, Media coverage',
          'Influencer Relations - Media influencer partnerships, Collaborations',
          'Monitoring & Reporting - Media monitoring, Coverage reports, Sentiment analysis',
        ],
        benefits: [
          'Build credibility and trust with third-party validation',
          'Reach millions through earned media coverage',
          'Establish founders as industry thought leaders',
          'Manage reputation and respond to crises effectively',
          'Generate high-quality backlinks for SEO',
        ],
        stats: [
          { metric: '89+', label: 'PR Campaigns', description: 'Executed successfully', icon: Newspaper },
          { metric: '7 Years', label: 'Experience', description: 'Media relations', icon: Target },
          { metric: '95%', label: 'Placement Success', description: 'Rate for pitches', icon: TrendingUp },
          { metric: '96+', label: 'Clients Served', description: 'Growing brands', icon: Award },
        ],
        packages: [
          {
            name: 'PR Starter',
            price: '₹55,000/month',
            features: ['2 press releases', 'Media outreach', 'Basic media monitoring', 'Monthly reporting', 'Email support'],
            ideal: 'Startups',
          },
          {
            name: 'PR Growth',
            price: '₹1,25,000/month',
            features: ['4 press releases', 'Guaranteed media placements (2-3 tier-2)', 'Crisis PR support', 'Thought leadership articles', 'Detailed analytics', 'Dedicated PR manager', 'Phone support'],
            ideal: 'Growing brands',
            popular: true,
          },
          {
            name: 'Enterprise PR',
            price: 'Custom Pricing',
            features: ['Unlimited press releases', 'Tier-1 media placements (Times, ET, CNBC)', 'Full crisis management', 'Speaking opportunities', 'Influencer relations', 'Real-time monitoring', '24/7 support'],
            ideal: 'Large corporates',
          },
        ],
        process: [
          { step: '01', title: 'PR Strategy', description: 'Understand your goals, define target media, craft key messages, identify news angles.' },
          { step: '02', title: 'Content Creation', description: 'Write press releases, thought leadership articles, pitch emails, media kits.' },
          { step: '03', title: 'Media Outreach', description: 'Pitch to journalists, editors, influencers. Follow up systematically for coverage.' },
          { step: '04', title: 'Placement & Monitoring', description: 'Secure media features. Monitor all mentions. Track sentiment and reach.' },
          { step: '05', title: 'Reporting & Optimization', description: 'Detailed monthly reports with coverage, impressions, AVE, sentiment analysis.' },
        ],
        whyChooseUs: [
          { icon: Newspaper, title: '500+ Media Connections', description: 'Strong relationships with journalists at Times, ET, HT, CNBC, Forbes, and more.' },
          { icon: Award, title: '95% Pitch Success', description: 'Industry-leading success rate for media placements. We know what works.' },
          { icon: Shield, title: 'Crisis Management', description: '24/7 crisis response team. Protect your reputation when it matters most.' },
          { icon: Users, title: 'Experienced PR Team', description: '12+ years combined experience. Former journalists on our team.' },
        ],
        faqs: [
          { question: 'How long to see media coverage?', answer: 'First placements typically within 4-6 weeks. Building consistent media presence takes 3-6 months of sustained effort.' },
          { question: 'Can you guarantee top-tier coverage?', answer: 'We cannot guarantee specific publications, but have 95% success rate. Our media relationships and compelling stories get consistent coverage.' },
          { question: 'What about crisis situations?', answer: 'We provide 24/7 crisis response. Our team drafts statements, coordinates media responses, and implements damage control strategies.' },
          { question: 'Do you write press releases?', answer: 'Yes! Professional press release writing included. We ensure newsworthiness, AP style compliance, and SEO optimization.' },
        ],
        tools: ['Cision', 'Meltwater', 'HARO', 'PRWeb', 'Business Wire', 'LinkedIn', 'Twitter/X', 'Google Alerts', 'Mention'],
        industries: ['Technology', 'Finance', 'Healthcare', 'Real Estate', 'Education', 'E-commerce', 'Professional Services', 'Manufacturing', 'Non-Profit', 'Government'],
        caseStudies: [
          { client: 'FinTech Startup', result: 'Secured coverage in ET, Forbes, YourStory', time: '4 months', metric: 'Successfully raised Series A (PR cited by investors)' },
          { client: 'Healthcare Chain', result: 'Crisis management during negative review incident', time: '2 weeks', metric: 'Successfully restored reputation and customer trust' },
          { client: 'Tech Company', result: 'Thought leadership campaign for CEO', time: '6 months', metric: '25+ media features, CEO now recognized industry expert' },
        ],
        testimonials: [
          { name: 'Vikram Singh', company: 'PayTech Solutions', text: 'They secured coverage in ET and Forbes which directly led to our Series A funding. Investors specifically mentioned the press coverage. Worth every rupee!', rating: 5 },
          { name: 'Dr. Meera Joshi', company: 'HealthCare Network', text: 'Saved us during a crisis! Their quick response and media strategy prevented major damage. Their PR expertise is invaluable!', rating: 5 },
        ],
      },
      'political-campaigns': {
        title: 'Political Campaign Services',
        description: 'Data-driven electoral strategy, voter analysis & targeting, digital advocacy, ground operations, messaging & positioning, OOH campaigns — 72% win rate across 34 campaigns. Win elections. Win hearts.',
        tagline: 'Win Elections. Win Hearts. Data-Driven Campaign Mastery.',
        icon: Target,
        features: [
          'Campaign Strategy - Electoral analysis, Opposition research, Winning strategy',
          'Voter Data & Analytics - Voter database, Demographic analysis, Micro-targeting',
          'Digital Campaigns - Social media, Google Ads, WhatsApp campaigns, Viral content',
          'Ground Operations - Door-to-door, Rallies, Public meetings, Volunteer coordination',
          'Messaging & Positioning - Candidate positioning, Key messages, Speech writing',
          'OOH Advertising - Hoardings, Banners, Vehicle branding, Wall painting',
          'Media Management - Press conferences, Media relations, TV/Radio interviews',
          'Opposition Research - Competitor analysis, Vulnerability assessment',
          'Volunteer Management - Recruitment, Training, Coordination',
          'Election Day Operations - Booth management, Get-out-the-vote (GOTV)',
        ],
        benefits: [
          'Increase vote share by 15-25% with data targeting',
          'Reach every voter with multi-channel approach',
          'Build grassroots support through ground operations',
          'Manage reputation and control narrative effectively',
          'Maximize ROI with budget-optimized campaigns',
        ],
        stats: [
          { metric: '72%', label: 'Win Rate', description: 'Across 34 campaigns', icon: Trophy },
          { metric: '34', label: 'Campaigns Run', description: 'Municipal to Assembly', icon: Target },
          { metric: '15-25%', label: 'Vote Share Increase', description: 'Typical improvement', icon: TrendingUp },
          { metric: '7 Years', label: 'Experience', description: 'Electoral campaigns', icon: Users },
        ],
        packages: [
          {
            name: 'Municipal Campaign',
            price: '₹5,00,000',
            features: ['Ward-level strategy', 'Social media campaigns', 'Basic ground operations', 'OOH advertising support', 'Volunteer coordination', '3 months duration'],
            ideal: 'Ward/Municipal elections',
          },
          {
            name: 'Assembly Campaign',
            price: '₹25,00,000',
            features: ['Comprehensive constituency strategy', 'Data-driven voter targeting', 'Full digital + ground campaigns', 'Media management', 'Opposition research', 'Dedicated campaign team', '6 months duration'],
            ideal: 'Assembly elections',
            popular: true,
          },
          {
            name: 'Parliamentary Campaign',
            price: 'Custom Pricing',
            features: ['Multi-constituency strategy', 'Advanced analytics & modeling', 'State-wide digital campaigns', 'Large-scale ground operations', 'Full media management', '24/7 war room', 'Exit poll analysis'],
            ideal: 'Lok Sabha elections',
          },
        ],
        process: [
          { step: '01', title: 'Research & Analysis', description: 'Voter demographics, Past election data, Opposition research, SWOT analysis, Winning strategy formulation.' },
          { step: '02', title: 'Campaign Planning', description: 'Budget allocation, Timeline, Team structure, Ground + Digital strategy, Content calendar.' },
          { step: '03', title: 'Multi-Channel Execution', description: 'Launch digital campaigns, Ground mobilization, OOH advertising, Media outreach — All channels active.' },
          { step: '04', title: 'Ground Mobilization', description: 'Door-to-door campaigns, Public meetings, Volunteer coordination, Booth-level planning.' },
          { step: '05', title: 'Election Day & GOTV', description: 'Booth management, Voter turnout drives, Real-time monitoring, Celebration planning!' },
        ],
        whyChooseUs: [
          { icon: Trophy, title: '72% Win Rate', description: '34 successful campaigns across municipal, assembly, and parliamentary elections.' },
          { icon: BarChart3, title: 'Data-Driven Strategy', description: 'Voter analytics, Micro-targeting, Predictive modeling for optimized campaigns.' },
          { icon: Users, title: 'Experienced Team', description: 'Political strategists, Data analysts, Digital marketers, Ground coordinators.' },
          { icon: Shield, title: 'Ethical Practices', description: 'We follow election commission guidelines. Clean campaigns. No illegal practices.' },
        ],
        faqs: [
          { question: 'What\'s your success rate?', answer: '72% win rate across 34 campaigns (24 wins, 10 losses). Success depends on candidate, constituency, and budget commitment.' },
          { question: 'How do you target voters?', answer: 'We use voter database analysis, demographic profiling, polling booth data, and micro-targeting for precise messaging to each voter segment.' },
          { question: 'What about ground campaigns?', answer: 'We coordinate door-to-door campaigns, public meetings, rallies, booth-level planning, and volunteer management for comprehensive ground coverage.' },
          { question: 'Is it legal and ethical?', answer: 'Yes! We strictly follow Election Commission guidelines. All expenses reported. No illegal practices. Clean, ethical campaigns only.' },
        ],
        tools: ['Voter Database Software', 'WhatsApp Business API', 'Social Media Management', 'Data Analytics Tools', 'Mapping Software', 'SMS Gateway', 'Call Center Software'],
        industries: ['Political Parties', 'Independent Candidates', 'Political Consultancies', 'NGOs/Advocacy Groups'],
        caseStudies: [
          { client: 'Assembly Candidate (Urban)', result: 'Won with 58% vote share', time: '6 months', metric: 'Increased vote share by 23% vs. last election' },
          { client: 'Municipal Candidate', result: 'Won ward election (first-time candidate)', time: '3 months', metric: '12,500 votes in 18,000-voter ward' },
          { client: 'Parliamentary Campaign', result: 'Comprehensive digital + ground campaign', time: '8 months', metric: 'Won with 4.2L votes, 15% margin' },
        ],
        testimonials: [
          { name: 'Hon. MLA Rajesh Sharma', company: 'Assembly Candidate', text: 'Their data-driven strategy and ground execution were phenomenal. We won with a 15% margin in a tough constituency. Highly recommend!', rating: 5 },
          { name: 'Corporator Priya Mehta', company: 'Municipal Candidate', text: 'As a first-time candidate, I had no idea where to start. They handled everything — strategy, digital, ground work. We won convincingly!', rating: 5 },
        ],
      },
      'ooh-advertising': {
        title: 'OOH (Out-of-Home) Advertising',
        description: 'Strategic outdoor advertising dominance: Premium billboards, metro/bus transit ads, airport branding, mall displays, digital OOH, street furniture — Command attention in the real world with high-impact placements.',
        tagline: 'Command Attention. Dominate Markets. Real-World Impact.',
        icon: Megaphone,
        features: [
          'Billboard Advertising - Premium locations, High-traffic routes, Lit/Unlit options',
          'Transit Advertising - Metro stations, Metro trains, Buses, Bus shelters',
          'Airport Advertising - Terminal displays, Baggage claim, Parking, Boarding gates',
          'Mall Advertising - Food court, Entrance, Escalator, Parking areas',
          'Digital OOH (DOOH) - LED screens, Digital billboards, Programmatic DOOH',
          'Street Furniture - Bus stops, Kiosks, Benches, Public spaces',
          'Railway Station Ads - Platform, Booking counters, Foot over bridges',
          'Cinema Advertising - Theater slides, Lobby displays, Screen advertising',
          'Experiential Marketing - Pop-up activations, Brand events, Sampling',
          'Creative Design & Production - Design, Printing, Installation, Maintenance',
        ],
        benefits: [
          'Reach millions daily with strategic placements',
          'Build brand awareness in target geographies',
          'Drive foot traffic to physical locations',
          'Complement digital campaigns with real-world presence',
          'Lower CPM than digital advertising',
        ],
        stats: [
          { metric: '156', label: 'Campaigns Executed', description: 'Since 2019', icon: TrendingUp },
          { metric: '7 Years', label: 'Experience', description: 'OOH advertising', icon: Target },
          { metric: '500+', label: 'Premium Locations', description: 'In our network', icon: MapPin },
          { metric: 'Low CPM', label: 'Cost Effective', description: 'vs. digital ads', icon: DollarSign },
        ],
        packages: [
          {
            name: 'Local Campaign',
            price: '₹1,50,000/month',
            features: ['5-8 billboard locations', 'Local high-traffic areas', 'Basic design included', 'Installation & maintenance', 'Monthly reporting'],
            ideal: 'Local businesses',
          },
          {
            name: 'City-Wide Campaign',
            price: '₹5,00,000/month',
            features: ['15-20 premium locations', 'Mix of billboards + transit', 'Professional design + printing', 'Digital OOH included', 'Metro/Bus branding', 'Bi-weekly reporting', 'Campaign optimization'],
            ideal: 'Regional brands',
            popular: true,
          },
          {
            name: 'National Campaign',
            price: 'Custom Pricing',
            features: ['Multi-city presence', 'Airport advertising', 'Premium digital OOH', 'Experiential activations', 'Dedicated account team', 'Real-time monitoring', 'Advanced analytics'],
            ideal: 'National brands',
          },
        ],
        process: [
          { step: '01', title: 'Location Strategy', description: 'Identify target audience, Select high-traffic locations, Negotiate premium placements.' },
          { step: '02', title: 'Creative Design', description: 'Design billboard creatives optimized for outdoor viewing, visibility, and brand impact.' },
          { step: '03', title: 'Production & Installation', description: 'High-quality printing, Professional installation, Quality checks, Lighting setup (if applicable).' },
          { step: '04', title: 'Campaign Monitoring', description: 'Regular site visits, Maintenance, Photo documentation, Impression tracking.' },
          { step: '05', title: 'Reporting & Optimization', description: 'Monthly reports with photos, impressions, reach. Optimize locations based on performance.' },
        ],
        whyChooseUs: [
          { icon: MapPin, title: '500+ Premium Locations', description: 'Extensive network of high-traffic billboards, transit ads, digital OOH across India.' },
          { icon: DollarSign, title: 'Best Rates Guaranteed', description: 'Direct relationships with media owners. No middlemen. 20-30% cost savings.' },
          { icon: Users, title: '156 Successful Campaigns', description: 'Proven track record across industries. We know what works and where.' },
          { icon: Award, title: 'End-to-End Service', description: 'Strategy, Design, Production, Installation, Maintenance — Everything handled.' },
        ],
        faqs: [
          { question: 'How do you select locations?', answer: 'Based on your target audience, demographics, traffic data, competitor analysis, and budget. We recommend optimal mix for maximum impact.' },
          { question: 'What about design and production?', answer: 'Full service included! Our team designs billboard creatives, handles printing, and coordinates installation and maintenance.' },
          { question: 'Can I see the billboards before?', answer: 'Yes! We provide site photos, location details, traffic data, and approvals before booking. Site visits can be arranged.' },
          { question: 'What\'s the minimum duration?', answer: 'Minimum 1 month for most locations. 3-6 month commitments get better rates. Longer durations offer 15-25% discounts.' },
        ],
        tools: ['Google Maps', 'Traffic Analytics', 'Adobe Photoshop', 'Adobe Illustrator', 'Large Format Printing', 'Installation Equipment'],
        industries: ['Real Estate', 'Automotive', 'Education', 'Healthcare', 'E-commerce', 'Finance', 'Hospitality', 'Fashion', 'Food & Beverage', 'Retail'],
        caseStudies: [
          { client: 'Real Estate Developer', result: '50 billboards across city for project launch', time: '3 months', metric: 'Strong property bookings, excellent campaign visibility' },
          { client: 'Automotive Brand', result: 'Metro + Bus branding during new model launch', time: '2 months', metric: 'High visibility, 40% showroom traffic increase' },
          { client: 'E-commerce App', result: 'Digital OOH campaign in 5 cities', time: '6 months', metric: '500K app installs attributed to OOH' },
        ],
        testimonials: [
          { name: 'Arjun Reddy', company: 'Skyline Developers', text: 'The billboard campaign generated excellent property bookings. Their location strategy was brilliant. Every location delivered results!', rating: 5 },
          { name: 'Kavita Sharma', company: 'AutoDrive', text: 'Metro branding during our launch created massive buzz. Showroom traffic increased 40%. Best offline marketing investment we made!', rating: 5 },
        ],
      },
      'radio-newspapers': {
        title: 'Radio & Newspaper Advertising',
        description: 'Traditional media with modern analytics: Prime-time radio spots, newspaper ads (Times, HT, Dainik), magazine features, media buying expertise — Proven reach with trackable ROI.',
        tagline: 'Traditional Channels. Modern Results. Proven Reach.',
        icon: Newspaper,
        features: [
          'Radio Advertising - Prime time spots, Morning/Evening shows, RJ mentions, Sponsorships',
          'Newspaper Ads - Times of India, Hindustan Times, Dainik, Regional papers',
          'Magazine Advertising - National magazines, Trade publications, Industry journals',
          'Classified Ads - Recruitment, Real estate, Business opportunities',
          'Media Planning & Buying - Rate negotiation, Optimal placements, Budget optimization',
          'Ad Creative Design - Print-ready designs for newspapers and magazines',
          'Radio Spot Production - Script writing, Voice-over, Jingle creation',
          'Campaign Tracking - Unique phone numbers, Promo codes, Landing pages',
          'Regional Media - Local newspapers, Regional radio, Language-specific media',
          'Advertorials & Sponsored Content - Native advertising in publications',
        ],
        benefits: [
          'Reach millions with traditional media channels',
          'Target specific demographics (age, location, language)',
          'Build credibility with established media brands',
          'Lower cost per reach than digital advertising',
          'Track ROI with modern attribution methods',
        ],
        stats: [
          { metric: '178', label: 'Campaigns Run', description: 'Since 2018', icon: Users },
          { metric: '7 Years', label: 'Experience', description: 'Media buying', icon: Target },
          { metric: '96+', label: 'Clients Served', description: 'Growing brands', icon: DollarSign },
          { metric: '3-5X', label: 'Typical ROI', description: 'Traditional media', icon: TrendingUp },
        ],
        packages: [
          {
            name: 'Local Reach',
            price: '₹75,000/month',
            features: ['3 newspaper ads', '10 radio spots', 'Local publications/stations', 'Basic creative design', 'Monthly reporting'],
            ideal: 'Local businesses',
          },
          {
            name: 'Regional Campaign',
            price: '₹2,50,000/month',
            features: ['8 newspaper ads (ToI, HT, Regional)', '30 radio spots (Prime time)', 'Professional creative', 'Jingle creation', 'Multiple markets', 'Detailed analytics', 'Dedicated manager'],
            ideal: 'Regional brands',
            popular: true,
          },
          {
            name: 'National Campaign',
            price: 'Custom Pricing',
            features: ['National newspaper placements', 'Multi-city radio', 'Magazine advertising', 'Advertorials', 'Celebrity voice-overs', 'Full production', 'Advanced tracking', 'Real-time reporting'],
            ideal: 'National advertisers',
          },
        ],
        process: [
          { step: '01', title: 'Media Planning', description: 'Audience research, Publication/Station selection, Rate negotiation, Budget optimization.' },
          { step: '02', title: 'Creative Production', description: 'Design newspaper ads, Write radio scripts, Record voice-overs, Create jingles.' },
          { step: '03', title: 'Media Booking', description: 'Book ad placements, Confirm dates/times, Set up tracking mechanisms (unique numbers/codes).' },
          { step: '04', title: 'Campaign Execution', description: 'Ads run on scheduled dates, Monitor placements, Ensure quality (tear sheets for print).' },
          { step: '05', title: 'Tracking & Reporting', description: 'Track responses (calls, website visits), Calculate ROI, Optimize future placements.' },
        ],
        whyChooseUs: [
          { icon: Newspaper, title: 'Media Buying Expertise', description: '15+ years relationships with Times, HT, Dainik, major radio networks. Best rates guaranteed.' },
          { icon: DollarSign, title: 'Cost-Effective Reach', description: '₹2-5 per reach (vs. ₹15-30 for digital). Massive reach at lower cost.' },
          { icon: BarChart3, title: 'Modern Tracking', description: 'Unique phone numbers, promo codes, landing pages — Track ROI like digital campaigns.' },
          { icon: Users, title: '178 Successful Campaigns', description: 'Proven track record across real estate, education, healthcare, automotive industries.' },
        ],
        faqs: [
          { question: 'How do you track radio/newspaper ROI?', answer: 'We use unique phone numbers, promo codes, dedicated landing pages to track responses. QR codes in print ads drive measurable web traffic.' },
          { question: 'Which newspapers do you work with?', answer: 'Times of India, Hindustan Times, Dainik Bhaskar, Dainik Jagran, Economic Times, and 50+ regional newspapers across India.' },
          { question: 'Can you create radio jingles?', answer: 'Yes! Our production team creates professional jingles, background scores, and records voice-overs in 10+ languages.' },
          { question: 'What\'s better: radio or newspaper?', answer: 'Depends on goals. Radio: Frequency, emotional connection. Newspaper: Credibility, detailed info. We recommend both for maximum impact.' },
        ],
        tools: ['Adobe InDesign', 'Adobe Illustrator', 'Audio Recording Software', 'Media Rate Cards', 'Tracking Software', 'Analytics Tools'],
        industries: ['Real Estate', 'Education', 'Healthcare', 'Automotive', 'Finance', 'Retail', 'Hospitality', 'Recruitment', 'Government', 'Events'],
        caseStudies: [
          { client: 'Real Estate Project', result: 'Newspaper + Radio campaign for project launch', time: '3 months', metric: 'Strong bookings, 2,500+ site visits tracked' },
          { client: 'Education Institute', result: 'Admission campaign in regional newspapers', time: '2 months', metric: '5,000+ inquiries, 1,200 admissions' },
          { client: 'Healthcare Chain', result: 'Radio campaign for new clinic launch', time: '1 month', metric: '15,000 calls, 80% appointment booking rate' },
        ],
        testimonials: [
          { name: 'Rajesh Gupta', company: 'Prime Properties', text: 'The newspaper + radio combo generated excellent bookings. Traditional media still works incredibly well when done right!', rating: 5 },
          { name: 'Dr. Anjali Nair', company: 'EduVision Institute', text: 'Regional newspaper ads brought 5,000+ admission inquiries. We filled all seats in 2 months. Fantastic results!', rating: 5 },
        ],
      },
      'product-marketing': {
        title: 'Product Marketing Services',
        description: 'Go-to-market mastery: Product positioning, launch strategies, lifecycle marketing, competitive analysis, pricing strategy, messaging — 97 successful launches, 18 products became market leaders.',
        tagline: 'Launch Products. Dominate Categories. Own Markets.',
        icon: Rocket,
        features: [
          'Go-to-Market Strategy - Market research, Launch planning, Channel strategy',
          'Product Positioning - Unique value prop, Competitive differentiation, Messaging framework',
          'Launch Campaigns - Pre-launch buzz, Launch day execution, Post-launch momentum',
          'Product-Led Growth - Freemium strategy, Viral loops, User activation',
          'Lifecycle Marketing - Onboarding, Engagement, Retention, Win-back campaigns',
          'Competitive Analysis - Market landscape, Competitor positioning, SWOT analysis',
          'Pricing Strategy - Price optimization, Packaging, Discount strategy',
          'Sales Enablement - Pitch decks, One-pagers, Demo videos, Case studies',
          'Customer Research - User interviews, Surveys, Focus groups, Beta testing',
          'Performance Analytics - Adoption metrics, Engagement tracking, Revenue attribution',
        ],
        benefits: [
          'Launch products successfully with 85% first-year survival rate',
          'Achieve product-market fit 60% faster with research',
          'Dominate categories and become market leader',
          'Maximize customer lifetime value with lifecycle marketing',
          'Reduce customer acquisition cost by 40% with PLG strategies',
        ],
        stats: [
          { metric: '97', label: 'Product Launches', description: 'Executed successfully', icon: Rocket },
          { metric: '18', label: 'Market Leaders', description: 'Created from launches', icon: Trophy },
          { metric: '85%', label: 'Success Rate', description: '1-year survival', icon: Award },
          { metric: '7 Years', label: 'Experience', description: 'Product marketing', icon: DollarSign },
        ],
        packages: [
          {
            name: 'Launch Essentials',
            price: '₹2,50,000',
            features: ['GTM strategy document', 'Product positioning', 'Launch campaign (3 months)', 'Sales collateral', 'Basic PR', 'Launch event support'],
            ideal: 'MVP launches',
          },
          {
            name: 'Complete Launch',
            price: '₹7,50,000',
            features: ['Comprehensive GTM strategy', 'Market research + positioning', 'Full launch campaign (6 months)', 'Multi-channel marketing', 'Sales enablement', 'PR + influencer', 'Post-launch optimization'],
            ideal: 'Major product launches',
            popular: true,
          },
          {
            name: 'Market Domination',
            price: 'Custom Pricing',
            features: ['Category creation strategy', 'Multi-market launch', 'Full-year campaign', 'Thought leadership', 'Analyst relations', 'Partnership marketing', 'Dedicated team', '24/7 support'],
            ideal: 'Enterprise products',
          },
        ],
        process: [
          { step: '01', title: 'Market Research', description: 'Customer interviews, Competitor analysis, Market sizing, Positioning workshops.' },
          { step: '02', title: 'GTM Strategy', description: 'Define target audience, Positioning, Messaging, Pricing, Channel strategy, Launch timeline.' },
          { step: '03', title: 'Pre-Launch Campaign', description: 'Build anticipation, Beta testing, Early access, Influencer seeding, Press outreach.' },
          { step: '04', title: 'Launch Execution', description: 'Coordinated multi-channel launch, PR blitz, Sales kickoff, Customer onboarding.' },
          { step: '05', title: 'Post-Launch Growth', description: 'Monitor metrics, Optimize messaging, Scale successful channels, Customer success programs.' },
        ],
        whyChooseUs: [
          { icon: Rocket, title: '97 Successful Launches', description: '85% survival rate after 1 year. We know what it takes to launch successfully.' },
          { icon: Trophy, title: '18 Market Leaders', description: 'Created category leaders from scratch through strategic positioning and execution.' },
          { icon: BarChart3, title: 'Data-Driven Approach', description: 'Research-backed strategies, A/B tested messaging, metric-driven optimization.' },
          { icon: Users, title: 'Full-Stack Team', description: 'Product marketers, Researchers, Content creators, PR specialists, Performance marketers.' },
        ],
        faqs: [
          { question: 'How long does a product launch take?', answer: 'Planning phase: 4-6 weeks. Pre-launch campaign: 6-8 weeks. Launch + Post-launch: 12-16 weeks. Total: 6-8 months for comprehensive launch.' },
          { question: 'What makes a successful launch?', answer: 'Clear positioning, Strong messaging, Multi-channel approach, Sales enablement, PR coverage, Customer success focus, Post-launch momentum.' },
          { question: 'Do you help with pricing?', answer: 'Yes! We conduct competitive pricing analysis, willingness-to-pay research, packaging strategy, and discount optimization.' },
          { question: 'What about B2B vs B2C launches?', answer: 'Different strategies! B2B: Sales enablement, Thought leadership, ABM. B2C: Viral loops, Influencers, Performance marketing. We specialize in both.' },
        ],
        tools: ['ProductBoard', 'Mixpanel', 'Google Analytics', 'HubSpot', 'Salesforce', 'Figma', 'Notion', 'Airtable', 'Amplitude', 'Intercom'],
        industries: ['SaaS', 'Technology', 'E-commerce', 'FinTech', 'HealthTech', 'EdTech', 'Consumer Apps', 'B2B Software', 'Hardware', 'Marketplaces'],
        caseStudies: [
          { client: 'SaaS Platform', result: 'Complete go-to-market strategy + launch', time: '7 months', metric: '10,000 signups, strong ARR growth in year 1' },
          { client: 'Consumer App', result: 'Product-led growth strategy + viral launch', time: '5 months', metric: '500K users, #3 app in category' },
          { client: 'B2B Software', result: 'Enterprise GTM + sales enablement', time: '9 months', metric: 'Strong revenue growth, 200+ enterprise customers' },
        ],
        testimonials: [
          { name: 'Karan Singh', company: 'CloudTech SaaS', text: 'They positioned us perfectly in a crowded market. Launch exceeded all targets with strong user acquisition. Brilliant strategy!', rating: 5 },
          { name: 'Priya Mehta', company: 'FitLife App', text: 'Our app became #3 in the category within 5 months of launch. Their viral growth strategies were phenomenal. Highly recommend!', rating: 5 },
        ],
      },
      'btl-activations': {
        title: 'BTL Activations & On-Ground Marketing',
        description: 'Direct consumer engagement through experiential marketing, product sampling, mall activations, event marketing, roadshows, and guerrilla campaigns. Create memorable brand experiences that drive word-of-mouth and conversions.',
        tagline: 'Engage. Experience. Convert.',
        icon: Users,
        features: [
          'Product Sampling & Live Demonstrations - Mall sampling, street sampling, door-to-door',
          'Mall Activations & Pop-up Stores - High-traffic retail locations, weekend activations',
          'Event Marketing & Sponsorships - Concerts, festivals, sports events, cultural events',
          'Guerrilla Marketing Campaigns - Flash mobs, street art, viral stunts, PR-worthy activations',
          'Street Activations & Roadshows - Mobile marketing vans, city tours, high-visibility locations',
          'College Campus Activations - University events, campus tours, student engagement',
          'Brand Experience Centers - Temporary experience zones, interactive brand spaces',
          'In-Store Promotions - Retail promotions, POS activations, store-within-store',
          'Kiosk & Counter Activations - Shopping malls, airports, railway stations',
          'Festival & Cultural Event Marketing - Diwali campaigns, regional festivals, celebrations',
          'Sports Event Activations - Cricket matches, marathons, sports tournaments',
          'Corporate Event Management - Launch events, dealer meets, employee engagement',
          'Launch Events & PR Stunts - Product launches, media events, influencer meets',
          'Influencer Meet & Greets - Fan engagement, photo ops, social media content creation',
          'Brand Ambassador Programs - Recruitment, training, management, performance tracking',
        ],
        benefits: [
          'Direct face-to-face consumer interaction and feedback',
          'Immediate product trial driving purchase intent',
          'Create memorable, shareable brand experiences',
          'Build emotional connections with target consumers',
          'Drive organic word-of-mouth marketing',
          'Collect valuable consumer data and insights',
          'Generate authentic social media content and buzz',
          'Boost brand awareness in specific geographic locations',
        ],
        stats: [
          { metric: '89+', label: 'Activations Executed', description: 'Across 15+ cities', icon: Target },
          { metric: '500K+', label: 'Consumers Engaged', description: 'Direct interactions', icon: Users },
          { metric: '7 Years', label: 'Experience', description: 'BTL expertise', icon: Award },
          { metric: '95%', label: 'Client Satisfaction', description: 'Repeat bookings', icon: Star },
        ],
        packages: [
          {
            name: 'Local Activation',
            price: '₹75,000 - ₹1,50,000',
            features: ['1-3 day activation', 'Single location (mall/event)', '5-8 brand ambassadors', 'Basic setup & branding', 'Product sampling (500-1000 units)', 'Photo/video documentation', 'Basic reporting'],
            ideal: 'Local launches & testing',
          },
          {
            name: 'City-Wide Campaign',
            price: '₹3,50,000 - ₹7,50,000',
            features: ['1-2 week campaign', 'Multiple locations (5-10 venues)', '15-25 brand ambassadors', 'Professional setup & branding', 'Product sampling (5000-10,000 units)', 'Photo/video team', 'Lead collection & CRM integration', 'Detailed analytics reporting'],
            ideal: 'City launches & brand building',
            popular: true,
          },
          {
            name: 'Multi-City Activation',
            price: 'Custom Pricing',
            features: ['Multi-week/month campaigns', 'Multiple cities simultaneously', '50+ brand ambassadors', 'Premium setup & experiential design', 'Large-scale sampling programs', 'Professional video production', 'Advanced analytics & insights', 'Dedicated campaign manager'],
            ideal: 'National product launches',
          },
        ],
        process: [
          { step: '01', title: 'Campaign Strategy & Objectives', description: 'Define activation goals, target audience demographics, key messages, success metrics, and budget allocation.' },
          { step: '02', title: 'Location Selection & Permits', description: 'Strategic venue selection based on footfall analysis, demographics, and brand fit. Secure all necessary permits and approvals.' },
          { step: '03', title: 'Creative Concept Development', description: 'Develop engaging activation concept, booth design, consumer journey, sampling strategy, and photo-worthy moments.' },
          { step: '04', title: 'Team Recruitment & Training', description: 'Hire and train brand ambassadors matching your brand personality. Product training, script preparation, engagement techniques.' },
          { step: '05', title: 'Setup & Execution', description: 'Professional setup, on-ground management, real-time monitoring, crowd management, and quality control.' },
          { step: '06', title: 'Data Collection & Lead Capture', description: 'Capture consumer leads, feedback, photos, videos, and real-time engagement metrics. CRM integration for follow-up.' },
          { step: '07', title: 'Reporting & ROI Analysis', description: 'Detailed post-campaign report with photos, videos, engagement stats, leads generated, consumer insights, and recommendations.' },
        ],
        whyChooseUs: [
          { icon: Users, title: 'Experienced Execution Team', description: '89+ activations executed with trained brand ambassadors across 15+ cities in India.' },
          { icon: Target, title: 'Strategic Location Intelligence', description: 'Data-driven venue selection using footfall analysis, demographics, and consumer behavior patterns.' },
          { icon: Zap, title: 'End-to-End Management', description: 'From concept to permits to execution to reporting - we handle everything so you can focus on your business.' },
          { icon: Award, title: '95% Satisfaction Rate', description: 'Most clients book repeat activations with us. Our quality execution builds long-term partnerships.' },
        ],
        faqs: [
          { question: 'What is BTL activation?', answer: 'Below-The-Line (BTL) activation refers to direct marketing activities that engage consumers face-to-face, creating memorable brand experiences through events, sampling, experiential marketing, and on-ground campaigns.' },
          { question: 'How do you measure activation success?', answer: 'We track footfall, consumer interactions, samples distributed, leads collected, social media mentions, photo/video content generated, and conduct post-activation surveys to measure brand recall and purchase intent.' },
          { question: 'What locations do you cover?', answer: 'We execute activations across India - metros (Mumbai, Delhi, Bangalore, Hyderabad, Pune), tier-2 cities (Indore, Jaipur, Lucknow, etc.), and even rural areas depending on your target audience and campaign objectives.' },
          { question: 'How much advance notice is needed?', answer: 'Minimum 3-4 weeks for planning, permit applications, team recruitment, and logistics coordination. Large multi-city campaigns need 6-8 weeks advance notice for proper execution.' },
          { question: 'Do you provide brand ambassadors?', answer: 'Yes! We recruit, train, and manage brand ambassadors matching your brand personality and target audience. All ambassadors receive product training and engagement script preparation.' },
        ],
        tools: ['Event Management Software', 'Lead Capture Tablets', 'CRM Integration Systems', 'Photo/Video Production Equipment', 'Booth Display Systems', 'PA & Sound Systems', 'Digital Check-in Apps', 'Analytics Dashboards'],
        industries: ['FMCG', 'Technology', 'Automotive', 'Fashion & Apparel', 'Food & Beverage', 'Healthcare & Wellness', 'Education', 'Telecom', 'Banking & Finance', 'E-commerce', 'Consumer Electronics', 'Beauty & Cosmetics'],
        caseStudies: [
          { client: 'FMCG Snack Brand', result: '10-city sampling campaign', time: '4 weeks', metric: '50,000 samples distributed, 12,000 qualified leads' },
          { client: 'Ed-Tech Startup', result: 'College campus activation series', time: '2 months', metric: '25 colleges covered, 15,000 student sign-ups' },
          { client: 'Fashion D2C Brand', result: 'Weekend mall activation + influencer meet', time: '3 days', metric: '5,000+ visitors engaged, 200 influencer interactions' },
        ],
        testimonials: [
          { name: 'Rahul Verma', company: 'FreshSnacks FMCG', text: 'Their 10-city BTL campaign was flawlessly executed. 50,000 samples distributed, 12,000 qualified leads collected. The team managed permits, logistics, ambassadors - everything! Phenomenal ROI on activation spend.', rating: 5 },
          { name: 'Sneha Patel', company: 'TechEdu Learning Platform', text: 'College activations across 25 campuses brought us 15,000 verified sign-ups. Their brand ambassadors were well-trained and professional. Complete turnkey solution - highly recommend!', rating: 5 },
        ],
      },
      'creative-campaigns': {
        title: 'Creative Concept & Campaign Execution',
        description: 'End-to-end creative campaigns from strategic concept to multi-channel execution. Integrated campaigns that combine digital, traditional, experiential, and PR for maximum impact. Big ideas that capture attention and drive measurable results.',
        tagline: 'Ideas That Connect. Campaigns That Convert.',
        icon: Lightbulb,
        features: [
          'Campaign Strategy & Planning - Objectives, audience research, competitive analysis, media planning',
          'Creative Concept Development - Big ideas, campaign themes, creative briefs, mood boards',
          'Copywriting & Messaging - Headlines, taglines, body copy, scripts, CTAs across all channels',
          'Visual Design & Art Direction - Campaign visuals, graphics, illustrations, photography direction',
          'Multi-Channel Campaign Rollout - Digital, print, outdoor, TV, radio, social, experiential integration',
          'TV Commercial Production - Concept to script to production to post-production',
          'Digital Ad Creative - Display ads, social ads, video ads, animated graphics, responsive designs',
          'Print Ad Design - Newspaper ads, magazine ads, brochures, flyers, direct mail',
          'Radio Spot Production - Script writing, voice-over casting, recording, sound design',
          'OOH Creative Development - Billboards, transit ads, mall branding, airport advertising creative',
          'Social Media Campaign Creative - Post designs, carousel ads, story templates, video content',
          'Influencer Campaign Management - Influencer selection, brief creation, content approval, tracking',
          'Campaign Performance Tracking - Real-time analytics, media monitoring, sentiment analysis',
          'A/B Testing & Optimization - Creative variations, message testing, audience optimization',
          'Campaign Reporting & Analytics - Comprehensive reports with ROI analysis and recommendations',
        ],
        benefits: [
          'Cohesive brand messaging across all marketing channels',
          'Professional creative that stands out in crowded markets',
          'Data-driven campaign optimization for better results',
          'Measurable results with transparent ROI tracking',
          'Single point of contact for entire campaign lifecycle',
          'Faster execution with our integrated creative team',
          'Cost-effective bundled services vs. hiring multiple agencies',
        ],
        stats: [
          { metric: '120+', label: 'Campaigns Executed', description: 'Across industries', icon: Rocket },
          { metric: '7 Years', label: 'Experience', description: 'Creative excellence', icon: Award },
          { metric: '50+', label: 'Creative Team', description: 'Writers, designers, strategists', icon: Users },
          { metric: '98%', label: 'Client Satisfaction', description: 'Repeat campaigns', icon: Star },
        ],
        packages: [
          {
            name: 'Digital Campaign',
            price: '₹2,50,000 - ₹5,00,000',
            features: ['Campaign strategy & planning', 'Creative concept (3 concepts)', 'Digital ad creative (20+ variations)', 'Social media content (40 posts)', 'Landing page design', 'Email campaign creative', '2 months execution support', 'Performance reporting'],
            ideal: 'Digital-first brands',
          },
          {
            name: 'Integrated Campaign',
            price: '₹8,00,000 - ₹15,00,000',
            features: ['Comprehensive campaign strategy', 'Creative concept & development', 'Digital + Print + OOH creative', 'Social media campaign (3 months)', 'Influencer campaign management', 'TV/Radio spot production', 'Landing pages & microsites', 'Full campaign execution', 'Monthly reporting & optimization'],
            ideal: 'Product launches & rebranding',
            popular: true,
          },
          {
            name: 'Enterprise Campaign',
            price: 'Custom Pricing',
            features: ['Multi-market campaign strategy', 'Big idea creative development', 'TV commercial production', 'All-channel creative rollout', 'Celebrity/Influencer partnerships', 'Event & experiential integration', 'PR & media buying coordination', 'Dedicated campaign team', 'Real-time analytics dashboard'],
            ideal: 'National & international launches',
          },
        ],
        process: [
          { step: '01', title: 'Discovery & Research', description: 'Deep dive into your brand, market, competitors, and target audience. Identify opportunities and insights.' },
          { step: '02', title: 'Strategy & Planning', description: 'Develop campaign objectives, messaging strategy, channel selection, media plan, and success metrics.' },
          { step: '03', title: 'Creative Concepting', description: 'Brainstorm big ideas, develop 2-3 campaign concepts, create mood boards and storyboards for client review.' },
          { step: '04', title: 'Creative Production', description: 'Design all campaign assets - digital ads, print ads, OOH creative, videos, social content, website pages.' },
          { step: '05', title: 'Campaign Launch', description: 'Coordinate multi-channel rollout with precise timing. Ensure all assets are live and tracking is set up.' },
          { step: '06', title: 'Monitoring & Optimization', description: 'Track performance daily, optimize underperforming channels, scale winning creative, test new variations.' },
          { step: '07', title: 'Reporting & Analysis', description: 'Comprehensive campaign report with reach, engagement, conversions, ROI, insights, and recommendations.' },
        ],
        whyChooseUs: [
          { icon: Lightbulb, title: 'Strategic Creative Thinking', description: '120+ integrated campaigns executed with proven results across digital, traditional, and experiential channels.' },
          { icon: Users, title: 'Full-Service Team', description: '50+ specialists - strategists, copywriters, designers, video producers, media planners - all under one roof.' },
          { icon: BarChart3, title: 'Data-Driven Optimization', description: 'Every campaign tracked with analytics. We optimize based on real performance data, not gut feelings.' },
          { icon: Award, title: 'Award-Winning Work', description: 'Multiple creative awards and 98% client satisfaction. We create campaigns that win awards and drive business results.' },
        ],
        faqs: [
          { question: 'What is an integrated campaign?', answer: 'An integrated campaign uses multiple marketing channels (digital ads, social media, TV, print, OOH, radio, events) working together with consistent messaging to achieve campaign objectives. More effective than single-channel campaigns.' },
          { question: 'How long does campaign development take?', answer: 'Digital campaigns: 3-4 weeks. Integrated campaigns with TV/video: 6-8 weeks. Large enterprise campaigns: 10-12 weeks. Timeline depends on creative complexity and production requirements.' },
          { question: 'Do you handle media buying?', answer: 'We create all campaign creative and can coordinate with your media buying agency, or we can handle media buying for you through our trusted media partners.' },
          { question: 'Can you work with our existing brand guidelines?', answer: 'Absolutely! We work within your brand guidelines while bringing fresh creative ideas. If you need brand guideline updates, we can help with that too.' },
          { question: 'How do you measure campaign success?', answer: 'We define KPIs upfront (reach, engagement, leads, sales, ROI, brand lift) and track them throughout the campaign. Monthly reports show what\'s working and where we\'re optimizing.' },
        ],
        tools: ['Adobe Creative Cloud', 'Figma', 'Canva Pro', 'Final Cut Pro', 'Adobe Premiere', 'After Effects', 'Google Analytics', 'Meta Business Suite', 'Sprinklr', 'Hootsuite', 'Google Ads', 'SEMrush', 'Ahrefs'],
        industries: ['E-commerce', 'Technology', 'FMCG', 'Automotive', 'Real Estate', 'Healthcare', 'Education', 'Finance', 'Fashion', 'Food & Beverage', 'Entertainment', 'Travel & Hospitality'],
        caseStudies: [
          { client: 'E-commerce Fashion Brand', result: 'Festive season integrated campaign', time: '3 months', metric: '2.5X sales lift during campaign period' },
          { client: 'Tech Startup', result: 'Product launch campaign - digital + OOH + PR', time: '2 months', metric: '50,000 sign-ups in first month' },
          { client: 'Real Estate Developer', result: 'Property launch - TV + Digital + Events', time: '4 months', metric: '85% inventory sold within campaign period' },
        ],
        testimonials: [
          { name: 'Vikram Malhotra', company: 'StyleHub Fashion', text: 'Their festive campaign creative was outstanding! Integrated digital, social, influencer, and OOH perfectly. Sales increased 2.5X during the campaign. The creative work won us several industry awards too!', rating: 5 },
          { name: 'Anjali Kapoor', company: 'NeoTech Solutions', text: 'They took our product launch from concept to execution flawlessly. The campaign generated 50,000 sign-ups in the first month. Their strategic thinking and creative execution are world-class!', rating: 5 },
        ],
      },
    };

    return serviceDatabase;
  };

  const serviceData = getServiceData();
  const currentService = serviceData[slug || 'digital-marketing'] || serviceData['digital-marketing'];
  const Icon = currentService.icon;
  
  // SEO Data
  const seoData = getPageKeywords('services', slug);
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: currentService.title, path: `/services/${slug}` },
  ];

  return (
    <div className="bg-black">
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={getAllKeywords('services', slug)}
        ogType="website"
      />
      
      {/* Structured Data */}
      <StructuredData 
        schema={[
          organizationSchema,
          getWebPageSchema(seoData.title, seoData.description, `/services/${slug}`, breadcrumbs),
          getBreadcrumbSchema(breadcrumbs),
          getServiceSchema({
            name: currentService.title,
            description: currentService.description,
            slug: slug || 'digital-marketing',
          }),
        ]} 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[0.8125rem] text-yellow-500 hover:text-yellow-400 transition-colors duration-200 mb-8 font-medium"
          >
            <ArrowLeft size={16} />
            Back to All Services
          </Link>

          <Icon className="text-white mb-6" size={56} />
          
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 leading-tight">
            {currentService.title}
          </h1>
          <p className="text-[0.9375rem] leading-relaxed text-yellow-500 mb-6 italic font-medium">
            {currentService.tagline}
          </p>
          <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-10 max-w-3xl">
            {currentService.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center gap-2 text-[0.9375rem] font-semibold shadow-lg hover:shadow-yellow-500/50"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919669988666"
              className="glass-card hover:bg-white/10 px-8 py-4 rounded-xl transition-colors duration-200 inline-flex items-center gap-2 text-[0.9375rem] font-semibold"
            >
              Call: +91 96699 88666
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">PROVEN RESULTS</p>
            <h2 className="mb-12 text-center leading-tight">Performance Metrics</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {currentService.stats.map((stat: any, index: number) => {
                const StatIcon = stat.icon;
                const span = index % 3 === 0 ? 'sm:col-span-2' : '';
                return (
                  <div key={index} className={`glass-card !p-6 text-center ${span}`}>
                    <StatIcon className="mx-auto mb-4 text-white" size={32} />
                    <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-3">{stat.metric}</div>
                    <h3 className="text-[1.375rem] font-medium mb-2 leading-tight">{stat.label}</h3>
                    <p className="text-[0.8125rem] text-gray-400 leading-relaxed">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">WHAT YOU GET</p>
            <h2 className="mb-12 text-center leading-tight">Comprehensive Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div className="glass-strong !p-6">
                <h3 className="text-[1.375rem] font-medium mb-6 leading-tight">What's Included</h3>
                <div className="space-y-3">
                  {currentService.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 text-yellow-500 mt-0.5" size={20} />
                      <p className="text-[0.8125rem] leading-relaxed text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-strong !p-6">
                <h3 className="text-[1.375rem] font-medium mb-6 leading-tight">Key Benefits</h3>
                <div className="space-y-3">
                  {currentService.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="flex-shrink-0 text-yellow-500 mt-0.5" size={20} />
                      <p className="text-[0.8125rem] leading-relaxed text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">WHY INCHTOMILEZ</p>
            <h2 className="mb-4 text-center leading-tight">What Makes Us Different</h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Our unique approach and proven methodologies set us apart from competitors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {currentService.whyChooseUs.map((reason: any, index: number) => {
                const ReasonIcon = reason.icon;
                const span = index % 3 === 0 ? 'sm:col-span-2' : '';
                const rowSpan = index === 0 ? 'sm:row-span-2' : '';
                return (
                  <div key={index} className={`glass-card !p-6 ${span} ${rowSpan}`}>
                    <ReasonIcon className="mb-4 text-white" size={36} />
                    <h3 className="text-[1.375rem] font-medium mb-3 leading-tight">{reason.title}</h3>
                    <p className="text-[0.8125rem] text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">TRANSPARENT PRICING</p>
            <h2 className="mb-4 text-center leading-tight">Flexible Packages for Every Budget</h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Choose the package that aligns with your business goals and budget. All packages customizable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {currentService.packages.map((pkg: any, index: number) => (
                <div
                  key={index}
                  className={`${pkg.popular ? 'glass-strong' : 'glass-card'} !p-6 ${pkg.popular ? 'border-2 border-yellow-500/50' : ''}`}
                >
                  {pkg.popular && (
                    <div className="inline-block bg-yellow-500 text-black px-3 py-1.5 rounded-lg mb-4 text-[0.8125rem] font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-[1.375rem] font-medium mb-3 leading-tight">{pkg.name}</h3>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">{pkg.price}</div>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                        <p className="text-[0.8125rem] text-gray-400 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[0.8125rem] text-gray-500 italic pt-4 border-t border-white/10">
                    Ideal for: {pkg.ideal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">OUR PROCESS</p>
            <h2 className="mb-4 text-center leading-tight">How We Deliver Excellence</h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Our proven 5-step methodology ensures consistent, measurable results every time.
            </p>

            <div className="space-y-6">
              {currentService.process.map((step: any) => (
                <div key={step.step} className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-200">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-4xl md:text-5xl font-bold text-yellow-500">{step.step}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.375rem] font-medium mb-3 leading-tight">{step.title}</h3>
                      <p className="text-[0.8125rem] text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="border-t border-white/10 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">POWERED BY</p>
            <h2 className="mb-4 text-center leading-tight">Technologies & Tools We Use</h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-8 text-center max-w-3xl mx-auto">
              Best-in-class platforms and tools for superior results and efficiency.
            </p>
          </div>

          <AutoCarousel speed="normal">
            {currentService.tools.map((tool: string, index: number) => (
              <div key={index} className="glass min-w-[180px] sm:min-w-[220px] flex-shrink-0 text-center p-6 snap-center">
                <p className="text-[0.9375rem] leading-relaxed font-medium">{tool}</p>
              </div>
            ))}
          </AutoCarousel>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">INDUSTRY EXPERTISE</p>
            <h2 className="mb-12 text-center leading-tight">Industries We Serve</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              {currentService.industries.map((industry: string, index: number) => (
                <div key={index} className="glass-card !p-6 text-center">
                  <p className="text-[0.8125rem]">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">SUCCESS STORIES</p>
            <h2 className="mb-12 text-center leading-tight">Real Results for Real Businesses</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {currentService.caseStudies.map((study: any, index: number) => {
                const span = index === 0 ? 'sm:col-span-2' : '';
                const rowSpan = index === 0 ? 'sm:row-span-2' : '';
                return (
                  <div key={index} className={`glass-strong !p-6 ${span} ${rowSpan}`}>
                    <h3 className="text-[1.375rem] font-medium mb-4 leading-tight">{study.client}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[0.8125rem] text-gray-500 mb-1">Result</p>
                          <p className="text-[0.9375rem] leading-relaxed text-white font-medium">{study.result}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[0.8125rem] text-gray-500 mb-1">Timeline</p>
                          <p className="text-[0.9375rem] leading-relaxed text-white font-medium">{study.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BarChart3 size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[0.8125rem] text-gray-500 mb-1">Key Metric</p>
                          <p className="text-[0.9375rem] leading-relaxed text-white font-medium">{study.metric}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">CLIENT TESTIMONIALS</p>
            <h2 className="mb-12 text-center leading-tight">What Our Clients Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {currentService.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="glass-card !p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[0.9375rem] leading-relaxed font-semibold">{testimonial.name}</p>
                    <p className="text-[0.8125rem] text-yellow-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">FAQS</p>
            <h2 className="mb-12 text-center leading-tight">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {currentService.faqs.map((faq: any, index: number) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="glass rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/5"
                >
                  <AccordionTrigger className="px-6 py-5">
                    <h3 className="text-[1.375rem] font-medium text-left leading-tight">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-[0.8125rem] text-gray-400 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 leading-tight">Ready to Get Started?</h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-10 max-w-2xl mx-auto">
              Book a free consultation to discuss your project goals. Get a customized proposal with transparent pricing, clear timelines, and projected ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-5 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 text-[0.9375rem] font-semibold shadow-xl hover:shadow-yellow-500/50"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="glass-card hover:bg-white/10 px-10 py-5 rounded-xl transition-colors duration-200 inline-flex items-center justify-center gap-2 text-[0.9375rem] font-semibold"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
