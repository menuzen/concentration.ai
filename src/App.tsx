import React, { useState } from "react";
import WelcomeStep from "./WelcomeStep";
import IdentityVoiceStep from "./IdentityVoiceStep";

function App() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#18162a] text-white">
      {step === 0 ? (
        <WelcomeStep name={name} setName={setName} onContinue={() => setStep(1)} />
      ) : (
        <IdentityVoiceStep name={name} setName={setName} />
      )}
    </div>
  );
}

export default App;
