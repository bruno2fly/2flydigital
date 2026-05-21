"use client";

export default function OutboundOSProposal() {
  return (
    <div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* NAV */}
      <nav style={{ borderBottom: "1px solid #1a1a1a", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>2FLY Digital</span>
        <a
          href="https://wa.me/17816062445"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--accent)", color: "#000", padding: "8px 20px", borderRadius: "8px",
            fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", letterSpacing: "-0.01em"
          }}
        >
          💬 Falar agora
        </a>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 40px 60px", textAlign: "center" }}>
        <div style={{
          display: "inline-block", background: "var(--accent-soft)", color: "var(--accent)",
          padding: "6px 16px", borderRadius: "100px", fontSize: "0.78rem",
          fontWeight: 600, letterSpacing: "0.05em", marginBottom: "28px",
          border: "1px solid #1a4a2e", textTransform: "uppercase"
        }}>
          ✦ Feito especialmente para Pipelore
        </div>

        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: "24px",
          background: "linear-gradient(135deg, #fff 0%, #999 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>
          A operação comercial que o Pipelore precisa.
          <br />
          <span style={{ color: "var(--accent)", WebkitTextFillColor: "var(--accent)" }}>Sem o preço do HubSpot.</span>
        </h1>

        <p style={{ fontSize: "1.1rem", color: "#888", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 40px" }}>
          Construímos o OutboundOS para exatamente o momento em que vocês estão: time pequeno, boa base de leads, e precisando de retorno rápido. Sem taxa de onboarding de R$3.800, sem contrato trimestral.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/17816062445"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--accent)", color: "#000", padding: "14px 32px",
              borderRadius: "10px", fontWeight: 700, fontSize: "1rem",
              textDecoration: "none", letterSpacing: "-0.01em"
            }}
          >
            Fechar agora →
          </a>
          <a
            href="https://outboundos-crm.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent", color: "#fff", padding: "14px 32px",
              borderRadius: "10px", fontWeight: 600, fontSize: "1rem",
              textDecoration: "none", border: "1px solid #333", letterSpacing: "-0.01em"
            }}
          >
            Ver protótipo live ↗
          </a>
        </div>
      </section>

      {/* WE HEARD YOU */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ background: "#111", borderRadius: "16px", padding: "48px", border: "1px solid #1f1f1f" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Escutamos tudo. Aqui está o que entendemos sobre vocês:
          </h2>
          <p style={{ color: "#666", marginBottom: "32px", fontSize: "0.95rem" }}>
            Cada detalhe do que a Maiara e a Laura precisam está aqui.
          </p>

          {[
            { icon: "📲", text: "A Maiara prospecta manualmente via WhatsApp todos os dias — e está perdendo tempo fazendo isso sem cadência automatizada." },
            { icon: "📋", text: "Vocês têm uma boa base de leads de eventos e patrocínios — só falta a ferramenta para ativar ela de forma escalável." },
            { icon: "🌐", text: "O site do Pipelore já recebe leads orgânicos e por IA (3 leads recentes!), mas não tem formulário que caia direto no CRM." },
            { icon: "🔁", text: "A máquina de recompra é forte — o hospital em Pernambuco que virou 11 condomínios é o exemplo perfeito. Isso precisa estar no CRM." },
            { icon: "👩‍💼", text: "A Débora precisa saber quais síndicos estão inativos no Pipelore antes que virem churn — sem precisar checar na mão." },
            { icon: "💰", text: "O budget é real. O HubSpot pediu R$3.800 de setup + R$1.650 por trimestre. Isso não fecha no fluxo de caixa de agora." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", marginBottom: i < 5 ? "20px" : 0, alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
              <p style={{ color: "#ccc", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "12px" }}>
            O que o OutboundOS entrega
          </h2>
          <p style={{ color: "#666", fontSize: "0.95rem" }}>Construído especificamente para o modelo do Pipelore.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {[
            {
              icon: "🚀",
              title: "Disparos WhatsApp + Cadência",
              desc: "Importe CSV, personalize com {{nome}}, {{condominios}}, {{cidade}} e dispare. Cadência automática: mensagem 1 → delay → mensagem 2. WhatsApp e e-mail juntos na mesma sequência."
            },
            {
              icon: "📊",
              title: "CRM com Funil de Vendas",
              desc: "Pipeline visual personalizado para síndicos e administradoras. Histórico completo por lead. Associe contatos, empresas e negócios — como o caso do hospital que virou 11 condomínios."
            },
            {
              icon: "🔗",
              title: "Captura de Lead no Site",
              desc: "Formulário que cai direto no CRM com um script. Lead entra com tag 'Inbound Site' e dispara WhatsApp automático. Nada se perde."
            },
            {
              icon: "📈",
              title: "Módulo CS — Saúde do Cliente",
              desc: "Health score por conta. Alerta automático para a Débora quando um síndico fica inativo no Pipelore. Painel de renovações e risco de churn."
            },
            {
              icon: "🔌",
              title: "Integração com o Pipelore",
              desc: "Webhook que puxa dados do seu sistema diretamente. A Débora vê tudo dentro do OutboundOS sem abrir outra aba."
            },
          ].map((f, i) => (
            <div key={i} style={{
              background: "#111", borderRadius: "14px", padding: "28px",
              border: "1px solid #1f1f1f", transition: "border-color 0.2s"
            }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "16px" }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "10px", letterSpacing: "-0.02em" }}>{f.title}</h3>
              <p style={{ color: "#777", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "12px" }}>
            OutboundOS vs HubSpot
          </h2>
          <p style={{ color: "#666", fontSize: "0.95rem" }}>O comparativo honesto.</p>
        </div>

        <div style={{ background: "#111", borderRadius: "16px", border: "1px solid #1f1f1f", overflow: "hidden" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#0d0d0d", borderBottom: "1px solid #1f1f1f" }}>
            <div style={{ padding: "16px 24px", fontWeight: 600, color: "#666", fontSize: "0.85rem" }}></div>
            <div style={{ padding: "16px 24px", fontWeight: 700, color: "var(--accent)", fontSize: "0.9rem", borderLeft: "1px solid #1f1f1f", borderRight: "1px solid #1f1f1f" }}>OutboundOS</div>
            <div style={{ padding: "16px 24px", fontWeight: 600, color: "#666", fontSize: "0.9rem" }}>HubSpot</div>
          </div>

          {[
            ["Preço mensal", "R$297–497/mês", "R$550–750/mês"],
            ["Setup / Onboarding", "R$1.200 (incluso no plano)", "R$3.800 com parceiro"],
            ["Contrato", "Mensal, sem lock-in", "Trimestral (R$1.650 de uma vez)"],
            ["WhatsApp + e-mail na mesma cadência", "✅ Sim, integrado", "❌ Separados no plano delas"],
            ["Trial grátis", "✅ 2 semanas", "❌ Não"],
            ["Suporte", "Direto com o time 2FLY", "Portal + parceiro externo"],
            ["Personalização Pipelore", "✅ Campos de síndico/condomínio nativos", "⚠️ Configuração manual"],
            ["Integração com sistema próprio", "✅ Via webhook inclusa", "✅ Via API (requer dev)"],
          ].map(([label, ours, theirs], i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: i < 7 ? "1px solid #1a1a1a" : "none"
            }}>
              <div style={{ padding: "16px 24px", color: "#999", fontSize: "0.875rem" }}>{label}</div>
              <div style={{ padding: "16px 24px", color: "var(--accent)", fontSize: "0.875rem", fontWeight: 600, borderLeft: "1px solid #1a1a1a", borderRight: "1px solid #1a1a1a", background: "var(--accent-soft)" }}>{ours}</div>
              <div style={{ padding: "16px 24px", color: "#666", fontSize: "0.875rem" }}>{theirs}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Investimento
          </h2>
          <p style={{ color: "#666", fontSize: "0.95rem" }}>2 semanas grátis antes do primeiro pagamento. Sem surpresas.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "32px" }}>
          {/* STARTER */}
          <div style={{ background: "#111", borderRadius: "16px", padding: "36px", border: "1px solid #1f1f1f" }}>
            <div style={{ color: "#666", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Starter</div>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "4px" }}>R$297</div>
            <div style={{ color: "#555", fontSize: "0.85rem", marginBottom: "28px" }}>/mês · faturamento mensal</div>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "24px" }}>
              {[
                "CRM com funil personalizado",
                "Disparos WhatsApp (500/mês)",
                "Cadência WhatsApp + e-mail",
                "Formulário de captura no site",
                "Relatórios de conversão",
                "Até 3 usuários (Laura + Maiara + 1)",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px", color: "#ccc", fontSize: "0.875rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GROWTH */}
          <div style={{
            background: "var(--accent-soft)", borderRadius: "16px", padding: "36px",
            border: "2px solid var(--accent)", position: "relative", overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", top: "16px", right: "16px",
              background: "var(--accent)", color: "#000", padding: "4px 12px",
              borderRadius: "100px", fontSize: "0.72rem", fontWeight: 700
            }}>
              RECOMENDADO
            </div>
            <div style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Growth</div>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "4px" }}>R$497</div>
            <div style={{ color: "#555", fontSize: "0.85rem", marginBottom: "28px" }}>/mês · faturamento mensal</div>
            <div style={{ borderTop: "1px solid #1a4a2e", paddingTop: "24px" }}>
              {[
                "Tudo do Starter +",
                "Disparos ilimitados",
                "Módulo CS com health score",
                "Alertas de inatividade (Débora)",
                "Integração com sistema Pipelore (webhook)",
                "Suporte direto via WhatsApp",
                "Pipeline de CS completo",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px", color: "#ccc", fontSize: "0.875rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: "#111", borderRadius: "12px", padding: "24px 28px", border: "1px solid #1f1f1f", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <div style={{ fontWeight: 700, marginBottom: "4px" }}>Setup Único — R$1.200</div>
            <div style={{ color: "#666", fontSize: "0.875rem" }}>Pipeline configurado + importação da base + 3h de treinamento com Laura, Maiara e Débora</div>
          </div>
          <div style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.875rem", whiteSpace: "nowrap" }}>✓ Incluso no contrato</div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "12px" }}>
            4 semanas até operação 100%
          </h2>
          <p style={{ color: "#666", fontSize: "0.95rem" }}>A Maiara prospectando com cadência automatizada na semana 2.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
          {[
            { week: "Semana 1", title: "Setup & Base", desc: "CRM configurado, pipeline personalizado, importação da base de leads" },
            { week: "Semana 2", title: "Disparos & Cadência", desc: "WhatsApp + e-mail rodando, formulário no site, Maiara já prospecta" },
            { week: "Semana 3", title: "CS & Integração", desc: "Módulo Débora ativo, webhook com Pipelore, health score configurado" },
            { week: "Semana 4", title: "Go Live", desc: "Treinamento final, ajustes, tudo rodando. Primeiro relatório." },
          ].map((w, i) => (
            <div key={i} style={{ background: "#111", borderRadius: "12px", padding: "24px", border: "1px solid #1f1f1f", textAlign: "center" }}>
              <div style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>{w.week}</div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "8px" }}>{w.title}</div>
              <div style={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.55 }}>{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: "700px", margin: "0 auto", padding: "60px 40px 100px", textAlign: "center" }}>
        <div style={{ background: "linear-gradient(135deg, var(--accent-soft) 0%, #111 100%)", borderRadius: "20px", padding: "60px 48px", border: "1px solid var(--accent)33" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "16px" }}>
            Vamos fechar? 🤝
          </h2>
          <p style={{ color: "#888", lineHeight: 1.7, marginBottom: "36px", fontSize: "0.95rem" }}>
            2 semanas grátis. Setup incluso. Suporte direto. Sem contrato trimestral.<br />
            A Maiara pode começar a prospectar com cadência automatizada ainda nesta semana.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/17816062445"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--accent)", color: "#000", padding: "16px 36px",
                borderRadius: "10px", fontWeight: 700, fontSize: "1rem",
                textDecoration: "none", letterSpacing: "-0.01em"
              }}
            >
              💬 WhatsApp agora
            </a>
            <a
              href="mailto:bruno@2flydigital.com"
              style={{
                background: "transparent", color: "#fff", padding: "16px 36px",
                borderRadius: "10px", fontWeight: 600, fontSize: "1rem",
                textDecoration: "none", border: "1px solid #333", letterSpacing: "-0.01em"
              }}
            >
              ✉️ Enviar e-mail
            </a>
          </div>
          <p style={{ color: "#444", fontSize: "0.8rem", marginTop: "28px" }}>
            Bruno Lima · 2FLY Digital Marketing · bruno@2flydigital.com
          </p>
        </div>
      </section>

    </div>
  );
}
