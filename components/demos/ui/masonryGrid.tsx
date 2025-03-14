import React from 'react'
import Image from 'next/image';


const images = [
    "/galleryPicSiding.JPEG",
    "/galleryPicDoor.JPEG",
    "/galleryPicFraming6.JPEG",
    "/galleryPicFraming2.JPEG",
    
    "/galleryPicRoofing.JPEG",
    "/galleryPicRoofing3.JPEG",
    "/flooringPicture.JPEG",
    
    
];

const MasonryGrid = () => {
  return (
    <div className='columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4'>
        {images.map((src, index) => (
            <div key={index} className='mb-4 break-inside-avoid'>
                <Image src={src} alt={`Gallery ${index + 1}`} width={400} 
                    height={300}  className='w-full object-cover rounded-lg' />
            </div>
        ))}
    </div>
  )
}

export default MasonryGrid