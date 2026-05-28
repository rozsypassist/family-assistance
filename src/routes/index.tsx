import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Family Assistance Eligibility Check | Find Programs You Qualify For" },
      {
        name: "description",
        content:
          "Check your eligibility for Family Assistance programs in 60 seconds. One quick form. Discover what relief and benefits your family may qualify for.",
      },
      { property: "og:title", content: "Family Assistance Eligibility Check" },
      {
        property: "og:description",
        content:
          "Find out what Family Assistance programs your household may qualify for in under 60 seconds.",
      },
    ],
  }),
});

const CTA_LINK =
  "https://trksy.org/aff_c?offer_id=2298&aff_id=3866&source=C2FamilyAssist";

const testimonials = [
  {
    quote:
      "I didn't even know I qualified for any of these. Took me a couple of minutes and I found three programs my family could apply for.",
    name: "Brenda Halloway",
    location: "Toledo, OH",
  },
  {
    quote:
      "Honestly thought it would be complicated. It wasn't. Filled out the form on my lunch break and got pointed to assistance that's helping with our grocery bill.",
    name: "Marcus Whitfield",
    location: "Greenville, SC",
  },
  {
    quote:
      "We've been stretched thin since my husband cut back hours. Finding out about the programs we were eligible for has taken a real weight off.",
    name: "Patricia Nguyen",
    location: "Mesa, AZ",
  },
  {
    quote:
      "Simple, no nonsense. I appreciated that I didn't have to dig through ten different government websites to figure out what we qualified for.",
    name: "Daniel Kovac",
    location: "Erie, PA",
  },
  {
    quote:
      "I was skeptical at first but it was quick and straightforward. Found out about a child care benefit I had no idea existed.",
    name: "Latoya Briggs",
    location: "Jackson, MS",
  },
  {
    quote:
      "My sister told me to try it. Glad I did. Saved us a fair bit on monthly expenses once we got enrolled in what we qualified for.",
    name: "Robert Eisinger",
    location: "Spokane, WA",
  },
];

function CtaButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4";
  const styles =
    variant === "primary"
      ? "bg-[#1a5fb4] text-white hover:bg-[#174e94] focus:ring-[#1a5fb4]/30"
      : "bg-white text-[#1a5fb4] border-2 border-[#1a5fb4] hover:bg-[#f0f6ff] focus:ring-[#1a5fb4]/30";
  return (
    <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {children}
      <svg
        className="ml-2 h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#1a1a1a]">
      {/* Top notice bar */}
      <div className="w-full bg-[#1a5fb4] py-2 text-center text-xs font-medium text-white sm:text-sm">
        Family Assistance Eligibility Tool · Check what you qualify for in under 60 seconds
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-5 pt-12 pb-10 text-center sm:pt-16 sm:pb-14">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1a5fb4]/20 bg-white px-4 py-1.5 text-xs font-medium text-[#1a5fb4]">
          <span className="h-2 w-2 rounded-full bg-[#2ec27e]" />
          2025 Family Assistance programs available
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0d2c54] sm:text-5xl md:text-[3.25rem]">
          See What Family Assistance Programs You May Qualify For
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#3a3a3a]">
          One short form. Sixty seconds. Discover the benefit and relief programs your
          household may be eligible for — without sorting through endless government
          websites.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton>Check Eligibility</CtaButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { k: "60 sec", v: "Average completion time" },
            { k: "1 form", v: "Basic personal information" },
            { k: "Multiple", v: "Programs checked at once" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-[#e6e4dd] bg-white px-5 py-4"
            >
              <div className="text-xl font-bold text-[#0d2c54]">{s.k}</div>
              <div className="text-sm text-[#5a5a5a]">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-[#e6e4dd] bg-white py-14">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-2xl font-bold text-[#0d2c54] sm:text-3xl">
            How it works
          </h2>
          <p className="mt-2 text-[#5a5a5a]">
            A simple, three-step process designed to respect your time.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                n: "1",
                t: "Answer a few basic questions",
                d: "Household size, location, and a few details about your situation. Nothing complicated.",
              },
              {
                n: "2",
                t: "We match you to programs",
                d: "Your responses are checked against available Family Assistance programs and benefits.",
              },
              {
                n: "3",
                t: "See what you may qualify for",
                d: "Get a clear list of programs you may be eligible for and how to take the next step.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="flex flex-col items-center rounded-2xl border border-[#e6e4dd] bg-[#fafaf7] p-6 text-center"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#1a5fb4] text-sm font-bold text-white">
                  {step.n}
                </div>
                <div className="text-base font-semibold text-[#0d2c54]">
                  {step.t}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-[#5a5a5a]">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex justify-center">
            <CtaButton>Start My Eligibility Check</CtaButton>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-4xl px-5 py-14 text-center">
        <h2 className="text-2xl font-bold text-[#0d2c54] sm:text-3xl">
          Why families are checking their eligibility
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-[#5a5a5a]">
          Many households qualify for assistance they never knew existed. A short
          check could uncover meaningful relief.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              t: "Save on monthly essentials",
              d: "Programs may help reduce what you spend on groceries, utilities, child care, and more.",
            },
            {
              t: "Discover lesser-known benefits",
              d: "Some of the most useful Family Assistance programs are also the least advertised.",
            },
            {
              t: "Built for simplicity",
              d: "No long applications, no jargon. Just a clear path to find out what you qualify for.",
            },
            {
              t: "All in one place",
              d: "Skip the back-and-forth across separate sites. Check several programs from one short form.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="flex flex-col items-center rounded-2xl border border-[#e6e4dd] bg-white p-6 text-center"
            >
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#e7f3ec] text-[#1f7a4a]">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.42 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-base font-semibold text-[#0d2c54]">{b.t}</div>
              <p className="mt-1 text-sm leading-relaxed text-[#5a5a5a]">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <CtaButton variant="secondary">Check Eligibility Now</CtaButton>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-[#e6e4dd] bg-white py-14">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl font-bold text-[#0d2c54] sm:text-3xl">
            What people are saying
          </h2>
          <p className="mt-2 text-[#5a5a5a]">
            Real reactions from families who took 60 seconds to find out.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-[#e6e4dd] bg-[#fafaf7] p-6"
              >
                <div className="mb-3 flex gap-0.5 text-[#e0a82e]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.05 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118L10.588 15.6a1 1 0 00-1.176 0L6.046 18.04c-.785.57-1.84-.196-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.062 9.4c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-[#2a2a2a]">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 border-t border-[#e6e4dd] pt-3">
                  <div className="text-sm font-semibold text-[#0d2c54]">{t.name}</div>
                  <div className="text-xs text-[#6a6a6a]">{t.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-3xl border border-[#1a5fb4]/15 bg-gradient-to-br from-[#eaf2fb] to-[#f7faff] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-[#0d2c54] sm:text-3xl">
            Find out in 60 seconds
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[#3a3a3a]">
            One short form is all it takes to see which Family Assistance programs you
            may qualify for. No long process. No runaround.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton>Check My Eligibility</CtaButton>
            <CtaButton variant="secondary">See Available Programs</CtaButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e6e4dd] bg-[#f1efe8] py-10">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-xs leading-relaxed text-[#5a5a5a]">
            <p className="font-semibold text-[#3a3a3a]">Disclaimer</p>
            <p className="mt-2">
              This website is a privately owned and operated resource. It is not
              affiliated with, endorsed by, or otherwise associated with any
              government agency, including but not limited to the U.S. federal
              government, any state government, or any local government office. We
              do not guarantee eligibility for, approval of, or enrollment in any
              government program or benefit. Information provided is for general
              informational purposes only and does not constitute legal, financial,
              or government assistance advice. Official program information is
              available, free of charge, from the relevant government agencies.
            </p>
            <p className="mt-4 text-[#7a7a7a]">
              © {new Date().getFullYear()} Family Assistance Eligibility Check. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
