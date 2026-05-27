"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  ShieldCheck,
  ArrowRight,
  RefreshCcw,
} from "lucide-react";

type OrderRequest = {
  id: string;
  name: string;
  email: string;
  websiteType: string;
  budget: string;
  timeline: string;
  contactMethod: string;
  scope: string;
  submittedAt: string;
  status: string;
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
};

const ORDERS_STORAGE_KEY = "zenthro-order-requests";

function loadOrders(): OrderRequest[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveOrders(list: OrderRequest[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(list));
}

function getStatusStyles(status: string) {
  const normalized = status.toLowerCase();
  if (normalized.includes("approved")) {
    return "border-emerald-400/30 bg-emerald-500/10 text-emerald-300";
  }
  if (normalized.includes("pending")) {
    return "border-amber-400/30 bg-amber-500/10 text-amber-300";
  }
  if (normalized.includes("needs info")) {
    return "border-rose-400/30 bg-rose-500/10 text-rose-300";
  }
  return "border-sky-400/30 bg-sky-500/10 text-sky-300";
}

const sidebarItems = [
  { label: "Orders", icon: LayoutDashboard },
  { label: "Team", icon: Users },
  { label: "Review", icon: ClipboardList },
  { label: "Security", icon: ShieldCheck },
];

const initialTeam: TeamMember[] = [
  { id: "team-1", name: "Mira Sanchez", role: "Project Lead", email: "mira@zenthro.dev" },
  { id: "team-2", name: "Kunal Varma", role: "UI/UX Architect", email: "kunal@zenthro.dev" },
  { id: "team-3", name: "Riya Patel", role: "QA & Release", email: "riya@zenthro.dev" },
];

export default function OrderDashboard() {
  const [accessKey, setAccessKey] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [orders, setOrdersState] = useState<OrderRequest[]>([]);
  const [selectedPanel, setSelectedPanel] = useState("Orders");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeam);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");

  useEffect(() => {
    if (authorized) {
      setOrdersState(loadOrders());
    }
  }, [authorized]);

  const summary = useMemo(
    () => ({
      total: orders.length,
      pending: orders.filter((order) => order.status.toLowerCase().includes("pending")).length,
      approved: orders.filter((order) => order.status.toLowerCase().includes("approved")).length,
    }),
    [orders]
  );

  const handleAccess = () => {
    if (accessKey.trim().toLowerCase() === "zenthro-team") {
      setAuthorized(true);
      setOrdersState(loadOrders());
    } else {
      alert("Access code invalid. Use the team passphrase to view the dashboard.");
    }
  };

  const updateOrders = (updated: OrderRequest[]) => {
    setOrdersState(updated);
    saveOrders(updated);
  };

  const cycleOrderStatus = (id: string) => {
    const updated = orders.map((order) => {
      if (order.id !== id) return order;
      const nextStatus = order.status === "Review pending" ? "Approved" : order.status === "Approved" ? "Needs info" : "Review pending";
      return { ...order, status: nextStatus };
    });
    updateOrders(updated);
  };

  const clearOrders = () => {
    updateOrders([]);
  };

  const addTeamMember = () => {
    if (!newMemberName || !newMemberRole || !newMemberEmail) return;
    setTeamMembers((prev) => [
      ...prev,
      {
        id: `team-${prev.length + 1}`,
        name: newMemberName,
        role: newMemberRole,
        email: newMemberEmail,
      },
    ]);
    setNewMemberName("");
    setNewMemberRole("");
    setNewMemberEmail("");
  };

  return (
    <section className="relative min-h-screen py-24 md:py-28 overflow-hidden bg-brand-bg-dark border-t border-brand-border">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-3 inline-block">
            Team-only dashboard
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-brand-text-primary tracking-tight">
            Internal order review with sidebar access.
          </h1>
          <p className="mt-4 text-sm md:text-base text-brand-text-secondary max-w-2xl mx-auto leading-relaxed">
            This panel is separated from the public site. Only authorized team members can view and manage incoming order requests.
          </p>
        </div>

        {!authorized ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-xl rounded-3xl border border-brand-border bg-brand-card/40 backdrop-blur-md p-8"
          >
            <div className="flex items-center gap-3 mb-6 text-brand-primary">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="font-display font-bold text-lg">Team access required</h2>
            </div>
            <p className="text-sm text-brand-text-secondary mb-6">
              Enter the team passphrase to access the internal order dashboard. This route is intended for admin and operations only.
            </p>
            <div className="space-y-4">
              <input
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                type="password"
                placeholder="Enter team passphrase"
                className="w-full rounded-2xl border border-brand-border bg-brand-bg-dark px-4 py-3 text-sm text-brand-text-primary focus:outline-none focus:border-brand-primary/60"
              />
              <button
                type="button"
                onClick={handleAccess}
                className="w-full rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-bg-dark transition hover:bg-brand-secondary"
              >
                Unlock dashboard
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)] gap-8">
            <aside className="rounded-3xl border border-brand-border bg-brand-card/40 backdrop-blur-md p-6 text-brand-text-primary">
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-primary font-semibold mb-3">Admin console</p>
                <h2 className="font-display text-2xl font-bold">Order Operations</h2>
              </div>
              <div className="space-y-3">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const active = selectedPanel === item.label;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setSelectedPanel(item.label)}
                      className={`group flex w-full items-center gap-3 rounded-3xl border px-4 py-4 text-left transition ${
                        active
                          ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                          : "border-brand-border/60 bg-brand-bg-dark/70 text-brand-text-primary hover:border-brand-primary/40 hover:bg-brand-primary/5"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-semibold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-10 rounded-3xl border border-brand-border/80 bg-brand-bg-dark/80 p-4 text-sm text-brand-text-secondary">
                <p className="font-semibold text-brand-text-primary">Secure view</p>
                <p className="mt-2">This dashboard is designed for internal review only. Orders are not displayed on the public site.</p>
              </div>
            </aside>

            <main className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-3xl border border-brand-border/60 bg-brand-bg-dark/80 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-text-secondary">Total Requests</p>
                  <p className="mt-3 text-3xl font-bold text-brand-text-primary">{summary.total}</p>
                </div>
                <div className="rounded-3xl border border-brand-border/60 bg-brand-bg-dark/80 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-text-secondary">Pending review</p>
                  <p className="mt-3 text-3xl font-bold text-brand-text-primary">{summary.pending}</p>
                </div>
                <div className="rounded-3xl border border-brand-border/60 bg-brand-bg-dark/80 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-text-secondary">Approved</p>
                  <p className="mt-3 text-3xl font-bold text-brand-text-primary">{summary.approved}</p>
                </div>
              </div>

              {selectedPanel === "Orders" && (
                <div className="rounded-3xl border border-brand-border/60 bg-brand-card/40 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-brand-text-primary">Order review queue</h3>
                      <p className="text-sm text-brand-text-secondary">Update statuses and manage new requests from the private order route.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateOrders(loadOrders())}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-border/60 bg-brand-bg-dark/80 px-4 py-2 text-xs font-semibold text-brand-text-primary transition hover:border-brand-primary/40 hover:bg-brand-primary/5"
                    >
                      <RefreshCcw className="h-4 w-4" />
                      Refresh orders
                    </button>
                  </div>

                  <div className="space-y-4">
                    {orders.length === 0 ? (
                      <div className="rounded-3xl border border-brand-border/50 bg-brand-bg-dark/80 p-6 text-sm text-brand-text-secondary">
                        No orders found yet. New submissions will appear here once received.
                      </div>
                    ) : (
                      orders.map((order) => (
                        <div key={order.id} className="rounded-3xl border border-brand-border/50 bg-brand-bg-dark/80 p-5">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-brand-text-primary">{order.name}</p>
                              <p className="text-[11px] text-brand-text-secondary mt-1">{order.websiteType}</p>
                            </div>
                            <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${getStatusStyles(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-brand-text-secondary">
                            <span>{order.budget}</span>
                            <span>{order.submittedAt}</span>
                            <span>{order.timeline}</span>
                            <span>{order.contactMethod}</span>
                          </div>
                          <p className="mt-4 text-sm leading-relaxed text-brand-text-secondary">{order.scope}</p>
                          <div className="mt-5 flex flex-wrap gap-3">
                            <button
                              type="button"
                              onClick={() => cycleOrderStatus(order.id)}
                              className="rounded-full border border-brand-border/60 bg-brand-bg-dark/90 px-4 py-2 text-xs font-semibold text-brand-text-primary transition hover:border-brand-primary/40 hover:bg-brand-primary/10"
                            >
                              Cycle status
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {selectedPanel === "Team" && (
                <div className="rounded-3xl border border-brand-border/60 bg-brand-card/40 p-6 space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-text-primary">Team roster</h3>
                    <p className="text-sm text-brand-text-secondary">Manage internal collaborators and share dashboard access with your core contributors.</p>
                  </div>
                  <div className="grid gap-4">
                    {teamMembers.map((member) => (
                      <div key={member.id} className="rounded-3xl border border-brand-border/50 bg-brand-bg-dark/80 p-5">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-brand-text-primary">{member.name}</p>
                            <p className="text-[11px] text-brand-text-secondary mt-1">{member.role}</p>
                          </div>
                          <span className="text-[10px] uppercase tracking-[0.18em] text-brand-text-secondary">{member.email}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-3xl border border-brand-border/60 bg-brand-bg-dark/80 p-5">
                    <h4 className="text-sm font-semibold text-brand-text-primary mb-4">Invite new team member</h4>
                    <div className="grid gap-4">
                      <input
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                        placeholder="Name"
                        className="w-full rounded-2xl border border-brand-border bg-brand-bg-dark px-4 py-3 text-sm text-brand-text-primary focus:outline-none focus:border-brand-primary/60"
                      />
                      <input
                        value={newMemberRole}
                        onChange={(e) => setNewMemberRole(e.target.value)}
                        placeholder="Role"
                        className="w-full rounded-2xl border border-brand-border bg-brand-bg-dark px-4 py-3 text-sm text-brand-text-primary focus:outline-none focus:border-brand-primary/60"
                      />
                      <input
                        value={newMemberEmail}
                        onChange={(e) => setNewMemberEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full rounded-2xl border border-brand-border bg-brand-bg-dark px-4 py-3 text-sm text-brand-text-primary focus:outline-none focus:border-brand-primary/60"
                      />
                      <button
                        type="button"
                        onClick={addTeamMember}
                        className="w-full rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-bg-dark transition hover:bg-brand-secondary"
                      >
                        Add team member
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {selectedPanel === "Review" && (
                <div className="rounded-3xl border border-brand-border/60 bg-brand-card/40 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-brand-text-primary">Review workflow</h3>
                      <p className="text-sm text-brand-text-secondary">Keep a prioritized review list and note items that need follow-up.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => clearOrders()}
                      className="rounded-full border border-brand-border/60 bg-brand-bg-dark/80 px-4 py-2 text-xs font-semibold text-brand-text-primary transition hover:border-brand-primary/40 hover:bg-brand-primary/5"
                    >
                      Clear order list
                    </button>
                  </div>
                  <div className="space-y-4">
                    {orders.length === 0 ? (
                      <div className="rounded-3xl border border-brand-border/50 bg-brand-bg-dark/80 p-6 text-sm text-brand-text-secondary">
                        No review items at this time. Wait for new order submissions.
                      </div>
                    ) : (
                      orders.map((order) => (
                        <div key={order.id} className="rounded-3xl border border-brand-border/50 bg-brand-bg-dark/80 p-5">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-brand-text-primary">{order.name}</p>
                              <p className="text-[11px] text-brand-text-secondary">{order.websiteType}</p>
                            </div>
                            <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${getStatusStyles(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                          <p className="mt-4 text-sm text-brand-text-secondary">{order.scope}</p>
                          <div className="mt-4 flex gap-3 flex-wrap">
                            <button
                              type="button"
                              onClick={() => cycleOrderStatus(order.id)}
                              className="rounded-full border border-brand-border/60 bg-brand-bg-dark/90 px-4 py-2 text-xs font-semibold text-brand-text-primary transition hover:border-brand-primary/40 hover:bg-brand-primary/10"
                            >
                              Cycle status
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {selectedPanel === "Security" && (
                <div className="rounded-3xl border border-brand-border/60 bg-brand-card/40 p-6 space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-text-primary">Security & access</h3>
                    <p className="text-sm text-brand-text-secondary">Control who can reach the dashboard and protect the order workflow.</p>
                  </div>
                  <div className="rounded-3xl border border-brand-border/50 bg-brand-bg-dark/80 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-primary font-semibold mb-3">Passphrase</p>
                    <p className="text-sm text-brand-text-secondary leading-relaxed">
                      The team passphrase for this demo dashboard is <span className="text-brand-text-primary font-semibold">zenthro-team</span>. Use this in the access panel to unlock the dashboard.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-brand-border/50 bg-brand-bg-dark/80 p-5">
                    <p className="text-sm font-semibold text-brand-text-primary">Operational notes</p>
                    <ul className="mt-3 space-y-3 text-sm text-brand-text-secondary list-disc list-inside">
                      <li>Only team members should know the dashboard path.</li>
                      <li>Client orders are stored locally and do not appear on the public site.</li>
                      <li>Refresh the list to sync with new incoming requests from the order page.</li>
                    </ul>
                  </div>
                </div>
              )}


              <div className="rounded-3xl border border-brand-border/60 bg-brand-bg-dark/80 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-brand-text-primary">Internal access note</h4>
                  <p className="text-sm text-brand-text-secondary">Share the dashboard path only with team members and admins. The public order route remains isolated.</p>
                </div>
                <div className="rounded-full border border-brand-primary/30 bg-brand-primary/5 px-4 py-3 text-sm font-semibold text-brand-primary flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  /dashboard
                </div>
              </div>
            </main>
          </div>
        )}
      </div>
    </section>
  );
}
