import prisma from "@/lib/prisma";
import { BusinessInfo } from "@/types/business";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const businesses = await prisma.business.findMany();

  return NextResponse.json(businesses);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { data }: { data: BusinessInfo[] } = body;

  for (const item of data) {
    if(!item["Business Name"]){
      continue;
    }

    const existing = await prisma.business.findFirst({
      where: { business_name: item["Business Name"] },
    });

    if (existing) {
      continue;
    }

    const business = await prisma.business.create({
      data: {
        business_name: item["Business Name"],
        address: item["Address"],
        email_1: item["Email"],
        email_2: item["Email 2"],
        email_3: item["Email 3"],
        linkedin: item["Linkedin"],
        facebook: item["Facebook"],
        notes: item["Notes"],
        website: item["Website"],
        phone_number: item["Phone"],
      },
    });

    console.log(business);
  }

  return NextResponse.json({ msg: "Ok" });
}
