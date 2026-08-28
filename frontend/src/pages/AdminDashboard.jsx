import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Inbox,
  LogOut,
  Search,
  Trash2,
  CheckCircle2,
  Clock,
  AlertCircle,
  Mail,
  Phone,
  Building,
  X,
  ExternalLink,
  RefreshCw,
  PlusCircle,
  UserCheck,
  Send,
  Check
} from 'lucide-react';
import { enquiryApi } from '../api/enquiryApi';
import { StatusBadge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, closed: 0 });
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [serviceFilter, setServiceFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);


  // Load enquiries and stats directly from backend/database
  const loadData = async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const data = await enquiryApi.getEnquiries('ALL');
      const statsData = await enquiryApi.getStats();
      setEnquiries(Array.isArray(data) ? data : []);
      setStats(statsData);
    } catch (err) {
      console.error('Failed to load enquiries from database:', err);
      setLoadError('Unable to connect to the backend. Make sure the Spring Boot server is running on port 8080.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Clear any stale localStorage mock data so we always load fresh from DB
    localStorage.removeItem('nexatech_enquiries');
    loadData();
  }, []);

  const showToast = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Status update
  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await enquiryApi.updateStatus(id, newStatus);
      if (res && res.success) {
        showToast(`Status updated to ${newStatus}`);
        if (selectedEnquiry && String(selectedEnquiry.id) === String(id)) {
          setSelectedEnquiry((prev) => ({ ...prev, status: newStatus }));
        }
        // Reload fresh from database
        await loadData();
      } else {
        showToast(res?.message || 'Failed to update status', 'error');
      }
    } catch (err) {
      showToast('Failed to update status', 'error');
    } finally {
      setUpdatingId(null);
    }
  };

  // Delete enquiry
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry record?')) return;

    try {
      const res = await enquiryApi.deleteEnquiry(id);
      if (res && res.success) {
        showToast('Enquiry deleted successfully');
        if (selectedEnquiry && String(selectedEnquiry.id) === String(id)) {
          setDrawerOpen(false);
          setSelectedEnquiry(null);
        }
        // Reload fresh from database
        await loadData();
      } else {
        showToast(res?.message || 'Failed to delete enquiry', 'error');
      }
    } catch (err) {
      showToast('Failed to delete enquiry', 'error');
    }
  };

  // Quick Seed Demo Enquiry
  const handleAddDemoEnquiry = async () => {
    const demoNames = ['Sophia Chen', 'Liam O\'Connor', 'Dmitri Volkov', 'Zoe Martinez'];
    const demoCompanies = ['Vanguard AI', 'Nexus Labs', 'Quantum Pulse', 'Apex Fintech'];
    const demoServices = ['Custom Software', 'Web Development', 'UI/UX Design', 'API Development'];
    
    const randomIdx = Math.floor(Math.random() * demoNames.length);
    const demo = {
      name: demoNames[randomIdx],
      email: `${demoNames[randomIdx].toLowerCase().replace(/[^a-z]/g, '')}@example.com`,
      phone: '+1 (555) 304-' + Math.floor(1000 + Math.random() * 9000),
      company: demoCompanies[randomIdx],
      service: demoServices[randomIdx],
      message: 'Demo inquiry automatically generated for technical interview evaluation. Testing live ingestion and pipeline synchronization.',
    };

    const res = await enquiryApi.createEnquiry(demo);
    if (res && res.success) {
      showToast('Demo enquiry generated & saved to database!');
      await loadData();
    } else {
      showToast(res?.message || 'Failed to create demo enquiry', 'error');
    }
  };

  // Filtered List
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      // Status filter
      if (statusFilter !== 'ALL' && item.status.toUpperCase() !== statusFilter.toUpperCase()) {
        return false;
      }
      // Service filter
      if (serviceFilter !== 'ALL' && item.service !== serviceFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name?.toLowerCase().includes(query);
        const matchEmail = item.email?.toLowerCase().includes(query);
        const matchCompany = item.company?.toLowerCase().includes(query);
        const matchService = item.service?.toLowerCase().includes(query);
        const matchMessage = item.message?.toLowerCase().includes(query);
        return matchName || matchEmail || matchCompany || matchService || matchMessage;
      }
      return true;
    });
  }, [enquiries, statusFilter, serviceFilter, searchQuery]);

  const openDetails = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setDrawerOpen(true);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Just now';
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row antialiased">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 animate-bounce">
          <div
            className={`px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-semibold border ${
              notification.type === 'error'
                ? 'bg-rose-950/90 text-rose-200 border-rose-700/50'
                : 'bg-emerald-950/90 text-emerald-200 border-emerald-700/50'
            }`}
          >
            {notification.type === 'error' ? (
              <AlertCircle className="w-4 h-4 text-rose-400" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            )}
            <span>{notification.msg}</span>
          </div>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 p-5 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand Header */}
          <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-200">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-violet-600" />
              </div>
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-slate-900 font-display">NexaTech</h2>
              <span className="text-[10px] font-mono uppercase tracking-widest text-violet-600 font-bold">
                Admin Console
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <div
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium bg-violet-600/10 text-violet-700 border border-violet-500/20"
            >
              <div className="flex items-center gap-3">
                <Inbox className="w-4 h-4" />
                <span>Enquiries</span>
              </div>
              {stats.new > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold font-mono">
                  {stats.new}
                </span>
              )}
            </div>
          </nav>
        </div>

        {/* Bottom Sidebar Action */}
        <div className="pt-6 border-t border-slate-200 space-y-3">
          <Link
            to="/"
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/5 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-violet-600" />
            <span>Back to Public Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Enquiry Management
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Review, qualify and manage incoming client project leads.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAddDemoEnquiry}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-violet-600/15 hover:bg-violet-600/25 border border-violet-500/30 text-violet-300 text-xs font-semibold transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Demo Lead</span>
            </button>

            <button
              onClick={loadData}
              disabled={loading}
              className="p-2.5 rounded-xl bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/5 text-slate-600 hover:text-slate-900 transition-all cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Backend Error Banner */}
        {loadError && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-rose-300">{loadError}</p>
              <button
                onClick={loadData}
                className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Retry Connection
              </button>
            </div>
          </div>
        )}


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Stat 1: Total */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                Total Enquiries
              </span>
              <div className="p-2 rounded-xl bg-slate-900/5 text-slate-600">
                <Inbox className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900 font-display">{stats.total}</div>
            <span className="text-[11px] text-slate-500 mt-1 block">All registered incoming leads</span>
          </div>

          {/* Stat 2: New */}
          <div className="p-5 rounded-2xl bg-white border border-amber-500/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
                New (Pending)
              </span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-amber-600 font-display">{stats.new}</div>
            <span className="text-[11px] text-amber-600/70 mt-1 block">Awaiting initial review</span>
          </div>

          {/* Stat 3: Contacted */}
          <div className="p-5 rounded-2xl bg-white border border-violet-500/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 font-mono">
                Contacted
              </span>
              <div className="p-2 rounded-xl bg-violet-500/10 text-violet-600">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-violet-600 font-display">{stats.contacted}</div>
            <span className="text-[11px] text-violet-600/70 mt-1 block">In conversation / discovery</span>
          </div>

          {/* Stat 4: Closed */}
          <div className="p-5 rounded-2xl bg-white border border-emerald-500/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 font-mono">
                Closed / Won
              </span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-emerald-600 font-display">{stats.closed}</div>
            <span className="text-[11px] text-emerald-600/70 mt-1 block">Contracted or resolved</span>
          </div>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client, email, company, service..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-violet-500 transition-all"
            />
          </div>

          {/* Status Tabs & Service Filter */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Status Pills */}
            <div className="flex items-center bg-slate-50 p-1 rounded-xl border border-slate-200 text-xs">
              {['ALL', 'NEW', 'CONTACTED', 'CLOSED'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    statusFilter === st
                      ? 'bg-violet-600 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Service Dropdown Filter */}
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 outline-none focus:border-violet-500 cursor-pointer"
            >
              <option value="ALL">All Services</option>
              <option value="Web Development">Web Development</option>
              <option value="Custom Software">Custom Software</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="API Development">API Development</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Enquiry Table */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  <th className="py-3.5 px-4 sm:px-6">Client / Company</th>
                  <th className="py-3.5 px-4 sm:px-6">Contact Info</th>
                  <th className="py-3.5 px-4 sm:px-6">Service</th>
                  <th className="py-3.5 px-4 sm:px-6">Status</th>
                  <th className="py-3.5 px-4 sm:px-6">Date</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400">
                      <div className="flex flex-col items-center gap-2">
                        <RefreshCw className="w-5 h-5 animate-spin text-violet-400" />
                        <span>Loading enquiries...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400">
                      <Inbox className="w-8 h-8 mx-auto text-slate-600 mb-2" />
                      <p className="font-semibold text-slate-300">No enquiries found</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Try adjusting your search query or status filter.
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((enquiry) => (
                    <tr
                      key={enquiry.id}
                      className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                      onClick={() => openDetails(enquiry)}
                    >
                      {/* Name & Company */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                          {enquiry.name}
                        </div>
                        {enquiry.company && (
                          <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                            <Building className="w-3 h-3 text-slate-500" />
                            <span>{enquiry.company}</span>
                          </div>
                        )}
                      </td>

                      {/* Contact Info */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="text-xs text-slate-600 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>{enquiry.email}</span>
                        </div>
                        <div className="text-xs text-slate-600 flex items-center gap-1.5 mt-1">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <span>{enquiry.phone}</span>
                        </div>
                      </td>

                      {/* Service */}
                      <td className="py-4 px-4 sm:px-6">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                          {enquiry.service}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4 sm:px-6">
                        <StatusBadge status={enquiry.status} />
                      </td>

                      {/* Date */}
                      <td className="py-4 px-4 sm:px-6 text-xs text-slate-500 font-mono">
                        {formatDate(enquiry.createdAt)}
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-4 sm:px-6 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-2">
                          {/* Quick Status Dropdown */}
                          <select
                            value={enquiry.status}
                            onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                            disabled={updatingId === enquiry.id}
                            className="px-2 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 outline-none focus:border-violet-500 cursor-pointer"
                          >
                            <option value="NEW">NEW</option>
                            <option value="CONTACTED">CONTACTED</option>
                            <option value="CLOSED">CLOSED</option>
                          </select>

                          {/* Delete button */}
                          <button
                            onClick={() => handleDelete(enquiry.id)}
                            className="p-1.5 rounded-lg bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-slate-200 transition-all"
                            title="Delete Enquiry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Slide-over Enquiry Details Drawer / Modal */}
      {drawerOpen && selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setDrawerOpen(false)}
          ></div>

          {/* Drawer Container */}
          <div className="relative w-full max-w-xl bg-white border-l border-slate-200 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-400">
                    <Inbox className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {selectedEnquiry.name}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">
                      Lead ID: #{selectedEnquiry.id} • {formatDate(selectedEnquiry.createdAt)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Updater Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-500 block mb-1 font-mono">
                    Current Status
                  </span>
                  <StatusBadge status={selectedEnquiry.status} />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Change:</span>
                  <select
                    value={selectedEnquiry.status}
                    onChange={(e) => handleStatusChange(selectedEnquiry.id, e.target.value)}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 outline-none focus:border-violet-500 cursor-pointer"
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </div>
              </div>

              {/* Client Info Grid */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-violet-500" />
                    <span className="text-slate-500">Email:</span>
                    <a
                      href={`mailto:${selectedEnquiry.email}`}
                      className="text-slate-900 hover:text-violet-600 font-medium underline"
                    >
                      {selectedEnquiry.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-cyan-500" />
                    <span className="text-slate-500">Phone:</span>
                    <a
                      href={`tel:${selectedEnquiry.phone}`}
                      className="text-slate-900 hover:text-cyan-600 font-medium"
                    >
                      {selectedEnquiry.phone}
                    </a>
                  </div>

                  {selectedEnquiry.company && (
                    <div className="flex items-center gap-3 text-sm">
                      <Building className="w-4 h-4 text-amber-500" />
                      <span className="text-slate-500">Company:</span>
                      <span className="text-slate-900 font-medium">{selectedEnquiry.company}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-sm">
                    <LayoutDashboard className="w-4 h-4 text-emerald-500" />
                    <span className="text-slate-500">Service Category:</span>
                    <span className="text-emerald-600 font-semibold">{selectedEnquiry.service}</span>
                  </div>
                </div>
              </div>

              {/* Message Details */}
              <div className="mb-6">
                <span className="text-xs uppercase font-bold text-slate-500 block mb-2 font-mono">
                  Project Vision &amp; Message
                </span>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {selectedEnquiry.message}
                </div>
              </div>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
              <a
                href={`mailto:${selectedEnquiry.email}?subject=NexaTech%20Partnership%20-%20Project%20Enquiry`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-violet-600/30 hover:scale-[1.02] transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Reply via Email</span>
              </a>

              <button
                onClick={() => handleDelete(selectedEnquiry.id)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold transition-all"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
