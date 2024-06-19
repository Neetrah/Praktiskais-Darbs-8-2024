import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const businesses = await prisma.business.findMany();

  const calledBusinesses = businesses.filter((b) => b.called_at);

  const pur = getPercentage(
    calledBusinesses.filter((b) => b.picked_up),
    calledBusinesses
  );
  const pr = getPercentage(
    calledBusinesses.filter((b) => b.pitched),
    calledBusinesses
  );
  const mbr = getPercentage(
    calledBusinesses.filter((b) => b.booked),
    calledBusinesses
  );

  const today = startOfDay(new Date());

  const callsToday = calledBusinesses.filter((b) => {
    if (!b.called_at) {
      return false;
    }

    const calledAtDate = startOfDay(new Date(b.called_at));
    return calledAtDate.getTime() === today.getTime();
  }).length;

  return NextResponse.json({ pur, pr, mbr, callsToday });
}

const getPercentage = (arr: any[], ogArr: any[]) => {
  return Math.floor((arr.length / ogArr.length) * 10000) / 100;
};

const startOfDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};
