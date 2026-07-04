import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { committees } from "@/lib/committees";
import CommitteeDetail from "@/components/CommitteeDetail";
import Committees from "@/components/Committees";

export function generateStaticParams() {
  return committees.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const committee = committees.find((c) => c.slug === slug);
  if (!committee) return { title: "Committee" };
  return {
    title: committee.name,
    description: `${committee.intro} Apply to the ${committee.name} at Babcock University Computer Club.`,
  };
}

export default async function CommitteePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const committee = committees.find((c) => c.slug === slug);
  if (!committee) notFound();

  return (
    <main className="flex flex-1 flex-col">
      <CommitteeDetail committee={committee} />
      <Committees />
    </main>
  );
}
