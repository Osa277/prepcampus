import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'API is working',
    timestamp: new Date().toISOString(),
    environment: 'production'
  });
}

export async function POST() {
  return NextResponse.json({
    success: false,
    message: 'Method not supported'
  }, { status: 405 });
}
