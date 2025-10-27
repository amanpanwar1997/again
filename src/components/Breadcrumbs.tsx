import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="fixed top-20 left-0 right-0 z-[9998] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb>
          <BreadcrumbList className="text-white/70 text-xs">
            {/* Home Icon */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-white/70 hover:text-yellow-500 transition-colors flex items-center gap-1">
                  <HomeIcon className="h-3 w-3" />
                  <span>Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Render other breadcrumb items */}
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              
              return (
                <React.Fragment key={index}>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-3 w-3 text-white/50" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {isLast || !item.path ? (
                      <BreadcrumbPage className="text-white text-xs">
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={item.path} className="text-white/70 hover:text-yellow-500 transition-colors text-xs">
                          {item.label}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
