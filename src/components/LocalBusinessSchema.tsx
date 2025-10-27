import { useEffect } from 'react';

export default function LocalBusinessSchema() {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = document.createElement('script');
    localBusinessSchema.type = 'application/ld+json';
    localBusinessSchema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AdvertisingAgency',
      '@id': 'https://inchtomilez.com/#organization',
      'name': 'Inchtomilez Digital Marketing and Advertising Agency',
      'alternateName': 'Inchtomilez',
      'description': 'Leading digital marketing and advertising agency in Indore, Madhya Pradesh. Offering SEO, social media marketing, branding, web development, and comprehensive digital solutions for businesses across India.',
      'image': 'https://inchtomilez.com/logo.png',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://inchtomilez.com/logo.png',
        'width': '600',
        'height': '60'
      },
      'url': 'https://inchtomilez.com',
      'telephone': '+91-9669988666',
      'email': 'contact@inchtomilez.com',
      'priceRange': '$$-$$$',
      'currenciesAccepted': 'INR',
      'paymentAccepted': 'Cash, Credit Card, Debit Card, UPI, Bank Transfer',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Vijay Nagar',
        'addressLocality': 'Indore',
        'addressRegion': 'MP',
        'postalCode': '452010',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 22.7534141,
        'longitude': 75.8972057
      },
      'hasMap': 'https://www.google.com/maps/place/Inchtomilez+-+Digital+Marketing+Agency+%7C+Advertising+Agency+In+Indore/@22.7534141,75.8946308,1069m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3962fd0025e4a99b:0xfd87631a2b62db28!8m2!3d22.7534141!4d75.8972057!16s%2Fg%2F11vz4y7d37',
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '10:00',
          'closes': '19:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '10:00',
          'closes': '18:00'
        }
      ],
      'sameAs': [
        'https://www.facebook.com/inchtomilez',
        'https://www.instagram.com/inchtomilez',
        'https://www.linkedin.com/company/inchtomilez',
        'https://twitter.com/inchtomilez',
        'https://www.youtube.com/@inchtomilez'
      ],
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+91-9669988666',
          'contactType': 'customer service',
          'contactOption': 'TollFree',
          'areaServed': ['IN', 'Indore', 'Madhya Pradesh'],
          'availableLanguage': ['en', 'hi']
        },
        {
          '@type': 'ContactPoint',
          'telephone': '+91-9009970709',
          'contactType': 'sales',
          'contactOption': 'TollFree',
          'areaServed': ['IN', 'Indore', 'Madhya Pradesh'],
          'availableLanguage': ['en', 'hi']
        }
      ],
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Indore',
          'containedIn': {
            '@type': 'State',
            'name': 'Madhya Pradesh'
          }
        },
        {
          '@type': 'State',
          'name': 'Madhya Pradesh'
        },
        {
          '@type': 'Country',
          'name': 'India'
        }
      ],
      'serviceArea': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': 22.7534141,
          'longitude': 75.8972057
        },
        'geoRadius': '500000'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Digital Marketing & Advertising Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Digital Marketing',
              'description': 'Comprehensive digital marketing solutions including SEO, SEM, and online advertising',
              'provider': {
                '@id': 'https://inchtomilez.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'SEO Services',
              'description': 'Search engine optimization for improved rankings and organic traffic',
              'provider': {
                '@id': 'https://inchtomilez.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Social Media Marketing',
              'description': 'Social media strategy, content creation, and paid advertising campaigns',
              'provider': {
                '@id': 'https://inchtomilez.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Branding Services',
              'description': 'Brand identity, logo design, and brand strategy development',
              'provider': {
                '@id': 'https://inchtomilez.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Web Development',
              'description': 'Custom website design and development with responsive design',
              'provider': {
                '@id': 'https://inchtomilez.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Advertising Services',
              'description': 'Traditional and digital advertising campaigns across all channels',
              'provider': {
                '@id': 'https://inchtomilez.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'E-Commerce Marketing',
              'description': 'Complete e-commerce solutions and online store optimization',
              'provider': {
                '@id': 'https://inchtomilez.com/#organization'
              }
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Media Production',
              'description': 'Professional video production, photography, and multimedia content',
              'provider': {
                '@id': 'https://inchtomilez.com/#organization'
              }
            }
          }
        ]
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '127',
        'bestRating': '5',
        'worstRating': '1'
      },
      'review': [
        {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5'
          },
          'author': {
            '@type': 'Person',
            'name': 'Local Business Owner'
          },
          'reviewBody': 'Excellent digital marketing services. Highly recommended for businesses in Indore.'
        }
      ],
      'founder': {
        '@type': 'Person',
        'name': 'Inchtomilez Team'
      },
      'foundingDate': '2015',
      'numberOfEmployees': {
        '@type': 'QuantitativeValue',
        'value': '25'
      },
      'slogan': 'Transforming Brands into Market Leaders',
      'knowsAbout': [
        'Digital Marketing',
        'SEO',
        'Social Media Marketing',
        'Web Development',
        'Branding',
        'Advertising',
        'E-Commerce',
        'Content Marketing',
        'Video Production',
        'Graphic Design'
      ]
    });

    // Organization Schema
    const organizationSchema = document.createElement('script');
    organizationSchema.type = 'application/ld+json';
    organizationSchema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://inchtomilez.com/#organization',
      'name': 'Inchtomilez',
      'url': 'https://inchtomilez.com',
      'logo': 'https://inchtomilez.com/logo.png',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-9669988666',
        'contactType': 'customer support',
        'email': 'contact@inchtomilez.com'
      }
    });

    // Website Schema
    const websiteSchema = document.createElement('script');
    websiteSchema.type = 'application/ld+json';
    websiteSchema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://inchtomilez.com/#website',
      'url': 'https://inchtomilez.com',
      'name': 'Inchtomilez Digital Marketing Agency',
      'description': 'Best digital marketing agency in Indore offering SEO, social media, branding, and web development services',
      'publisher': {
        '@id': 'https://inchtomilez.com/#organization'
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': 'https://inchtomilez.com/blogs?search={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    });
    
    document.head.appendChild(localBusinessSchema);
    document.head.appendChild(organizationSchema);
    document.head.appendChild(websiteSchema);
    
    return () => {
      if (document.head.contains(localBusinessSchema)) {
        document.head.removeChild(localBusinessSchema);
      }
      if (document.head.contains(organizationSchema)) {
        document.head.removeChild(organizationSchema);
      }
      if (document.head.contains(websiteSchema)) {
        document.head.removeChild(websiteSchema);
      }
    };
  }, []);

  return null;
}
