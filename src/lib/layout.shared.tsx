import Link from 'next/link';
import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const gitConfig = {
  user: 'CookieTeam-CA',
  repo: 'ca-docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Link href="https://cookieattack.de" className="flex items-center gap-2">
          <Image
            src="https://ik.imagekit.io/g5opwvdei/logo-modified.heic"
            alt="CookieTeam Logo"
            width={24}
            height={24}
          />
          CookieTeam
        </Link>
      ),
      url: 'https://cookieattack.de',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}