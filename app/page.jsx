
import { Button } from "@/components/ui/button";
import { LogIn, Bell, Rabbit, Shield,  } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const user = null;

  const products = [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];


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

        
        <Button
          variant="default"
          size="sm"
          className="bg-orange-500 hover:bg-orange-600 gap-2" 
        > 

         <LogIn className="w-4 h-4" />
         Sign In
        </Button>
      </div>
    </header>

    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-sm font-medium mb-6">
        Made with Magic❤️ from  Musoso</div>

        
        <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Track Prices Drop</h2>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Track prices effortlessly with Deal Drop. Get instant alerts on price drops and snag the best deals on your favorite products across top e-commerce sites.
        </p>

        /* Add Product Form */
        
      </div>

    </section>
  </main>
  );
}
