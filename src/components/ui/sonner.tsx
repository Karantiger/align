import { Toaster as SonnerToaster, type ToasterProps, toast as sonnerToast } from "sonner";

export type { ToasterProps } from "sonner";

function Toaster(props: ToasterProps) {
  return (
    <SonnerToaster
      theme="system"
      richColors
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            "group pointer-events-auto flex w-full max-w-sm items-center justify-between gap-3 rounded-xl border bg-card p-3 text-sm text-foreground shadow-lg shadow-black/10",
          title: "font-semibold",
          description: "text-xs text-muted-foreground",
          actionButton:
            "inline-flex h-8 shrink-0 items-center justify-center rounded-full border px-3 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
          cancelButton:
            "inline-flex h-8 shrink-0 items-center justify-center rounded-full border px-3 text-xs font-medium text-muted-foreground hover:bg-muted",
        },
      }}
      {...props}
    />
  );
}

export { Toaster, sonnerToast as toast };
