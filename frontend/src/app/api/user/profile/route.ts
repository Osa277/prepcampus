import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Check for authorization header
    const authorization = request.headers.get('authorization');
    
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return NextResponse.json({
        success: false,
        message: 'Authorization token required'
      }, { status: 401 });
    }

    // Mock user data (in real app, decode token and fetch from database)
    const mockUser = {
      _id: 'demo-user-id',
      firstName: 'Demo',
      lastName: 'User',
      email: 'demo@example.com',
      level: 1,
      stage: 1,
      isAdmin: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      data: mockUser
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Server error'
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Check for authorization header
    const authorization = request.headers.get('authorization');
    
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return NextResponse.json({
        success: false,
        message: 'Authorization token required'
      }, { status: 401 });
    }

    const body = await request.json();
    
    // Mock updated user data
    const updatedUser = {
      _id: 'demo-user-id',
      firstName: body.firstName || 'Demo',
      lastName: body.lastName || 'User',
      email: body.email || 'demo@example.com',
      level: body.level || 1,
      stage: body.stage || 1,
      isAdmin: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      data: updatedUser,
      message: 'Profile updated successfully'
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Server error'
    }, { status: 500 });
  }
}
