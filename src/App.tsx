import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ChevronRight, ShieldCheck, TrendingUp,
  Users, BarChart3, FileText, Search, CheckCircle2, Menu, X
} from 'lucide-react';
import { FloatingPaths } from './components/FloatingPaths';

/* ─── Navbar ─── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <div className="nav-logo">
            <img src="/logo.jpg" alt="Recuperar Logo" />
          </div>

          <div className="nav-links">
            <a href="#simulador">Simulador</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#cases">Cases</a>
            <a href="https://wa.me/5511999999999" className="btn btn-gold" style={{ padding: '0.5rem 1.25rem', fontSize: '.8rem' }}>
              Falar com Especialista
            </a>
          </div>

          <button className="nav-mobile-btn" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div className="mobile-menu"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <a href="#simulador" onClick={() => setOpen(false)}>Simulador</a>
              <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
              <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
              <a href="#cases" onClick={() => setOpen(false)}>Cases</a>
              <a href="https://wa.me/5511999999999" className="btn btn-gold" style={{ justifyContent: 'center' }}>
                Falar com Especialista
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

/* ─── Hero ─── */
const Hero = () => (
  <section className="hero">
    <div className="hero-bg">
      <FloatingPaths />
    </div>

    <div className="container">
      <motion.div className="hero-content"
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: 'easeOut' }}>
        <div className="hero-badge">
          <ShieldCheck size={13} /> Recuperação Tributária Especializada
        </div>

        <h1>
          Você pode estar pagando{' '}
          <span className="gold-text">imposto a mais</span>{' '}
          sem perceber.
        </h1>

        <p>
          Empresas do Simples Nacional podem recuperar valores pagos indevidamente nos últimos 5 anos.
          A Recuperar transforma impostos em capital de volta para sua empresa.
        </p>

        <div className="hero-btns">
          <a href="#simulador" className="btn btn-gold btn-lg">
            ANÁLISE GRATUITA <ArrowRight size={17} />
          </a>
          <a href="#simulador" className="btn btn-outline btn-lg">
            SIMULAR RECUPERAÇÃO
          </a>
        </div>
      </motion.div>
    </div>

    {/* Floating card */}
    <motion.div className="hero-float"
      animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="card card-gold hero-float-card">
        <TrendingUp size={40} style={{ color: 'var(--gold)' }} />
        <div className="value gold-text">+R$ 90k</div>
        <div className="label">Recuperados para clientes no último mês</div>
      </div>
    </motion.div>
  </section>
);

/* ─── Ticker ─── */
const TICKER_ITEMS = ['Simples Nacional', 'PIS / COFINS', 'INSS / Teto', 'Revisão Fiscal', 'Planejamento Tributário', 'Recuperação Tributária', 'Restituição Previdenciária'];

const Ticker = () => (
  <div className="ticker">
    <div className="ticker-track">
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
        <span key={i} className="ticker-item">
          {t} <span className="ticker-sep">◆</span>
        </span>
      ))}
    </div>
  </div>
);

/* ─── Simulator ─── */
const Simulator = () => {
  const [step, setStep] = useState(1);
  const [segment, setSegment] = useState('');
  const [revenue, setRevenue] = useState('');

  const segments = ['Oficina / Autopeças', 'Mercado', 'Farmácia', 'Pet Shop', 'Restaurante', 'Loja de Roupas', 'Outro'];
  const revenues = ['Até R$ 30 mil', 'R$ 30 mil a R$ 100 mil', 'R$ 100 mil a R$ 300 mil', 'Acima de R$ 300 mil'];
  const years = ['Menos de 1 ano', '1 a 3 anos', '3 a 5 anos', 'Mais de 5 anos'];

  const fade = { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 } };

  return (
    <section id="simulador" className="simulator-wrap">
      <div className="container">
        <div className="sim-header">
          <h2>Descubra o quanto sua empresa pode recuperar</h2>
          <p style={{ marginTop: '.5rem' }}>Simulação gratuita — leva menos de 1 minuto.</p>
        </div>

        <div className="sim-steps">
          {[1,2,3,4].map(n => (
            <div key={n} className={`sim-step-dot ${step >= n ? 'active' : ''}`} />
          ))}
        </div>

        <div className="card sim-card">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" {...fade} transition={{ duration: .3 }}>
                <h3>Qual o segmento da sua empresa?</h3>
                <div className="sim-options sim-opt-grid">
                  {segments.map(s => (
                    <button key={s} className="sim-opt" onClick={() => { setSegment(s); setStep(2); }}>{s}</button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" {...fade} transition={{ duration: .3 }}>
                <h3>Qual o faturamento médio mensal?</h3>
                <div className="sim-options">
                  {revenues.map(r => (
                    <button key={r} className="sim-opt" onClick={() => { setRevenue(r); setStep(3); }}>{r}</button>
                  ))}
                </div>
                <button className="sim-back" onClick={() => setStep(1)}>← Voltar</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" {...fade} transition={{ duration: .3 }}>
                <h3>Há quantos anos sua empresa está ativa?</h3>
                <div className="sim-options">
                  {years.map(y => (
                    <button key={y} className="sim-opt" onClick={() => setStep(4)}>{y}</button>
                  ))}
                </div>
                <button className="sim-back" onClick={() => setStep(2)}>← Voltar</button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" {...fade} transition={{ duration: .3 }} className="sim-result">
                <div className="sim-result-icon">
                  <CheckCircle2 size={36} style={{ color: '#4ade80' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '.75rem' }}>
                  Sua empresa pode ter valores a recuperar!
                </h3>
                <p style={{ marginBottom: '2rem' }}>
                  Empresas do segmento <strong style={{ color: 'var(--gold-light)' }}>{segment}</strong> com faturamento{' '}
                  <strong style={{ color: 'var(--gold-light)' }}>{revenue}</strong> já recuperaram valores significativos com a Recuperar.
                </p>
                <a href="https://wa.me/5511999999999" className="btn btn-gold btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  FALAR COM ESPECIALISTA AGORA <ChevronRight size={18} />
                </a>
                <button className="sim-back" style={{ marginTop: '1rem', display: 'block' }} onClick={() => setStep(1)}>
                  Reiniciar Simulação
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/* ─── About ─── */
const About = () => (
  <section id="sobre" className="about-wrap">
    <div className="container">
      <div className="about-grid">
        <div className="about-img-wrap">
          <div className="card about-img">
            <img
              src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80&w=800"
              alt="Equipe Recuperar"
            />
          </div>
          <div className="card card-gold about-badge">
            <div className="num gold-text">5+</div>
            <div className="desc">Anos em<br />Inteligência Fiscal</div>
          </div>
        </div>

        <div>
          <h2 style={{ marginBottom: '1rem' }}>
            Inteligência tributária com visão <span className="gold-text">estratégica.</span>
          </h2>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
            A Recuperar une expertise jurídica e contábil para identificar oportunidades tributárias que muitas
            empresas ignoram. Atuamos com foco em segurança jurídica e resultados concretos.
          </p>
          <p style={{ fontSize: '1rem' }}>
            Tudo com análise individual, atuação técnica e total confidencialidade.
          </p>

          <div className="about-list">
            {['Recuperação Tributária', 'Revisão Fiscal', 'Restituição Previdenciária',
              'Planejamento Tributário', 'Assessoria Especializada', 'Análise Individual'].map(item => (
              <div key={item} className="about-item">
                <div className="about-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Cases ─── */
const Cases = () => {
  const data = [
    { tag: 'Simples Nacional', title: 'Loja de Roupas', value: 'R$ 90.000', desc: 'Restituídos via revisão tributária e análise de créditos pagos indevidamente.' },
    { tag: 'PIS/COFINS', title: 'Oficina + Autopeças', value: 'R$ 40.000', desc: 'Recuperados após revisão fiscal e correção de enquadramentos tributários.' },
    { tag: 'Monofásicos', title: 'Segmentos Diversos', value: 'Milhares R$', desc: 'Negócios deixando dinheiro parado por erro na separação de produtos monofásicos.' },
  ];
  return (
    <section id="cases">
      <div className="container">
        <div className="cases-header">
          <div>
            <h2>Empresas que já recuperaram valores</h2>
            <p style={{ marginTop: '.5rem' }}>Resultados reais. Inteligência tributária avançada.</p>
          </div>
          <a href="https://wa.me/5511999999999" className="btn btn-outline">VER MAIS CASES</a>
        </div>

        <div className="cases-grid">
          {data.map((c, i) => (
            <motion.div key={i} className="card case-card" whileHover={{ scale: 1.025 }} transition={{ duration: .22 }}>
              <div className="case-tag">{c.tag}</div>
              <div className="case-title">{c.title}</div>
              <div className="case-value gold-text">{c.value}</div>
              <p className="case-desc">{c.desc}</p>
              <div className="case-footer">CASO DE SUCESSO <CheckCircle2 size={13} /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Services ─── */
const Services = () => {
  const list = [
    { title: 'PIS/COFINS Monofásico', desc: 'Recupere impostos pagos indevidamente sobre produtos específicos no Simples Nacional.', icon: <TrendingUp size={28} /> },
    { title: 'INSS acima do Teto', desc: 'Restituição para profissionais com múltiplos vínculos que contribuíram além do limite.', icon: <Users size={28} /> },
    { title: 'Isenção para PCD', desc: 'Assessoria especializada para IPVA e IPTU com foco em desburocratização.', icon: <ShieldCheck size={28} /> },
    { title: 'Revisão Tributária', desc: 'Mapeamento completo de inconsistências fiscais e oportunidades de crédito.', icon: <Search size={28} /> },
    { title: 'Planejamento Estratégico', desc: 'Estruturação tributária inteligente para reduzir custos legais da operação.', icon: <BarChart3 size={28} /> },
    { title: 'Diagnóstico Fiscal', desc: 'Análise preventiva para identificar riscos antes que gerem prejuízo.', icon: <FileText size={28} /> },
  ];
  return (
    <section id="servicos" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="text-center">
          <h2>Soluções Estratégicas</h2>
          <p style={{ marginTop: '.5rem' }}>Para empresas e profissionais que querem o que é seu por direito.</p>
        </div>
        <div className="services-grid">
          {list.map((s, i) => (
            <motion.div key={i} className="card service-card" whileHover={{ y: -6 }} transition={{ duration: .22 }}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <p className="service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Pain Section ─── */
const Pain = () => (
  <section className="pain-wrap">
    <div className="container">
      <div className="card pain-card">
        <div className="pain-glow" />
        <h2>
          O problema não é o imposto.{' '}
          <span className="gold-text">É pagar o que você não deveria.</span>
        </h2>
        <p>
          Muitas empresas continuam pagando valores indevidos por anos porque nunca fizeram uma análise
          tributária especializada. Enquanto isso, o dinheiro que poderia fortalecer o caixa continua parado no governo.
        </p>
        <div className="pain-checks">
          {['Análise individual e confidencial', 'Suporte jurídico e contábil integrado', 'Atendimento empresarial especializado'].map(txt => (
            <div key={txt} className="pain-check">
              <CheckCircle2 size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} />
              {txt}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── CTA ─── */
const CTA = () => (
  <section className="cta-wrap">
    <div className="cta-glow" />
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2>Sua empresa pode estar deixando <span className="gold-text">dinheiro na mesa.</span></h2>
      <p>Solicite agora uma análise de viabilidade gratuita com a equipe da Recuperar.</p>
      <a href="https://wa.me/5511999999999" className="btn btn-gold btn-lg">
        FAZER ANÁLISE GRATUITA <ArrowRight size={18} />
      </a>
    </div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <img src="/logo.jpg" alt="Recuperar" />
          </div>
          <p className="footer-desc">
            Gestão de Ativos e Recuperação Tributária. Inteligência estratégica unindo expertise jurídica e contábil.
          </p>
        </div>
        <div className="footer-col">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#simulador">Simulador</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#cases">Cases</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contato</h4>
          <p>atendimento@recuperar.com.br</p>
          <p>+55 (11) 99999-9999</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Recuperar — Solução Empresarial. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

/* ─── App ─── */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Simulator />
      <About />
      <Cases />
      <Services />
      <Pain />
      <CTA />
      <Footer />
    </>
  );
}
