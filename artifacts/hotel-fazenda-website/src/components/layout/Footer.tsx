import { Link } from "wouter";

const logoPath = "/assets/logo-branco_1775374970203.png";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <img src={logoPath} alt="Hotel Fazenda Vale da Mantiqueira" className="h-12 w-auto mb-6 opacity-80 hover:opacity-100 transition-opacity" />
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Um refúgio de luxo nas montanhas do Sul de Minas. Conecte-se com a natureza e aproveite momentos inesquecíveis.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-privacy">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-terms">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-cookies">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/app-store-info" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-app-info">
                  App Info
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Hotel Fazenda Vale da Mantiqueira LTDA</li>
              <li>CNPJ: 04.582.509/0001-40</li>
              <li>Fazenda Sertãozinho S/N, Virgínia – MG</li>
              <li>
                <a href="mailto:dev@valedamantiqueira.com.br" className="hover:text-primary transition-colors" data-testid="footer-link-email">
                  dev@valedamantiqueira.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Hotel Fazenda Vale da Mantiqueira LTDA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right" data-testid="footer-last-updated">
            Última atualização: 05 de abril de 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
