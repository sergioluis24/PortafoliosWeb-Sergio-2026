import { AuroraText } from "@/components/ui/aurora-text";
import { Children } from "react";
export default function AuroraWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuroraText colors={["#d90429", "#FB4B68", "#A0031D", "#FD9BAB"]}>
      {children}
    </AuroraText>
  );
}
