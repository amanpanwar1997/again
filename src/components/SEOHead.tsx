import { Helmet } from 'react-helmet-async';
import { SEO_CONSTANTS } from '../utils/seoConstants';
import { PageMetadata } from '../utils/seoMetadata';

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
}: PageMetadata) {

  const fullUrl = canonical 
    ? `${SEO_CONSTANTS.siteUrl}${canonical}` 
    : SEO_CONSTANTS.siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SEO_CONSTANTS.author} />
      <meta name="copyright" content={SEO_CONSTANTS.copyright} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={SEO_CONSTANTS.ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={SEO_CONSTANTS.ogImage} />
      <meta property="og:image:width" content={SEO_CONSTANTS.ogImageWidth} />
      <meta property="og:image:height" content={SEO_CONSTANTS.ogImageHeight} />
      <meta property="og:site_name" content={SEO_CONSTANTS.siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content={SEO_CONSTANTS.twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={SEO_CONSTANTS.ogImage} />
      <meta name="twitter:site" content={SEO_CONSTANTS.twitterSite} />
      <meta name="twitter:creator" content={SEO_CONSTANTS.twitterCreator} />

      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={SEO_CONSTANTS.themeColor} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={SEO_CONSTANTS.siteName} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content={SEO_CONSTANTS.location.region} />
      <meta name="geo.placename" content={SEO_CONSTANTS.location.placename} />
      <meta name="geo.position" content={`${SEO_CONSTANTS.location.coordinates.latitude};${SEO_CONSTANTS.location.coordinates.longitude}`} />
      <meta name="ICBM" content={`${SEO_CONSTANTS.location.coordinates.latitude}, ${SEO_CONSTANTS.location.coordinates.longitude}`} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />

      {/* Verification Tags - Add when needed */}
      {/* <meta name="google-site-verification" content="your-google-verification-code" /> */}
      {/* <meta name="facebook-domain-verification" content="your-facebook-verification-code" /> */}
    </Helmet>
  );
}
