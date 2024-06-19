import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const data = { message: 'PUT req received', body };
  return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
  const data = { message: 'DELETE req received' };
  return NextResponse.json(data);
}
