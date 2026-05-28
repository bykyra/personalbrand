import { useParams } from 'react-router-dom'
import FirstPost from './first-post'
import LanguageSwitcher from './language-switcher'
import BuildingThisSite from './building-this-site'
import SteppingIn from './stepping-in'
import DesignUnderPressure from './design-under-pressure'

const posts = {
  'first-post': <FirstPost />,
  'language-switcher': <LanguageSwitcher />,
  'building-this-site': <BuildingThisSite />,
  'stepping-in': <SteppingIn />,
  'design-under-pressure': <DesignUnderPressure />,
}

function Post() {
    const { slug } = useParams()
    console.log('slug:', slug)
    console.log('found:', posts[slug])
    return posts[slug] || <div>Post not found: {slug}</div>
  }

export default Post