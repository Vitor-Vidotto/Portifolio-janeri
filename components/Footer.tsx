// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-700">
        © {new Date().getFullYear()} Ana Beatriz Phols Janeri. Todos os direitos reservados.
        Contato - contatoanaphols@gmail.com - (15) 99168-2916
      </div>
    </footer>
  );
}
