import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SideNav: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "side-nav")}>
      
      <ul style={{ listStyle: "none", padding: 0, margin: "2rem 0 0 0" }}>
        
        {/* LINK 1: Research 
            Fix: Add "/FWan-Site" prefix and use lowercase "/research" 
        */}
        <li style={{ marginBottom: "0.5rem" }}>
          <a href="/FWan-Site/content/research" style={{ color: "var(--secondary)", textDecoration: "none" }}>
            Research
          </a>
        </li>

        {/* LINK 2: CV 
            Fix: Add "/FWan-Site" prefix and use lowercase "/cv" 
        */}
        <li style={{ marginBottom: "0.5rem" }}>
          <a href="/FWan-Site/content/CV" style={{ color: "var(--secondary)", textDecoration: "none" }}>
            CV
          </a>
        </li>

      </ul>
    </div>
  )
}

export default (() => SideNav) satisfies QuartzComponentConstructor