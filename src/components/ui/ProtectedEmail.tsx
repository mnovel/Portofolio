"use client";

import { useEffect, useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

interface ProtectedEmailProps {
  user?: string;
  domain?: string;
  showCopy?: boolean;
  className?: string;
}

export default function ProtectedEmail({
  user = "mnovel78",
  domain = "gmail.com",
  showCopy = false,
  className = "",
}: ProtectedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  const handleCopy = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback jika clipboard diblokir
    }
  };

  if (!email) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-mono text-cyber-muted ${className}`}
      >
        <Mail className="h-4 w-4 text-cyber-cyan" />
        <span>
          {user} [at] {domain}
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-1.5 transition hover:text-cyber-cyan"
      >
        <Mail className="h-4 w-4 shrink-0 text-cyber-cyan" />
        <span>{email}</span>
      </a>

      {showCopy && (
        <button
          type="button"
          onClick={handleCopy}
          title="Salin Email"
          className="rounded border border-white/10 bg-white/[0.04] p-1 text-cyber-muted transition hover:border-cyber-green hover:text-cyber-green"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-cyber-green" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      )}
    </span>
  );
}
