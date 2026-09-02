import React from "react";
import { SlidersHorizontal, ShieldCheck, Target, Rocket } from "lucide-react";
import { Card } from "@/components/ui/Card";

const trustPillars = [
  {
    title: "Customizable by Design",
    description:
      "Learning structure, access models, and platform experience can be aligned with the way your organization operates.",
    icon: <SlidersHorizontal className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: "Role-Based Access",
    description:
      "Administrative and learner experiences are separated around organizational responsibilities and access boundaries.",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: "Competency-Oriented",
    description:
      "Track learning progress and practical evaluation around meaningful competency outcomes, not simply content consumption.",
    icon: <Target className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: "Implementation-Focused",
    description:
      "From discovery through deployment, the implementation process is structured around your organization's actual learning requirements.",
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
  },
];

export function TrustAssurance() {
  return (
    <div className="pt-12 space-y-6 text-left">
      <div className="border-t border-slate-800/80 pt-12 pb-4">
        <h3 className="text-h3 text-slate-100 font-bold">
          Product Assurance Principles
        </h3>
        <p className="text-body-small text-slate-400 mt-1">
          EduFlex dirancang dengan empat prinsip keandalan produk kelas enterprise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPillars.map((pillar) => (
          <Card
            key={pillar.title}
            variant="default"
            hover
            className="p-6 space-y-4 border border-slate-800/80 bg-slate-900/50 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 shadow-subtle">
                {pillar.icon}
              </div>
              <h4 className="text-h3 text-slate-100 font-semibold">
                {pillar.title}
              </h4>
              <p className="text-body-small text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
