import { getProductById } from "@/sanity/lib/data";

export default async function ProductPage({ params }: {params: { slug: string };
}) {
  const { slug } = params;

  const product = await getProductById(slug);

  if (!product) {
    return (
      <>
        <p>No product found.</p>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Product Details</h1>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
        <p>Qty Available: {product.quantityAvailable}</p>
        <p>Available: {product.isAvailable ? "Yes" : "No"}</p>

        {product.imageUrls && product.imageUrls.length > 0 && (
          <div className="flex flex-wrap">
            {product.imageUrls.map((imageUrl, index) => (
              <img
                src={imageUrl}
                className="w-[100px] h-[100px]"
                alt={product.name || "Product Image"}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
