import { Article } from "@/components/article/article";
import { BackLink } from "@/components/back_link/back_link";

export default function PrivacyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Article>
      <BackLink />
      {children}
    </Article>
  );
}
