import { Helmet } from 'react-helmet-async';
import { SEO_CONSTANTS } from '../utils/seoConstants';

interface SchemaMarkupProps {
  type: 'organization' | 'local-business' | 'website' | 'service' | 'breadcrumb' | 'about' | 'contact';
  data?: any;
}

export default function SchemaMarkup({ type, data = {} }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SEO_CONSTANTS.businessName,
          url: SEO_CONSTANTS.siteUrl,
          logo: `${SEO_CONSTANTS.siteUrl}/logo.png`,
          description: SEO_CONSTANTS.defaultDescription,
          telephone: SEO_CONSTANTS.contact.phone,
          email: SEO_CONSTANTS.contact.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SEO_CONSTANTS.location.address,
            addressLocality: SEO_CONSTANTS.location.city,
            addressRegion: SEO_CONSTANTS.location.state,
            postalCode: SEO_CONSTANTS.location.postalCode,
            addressCountry: SEO_CONSTANTS.location.countryCode
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: SEO_CONSTANTS.location.coordinates.latitude,
            longitude: SEO_CONSTANTS.location.coordinates.longitude
          },
          sameAs: [
            SEO_CONSTANTS.social.facebook,
            SEO_CONSTANTS.social.instagram,
            SEO_CONSTANTS.social.twitter,
            SEO_CONSTANTS.social.linkedin,
            SEO_CONSTANTS.social.youtube
          ]
        };

      case 'local-business':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': SEO_CONSTANTS.siteUrl,
          name: SEO_CONSTANTS.businessName,
          image: `${SEO_CONSTANTS.siteUrl}/logo.png`,
          description: SEO_CONSTANTS.defaultDescription,
          url: SEO_CONSTANTS.siteUrl,
          telephone: SEO_CONSTANTS.contact.phone,
          email: SEO_CONSTANTS.contact.email,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: SEO_CONSTANTS.location.address,
            addressLocality: SEO_CONSTANTS.location.city,
            addressRegion: SEO_CONSTANTS.location.state,
            postalCode: SEO_CONSTANTS.location.postalCode,
            addressCountry: SEO_CONSTANTS.location.countryCode
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: SEO_CONSTANTS.location.coordinates.latitude,
            longitude: SEO_CONSTANTS.location.coordinates.longitude
          },
          openingHoursSpecification: SEO_CONSTANTS.businessHours.map(day => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: day.day,
            opens: day.hours !== 'Closed' ? day.hours.split('-')[0] : undefined,
            closes: day.hours !== 'Closed' ? day.hours.split('-')[1] : undefined
          })).filter(h => h.opens),
          sameAs: [
            SEO_CONSTANTS.social.facebook,
            SEO_CONSTANTS.social.instagram,
            SEO_CONSTANTS.social.twitter,
            SEO_CONSTANTS.social.linkedin,
            SEO_CONSTANTS.social.youtube
          ]
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${SEO_CONSTANTS.siteUrl}/#website`,
          url: SEO_CONSTANTS.siteUrl,
          name: SEO_CONSTANTS.siteName,
          description: SEO_CONSTANTS.defaultDescription,
          publisher: {
            '@type': 'Organization',
            name: SEO_CONSTANTS.businessName,
            logo: {
              '@type': 'ImageObject',
              url: `${SEO_CONSTANTS.siteUrl}/logo.png`
            }
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${SEO_CONSTANTS.siteUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.name || 'Marketing Services',
          description: data.description || SEO_CONSTANTS.defaultDescription,
          provider: {
            '@type': 'Organization',
            name: SEO_CONSTANTS.businessName,
            url: SEO_CONSTANTS.siteUrl
          },
          areaServed: {
            '@type': 'City',
            name: SEO_CONSTANTS.location.city,
            '@id': 'https://en.wikipedia.org/wiki/Indore'
          },
          serviceType: data.serviceType || 'Marketing and Advertising',
          url: data.url || SEO_CONSTANTS.siteUrl
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: (data.items || []).map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SEO_CONSTANTS.siteUrl}${item.url}`
          }))
        };

      case 'about':
        return {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: data.name || 'About Inchtomilez',
          description: data.description || SEO_CONSTANTS.defaultDescription,
          url: `${SEO_CONSTANTS.siteUrl}/about`,
          mainEntity: {
            '@type': 'Organization',
            name: SEO_CONSTANTS.businessName,
            url: SEO_CONSTANTS.siteUrl,
            description: SEO_CONSTANTS.defaultDescription
          }
        };

      case 'contact':
        return {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: data.name || 'Contact Inchtomilez',
          description: data.description || 'Get in touch with Inchtomilez',
          url: `${SEO_CONSTANTS.siteUrl}/lets-talk`,
          mainEntity: {
            '@type': 'Organization',
            name: SEO_CONSTANTS.businessName,
            telephone: SEO_CONSTANTS.contact.phone,
            email: SEO_CONSTANTS.contact.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: SEO_CONSTANTS.location.address,
              addressLocality: SEO_CONSTANTS.location.city,
              addressRegion: SEO_CONSTANTS.location.state,
              postalCode: SEO_CONSTANTS.location.postalCode,
              addressCountry: SEO_CONSTANTS.location.countryCode
            }
          }
        };

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
