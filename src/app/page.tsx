import { getAllProducts } from "@/sanity/lib/data";
import { IProduct } from "@/sanity/lib/data";

export default async function Home() {
  const products: IProduct[] = await getAllProducts() || [];

  return (
    <>
      <div className="max-w-[1300px] mx-auto p-4">
        <h1>Food Items</h1>
        <div className="flex flex-wrap justify-between gap-y-[20px]">
          {products.map((product) => (
            <a
            href={`/product/${product._id}`}
              key={product._id}
              className="bg-[#e4dfe3]  p-[40px] border-2 border-indigo-600 rounded-[7px]"
            >
              {product.imageUrls && product.imageUrls.length > 0 && (
                <img
                  src={product.imageUrls[0]}
                  className="w-[100px] h-[100px]"
                  alt={product.name || "Product Image"}
                />
              )}

              <h2>Name: {product.name}</h2>
              <p>Category:{product.category}</p>
              <p>Price: {product.price}</p>
              <p>Qty Available: {product.quantityAvailable}</p>
              <p>Available: {product.isAvailable ? "Yes" : "No"}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
