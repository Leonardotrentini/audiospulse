
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Session, IntentType, UserState } from './types';
import { ICONS } from './constants';

// --- DATA: Memory Pulse Full Content with real GitHub URLs ---
const GITHUB_BASE = "https://raw.githubusercontent.com/Leonardotrentini/audiospulse/main/audios/";

const SESSIONS: Session[] = [
  {
    id: 'm1',
    title: 'Bienvenida e Instrucciones',
    intent: 'Educativas',
    category: 'Módulo',
    moduleName: 'MÓDULO 1',
    duration: '4 min',
    imageUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop',
    isCore: true,
    audioUrl: `${GITHUB_BASE}M%C3%93DULO%201%20%E2%80%93%20BIENVENIDA%20E%20INSTRUCCIONES.mp3`,
    isPremium: false,
    order: 1,
    intro: {
      why: 'Sentar las bases de tu entrenamiento auditivo.',
      notice: ['Sensación de calma inicial', 'Claridad sobre el proceso'],
      how: 'Escucha en un lugar tranquilo, preferiblemente con audífonos.'
    }
  },
  {
    id: 'm2',
    title: '¿QUÉ ES MEMORY PULSE?',
    intent: 'Educativas',
    category: 'Módulo',
    moduleName: 'MÓDULO 2',
    duration: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop',
    isCore: true,
    audioUrl: `${GITHUB_BASE}M%C3%93DULO%202%20%E2%80%93%20%C2%BFQU%C3%89%20ES%20MEMORY%20PULSE%20(2).mp3`,
    isPremium: false,
    order: 2,
    intro: {
      why: 'Entender la ciencia de las ondas gamma y la organización neuronal.',
      notice: ['Mayor confianza en la herramienta', 'Comprensión del estímulo'],
      how: 'Escuchar es suficiente para iniciar el proceso.'
    }
  },
  {
    id: 'm3',
    title: 'Experiencia Guiada',
    intent: 'Guiadas',
    category: 'Módulo',
    moduleName: 'MÓDULO 3',
    duration: '12 min',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    isCore: true,
    audioUrl: `${GITHUB_BASE}M%C3%93DULO%203%20%E2%80%93%20EXPERIENCIA%20GUIADA%20MEMORY%20PULSE.MP3`,
    isPremium: false,
    order: 3,
    intro: {
      why: 'Sincronizar tu atención con el estímulo auditivo profundo.',
      notice: ['Mente despejada', 'Reducción de la neblina mental'],
      how: 'Busca una posición cómoda y cierra los ojos si lo deseas.'
    }
  },
  {
    id: 'm_especial',
    title: 'Pulso de 8 Segundos',
    intent: 'Rápidas',
    category: 'Módulo',
    moduleName: 'MÓDULO ESPECIAL',
    duration: '8 seg',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop',
    isCore: true,
    audioUrl: `${GITHUB_BASE}M%C3%93DULO%20ESPECIAL%20%E2%80%93%20EL%20PULSO%20AUDITIVO%20DE%208%20SEGUNDOS%20.MP3`,
    isPremium: false,
    order: 4,
    intro: {
      why: 'Interrumpir el ruido mental de forma instantánea.',
      notice: ['Retorno inmediato al presente', 'Alerta suave'],
      how: 'Úsalo como un reset rápido durante tu día.'
    }
  },
  {
    id: 'm4',
    title: '50 Tips de Memoria',
    intent: 'Educativas',
    category: 'Módulo',
    moduleName: 'MÓDULO 4',
    duration: '15 min',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    isCore: false,
    audioUrl: `${GITHUB_BASE}M%C3%93DULO%204%20%E2%80%93%2050%20TIPS%20PARA%20UNA%20MEMORIA%20IMPARABLE(1).MP3`,
    isPremium: false,
    order: 5,
    intro: {
      why: 'Complementar el estímulo con hábitos que protegen el cerebro.',
      notice: ['Optimización de la salud cerebral', 'Hábitos sostenibles'],
      how: 'Escucha y elige 3 tips para aplicar hoy mismo.'
    }
  },
  {
    id: 'b1',
    title: 'Ahorrador de 1 Minuto',
    intent: 'Rápidas',
    category: 'Bono',
    moduleName: 'BONO 1',
    duration: '1 min',
    imageUrl: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=800&auto=format&fit=crop',
    isCore: false,
    audioUrl: `${GITHUB_BASE}BONO%201%20%E2%80%93%20AHORRADOR%20DE%20MEMORIA%20DE%201%20MINUTO.mp3`,
    isPremium: true,
    order: 6,
    intro: {
      why: 'Reorganizar la atención en momentos de saturación.',
      notice: ['Recuperación del enfoque', 'Alivio de la dispersión'],
      how: 'No necesitas detener tus tareas, solo escuchar y respirar.'
    }
  },
  {
    id: 'b2',
    title: 'Carta del Dr. James Mendoza',
    intent: 'Educativas',
    category: 'Bono',
    moduleName: 'BONO 2',
    duration: '3 min',
    imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop',
    isCore: false,
    audioUrl: `${GITHUB_BASE}BONO%202%20%E2%80%93%20CARTA%20DEL%20DR.%20JAMES%20MENDOZA.mp3`,
    isPremium: true,
    order: 7,
    intro: {
      why: 'Validación profesional del método y visión de bienestar.',
      notice: ['Seguridad en el proceso', 'Compromiso con la salud cognitiva'],
      how: 'Una carta dedicada a tu acompañamiento profesional.'
    }
  },
  {
    id: 'b3',
    title: 'El Botón de Energía',
    intent: 'Rápidas',
    category: 'Bono',
    moduleName: 'BONO 3',
    duration: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop',
    isCore: false,
    audioUrl: `${GITHUB_BASE}BONO%203%20%E2%80%93%20EL%20BOT%C3%93N%20DE%20ENERG%C3%8DA.mp3`,
    isPremium: true,
    order: 8,
    intro: {
      why: 'Estimulación natural para elevar el estado de alerta.',
      notice: ['Aumento de la energía mental', 'Atención renovada'],
      how: 'Úsalo cuando sientas cansancio cognitivo por la tarde.'
    }
  },
  {
    id: 'b4',
    title: 'Guía de Compras Inteligente',
    intent: 'Educativas',
    category: 'Bono',
    moduleName: 'BONO 4',
    duration: '6 min',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    isCore: false,
    audioUrl: `${GITHUB_BASE}BONO%204%20%E2%80%93%20GU%C3%8DA%20DE%20COMPRAS%20INTELIGENTE.mp3`,
    isPremium: true,
    order: 9,
    intro: {
      why: 'La salud del cerebro también se apoya con decisiones diarias.',
      notice: ['Priorización de alimentos naturales', 'Horarios de descanso regulares', 'Reducción de estímulos digitales'],
      how: 'Un entorno equilibrado favorece una mente más clara y enfocada.'
    }
  },
  {
    id: 'b5',
    title: 'Onda Delta y Visualización',
    intent: 'Relajación',
    category: 'Bono',
    moduleName: 'BONO 5',
    duration: '20 min',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
    isCore: false,
    audioUrl: `${GITHUB_BASE}BONO%205%20%E2%80%93%20ONDA%20DELTA%20Y%20PODER%20DE%20VISUALIZACI%C3%93N.MP3`,
    isPremium: true,
    order: 10,
    intro: {
      why: 'Guiar la mente hacia estados de descanso y reparación profunda.',
      notice: ['Tranquilidad absoluta', 'Facilidad para conciliar el sueño'],
      how: 'Ideal para antes de dormir o desconexión total.'
    }
  },
  {
    id: 'b6',
    title: 'La Pirámide de Warren Buffet',
    intent: 'Educativas',
    category: 'Bono',
    moduleName: 'BONO 6',
    duration: '8 min',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    isCore: false,
    audioUrl: `${GITHUB_BASE}BONO%206%20%E2%80%93%20LA%20PIR%C3%81MIDE%20DE%20WARREN%20BUFFET.mp3`,
    isPremium: true,
    order: 11,
    intro: {
      why: 'Priorizar el enfoque y reducir el ruido en la toma de decisiones.',
      notice: ['Perspectiva clara', 'Simplicidad mental'],
      how: 'Escucha para organizar tus prioridades semanales.'
    }
  }
];

// --- CONTEXT ---
interface MemoryPulseContextType {
  currentSession: Session | null;
  isPlaying: boolean;
  userState: UserState;
  playSession: (session: Session) => void;
  togglePlay: () => void;
}

const MemoryPulseContext = createContext<MemoryPulseContextType | undefined>(undefined);

const usePulse = () => {
  const context = useContext(MemoryPulseContext);
  if (!context) throw new Error("usePulse must be used within Provider");
  return context;
};

// --- COMPONENTS ---

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" stroke="#E31B23" strokeWidth="4"/>
      <path d="M50 20V80M20 50H80" stroke="#E31B23" strokeWidth="2" strokeDasharray="4 4"/>
      <circle cx="50" cy="50" r="15" fill="#E31B23" fillOpacity="0.2"/>
    </svg>
    <div className="flex flex-col">
      <span className="text-xl font-black leading-none tracking-tighter text-white">PULSE</span>
      <div className="bg-pulse-red px-1 mt-0.5">
        <span className="text-[10px] font-black leading-none text-white tracking-[0.1em]">MEMORY</span>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="px-6 pt-8 pb-4 flex justify-between items-center bg-black/80 backdrop-blur-md sticky top-0 z-30">
    <Logo />
    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
      <ICONS.User className="w-5 h-5 text-white/40" />
    </div>
  </header>
);

const PersistentPlayer = () => {
  const { currentSession, isPlaying, togglePlay } = usePulse();
  if (!currentSession) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 glass-card border-t border-white/10 p-4 flex items-center justify-between z-50 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="w-12 h-12 bg-white/5 rounded-lg flex-shrink-0 overflow-hidden border border-white/10">
          <img src={currentSession.imageUrl} alt="" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="overflow-hidden">
          <p className="text-[10px] font-black text-pulse-red uppercase tracking-widest truncate">{currentSession.moduleName}</p>
          <p className="text-sm font-bold truncate text-white">{currentSession.title}</p>
        </div>
      </div>
      <button onClick={togglePlay} className="p-3 bg-white text-black rounded-full hover:scale-110 active:scale-95 transition-transform">
        {isPlaying ? <ICONS.Pause className="w-5 h-5" /> : <ICONS.Play className="w-5 h-5" />}
      </button>
    </div>
  );
};

// --- PAGES ---

const HomePage = () => {
  const { playSession, userState } = usePulse();
  const lastSession = SESSIONS.find(s => s.id === userState.lastSessionId) || SESSIONS[0];

  const modules = SESSIONS.filter(s => s.category === 'Módulo');
  const bonos = SESSIONS.filter(s => s.category === 'Bono');

  return (
    <div className="px-6 pb-32 space-y-12 animate-in fade-in duration-500">
      {/* Resume Hero */}
      <section className="pt-6">
        <div className="glass-card rounded-[24px] p-6 relative overflow-hidden group border-white/10">
          <div className="absolute inset-0 z-0">
            <img 
              src={lastSession.imageUrl} 
              className="w-full h-full object-cover opacity-20 scale-110 group-hover:scale-100 transition-transform duration-1000" 
              alt={lastSession.title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pulse-red">Retomar</span>
              <div className="h-0.5 w-8 bg-pulse-red/30" />
            </div>
            <h2 className="text-3xl font-black tracking-tighter leading-none text-white">{lastSession.title}</h2>
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              <span>{lastSession.moduleName}</span>
              <span>•</span>
              <span>{lastSession.duration}</span>
            </div>
            <button 
              onClick={() => playSession(lastSession)}
              className="w-full py-4 btn-memory rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-pulse-red/10"
            >
              <ICONS.Play className="w-5 h-5" /> REPRODUCIR
            </button>
          </div>
        </div>
      </section>

      {/* Main Path */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Módulos del Programa</h3>
          <span className="text-[9px] font-bold text-pulse-red">PASO A PASO</span>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {modules.map(session => (
            <Link 
              to={`/session/${session.id}`} 
              key={session.id} 
              className="glass-card h-48 rounded-[20px] relative overflow-hidden group border-white/5 hover:border-pulse-red/20 transition-all bg-[#0a0a0a]"
            >
               <img 
                src={session.imageUrl} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                alt={session.title}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
               <div className="absolute bottom-5 left-5 right-5 space-y-1">
                 <p className="text-[9px] font-black uppercase tracking-widest text-pulse-red">{session.moduleName}</p>
                 <h4 className="text-lg font-black tracking-tight text-white">{session.title}</h4>
                 <div className="flex items-center justify-between mt-2">
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Explorar →</span>
                    <span className="text-[10px] font-bold text-white/30">{session.duration}</span>
                 </div>
               </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bonuses */}
      <section className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Bonos Exclusivos</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
          {bonos.map(session => (
            <Link 
              to={`/session/${session.id}`} 
              key={session.id} 
              className="glass-card min-w-[200px] h-64 rounded-[20px] relative overflow-hidden group flex-shrink-0 bg-[#0a0a0a]"
            >
               <img 
                src={session.imageUrl} 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-500" 
                alt={session.title}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
               <div className="absolute bottom-5 left-5 right-5">
                 <p className="text-[9px] font-black uppercase tracking-widest text-pulse-red mb-1">{session.moduleName}</p>
                 <h4 className="text-sm font-bold leading-tight text-white">{session.title}</h4>
               </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Intent Navigation */}
      <section className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">¿Cómo te sientes hoy?</h3>
        <div className="grid grid-cols-2 gap-3">
          {(['Guiadas', 'Rápidas', 'Relajación', 'Educativas'] as IntentType[]).map(intent => (
            <Link 
              to={`/intent/${intent}`} 
              key={intent} 
              className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-white/5 border-white/5 transition-all"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">{intent}</span>
              <div className="w-1.5 h-1.5 bg-pulse-red/40 rounded-full" />
            </Link>
          ))}
        </div>
      </section>

      <footer className="pt-8 text-[9px] text-white/20 text-center leading-relaxed font-bold uppercase tracking-widest">
        Memory Pulse • Bienestar Cognitivo <br/>
        Resultados varían según constancia.
      </footer>
    </div>
  );
};

const IntentPage = () => {
  const { intent } = useParams<{ intent: string }>();
  const navigate = useNavigate();
  const filtered = SESSIONS.filter(s => s.intent === intent);

  return (
    <div className="px-6 pb-32 space-y-6">
      <button onClick={() => navigate(-1)} className="pt-6 text-[10px] font-black uppercase tracking-widest text-white/40 flex items-center gap-1 hover:text-white transition-colors">
        ← Volver
      </button>
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-6 bg-pulse-red rounded-full" />
        <h1 className="text-3xl font-black tracking-tighter uppercase text-white">{intent}</h1>
      </div>
      
      <div className="space-y-3">
        {filtered.map(session => (
          <Link to={`/session/${session.id}`} key={session.id} className="glass-card p-5 rounded-2xl flex items-center justify-between group hover:border-pulse-red/40 transition-all bg-[#0a0a0a]">
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase tracking-widest text-pulse-red">{session.moduleName}</p>
              <h3 className="font-bold text-lg tracking-tight group-hover:text-white transition-colors text-white">{session.title}</h3>
              <p className="text-[10px] font-bold text-white/30">{session.duration}</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-pulse-red group-hover:border-pulse-red transition-all">
              <ICONS.Play className="w-3 h-3 text-white/40 group-hover:text-white" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const SessionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { playSession, currentSession, isPlaying } = usePulse();
  const session = SESSIONS.find(s => s.id === id);

  if (!session) return <div className="p-20 text-center uppercase font-black text-white/20">Sesión no encontrada</div>;

  const isActive = currentSession?.id === session.id;

  return (
    <div className="px-6 pb-32 space-y-8 animate-in slide-in-from-right duration-300">
      <header className="pt-6 flex justify-between items-center">
        <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white">← Salir</Link>
        <ICONS.Favorite className="w-5 h-5 text-white/20 hover:text-pulse-red transition-colors cursor-pointer" />
      </header>

      <div className="aspect-[4/5] glass-card rounded-[32px] flex items-center justify-center relative overflow-hidden shadow-2xl border-white/10 bg-[#0a0a0a]">
        <img 
          src={session.imageUrl} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt={session.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        
        <div className="absolute bottom-10 left-8 z-20 space-y-3 pr-8">
           <div className="bg-pulse-red inline-block px-3 py-1">
              <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">{session.moduleName}</span>
           </div>
           <h1 className="text-4xl font-black leading-none tracking-tighter text-white">{session.title}</h1>
           <p className="text-sm font-bold text-white/60 tracking-widest uppercase">{session.duration}</p>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-4">
          <h4 className="text-[10px] font-black text-pulse-red uppercase tracking-[0.3em]">Por qué importa</h4>
          <p className="text-white/80 leading-relaxed font-medium text-lg">{session.intro.why}</p>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-black text-pulse-red uppercase tracking-[0.3em]">Qué vas a notar</h4>
          <ul className="space-y-4">
            {session.intro.notice.map((item, i) => (
              <li key={i} className="text-white/70 text-sm flex gap-4 font-bold uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-pulse-red mt-1.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
          <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-3">Cómo usar</h4>
          <p className="text-white/60 text-sm italic font-medium leading-relaxed">{session.intro.how}</p>
        </div>
      </div>

      <div className="pt-6">
        <button 
          onClick={() => playSession(session)}
          className="w-full py-6 btn-memory rounded-[24px] shadow-[0_15px_40px_rgba(227,27,35,0.4)] flex items-center justify-center gap-4 active:scale-95 transition-all text-xl"
        >
          {isActive && isPlaying ? <ICONS.Pause className="w-8 h-8" /> : <ICONS.Play className="w-8 h-8" />}
          {isActive && isPlaying ? 'PAUSAR' : 'REPRODUCIR'}
        </button>
      </div>
    </div>
  );
};

// --- ROOT APP ---

const PulseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userState, setUserState] = useState<UserState>({
    lastSessionId: 'm1',
    progress: {},
    completed: [],
    isPremium: true
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    return () => audioRef.current?.pause();
  }, []);

  const playSession = (session: Session) => {
    if (currentSession?.id === session.id) {
      togglePlay();
      return;
    }
    setCurrentSession(session);
    setUserState(prev => ({ ...prev, lastSessionId: session.id }));
    if (audioRef.current) {
      audioRef.current.src = session.audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <MemoryPulseContext.Provider value={{ currentSession, isPlaying, userState, playSession, togglePlay }}>
      {children}
    </MemoryPulseContext.Provider>
  );
};

const App: React.FC = () => {
  return (
    <PulseProvider>
      <Router>
        <div className="max-w-md mx-auto min-h-screen relative overflow-x-hidden bg-black selection:bg-pulse-red selection:text-white pb-20">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/intent/:intent" element={<IntentPage />} />
            <Route path="/session/:id" element={<SessionDetailPage />} />
          </Routes>
          <PersistentPlayer />
        </div>
      </Router>
    </PulseProvider>
  );
};

export default App;
