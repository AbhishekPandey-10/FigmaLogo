import { Logo } from './components/Logo';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <Logo />
      </div>
    </div>
  );
}