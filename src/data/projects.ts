export interface ProjectItem {
  id: string;
  title: string;
  category: 'Security & SOC' | 'Infrastructure' | 'Web Development';
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'simrs-hardening-soc',
    title: 'Hospital Infrastructure Hardening & Real-Time SIEM/IDS Deployment',
    category: 'Security & SOC',
    period: '2025 - Present',
    summary:
      'Arsitektur pertahanan berlapis dan pemantauan ancaman 24/7 untuk melindungi Sistem Informasi Manajemen Rumah Sakit (SIMRS) dan data rekam medis pasien.',
    highlights: [
      'Implementasi Wazuh SIEM dan Suricata IDS/IPS untuk deteksi anomali jaringan dan brute-force secara real-time.',
      'Segmentasi jaringan VLAN untuk memisahkan server database kritis, workstation medis, dan jaringan publik.',
      'Automated backup & disaster recovery database serta observability resource server menggunakan Grafana.',
    ],
    stack: ['Wazuh', 'Suricata', 'VMware', 'Docker', 'Grafana', 'Linux Hardening'],
  },
  {
    id: 'iot-ddos-detection',
    title: 'IoT Gateway DDoS Attack Detection System (LightGBM & Logistic Regression)',
    category: 'Security & SOC',
    period: '2024 - 2026',
    summary:
      'Sistem deteksi serangan DDoS pada gateway jaringan berbasis Machine Learning untuk mengklasifikasikan trafik berbahaya dengan latensi rendah.',
    highlights: [
      'Evaluasi komparatif performa deteksi antara algoritma LightGBM dan Logistic Regression pada dataset trafik jaringan.',
      'Analisis fitur paket jaringan untuk membedakan trafik normal dan serangan volumetrik.',
    ],
    stack: ['Python', 'LightGBM', 'Scikit-Learn', 'Network Security', 'Wireshark'],
  },
  {
    id: 'honeypot-csirt',
    title: 'Enterprise Honeypot & Threat Intelligence Sensor',
    category: 'Security & SOC',
    period: '2022 - 2024',
    summary:
      'Deployment sensor honeypot di lingkungan CSIRT UMM untuk menjebak, mencatat TTP (Tactics, Techniques, and Procedures) penyerang, dan mengumpulkan IOC.',
    highlights: [
      'Simulasi layanan rentan (SSH, HTTP, SMB) untuk memantau pola eksploitasi otomatis dan botnet.',
      'Ekstraksi log serangan menjadi aturan blokir proaktif pada firewall dan Snort IDS.',
    ],
    stack: ['Cowrie', 'Snort', 'Linux', 'ELK Stack', 'Digital Forensics'],
  },
  {
    id: 'kaliber-platform',
    title: 'LSO Kaliber Internal Web & Cyber Security Learning Portal',
    category: 'Web Development',
    period: '2022 - 2024',
    summary:
      'Platform manajemen anggota, repositori modul edukasi keamanan siber, dan portal internal untuk LSO Kaliber Universitas Muhammadiyah Malang.',
    highlights: [
      'Membangun sistem manajemen konten modul pembelajaran security dan tracking progres anggota.',
      'Menerapkan prinsip Secure SDLC untuk mencegah kerentanan OWASP Top 10 (XSS, SQLi, CSRF).',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL', 'OWASP Secure Coding'],
  },
];