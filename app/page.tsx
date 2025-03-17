// app/page.tsx

import HelloWorld from "./components/HelloWorld";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <HelloWorld />
    </div>
  );
}