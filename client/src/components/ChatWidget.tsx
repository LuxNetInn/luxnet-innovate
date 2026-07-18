import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, Headset } from "lucide-react";

/**
 * Chat virtual del sitio, conectado al mismo cerebro de IA que el bot de
 * Telegram (@Luxy_InnovateBot) vía el worker de Cloudflare.
 *  - Modo IA: POST {VITE_CHAT_API}/chat  → Z.ai glm-4.5-flash responde.
 *  - "Hablar con humano": POST {VITE_CHAT_API}/chat/escalate → el mensaje
 *    se reenvía al dueño por Telegram.
 * El endpoint por defecto asume el worker `luxybot.luxnet-innovate.workers.dev`;
 * sobreescribe con VITE_CHAT_API en Netlify solo si el host real difiere.
 */
const CHAT_API = (import.meta.env.VITE_CHAT_API || "https://luxybot.luxnet-innovate.workers.dev").replace(/\/$/, "");
const OWNER_WA = "https://wa.me/15616905996";

type Msg = { role: "user" | "bot"; content: string };

// Markdown mínimo: *negrita*, _cursiva_, `código`, saltos de línea.
function renderMarkdown(text: string) {
  const esc = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return esc
    .replace(/`([^`]+)`/g, "<code class='bg-black/40 px-1 rounded text-green-400'>$1</code>")
    .replace(/\*([^*]+)\*/g, "<strong class='text-green-400'>$1</strong>")
    .replace(/_([^_]+)_/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");
}

const SUGGESTIONS = [
  "¿Qué es Smart Money Concepts?",
  "¿Cómo leo el RSI?",
  "Dame una idea de trading educativa",
  "¿Cuáles son tus planes?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", content: "¡Hola! Soy **Luxy**, tu asistente de trading con IA. ¿En qué puedo ayudarte hoy? 🤖" },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [escalate, setEscalate] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [escalated, setEscalated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy, escalate]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    setMsgs((m) => [...m, { role: "user", content: q }]);
    setInput("");
    setBusy(true);
    try {
      const history = msgs.map((m) => ({ role: m.role, content: m.content }));
      const res = await fetch(`${CHAT_API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q, history }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: "bot", content: data.reply || data.error || "Sin respuesta." }]);
    } catch {
      setMsgs((m) => [...m, { role: "bot", content: "❌ No pude conectar con la IA. Intenta de nuevo." }]);
    } finally {
      setBusy(false);
    }
  }

  async function sendEscalate() {
    if (!input.trim() || busy) return;
    setBusy(true);
    try {
      const res = await fetch(`${CHAT_API}/chat/escalate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, name: name || "visitante", contact }),
      });
      const data = await res.json();
      if (res.ok) {
        setEscalated(true);
        setMsgs((m) => [...m, { role: "bot", content: "✅ " + (data.message || "Te conectamos con un asesor.") }]);
      } else {
        setMsgs((m) => [...m, { role: "bot", content: "❌ " + (data.error || "No se pudo enviar.") }]);
      }
    } catch {
      setMsgs((m) => [...m, { role: "bot", content: "❌ Error de red. Escríbenos por WhatsApp." }]);
    } finally {
      setBusy(false);
      setEscalate(false);
      setInput("");
    }
  }

  return (
    <>
      {/* Burbuja flotante */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Abrir chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.6)] transition hover:scale-105"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-green-500/40 bg-background/95 shadow-[0_0_40px_rgba(34,197,94,0.25)] backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-green-500/10 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-black">
              <Bot size={18} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-green-500 font-orbitron">Luxy · Asistente IA</p>
              <p className="text-xs text-muted-foreground">{busy ? "escribiendo…" : "en línea"}</p>
            </div>
            <button onClick={() => setEscalate((e) => !e)} className="flex items-center gap-1 rounded-lg border border-green-500/40 px-2 py-1 text-xs text-green-400 hover:bg-green-500/10">
              <Headset size={14} /> Humano
            </button>
          </div>

          {/* Mensajes */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`mt-1 h-7 w-7 shrink-0 rounded-full ${m.role === "user" ? "bg-muted flex items-center justify-center" : "bg-green-500 text-black flex items-center justify-center"}`}>
                  {m.role === "user" ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "bg-green-500 text-black" : "bg-muted text-foreground"}`}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(m.content) }}
                />
              </div>
            ))}
            {busy && (
              <div className="flex gap-2">
                <div className="h-7 w-7 rounded-full bg-green-500 text-black flex items-center justify-center"><Bot size={14} /></div>
                <div className="rounded-2xl bg-muted px-3 py-2 text-sm text-muted-foreground">…</div>
              </div>
            )}
            {!escalate && msgs.length <= 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)} className="rounded-full border border-green-500/30 px-3 py-1 text-xs text-green-400 hover:bg-green-500/10">
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Modo humano */}
          {escalate && !escalated && (
            <div className="border-t border-border bg-black/30 px-4 py-3 space-y-2">
              <p className="text-xs text-muted-foreground">Déjanos tu mensaje y un asesor te escribirá por Telegram.</p>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre (opcional)" className="w-full rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none focus:border-green-500" />
              <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contacto (opcional)" className="w-full rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none focus:border-green-500" />
              <a href={OWNER_WA} target="_blank" rel="noreferrer" className="block text-center text-xs text-green-400 hover:underline">o escríbenos directo por WhatsApp</a>
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !escalate) send(input); if (e.key === "Enter" && escalate) sendEscalate(); }}
              placeholder={escalate ? "Tu mensaje para el asesor…" : "Pregúntale a Luxy…"}
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-green-500"
            />
            <button
              onClick={() => (escalate ? sendEscalate() : send(input))}
              disabled={busy || !input.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-black transition hover:scale-105 disabled:opacity-40"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
