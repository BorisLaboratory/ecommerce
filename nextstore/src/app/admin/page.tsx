import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";
import React from "react";
import { FormatNumber, formatCurrency } from "../../lib/formatters";
import { TurtleIcon } from "lucide-react";
import { setTimeout } from "timers/promises";

async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true }, // sum total of all sales
    _count: true, // counts the number of rows involved
  });

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100, // default is 0 if no sum
    numberOfSales: data._count,
  };
}

async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    // await all :
    // 1. ----------> awaits count()
    // 2. ----------> awaits aggregate()
    db.user.count(),
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);

  return {
    userCount,
    // average=sum/userCount
    averageValuePerUser:
      userCount === 0
        ? 0
        : (orderData._sum.pricePaidInCents || 0) / userCount / 100, // convert to cents by 100
  };
}

async function getProductData() {
  const [activeCount, inactiveCount] = await Promise.all([
    db.product.count({ where: { isAvailableForPurchase: true } }),
    db.product.count({ where: { isAvailableForPurchase: false } }),
  ]);

  return { activeCount, inactiveCount };
}

export default async function AdminDashboard() {
  const [salesData, userData, productData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductData(),
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-col-2 lg:grid-col-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={`${FormatNumber(salesData.numberOfSales)} Orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title="Customer"
        subtitle={`${formatCurrency(
          userData.averageValuePerUser
        )} Average Value`}
        body={FormatNumber(userData.userCount)}
      />
      <DashboardCard
        title="Average Products"
        subtitle={`${FormatNumber(productData.inactiveCount)} Inactive`} // inacdtive products
        body={FormatNumber(productData.activeCount)}
      />
    </div>
  );
}

type DashboardCardProps = { title: string; subtitle: string; body: string };

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardDescription>{subtitle}</CardDescription>
      <CardContent>{body}</CardContent>
    </Card>
  );
}
