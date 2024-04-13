import React from 'react'
import ProductCard from '@/components/productCard';
import { client, urlFor } from '../lib/sanity';

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

async function ProductsPage() {
const data=await getData();
// console.log(data);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 p-5 mt-20">
      {data.map((item:any) => (
        <ProductCard
          key={item.slug}
          title={item.name}
          price={item.price}
          category={item.category}
          image={urlFor(item.imageUrl).url()}
          id={item.slug}
        />
      ))}
    </div>
  )
}

export default ProductsPage;