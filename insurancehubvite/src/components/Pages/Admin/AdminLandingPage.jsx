// import React from 'react';
// import { Sidebar } from '../../Sidebar';
// import {
//   Users,
//   FileText,
//   TrendingUp,
//   AlertCircle,
//   DollarSign,
//   CheckCircle
// } from 'lucide-react';

// const stats = [
//   {
//     icon: Users,
//     label: 'Total Customers',
//     value: '2,543',
//     change: '+12.5%',
//     positive: true
//   },
//   {
//     icon: FileText,
//     label: 'Active Policies',
//     value: '1,789',
//     change: '+8.2%',
//     positive: true
//   },
//   {
//     icon: DollarSign,
//     label: 'Revenue',
//     value: '$125,430',
//     change: '+15.3%',
//     positive: true
//   },
//   {
//     icon: AlertCircle,
//     label: 'Pending Claims',
//     value: '23',
//     change: '-5.1%',
//     positive: true
//   }
// ];

// const recentPolicies = [
//   { id: 1, customer: 'John Doe', type: 'Life Insurance', status: 'Active', amount: '$250,000' },
//   { id: 2, customer: 'Jane Smith', type: 'Health Insurance', status: 'Pending', amount: '$1,200' },
//   { id: 3, customer: 'Mike Johnson', type: 'Auto Insurance', status: 'Active', amount: '$5,000' },
//   { id: 4, customer: 'Sarah Wilson', type: 'Home Insurance', status: 'Under Review', amount: '$350,000' },
// ];

// export default function AdminLandingPage() {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar />
      
//       <main className="flex-1 overflow-y-auto">
//         <div className="p-8">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
//             <div className="flex items-center space-x-4">
//               <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
//                 Export Report
//               </button>
//               <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                 New Policy
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="p-2 bg-blue-50 rounded-lg">
//                       <Icon className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <span className={`text-sm font-medium ${
//                       stat.positive ? 'text-green-600' : 'text-red-600'
//                     }`}>
//                       {stat.change}
//                     </span>
//                   </div>
//                   <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
//                   <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="bg-white rounded-lg shadow-sm">
//             <div className="p-6 border-b border-gray-200">
//               <h2 className="text-lg font-semibold text-gray-900">Recent Policies</h2>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Customer
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Type
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Amount
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {recentPolicies.map((policy) => (
//                     <tr key={policy.id}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">{policy.customer}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-500">{policy.type}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{policy.amount}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           policy.status === 'Active'
//                             ? 'bg-green-100 text-green-800'
//                             : policy.status === 'Pending'
//                             ? 'bg-yellow-100 text-yellow-800'
//                             : 'bg-gray-100 text-gray-800'
//                         }`}>
//                           {policy.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <button className="text-blue-600 hover:text-blue-900">View Details</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import React from 'react';
import { Sidebar } from '../../Sidebar';
import { Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';
import { Users, FileText, TrendingUp, AlertCircle, DollarSign } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Total Customers', value: '2,543', change: '+12.5%', positive: true },
  { icon: FileText, label: 'Active Policies', value: '1,789', change: '+8.2%', positive: true },
  { icon: DollarSign, label: 'Revenue', value: '$125,430', change: '+15.3%', positive: true },
  { icon: AlertCircle, label: 'Pending Claims', value: '23', change: '-5.1%', positive: false }
];

const recentPolicies = [
  { id: 1, customer: 'John Doe', type: 'Life Insurance', status: 'Active', amount: '$250,000' },
  { id: 2, customer: 'Jane Smith', type: 'Health Insurance', status: 'Pending', amount: '$1,200' },
  { id: 3, customer: 'Mike Johnson', type: 'Auto Insurance', status: 'Active', amount: '$5,000' },
  { id: 4, customer: 'Sarah Wilson', type: 'Home Insurance', status: 'Under Review', amount: '$350,000' },
];

export default function AdminLandingPage() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f4f6f8' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="h4">Dashboard Overview</Typography>
          <div>
            <Button variant="outlined" style={{ marginRight: '10px' }}>Export Report</Button>
            <Button variant="contained" color="primary">New Policy</Button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Icon size={32} color={stat.positive ? 'green' : 'red'} />
                  <Typography variant="h6">{stat.label}</Typography>
                  <Typography variant="h5">{stat.value}</Typography>
                  <Typography style={{ color: stat.positive ? 'green' : 'red' }}>{stat.change}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Recent Policies</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Customer</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentPolicies.map((policy) => (
                    <TableRow key={policy.id}>
                      <TableCell>{policy.customer}</TableCell>
                      <TableCell>{policy.type}</TableCell>
                      <TableCell>{policy.amount}</TableCell>
                      <TableCell>
                        <span style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: policy.status === 'Active' ? 'green' : policy.status === 'Pending' ? 'yellow' : 'gray', color: '#fff' }}>
                          {policy.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="text" color="primary">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
