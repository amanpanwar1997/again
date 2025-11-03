import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import faviconImage from 'figma:asset/90948f9aa2b6ab5b4d89fb6e1fa928039c1588d3.png';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogType = 'website',
  ogImage = '/og-image.png',
  author,
  publishedTime,
  modifiedTime,
}: SEOHeadProps) {
  const location = useLocation();
  const baseUrl = 'https://inchtomilez.com'; // Replace with your actual domain
  const fullUrl = canonical || `${baseUrl}${location.pathname}`;
  const fullTitle = `${title} | Inchtomilez Digital Marketing And Advertising Agency`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }
    if (author) {
      updateMetaTag('author', author);
    }

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
    updateMetaTag('og:site_name', 'Inchtomilez Digital Marketing And Advertising Agency', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);

    // Article-specific tags
    if (ogType === 'article') {
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
      if (author) {
        updateMetaTag('article:author', author, true);
      }
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Robots meta - Optimized for maximum crawlability
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Googlebot specific
    let googlebotTag = document.querySelector('meta[name="googlebot"]');
    if (!googlebotTag) {
      googlebotTag = document.createElement('meta');
      googlebotTag.setAttribute('name', 'googlebot');
      document.head.appendChild(googlebotTag);
    }
    googlebotTag.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Bingbot specific
    let bingbotTag = document.querySelector('meta[name="bingbot"]');
    if (!bingbotTag) {
      bingbotTag = document.createElement('meta');
      bingbotTag.setAttribute('name', 'bingbot');
      document.head.appendChild(bingbotTag);
    }
    bingbotTag.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Google Site Verification (placeholder - user should add their verification code)
    let googleVerification = document.querySelector('meta[name="google-site-verification"]');
    if (!googleVerification) {
      googleVerification = document.createElement('meta');
      googleVerification.setAttribute('name', 'google-site-verification');
      googleVerification.setAttribute('content', 'PLACEHOLDER_ADD_YOUR_VERIFICATION_CODE');
      document.head.appendChild(googleVerification);
    }

    // Bing Site Verification (placeholder - user should add their verification code)
    let bingVerification = document.querySelector('meta[name="msvalidate.01"]');
    if (!bingVerification) {
      bingVerification = document.createElement('meta');
      bingVerification.setAttribute('name', 'msvalidate.01');
      bingVerification.setAttribute('content', 'PLACEHOLDER_ADD_YOUR_VERIFICATION_CODE');
      document.head.appendChild(bingVerification);
    }

    // Yandex Site Verification (placeholder)
    let yandexVerification = document.querySelector('meta[name="yandex-verification"]');
    if (!yandexVerification) {
      yandexVerification = document.createElement('meta');
      yandexVerification.setAttribute('name', 'yandex-verification');
      yandexVerification.setAttribute('content', 'PLACEHOLDER_ADD_YOUR_VERIFICATION_CODE');
      document.head.appendChild(yandexVerification);
    }

    // Geo tags for local SEO
    updateMetaTag('geo.region', 'IN-MP');
    updateMetaTag('geo.placename', 'Indore');
    updateMetaTag('geo.position', '22.7196;75.8577');
    updateMetaTag('ICBM', '22.7196, 75.8577');

    // Rating (safe for all audiences)
    updateMetaTag('rating', 'general');

    // Referrer policy
    updateMetaTag('referrer', 'no-referrer-when-downgrade');

    // Viewport (ensure it exists)
    let viewportTag = document.querySelector('meta[name="viewport"]');
    if (!viewportTag) {
      viewportTag = document.createElement('meta');
      viewportTag.setAttribute('name', 'viewport');
      viewportTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewportTag);
    }

    // Favicon - Add/Update favicon link
    let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      faviconLink.setAttribute('type', 'image/png');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconImage);

    // Apple Touch Icon
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.setAttribute('rel', 'apple-touch-icon');
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.setAttribute('href', faviconImage);

  }, [fullTitle, description, keywords, fullUrl, ogType, ogImage, author, publishedTime, modifiedTime]);

  return null;
}
