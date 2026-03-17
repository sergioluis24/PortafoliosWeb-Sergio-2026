import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Component({ text }: { text?: string }) {
  return (
    <TypingAnimation
      words={text ? [text] : []}
      typeSpeed={55}
      loop={false}
      startOnView
      cursorStyle="underscore"
    />
  );
}
