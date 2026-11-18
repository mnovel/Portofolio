export interface ExperienceItem {
  id: string;
  role: string;
  subtitle?: string;
  organization: string;
  period: string;
  borderColor?: 'cyan' | 'green' | 'amber';
  groups?: {
    title: string;
    color: 'cyan' | 'green';
    items: string[];
  }[];
  bullets?: string[];
}

export interface SkillMetric {
  name: string;
  level: number;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate?: string;
  validUntil?: string;
  credentialId?: string;
  verifyUrl?: string;
  file: string;
  type: 'pdf' | 'img';
  category: 'professional' | 'training';
  iconType:
    | 'award'
    | 'network'
    | 'shield'
    | 'database'
    | 'code'
    | 'cloud'
    | 'search'
    | 'server'
    | 'terminal';
}