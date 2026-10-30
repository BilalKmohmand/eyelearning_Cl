"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

interface FormState {
  parentName: string;
  childName: string;
  grade: string;
  email: string;
  telephone: string;
  program: string;
  preferredTime: string;
  consent: boolean;
  location: string;
}

interface FormErrors {
  parentName?: string;
  childName?: string;
  grade?: string;
  email?: string;
  telephone?: string;
  program?: string;
  consent?: string;
}

export function ConsultationForm({ id = "consultation-form" }: { id?: string }) {
  const [formData, setFormData] = useState<FormState>({
    parentName: '',
    childName: '',
    grade: '',
    email: '',
    telephone: '',
    program: '',
    preferredTime: 'Afternoon',
    consent: false,
    location: 'Hicksville'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent name is required.';
    }
    if (!formData.childName.trim()) {
      errs.childName = 'Child name is required.';
    }
    if (!formData.grade) {
      errs.grade = 'Please select your child’s grade.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.telephone.trim()) {
      errs.telephone = 'Telephone number is required.';
    } else if (!/^[0-9+()\-.\s]{10,}$/.test(formData.telephone.trim())) {
      errs.telephone = 'Please enter a valid telephone number (at least 10 digits).';
    }
    if (!formData.program) {
      errs.program = 'Please select a program of interest.';
    }
    if (!formData.consent) {
      errs.consent = 'You must agree to the privacy policy to submit this request.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/consultation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || result.ok === false || result.success === false) {
        throw new Error(
          result.error ||
            `Server returned status ${response.status}`
        );
      }

      setSubmitSuccess(
        result.message ||
          'Thank you for booking with Eye Level Learning Center of Hicksville. Our instructional coordinator will call you to confirm your child’s free diagnostic level test.'
      );
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please call (516) 597-5300 or try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id={id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-xs font-semibold tracking-wider uppercase text-amber-600 mb-1">
          Direct Appointment Request
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Book a Free Level Test
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mb-8">
          Meet with our educational director at 760 S Broadway, Hicksville. We will conduct an individualized diagnostic evaluation to assess your child’s math and reading/writing starting point.
        </p>

        {submitSuccess ? (
          <div
            role="status"
            className="p-6 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 space-y-4"
          >
            <h3 className="text-lg font-bold text-slate-900">Consultation Request Received</h3>
            <p className="text-sm sm:text-base text-slate-700">{submitSuccess}</p>
            <div className="pt-2 border-t border-slate-200 text-sm text-slate-600">
              Need immediate confirmation? Call our center directly at{' '}
              <a href={`tel:${SITE.telephoneTel}`} className="text-amber-700 font-semibold underline">
                {SITE.telephone}
              </a>
              .
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmitSuccess(null);
                setFormData({
                  parentName: '',
                  childName: '',
                  grade: '',
                  email: '',
                  telephone: '',
                  program: '',
                  preferredTime: 'Afternoon',
                  consent: false,
                  location: 'Hicksville'
                });
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {submitError && (
              <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                {submitError}
              </div>
            )}

            {/* Hidden Location Field fixed to Hicksville */}
            <input type="hidden" name="location" value="Hicksville" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-slate-900 mb-1">
                  Parent Full Name <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  aria-invalid={!!errors.parentName}
                  aria-describedby={errors.parentName ? 'parentName-error' : undefined}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="e.g., Jennifer Smith"
                  required
                />
                {errors.parentName && (
                  <p id="parentName-error" className="mt-1 text-xs text-red-600">
                    {errors.parentName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-slate-900 mb-1">
                  Child Full Name <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  aria-invalid={!!errors.childName}
                  aria-describedby={errors.childName ? 'childName-error' : undefined}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="e.g., Ethan Smith"
                  required
                />
                {errors.childName && (
                  <p id="childName-error" className="mt-1 text-xs text-red-600">
                    {errors.childName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-slate-900 mb-1">
                  Child’s Grade <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  aria-invalid={!!errors.grade}
                  aria-describedby={errors.grade ? 'grade-error' : undefined}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  required
                >
                  <option value="">Select Grade Level</option>
                  <option value="Pre-K">Pre-K</option>
                  <option value="Kindergarten">Kindergarten</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
                {errors.grade && (
                  <p id="grade-error" className="mt-1 text-xs text-red-600">
                    {errors.grade}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-slate-900 mb-1">
                  Program of Interest <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  aria-invalid={!!errors.program}
                  aria-describedby={errors.program ? 'program-error' : undefined}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  required
                >
                  <option value="">Select Program</option>
                  <option value="Both Math and English">Both Math &amp; English (Under One Roof)</option>
                  <option value="Eye Level Math">Eye Level Math (Arithmetic &amp; Critical Thinking)</option>
                  <option value="Eye Level English">Eye Level English (Reading &amp; 4-Domain Writing)</option>
                  <option value="Summit of Math">Summit of Math (Secondary Curriculum)</option>
                </select>
                {errors.program && (
                  <p id="program-error" className="mt-1 text-xs text-red-600">
                    {errors.program}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">
                  Email Address <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="name@example.com"
                  required
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-slate-900 mb-1">
                  Telephone Number <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  aria-invalid={!!errors.telephone}
                  aria-describedby={errors.telephone ? 'telephone-error' : undefined}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  placeholder="516-555-0123"
                  required
                />
                {errors.telephone && (
                  <p id="telephone-error" className="mt-1 text-xs text-red-600">
                    {errors.telephone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-900 mb-1">
                Preferred Contact Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
              >
                <option value="Afternoon (3:00 PM – 5:00 PM)">Afternoon (3:00 PM – 5:00 PM)</option>
                <option value="Early Evening (5:00 PM – 7:00 PM)">Early Evening (5:00 PM – 7:00 PM)</option>
                <option value="Saturday Morning (10:00 AM – 1:00 PM)">Saturday Morning (10:00 AM – 1:00 PM)</option>
                <option value="Anytime During Center Hours">Anytime During Center Hours</option>
              </select>
            </div>

            <div className="pt-2">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                  required
                />
                <label htmlFor="consent" className="text-xs sm:text-sm text-slate-600">
                  I consent to having Eye Level Learning Center of Hicksville contact me by phone or email regarding our free diagnostic level test and educational consultation. I understand that my information is kept confidential in accordance with the{' '}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-amber-700 underline font-medium hover:text-amber-800"
                  >
                    Privacy Policy
                  </button>
                  .
                </label>
              </div>
              {errors.consent && (
                <p id="consent-error" className="mt-1 text-xs text-red-600">
                  {errors.consent}
                </p>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-700 disabled:bg-slate-400 text-white font-semibold text-sm sm:text-base rounded-lg transition-colors shadow-sm min-h-[44px] flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting Request...' : 'Book Free Level Test and Consultation'}
              </button>
            </div>
          </form>
        )}

        {/* Privacy Policy Modal */}
        {showPrivacyModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-modal-title"
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
              <h3 id="privacy-modal-title" className="text-xl font-bold text-slate-900 mb-4">
                Privacy Policy
              </h3>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-6">
                <p>
                  Eye Level Learning Center of Hicksville is committed to protecting the privacy of parents and students. Information collected through this consultation form—including names, contact details, and student grade level—is used exclusively by our Hicksville center staff to schedule diagnostic assessments and provide educational recommendations.
                </p>
                <p>
                  We never sell, lease, or distribute family contact details to third parties or marketing affiliates. All data is stored securely and accessed only by authorized center staff.
                </p>
                <p>
                  For any privacy questions or to update your contact preferences, contact our center at {SITE.telephone} or visit us at 760 S Broadway, Hicksville, NY 11801.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="w-full py-2.5 px-4 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Close Privacy Policy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
