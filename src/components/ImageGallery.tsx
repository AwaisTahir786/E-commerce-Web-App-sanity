"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

function ImageGallery({ images }: any) {
  const [bigImage, setBigImage] = useState(images[0]);

  function handleImage(img: any) {
    setBigImage(img);
  }

  return (
    <div className=" flex-1 ">
      <div className="flex flex-row gap-5">
        {/* short image */}
        <div>
            {images.map((image:any,idx:any)=>(
        <div key={idx} className="flex flex-col mb-6">

<Image
            src={urlFor(image).url()}
            alt=""
            width={100}
            height={100}
            className="lg:w-600 lg:h-600 md:w-400 md:h-400 "
            onChange={() => handleImage(image)}
          />
        </div>

            ))}

</div>
         
        {/* bigimage */}
        <div>
          <Image
            src={urlFor(bigImage).url()}
            alt="logo"
            width={550}
            height={550}
            className="lg:w-600 lg:h-600 md:w-400 md:h-400 "
          />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
