import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';
import { appName, gitConfig } from './shared';

export const i18nUI = defineI18nUI(i18n, {
  en: {
    displayName: 'English',
  },
  ko: {
    displayName: '한국어',
    search: '문서 검색',
    toc: '목차',
    chooseTheme: '테마 선택',
    chooseLanguage: '언어 선택',
    nextPage: '다음',
    previousPage: '이전',
    lastUpdate: '최종 수정',
    editOnGithub: 'GitHub에서 편집',
  },
});

export function baseOptions(lang: string): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: `/${lang}`,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    i18n: true,
  };
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="size-6 rounded bg-gradient-to-br from-fd-primary to-fd-primary/40" />
      <span className="font-semibold tracking-tight">{appName}</span>
    </div>
  );
}
