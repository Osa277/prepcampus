import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // For demo purposes, accept any login
    if (!email || !password) {
      return NextResponse.json({
        success: false,
        message: 'Email and password are required'
      }, { status: 400 });
    }

    // Mock user data
    const mockUser = {
      _id: 'demo-user-id',
      firstName: 'Demo',
      lastName: 'User',
      email: email,
      level: 1,
      stage: 1,
      isAdmin: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Mock token (in real app, this would be a JWT)
    const mockToken = 'demo-token-' + Date.now();

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      data: {
        user: mockUser,
        token: mockToken
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Invalid request format'
    }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: false,
    message: 'Method not allowed'
  }, { status: 405 });
}
