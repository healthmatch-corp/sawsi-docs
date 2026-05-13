import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import { gitConfig } from '@/lib/shared';

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);
  const t = dict.home;

  return (
    <main className="flex flex-col flex-1">
      <section className="px-6 pt-20 pb-16 max-w-5xl mx-auto w-full">
        <span className="inline-flex items-center rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs font-medium text-fd-muted-foreground">
          {t.badge}
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          {t.title}
        </h1>
        <p className="mt-6 text-lg text-fd-muted-foreground max-w-3xl">
          {t.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/${lang}/docs`}
            className="inline-flex items-center rounded-md bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground hover:opacity-90 transition"
          >
            {t.ctaPrimary}
          </Link>
          <a
            href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
            className="inline-flex items-center rounded-md border border-fd-border px-4 py-2 text-sm font-medium hover:bg-fd-accent transition"
            target="_blank"
            rel="noreferrer"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-fd-border max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-semibold mb-8">{t.featuresTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(
            [
              'handlers',
              'dynamo',
              'services',
              'triggers',
              'deploy',
              'conventions',
            ] as const
          ).map((key) => {
            const f = t.features[key];
            return (
              <div
                key={key}
                className="rounded-lg border border-fd-border bg-fd-card p-5"
              >
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-fd-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-16 border-t border-fd-border max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-semibold mb-8">{t.exploreTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href={`/${lang}/docs/introduction/getting-started`}
            className="rounded-lg border border-fd-border bg-fd-card p-5 hover:bg-fd-accent transition"
          >
            <h3 className="font-semibold mb-2">{t.explore.newcomer.title}</h3>
            <p className="text-sm text-fd-muted-foreground">
              {t.explore.newcomer.desc}
            </p>
          </Link>
          <Link
            href={`/${lang}/docs/practice/cookbook`}
            className="rounded-lg border border-fd-border bg-fd-card p-5 hover:bg-fd-accent transition"
          >
            <h3 className="font-semibold mb-2">{t.explore.building.title}</h3>
            <p className="text-sm text-fd-muted-foreground">
              {t.explore.building.desc}
            </p>
          </Link>
          <Link
            href={`/${lang}/docs/deployment/deployment`}
            className="rounded-lg border border-fd-border bg-fd-card p-5 hover:bg-fd-accent transition"
          >
            <h3 className="font-semibold mb-2">{t.explore.deploying.title}</h3>
            <p className="text-sm text-fd-muted-foreground">
              {t.explore.deploying.desc}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
