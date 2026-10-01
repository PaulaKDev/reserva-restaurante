import { createBrowserRouter } from 'react-router-dom';

import CustomerHome from '../pages/customer/CustomerHome';
import BookingPage from '../pages/customer/BookingPage';

import StaffToday from '../pages/staff/StaffToday';

import ManagerDashboard from '../pages/manager/ManagerDashboard';

export const router = createBrowserRouter([
  {
    path: '/customer',
    element: <CustomerHome />,
  },
  {
    path: '/customer/reserve',
    element: <BookingPage />,
  },
  {
    path: '/staff',
    element: <StaffToday />,
  },
  {
    path: '/manager',
    element: <ManagerDashboard />,
  },
]);