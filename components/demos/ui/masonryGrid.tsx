import React from 'react'
import Image from 'next/image';


const images = [
    "/tank1 BRB.JPEG",
    "/tank2 BRB.JPEG",
    "/tank3 BRB.JPEG",
    
    "/tank1-2 BRB.JPEG",
    "/tank5 BRB.JPEG",
    "/heroPicture BRB.JPEG",
];

const MasonryGrid = () => {
  return (
    <div className='columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4'>
        {images.map((src, index) => (
            <div key={index} className='mb-4 break-inside-avoid'>
                <Image src={src} alt={`Fish tank ${index + 1}`} width={400} 
                    height={300}  className='w-full object-cover rounded-lg' />
            </div>
        ))}
    </div>
  )
}

export default MasonryGrid