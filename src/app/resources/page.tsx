import { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import ResourceList from "@/components/resources/ResourceList";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Cheat Sheets & Resources",
  description:
    "Kumpulan cheat sheet, playbook incident response, dan referensi perintah teknis Cyber Security & Infrastructure.",
};

export default function ResourcesPage() {
  const resources = getAllPosts("resources");

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <SectionTitle title="CHEAT SHEETS & RESOURCES" />
      <p className="mb-8 max-w-2xl text-sm text-cyber-muted sm:text-base">
        Dokumentasi referensi cepat, *command cheat sheets*, dan *playbook*
        teknis yang disusun dari folder <code>content/resources/</code> untuk
        kebutuhan operasional keamanan &amp; infrastruktur.
      </p>

      <ResourceList posts={resources} />
    </div>
  );
}
