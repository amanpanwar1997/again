import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Send, CheckCircle2 } from 'lucide-react';
import { contactAPI } from '../utils/supabase/client';

export default function ContactFormWithSupabase() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    services: [] as string[],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const availableServices = [
    'Digital Marketing',
    'Web Development',
    'Branding',
    'Media Production',
    'E-Commerce',
    'SEO Services',
    'Social Media Marketing',
    'Other'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await contactAPI.submit({
        ...formData,
        source: 'contact_form_lets_talk'
      });

      console.log('Contact form submitted successfully:', response);
      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          budget: '',
          message: '',
          services: [],
        });
      }, 5000);

    } catch (err) {
      console.error('Contact form submission error:', err);
      setError('Failed to submit. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8 text-yellow-500" />
        </div>
        <h3 className="mb-4">Thank You!</h3>
        <p className="text-gray-300 mb-6">
          Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
        </p>
        <p className="text-sm text-gray-400">
          Check your email for a confirmation message.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
      <h3 className="mb-6">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input 
              name="name"
              placeholder="Your Name *" 
              value={formData.name}
              onChange={handleInputChange}
              className="bg-white/5 border-white/10 text-white focus:border-yellow-500"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <Input 
              name="phone"
              type="tel"
              placeholder="Phone Number *" 
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-white/5 border-white/10 text-white focus:border-yellow-500"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Email and Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input 
              name="email"
              type="email"
              placeholder="Email Address *" 
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white/5 border-white/10 text-white focus:border-yellow-500"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <Input 
              name="company"
              placeholder="Company Name (Optional)" 
              value={formData.company}
              onChange={handleInputChange}
              className="bg-white/5 border-white/10 text-white focus:border-yellow-500"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Budget */}
        <div>
          <Input 
            name="budget"
            placeholder="Project Budget Range (Optional)" 
            value={formData.budget}
            onChange={handleInputChange}
            className="bg-white/5 border-white/10 text-white focus:border-yellow-500"
            disabled={isLoading}
          />
        </div>
        
        {/* Message */}
        <div>
          <Textarea 
            name="message"
            placeholder="Tell us about your project... *" 
            value={formData.message}
            onChange={handleInputChange}
            className="bg-white/5 border-white/10 text-white focus:border-yellow-500 min-h-[120px]"
            required
            disabled={isLoading}
          />
        </div>

        {/* Services Selection */}
        <div>
          <p className="text-sm text-gray-400 mb-3">Interested In:</p>
          <div className="flex flex-wrap gap-2">
            {availableServices.map((service) => (
              <Badge 
                key={service}
                variant="outline" 
                className={`border-white/20 text-white cursor-pointer transition-all ${
                  formData.services.includes(service)
                    ? 'bg-yellow-500 text-black border-yellow-500'
                    : 'hover:bg-yellow-500 hover:text-black hover:border-yellow-500'
                }`}
                onClick={() => !isLoading && toggleService(service)}
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
        
        {/* Submit Button */}
        <Button 
          type="submit"
          className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 py-6 w-full md:w-auto"
          disabled={isLoading}
        >
          <Send className="mr-2 h-5 w-5" />
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-400">
          By submitting this form, you agree to our privacy policy. We will never share your information.
        </p>
      </form>
    </div>
  );
}
