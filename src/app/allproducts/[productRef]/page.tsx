import ProductDetailsCard from "@/components/ProductDetailsCard/ProductDetailsCard";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productRef: string }>;
}) => {
  const productId = (await params).productRef;

  const productRes = await fetch(
    `https://api-maya.nusratech.com/products/${productId}`,
    {
      cache: "force-cache",
    }
  );
  const singleProduct = await productRes?.json();

  console.log(singleProduct);
  return (
    <div className="w-full">
      <ProductDetailsCard productDetails={singleProduct}></ProductDetailsCard>
    </div>
  );
};

export default ProductDetails;
