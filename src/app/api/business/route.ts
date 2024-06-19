import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const data = { message: 'GET request received' };
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const data = { message: 'POST request received', body };
  return NextResponse.json(data);
}
