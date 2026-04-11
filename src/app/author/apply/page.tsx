"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input, Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Check, Upload, ChevronRight, CheckCircle } from "lucide-react";
import { GENRES } from "@/lib/utils";

const STEPS = [
  { id: 1, label: "Personal Info" },
  { id: 2, label: "ID Verification" },
  { id: 3, label: "Payment Details" },
  { id: 4, label: "Agreement" },
  { id: 5, label: "Review & Submit" },
];

const NIGERIAN_STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
  "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT","Gombe","Imo",
  "Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa",
  "Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba",
  "Yobe","Zamfara",
];

const BANKS = [
  "Access Bank","Citibank","Ecobank","Fidelity Bank","First Bank","FCMB",
  "GTBank","Heritage Bank","Keystone Bank","Opay","Palmpay","Polaris Bank",
  "Providus Bank","Stanbic IBTC","Sterling Bank","UBA","Union Bank",
  "Unity Bank","VFD","Wema Bank","Zenith Bank",
];

const CONTRACT_TEXT = `CHAPTR AUTHOR AGREEMENT

This Author Agreement ("Agreement") is entered into between Chaptr Technologies Ltd ("Platform") and the Author ("You").

1. CONTENT OWNERSHIP
You retain full ownership of all creative content you publish on Chaptr. By publishing, you grant Chaptr a non-exclusive, royalty-free licence to display, distribute, and promote your work on the Platform.

2. REVENUE SHARE
Authors earn 70% of subscription revenue attributable to their content, calculated monthly based on reading session duration relative to all authors. Tips are paid at 100% to the author.

3. PAYOUT SCHEDULE
Payouts are processed on the 15th of each month for the preceding month's earnings. Minimum payout threshold is ₦5,000 or $10 USD.

4. CONTENT STANDARDS
Authors agree to publish original work. Plagiarism, hate speech, or content violating Nigerian law will result in immediate account suspension and forfeiture of earnings.

5. PLATFORM RIGHTS
Chaptr reserves the right to review, approve, or reject any submitted content. Rejection decisions will be communicated with reasons.

6. TERMINATION
Either party may terminate this agreement with 30 days written notice. Upon termination, your content will be unpublished and your final earnings paid within 60 days.`;

export default function AuthorApplyPage() {
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [idUploaded, setIdUploaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("NGN");

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => { setUploading(false); setIdUploaded(true); }, 1500);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 2000);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="max-w-lg mx-auto px-6 py-24 text-center">
          <div className="w-20 h-20 bg-[#FFF7ED] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-[#F97316]" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#111827] mb-3">Application submitted!</h1>
          <p className="text-[#6B7280] mb-2">Thank you for applying to publish on Chaptr.</p>
          <p className="text-sm text-[#9CA3AF] mb-8">
            Our team will review your application within 48 hours. You&apos;ll receive an email notification once a decision has been made.
          </p>
          <Button onClick={() => window.location.href = "/"} variant="outline">Return to homepage</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-bold text-[#111827] mb-2">Apply to publish</h1>
          <p className="text-[#6B7280] text-sm">Join hundreds of authors earning from their craft on Chaptr.</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center mb-10 overflow-x-auto pb-2">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step > s.id
                      ? "bg-[#F97316] text-white"
                      : step === s.id
                      ? "bg-[#111827] text-white"
                      : "bg-[#F3F4F6] text-[#9CA3AF]"
                  }`}
                >
                  {step > s.id ? <Check size={12} /> : s.id}
                </div>
                <span className={`text-xs mt-1 whitespace-nowrap ${step === s.id ? "text-[#111827] font-medium" : "text-[#9CA3AF]"}`}>
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`h-px w-12 sm:w-20 mx-1 mb-4 transition-colors ${step > s.id ? "bg-[#F97316]" : "bg-[#E5E7EB]"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white border border-[#F3F4F6] rounded-xl p-8">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-[#111827] mb-5">Personal information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label="Full legal name" placeholder="As on your government ID" required />
                <Input label="Email address" type="email" placeholder="you@example.com" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label="Phone number" type="tel" placeholder="+234 800 000 0000" required />
                <Select
                  label="State of residence"
                  options={[{ value: "", label: "Select state" }, ...NIGERIAN_STATES.map(s => ({ value: s, label: s }))]}
                />
              </div>
              <Textarea label="Short bio" placeholder="Tell readers a bit about yourself (max 300 characters)..." rows={4} />
              <Select
                label="Primary genre"
                options={[{ value: "", label: "Select genre" }, ...GENRES.map(g => ({ value: g, label: g }))]}
              />
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-[#111827] mb-2">ID Verification</h2>
              <p className="text-sm text-[#6B7280] mb-6">
                We verify all authors personally to maintain platform quality and trust. Your ID is stored securely and never shared publicly.
              </p>
              <Select
                label="ID type"
                options={[
                  { value: "", label: "Select ID type" },
                  { value: "nin", label: "NIN Slip" },
                  { value: "passport", label: "International Passport" },
                  { value: "license", label: "Driver's License" },
                ]}
              />
              <div>
                <p className="text-sm font-medium text-[#111827] mb-3">Upload ID document</p>
                {idUploaded ? (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm text-green-700 font-medium">ID document uploaded successfully</span>
                  </div>
                ) : (
                  <div
                    className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 text-center hover:border-[#F97316] transition-colors cursor-pointer"
                    onClick={handleUpload}
                  >
                    {uploading ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 border-2 border-[#F97316] border-t-transparent rounded-full animate-spin" />
                        <p className="text-sm text-[#6B7280]">Uploading...</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={24} className="text-[#9CA3AF]" />
                        <p className="text-sm font-medium text-[#111827]">Click to upload</p>
                        <p className="text-xs text-[#9CA3AF]">JPG, PNG or PDF · Max 5MB</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-[#111827] mb-2">Payment details</h2>
              <p className="text-sm text-[#6B7280] mb-5">Where should we send your earnings?</p>
              <Select
                label="Preferred payout currency"
                options={[{ value: "NGN", label: "Nigerian Naira (₦)" }, { value: "USD", label: "US Dollar ($)" }]}
                onChange={(e) => setCurrency(e.target.value)}
              />
              <Select
                label="Bank name"
                options={[{ value: "", label: "Select bank" }, ...BANKS.map(b => ({ value: b, label: b }))]}
              />
              <Input label="Account number" placeholder="10-digit account number" maxLength={10} />
              <Input label="Account name" placeholder="Will auto-verify" />
              {currency === "USD" && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 space-y-4">
                  <p className="text-sm font-semibold text-blue-800">Domiciliary account details</p>
                  <Input label="DOM account number" placeholder="Domiciliary account number" />
                  <Input label="DOM bank name" placeholder="Bank holding domiciliary account" />
                  <Input label="Swift/BIC code" placeholder="e.g. GTBINGLA" />
                </div>
              )}
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div>
              <h2 className="font-serif text-xl font-bold text-[#111827] mb-5">Author agreement</h2>
              <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg p-6 max-h-72 overflow-y-auto mb-6">
                <pre className="text-xs text-[#374151] leading-relaxed whitespace-pre-wrap font-sans">
                  {CONTRACT_TEXT}
                </pre>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#F97316]"
                />
                <span className="text-sm text-[#374151]">
                  I have read and agree to the Chaptr Author Agreement, including the revenue share terms, payout schedule, and content ownership policy.
                </span>
              </label>
            </div>
          )}

          {/* Step 5 — Review */}
          {step === 5 && (
            <div>
              <h2 className="font-serif text-xl font-bold text-[#111827] mb-6">Review your application</h2>
              <div className="space-y-4">
                {[
                  { label: "Full name", value: "Adaeze Okoye" },
                  { label: "Email", value: "adaeze@example.com" },
                  { label: "Phone", value: "+234 801 234 5678" },
                  { label: "State", value: "Lagos" },
                  { label: "Primary genre", value: "Romance" },
                  { label: "ID type", value: "International Passport" },
                  { label: "Bank", value: "GTBank" },
                  { label: "Account number", value: "••••••7291" },
                  { label: "Payout currency", value: "USD" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between py-2.5 border-b border-[#F3F4F6] last:border-0">
                    <span className="text-sm text-[#6B7280]">{label}</span>
                    <span className="text-sm font-medium text-[#111827]">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#FFF7ED] border border-[#FED7AA] rounded-lg">
                <p className="text-xs text-[#6B7280]">
                  By submitting, you confirm all information is accurate and agree to the Chaptr Author Agreement. You&apos;ll receive an email once your application is reviewed (within 48 hours).
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#F3F4F6]">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-sm text-[#6B7280] hover:text-[#111827] font-medium transition-colors"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={step === 4 && !agreed}
              >
                Continue
                <ChevronRight size={16} />
              </Button>
            ) : (
              <Button onClick={handleSubmit} loading={loading}>
                Submit Application
              </Button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
