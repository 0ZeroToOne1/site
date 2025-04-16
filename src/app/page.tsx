'use client'

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';


import {
StyledLanding,
BlueprintFlowBackground,
} from './components';



export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 font-sans subpixel-antialiased scroll-smooth">

      {/* 01. Hero Section */}
<StyledLanding />
      
    </main>
  )
}