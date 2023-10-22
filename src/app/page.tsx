export default function Home() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center">
      <div className="mx-12 flex max-w-[800px] flex-col gap-2">
        <div className="pb-4 text-5xl font-black">
          Hi, I&apos;m <span className="text-sky-400">Gabe Landau</span>
        </div>
        <div className="text-xl dark:text-slate-400">
          I&apos;m a front-end focused full-stack software engineer. Currently, I am building
          accessible, web-based experiences for Trust & Safety teams at{' '}
          <a href="https://www.indeed.com/" target="_blank" className="underline dark:text-sky-200">
            Indeed
          </a>
          .
        </div>
        <div className="text-xl dark:text-slate-400">
          I also provide web and IT consulting services through my company,{' '}
          <a
            href="https://www.landauwebs.com/"
            target="_blank"
            className="underline dark:text-sky-200"
          >
            Landau Webs
          </a>
          .
        </div>
      </div>
    </main>
  );
}
