import React from 'react';
import image from '../assets/home/HeroBG.webp';
import Button from '../components/button/buttonMain';
import { useLeadTracking, LEAD_SOURCES } from '../hooks/useLeadTracking';

// Overview Component
export const Overview = ({ openContactModal }) => {
  const { trackButtonClick } = useLeadTracking();
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
         <span className="font-body font-bold text-xs md:text-lg ">
        Phase 2 of Prestige Township on Sarjapur Road – East Bangalore </span>
          <br />
          
            <span>
            <p> Welcome to The Prestige City 2.0, the newest phase of the landmark township on Sarjapur Road. Spanning 9+ acres with 750+ premium residences, this phase introduces two elegant enclaves — Fernleaf and Ethan — set amidst landscaped greens, modern architecture, and seamless connectivity to ORR, Bellandur, and Whitefield.</p>
            <br/>
            <p> Fernleaf – 3+ acres | 2 towers | 350+ residences<br />
Crafted for contemporary urban living with spacious layouts, curated amenities, and serene surroundings starting from ₹1.38 Cr++ onwards. </p>
 <br />
 <p> Ethan – 6+ acres | 4 towers | 400+ residences<br />
Larger-format homes designed for elevated comfort and exclusivity, with prices starting from ₹2.29 Cr++ onwards. </p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  trackButtonClick(LEAD_SOURCES.OVERVIEW, 'enquire_now', 'Overview Section CTA');
                  openContactModal(LEAD_SOURCES.OVERVIEW);
                }}
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Autumn Leaves"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
