// DoctorList2.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function DoctorList2({ hospitalName }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (hospitalName) {
      // Fetch the list of doctors for the specified hospital
      fetch(`http://localhost:5000/api/doctors/${hospitalName}`)
        .then((response) => response.json())
        .then((data) => setDoctors(data));
    }
  }, [hospitalName]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        List of Doctors for {hospitalName}
      </h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index} className="mb-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p>Speciality: {doctor.speciality}</p>
              <p>Time: {doctor.time}</p>
              <p>Days Available: {doctor.daysAvailable}</p>
              <p>Hospital: {doctor.hospitalName}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList2;
