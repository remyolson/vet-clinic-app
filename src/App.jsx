import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { PatientProvider } from './context/PatientContext';
import { SchedulingProvider } from './context/SchedulingContext';

import PatientCheckinScreen from './screens/PatientCheckinScreen';
import ServicesScreen from './screens/ServicesScreen';
import CreateNewClientScreen from './screens/CreateNewClientScreen';
import InvoiceScreen from './screens/InvoiceScreen';
import NoteScreen from './screens/NoteScreen';
import SchedulingScreen from './screens/SchedulingScreen';

import './styles/PatientForms.css';
import './styles/WindowsClassic.css';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: 'File',
      subItems: ['Open', 'Close', 'Exit'],
    },
    {
      label: 'Edit',
      subItems: ['Undo', 'Redo', 'Preferences'],
    },
    {
      label: 'Activities',
      subItems: ['Activity A', 'Activity B', 'Activity C'],
    },
    {
      label: 'Lists',
      subItems: ['List 1', 'List 2', 'List 3'],
    },
    {
      label: 'Controls',
      subItems: ['Control 1', 'Control 2', 'Control 3'],
    },
    {
      label: 'Inventory',
      subItems: ['Stock Items', 'Reorder', 'Vendors'],
    },
    {
      label: 'Tools',
      subItems: ['Tool A', 'Tool B', 'Tool C'],
    },
    {
      label: 'Reports',
      subItems: ['Daily Report', 'Monthly Report', 'Yearly Report'],
    },
    {
      label: 'Web Links',
      subItems: ['Link A', 'Link B', 'Link C'],
    },
    {
      label: 'Window',
      subItems: ['Cascade', 'Tile', 'Close All'],
    },
    {
      label: 'Help',
      subItems: ['Help Contents', 'About', 'Check for Updates'],
    },
  ];

  const iconData = [
    {
      label: 'Check-In/Out',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/4315/4315445.png',
      hoverText: 'Check patients in or out',
      path: '/checkin',
    },
    {
      label: 'Scheduler',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/2278/2278049.png',
      hoverText: 'View and schedule appointments',
      path: '/scheduler',
    },
    {
      label: 'Notes',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/3075/3075908.png',
      hoverText: 'Create or read notes',
      path: '/notes',
    },
    {
      label: 'Services',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048877.png',
      hoverText: 'Order lab tests or vaccines',
      path: '/services',
    },
    {
      label: 'Invoices',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/2150/2150150.png',
      hoverText: 'Handle invoices & payments',
      path: '/invoice',
    },
  ];

  return (
    <PatientProvider>
      <SchedulingProvider>
        <div
          className="window"
          style={{
            margin: '0',
            padding: '0',
            width: '100%',
            maxWidth: 'none',
            height: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">Cornerstone</div>
            <div className="title-bar-controls">
              <button className="title-bar-button" aria-label="Minimize"></button>
              <button className="title-bar-button" aria-label="Maximize"></button>
              <button className="title-bar-button" aria-label="Close"></button>
            </div>
          </div>

          <div
            className="window-body"
            style={{
              padding: '0 16px 16px 16px',
              height: 'calc(100vh - 30px)',
              boxSizing: 'border-box',
              overflow: 'auto',
              backgroundColor: '#c0c0c0'
            }}
          >
            {/* Main menu bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#c0c0c0',
                padding: '4px',
                marginBottom: '4px',
              }}
            >
              <ul
                style={{
                  display: 'flex',
                  listStyle: 'none',
                  gap: '10px',
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                }}
              >
                {menuItems.map((menu, idx) => (
                  <li
                    key={idx}
                    style={{
                      position: 'relative',
                      padding: '0 6px',
                      cursor: 'pointer',
                      color: 'black',
                    }}
                    onMouseEnter={() => setActiveMenu(idx)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {menu.label}
                    {activeMenu === idx && (
                      <ul
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          backgroundColor: '#c0c0c0',
                          border: '2px solid #404040',
                          listStyle: 'none',
                          padding: '4px 0',
                          margin: 0,
                          minWidth: '120px',
                          zIndex: 10,
                        }}
                      >
                        {menu.subItems.map((sub, sIdx) => (
                          <li
                            key={sIdx}
                            style={{
                              padding: '4px 8px',
                              color: 'black',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                            }}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Icon bar */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              {iconData.map((iconItem, idx) => {
                const isActive = location.pathname === iconItem.path;
                return (
                  <div
                    key={idx}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setHoveredIcon(idx)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <button
                      className="icon-button"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: isActive ? '#000080' : '#ffffff',
                        border: '2px solid',
                        borderColor: isActive
                          ? '#404040 #dfdfdf #dfdfdf #404040'
                          : '#dfdfdf #404040 #404040 #dfdfdf',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '4px',
                        color: isActive ? '#ffffff' : '#000000',
                      }}
                      onClick={() => navigate(iconItem.path)}
                    >
                      <img
                        src={iconItem.iconUrl}
                        alt={iconItem.label}
                        width="24"
                        height="24"
                        style={{
                          filter: isActive && iconItem.label === 'Scheduler' ? 'brightness(0) invert(1)' : 'none'
                        }}
                      />
                      {hoveredIcon === idx && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '45px',
                            left: '0',
                            padding: '4px 8px',
                            backgroundColor: '#fffed2',
                            border: '1px solid #404040',
                            zIndex: 9999,
                            fontSize: '12px',
                            whiteSpace: 'nowrap',
                            pointerEvents: 'none',
                            boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                            color: '#000000',
                            minWidth: 'max-content',
                            textAlign: 'left'
                          }}
                        >
                          {iconItem.hoverText}
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Routes */}
            <Routes>
              <Route path="/" element={<PatientCheckinScreen />} />
              <Route path="/checkin" element={<PatientCheckinScreen />} />
              <Route path="/services" element={<ServicesScreen />} />
              <Route path="/invoice" element={<InvoiceScreen />} />
              <Route path="/create-client" element={<CreateNewClientScreen />} />
              <Route path="/notes" element={<NoteScreen />} />
              <Route path="/scheduler" element={<SchedulingScreen />} />
            </Routes>
          </div>
        </div>
      </SchedulingProvider>
    </PatientProvider>
  );
}

export default App;