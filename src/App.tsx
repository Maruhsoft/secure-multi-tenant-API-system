import React from 'react';
import { FileText, Shield, Database, Globe, BarChart } from 'lucide-react';

function ArchitectureComponent({ title, icon: Icon, children }: { 
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-indigo-600 mr-3" />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-600 space-y-2">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Secure Multi-tenant API Architecture</h1>
          <p className="text-xl text-indigo-100">Enterprise-grade security, scalability, and compliance</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArchitectureComponent title="Authentication & Authorization" icon={Shield}>
            <ul className="list-disc list-inside">
              <li>OAuth 2.0 with JWT tokens</li>
              <li>Multi-Factor Authentication</li>
              <li>Role-Based Access Control</li>
              <li>Tenant isolation</li>
              <li>Secure email verification</li>
            </ul>
          </ArchitectureComponent>

          <ArchitectureComponent title="Data Infrastructure" icon={Database}>
            <ul className="list-disc list-inside">
              <li>Multi-format data ingestion</li>
              <li>Rate-limited REST API</li>
              <li>WebSocket streaming</li>
              <li>End-to-end encryption</li>
              <li>Comprehensive audit logs</li>
            </ul>
          </ArchitectureComponent>

          <ArchitectureComponent title="API Gateway & Resources" icon={Globe}>
            <ul className="list-disc list-inside">
              <li>OpenAPI 3.0 specifications</li>
              <li>GraphQL interface</li>
              <li>Webhook system</li>
              <li>API versioning</li>
              <li>SDK generation</li>
            </ul>
          </ArchitectureComponent>

          <ArchitectureComponent title="Security Framework" icon={Shield}>
            <ul className="list-disc list-inside">
              <li>API key management</li>
              <li>IP whitelisting</li>
              <li>Security scanning</li>
              <li>Compliance (GDPR, HIPAA)</li>
              <li>DDoS protection</li>
            </ul>
          </ArchitectureComponent>

          <ArchitectureComponent title="Monitoring Infrastructure" icon={BarChart}>
            <ul className="list-disc list-inside">
              <li>ELK Stack integration</li>
              <li>Real-time metrics</li>
              <li>Health checks</li>
              <li>Usage analytics</li>
              <li>Performance monitoring</li>
            </ul>
          </ArchitectureComponent>

          <ArchitectureComponent title="Documentation" icon={FileText}>
            <ul className="list-disc list-inside">
              <li>Architecture diagrams</li>
              <li>API documentation</li>
              <li>Security guidelines</li>
              <li>Deployment strategy</li>
              <li>Maintenance procedures</li>
            </ul>
          </ArchitectureComponent>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">System Architecture Overview</h2>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt="System Architecture Visualization"
            className="w-full rounded-lg mb-6"
          />
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 mt-2 mr-2"></span>
                <span>Horizontally scalable architecture with containerized microservices</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 mt-2 mr-2"></span>
                <span>Multi-layer security with defense in depth approach</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 mt-2 mr-2"></span>
                <span>Real-time data processing with event-driven architecture</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 mt-2 mr-2"></span>
                <span>Comprehensive monitoring and alerting system</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400">
            Designed with security and scalability in mind
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;