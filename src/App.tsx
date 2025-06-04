import React, { useState } from "react";
import WelcomeStep from "./components/WelcomeStep";
import IdentityVoiceStep from "./components/IdentityVoiceStep";
import ThinkingStyleStep from "./components/ThinkingStyleStep";
import WorkContextStep from "./components/WorkContextStep";
import EmotionalStyleStep from "./components/EmotionalStyleStep";
import WorkArchetypeStep from "./components/WorkArchetypeStep";
import OutputPreferencesStep from "./components/OutputPreferencesStep";
import BeliefsValuesStep from "./components/BeliefsValuesStep";
import PersonalMemoryStep from "./components/PersonalMemoryStep";
import BehaviorRitualsStep from "./components/BehaviorRitualsStep";
import PrivacySettingsStep from "./components/PrivacySettingsStep";
import PreviewStep from "./components/PreviewStep";

// Define the complete profile type
export interface Profile {
  identity_and_voice: {
    name: string;
    nickname: string;
    preferred_tone: number;
    energy_level: number;
    structure: string[];
    emoji_use: "none" | "light" | "expressive";
    phrases_to_use: string[];
    phrases_to_avoid: string[];
    humor_style: "none" | "dry" | "sarcastic" | "playful";
  };
  thinking_style: {
    reasoning_style: "first_principles" | "analogy" | "frameworks" | "narrative";
    decision_bias: "speed" | "certainty" | "gut" | "data";
    framing_preference: string;
    problem_solving_style: "strategic" | "practical" | "exploratory";
    likes_ai_to_challenge: boolean;
  };
  work_context_and_goals: {
    role: string;
    company: string;
    industry: string;
    tools_used: string[];
    current_project: string;
    weekly_workflow: string;
    blockers: string;
    milestones: string;
    work_upload: string;
  };
  emotional_style_and_motivation: {
    motivators: string[];
    energy_killers: string[];
    response_style_stressed: string;
    response_style_celebrating: string;
    response_style_stuck: string;
    emotional_nuance: boolean;
  };
  work_archetype_and_communication: {
    archetype: "visionary" | "builder" | "operator" | "explorer" | "coach";
    lead_or_support: "lead" | "support";
    collaboration_style: "fast_async" | "deep_sync" | "feedback_first";
    communication_style: "direct_blunt" | "clear_kind" | "soft_thoughtful" | "fast_minimal";
  };
  output_preferences: {
    tldr_preference: boolean;
    format_preference: "bullets" | "tables" | "paragraphs" | "frameworks";
    response_length: "short" | "medium" | "deep_dive";
    include_next_steps: boolean;
    recommendation_style: "alternatives" | "strong_recommendation";
  };
  beliefs_and_values: {
    core_values: string[];
    strong_opinions: string[];
    communication_avoidance: string[];
    dealbreakers: string[];
  };
  personal_memory_layer: {
    key_milestones: string[];
    ongoing_work: string[];
    personal_facts: string[];
    frequent_collaborators: string[];
    attached_files: string[];
    memory_tags: string[];
  };
  behavior_and_rituals: {
    ritual_preferences: string;
    productivity_style: string;
    ai_energy_mirroring: boolean;
    profile_update_frequency: "monthly" | "quarterly";
  };
  privacy_and_export_settings: {
    export_chatgpt: boolean;
    export_claude: boolean;
    export_json: boolean;
    redact_emotional: boolean;
    redact_memory: boolean;
    strip_names: boolean;
    export_presets: "stealth" | "writing_assistant" | "full_you";
  };
}

function App() {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<Profile>({
    identity_and_voice: {
      name: "",
      nickname: "",
      preferred_tone: 50,
      energy_level: 50,
      structure: [],
      emoji_use: "none",
      phrases_to_use: [],
      phrases_to_avoid: [],
      humor_style: "none"
    },
    thinking_style: {
      reasoning_style: "first_principles",
      decision_bias: "speed",
      framing_preference: "",
      problem_solving_style: "strategic",
      likes_ai_to_challenge: true
    },
    work_context_and_goals: {
      role: "",
      company: "",
      industry: "",
      tools_used: [],
      current_project: "",
      weekly_workflow: "",
      blockers: "",
      milestones: "",
      work_upload: ""
    },
    emotional_style_and_motivation: {
      motivators: [],
      energy_killers: [],
      response_style_stressed: "",
      response_style_celebrating: "",
      response_style_stuck: "",
      emotional_nuance: true
    },
    work_archetype_and_communication: {
      archetype: "visionary",
      lead_or_support: "lead",
      collaboration_style: "fast_async",
      communication_style: "direct_blunt"
    },
    output_preferences: {
      tldr_preference: true,
      format_preference: "bullets",
      response_length: "medium",
      include_next_steps: true,
      recommendation_style: "alternatives"
    },
    beliefs_and_values: {
      core_values: [],
      strong_opinions: [],
      communication_avoidance: [],
      dealbreakers: []
    },
    personal_memory_layer: {
      key_milestones: [],
      ongoing_work: [],
      personal_facts: [],
      frequent_collaborators: [],
      attached_files: [],
      memory_tags: []
    },
    behavior_and_rituals: {
      ritual_preferences: "",
      productivity_style: "",
      ai_energy_mirroring: true,
      profile_update_frequency: "monthly"
    },
    privacy_and_export_settings: {
      export_chatgpt: true,
      export_claude: true,
      export_json: true,
      redact_emotional: false,
      redact_memory: false,
      strip_names: false,
      export_presets: "full_you"
    }
  });

  const updateProfile = (section: keyof Profile, data: Partial<Profile[keyof Profile]>) => {
    setProfile(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <WelcomeStep onContinue={handleNext} />;
      case 1:
        return <IdentityVoiceStep 
          profile={profile.identity_and_voice} 
          updateProfile={(data) => updateProfile('identity_and_voice', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 2:
        return <ThinkingStyleStep 
          profile={profile.thinking_style}
          updateProfile={(data) => updateProfile('thinking_style', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 3:
        return <WorkContextStep 
          profile={profile.work_context_and_goals}
          updateProfile={(data) => updateProfile('work_context_and_goals', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 4:
        return <EmotionalStyleStep 
          profile={profile.emotional_style_and_motivation}
          updateProfile={(data) => updateProfile('emotional_style_and_motivation', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 5:
        return <WorkArchetypeStep 
          profile={profile.work_archetype_and_communication}
          updateProfile={(data) => updateProfile('work_archetype_and_communication', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 6:
        return <OutputPreferencesStep 
          profile={profile.output_preferences}
          updateProfile={(data) => updateProfile('output_preferences', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 7:
        return <BeliefsValuesStep 
          profile={profile.beliefs_and_values}
          updateProfile={(data) => updateProfile('beliefs_and_values', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 8:
        return <PersonalMemoryStep 
          profile={profile.personal_memory_layer}
          updateProfile={(data) => updateProfile('personal_memory_layer', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 9:
        return <BehaviorRitualsStep 
          profile={profile.behavior_and_rituals}
          updateProfile={(data) => updateProfile('behavior_and_rituals', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 10:
        return <PrivacySettingsStep 
          profile={profile.privacy_and_export_settings}
          updateProfile={(data) => updateProfile('privacy_and_export_settings', data)}
          onNext={handleNext}
          onBack={handleBack}
        />;
      case 11:
        return <PreviewStep 
          profile={profile}
          onBack={handleBack}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-20 flex flex-col items-center justify-center bg-[#18162a] text-white">
      {renderStep()}
    </div>
  );
}

export default App;
