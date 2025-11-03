// Structured Data (Schema.org JSON-LD) for SEO

export interface SchemaData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

const baseUrl = 'https://inchtomilez.com';
const companyName = 'Inchtomilez Digital Marketing & Advertising Agency';
const companyPhone = '+91-9669988666';
const companyEmail = 'hello@inchtomilez.com';
const companyAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Vijay Nagar',
  addressLocality: 'Indore',
  addressRegion: 'Madhya Pradesh',
  postalCode: '452010',
  addressCountry: 'IN',
};

// Organization Schema (goes on every page)
export const organizationSchema: SchemaData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  name: companyName,
  legalName: 'Inchtomilez Digital Marketing & Advertising Agency',
  url: baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${baseUrl}/logo.png`,
    width: '600',
    height: '200',
  },
  image: `${baseUrl}/og-image.png`,
  description: 'Leading digital marketing and advertising agency in Indore, India. Expert SEO, PPC, branding, web development, and creative services.',
  telephone: companyPhone,
  email: companyEmail,
  address: companyAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '22.7196',
    longitude: '75.8577',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Indore',
    },
    {
      '@type': 'State',
      name: 'Madhya Pradesh',
    },
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
  sameAs: [
    'https://www.facebook.com/inchtomilez',
    'https://www.instagram.com/inchtomilez',
    'https://www.linkedin.com/company/inchtomilez',
    'https://twitter.com/inchtomilez',
    'https://www.youtube.com/@inchtomilez',
  ],
  foundingDate: '2014',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '50+',
  },
  slogan: 'Transform Your Brand with Precision Marketing',
};

// LocalBusiness Schema (for homepage and contact)
export const localBusinessSchema: SchemaData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${baseUrl}/#localbusiness`,
  name: companyName,
  image: `${baseUrl}/og-image.png`,
  url: baseUrl,
  telephone: companyPhone,
  email: companyEmail,
  address: companyAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '22.7196',
    longitude: '75.8577',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00',
    },
  ],
  priceRange: '₹₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};

// WebSite Schema (homepage)
export const websiteSchema: SchemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: companyName,
  description: 'Professional digital marketing and advertising services in Indore',
  publisher: {
    '@id': `${baseUrl}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/blogs?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// WebPage Schema (for all pages)
export function getWebPageSchema(
  title: string,
  description: string,
  path: string,
  breadcrumbs?: { name: string; path: string }[]
): SchemaData {
  const schema: SchemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}${path}#webpage`,
    url: `${baseUrl}${path}`,
    name: title,
    description: description,
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    about: {
      '@id': `${baseUrl}/#organization`,
    },
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: 'en-IN',
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    schema.breadcrumb = {
      '@id': `${baseUrl}${path}#breadcrumb`,
    };
  }

  return schema;
}

// BreadcrumbList Schema
export function getBreadcrumbSchema(breadcrumbs: { name: string; path: string }[]): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${baseUrl}${breadcrumbs[breadcrumbs.length - 1].path}#breadcrumb`,
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: index < breadcrumbs.length - 1 ? `${baseUrl}${item.path}` : undefined,
    })),
  };
}

// Service Schema
export function getServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/services/${service.slug}#service`,
    name: service.name,
    description: service.description,
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Indore',
    },
    url: `${baseUrl}/services/${service.slug}`,
    serviceType: service.name,
  };
}

// Article Schema (for blog posts)
export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  keywords?: string[];
  category?: string;
}): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${baseUrl}/blogs/${article.slug}#article`,
    headline: article.title,
    description: article.description,
    image: `${baseUrl}/og-blog.png`,
    datePublished: article.publishDate || '2025-11-02',
    dateModified: article.modifiedDate || '2025-11-02',
    author: {
      '@type': 'Person',
      name: article.author || 'Inchtomilez Team',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blogs/${article.slug}`,
    },
    keywords: article.keywords?.join(', ') || '',
    articleSection: article.category || 'Digital Marketing',
    inLanguage: 'en-IN',
    url: `${baseUrl}/blogs/${article.slug}`,
  };
}

// FAQ Schema
export function getFAQSchema(faqs: { question: string; answer: string }[]): SchemaData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Helper to inject schema into page
export function injectSchema(schema: SchemaData | SchemaData[]) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  
  schemas.forEach((s, index) => {
    const scriptId = `schema-${index}-${Date.now()}`;
    let scriptTag = document.getElementById(scriptId);
    
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(s);
  });
}

// React component for schema injection
export function StructuredData({ schema }: { schema: SchemaData | SchemaData[] }) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  
  return (
    <>
      {schemas.map((s, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
