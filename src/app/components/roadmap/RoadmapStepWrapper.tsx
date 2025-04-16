'use client';

import { FC, ReactNode } from 'react';

const RoadmapStepWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="max-w-3xl mx-auto px-4 py-8">{children}</div>
);

export default RoadmapStepWrapper;
