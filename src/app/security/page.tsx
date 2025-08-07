'use client';
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaServer, FaEye } from 'react-icons/fa';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2a3a] via-[#0a2233] to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300">Security & Compliance</h1>
        <p className="text-xl md:text-2xl text-cyan-100 mb-8">Enterprise-grade security that protects your data and ensures compliance with industry standards.</p>
      </section>

      {/* Security Features */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaShieldAlt className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">SOC 2 Type II Compliant</h3>
            <p className="text-gray-300">Our systems undergo rigorous security audits and maintain SOC 2 Type II compliance for enterprise-grade security.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaLock className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">End-to-End Encryption</h3>
            <p className="text-gray-300">All data is encrypted in transit and at rest using industry-standard AES-256 encryption protocols.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaUserShield className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Role-Based Access Control</h3>
            <p className="text-gray-300">Granular permissions and role-based access controls ensure users only see what they need to see.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaDatabase className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">Data Residency</h3>
            <p className="text-gray-300">Your data stays in Canada, hosted on secure Canadian servers with strict data sovereignty controls.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaServer className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">99.9% Uptime SLA</h3>
            <p className="text-gray-300">Redundant infrastructure and monitoring ensure your systems are always available when you need them.</p>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
            <FaEye className="text-5xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-4">24/7 Security Monitoring</h3>
            <p className="text-gray-300">Continuous monitoring and threat detection protect against security incidents around the clock.</p>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Compliance & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Industry Standards</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>SOC 2 Type II Compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>GDPR Compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>PIPEDA Compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>ISO 27001 Framework</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Security Practices</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Regular Security Audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Penetration Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Vulnerability Assessments</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Employee Security Training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Protection</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Data Encryption</h3>
              <p className="text-gray-300">All sensitive data is encrypted using AES-256 encryption both in transit and at rest. We use industry-standard TLS 1.3 for secure communications.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Data Backup & Recovery</h3>
              <p className="text-gray-300">Automated daily backups with point-in-time recovery capabilities. Data is stored in multiple secure locations with 99.99% availability.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Access Controls</h3>
              <p className="text-gray-300">Multi-factor authentication, single sign-on (SSO) integration, and granular role-based permissions ensure secure access to your data.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Audit Logging</h3>
              <p className="text-gray-300">Comprehensive audit trails track all system access and data modifications for compliance and security monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8">Join hundreds of businesses that trust Auralix AI with their data security.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/trial"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200"
          >
            Start Free Trial
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-200"
          >
            Contact Security Team
          </a>
        </div>
      </section>
    </div>
  );
}