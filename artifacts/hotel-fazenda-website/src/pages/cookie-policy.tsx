import DocumentLayout from "@/components/layout/DocumentLayout";

export default function CookiePolicy() {
  const toc = [
    { id: "o-que-sao", label: "O Que São" },
    { id: "tipos", label: "Tipos de Cookies" },
    { id: "finalidade", label: "Finalidade" },
    { id: "controle", label: "Controle" },
  ];

  return (
    <DocumentLayout 
      title="Política de Cookies" 
      tableOfContents={toc}
    >
      <section id="o-que-sao" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">O QUE SÃO</h2>
        <p>Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, smartphone ou tablet) quando você acessa nosso aplicativo ou site. Eles ajudam a lembrar de suas preferências e a melhorar sua experiência de navegação.</p>
      </section>

      <section id="tipos" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">TIPOS</h2>
        <p>Nós utilizamos as seguintes categorias de cookies:</p>
        <ul>
          <li><strong>Essenciais:</strong> Necessários para o funcionamento básico do aplicativo.</li>
          <li><strong>Analíticos:</strong> Ajudam-nos a entender como os usuários interagem com o aplicativo.</li>
          <li><strong>Funcionais:</strong> Permitem que o aplicativo lembre das escolhas que você fez.</li>
          <li><strong>Marketing:</strong> Utilizados para fornecer anúncios mais relevantes aos seus interesses.</li>
        </ul>
      </section>

      <section id="finalidade" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">FINALIDADE</h2>
        <p>Os cookies são utilizados para as seguintes finalidades:</p>
        <ul>
          <li>Garantir o <strong>Funcionamento</strong> adequado de todas as áreas do aplicativo;</li>
          <li>Coletar <strong>Estatísticas</strong> anônimas para melhoria contínua;</li>
          <li>Oferecer <strong>Personalização</strong> da sua experiência baseada em suas interações passadas.</li>
        </ul>
      </section>

      <section id="controle" className="scroll-mt-32 mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border/40 pb-2">CONTROLE</h2>
        <p>Você tem o direito de escolher se aceita ou recusa o uso de cookies não essenciais. Você pode <strong>desativar cookies</strong> diretamente nas configurações do seu dispositivo ou navegador web a qualquer momento.</p>
        <p className="mt-4 p-4 bg-muted/30 rounded-lg text-sm border border-border/40">
          Nota: A desativação de cookies essenciais ou funcionais pode afetar negativamente o funcionamento de algumas áreas do aplicativo.
        </p>
      </section>
    </DocumentLayout>
  );
}
