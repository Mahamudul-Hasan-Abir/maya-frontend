import ProductDetailsCard from "@/components/ProductDetailsCard/ProductDetailsCard";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productRef: string }>;
}) => {
  const productId = (await params).productRef;

  try {
    const productRes = await fetch(
      `https://api-maya.nusratech.com/products/${productId}`,
      {
        cache: "force-cache",
      }
    );

    // Handle 404 errors
    if (productRes.status === 404) {
      return (
        <div className="w-full text-center py-8">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <p className="text-gray-600">
            The product with ID {productId} does not exist.
          </p>
        </div>
      );
    }

    // Handle other errors
    if (!productRes.ok) {
      throw new Error(`Failed to fetch product: ${productRes.statusText}`);
    }

    const singleProduct = await productRes.json();
    console.log(singleProduct);

    return (
      <div className="w-full">
        <ProductDetailsCard productDetails={singleProduct} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return (
      <div className="w-full text-center py-8">
        <h1 className="text-2xl font-bold">Error Loading Product Details</h1>
        <p className="text-gray-600">{(error as Error).message}</p>
      </div>
    );
  }
};

export default ProductDetails;
