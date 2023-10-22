import {
  CommandLineIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

type Icon = 'computer' | 'code';

interface IconButtonProps {
  title: string;
  link: string;
  icon: Icon;
}

function renderIcon(icon: Icon) {
  if (icon === 'computer') {
    return <ComputerDesktopIcon className="h-4 w-4" />;
  } else if (icon === 'code') {
    return <CommandLineIcon className="h-4 w-4" />;
  } else {
    throw new Error('Icon code not found.');
  }
}

export default function IconButton({ title, link, icon }: IconButtonProps) {
  return (
    <a href={link} target="_blank">
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md border px-3 py-2 text-sm font-semibold shadow-sm dark:border-slate-800 dark:text-slate-50 dark:hover:bg-slate-800"
      >
        {renderIcon(icon)}
        {title}
      </button>
    </a>
  );
}
