import {
  ShieldCheck,
  TriangleAlert,
  ShieldBan,
  Activity,
  Wifi,
  LockKeyhole,
  Radar,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import "./App.css";

const threatActivity = [
  { time: "08:00", threats: 12 },
  { time: "09:00", threats: 18 },
  { time: "10:00", threats: 14 },
  { time: "11:00", threats: 27 },
  { time: "12:00", threats: 21 },
  { time: "13:00", threats: 34 },
  { time: "14:00", threats: 25 },
  { time: "15:00", threats: 31 },
];

const threatTypes = [
  { name: "Phishing", value: 34 },
  { name: "Malware", value: 26 },
  { name: "Brute Force", value: 18 },
  { name: "DDoS", value: 13 },
  { name: "SQL Injection", value: 9 },
];

const COLORS = ["#5b8def", "#9b7bf5", "#ef6b73", "#f0a85a", "#56c7b2"];

const incidents = [
  {
    id: "INC-1048",
    type: "Brute Force",
    source: "192.168.21.14",
    severity: "High",
    time: "15:42",
    status: "Blocked",
  },
  {
    id: "INC-1047",
    type: "Phishing",
    source: "10.0.14.82",
    severity: "Medium",
    time: "15:18",
    status: "Investigating",
  },
  {
    id: "INC-1046",
    type: "Malware",
    source: "172.16.8.45",
    severity: "Critical",
    time: "14:56",
    status: "Blocked",
  },
  {
    id: "INC-1045",
    type: "DDoS",
    source: "203.0.113.26",
    severity: "High",
    time: "14:31",
    status: "Mitigated",
  },
];

function MetricCard({ icon: Icon, title, value, note, className = "" }) {
  return (
    <div className={`metric-card ${className}`}>
      <div className="metric-top">
        <div>
          <p>{title}</p>
          <h2>{value}</h2>
        </div>
        <div className="metric-icon">
          <Icon size={22} />
        </div>
      </div>
      <span>{note}</span>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <ShieldCheck size={27} />
          </div>
          <div>
            <h2>CyberShield</h2>
            <p>Research Monitor</p>
          </div>
        </div>

        <nav>
          <a className="active" href="#overview">
            <Activity size={18} />
            Overview
          </a>
          <a href="#threats">
            <TriangleAlert size={18} />
            Threat Analysis
          </a>
          <a href="#incidents">
            <Radar size={18} />
            Incidents
          </a>
          <a href="#systems">
            <Wifi size={18} />
            System Status
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="monitor-dot">
            <span></span>
            Live Monitoring
          </div>
          <p>Research Dashboard</p>
          <strong>Pari Agarwal</strong>
        </div>
      </aside>

      <main className="main">
        <header>
          <div>
            <p className="eyebrow">INDIVIDUAL RESEARCH PROJECT</p>
            <h1>Cybersecurity Threat Monitoring Dashboard</h1>
            <p className="subtitle">
              Real-time analysis of network threats, incidents and security
              performance.
            </p>
          </div>

          <div className="live-badge">
            <span></span>
            SYSTEM LIVE
          </div>
        </header>

        <section className="metrics" id="overview">
          <MetricCard
            icon={TriangleAlert}
            title="Total Threats"
            value="247"
            note="+18 detected today"
          />

          <MetricCard
            icon={ShieldBan}
            title="Critical Alerts"
            value="12"
            note="4 require attention"
            className="danger-card"
          />

          <MetricCard
            icon={ShieldCheck}
            title="Blocked Attacks"
            value="219"
            note="88.7% prevention rate"
          />

          <MetricCard
            icon={LockKeyhole}
            title="Security Score"
            value="92%"
            note="Network protection: Strong"
            className="score-card"
          />
        </section>

        <section className="grid-two" id="threats">
          <div className="panel chart-panel">
            <div className="panel-heading">
              <div>
                <h3>Threat Activity</h3>
                <p>Detected network threats over the last 8 hours</p>
              </div>
              <span className="small-pill">Today</span>
            </div>

            <div className="chart-area">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={threatActivity}>
                  <defs>
                    <linearGradient id="threatFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#5b8def"
                        stopOpacity={0.35}
                      />
                      <stop
                        offset="95%"
                        stopColor="#5b8def"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e8edf5"
                  />

                  <XAxis
                    dataKey="time"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#7b8798", fontSize: 12 }}
                  />

                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#7b8798", fontSize: 12 }}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="threats"
                    stroke="#5b8def"
                    strokeWidth={3}
                    fill="url(#threatFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel distribution-panel">
            <div className="panel-heading">
              <div>
                <h3>Threat Distribution</h3>
                <p>Classification by attack type</p>
              </div>
            </div>

            <div className="distribution-content">
              <div className="pie-wrap">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={threatTypes}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={55}
                      outerRadius={78}
                      paddingAngle={4}
                    >
                      {threatTypes.map((entry, index) => (
                        <Cell
                          key={entry.name}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="pie-center">
                  <strong>247</strong>
                  <span>Threats</span>
                </div>
              </div>

              <div className="legend">
                {threatTypes.map((item, index) => (
                  <div className="legend-row" key={item.name}>
                    <span
                      className="legend-color"
                      style={{ background: COLORS[index] }}
                    ></span>
                    <span>{item.name}</span>
                    <strong>{item.value}%</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel incidents-panel" id="incidents">
            <div className="panel-heading">
              <div>
                <h3>Recent Security Incidents</h3>
                <p>Latest detected and monitored events</p>
              </div>
              <span className="view-all">Live Feed</span>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Incident</th>
                    <th>Threat</th>
                    <th>Source IP</th>
                    <th>Severity</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {incidents.map((incident) => (
                    <tr key={incident.id}>
                      <td>{incident.id}</td>
                      <td>{incident.type}</td>
                      <td className="ip">{incident.source}</td>
                      <td>
                        <span
                          className={`severity ${incident.severity.toLowerCase()}`}
                        >
                          {incident.severity}
                        </span>
                      </td>
                      <td>{incident.time}</td>
                      <td>
                        <span className="status">{incident.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel systems-panel" id="systems">
            <div className="panel-heading">
              <div>
                <h3>System Status</h3>
                <p>Security infrastructure health</p>
              </div>
            </div>

            <div className="system-list">
              <div className="system-item">
                <div className="system-icon">
                  <ShieldCheck size={19} />
                </div>
                <div>
                  <strong>Firewall</strong>
                  <p>Network perimeter</p>
                </div>
                <span className="online">Active</span>
              </div>

              <div className="system-item">
                <div className="system-icon">
                  <Radar size={19} />
                </div>
                <div>
                  <strong>IDS Engine</strong>
                  <p>Threat detection</p>
                </div>
                <span className="online">Running</span>
              </div>

              <div className="system-item">
                <div className="system-icon">
                  <Wifi size={19} />
                </div>
                <div>
                  <strong>Network</strong>
                  <p>Traffic monitoring</p>
                </div>
                <span className="online">Secure</span>
              </div>

              <div className="system-item">
                <div className="system-icon">
                  <Activity size={19} />
                </div>
                <div>
                  <strong>Monitoring</strong>
                  <p>Real-time analytics</p>
                </div>
                <span className="online">Live</span>
              </div>
            </div>
          </div>
        </section>

        <footer>
          Cybersecurity Research Project Dashboard • Developed by Pari Agarwal
        </footer>
      </main>
    </div>
  );
}

export default App;