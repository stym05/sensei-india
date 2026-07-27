"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { Country, State } from "country-state-city";

const fieldStyles =
  "w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-normal text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400";

const learningModes = [
  "Online — Worldwide",
  "Home Tutor",
  "At Tutor's Location",
  "At an Institute",
  "Hybrid",
] as const;

const contactMethods = [
  "Email",
  "WhatsApp",
  "Phone Call",
  "Video Consultation",
] as const;

const educationBoardGroups = [
  {
    label: "Indian National Boards",
    options: [
      "CBSE — Central Board of Secondary Education",
      "CISCE — ICSE",
      "CISCE — ISC",
      "NIOS — National Institute of Open Schooling",
    ],
  },
  {
    label: "Indian State and UT Curricula",
    options: [
      "State Curriculum — Andhra Pradesh",
      "State Curriculum — Arunachal Pradesh",
      "State Curriculum — Assam",
      "State Curriculum — Bihar",
      "State Curriculum — Chhattisgarh",
      "State Curriculum — Goa",
      "State Curriculum — Gujarat",
      "State Curriculum — Haryana",
      "State Curriculum — Himachal Pradesh",
      "State Curriculum — Jharkhand",
      "State Curriculum — Karnataka",
      "State Curriculum — Kerala",
      "State Curriculum — Madhya Pradesh",
      "State Curriculum — Maharashtra",
      "State Curriculum — Manipur",
      "State Curriculum — Meghalaya",
      "State Curriculum — Mizoram",
      "State Curriculum — Nagaland",
      "State Curriculum — Odisha",
      "State Curriculum — Punjab",
      "State Curriculum — Rajasthan",
      "State Curriculum — Sikkim",
      "State Curriculum — Tamil Nadu",
      "State Curriculum — Telangana",
      "State Curriculum — Tripura",
      "State Curriculum — Uttar Pradesh",
      "State Curriculum — Uttarakhand",
      "State Curriculum — West Bengal",
      "UT Curriculum — Andaman and Nicobar Islands",
      "UT Curriculum — Chandigarh",
      "UT Curriculum — Dadra and Nagar Haveli and Daman and Diu",
      "UT Curriculum — Delhi",
      "UT Curriculum — Jammu and Kashmir",
      "UT Curriculum — Ladakh",
      "UT Curriculum — Lakshadweep",
      "UT Curriculum — Puducherry",
    ],
  },
  {
    label: "International Curricula",
    options: [
      "Cambridge Primary",
      "Cambridge Lower Secondary",
      "Cambridge IGCSE",
      "Cambridge O Level",
      "Cambridge International AS & A Level",
      "IB — Primary Years Programme",
      "IB — Middle Years Programme",
      "IB — Diploma Programme",
      "IB — Career-related Programme",
      "Pearson Edexcel International GCSE",
      "Pearson Edexcel International A Level",
      "British Curriculum — GCSE",
      "British Curriculum — A Levels",
      "American Curriculum — K–12",
      "Advanced Placement — AP",
      "Australian Curriculum",
      "Canadian Curriculum",
      "European Baccalaureate",
      "French Baccalaureate",
      "Singapore Curriculum",
      "International Primary Curriculum",
      "International Middle Years Curriculum",
      "Homeschooling Curriculum",
    ],
  },
  {
    label: "Other",
    options: [
      "Not applicable — College or professional course",
      "Other board or curriculum",
    ],
  },
] as const;

const courseGroups = [
  {
    label: "School Tuition",
    options: [
      "Pre-primary and Early Learning",
      "Primary School — Grades 1 to 5",
      "Middle School — Grades 6 to 8",
      "Secondary School — Grades 9 and 10",
      "Senior Secondary — Grades 11 and 12",
      "Mathematics Tuition",
      "Science Tuition",
      "Physics Tuition",
      "Chemistry Tuition",
      "Biology Tuition",
      "English Tuition",
      "Hindi Tuition",
      "Social Science Tuition",
      "Computer Science Tuition",
      "Accountancy Tuition",
      "Business Studies Tuition",
      "Economics Tuition",
      "All-subject School Tuition",
      "School Homework and Assignment Support",
    ],
  },
  {
    label: "Engineering, Medical and University Entrance",
    options: [
      "JEE Main",
      "JEE Advanced",
      "NEET UG",
      "CUET UG",
      "BITSAT",
      "VITEEE",
      "MET — Manipal Entrance Test",
      "COMEDK UGET",
      "MHT CET",
      "WBJEE",
      "KCET",
      "NDA Entrance Examination",
      "NATA",
      "IISER Aptitude Test",
      "NEST",
    ],
  },
  /*{
    label: "Law, Management and Design Entrance",
    options: [
      "CLAT",
      "AILET",
      "LSAT India Preparation",
      "IPMAT",
      "CAT",
      "XAT",
      "MAT",
      "CMAT",
      "NMAT",
      "SNAP",
      "NIFT Entrance",
      "NID DAT",
      "UCEED",
      "CEED",
      "Hotel Management Entrance Preparation",
    ],
  },*/
  /*{
    label: "Government and Competitive Examinations",
    options: [
      "UPSC Civil Services",
      "State Public Service Commission Exams",
      "SSC CGL",
      "SSC CHSL",
      "SSC MTS",
      "Bank PO",
      "Bank Clerk",
      "IBPS Exams",
      "SBI Exams",
      "Railway Recruitment Exams",
      "Defence Entrance Exams",
      "Teaching Eligibility Test — CTET",
      "State Teacher Eligibility Test",
      "UGC NET",
      "GATE",
    ],
  },
  {
    label: "International Tests and Study Abroad",
    options: [
      "IELTS",
      "TOEFL",
      "PTE Academic",
      "Duolingo English Test",
      "SAT",
      "ACT",
      "GRE",
      "GMAT",
      "Study Abroad Counselling",
      "University Application Support",
    ],
  },
  {
    label: "Undergraduate Courses",
    options: [
      "Bachelor of Arts — BA",
      "Bachelor of Science — BSc",
      "Bachelor of Commerce — BCom",
      "Bachelor of Technology — BTech",
      "Bachelor of Engineering — BE",
      "Bachelor of Computer Applications — BCA",
      "Bachelor of Business Administration — BBA",
      "Bachelor of Architecture — BArch",
      "Bachelor of Design — BDes",
      "Bachelor of Fine Arts — BFA",
      "Bachelor of Laws — LLB",
      "Bachelor of Education — BEd",
      "Bachelor of Pharmacy — BPharm",
      "Bachelor of Nursing",
      "MBBS",
      "BDS",
      "Bachelor of Physiotherapy — BPT",
      "Bachelor of Agriculture — BSc Agriculture",
      "Hotel Management",
      "Mass Communication and Journalism",
    ],
  },
  {
    label: "Postgraduate Courses",
    options: [
      "Master of Arts — MA",
      "Master of Science — MSc",
      "Master of Commerce — MCom",
      "Master of Technology — MTech",
      "Master of Engineering — ME",
      "Master of Computer Applications — MCA",
      "Master of Business Administration — MBA",
      "Post Graduate Diploma in Management — PGDM",
      "Master of Laws — LLM",
      "Master of Education — MEd",
      "Master of Design — MDes",
      "Master of Public Health — MPH",
      "Postgraduate Entrance Preparation",
      "Research and Dissertation Support",
    ],
  },
  {
    label: "Professional Qualifications",
    options: [
      "Chartered Accountancy — CA Foundation",
      "Chartered Accountancy — CA Intermediate",
      "Chartered Accountancy — CA Final",
      "Company Secretary — CS",
      "Cost and Management Accountancy — CMA",
      "ACCA",
      "CFA",
      "Financial Risk Manager — FRM",
      "Actuarial Science",
      "Legal Studies and Judiciary Preparation",
      "Teacher Training and Certification",
    ],
  },*/
  {
    label: "Technology and Career Skills",
    options: [
      "Web Development",
      "Full-stack Development",
      "Frontend Development",
      "Backend Development",
      "Mobile App Development",
      "Python Programming",
      "Java Programming",
      "C and C++ Programming",
      "Data Science",
      "Data Analytics",
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "Cloud Computing",
      "DevOps",
      "UI/UX Design",
      "Graphic Design",
      "Digital Marketing",
      "Microsoft Excel",
      "Interview Preparation",
      "Resume and Career Guidance",
    ],
  },
  /*{
    label: "Languages and Creative Learning",
    options: [
      "Spoken English",
      "English Grammar",
      "Hindi Language",
      "French Language",
      "German Language",
      "Spanish Language",
      "Japanese Language",
      "Korean Language",
      "Arabic Language",
      "Mandarin Chinese",
      "Public Speaking",
      "Communication Skills",
      "Creative Writing",
      "Music",
      "Singing",
      "Musical Instruments",
      "Drawing and Painting",
      "Dance",
      "Yoga and Wellness",
    ],
  },*/
  {
    label: "Other",
    options: ["Other course or custom tutoring requirement"],
  },
] as const;

const countries = Country.getAllCountries().sort((first, second) =>
  first.name.localeCompare(second.name),
);

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const selectedCountry = useMemo(
    () => countries.find((country) => country.isoCode === countryCode),
    [countryCode],
  );

  const regions = useMemo(() => {
    if (!countryCode) {
      return [];
    }

    return State.getStatesOfCountry(countryCode).sort((first, second) =>
      first.name.localeCompare(second.name),
    );
  }, [countryCode]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const registrationData = Object.fromEntries(formData.entries());

    // Replace this with your API route or server action.
    console.log("Student registration:", registrationData);

    setSubmitted(true);
    setCountryCode("");
    setSelectedBoard("");
    setSelectedCourse("");
    form.reset();
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-5xl rounded-4xl border border-emerald-200 bg-white p-5 shadow-2xl shadow-emerald-100/60 sm:p-8">
        <div
          role="status"
          aria-live="polite"
          className="rounded-3xl bg-emerald-50 px-6 py-10 text-center sm:px-10"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-3xl font-bold text-white shadow-lg shadow-emerald-200">
            ✓
          </div>

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-700">
            Registration submitted
          </p>

          <h2 className="mt-2 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Your learning enquiry has been received
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Thank you for registering with Sensei India. Our team will review
            your location, curriculum, course and tutor preferences before
            contacting you with suitable learning options.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Submit another registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl rounded-4xl border border-slate-200 bg-white p-5 shadow-2xl shadow-sky-100/70 sm:p-8 lg:p-10">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-bold text-sky-700">
          <span aria-hidden="true">🌍</span>
          Worldwide student registration
        </div>

        <h2 className="mt-4 font-(family-name:--font-sora) text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          Find the right tutor for your learning goals
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          Students from any country can register with Sensei India. Share your
          curriculum, course, location and learning preferences to receive
          suitable tutor recommendations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <FormSectionHeading
            number="01"
            title="Student information"
            description="Basic contact information for the student or guardian."
          />
        </div>

        <FormField label="Student full name" htmlFor="student-name">
          <input
            id="student-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter the student's full name"
            className={fieldStyles}
          />
        </FormField>

        <FormField label="Email address" htmlFor="student-email">
          <input
            id="student-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="student@example.com"
            className={fieldStyles}
          />
        </FormField>

        <FormField label="Country of residence" htmlFor="student-country">
          <select
            id="student-country"
            name="country"
            required
            value={countryCode}
            onChange={(event) => setCountryCode(event.target.value)}
            className={fieldStyles}
          >
            <option value="" disabled>
              Select your country
            </option>

            {countries.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="State, province or region" htmlFor="student-region">
          <input
            key={countryCode}
            id="student-region"
            name="region"
            type="text"
            required
            list="student-region-options"
            disabled={!countryCode}
            autoComplete="address-level1"
            placeholder={
              countryCode
                ? "Enter or select your region"
                : "Select a country first"
            }
            className={fieldStyles}
          />

          <datalist id="student-region-options">
            {regions.map((region) => (
              <option key={region.isoCode} value={region.name} />
            ))}
          </datalist>
        </FormField>

        <FormField label="City" htmlFor="student-city">
          <input
            id="student-city"
            name="city"
            type="text"
            required
            autoComplete="address-level2"
            placeholder="Enter your city"
            className={fieldStyles}
          />
        </FormField>

        <FormField label="International phone number" htmlFor="student-phone">
          <div className="relative">
            {selectedCountry && (
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-slate-500">
                +{selectedCountry.phonecode}
              </span>
            )}

            <input
              key={countryCode}
              id="student-phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder={
                selectedCountry
                  ? "Enter phone number"
                  : "+91 98765 43210"
              }
              className={`${fieldStyles} ${
                selectedCountry ? "pl-16" : ""
              }`}
            />
          </div>

          <p className="text-xs leading-5 text-slate-500">
            Include the complete number that can receive calls or WhatsApp
            messages.
          </p>
        </FormField>

        <FormField label="Preferred contact method" htmlFor="contact-method">
          <select
            id="contact-method"
            name="contactMethod"
            required
            defaultValue=""
            className={fieldStyles}
          >
            <option value="" disabled>
              Select contact method
            </option>

            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Preferred teaching language" htmlFor="language">
          <input
            id="language"
            name="preferredLanguage"
            type="text"
            required
            placeholder="English, Hindi, French, Arabic..."
            className={fieldStyles}
          />
        </FormField>

        <div className="mt-4 md:col-span-2">
          <FormSectionHeading
            number="02"
            title="Academic information"
            description="Tell us about the student's present education level and curriculum."
          />
        </div>

        <FormField
          label="Current class or learning level"
          htmlFor="student-level"
        >
          <input
            id="student-level"
            name="level"
            type="text"
            required
            placeholder="Grade 10, Class 12, undergraduate, beginner..."
            className={fieldStyles}
          />
        </FormField>

        <FormField
          label="Board or educational curriculum"
          htmlFor="student-board"
        >
          <select
            id="student-board"
            name="board"
            required
            value={selectedBoard}
            onChange={(event) => setSelectedBoard(event.target.value)}
            className={fieldStyles}
          >
            <option value="" disabled>
              Select a board or curriculum
            </option>

            {educationBoardGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((board) => (
                  <option key={board} value={board}>
                    {board}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </FormField>

        {selectedBoard === "Other board or curriculum" && (
          <div className="md:col-span-2">
            <FormField
              label="Enter your board or curriculum"
              htmlFor="custom-board"
            >
              <input
                id="custom-board"
                name="customBoard"
                type="text"
                required
                placeholder="Enter the complete curriculum or board name"
                className={fieldStyles}
              />
            </FormField>
          </div>
        )}

        <div className="mt-4 md:col-span-2">
          <FormSectionHeading
            number="03"
            title="Course and tutor preferences"
            description="Choose what the student wants to study and how they prefer to learn."
          />
        </div>

        <FormField
          label="Course or training interest"
          htmlFor="student-course"
        >
          <select
            id="student-course"
            name="course"
            required
            value={selectedCourse}
            onChange={(event) => setSelectedCourse(event.target.value)}
            className={fieldStyles}
          >
            <option value="" disabled>
              Select a course
            </option>

            {courseGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </FormField>

        <FormField label="Preferred learning mode" htmlFor="learning-mode">
          <select
            id="learning-mode"
            name="mode"
            required
            defaultValue=""
            className={fieldStyles}
          >
            <option value="" disabled>
              Select a learning mode
            </option>

            {learningModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>

          <p className="text-xs leading-5 text-slate-500">
            In-person options depend on tutor availability in your location.
          </p>
        </FormField>

        {selectedCourse === "Other course or custom tutoring requirement" && (
          <div className="md:col-span-2">
            <FormField
              label="Enter your course or tutoring requirement"
              htmlFor="custom-course"
            >
              <input
                id="custom-course"
                name="customCourse"
                type="text"
                required
                placeholder="Describe the subject, course or skill you want to learn"
                className={fieldStyles}
              />
            </FormField>
          </div>
        )}

        <FormField
          label="Preferred class schedule"
          htmlFor="preferred-schedule"
        >
          <input
            id="preferred-schedule"
            name="preferredSchedule"
            type="text"
            required
            placeholder="Weekdays after 6 PM, weekends..."
            className={fieldStyles}
          />
        </FormField>

        <FormField label="Preferred time zone" htmlFor="student-timezone">
          <select
            key={countryCode}
            id="student-timezone"
            name="timeZone"
            required
            defaultValue={
              selectedCountry?.timezones?.[0]?.zoneName ?? ""
            }
            disabled={!selectedCountry}
            className={fieldStyles}
          >
            <option value="" disabled>
              {selectedCountry
                ? "Select your time zone"
                : "Select a country first"}
            </option>

            {selectedCountry?.timezones?.map((timeZone) => (
              <option key={timeZone.zoneName} value={timeZone.zoneName}>
                {timeZone.zoneName} — {timeZone.gmtOffsetName}
              </option>
            ))}
          </select>
        </FormField>

        <div className="grid gap-2 md:col-span-2">
          <label
            htmlFor="learning-goal"
            className="text-sm font-bold text-slate-800"
          >
            Learning goal or additional requirements
            <span className="ml-1 font-medium text-slate-400">
              (optional)
            </span>
          </label>

          <textarea
            id="learning-goal"
            name="message"
            rows={5}
            placeholder="Mention subjects, target exams, current difficulties, preferred tutor experience, budget or any special requirements."
            className={`${fieldStyles} min-h-36 resize-y`}
          />
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:col-span-2">
          <input
            id="registration-consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-sky-500 accent-sky-500 focus:ring-sky-500"
          />

          <label
            htmlFor="registration-consent"
            className="text-sm leading-6 text-slate-600"
          >
            I consent to being contacted by Sensei India regarding this
            registration and accept the{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-and-conditions"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800"
            >
              Terms &amp; Conditions
            </Link>
            .
          </label>
        </div>

        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-4 text-sm font-bold text-white shadow-md shadow-sky-200 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 sm:w-fit sm:justify-self-center md:col-span-2"
        >
          Submit Student Registration

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

        <p className="text-center text-xs leading-5 text-slate-500 md:col-span-2">
          Your information will only be used to process your course or tutor
          enquiry.
        </p>
      </form>
    </div>
  );
}

type FormFieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
};

function FormField({ label, htmlFor, children }: FormFieldProps) {
  return (
    <div className="grid content-start gap-2">
      <label htmlFor={htmlFor} className="text-sm font-bold text-slate-800">
        {label}
      </label>

      {children}
    </div>
  );
}

type FormSectionHeadingProps = {
  number: string;
  title: string;
  description: string;
};

function FormSectionHeading({
  number,
  title,
  description,
}: FormSectionHeadingProps) {
  return (
    <div className="flex gap-4 border-b border-slate-200 pb-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-100 text-xs font-extrabold text-sky-700">
        {number}
      </div>

      <div>
        <h3 className="font-(family-name:--font-sora) text-lg font-bold text-slate-950">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}