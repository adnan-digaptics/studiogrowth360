import { redirect } from "next/navigation";

export default function LegacyServiceRoute() {
  redirect("/services");
}
