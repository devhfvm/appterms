import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, FileText, Cookie, Smartphone, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const logoPath = "/assets/logo-branco_1775374970203.png";
const screen1 = "/assets/Screenshot_2026-04-05_at_03.45.40_1775375176376.png";
const screen2 = "/assets/Screenshot_2026-04-05_at_03.45.55_1775375176375.png";
const screen3 = "/assets/Screenshot_2026-04-05_at_03.45.24_1775375176376.png";
const screen4 = "/assets/Screenshot_2026-04-05_at_03.45.05_1775375176376.png";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden flex items-center min-h-[80vh]">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.img 
              src={logoPath} 
              alt="Hotel Fazenda Vale da Mantiqueira" 
              className="h-24 md:h-32 mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              variants={fadeIn}
            />
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
              variants={fadeIn}
            >
              Seu hotel na <span className="text-primary relative inline-block">
                palma da mão
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 -z-10 rounded-full"></span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
              variants={fadeIn}
            >
              Descubra atrações, consulte o mapa e gerencie sua estadia com o nosso aplicativo oficial. Baixe agora e eleve sua experiência na natureza.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
              variants={fadeIn}
            >
              <Button size="lg" className="h-14 px-8 text-lg font-medium gap-2 group hover-elevate">
                <Download className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium gap-2 group hover-elevate">
                <Download className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Google Play
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore a fazenda</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo o que você precisa saber sobre as nossas atrações e serviços em uma interface intuitiva.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="w-56 md:w-60 relative rounded-[2rem] overflow-hidden border-[6px] border-border/50 shadow-2xl shadow-black/50"
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              data-testid="img-screenshot-home"
            >
              <img src={screen1} alt="Tela inicial do app" className="w-full h-auto object-cover" />
            </motion.div>
            <motion.div 
              className="w-56 md:w-60 relative rounded-[2rem] overflow-hidden border-[6px] border-border/50 shadow-2xl shadow-black/50 z-10 md:-translate-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              data-testid="img-screenshot-attractions"
            >
              <img src={screen2} alt="Tela de atrações do app" className="w-full h-auto object-cover" />
            </motion.div>
            <motion.div 
              className="w-56 md:w-60 relative rounded-[2rem] overflow-hidden border-[6px] border-border/50 shadow-2xl shadow-black/50 z-10 md:-translate-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              data-testid="img-screenshot-attractions-2"
            >
              <img src={screen3} alt="Tela de atrações do app" className="w-full h-auto object-cover" />
            </motion.div>
            <motion.div 
              className="w-56 md:w-60 relative rounded-[2rem] overflow-hidden border-[6px] border-border/50 shadow-2xl shadow-black/50"
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              data-testid="img-screenshot-map"
            >
              <img src={screen4} alt="Tela do mapa do app" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal Links Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Informações Legais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparência e segurança para a sua estadia e uso do aplicativo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/politica-de-privacidade">
              <Card className="h-full border-border/40 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group cursor-pointer hover-elevate">
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Privacidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Como coletamos, usamos e protegemos seus dados pessoais de acordo com a LGPD.
                  </CardDescription>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Ler documento <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/termos-de-uso">
              <Card className="h-full border-border/40 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group cursor-pointer hover-elevate">
                <CardHeader>
                  <FileText className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Termos de Uso</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Regras e diretrizes para a utilização do nosso aplicativo e serviços.
                  </CardDescription>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Ler documento <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/politica-de-cookies">
              <Card className="h-full border-border/40 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group cursor-pointer hover-elevate">
                <CardHeader>
                  <Cookie className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Informações sobre o uso de cookies e tecnologias de rastreamento similares.
                  </CardDescription>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Ler documento <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/app-store-info">
              <Card className="h-full border-border/40 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group cursor-pointer hover-elevate">
                <CardHeader>
                  <Smartphone className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">App Store Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Resumo de privacidade e segurança de dados para as lojas de aplicativos.
                  </CardDescription>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Ler documento <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
