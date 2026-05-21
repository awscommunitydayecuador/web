const ROW_A = [
  'Builders',
  'IA Generativa',
  'Serverless',
  'AWS Heroes',
  'Hands-on Labs',
  'Community Builders',
  'Cloud Architecture',
  'DevOps',
  'Datos & Analytics',
  'Seguridad Cloud',
]

const ROW_B = [
  'Bedrock',
  'SageMaker',
  'Lambda',
  'CDK',
  'AppSync',
  'EKS',
  'Step Functions',
  'Aurora',
  'Q Developer',
  'Cognito',
  'CloudFront',
  'DynamoDB',
]

export default function Marquee() {
  return (
    <section
      aria-hidden
      className="relative border-y border-white/10 bg-brand-night/70 backdrop-blur-md py-6 sm:py-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid opacity-[0.2] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-magenta/40 to-transparent" />

      {/* Row 1 */}
      <div className="relative mask-fade-x">
        <div className="marquee whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 sm:gap-10 pr-10">
              {ROW_A.map((item, i) => (
                <div key={`${dup}-a-${i}`} className="flex items-center gap-8 sm:gap-10">
                  <span className="font-display text-xl sm:text-3xl font-semibold tracking-tight text-ink-0">
                    {item}
                  </span>
                  <span className="text-brand-cyan text-lg sm:text-xl">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="relative mask-fade-x mt-3 opacity-60">
        <div className="marquee-rev whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 pr-8">
              {ROW_B.map((item, i) => (
                <div key={`${dup}-b-${i}`} className="flex items-center gap-8">
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-ink-400">
                    {item}
                  </span>
                  <span className="text-brand-magenta text-base">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
