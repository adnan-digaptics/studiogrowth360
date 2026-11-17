import { redirect } from "next/navigation";

type Props = { params: Promise<{ industrySlug: string }> };

export default async function IndustryAliasRoute({ params }: Props) {
  const { industrySlug } = await params;
  redirect(`/industries-we-serve/${industrySlug}`);
}
