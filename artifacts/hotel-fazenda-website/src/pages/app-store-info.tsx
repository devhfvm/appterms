import DocumentLayout from "@/components/layout/DocumentLayout";
import { Shield, Lock } from "lucide-react";

export default function AppStoreInfo() {
  const toc = [
    { id: "privacy-summary", label: "Privacy Summary" },
    { id: "data-safety", label: "Data Safety" },
  ];

  return (
    <DocumentLayout 
      title="App Store & Google Play Info" 
      tableOfContents={toc}
    >
      <div className="mb-10 p-6 bg-accent/10 border border-accent/20 rounded-xl">
        <p className="m-0 text-foreground">
          Esta página contém o resumo das práticas de privacidade e segurança de dados do aplicativo oficial do Hotel Fazenda Vale da Mantiqueira, conforme exigido pelas diretrizes da Apple App Store e Google Play Store.
        </p>
      </div>

      <section id="privacy-summary" className="scroll-mt-32">
        <div className="flex items-center gap-3 mb-4 border-b border-border/40 pb-2">
          <Shield className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold text-primary m-0">PRIVACY SUMMARY</h2>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dados Coletados (Data Collected):</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Nome:</strong> Para identificação da reserva e perfil.</li>
          <li><strong>Email:</strong> Para comunicação e recuperação de conta.</li>
          <li><strong>Telefone:</strong> Para contato em caso de necessidade durante a estadia.</li>
          <li><strong>Localização (opcional):</strong> Para recursos de mapa dentro da fazenda.</li>
          <li><strong>Dados de uso:</strong> Interações com o app para melhorias de UX.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Uso dos Dados (Data Usage):</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Funcionalidade:</strong> Operação principal do aplicativo e recursos da estadia.</li>
          <li><strong>Analytics:</strong> Compreensão de como o app é utilizado para otimizações futuras.</li>
          <li><strong>Suporte:</strong> Assistência ao hóspede durante o uso do app ou estadia.</li>
        </ul>
      </section>

      <section id="data-safety" className="scroll-mt-32 mt-16">
        <div className="flex items-center gap-3 mb-4 border-b border-border/40 pb-2">
          <Lock className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold text-primary m-0">DATA SAFETY</h2>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dados Coletados (Data Types):</h3>
        <p>
          O aplicativo coleta informações pessoais (nome, email, telefone), atividade no aplicativo e informações básicas do dispositivo para garantir o funcionamento correto.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Compartilhamento (Data Sharing):</h3>
        <p>
          Os dados podem ser compartilhados com provedores de serviço de infraestrutura e parceiros operacionais estritamente necessários para a execução dos serviços do hotel. <strong>Não vendemos seus dados a terceiros.</strong>
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Segurança (Security Practices):</h3>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-card/40 border border-border/50 rounded-lg">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Criptografia em Trânsito
            </h4>
            <p className="text-sm text-muted-foreground m-0">Todos os dados transferidos entre o app e nossos servidores são criptografados (HTTPS/TLS).</p>
          </div>
          <div className="p-4 bg-card/40 border border-border/50 rounded-lg">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Controle de Acesso
            </h4>
            <p className="text-sm text-muted-foreground m-0">Acesso estrito e monitorado aos bancos de dados apenas por pessoal autorizado.</p>
          </div>
        </div>
      </section>
    </DocumentLayout>
  );
}
