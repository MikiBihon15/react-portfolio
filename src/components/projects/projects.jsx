import React, { useState } from 'react';

// Project data based on your Java projects
const projectsData = [
  {
    id: 'payroll',
    title: 'Payroll Computation System',
    tagline: 'Coprog1 Finals Project',
    shortDesc: 'Automated salary and payroll processing system calculating deductions, bonuses, and net pay.',
    fullDesc: 'A desktop application built to streamline employee salary calculations. It handles base pay rates, tax deductions, overtime computation, and generates itemized digital pay slips.',
    tech: ['Java', 'Swing', 'OOP'],
    images: ['/projects/payroll.png'] // Place your image in public/projects/payroll.png
  },
  {
    id: 'library',
    title: 'Library Management System',
    tagline: 'DataStruct Finals Project',
    shortDesc: 'Data structure-driven application for book tracking, borrowing, and inventory management.',
    fullDesc: 'Built using core data structures to efficiently search, add, remove, and manage library inventory alongside student borrowing records and due dates.',
    tech: ['Java', 'Data Structures', 'Algorithms'],
    images: ['/projects/library.png'] // Place your image in public/projects/library.png
  },
  {
    id: 'parkpal',
    title: 'ParkPalApp',
    tagline: 'OOP Finals Project',
    shortDesc: 'Smart parking space management and slot reservation system concept.',
    fullDesc: 'An object-oriented solution for monitoring parking slot availability in real-time, calculating duration-based fees, and managing entry/exit logs.',
    tech: ['Java', 'OOP Architecture', 'GUI'],
    images: ['/projects/parkpal.png'] // Place your image in public/projects/parkpal.png
  }
];

export default function Projects() {
  return (
    <section style={{ padding: '20px' }}>
      <h2>Projects</h2>
      <p>Some of my projects</p>
    </section>
  );
}