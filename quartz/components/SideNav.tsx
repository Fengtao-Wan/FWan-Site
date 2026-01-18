import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SideNav: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "side-nav")}>
      
      <ul style={{ listStyle: "none", padding: 0, margin: "2rem 0 0 0" }}>
        
        {/* LINK 1: Research */}
        <li style={{ marginBottom: "0.5rem" }}>
          {/* REMOVED "/content" and kept lowercase */}
          <a href="/FWan-Site/research" style={{ color: "var(--secondary)", textDecoration: "none" }}>
            Research
          </a>
        </li>

        {/* LINK 2: CV */}
        <li style={{ marginBottom: "0.5rem" }}>
          {/* REMOVED "/content" and changed "CV" to "cv" */}
          <a href="/FWan-Site/cv" style={{ color: "var(--secondary)", textDecoration: "none" }}>
            CV
          </a>
        </li>

      </ul>
    </div>
  )
}

export default (() => SideNav) satisfies QuartzComponentConstructor