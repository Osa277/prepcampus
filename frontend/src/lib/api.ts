// API configuration and utility functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

// User interface
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  level: number;
  stage: number;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

// API Response interfaces
export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: User;
    token: string;
  };
}

export interface UserProfileResponse {
  success: boolean;
  data?: User;
  message?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message: string;
}

export interface ApiError {
  success: false;
  message: string;
  error?: string;
}

// Request types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    console.log('Making API request to:', url);
    
    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Add authorization token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      mode: 'cors', // Explicitly set CORS mode
    };

    try {
      console.log('Fetch config:', config);
      const response = await fetch(url, config);
      console.log('Response received:', response.status, response.statusText);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error Response:', errorData);
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      console.error('Request URL:', url);
      console.error('Request config:', config);
      
      // Check if it's a network error
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new Error('Network error: Unable to connect to the server. Please check if the backend server is running on http://localhost:5000');
      }
      
      throw error;
    }
  }

  // Authentication endpoints
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return this.makeRequest<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData: RegisterData): Promise<AuthResponse> {
    return this.makeRequest<AuthResponse>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout(): Promise<ApiResponse> {
    return this.makeRequest<ApiResponse>('/auth/logout', {
      method: 'POST',
    });
  }

  // User profile endpoints
  async getUserProfile(): Promise<UserProfileResponse> {
    return this.makeRequest<UserProfileResponse>('/user/profile');
  }

  async updateUserProfile(profileData: Partial<User>): Promise<UserProfileResponse> {
    return this.makeRequest<UserProfileResponse>('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  // Interview endpoints
  async getInterviews(): Promise<ApiResponse> {
    return this.makeRequest<ApiResponse>('/interviews');
  }

  async createInterview(interviewData: Record<string, any>): Promise<ApiResponse> {
    return this.makeRequest<ApiResponse>('/interviews', {
      method: 'POST',
      body: JSON.stringify(interviewData),
    });
  }

  async getInterviewById(id: string): Promise<ApiResponse> {
    return this.makeRequest<ApiResponse>(`/interviews/${id}`);
  }

  // Technical interview endpoints
  async startTechnicalInterview(): Promise<ApiResponse> {
    return this.makeRequest<ApiResponse>('/technical-interview/start', {
      method: 'POST',
    });
  }

  async submitTechnicalAnswer(data: Record<string, any>): Promise<ApiResponse> {
    return this.makeRequest<ApiResponse>('/technical-interview/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Admin endpoints
  async getAdminDashboard(): Promise<ApiResponse> {
    return this.makeRequest<ApiResponse>('/admin/dashboard');
  }

  async getUsers(): Promise<ApiResponse> {
    return this.makeRequest<ApiResponse>('/admin/users');
  }

  // File upload
  async uploadFile(file: File, endpoint: string): Promise<ApiResponse> {
    const formData = new FormData();
    formData.append('file', file);

    return this.makeRequest<ApiResponse>(endpoint, {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set content-type for FormData
    });
  }
}

// Create and export the API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Export types for use in components
export type { RequestOptions };

// Utility function to handle API errors
export const handleApiError = (error: Error | ApiError | any): string => {
  if (error?.message) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unexpected error occurred. Please try again.';
};

// Token management utilities
export const tokenManager = {
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  },
  
  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  },
  
  removeToken: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  },
  
  isAuthenticated: () => {
    return !!tokenManager.getToken();
  }
};
