'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'visitor' | 'studio' | 'admin';

export interface StudioSuite {
  id: string;
  name: string;
  rate: number;
  type: string;
  status: 'Available' | 'Booked' | 'Maintenance';
}

export interface StudioBooking {
  id: string;
  clientName: string;
  clientEmail: string;
  suite: string;
  date: string;
  durationHours: number;
  status: 'Confirmed' | 'In Session' | 'Completed' | 'Pending Deposit';
  totalAmount: number;
  whiteLabelServices?: string[];
}

export interface WholesaleServiceOrder {
  id: string;
  serviceType: string;
  clientShowName: string;
  submittedAt: string;
  turnaroundEstimate: string;
  status: 'Received' | 'In Post-Production' | 'Mastering & Color' | 'Delivered';
  cost: number;
  resalePrice: number;
}

export interface RegisteredStudio {
  name: string;
  ownerName: string;
  email: string;
  phone: string;
  city: string;
  studioType: string;
  membershipPlan: 'Starter' | 'Growth' | 'Enterprise';
  joinedDate: string;
  monthlyRevenue: number;
  suiteUtilizationRate: number;
  suites: StudioSuite[];
  bookings: StudioBooking[];
  wholesaleOrders: WholesaleServiceOrder[];
}

interface StudioPlatformContextType {
  role: UserRole;
  switchRole: (newRole: UserRole) => void;
  studio: RegisteredStudio;
  registerStudio: (data: Partial<RegisteredStudio>) => void;
  addBooking: (booking: Omit<StudioBooking, 'id'>) => void;
  createWholesaleOrder: (order: Omit<WholesaleServiceOrder, 'id' | 'submittedAt' | 'status'>) => void;
  updateStudio: (data: Partial<RegisteredStudio>) => void;
  networkStats: {
    totalStudios: number;
    totalGMV: string;
    wholesaleOrdersDelivered: number;
    avgUtilizationIncrease: string;
  };
}

const defaultStudio: RegisteredStudio = {
  name: 'Apex Sound & Cinema Studios',
  ownerName: 'Marcus Sterling',
  email: 'marcus@apexstudios.com',
  phone: '773-757-9417',
  city: 'Chicago / Oakbrook, IL',
  studioType: 'Multi-Cam Podcast & Video Production',
  membershipPlan: 'Growth',
  joinedDate: 'October 2025',
  monthlyRevenue: 18450,
  suiteUtilizationRate: 78,
  suites: [
    { id: 'S1', name: 'Suite 1 - 4K Cinema Master', rate: 195, type: 'Sony FX6 4-Cam · STC 65', status: 'Booked' },
    { id: 'S2', name: 'Suite 2 - Modern Creator Bay', rate: 145, type: 'RGB Lighting · Multi-Cam Switching', status: 'Available' },
    { id: 'S3', name: 'Suite 3 - Executive Boardroom', rate: 175, type: 'Glass Slat · 4K B2B Setup', status: 'Available' },
    { id: 'S4', name: 'Suite 4 - Master Voice Booth', rate: 95, type: 'Whisper-Quiet STC 68 · Shure SM7B', status: 'Booked' },
  ],
  bookings: [
    {
      id: 'BK-1081',
      clientName: 'The Founder Orbit Podcast',
      clientEmail: 'team@founderorbit.vc',
      suite: 'Suite 1 - 4K Cinema Master',
      date: 'Today, 2:00 PM - 5:00 PM',
      durationHours: 3,
      status: 'In Session',
      totalAmount: 585,
      whiteLabelServices: ['24h Episode Edit Cut', '10 Viral Retention Shorts'],
    },
    {
      id: 'BK-1082',
      clientName: 'Dr. Elena Rostova · Longevity Labs',
      clientEmail: 'rostova@longevitylabs.io',
      suite: 'Suite 4 - Master Voice Booth',
      date: 'Today, 5:30 PM - 7:30 PM',
      durationHours: 2,
      status: 'Confirmed',
      totalAmount: 190,
      whiteLabelServices: ['Dolby Loudness Mastering'],
    },
    {
      id: 'BK-1083',
      clientName: 'Fintech Velocity Roundtable',
      clientEmail: 'briefs@fintechvelocity.com',
      suite: 'Suite 3 - Executive Boardroom',
      date: 'Tomorrow, 10:00 AM - 1:00 PM',
      durationHours: 3,
      status: 'Confirmed',
      totalAmount: 525,
      whiteLabelServices: ['Live ATEM Switching', '24h Full Master Cut'],
    },
    {
      id: 'BK-1084',
      clientName: 'Unfiltered Culture & Creators',
      clientEmail: 'mgmt@unfilteredcreators.co',
      suite: 'Suite 2 - Modern Creator Bay',
      date: 'Nov 8, 3:00 PM - 6:00 PM',
      durationHours: 3,
      status: 'Pending Deposit',
      totalAmount: 435,
      whiteLabelServices: ['10 Viral Shorts Engine'],
    },
  ],
  wholesaleOrders: [
    {
      id: 'WSO-4401',
      serviceType: '24h White-Label Multi-Cam 4K Episode Edit',
      clientShowName: 'The Founder Orbit - Ep 42',
      submittedAt: 'Today, 11:20 AM',
      turnaroundEstimate: 'Ready in 7 hours',
      status: 'In Post-Production',
      cost: 160,
      resalePrice: 450,
    },
    {
      id: 'WSO-4402',
      serviceType: '10x Retention-Optimized Viral Shorts Package',
      clientShowName: 'Unfiltered Culture - Ep 19',
      submittedAt: 'Yesterday, 4:00 PM',
      turnaroundEstimate: 'Delivered',
      status: 'Delivered',
      cost: 95,
      resalePrice: 320,
    },
  ],
};

const defaultStats = {
  totalStudios: 348,
  totalGMV: '$4.2M+',
  wholesaleOrdersDelivered: 12480,
  avgUtilizationIncrease: '+42%',
};

const StudioPlatformContext = createContext<StudioPlatformContextType | undefined>(undefined);

export const StudioPlatformProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>('visitor');
  const [studio, setStudio] = useState<RegisteredStudio>(defaultStudio);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedRole = localStorage.getItem('gd_user_role') as UserRole;
      if (savedRole && (savedRole === 'visitor' || savedRole === 'studio' || savedRole === 'admin')) {
        setRole(savedRole);
      }
      const savedStudio = localStorage.getItem('gd_studio_profile');
      if (savedStudio) {
        setStudio(JSON.parse(savedStudio));
      }
    } catch {
      // Safe fallback
    }
  }, []);

  const switchRole = (newRole: UserRole) => {
    setRole(newRole);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('gd_user_role', newRole);
      } catch {}
    }
  };

  const registerStudio = (data: Partial<RegisteredStudio>) => {
    const updated: RegisteredStudio = {
      ...defaultStudio,
      ...data,
      joinedDate: 'November 2026',
    };
    setStudio(updated);
    setRole('studio');
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('gd_user_role', 'studio');
        localStorage.setItem('gd_studio_profile', JSON.stringify(updated));
      } catch {}
    }
  };

  const addBooking = (newBooking: Omit<StudioBooking, 'id'>) => {
    const created: StudioBooking = {
      ...newBooking,
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
    };
    const updated: RegisteredStudio = {
      ...studio,
      monthlyRevenue: studio.monthlyRevenue + created.totalAmount,
      bookings: [created, ...studio.bookings],
    };
    setStudio(updated);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('gd_studio_profile', JSON.stringify(updated));
      } catch {}
    }
  };

  const createWholesaleOrder = (order: Omit<WholesaleServiceOrder, 'id' | 'submittedAt' | 'status'>) => {
    const created: WholesaleServiceOrder = {
      ...order,
      id: `WSO-${Math.floor(4000 + Math.random() * 5000)}`,
      submittedAt: 'Just now',
      status: 'Received',
    };
    const updated: RegisteredStudio = {
      ...studio,
      wholesaleOrders: [created, ...studio.wholesaleOrders],
    };
    setStudio(updated);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('gd_studio_profile', JSON.stringify(updated));
      } catch {}
    }
  };

  const updateStudio = (data: Partial<RegisteredStudio>) => {
    const updated: RegisteredStudio = {
      ...studio,
      ...data,
    };
    setStudio(updated);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('gd_studio_profile', JSON.stringify(updated));
      } catch {}
    }
  };

  return (
    <StudioPlatformContext.Provider
      value={{
        role,
        switchRole,
        studio,
        registerStudio,
        addBooking,
        createWholesaleOrder,
        updateStudio,
        networkStats: defaultStats,
      }}
    >
      {children}
    </StudioPlatformContext.Provider>
  );
};

export const useStudioPlatform = () => {
  const context = useContext(StudioPlatformContext);
  if (!context) {
    return {
      role: 'visitor' as UserRole,
      switchRole: () => {},
      studio: defaultStudio,
      registerStudio: () => {},
      addBooking: () => {},
      createWholesaleOrder: () => {},
      updateStudio: () => {},
      networkStats: defaultStats,
    };
  }
  return context;
};
