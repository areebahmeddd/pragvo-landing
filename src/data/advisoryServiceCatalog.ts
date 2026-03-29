/** IB + HR offerings: Services section, navbar, Schedule Consultation — keep in sync with `Services.tsx`. */
export type AdvisoryServiceTab = "IB" | "HR";

export interface AdvisoryServiceOption {
  id: string;
  title: string;
}

export interface AdvisoryServiceGroup {
  category: string;
  tab: AdvisoryServiceTab;
  services: AdvisoryServiceOption[];
}

export const ADVISORY_SERVICE_GROUPS: AdvisoryServiceGroup[] = [
  {
    category: "Investment Banking",
    tab: "IB",
    services: [
      { id: "debt-capital-markets", title: "Debt Capital Markets" },
      { id: "equity-capital-markets", title: "Equity Capital Markets" },
      { id: "mergers-acquisitions", title: "Mergers & Acquisitions" },
    ],
  },
  {
    category: "HR Advisory",
    tab: "HR",
    services: [
      { id: "talent-acquisition", title: "Talent Acquisition" },
      { id: "talent-development", title: "Talent Development" },
      { id: "organization-design", title: "Organization Design" },
      {
        id: "hris-implementation-support",
        title: "HRIS Implementation Support",
      },
      { id: "performance-management", title: "Performance Management" },
      { id: "compensation-rewards", title: "Compensation & Rewards" },
      {
        id: "leadership-coaching-mentoring",
        title: "Leadership, Coaching & Mentoring",
      },
      { id: "culture-transformation", title: "Culture Transformation" },
      {
        id: "organizational-effectiveness",
        title: "Organizational Effectiveness",
      },
      {
        id: "corporate-events-leadership-offsites",
        title: "Corporate Events & Leadership Offsites",
      },
      {
        id: "corporate-gifting-employee-engagement",
        title: "Corporate Gifting & Employee Engagement Solutions",
      },
    ],
  },
];

export const allAdvisoryServiceOptions = (): (AdvisoryServiceOption & {
  tab: AdvisoryServiceTab;
})[] =>
  ADVISORY_SERVICE_GROUPS.flatMap((g) =>
    g.services.map((s) => ({ ...s, tab: g.tab })),
  );
