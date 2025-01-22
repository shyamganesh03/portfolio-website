'use client';

import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Label } from './label';
import TextReveal from '../animation/text-reveal';

const List = ({ label, className }: { label: string; className?: string }) => {
  const labelClassName = !!className ? `text-sm ${className}` : 'text-sm';
  return (
    <div className={'flex flex-row items-center gap-2'}>
      <TextReveal>
        <ChevronRight className='h-4 w-4' color={'#76b852'} />
        <Label className={labelClassName}>{label}</Label>
      </TextReveal>
    </div>
  );
};

export default List;
