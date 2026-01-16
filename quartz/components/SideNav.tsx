import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SideNav: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "side-nav")}>
      {/* "Menu" Title Removed */}
      
      <ul style={{ listStyle: "none", padding: 0, margin: "2rem 0 0 0" }}>
        
        {/* LINK 1: Research */}
        <li style={{ marginBottom: "0.5rem" }}>
          <a href="/Research" style={{ color: "var(--secondary)", textDecoration: "none" }}>
            Research
          </a>
        </li>

        {/* LINK 2: Archives */}
        <li style={{ marginBottom: "0.5rem" }}>
          <a href="/Archives" style={{ color: "var(--secondary)", textDecoration: "none" }}>
            Resources
          </a>
        </li>

        {/* LINK 3: Miscs */}
        <li style={{ marginBottom: "0.5rem" }}>
          <a href="/Misc" style={{ color: "var(--secondary)", textDecoration: "none" }}>
            Misc
          </a>
        </li>

      </ul>
    </div>
  )
}

export default (() => SideNav) satisfies QuartzComponentConstructor