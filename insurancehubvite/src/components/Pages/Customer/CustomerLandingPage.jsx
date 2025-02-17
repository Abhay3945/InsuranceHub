// import React from 'react';

// export default function CustomerLandingPage() {
//   return (
//     <div className="min-vh-100 bg-light py-5">
//       <div className="container">
//         <h1 className="text-center">Welcome, Customer!</h1>
//         <div className="row mt-5">
//           <div className="col-md-4">
//             <div className="card shadow">
//               <div className="card-body text-center">
//                 <h4>Your Policies</h4>
//                 <p>View and manage your insurance policies</p>
//                 <button className="btn btn-primary">View Policies</button>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card shadow">
//               <div className="card-body text-center">
//                 <h4>Claims</h4>
//                 <p>Track your insurance claims</p>
//                 <button className="btn btn-primary">View Claims</button>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card shadow">
//               <div className="card-body text-center">
//                 <h4>Contact Support</h4>
//                 <p>Reach out for any assistance</p>
//                 <button className="btn btn-primary">Contact Support</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// export default function CustomerLandingPage() {
//   const [policies, setPolicies] = useState([]);

//   useEffect(() => {
//     // Fetch policies from API
//     fetch("http://localhost:5000/api/policies") // Replace with your API endpoint
//       .then((response) => response.json())
//       .then((data) => setPolicies(data))
//       .catch((error) => console.error("Error fetching policies:", error));
//   }, []);

//   return (
//     <div className="min-vh-100 bg-light py-5">
//       <div className="container">
//         <h1 className="text-center">Welcome, Customer!</h1>

//         <div className="row mt-5">
//           <div className="col-md-4">
//             <div className="card shadow">
//               <div className="card-body text-center">
//                 <h4>Your Policies</h4>
//                 <p>View and manage your insurance policies</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card shadow">
//               <div className="card-body text-center">
//                 <h4>Claims</h4>
//                 <p>Track your insurance claims</p>
//                 <button className="btn btn-primary">View Claims</button>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card shadow">
//               <div className="card-body text-center">
//                 <h4>Contact Support</h4>
//                 <p>Reach out for any assistance</p>
//                 <button className="btn btn-primary">Contact Support</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Display Policies */}
//         <div className="row mt-4">
//           {policies.length > 0 ? (
//             policies.map((policy) => (
//               <div className="col-md-4" key={policy.policyID}>
//                 <div className="card shadow">
//                   <div className="card-body">
//                     <h5 className="card-title">{policy.p_name}</h5>
//                     <p><strong>Premium:</strong> {policy.premium}</p>
//                     <p><strong>Terms:</strong> {policy.terms}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center">
//               <p>No policies available.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { Shield } from "lucide-react";

// export default function CustomerLandingPage() {
//   const [policies, setPolicies] = useState([]);
//   const [animatingPolicy, setAnimatingPolicy] = useState(null);

//   useEffect(() => {
//     // Fetch policies from backend API
//     fetch("http://localhost:5000/api/policies") // Update with correct API URL
//       .then((response) => response.json())
//       .then((data) => setPolicies(data))
//       .catch((error) => console.error("Error fetching policies:", error));
//   }, []);

//   const handleBuyNow = (policyID) => {
//     setAnimatingPolicy(policyID);
//     setTimeout(() => setAnimatingPolicy(null), 1000); // Reset after animation
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container">
//         <h1 className="text-center text-3xl font-bold text-gray-800">
//           Welcome, Customer!
//         </h1>

//         {/* Display Policies */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
//           {policies.length > 0 ? (
//             policies.map((policy) => (
//               <div
//                 key={policy.policyID}
//                 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {policy.p_name}
//                     </h3>
//                     <div
//                       className={`bg-blue-50 p-2 rounded-full transition-transform duration-300 ${
//                         animatingPolicy === policy.policyID ? "scale-150" : ""
//                       }`}
//                     >
//                       <Shield
//                         className={`w-6 h-6 transition-colors duration-300 ${
//                           animatingPolicy === policy.policyID
//                             ? "text-blue-600"
//                             : "text-blue-500"
//                         }`}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-600">Premium</span>
//                       <span className="text-lg font-medium text-gray-900">
//                         {policy.premium}
//                       </span>
//                     </div>

//                     <div className="border-t border-gray-100 pt-3">
//                       <p className="text-sm text-gray-600 font-medium mb-2">
//                         Terms
//                       </p>
//                       <p className="text-gray-700 leading-relaxed">
//                         {policy.terms}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-6 grid grid-cols-2 gap-3">
//                     <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2.5 px-4 rounded-lg transition duration-200">
//                       View Details
//                     </button>
//                     <button
//                       onClick={() => handleBuyNow(policy.policyID)}
//                       className={`relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 ${
//                         animatingPolicy === policy.policyID ? "bg-green-600" : ""
//                       }`}
//                     >
//                       Buy Now
//                       {animatingPolicy === policy.policyID && (
//                         <div className="absolute inset-0 flex items-center justify-center bg-green-600">
//                           <Shield className="w-5 h-5 text-white animate-pulse" />
//                         </div>
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full text-center py-8">
//               <p className="text-gray-500">No policies found</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import

export default function CustomerLandingPage() {
  const [policies, setPolicies] = useState([]);
  const [animatingPolicy, setAnimatingPolicy] = useState(null);

  // Fetch policies on component mount
  useEffect(() => {
    fetch("http://localhost:5000/api/policies") // Replace with actual API URL
      .then((response) => response.json())
      .then((data) => setPolicies(data))
      .catch((error) => console.error("Error fetching policies:", error));
  }, []);

  // Handle Buy Now button click
  const handleBuyNow = (policyID) => {
    setAnimatingPolicy(policyID);
    setTimeout(() => setAnimatingPolicy(null), 1000); // Reset animation after 1 second
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <h1 className="text-center text-primary mb-5">Welcome, Customer!</h1>

        {/* Display Policies */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {policies.length > 0 ? (
            policies.map((policy) => (
              <div key={policy.policyID} className="col">
                <div
                  className={`card h-100 shadow-sm border-0 overflow-hidden ${
                    animatingPolicy === policy.policyID ? "shadow-lg" : ""
                  }`}
                  style={{ transition: "all 0.3s ease" }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className="card-title mb-0 text-dark">
                        {policy.p_name}
                      </h3>
                      <div
                        className={`bg-info p-2 rounded-circle ${
                          animatingPolicy === policy.policyID
                            ? "animate__animated animate__pulse"
                            : ""
                        }`}
                      >
                        <Shield
                          className={`text-white ${
                            animatingPolicy === policy.policyID
                              ? "text-success"
                              : ""
                          }`}
                          size={24}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted">Premium</span>
                        <span className="text-dark fw-medium">
                          {policy.premium}
                        </span>
                      </div>

                      <div className="border-top pt-3">
                        <p className="text-muted mb-2">Terms</p>
                        <p className="text-dark">{policy.terms}</p>
                      </div>
                    </div>

                    <div className="d-grid gap-3">
                      <button className="btn btn-outline-secondary w-100">
                        View Details
                      </button>
                     
                      <button
                        onClick={() => handleBuyNow(policy.policyID)}
                        className={`btn w-100 ${
                          animatingPolicy === policy.policyID
                            ? "btn-success"
                            : "btn-primary"
                        }`}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">No policies found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}