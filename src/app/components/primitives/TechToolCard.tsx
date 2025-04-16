'use client';

import { FC } from 'react';
import * as Popover from '@radix-ui/react-popover';

interface Tool {
  name: string;
  description: string;
  icon: any;
}

interface TechToolCardProps {
  tool: Tool;
  view: 'grid' | 'list';
  section: string;
  getIconColor: (section: string) => string;
}

const TechToolCard: FC<TechToolCardProps> = ({ tool, view, section, getIconColor }) => {
  const Icon = tool.icon;
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex items-center gap-2 focus:outline-none">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            <Icon className={\`relative z-10 h-5 w-5 group-hover:scale-110 transition-transform \${getIconColor(section)}\`} />
          </div>
          {tool.name}
        </button>
      </Popover.Trigger>
      <Popover.Content
        side={view === 'grid' ? 'bottom' : 'left'}
        align="center"
        sideOffset={8}
        className="rounded-md bg-white border px-4 py-2 shadow-lg w-64 z-50"
      >
        <p className="text-sm font-semibold text-[var(--accent)] mb-1">{tool.name}</p>
        <p className="text-xs text-gray-600">{tool.description}</p>
      </Popover.Content>
    </Popover.Root>
  );
};

export default TechToolCard;
