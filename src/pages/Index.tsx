const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/20 blur-[150px] animate-pulse-glow" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 
          className="text-primary font-bold text-2xl md:text-3xl tracking-tight mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Oscilatus
        </h2>
        
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Coming Soon
        </h1>
        
        <div 
          className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full opacity-0 animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        />
        
        <p 
          className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          We're building something amazing. Stay tuned.
        </p>
      </div>
    </div>
  );
};

export default Index;