import axios from 'axios';

// Create axios instance with base URL from environment variables
const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token if available
apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Main API function with the requested syntax
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint - API endpoint
 * @param {object} [data] - Request body for POST/PUT requests
 * @param {object} [params] - Query parameters for GET requests
 * @returns {Promise} Axios response data
 */
const api = async (method, endpoint, data = null, params = null) => {
  try {
    const response = await apiInstance({
      method: method.toLowerCase(),
      url: endpoint,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    // Enhanced error handling
    if (error.response) {
      // Server responded with error status
      const errorMessage = error.response.data?.message || 
                          error.response.data?.error ||
                          'Request failed';
      throw new Error(errorMessage);
    } else if (error.request) {
      // No response received
      throw new Error('No response from server. Please check your connection.');
    } else {
      // Request setup error
      throw new Error(`Request error: ${error.message}`);
    }
  }
};

api.get = (endpoint, params) => api('GET', endpoint, null, params);
api.post = (endpoint, data) => api('POST', endpoint, data);
api.put = (endpoint, data) => api('PUT', endpoint, data);
api.delete = (endpoint) => api('DELETE', endpoint);

export default api;