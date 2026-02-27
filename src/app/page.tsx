import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-3xl w-full">
        {/* Header Section */}
        <div className="flex flex-col gap-2 w-full border-b border-border pb-6">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            Espresso Dark Theme
          </h1>
          <p className="text-muted-foreground font-mono text-sm leading-6">
            $ preview --theme espresso --engine nextjs
          </p>
        </div>

        {/* Content Section mimicking a terminal/tool card */}
        <div className="w-full bg-card rounded-xl border border-border p-6 shadow-xl flex flex-col gap-6">
          <h2 className="text-xl font-medium text-foreground">Design System Preview</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Swatch 1 */}
            <div className="flex bg-muted p-4 rounded-lg border border-border items-center justify-between">
              <span className="text-muted-foreground text-sm font-medium">Background</span>
              <div className="w-6 h-6 rounded-full bg-background border border-border shadow-inner" />
            </div>

            {/* Swatch 2 */}
            <div className="flex bg-muted p-4 rounded-lg border border-border items-center justify-between">
              <span className="text-muted-foreground text-sm font-medium">Card Surface</span>
              <div className="w-6 h-6 rounded-full bg-card border border-border shadow-inner" />
            </div>

            {/* Swatch 3 */}
            <div className="flex bg-muted p-4 rounded-lg border border-border items-center justify-between">
              <span className="text-muted-foreground text-sm font-medium">Text Primary</span>
              <div className="w-6 h-6 rounded-full bg-foreground border border-black/20 shadow-inner" />
            </div>

            {/* Swatch 4 */}
            <div className="flex bg-muted p-4 rounded-lg border border-border items-center justify-between">
              <span className="text-muted-foreground text-sm font-medium">Accent Amber</span>
              <div className="w-6 h-6 rounded-full bg-accent border border-black/20 shadow-inner" />
            </div>
          </div>

          <p className="text-card-foreground leading-relexed">
            This module represents our premium aesthetic foundation. The dark canvas minimizes eye strain while the 
            amber accents draw attention to interactive elements. The contrast ratios are designed to feel like a 
            comfortable workspace.
          </p>

          <div className="pt-4 flex gap-4">
            <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-md font-medium text-sm transition-opacity hover:opacity-90 shadow-sm">
              Primary Action
            </button>
            <button className="bg-muted text-foreground border border-border px-6 py-2.5 rounded-md font-medium text-sm transition-colors hover:bg-border cursor-pointer">
              Secondary Button
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
