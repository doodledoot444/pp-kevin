/**
 * Section-level skeleton layouts.
 * Each export mirrors the exact dimensions and spacing of its real component
 * so no layout shift occurs when content arrives.
 */

import { Skeleton } from "@/components/ui/skeleton";

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export function HeroSkeleton() {
  return (
    <div className="text-center" aria-hidden="true">
      <Skeleton className="h-14 sm:h-16 w-5/6 mx-auto mb-3" />
      <Skeleton className="h-14 sm:h-16 w-4/6 mx-auto mb-6" />
      <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Skeleton className="h-12 w-36 rounded-md" />
        <Skeleton className="h-12 w-36 rounded-md" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// TechStack
// ---------------------------------------------------------------------------
const TECH_BADGE_WIDTHS = [
  "w-20", "w-24", "w-16", "w-20", "w-28",
  "w-24", "w-20", "w-16", "w-24",
];

export function TechStackSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="text-center mb-12">
        <Skeleton className="h-9 w-40 mx-auto mb-4" />
        <Skeleton className="h-4 w-80 max-w-full mx-auto" />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {TECH_BADGE_WIDTHS.map((w, i) => (
          <Skeleton key={i} className={`h-10 rounded-full ${w}`} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ProjectCard  (also used inside FeaturedProjectsSkeleton)
// ---------------------------------------------------------------------------
const TAG_WIDTHS = ["w-14", "w-12", "w-16", "w-10"];

export function ProjectCardSkeleton() {
  return (
    <div className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden">
      {/* image */}
      <Skeleton className="w-full aspect-video rounded-none" />
      {/* content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div className="mb-4">
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-3 w-full mb-1" />
          <Skeleton className="h-3 w-5/6" />
        </div>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {TAG_WIDTHS.map((w, i) => (
            <Skeleton key={i} className={`h-5 ${w}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// FeaturedProjects
// ---------------------------------------------------------------------------
export function FeaturedProjectsSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="mb-12 text-center">
        <Skeleton className="h-9 w-72 mx-auto mb-4" />
        <Skeleton className="h-5 w-96 max-w-full mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AboutPreview
// ---------------------------------------------------------------------------
const ABOUT_LIST_WIDTHS = ["w-3/4", "w-full", "w-4/5", "w-2/3"];

export function AboutPreviewSkeleton() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      aria-hidden="true"
    >
      {/* image column */}
      <Skeleton className="aspect-square rounded-lg w-full" />
      {/* text column */}
      <div>
        <Skeleton className="h-8 w-40 mb-6" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-4/6 mb-6" />
        <ul className="space-y-2">
          {ABOUT_LIST_WIDTHS.map((w, i) => (
            <li key={i}>
              <Skeleton className={`h-4 ${w}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AboutSection
// ---------------------------------------------------------------------------
export function AboutSectionSkeleton() {
  return (
    <div aria-hidden="true">
      {/* header */}
      <div className="mb-16 text-center lg:text-left">
        <Skeleton className="h-12 w-32 mb-4 mx-auto lg:mx-0" />
        <Skeleton className="h-5 w-96 max-w-full mx-auto lg:mx-0" />
      </div>

      {/* two-col grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
        {/* visual panel */}
        <Skeleton className="w-full h-72 sm:h-96 rounded-2xl" />
        {/* content */}
        <div className="flex flex-col">
          <div className="mb-8">
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-4/5 mb-2" />
            <Skeleton className="h-4 w-3/5" />
          </div>
          <div className="mb-10">
            <Skeleton className="h-3 w-24 mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* specialization section */}
      <div className="mt-20 pt-16 border-t border-border/50">
        <Skeleton className="h-3 w-28 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-border/50 bg-muted/10 p-6">
              <div className="flex items-start gap-4 mb-3">
                <Skeleton className="w-9 h-9 rounded-lg flex-shrink-0" />
                <Skeleton className="h-5 w-36 flex-1" />
              </div>
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export function SkillsSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="text-center mb-12">
        <Skeleton className="h-9 w-64 mx-auto mb-3" />
        <Skeleton className="h-4 w-96 max-w-full mx-auto" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-5">
            <Skeleton className="h-5 w-28 mb-4" />
            <div className="grid gap-3">
              {Array.from({ length: 4 }).map((_, j) => (
                <div
                  key={j}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg border border-border/50"
                >
                  <Skeleton className="w-7 h-7 rounded-md flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <Skeleton className="h-3 w-20 mb-1" />
                    <Skeleton className="h-2 w-14" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ContactCTA
// ---------------------------------------------------------------------------
export function ContactSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
      {/* header */}
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-40 mx-auto mb-4" />
        <Skeleton className="h-5 w-80 max-w-full mx-auto" />
      </div>
      <div className="max-w-2xl mx-auto">
        {/* email card */}
        <div className="mb-12 bg-muted/10 border border-border/50 rounded-2xl p-8 text-center">
          <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
          <Skeleton className="h-6 w-28 mx-auto mb-2" />
          <Skeleton className="h-4 w-44 mx-auto mb-4" />
          <Skeleton className="h-12 rounded-lg w-full mb-6" />
          <Skeleton className="h-12 w-48 rounded-lg mx-auto" />
        </div>
        {/* social links */}
        <div className="text-center">
          <Skeleton className="h-5 w-40 mx-auto mb-6" />
          <div className="flex justify-center gap-6">
            <Skeleton className="h-20 w-24 rounded-xl" />
            <Skeleton className="h-20 w-24 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export function FooterSkeleton() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left"
      aria-hidden="true"
    >
      <div>
        <Skeleton className="h-6 w-44 mb-2 mx-auto md:mx-0" />
        <Skeleton className="h-4 w-64 max-w-full mx-auto md:mx-0" />
      </div>
      <div>
        <Skeleton className="h-4 w-20 mb-3 mx-auto md:mx-0" />
        <div className="space-y-2">
          {["w-16", "w-20", "w-16"].map((w, i) => (
            <Skeleton key={i} className={`h-3 ${w} mx-auto md:mx-0`} />
          ))}
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-16 mb-3 mx-auto md:mx-0" />
        <div className="flex justify-center md:justify-start gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="w-11 h-11 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
