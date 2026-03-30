export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-8 border-t border-zinc-800">
      {/* Esse 'max-w-6xl mx-auto' é o segredo para centralizar o conteúdo */}
      <div className="max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 px-10!">
        
        {/* Lado Esquerdo: Quem Somos */}
        <div className="space-y-4 pl-8!">
          <h3 className="text-white font-bold text-xl tracking-wide uppercase">
            Quem Somos
          </h3>
          <p className="text-sm leading-relaxed font-sans opacity-80">
            Gênios de TI moggadores de beta em impressões 3D de alta 
            precisão e acessórios para makers. Transformando ideias 
            em realidade desde semana passada.
          </p>
        </div>
    
        {/* Lado Direito: Contato */}
        <div className="md:text-right space-y-4">
          <h3 className="text-white font-bold text-xl tracking-wide uppercase">
            Contato
          </h3>
          <ul className="text-sm space-y-2 font-mono">
            <li>
              <span className="text-white">Email:</span> suporte@loja3d.com.br
            </li>
            <li>
              <span className="text-white">WhatsApp:</span> (44) 99999-9999
            </li>
          </ul>
        </div>

      </div>

      {/* Linha de Copyright bem fininha e centralizada */}
      <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">
          © 2026 Loja de Impressão 3D - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}