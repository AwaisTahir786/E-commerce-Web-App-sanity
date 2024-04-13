import { client, urlFor } from "@/app/lib/sanity";
import ProductCard from "@/components/productCard";

async function getData(slug:any) {
const query=`*[_type=="product" && gender == "${slug}"]{

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




async  function Page({ params }: { params: { slug: string } }) {
  const result = await getData(params.slug);
  // console.log(result);
  return <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 p-5 mt-20">

    {result.map((item:any) => (
    <ProductCard
      key={item.slug}
      title={item.title}
      price={item.price}
      category={item.category}
      image={urlFor(item.imageUrl).url()}
      id={item.slug}
    />
  ))} 
   
</div>
}

export default Page;