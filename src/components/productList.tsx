import React from 'react'
import ProductCard from './productCard';
import { client, urlFor } from '@/app/lib/sanity';

async function getData() {
  const query=`*[_type=="product"]{
  
    description,
      _id,
      gender,
      name,
      price,
      "category": category->name,
      "slug": slug.current,
      "imageUrl": images[0].asset->url
      
  }`
  
  const data= await client.fetch(query);
  return data;
    
  }

 async function ProductList() {
  let data=await getData();

  const newdata=data.slice(0,3);
  // console.log(newdata);

  return (
    <section className='lg:flex justify-evenly lg:flex-row grid md:grid-cols-2 gap-20  '>

    {
      newdata.map((item:any)=>(

        <ProductCard key={item.slug} title={item.name} price={item.price} image={urlFor(item.imageUrl).url()} id={item.slug} />

      ))
    }

</section>

  )
}

export default ProductList;