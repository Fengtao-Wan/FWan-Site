import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SideNav: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "side-nav")}>
      
      <ul style={{ listStyle: "none", padding: 0, margin: "2rem 0 0 0" }}>
        


      </ul>
    </div>
  )
}

export default (() => SideNav) satisfies QuartzComponentConstructor