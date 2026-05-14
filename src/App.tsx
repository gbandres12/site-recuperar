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
            <a href="https://wa.me/5592991700202" className="btn btn-gold" style={{ padding: '0.5rem 1.25rem', fontSize: '.8rem' }}>
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
              <a href="https://wa.me/5592991700202" className="btn btn-gold" style={{ justifyContent: 'center' }}>
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
                <a href="https://wa.me/5592991700202" className="btn btn-gold btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
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
    { tag: 'Recuperação Tributária', title: 'Empresa em Manaus', value: 'R$ 200.000', desc: 'Valores recuperados via análise tributária especializada para empresa do Simples Nacional em Manaus.' },
    { tag: 'Negociação de Dívidas', title: 'Filial Santarém', value: 'R$ 1,7 Milhão', desc: 'Dívidas negociadas com sucesso para empresa com filial em Santarém, com redução de encargos e parcelamento viável.' },
  ];
  return (
    <section id="cases">
      <div className="container">
        <div className="cases-header">
          <div>
            <h2>Empresas que já recuperaram valores</h2>
            <p style={{ marginTop: '.5rem' }}>Resultados reais. Inteligência tributária avançada.</p>
          </div>
          <a href="https://wa.me/5592991700202" className="btn btn-outline">VER MAIS CASES</a>
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
      <a href="https://wa.me/5592991700202" className="btn btn-gold btn-lg">
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
          <p>+55 (92) 99170-0202</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Recuperar — Solução Empresarial. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

/* ─── WhatsApp Float ─── */
const WhatsAppFloat = () => (
  <motion.a
    href="https://wa.me/5592991700202"
    target="_blank"
    rel="noopener noreferrer"
    className="wa-float"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Falar no WhatsApp"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span className="wa-label">Falar no WhatsApp</span>
  </motion.a>
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
      <WhatsAppFloat />
    </>
  );
}
