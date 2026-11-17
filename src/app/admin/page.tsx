'use client';

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import { useStudioPlatform } from '@/context/StudioPlatformContext';
import Link from 'next/link';

interface NetworkStudio {
  id: string;
  name: string;
  location: string;
  suites: number;
  monthlyGMV: number;
  plan: 'Growth' | 'Enterprise' | 'Starter';
  status: 'Active' | 'Pending Verification' | 'Onboarding';
  ordersCount: number;
}

const mockNetworkStudios: NetworkStudio[] = [
  { id: 'ST-101', name: 'Apex Sound & Cinema Studios', location: 'Oakbrook Terrace / Chicago, IL', suites: 4, monthlyGMV: 18450, plan: 'Growth', status: 'Active', ordersCount: 14 },
  { id: 'ST-102', name: 'Obsidian Media Lab', location: 'Manhattan, New York, NY', suites: 6, monthlyGMV: 42000, plan: 'Enterprise', status: 'Active', ordersCount: 38 },
  { id: 'ST-103', name: 'West Coast Creator Bay', location: 'Santa Monica, Los Angeles, CA', suites: 5, monthlyGMV: 31500, plan: 'Growth', status: 'Active', ordersCount: 22 },
  { id: 'ST-104', name: 'SoHo Broadcast Suites', location: 'London, UK', suites: 3, monthlyGMV: 24800, plan: 'Growth', status: 'Active', ordersCount: 19 },
  { id: 'ST-105', name: 'Frontier Tech Soundstage', location: 'Austin, TX', suites: 4, monthlyGMV: 26000, plan: 'Enterprise', status: 'Active', ordersCount: 27 },
  { id: 'ST-106', name: 'Beacon Hill Podcast House', location: 'Boston, MA', suites: 2, monthlyGMV: 11200, plan: 'Starter', status: 'Pending Verification', ordersCount: 3 },
  { id: 'ST-107', name: 'Brickell Audio Labs', location: 'Miami, FL', suites: 3, monthlyGMV: 19800, plan: 'Growth', status: 'Active', ordersCount: 12 },
  { id: 'ST-108', name: 'Pacific North Podcasting', location: 'Seattle, WA', suites: 2, monthlyGMV: 9600, plan: 'Starter', status: 'Onboarding', ordersCount: 1 },
];

export default function PlatformAdminPage() {
  const { role, switchRole, networkStats } = useStudioPlatform();
  const [studios, setStudios] = useState<NetworkStudio[]>(mockNetworkStudios);
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleVerify = (id: string) => {
    setStudios((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'Active' as const } : s))
    );
  };

  const filtered = studios.filter((s) => {
    const matchesFilter = filter === 'All' || s.status === filter;
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="py-5" style={{ minHeight: '90vh', background: '#09090B' }}>
            <div className="container py-3">
              {/* Top Admin Header */}
              <div className="p-4 rounded-4 mb-4" style={{ background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.95) 0%, rgba(10, 12, 18, 0.98) 100%)', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
                <div className="row align-items-center g-3">
                  <div className="col-12 col-lg-8">
                    <div className="d-flex align-items-center gap-3 mb-2 flex-wrap">
                      <span className="badge rounded-pill bg-success bg-opacity-25 text-success font-size-12 px-3 py-1 font-weight-bold">
                        🛡️ GLOBAL PLATFORM ADMIN
                      </span>
                      <h1 className="text-white font-size-24 font-weight-bold mb-0">Growth Domains Network Command Center</h1>
                    </div>
                    <p className="text-secondary font-size-13 mb-0">
                      Managing 348 partner studios, wholesale post-production fulfillment queues, and platform infrastructure.
                    </p>
                  </div>

                  <div className="col-12 col-lg-4 d-flex justify-content-lg-end gap-2">
                    <button
                      type="button"
                      onClick={() => switchRole('studio')}
                      className="btn btn-outline-warning text-warning font-size-12 px-3 py-2 font-weight-bold"
                    >
                      ← Switch to Studio OS
                    </button>
                    <button
                      type="button"
                      onClick={() => switchRole('visitor')}
                      className="btn btn-outline-secondary text-white font-size-12 px-3 py-2"
                    >
                      View as Visitor
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 Network KPI Metric Cards */}
              <div className="row g-3 mb-4">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="text-secondary font-size-12 font-weight-bold mb-1">TOTAL NETWORK STUDIOS</div>
                    <div className="text-white font-size-28 font-weight-bold mb-1">
                      {networkStats.totalStudios}
                    </div>
                    <div className="text-success font-size-12">+16 this month across 24 cities</div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="text-secondary font-size-12 font-weight-bold mb-1">STUDIO GMV PROCESSED</div>
                    <div className="text-white font-size-28 font-weight-bold mb-1" style={{ color: '#00E676' }}>
                      {networkStats.totalGMV}
                    </div>
                    <div className="text-secondary font-size-12">Processed via Growth Domains OS</div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="text-secondary font-size-12 font-weight-bold mb-1">WHOLESALE EDITS DELIVERED</div>
                    <div className="text-white font-size-28 font-weight-bold mb-1" style={{ color: '#FF8A33' }}>
                      {networkStats.wholesaleOrdersDelivered.toLocaleString()}
                    </div>
                    <div className="text-secondary font-size-12">&lt; 24h Average Turnaround (99.4% SLA)</div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="text-secondary font-size-12 font-weight-bold mb-1">STUDIO OCCUPANCY UPLIFT</div>
                    <div className="text-white font-size-28 font-weight-bold mb-1" style={{ color: '#FF6B00' }}>
                      {networkStats.avgUtilizationIncrease}
                    </div>
                    <div className="text-secondary font-size-12">Average revenue jump after 90 days</div>
                  </div>
                </div>
              </div>

              {/* Studio Directory Table */}
              <div className="p-4 rounded-4" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-size-18 font-weight-bold mb-1">Partner Studios Network Directory</h3>
                    <p className="text-secondary font-size-13 mb-0">Monitor active facilities, verify new registrations, and inspect wholesale fulfillment volume.</p>
                  </div>

                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <input
                      type="text"
                      placeholder="Search studio or city..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="form-control form-control-sm bg-dark text-white border-secondary"
                      style={{ width: '200px' }}
                    />
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="form-select form-select-sm bg-dark text-white border-secondary"
                      style={{ width: 'auto' }}
                    >
                      <option value="All">All Statuses ({studios.length})</option>
                      <option value="Active">Active</option>
                      <option value="Pending Verification">Pending Verification</option>
                      <option value="Onboarding">Onboarding</option>
                    </select>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-dark table-hover align-middle mb-0" style={{ background: 'transparent' }}>
                    <thead>
                      <tr className="border-secondary border-opacity-25 font-size-12 text-secondary text-uppercase">
                        <th>Studio ID</th>
                        <th>Facility Name &amp; Market</th>
                        <th>Suites</th>
                        <th>Monthly Volume</th>
                        <th>Membership</th>
                        <th>Wholesale Orders</th>
                        <th>Status</th>
                        <th>Admin Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((st) => (
                        <tr key={st.id} className="border-secondary border-opacity-10 font-size-14">
                          <td className="font-monospace text-secondary font-size-12">{st.id}</td>
                          <td>
                            <div className="text-white font-weight-bold">{st.name}</div>
                            <div className="text-secondary font-size-12">{st.location}</div>
                          </td>
                          <td className="text-white font-weight-bold">{st.suites} Suites</td>
                          <td className="text-white font-weight-bold">${st.monthlyGMV.toLocaleString()}</td>
                          <td>
                            <span className="badge rounded-pill bg-secondary bg-opacity-25 text-white-50 font-size-11">
                              {st.plan}
                            </span>
                          </td>
                          <td className="text-secondary">{st.ordersCount} edits</td>
                          <td>
                            <span
                              className="badge rounded-pill px-3 py-1 font-size-11"
                              style={{
                                background:
                                  st.status === 'Active'
                                    ? 'rgba(0, 230, 118, 0.2)'
                                    : st.status === 'Pending Verification'
                                    ? 'rgba(255, 107, 0, 0.2)'
                                    : 'rgba(255, 255, 255, 0.1)',
                                color:
                                  st.status === 'Active'
                                    ? '#00E676'
                                    : st.status === 'Pending Verification'
                                    ? '#FF8A33'
                                    : '#A1A1AA',
                              }}
                            >
                              {st.status}
                            </span>
                          </td>
                          <td>
                            {st.status === 'Pending Verification' ? (
                              <button
                                type="button"
                                onClick={() => handleVerify(st.id)}
                                className="btn btn-sm btn-success py-1 px-3 font-size-12 font-weight-bold"
                              >
                                Approve Studio
                              </button>
                            ) : (
                              <button type="button" className="btn btn-sm btn-outline-secondary py-1 px-2 font-size-12 text-white-50">
                                Inspect Logs
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

