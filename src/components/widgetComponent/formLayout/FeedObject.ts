import bugImageUrl from '../../../assets/img/bug.svg'
import ideaImageUrl from '../../../assets/img/idea.svg';
import thoughtImageUrl from '../../../assets/img/thought.svg';

const feedBackTypes = {
    BUG: {
        title: 'Issue',
        image: {
            source: bugImageUrl,
            alt: 'Insect Image'
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'lamp Image'
        }
    },
    OTHER: {
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt: 'Thinking Image'
        }
    }
}

export default feedBackTypes;