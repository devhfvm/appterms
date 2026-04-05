import { motion } from "framer-motion";

export default function DocumentLayout({ 
  title, 
  date, 
  children,
  tableOfContents
}: { 
  title: string; 
  date?: string; 
  children: React.ReactNode;
  tableOfContents?: { id: string; label: string }[];
}) {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="mb-12 md:mb-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-testid="heading-document-title">
            {title}
          </h1>
          {date && (
            <p className="text-muted-foreground text-lg">
              Última atualização: {date}
            </p>
          )}
          <div className="w-24 h-1 bg-primary/50 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 relative items-start">
          {tableOfContents && tableOfContents.length > 0 && (
            <motion.aside 
              className="hidden lg:block w-72 shrink-0 sticky top-28 self-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card/30 border border-border/40 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                  Índice
                </h3>
                <nav className="flex flex-col space-y-3 text-sm">
                  {tableOfContents.map((item) => (
                    <a 
                      key={item.id} 
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>
          )}

          <motion.div 
            className="flex-1 prose prose-invert prose-green max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
