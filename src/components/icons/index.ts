import IconAstro from "./IconAstro.astro";
import IconTailwind from "./IconTailwind.astro";
import IconReact from "./IconReact.astro";
import IconNode from "./IconNode.astro";
import IconExpress from "./IconExpress.astro";
import IconHtml from "./IconHtml.astro";
import IconCss from "./IconCss.astro";
import IconJavascript from "./IconJavascript.astro";
import IconDocker from "./IconDocker.astro";
import IconGit from "./IconGit.astro";
import IconFigma from "./IconFigma.astro";
import IconGithub from "./IconGithub.astro";
import IconDefault from "./IconDefault.astro";

const icons = {
  IconAstro,
  IconTailwind,
  IconReact,
  IconNode,
  IconExpress,
  IconHtml,
  IconCss,
  IconJavascript,
  IconDocker,
  IconGit,
  IconFigma,
  IconGithub,
  IconDefault,
} as const;

export default icons;
export type IconName = keyof typeof icons;
