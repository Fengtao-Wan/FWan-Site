import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang" 

const ProfileImage: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "profile-image")}>
      {/* Use the Raw URL here. Make sure 'Me.jpg' matches the file exactly! */}
      <img src="https://raw.githubusercontent.com/Fengtao-Wan/FWan-Site/v4/content/Me.jpg" alt="My Profile Photo" />
    </div>
  )
}

ProfileImage.css = `
.profile-image img {
  width: 66%;
  border-radius: 8px; /* Rounded corners */
  margin-bottom: 0;
}
`

export default (() => ProfileImage) satisfies QuartzComponentConstructor