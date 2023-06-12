import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl flex items-center gap-2">
        <div className="h-7 w-7 bg-orange-500 rounded-full" /> Hello
      </h1>
    </main>
  );
}
