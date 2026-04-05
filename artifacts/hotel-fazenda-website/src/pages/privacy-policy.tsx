import DocumentLayout from "@/components/layout/DocumentLayout";

export default function PrivacyPolicy() {
  const toc = [
    { id: "identificacao", label: "1. Identificação do Controlador" },
    { id: "escopo", label: "2. Escopo e Aceitação" },
    { id: "definicoes", label: "3. Definições" },
    { id: "dados-coletados", label: "4. Dados Coletados" },
    { id: "base-legal", label: "5. Base Legal" },
    { id: "finalidade", label: "6. Finalidade" },
    { id: "compartilhamento", label: "7. Compartilhamento" },
    { id: "transferencia", label: "8. Transferência Internacional" },
    { id: "retencao", label: "9. Retenção" },
    { id: "direitos", label: "10. Direitos do Titular" },
    { id: "exercicio-direitos", label: "11. Exercício de Direitos" },
    { id: "seguranca", label: "12. Segurança" },
    { id: "incidentes", label: "13. Incidentes" },
    { id: "menores", label: "14. Menores" },
    { id: "links-externos", label: "15. Links Externos" },
    { id: "alteracoes", label: "16. Alterações" },
    { id: "contato", label: "17. Contato" },
    { id: "foro", label: "18. Foro" },
  ];

  return (
    <DocumentLayout 
      title="Política de Privacidade" 
      date="05 de abril de 2026"
      tableOfContents={toc}
    >
      <div className="p-6 bg-card/20 rounded-xl border border-border/40 mb-10 text-sm">
        <p className="m-0 font-medium">Hotel Fazenda Vale da Mantiqueira LTDA</p>
        <p className="m-0">CNPJ: 04.582.509/0001-40</p>
        <p className="m-0">Sede: Fazenda Sertãozinho S/N, Virgínia – MG</p>
        <p className="m-0">Contato: <a href="mailto:dev@valedamantiqueira.com.br">dev@valedamantiqueira.com.br</a></p>
      </div>

      <section id="identificacao" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">1. IDENTIFICAÇÃO DO CONTROLADOR</h2>
        <p>O Hotel Fazenda Vale da Mantiqueira LTDA, inscrito no CNPJ sob nº 04.582.509/0001-40, com sede na Fazenda Sertãozinho S/N, Virgínia – MG, atua como Controlador dos Dados Pessoais, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Contato: <a href="mailto:dev@valedamantiqueira.com.br">dev@valedamantiqueira.com.br</a></p>
      </section>

      <section id="escopo" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">2. ESCOPO E ACEITAÇÃO</h2>
        <p>Esta Política se aplica a todos os usuários do aplicativo e serviços relacionados. Ao utilizar o serviço, você declara estar ciente e concorda com esta Política.</p>
      </section>

      <section id="definicoes" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">3. DEFINIÇÕES</h2>
        <ul>
          <li><strong>Dado Pessoal:</strong> informação que identifica ou pode identificar uma pessoa;</li>
          <li><strong>Tratamento:</strong> qualquer operação com dados;</li>
          <li><strong>Titular:</strong> você;</li>
          <li><strong>Controlador:</strong> a empresa</li>
        </ul>
      </section>

      <section id="dados-coletados" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">4. DADOS COLETADOS</h2>
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">4.1 Dados fornecidos</h3>
        <p>Nome, E-mail, Telefone, Dados de cadastro, Informações fornecidas voluntariamente.</p>
        
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">4.2 Dados automáticos</h3>
        <p>Endereço IP, Dispositivo, Sistema operacional, Logs de uso, Interações no app.</p>
        
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">4.3 Localização</h3>
        <p>Mediante autorização: Localização aproximada ou precisa.</p>
        
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">4.4 Pagamentos</h3>
        <p>Dados de pagamento não são armazenados diretamente, sendo processados por terceiros.</p>
        
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">4.5 Cookies e tecnologias</h3>
        <p>Utilizamos cookies e tecnologias similares para: Funcionamento, Analytics, Personalização, Marketing.</p>
      </section>

      <section id="base-legal" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">5. BASE LEGAL</h2>
        <p>Execução de contrato, Consentimento, Legítimo interesse, Obrigação legal.</p>
      </section>

      <section id="finalidade" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">6. FINALIDADE</h2>
        <p>Operação do app, Gestão de conta, Comunicação, Segurança, Marketing, Melhoria do serviço.</p>
      </section>

      <section id="compartilhamento" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">7. COMPARTILHAMENTO</h2>
        <p>Prestadores de serviço, Parceiros, Autoridades legais.</p>
      </section>

      <section id="transferencia" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">8. TRANSFERÊNCIA INTERNACIONAL</h2>
        <p>Os dados podem ser transferidos para outros países com proteção adequada.</p>
      </section>

      <section id="retencao" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">9. RETENÇÃO</h2>
        <p>Conta: até 24 meses após encerramento; Logs: até 24 meses. Após isso, os dados serão excluídos ou anonimizados.</p>
      </section>

      <section id="direitos" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">10. DIREITOS DO TITULAR</h2>
        <p>Acesso, Correção, Exclusão, Portabilidade, Revogação de consentimento.</p>
      </section>

      <section id="exercicio-direitos" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">11. EXERCÍCIO DE DIREITOS</h2>
        <p>Contato: <a href="mailto:dev@valedamantiqueira.com.br">dev@valedamantiqueira.com.br</a>. Prazo de resposta: até 15 dias.</p>
      </section>

      <section id="seguranca" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">12. SEGURANÇA</h2>
        <p>Adotamos medidas de segurança, mas não garantimos proteção absoluta.</p>
      </section>

      <section id="incidentes" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">13. INCIDENTES</h2>
        <p>Em caso de incidente relevante, notificaremos autoridades e usuários quando necessário.</p>
      </section>

      <section id="menores" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">14. MENORES</h2>
        <p>Não coletamos dados de menores de 16 anos sem consentimento.</p>
      </section>

      <section id="links-externos" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">15. LINKS EXTERNOS</h2>
        <p>Não nos responsabilizamos por sites de terceiros.</p>
      </section>

      <section id="alteracoes" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">16. ALTERAÇÕES</h2>
        <p>Esta Política pode ser atualizada a qualquer momento.</p>
      </section>

      <section id="contato" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">17. CONTATO</h2>
        <p><a href="mailto:dev@valedamantiqueira.com.br">dev@valedamantiqueira.com.br</a></p>
      </section>

      <section id="foro" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">18. FORO</h2>
        <p>Foro de Virgínia – MG</p>
      </section>
    </DocumentLayout>
  );
}
