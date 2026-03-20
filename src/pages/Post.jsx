import { useParams } from 'react-router-dom'
import FirstPost from './first-post'
import LanguageSwitcher from './language-switcher'

const posts = {
  'first-post': <FirstPost />,
  'language-switcher': <LanguageSwitcher />,
}

function Post() {
    const { slug } = useParams()
    console.log('slug:', slug)
    console.log('found:', posts[slug])
    return posts[slug] || <div>Post not found: {slug}</div>
  }

export default Post