import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-4">
        <AlertCircle className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-404-title">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Link href="/" className="text-primary hover:underline font-medium" data-testid="link-home">
          ← Voltar ao início
        </Link>
      </div>
    </div>
  );
}
