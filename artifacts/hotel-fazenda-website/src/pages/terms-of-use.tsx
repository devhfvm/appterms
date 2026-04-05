import DocumentLayout from "@/components/layout/DocumentLayout";

export default function TermsOfUse() {
  const toc = [
    { id: "aceitacao", label: "1. Aceitação" },
    { id: "objeto", label: "2. Objeto" },
    { id: "cadastro", label: "3. Cadastro" },
    { id: "proibicoes", label: "4. Proibições" },
    { id: "propriedade", label: "5. Propriedade" },
    { id: "limitacao", label: "6. Limitação de Responsabilidade" },
    { id: "suspensao", label: "7. Suspensão" },
    { id: "links", label: "8. Links" },
    { id: "alteracoes", label: "9. Alterações" },
    { id: "foro", label: "10. Foro" },
  ];

  return (
    <DocumentLayout 
      title="Termos de Uso" 
      tableOfContents={toc}
    >
      <section id="aceitacao" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">1. ACEITAÇÃO</h2>
        <p>Ao usar o app, você concorda com estes termos.</p>
      </section>

      <section id="objeto" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">2. OBJETO</h2>
        <p>O app oferece:</p>
        <ul>
          <li>Informações do hotel</li>
          <li>Programação</li>
          <li>Serviços</li>
        </ul>
      </section>

      <section id="cadastro" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">3. CADASTRO</h2>
        <p>As informações fornecidas devem ser verdadeiras. O usuário é o único responsável por sua conta.</p>
      </section>

      <section id="proibicoes" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">4. PROIBIÇÕES</h2>
        <p>É expressamente proibido o uso ilegal, fraude, tentativas de invasão e engenharia reversa do aplicativo.</p>
      </section>

      <section id="propriedade" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">5. PROPRIEDADE</h2>
        <p>Todo conteúdo presente no aplicativo e site pertence ao Hotel Fazenda Vale da Mantiqueira LTDA.</p>
      </section>

      <section id="limitacao" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">6. LIMITAÇÃO DE RESPONSABILIDADE</h2>
        <p>O serviço é fornecido sem garantias. Não nos responsabilizamos por indisponibilidades temporárias do sistema.</p>
      </section>

      <section id="suspensao" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">7. SUSPENSÃO</h2>
        <p>As contas podem ser suspensas em caso de violação destes Termos de Uso.</p>
      </section>

      <section id="links" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">8. LINKS</h2>
        <p>Não nos responsabilizamos por conteúdos de terceiros acessados através de links no nosso aplicativo.</p>
      </section>

      <section id="alteracoes" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">9. ALTERAÇÕES</h2>
        <p>Podemos alterar estes termos a qualquer momento, visando a melhoria do serviço ou adequação legal.</p>
      </section>

      <section id="foro" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">10. FORO</h2>
        <p>Fica eleito o Foro da Comarca de Virgínia – MG para dirimir quaisquer questões relativas a estes Termos de Uso.</p>
      </section>
    </DocumentLayout>
  );
}
