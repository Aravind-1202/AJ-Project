import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Cloud, 
  Sparkles, 
  Copy, 
  Check, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const TechStackShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = [
    { id: 'frontend', name: 'Frontend & UI', icon: Code2 },
    { id: 'backend', name: 'Backend & APIs', icon: Terminal },
    { id: 'ai', name: 'AI & Machine Learning', icon: Cpu },
    { id: 'cloud', name: 'Cloud & Edge DevOps', icon: Cloud },
    { id: 'data', name: 'Databases & Cache', icon: Database },
  ];

  const stackData = {
    frontend: {
      title: 'Modern, Accessible, 60fps Interface Architectures',
      subtitle: 'Engineered for sub-second interactions, zero CLS shifts, and flawless responsive ergonomics.',
      tools: [
        { name: 'React 19', tag: 'UI Library', desc: 'Concurrent rendering, Server Actions & Transitions', highlight: 'v19.2' },
        { name: 'Tailwind CSS v4', tag: 'Styling', desc: 'Lightning-fast Oxide engine with zero runtime overhead', highlight: 'CSS Engine' },
        { name: 'Vite 8 / Next.js', tag: 'Tooling', desc: 'Instant HMR, tree-shaken bundles & SSR/SSG edge pipelines', highlight: 'Build System' },
        { name: 'Framer Motion', tag: 'Animation', desc: 'Hardware-accelerated gesture dynamics and fluid layouts', highlight: 'Physics Engine' },
        { name: 'TypeScript', tag: 'Type Safety', desc: 'End-to-end type safety between client and server schemas', highlight: 'Strict Mode' },
        { name: 'PWA / Service Workers', tag: 'Mobile / Offline', desc: 'Workbox caching, instant offline loads, home-screen installs', highlight: 'Native Feel' },
      ],
      codeSnippet: `// ⚡ Ultra-fast React 19 Client Component with Optimistic UI
import { useOptimistic, useTransition } from 'react';
import { streamTelemetryUpdate } from '@/api/telemetry';

export function TelemetryCluster({ initialStatus }) {
  const [isPending, startTransition] = useTransition();
  const [optimisticStatus, setOptimistic] = useOptimistic(
    initialStatus,
    (state, update) => ({ ...state, ...update, isSyncing: true })
  );

  const handleRebalance = async () => {
    startTransition(async () => {
      setOptimistic({ state: 'rebalancing', load: 0.12 });
      await streamTelemetryUpdate({ clusterId: 'edge-us-east' });
    });
  };

  return (
    <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-slate-500">CLUSTER: edge-us-east</span>
        <span className="text-emerald-500 font-bold text-xs">P99: 1.8ms</span>
      </div>
    </div>
  );
}`,
      metrics: [
        { label: 'Avg Initial Load', value: '< 0.35s', color: 'text-emerald-500' },
        { label: 'Google Lighthouse', value: '99/100', color: 'text-violet-500' },
        { label: 'UI Frame Stability', value: '60 FPS', color: 'text-cyan-500' },
      ],
    },
    backend: {
      title: 'High-Concurrency Distributed Microservices',
      subtitle: 'Resilient event-driven backends designed for enterprise throughput and zero data loss.',
      tools: [
        { name: 'Java Spring Boot 3', tag: 'Enterprise Core', desc: 'Robust REST/GraphQL microservices, reactive JPA & Virtual Threads', highlight: 'Virtual Threads' },
        { name: 'Node.js / Express', tag: 'Realtime Gateway', desc: 'Asynchronous event loops with WebSocket streaming', highlight: 'Async I/O' },
        { name: 'Go / Rust Edge', tag: 'Microservices', desc: 'Sub-millisecond computational microservices at edge nodes', highlight: '<2ms Latency' },
        { name: 'Apache Kafka / RabbitMQ', tag: 'Event Bus', desc: 'Distributed event pub/sub streams with reliable backpressure', highlight: 'Zero Loss' },
        { name: 'gRPC & Protocol Buffers', tag: 'Inter-service RPC', desc: 'Binary serialized, multiplexed HTTP/2 communication', highlight: 'Fast Binary' },
        { name: 'OpenAPI 3.1 & JWT', tag: 'Security & Docs', desc: 'Auto-generating schema validation, OAuth2 & zero-trust auth', highlight: 'Zero Trust' },
      ],
      codeSnippet: `// ☕ Spring Boot 3.4 Reactive Telemetry Controller with Virtual Threads
@RestController
@RequestMapping("/api/v1/enquiries")
@CrossOrigin(origins = "*")
public class EnquiryController {

    private final EnquiryService enquiryService;

    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Enquiry>> submitEnquiry(@Valid @RequestBody EnquiryDTO dto) {
        // Handled concurrently on lightweight Virtual Threads (Project Loom)
        Enquiry saved = enquiryService.processAndNotify(dto);
        return ResponseEntity.ok(ApiResponse.success("Enquiry received", saved));
    }
}`,
      metrics: [
        { label: 'Peak Request TPS', value: '120k+', color: 'text-cyan-500' },
        { label: 'P99 Service Latency', value: '4.2ms', color: 'text-emerald-500' },
        { label: 'Zero-Downtime Deploys', value: '100%', color: 'text-violet-500' },
      ],
    },
    ai: {
      title: 'Practical AI, Vector Search & Autonomous Agents',
      subtitle: 'Integrate generative intelligence, RAG pipelines, and automated agentic decision engines into software.',
      tools: [
        { name: 'OpenAI / Claude APIs', tag: 'LLM Orchestration', desc: 'Context-window optimized streaming completions & reasoning', highlight: 'Structured Output' },
        { name: 'Pinecone / pgvector', tag: 'Vector Databases', desc: 'High-dimensional semantic embeddings for fast RAG lookups', highlight: 'HNSW Indexing' },
        { name: 'LangChain & LlamaIndex', tag: 'Agentic Frameworks', desc: 'Multi-step autonomous tool use, memory & deterministic fallback', highlight: 'Agent Workflows' },
        { name: 'Whisper & Vision Models', tag: 'Multimodal', desc: 'Real-time audio transcription and visual doc OCR analysis', highlight: 'Multimodal' },
        { name: 'Deterministic Guardrails', tag: 'Safety & Audit', desc: 'Schema validation, PII redaction, and prompt injection defense', highlight: 'Enterprise Safe' },
        { name: 'Fine-Tuning Pipelines', tag: 'Domain Specific', desc: 'Domain adapted models for legal, financial, and code automation', highlight: 'Custom Models' },
      ],
      codeSnippet: `// 🧠 Multi-Step Agent Tool-Calling with Structured JSON Output
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function routeClientIntake(prompt: string) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'Extract requirements into deterministic schema.' },
      { role: 'user', content: prompt }
    ],
    response_format: { type: 'json_object' }
  });

  return JSON.parse(response.choices[0].message.content);
}`,
      metrics: [
        { label: 'Semantic Query Speed', value: '18ms', color: 'text-violet-500' },
        { label: 'Hallucination Defense', value: '99.4%', color: 'text-emerald-500' },
        { label: 'Token Efficiency Savings', value: '42%', color: 'text-cyan-500' },
      ],
    },
    cloud: {
      title: 'Resilient Cloud & Global Edge Delivery',
      subtitle: 'Terraform-driven Infrastructure as Code deployed to multi-region serverless and container clusters.',
      tools: [
        { name: 'AWS & Cloudflare', tag: 'Edge Infrastructure', desc: 'Global CDN, Lambda@Edge, ECS Fargate & Cloudflare Workers', highlight: 'Multi-Region' },
        { name: 'Docker & Kubernetes', tag: 'Containerization', desc: 'Reproducible builds with auto-scaling horizontal pod managers', highlight: 'Auto-Scaling' },
        { name: 'GitHub Actions CI/CD', tag: 'Automation', desc: 'Automated test suites, security scans, and immutable blue/green deploys', highlight: 'Automated CI/CD' },
        { name: 'Terraform / OpenTofu', tag: 'IaC', desc: 'Version-controlled infrastructure with automated drift detection', highlight: 'Declarative' },
        { name: 'Datadog & Prometheus', tag: 'Observability', desc: 'Real-time APM telemetry, distributed tracing and alert triggers', highlight: 'Full Tracing' },
        { name: 'TLS 1.3 & Cloud Armor', tag: 'DDoS Defense', desc: 'WAF rules, automated SSL rotation & layer 7 DDoS mitigation', highlight: 'WAF Defense' },
      ],
      codeSnippet: `# ☁️ Multi-Region Infrastructure as Code (Terraform)
resource "aws_ecs_service" "nexatech_api_cluster" {
  name            = "production-api"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 12

  deployment_controller {
    type = "CODE_DEPLOY" # Zero-Downtime Blue/Green
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.api.arn
    container_name   = "api"
    container_port   = 8080
  }
}`,
      metrics: [
        { label: 'Global Availability SLA', value: '99.99%', color: 'text-emerald-500' },
        { label: 'Edge Cold Starts', value: '< 15ms', color: 'text-cyan-500' },
        { label: 'Automated Deploy Time', value: '2.4 min', color: 'text-violet-500' },
      ],
    },
    data: {
      title: 'ACID-Compliant Relational & High-Speed Cache Stores',
      subtitle: 'Zero data loss persistence paired with in-memory caching for lightning throughput.',
      tools: [
        { name: 'PostgreSQL 16', tag: 'Relational DB', desc: 'JSONB documents, connection pooling & multi-master replication', highlight: 'Rock Solid' },
        { name: 'Redis / Dragonfly', tag: 'In-Memory Cache', desc: 'Sub-millisecond session state, distributed locking and rate limits', highlight: '< 1ms Cache' },
        { name: 'Supabase / Neon', tag: 'Serverless Postgres', desc: 'Instant branching databases for pull requests with point-in-time recovery', highlight: 'Branching DB' },
        { name: 'Elasticsearch / Meilisearch', tag: 'Full-Text Search', desc: 'Typo-tolerant instant search indexing with custom relevancy tuning', highlight: 'Typo Tolerant' },
        { name: 'Prisma & Hibernate', tag: 'Type-Safe ORM', desc: 'Type-safe SQL query generation with zero runtime query overhead', highlight: 'Safe Schema' },
        { name: 'S3 & Cloudflare R2', tag: 'Object Storage', desc: 'Global distributed storage with zero egress fees and presigned URLs', highlight: 'Zero Egress' },
      ],
      codeSnippet: `// ⚡ Multi-Tier Cache with Redis & PostgreSQL
export async function getCachedTelemetry(clusterId: string) {
  const cacheKey = \`telemetry:\${clusterId}\`;
  
  // 1. Try L1 In-Memory Redis Cache (0.8ms)
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  // 2. Query Primary PostgreSQL DB with indexing
  const freshData = await prisma.nodeTelemetry.findMany({
    where: { clusterId, timestamp: { gte: new Date(Date.now() - 3600000) } },
    orderBy: { timestamp: 'desc' }
  });

  // 3. Populate Redis cache with 60s TTL
  await redis.setex(cacheKey, 60, JSON.stringify(freshData));
  return freshData;
}`,
      metrics: [
        { label: 'Cache Hit Rate', value: '96.8%', color: 'text-emerald-500' },
        { label: 'Redis Read Time', value: '0.8ms', color: 'text-cyan-500' },
        { label: 'Data Recovery RPO', value: '0 Sec', color: 'text-violet-500' },
      ],
    },
  };

  const current = stackData[activeCategory];

  const copyCode = () => {
    navigator.clipboard.writeText(current.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR ENGINEERING MATRIX"
          title="Battle-tested technology"
          highlightText="built for modern scale."
          subtitle="We pick the right architectural tools for maximum longevity, security, performance, and developer velocity."
          align="center"
          className="mb-14"
        />

        {/* Category Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20 scale-[1.02]'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Tech Grid (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600 block mb-1">
                  Ecosystem Overview
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  {current.title}
                </h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {current.subtitle}
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {current.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-violet-500/40 hover:bg-white transition-all shadow-sm group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-slate-900 font-display group-hover:text-violet-600 transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                        {tool.highlight}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900 text-white shadow-xl">
              {current.metrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <div className={`text-lg sm:text-xl font-black font-display ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-slate-400 mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Snippet Preview (Span 5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-3xl bg-slate-950 border border-slate-800 p-5 sm:p-6 text-slate-300 font-mono text-xs flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-[11px] text-slate-400">architecture/snippet.ts</span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition-colors cursor-pointer px-2 py-1 rounded bg-slate-800"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code display */}
              <pre className="overflow-x-auto text-[11px] leading-relaxed text-slate-300 py-2 scrollbar-thin flex-1 font-mono">
                <code>{current.codeSnippet}</code>
              </pre>

              {/* Bottom footer badge */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1 text-cyan-400 font-bold">
                  <Sparkles className="w-3 h-3" /> Production Pattern
                </span>
                <span>Type-Safe &amp; Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
