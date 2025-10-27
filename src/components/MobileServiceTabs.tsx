import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code, Film, Megaphone, CheckCircle } from 'lucide-react';

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  services: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'it-solutions',
    title: 'IT Solutions',
    icon: Code,
    description: 'Custom software, web & mobile applications, cloud solutions — Built for scale, performance, and user delight.',
    services: [
      'Software Development',
      'Web Applications',
      'Mobile App Development',
      'Cloud Solutions',
      'E-Commerce Platforms',
      'Custom CMS Development'
    ]
  },
  {
    id: 'media-production',
    title: 'Media Production',
    icon: Film,
    description: 'Video production, animation, photography, graphic design — Creating visual experiences that captivate and convert.',
    services: [
      'Video Production',
      '2D/3D Animation',
      'Commercial Photography',
      'Graphic Design',
      'Motion Graphics',
      'Brand Photography'
    ]
  },
  {
    id: 'marketing-excellence',
    title: 'Marketing Excellence',
    icon: Megaphone,
    description: 'Digital marketing, advertising, branding, campaigns — Strategic growth through data-driven creativity.',
    services: [
      'Digital Marketing',
      'Social Media Marketing',
      'SEO & SEM',
      'Advertising Campaigns',
      'Brand Strategy',
      'Political Campaigns'
    ]
  }
];

const MobileServiceTabs = () => {
  return (
    <Tabs defaultValue="it-solutions" className="w-full">
      {/* Tab Navigation */}
      <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 rounded-2xl p-1 mb-6 h-auto">
        {serviceCategories.map((category) => {
          const Icon = category.icon;
          return (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex flex-col items-center gap-2 py-3 px-2 data-[state=active]:bg-yellow-500/10 data-[state=active]:border data-[state=active]:border-yellow-500/30 rounded-xl transition-all duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xs whitespace-nowrap">{category.title}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {/* Tab Content - Fixed Height Container */}
      <div className="w-full h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {serviceCategories.map((category) => {
          const Icon = category.icon;
          return (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0"
            >
              <div className="bg-white/5 border border-white/20 rounded-2xl p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center border-2 border-yellow-500/30 flex-shrink-0">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-yellow-500">{category.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Services List */}
                <ul className="space-y-3">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
};

export default MobileServiceTabs;
