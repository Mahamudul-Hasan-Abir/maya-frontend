import { AppSidebar } from "@/components/app-sidebar";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TProduct } from "@/types";

export default async function Products() {
  const ProductRes = await fetch("https://api-maya.nusratech.com/products", {
    cache: "force-cache",
  });
  const jsonRes = await ProductRes.json();
  const products = jsonRes?.data;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        {/* All Product Page */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mt-10 md:mx-28 grid-cols-1 px-6">
          {/* Card's will be render in this div */}
          {products.map((product: TProduct) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
