import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  if (!id) {
    return NextResponse.error();
  }

  const body = await req.json();

  const {
    called,
    picked_up,
    pitched,
    booked,
  }: {
    called?: boolean | undefined;
    picked_up?: boolean | undefined;
    pitched?: boolean | undefined;
    booked?: boolean | undefined;
  } = body;

  const data: any = {};

  if (called) {
    data["called_at"] = new Date();
  } else if (called === false) {
    data["called_at"] = null;
  }

  if (typeof picked_up === "boolean") {
    data["picked_up"] = picked_up;
  }

  if (typeof pitched === "boolean") {
    data["pitched"] = pitched;
  }

  if (typeof booked === "boolean") {
    data["booked"] = booked;
  }

  await prisma.business.update({ where: { id }, data: data });

  return NextResponse.json({ msg: "Success" });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log(id, params);
  if (!id) {
    return NextResponse.error();
  }

  await prisma.business.delete({ where: { id } });

  return NextResponse.json({ msg: "Deleted" });
}
