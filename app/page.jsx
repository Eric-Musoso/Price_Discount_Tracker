import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LogIn } from "lucide-react";

export default function Home() {
  return( <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50">
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 ">
      <div className="max-w-7xl mx-auto w-full px-4 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image src={"/dealdrop_logo.jpg"} alt="Deal Drop Logo"
          width={600}
          height={200}
          className="h-10 w-auto"
          />
        </div>

        {/* Sign In Button */}
        <button
          variant="default"
          size="sm"
          className="bg-orange-500 hover:bg-orange-600 gap-2" 
        > 

          < LogIn className="w-4 h-4" />
           Sign In
          </button>
      </div>
    </header>
  </main>
  );
}
