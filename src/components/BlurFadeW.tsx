import { BlurFade } from "@/components/ui/blur-fade";
export default function BlurFadeTW({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <BlurFade delay={delay} inView>
      {children}
    </BlurFade>
  );
}
