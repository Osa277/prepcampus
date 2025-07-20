'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiClient, tokenManager, User, AuthResponse, UserProfileResponse, handleApiError } from '../lib/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      const savedToken = tokenManager.getToken();
      if (savedToken) {
        setToken(savedToken);
        
        // Try to fetch user profile with saved token
        try {
          const userResponse = await apiClient.getUserProfile();
          if (userResponse.data) {
            setUser(userResponse.data);
          }
        } catch (error) {
          console.warn('Token invalid or expired, logging out');
          // Token is invalid, clear it
          tokenManager.removeToken();
          setToken(null);
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await apiClient.login({ email, password });
      
      if (response.data?.token) {
        tokenManager.setToken(response.data.token);
        setToken(response.data.token);
        
        // Set user data from login response
        if (response.data.user) {
          setUser(response.data.user);
        } else {
          // Fetch user data after successful login if not in response
          try {
            const userResponse = await apiClient.getUserProfile();
            if (userResponse.data) {
              setUser(userResponse.data);
            }
          } catch (userError) {
            console.warn('Failed to fetch user profile:', userError);
            // Still consider login successful even if profile fetch fails
          }
        }
      }
    } catch (err: any) {
      setError(handleApiError(err));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await apiClient.register({ firstName, lastName, email, password });
      
      if (response.data?.token) {
        tokenManager.setToken(response.data.token);
        setToken(response.data.token);
        
        // Set user data from signup response
        if (response.data.user) {
          setUser(response.data.user);
        }
      }
    } catch (err: any) {
      setError(handleApiError(err));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    tokenManager.removeToken();
    setToken(null);
    setUser(null);
    setError(null);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token,
    isLoading,
    login,
    signup,
    logout,
    error,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
