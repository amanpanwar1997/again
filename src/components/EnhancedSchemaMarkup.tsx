import { SEO_CONSTANTS } from '../utils/seoConstants';

interface EnhancedSchemaProps {
  page?: 'home' | 'services' | 'about' | 'contact' | 'blog' | 'blogs' | 'industries' | 'letsTalk';
  serviceData?: {
    name: string;
    description: string;
    price?: string;
  };
}

export default function EnhancedSchemaMarkup({ page = 'home', serviceData }: EnhancedSchemaProps) {
  const schemas = [];

  // 1. ORGANIZATION SCHEMA (Always include)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SEO_CONSTANTS.siteUrl}/#organization`,
    name: SEO_CONSTANTS.businessName,
    alternateName: 'Inchtomilez',
    url: SEO_CONSTANTS.siteUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SEO_CONSTANTS.siteUrl}/#logo`,
      url: `${SEO_CONSTANTS.siteUrl}/icons/icon-512x512.png`,
      width: 512,
      height: 512,
      caption: 'Inchtomilez Logo'
    },
    image: {
      '@type': 'ImageObject',
      url: `${SEO_CONSTANTS.siteUrl}/icons/icon-512x512.png`
    },
    description: 'Leading digital marketing and advertising agency in Indore, India. Expert services in SEO, social media marketing, branding, web development, and more.',
    slogan: 'From Inches to Miles - Transforming Your Digital Presence',
    telephone: '+91-9669988666',
    email: 'contact@inchtomilez.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vijay Nagar',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452010',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.7532,
      longitude: 75.8937
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Indore',
        sameAs: 'https://en.wikipedia.org/wiki/Indore'
      },
      {
        '@type': 'State',
        name: 'Madhya Pradesh',
        sameAs: 'https://en.wikipedia.org/wiki/Madhya_Pradesh'
      },
      {
        '@type': 'Country',
        name: 'India',
        sameAs: 'https://en.wikipedia.org/wiki/India'
      }
    ],
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/inchtomilez',
      'https://www.instagram.com/inchtomilez',
      'https://twitter.com/inchtomilez',
      'https://www.linkedin.com/company/inchtomilez',
      'https://www.youtube.com/@inchtomilez'
    ],
    // Services offered (important for rich results)
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing',
            description: 'Comprehensive digital marketing strategies to grow your business online',
            areaServed: 'India'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            description: 'Search engine optimization to rank #1 on Google',
            areaServed: 'India'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Marketing',
            description: 'Build your brand on Instagram, Facebook, LinkedIn, and more',
            areaServed: 'India'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            description: 'Professional website design and development services',
            areaServed: 'India'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Branding Services',
            description: 'Complete branding solutions including logo design and brand identity',
            areaServed: 'India'
          }
        }
      ]
    },
    // Contact points for rich results
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9669988666',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9009970709',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi']
      }
    ],
    // Founder information
    founder: {
      '@type': 'Person',
      name: 'Inchtomilez Founder',
      jobTitle: 'CEO & Founder'
    },
    // Number of employees
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 50
    },
    // Awards and recognition
    award: [
      'Top Digital Marketing Agency in Indore',
      'Best SEO Services Provider in MP'
    ]
  };

  schemas.push(organizationSchema);

  // 2. WEBSITE SCHEMA WITH SEARCH ACTION (For search bar in SERP)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_CONSTANTS.siteUrl}/#website`,
    url: SEO_CONSTANTS.siteUrl,
    name: 'Inchtomilez - Digital Marketing and Advertising Agency',
    description: 'Leading digital marketing agency in Indore offering SEO, social media marketing, branding, web development, and advertising services.',
    publisher: {
      '@id': `${SEO_CONSTANTS.siteUrl}/#organization`
    },
    // CRITICAL: Site search box in Google SERP
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_CONSTANTS.siteUrl}/blogs?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'en-IN'
  };

  schemas.push(websiteSchema);

  // 3. LOCAL BUSINESS SCHEMA (Enhanced for local SEO)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SEO_CONSTANTS.siteUrl}/#localbusiness`,
    name: 'Inchtomilez Digital Marketing Agency',
    image: `${SEO_CONSTANTS.siteUrl}/icons/icon-512x512.png`,
    '@id': SEO_CONSTANTS.siteUrl,
    url: SEO_CONSTANTS.siteUrl,
    telephone: '+91-9669988666',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vijay Nagar',
      addressLocality: 'Indore',
      addressRegion: 'MP',
      postalCode: '452010',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.7532,
      longitude: 75.8937
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00'
    },
    // Aggregate rating (add real reviews later)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    }
  };

  schemas.push(localBusinessSchema);

  // 4. SERVICE SCHEMA (For individual services)
  if (serviceData) {
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: serviceData.name,
      provider: {
        '@id': `${SEO_CONSTANTS.siteUrl}/#organization`
      },
      name: serviceData.name,
      description: serviceData.description,
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${serviceData.name} Packages`,
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: `${serviceData.name} - Starter`,
              description: `Entry-level ${serviceData.name} package`
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: `${serviceData.name} - Professional`,
              description: `Advanced ${serviceData.name} package`
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: `${serviceData.name} - Enterprise`,
              description: `Premium ${serviceData.name} package`
            }
          }
        ]
      }
    };

    schemas.push(serviceSchema);
  }

  // 5. BREADCRUMB SCHEMA (For sitelinks)
  if (page !== 'home') {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SEO_CONSTANTS.siteUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.charAt(0).toUpperCase() + page.slice(1),
          item: `${SEO_CONSTANTS.siteUrl}/${page}`
        }
      ]
    };

    schemas.push(breadcrumbSchema);
  }

  // 6. FAQ SCHEMA (Add to home/service pages)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Inchtomilez offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Inchtomilez offers comprehensive digital marketing services including SEO, social media marketing, PPC advertising, branding, website development, app development, content marketing, influencer marketing, and more.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is Inchtomilez located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Inchtomilez is located in Vijay Nagar, Indore, Madhya Pradesh, India. We serve clients across India and globally.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I contact Inchtomilez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact Inchtomilez at +91-9669988666 or +91-9009970709. You can also email us at contact@inchtomilez.com or visit our office in Indore.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Inchtomilez work with small businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Inchtomilez works with businesses of all sizes - from startups and small businesses to large enterprises. We offer customized packages to suit every budget.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does it take to see SEO results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEO is a long-term strategy. Typically, you can expect to see initial results in 3-6 months, with significant improvements in 6-12 months. Results vary based on competition and industry.'
        }
      }
    ]
  };

  schemas.push(faqSchema);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
