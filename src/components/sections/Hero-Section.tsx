'use client';

import React from 'react';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Mail, MapPin, Phone } from 'lucide-react';
import ProfileImage from '@/assets/shyamganesh.jpg';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import TextReveal from '../animation/text-reveal';
import Link from 'next/link';

function HeroSection() {
  return (
    <div
      className='flex w-full flex-col items-center justify-center gap-2 lg:flex-row lg:gap-9'
      id='about'
    >
      <div className='overflow-hidden rounded-full border border-primary p-1'>
        <Image
          src={ProfileImage}
          alt={'Image-not-found'}
          objectFit='contain'
          className='h-[100px] w-[100px] rounded-full'
        />
      </div>

      <div className='flex flex-col gap-3'>
        <TextReveal>
          <Label className='text-xl text-primary'>SHYAM GANESH</Label>
        </TextReveal>
        <TextReveal>
          <Label className='text-xl'>Full Stack Developer</Label>
        </TextReveal>
        <Link href={`mailto:shyamganeshravichandran@gmail.com`} target='_blank'>
          <TextReveal>
            <div className='flex cursor-pointer flex-row items-center gap-2'>
              <Mail className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
              <Label className='cursor-pointer text-sm hover:underline'>
                shyamganeshravichandran@gmail.com
              </Label>
            </div>
          </TextReveal>
        </Link>
        <TextReveal>
          <div className='flex flex-row items-center gap-2'>
            <MapPin className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
            <Label className=''>Bangalore</Label>
          </div>
        </TextReveal>

        <div className='flex flex-row gap-4'>
          <Link href={`https://wa.me/9677316806`} target='_blank'>
            <Phone className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
          </Link>
          {/* <MailPopup /> */}
          <Link
            href={`https://www.linkedin.com/in/shyam-ganesh-ravichandran-fullstack/`}
            target='_blank'
          >
            <LinkedInLogoIcon className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
