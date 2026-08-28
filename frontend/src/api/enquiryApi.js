import axios from 'axios';

// Base Axios instance
const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const enquiryApi = {
  /**
   * Submit new enquiry
   */
  async createEnquiry(enquiryData) {
    try {
      const response = await apiClient.post('/enquiries', enquiryData);
      return { success: true, data: response.data.data, message: response.data.message || "You're all set. We'll be in touch soon." };
    } catch (err) {
      console.error('API backend error:', err);
      const errorMsg = err.response?.data?.message || err.message || 'Failed to submit enquiry';
      return { success: false, message: errorMsg };
    }
  },

  /**
   * Fetch all enquiries (with optional status filter)
   */
  async getEnquiries(status = 'ALL') {
    try {
      const url = status && status !== 'ALL' ? `/enquiries?status=${status}` : '/enquiries';
      const response = await apiClient.get(url);
      return response.data || [];
    } catch (err) {
      console.error('API backend not reachable:', err);
      throw new Error('Failed to fetch enquiries from the database.');
    }
  },

  /**
   * Fetch single enquiry by ID
   */
  async getEnquiryById(id) {
    try {
      const response = await apiClient.get(`/enquiries/${id}`);
      return response.data;
    } catch (err) {
      console.error('API backend error:', err);
      return null;
    }
  },

  /**
   * Update Enquiry Status
   */
  async updateStatus(id, newStatus) {
    try {
      const response = await apiClient.put(`/enquiries/${id}/status`, { status: newStatus });
      return response.data;
    } catch (err) {
      console.error('Backend update failed:', err);
      return { success: false, message: 'Failed to update status in the database.' };
    }
  },

  /**
   * Delete Enquiry
   */
  async deleteEnquiry(id) {
    try {
      await apiClient.delete(`/enquiries/${id}`);
      return { success: true, message: 'Enquiry deleted successfully' };
    } catch (err) {
      console.error('Backend delete failed:', err);
      return { success: false, message: 'Failed to delete enquiry from database.' };
    }
  },

  /**
   * Get stats
   */
  async getStats() {
    try {
      const response = await apiClient.get('/enquiries/stats');
      return response.data || { total: 0, new: 0, contacted: 0, closed: 0 };
    } catch (err) {
      console.error('Backend stats failed:', err);
      return { total: 0, new: 0, contacted: 0, closed: 0 };
    }
  },
};

