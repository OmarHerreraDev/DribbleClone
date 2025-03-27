
'use client'
import { useState } from 'react';
import Banner from "@/components/Banner";
import Rg from "@/components/Rg";
import Rgform from "@/components/Rgform";

export default function Register() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sección del Banner (25%) */}
      <div className="w-3/12 bg-black">
        <Banner />
      </div>

      {/* Sección del Formulario (75%) */}
      <div className="w-9/12 bg-white flex items-start justify-center relative left-36 flex-col">
        {!showForm ? (
          <Rg onContinueClick={() => setShowForm(true)} />
        ) : (
          <Rgform onBackClick={() => setShowForm(false)} />
        )}
      </div>
    </div>
  );
}

