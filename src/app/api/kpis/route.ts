import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const businesses = await prisma.business.findMany();

  return NextResponse.json(businesses);
}
