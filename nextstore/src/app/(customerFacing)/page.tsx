import { ProductCard, ProductCardSkeleton } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { cache } from "@/lib/cache";
import { Product } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const getMostPopularProducts = cache(
  // caching helps page to load faster
  () => {
    return db.product.findMany({
      where: { isAvailableForPurchase: true },
      orderBy: { orders: { _count: "desc" } },
      take: 6,
    });
  },
  ["/", "getMostPopularProducts"], // keyParts
  { revalidate: 60 * 60 * 24 }
); //check new data every 24hrs calculated in seconds

const getNewestProducts = cache(() => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { createdAt: "desc" },
    take: 6,
  });
}, ["/", "getNewestProducts"]);

// function getMostPopularProducts() {
//   return db.product.findMany({
//     where: { isAvailableForPurchase: true },
//     orderBy: { orders: { _count: "desc" } },
//     take: 6,
//   });
// }

// function getNewestProducts() {
//   return db.product.findMany({
//     where: { isAvailableForPurchase: true },
//     orderBy: { createdAt: "desc" },
//     take: 6,
//   });
// }

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default function HomePage() {
  return (
    <main className=" space-y-12">
      <ProductGridSection
        title="Most Frequently bought"
        productFetcher={getMostPopularProducts}
      />
      <ProductGridSection
        title="New products"
        productFetcher={getNewestProducts}
      />
    </main>
  );
}

type ProductGridSectionProps = {
  title: string;
  productFetcher: () => Promise<Product[]>; // a fun that returns a promise, the Promise is an array of products
};

function ProductGridSection({
  title,
  productFetcher,
}: ProductGridSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        {/*flex the title and button rowwise */}
        <h1 className="text-3xl font-bold">{title}</h1>
        <Button variant="outline" asChild>
          <Link href="/products" className="space-x-2">
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* suspense boundry */}
        <Suspense
          fallback={
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          }
        >
          <ProductSuspense productFetcher={productFetcher} />
        </Suspense>
      </div>
    </div>
  );
}

async function ProductSuspense({
  productFetcher,
}: {
  productFetcher: () => Promise<Product[]>;
}) {
  return (await productFetcher()).map((product) => (
    // <ProductCard key={product.id} {...product} />
    <ProductCard key={product.id} {...product} />
  ));
}
