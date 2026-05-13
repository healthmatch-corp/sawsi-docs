import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";
import { appName, gitConfig } from "./shared";
import Image from "next/image";

export const i18nUI = defineI18nUI(i18n, {
  en: {
    displayName: "English",
  },
  ko: {
    displayName: "한국어",
    search: "문서 검색",
    toc: "목차",
    chooseTheme: "테마 선택",
    chooseLanguage: "언어 선택",
    nextPage: "다음",
    previousPage: "이전",
    lastUpdate: "최종 수정",
    editOnGithub: "GitHub에서 편집",
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
    <>
      <Image
        src="/logo-glyph-light.svg"
        width={171}
        height={50}
        alt="sawsi logo"
        className="dark:hidden aspect-171/50 w-[78px]"
      />
      <Image
        src="/logo-glyph-dark.svg"
        width={171}
        height={50}
        alt="sawsi logo"
        className="hidden dark:inline-flex aspect-171/50 w-[78px]"
      />
    </>
  );
}
