import { useEffect } from 'react';
import SEOHead from './SEOHead';
import SchemaMarkup from './SchemaMarkup';
import EnhancedSchemaMarkup from './EnhancedSchemaMarkup';
import FAQSchema, { FAQItem } from './FAQSchema';
import LocalBusinessSchema from './LocalBusinessSchema';

interface PageSEOProps {
  title: string;
  h1?: string;
  description: string;
  keywords: string;
  focusKeyword?: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'Service' | 'CollectionPage';
  faqs?: FAQItem[];
  includeLocalBusiness?: boolean;
  customSchema?: any;
}

/**
 * Comprehensive SEO component for all pages
 * Handles: Meta tags, Schema markup, FAQs, Local Business schema
 */
export default function PageSEO({
  title,
  h1,
  description,
  keywords,
  focusKeyword,
  canonical,
  ogTitle,
  ogDescription,
  schemaType = 'WebPage',
  faqs,
  includeLocalBusiness = false,
  customSchema
}: PageSEOProps) {
  // Set H1 in document (accessibility & SEO)
  useEffect(() => {
    if (h1) {
      const h1Element = document.querySelector('h1');
      if (h1Element && !h1Element.textContent) {
        h1Element.textContent = h1;
      }
    }
  }, [h1]);

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
      />
      
      <SchemaMarkup pageType={schemaType} />
      <EnhancedSchemaMarkup />
      
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
      
      {includeLocalBusiness && <LocalBusinessSchema />}
      
      {customSchema && (
        <script type="application/ld+json">
          {JSON.stringify(customSchema)}
        </script>
      )}
    </>
  );
}
