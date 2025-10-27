import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { 
  Download, 
  RefreshCw, 
  Mail, 
  Phone, 
  MessageSquare,
  TrendingUp,
  Users,
  Clock,
  Search,
  Filter,
  Calendar,
  BarChart3,
  Eye,
  X,
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
  CheckCircle2,
  AlertCircle,
  DollarSign,
  MapPin,
  Building,
  Tag,
  Sparkles,
  LogOut,
  User,
  Trash2,
  Activity,
  Globe
} from 'lucide-react';
import { 
  newsletterAPI, 
  contactAPI, 
  chatbotAPI, 
  analyticsAPI,
  exportAPI 
} from '../utils/supabase/client';
import { authAPI } from '../utils/supabase/auth';
import { toast } from 'sonner@2.0.3';

type StatusFilter = 'all' | 'new' | 'contacted' | 'closed';
type SortField = 'date' | 'name' | 'status';
type SortOrder = 'asc' | 'desc';

export default function Admin() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<any>(null);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [chatbotLeads, setChatbotLeads] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'inquiries' | 'chatbot' | 'newsletter'>('overview');
  const [currentUser, setCurrentUser] = useState<any>(null);
  
  // Filter & Search States
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({ start: '', end: '' });
  
  // Selection & Deletion States
  const [selectedInquiries, setSelectedInquiries] = useState<Set<string>>(new Set());
  const [selectedChatbotLeads, setSelectedChatbotLeads] = useState<Set<string>>(new Set());
  
  // Live Analytics State
  const [liveAnalytics, setLiveAnalytics] = useState<any>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [statsData, inquiriesData, leadsData, subscribersData] = await Promise.all([
        analyticsAPI.getStats(),
        contactAPI.getInquiries(),
        chatbotAPI.getLeads(),
        newsletterAPI.getSubscribers()
      ]);

      setStats(statsData);
      setInquiries(inquiriesData.inquiries || []);
      setChatbotLeads(leadsData.leads || []);
      setSubscribers(subscribersData.subscribers || []);
      
      toast.success('Dashboard data refreshed successfully', {
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
    } catch (error) {
      console.error('Error loading admin data:', error);
      toast.error('Failed to load dashboard data. Please try again.', {
        icon: <AlertCircle className="h-5 w-5" />,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    loadUser();
    loadLiveAnalytics();
    
    // Refresh live analytics every 30 seconds
    const analyticsInterval = setInterval(loadLiveAnalytics, 30000);
    
    return () => clearInterval(analyticsInterval);
  }, []);
  
  const loadLiveAnalytics = async () => {
    try {
      const data = await analyticsAPI.getLiveAnalytics();
      setLiveAnalytics(data);
    } catch (error) {
      console.error('Error loading live analytics:', error);
    }
  };

  const loadUser = async () => {
    try {
      const user = await authAPI.getUser();
      setCurrentUser(user);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await authAPI.signOut();
      localStorage.removeItem('supabase_session');
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Error logging out');
    }
  };

  const handleStatusUpdate = async (inquiryId: string, newStatus: 'new' | 'contacted' | 'closed') => {
    try {
      await contactAPI.updateStatus(inquiryId, newStatus);
      toast.success(`Status updated to "${newStatus}" successfully`, {
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
      await loadData();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status. Please try again.', {
        icon: <AlertCircle className="h-5 w-5" />,
      });
    }
  };

  const handleExport = async (type: 'newsletters' | 'inquiries' | 'chatbot') => {
    try {
      toast.loading(`Preparing ${type} export...`, { id: 'export' });
      await exportAPI.download(type);
      toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} exported successfully!`, {
        id: 'export',
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
    } catch (error) {
      console.error('Error exporting data:', error);
      toast.error(`Failed to export ${type}. Please try again.`, {
        id: 'export',
        icon: <AlertCircle className="h-5 w-5" />,
      });
    }
  };

  const handleDeleteInquiries = async () => {
    if (selectedInquiries.size === 0) {
      toast.error('Please select inquiries to delete');
      return;
    }

    if (!confirm(`Are you sure you want to delete ${selectedInquiries.size} selected inquiry(ies)? This action cannot be undone.`)) {
      return;
    }

    try {
      toast.loading(`Deleting ${selectedInquiries.size} inquiry(ies)...`, { id: 'delete' });
      await contactAPI.bulkDeleteInquiries(Array.from(selectedInquiries));
      toast.success(`${selectedInquiries.size} inquiry(ies) deleted successfully`, {
        id: 'delete',
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
      setSelectedInquiries(new Set());
      await loadData();
    } catch (error) {
      console.error('Error deleting inquiries:', error);
      toast.error('Failed to delete inquiries. Please try again.', {
        id: 'delete',
        icon: <AlertCircle className="h-5 w-5" />,
      });
    }
  };

  const handleDeleteChatbotLeads = async () => {
    if (selectedChatbotLeads.size === 0) {
      toast.error('Please select leads to delete');
      return;
    }

    if (!confirm(`Are you sure you want to delete ${selectedChatbotLeads.size} selected lead(s)? This action cannot be undone.`)) {
      return;
    }

    try {
      toast.loading(`Deleting ${selectedChatbotLeads.size} lead(s)...`, { id: 'delete' });
      await chatbotAPI.bulkDeleteLeads(Array.from(selectedChatbotLeads));
      toast.success(`${selectedChatbotLeads.size} lead(s) deleted successfully`, {
        id: 'delete',
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
      setSelectedChatbotLeads(new Set());
      await loadData();
    } catch (error) {
      console.error('Error deleting leads:', error);
      toast.error('Failed to delete leads. Please try again.', {
        id: 'delete',
        icon: <AlertCircle className="h-5 w-5" />,
      });
    }
  };

  const toggleSelectInquiry = (id: string) => {
    const newSelected = new Set(selectedInquiries);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedInquiries(newSelected);
  };

  const toggleSelectChatbotLead = (id: string) => {
    const newSelected = new Set(selectedChatbotLeads);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedChatbotLeads(newSelected);
  };

  const toggleSelectAllInquiries = () => {
    if (selectedInquiries.size === filteredInquiries.length) {
      setSelectedInquiries(new Set());
    } else {
      setSelectedInquiries(new Set(filteredInquiries.map(i => i.id)));
    }
  };

  const toggleSelectAllChatbotLeads = () => {
    if (selectedChatbotLeads.size === filteredChatbotLeads.length) {
      setSelectedChatbotLeads(new Set());
    } else {
      setSelectedChatbotLeads(new Set(filteredChatbotLeads.map(l => l.id)));
    }
  };

  // Filter & Sort Functions
  const filterAndSortData = (data: any[]) => {
    let filtered = [...data];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone?.includes(searchTerm) ||
        item.company?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(item => item.status === statusFilter);
    }

    // Date range filter
    if (dateRange.start) {
      filtered = filtered.filter(item => new Date(item.createdAt) >= new Date(dateRange.start));
    }
    if (dateRange.end) {
      filtered = filtered.filter(item => new Date(item.createdAt) <= new Date(dateRange.end));
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortField) {
        case 'date':
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case 'name':
          comparison = (a.name || '').localeCompare(b.name || '');
          break;
        case 'status':
          comparison = (a.status || '').localeCompare(b.status || '');
          break;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  };

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setDateRange({ start: '', end: '' });
    setSortField('date');
    setSortOrder('desc');
    toast.success('Filters cleared', {
      icon: <CheckCircle2 className="h-5 w-5" />,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-12 w-12 text-yellow-500 animate-spin mx-auto mb-4" />
          <p className="text-white">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const filteredInquiries = filterAndSortData(inquiries);
  const filteredChatbotLeads = filterAndSortData(chatbotLeads);

  return (
    <div className="min-h-screen bg-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-8 bg-gradient-to-r from-white/5 to-yellow-500/5 border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-white mb-2 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-yellow-500" />
                Inchtomilez Admin Dashboard
              </h1>
              <p className="text-gray-400">Manage leads, inquiries, and subscriptions with advanced analytics</p>
              {currentUser && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    <User className="h-3 w-3 text-yellow-500" />
                    <span className="text-xs text-gray-400">{currentUser.email}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={loadData}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-yellow-500 text-black hover:bg-yellow-400"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <div className="mb-6 bg-white/5 border border-white/10 rounded-xl p-6 animate-in slide-in-from-top">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Advanced Filters
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Name, email, phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black border-white/20 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                  className="w-full px-4 py-2 bg-black border border-white/20 rounded-lg text-white focus:border-yellow-500 focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              {/* Date From */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Date From</label>
                <Input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  className="bg-black border-white/20 text-white"
                />
              </div>

              {/* Date To */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Date To</label>
                <Input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  className="bg-black border-white/20 text-white"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/5"
              >
                Clear All Filters
              </Button>
              {(searchTerm || statusFilter !== 'all' || dateRange.start || dateRange.end) && (
                <Badge className="bg-yellow-500/20 text-yellow-500">
                  {filteredInquiries.length + filteredChatbotLeads.length} results
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex gap-2 md:gap-4 mb-8 border-b border-white/10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 px-4 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`pb-4 px-4 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'inquiries'
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            Inquiries ({stats?.inquiries?.total || 0})
          </button>
          <button
            onClick={() => setActiveTab('chatbot')}
            className={`pb-4 px-4 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'chatbot'
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            Chatbot ({stats?.chatbotLeads?.total || 0})
          </button>
          <button
            onClick={() => setActiveTab('newsletter')}
            className={`pb-4 px-4 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'newsletter'
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Mail className="h-4 w-4" />
            Newsletter ({stats?.newsletters?.total || 0})
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && stats && (
          <div>
            {/* Live Analytics Card */}
            {liveAnalytics && (
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-6 mb-6 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white flex items-center gap-2">
                    <Activity className="h-5 w-5 text-cyan-500" />
                    Live User Analytics
                  </h3>
                  <Badge className="bg-cyan-500/20 text-cyan-400 animate-pulse">Live</Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-4 w-4 text-cyan-500" />
                      <p className="text-gray-400 text-sm">Active Users</p>
                    </div>
                    <p className="text-white text-2xl">{liveAnalytics.activeUsers || 0}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="h-4 w-4 text-cyan-500" />
                      <p className="text-gray-400 text-sm">Page Views (1h)</p>
                    </div>
                    <p className="text-white text-2xl">{liveAnalytics.pageViewsLastHour || 0}</p>
                  </div>
                  
                  <div className="col-span-2">
                    <p className="text-gray-400 text-sm mb-2">Top Pages</p>
                    <div className="space-y-1">
                      {liveAnalytics.topPages?.slice(0, 3).map((page: any, idx: number) => (
                        <div key={idx} className="flex justify-between text-xs">
                          <span className="text-gray-300 truncate">{page.page}</span>
                          <span className="text-cyan-400">{page.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-cyan-500/20">
                  <p className="text-xs text-gray-500">Auto-refreshes every 30s</p>
                </div>
              </div>
            )}

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
              {/* Total Leads */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-yellow-500/20 rounded-lg">
                    <Users className="h-6 w-6 text-yellow-500" />
                  </div>
                  <Badge className="bg-yellow-500 text-black">Total</Badge>
                </div>
                <h3 className="text-white text-4xl mb-2">{stats.totalLeads}</h3>
                <p className="text-gray-400">Total Leads</p>
                <div className="mt-3 pt-3 border-t border-yellow-500/20">
                  <p className="text-xs text-gray-500">All time</p>
                </div>
              </div>

              {/* New Leads */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-blue-500" />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400">Urgent</Badge>
                </div>
                <h3 className="text-white text-4xl mb-2">{stats.totalNewLeads}</h3>
                <p className="text-gray-400">Awaiting Response</p>
                <div className="mt-3 pt-3 border-t border-blue-500/20">
                  <p className="text-xs text-gray-500">Requires action</p>
                </div>
              </div>

              {/* Newsletter Subscribers */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Mail className="h-6 w-6 text-green-500" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                </div>
                <h3 className="text-white text-4xl mb-2">{stats.newsletters?.active || 0}</h3>
                <p className="text-gray-400">Subscribers</p>
                <div className="mt-3 pt-3 border-t border-green-500/20">
                  <p className="text-xs text-gray-500">Newsletter list</p>
                </div>
              </div>

              {/* Today's Inquiries */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-500" />
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-400">Today</Badge>
                </div>
                <h3 className="text-white text-4xl mb-2">
                  {(stats.inquiries?.today || 0) + (stats.chatbotLeads?.today || 0)}
                </h3>
                <p className="text-gray-400">Today's Activity</p>
                <div className="mt-3 pt-3 border-t border-purple-500/20">
                  <p className="text-xs text-gray-500">Last 24 hours</p>
                </div>
              </div>
            </div>

            {/* Status Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Inquiry Status */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-yellow-500" />
                  Inquiry Status Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">New</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500"
                          style={{ width: `${(stats.inquiries?.new / stats.inquiries?.total * 100) || 0}%` }}
                        />
                      </div>
                      <span className="text-white w-8 text-right">{stats.inquiries?.new || 0}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Contacted</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-500"
                          style={{ width: `${(stats.inquiries?.contacted / stats.inquiries?.total * 100) || 0}%` }}
                        />
                      </div>
                      <span className="text-white w-8 text-right">{stats.inquiries?.contacted || 0}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Closed</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500"
                          style={{ width: `${(stats.inquiries?.closed / stats.inquiries?.total * 100) || 0}%` }}
                        />
                      </div>
                      <span className="text-white w-8 text-right">{stats.inquiries?.closed || 0}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chatbot Status */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-white mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  Chatbot Lead Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">New</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500"
                          style={{ width: `${(stats.chatbotLeads?.new / stats.chatbotLeads?.total * 100) || 0}%` }}
                        />
                      </div>
                      <span className="text-white w-8 text-right">{stats.chatbotLeads?.new || 0}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Contacted</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-500"
                          style={{ width: `${(stats.chatbotLeads?.contacted / stats.chatbotLeads?.total * 100) || 0}%` }}
                        />
                      </div>
                      <span className="text-white w-8 text-right">{stats.chatbotLeads?.contacted || 0}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Closed</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500"
                          style={{ width: `${(stats.chatbotLeads?.closed / stats.chatbotLeads?.total * 100) || 0}%` }}
                        />
                      </div>
                      <span className="text-white w-8 text-right">{stats.chatbotLeads?.closed || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <Download className="h-5 w-5 text-yellow-500" />
                Quick Actions & Exports
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  onClick={() => handleExport('inquiries')}
                  className="bg-yellow-500 text-black hover:bg-yellow-400 w-full justify-start"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export Inquiries
                </Button>
                <Button
                  onClick={() => handleExport('chatbot')}
                  className="bg-yellow-500 text-black hover:bg-yellow-400 w-full justify-start"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export Chatbot
                </Button>
                <Button
                  onClick={() => handleExport('newsletters')}
                  className="bg-yellow-500 text-black hover:bg-yellow-400 w-full justify-start"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export Subscribers
                </Button>
                <Button
                  onClick={loadData}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 w-full justify-start"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh All Data
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Inquiries Tab */}
        {activeTab === 'inquiries' && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-white mb-1">Contact Form Inquiries</h2>
                <p className="text-sm text-gray-400">
                  Showing {filteredInquiries.length} of {inquiries.length} inquiries
                  {selectedInquiries.size > 0 && (
                    <span className="text-yellow-500 ml-2">
                      • {selectedInquiries.size} selected
                    </span>
                  )}
                </p>
              </div>
              <div className="flex gap-2">
                {selectedInquiries.size > 0 && (
                  <Button
                    onClick={handleDeleteInquiries}
                    variant="outline"
                    size="sm"
                    className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete ({selectedInquiries.size})
                  </Button>
                )}
                <Button
                  onClick={() => toggleSort('date')}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Date {sortField === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
                <Button
                  onClick={() => handleExport('inquiries')}
                  className="bg-yellow-500 text-black hover:bg-yellow-400"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {/* Select All Checkbox */}
              {filteredInquiries.length > 0 && (
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <input
                    type="checkbox"
                    checked={selectedInquiries.size === filteredInquiries.length && filteredInquiries.length > 0}
                    onChange={toggleSelectAllInquiries}
                    className="w-4 h-4 rounded border-white/20 bg-black text-yellow-500 focus:ring-yellow-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <label className="text-gray-400 text-sm cursor-pointer" onClick={toggleSelectAllInquiries}>
                    Select All ({filteredInquiries.length})
                  </label>
                </div>
              )}
              
              {filteredInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className={`bg-white/5 border rounded-xl p-6 hover:border-white/20 transition-all group ${
                    selectedInquiries.has(inquiry.id) ? 'border-yellow-500/50 bg-yellow-500/5' : 'border-white/10'
                  }`}
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    <div className="flex gap-3 flex-1">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={selectedInquiries.has(inquiry.id)}
                        onChange={() => toggleSelectInquiry(inquiry.id)}
                        className="w-5 h-5 mt-1 rounded border-white/20 bg-black text-yellow-500 focus:ring-yellow-500 focus:ring-offset-0 cursor-pointer flex-shrink-0"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-yellow-500/10 rounded-lg">
                            <Users className="h-5 w-5 text-yellow-500" />
                          </div>
                        <div>
                          <h3 className="text-white mb-1 text-lg">{inquiry.name}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Mail className="h-4 w-4" />
                              {inquiry.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              {inquiry.phone}
                            </span>
                          </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        {inquiry.company && (
                          <div className="flex items-center gap-2 text-sm">
                            <Building className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-400">Company:</span>
                            <span className="text-white">{inquiry.company}</span>
                          </div>
                        )}
                        {inquiry.budget && (
                          <div className="flex items-center gap-2 text-sm">
                            <DollarSign className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-400">Budget:</span>
                            <span className="text-white">{inquiry.budget}</span>
                          </div>
                        )}
                      </div>
                    </div>
                      </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        className={`
                          ${inquiry.status === 'new' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : ''}
                          ${inquiry.status === 'contacted' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : ''}
                          ${inquiry.status === 'closed' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                        `}
                      >
                        {inquiry.status === 'new' && <AlertCircle className="mr-1 h-3 w-3" />}
                        {inquiry.status === 'closed' && <CheckCircle2 className="mr-1 h-3 w-3" />}
                        {inquiry.status}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setSelectedInquiry(selectedInquiry?.id === inquiry.id ? null : inquiry)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        {selectedInquiry?.id === inquiry.id ? 'Hide' : 'Details'}
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedInquiry?.id === inquiry.id && (
                    <div className="mt-4 pt-4 border-t border-white/10 animate-in slide-in-from-top">
                      <div className="mb-4">
                        <p className="text-sm text-gray-400 mb-2">Message:</p>
                        <p className="text-gray-300 bg-black/30 p-4 rounded-lg">{inquiry.message}</p>
                      </div>

                      {inquiry.services && inquiry.services.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-400 mb-2">Services Interested:</p>
                          <div className="flex flex-wrap gap-2">
                            {inquiry.services.map((service: string, idx: number) => (
                              <Badge key={idx} variant="outline" className="border-yellow-500/30 text-yellow-400">
                                <Tag className="mr-1 h-3 w-3" />
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {inquiry.status === 'new' && (
                      <Button
                        size="sm"
                        onClick={() => handleStatusUpdate(inquiry.id, 'contacted')}
                        className="bg-yellow-500 text-black hover:bg-yellow-400"
                      >
                        Mark as Contacted
                      </Button>
                    )}
                    {inquiry.status === 'contacted' && (
                      <Button
                        size="sm"
                        onClick={() => handleStatusUpdate(inquiry.id, 'closed')}
                        className="bg-green-500 text-black hover:bg-green-400"
                      >
                        Mark as Closed
                      </Button>
                    )}
                    {inquiry.status === 'closed' && (
                      <Button
                        size="sm"
                        onClick={() => handleStatusUpdate(inquiry.id, 'new')}
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/5"
                      >
                        Reopen
                      </Button>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 mt-4 flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    Submitted: {new Date(inquiry.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}

              {filteredInquiries.length === 0 && (
                <div className="text-center py-12 bg-white/5 border border-white/10 rounded-xl">
                  <MessageSquare className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">No contact inquiries found</p>
                  {(searchTerm || statusFilter !== 'all') && (
                    <Button
                      onClick={clearFilters}
                      variant="outline"
                      size="sm"
                      className="mt-4 border-white/20 text-white hover:bg-white/5"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Chatbot Leads Tab */}
        {activeTab === 'chatbot' && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-white mb-1">AI Chatbot Leads</h2>
                <p className="text-sm text-gray-400">
                  Showing {filteredChatbotLeads.length} of {chatbotLeads.length} leads
                  {selectedChatbotLeads.size > 0 && (
                    <span className="text-yellow-500 ml-2">
                      • {selectedChatbotLeads.size} selected
                    </span>
                  )}
                </p>
              </div>
              <div className="flex gap-2">
                {selectedChatbotLeads.size > 0 && (
                  <Button
                    onClick={handleDeleteChatbotLeads}
                    variant="outline"
                    size="sm"
                    className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete ({selectedChatbotLeads.size})
                  </Button>
                )}
                <Button
                  onClick={() => toggleSort('date')}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Date {sortField === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
                <Button
                  onClick={() => handleExport('chatbot')}
                  className="bg-yellow-500 text-black hover:bg-yellow-400"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {/* Select All Checkbox */}
              {filteredChatbotLeads.length > 0 && (
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <input
                    type="checkbox"
                    checked={selectedChatbotLeads.size === filteredChatbotLeads.length && filteredChatbotLeads.length > 0}
                    onChange={toggleSelectAllChatbotLeads}
                    className="w-4 h-4 rounded border-white/20 bg-black text-yellow-500 focus:ring-yellow-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <label className="text-gray-400 text-sm cursor-pointer" onClick={toggleSelectAllChatbotLeads}>
                    Select All ({filteredChatbotLeads.length})
                  </label>
                </div>
              )}
              
              {filteredChatbotLeads.map((lead) => (
                <div
                  key={lead.id}
                  className={`bg-white/5 border rounded-xl p-6 hover:border-white/20 transition-all ${
                    selectedChatbotLeads.has(lead.id) ? 'border-yellow-500/50 bg-yellow-500/5' : 'border-white/10'
                  }`}
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    <div className="flex gap-3 flex-1">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={selectedChatbotLeads.has(lead.id)}
                        onChange={() => toggleSelectChatbotLead(lead.id)}
                        className="w-5 h-5 mt-1 rounded border-white/20 bg-black text-yellow-500 focus:ring-yellow-500 focus:ring-offset-0 cursor-pointer flex-shrink-0"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Sparkles className="h-5 w-5 text-purple-500" />
                          </div>
                        <div>
                          <h3 className="text-white mb-1 text-lg">{lead.name}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Mail className="h-4 w-4" />
                              {lead.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              {lead.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                      </div>
                    
                    <Badge
                      className={`
                        h-fit
                        ${lead.status === 'new' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : ''}
                        ${lead.status === 'contacted' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : ''}
                        ${lead.status === 'closed' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                      `}
                    >
                      {lead.status === 'new' && <AlertCircle className="mr-1 h-3 w-3" />}
                      {lead.status === 'closed' && <CheckCircle2 className="mr-1 h-3 w-3" />}
                      {lead.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {lead.city && (
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <MapPin className="h-3 w-3 text-gray-500" />
                          <p className="text-xs text-gray-500">City</p>
                        </div>
                        <p className="text-white">{lead.city}</p>
                      </div>
                    )}
                    {lead.service && (
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <Tag className="h-3 w-3 text-gray-500" />
                          <p className="text-xs text-gray-500">Service</p>
                        </div>
                        <p className="text-white">{lead.service}</p>
                      </div>
                    )}
                    {lead.budget && (
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <DollarSign className="h-3 w-3 text-gray-500" />
                          <p className="text-xs text-gray-500">Budget</p>
                        </div>
                        <p className="text-white">{lead.budget}</p>
                      </div>
                    )}
                    {lead.timeline && (
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <p className="text-xs text-gray-500">Timeline</p>
                        </div>
                        <p className="text-white">{lead.timeline}</p>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    Captured: {new Date(lead.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}

              {filteredChatbotLeads.length === 0 && (
                <div className="text-center py-12 bg-white/5 border border-white/10 rounded-xl">
                  <Sparkles className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">No chatbot leads found</p>
                  {(searchTerm || statusFilter !== 'all') && (
                    <Button
                      onClick={clearFilters}
                      variant="outline"
                      size="sm"
                      className="mt-4 border-white/20 text-white hover:bg-white/5"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Newsletter Subscribers Tab */}
        {activeTab === 'newsletter' && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-white mb-1">Newsletter Subscribers</h2>
                <p className="text-sm text-gray-400">
                  {subscribers.length} total subscribers
                </p>
              </div>
              <Button
                onClick={() => handleExport('newsletters')}
                className="bg-yellow-500 text-black hover:bg-yellow-400"
              >
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-black border-b border-white/10">
                    <tr>
                      <th className="text-left p-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email
                        </div>
                      </th>
                      <th className="text-left p-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Subscribed Date
                        </div>
                      </th>
                      <th className="text-left p-4 text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((sub, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4 text-white">{sub.email}</td>
                        <td className="p-4 text-gray-400">
                          {new Date(sub.subscribedAt).toLocaleString()}
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            {sub.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {subscribers.length === 0 && (
                <div className="text-center py-12">
                  <Mail className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">No newsletter subscribers yet</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
