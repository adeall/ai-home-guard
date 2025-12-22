import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type PageScaffoldProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  metaDescription?: string;
  children: ReactNode;
};

function upsertMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function PageScaffold({
  title,
  subtitle,
  icon,
  metaDescription,
  children,
}: PageScaffoldProps) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${title} | SafeHome`;
    upsertMeta(
      "description",
      metaDescription ?? `${title} SafeHome — kelola fitur keamanan rumah berbasis AI.`
    );
    upsertCanonical(window.location.href);
  }, [title, metaDescription]);

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} aria-label="Kembali">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            {icon ? (
              <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center">
                {icon}
              </div>
            ) : null}
            <div>
              <h1 className="font-bold text-lg">{title}</h1>
              {subtitle ? (
                <p className="text-xs text-muted-foreground">{subtitle}</p>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">{children}</main>
    </div>
  );
}
