import heroPhoto from './images/hero.jpg';
import memoryOne from './images/memory-1.jpg';
import memoryTwo from './images/memory-2.jpg';
import memoryThree from './images/memory-3.jpg';

// Image imports can be a URL string or an object containing the URL.
// This small helper works with both forms.
function imageUrl(image: string | { src: string }) {
  return typeof image === 'string' ? image : image.src;
}

// EDIT THIS OBJECT to personalize the whole website.
export const content = {
  yourName: 'Alex',
  partnerName: 'Mia',
  togetherSince: 'September 21, 2023',
  headline: 'Every day is better with you in it.',
  introduction:
    'This little website holds a few of my favorite moments, and one very important promise: I will keep choosing you.',
  letter:
    'Thank you for making ordinary days feel special. You are my calm, my favorite laugh, and the person I want beside me for every adventure still ahead.',
  letterClosing:
    'Whatever comes next, I hope we meet it the way we have met everything else — side by side.',
  colors: {
    wine: '#6f2f3d',
    cream: '#fff8ef',
    blush: '#efd5d0',
    ink: '#2d2022',
  },
  photos: [
    { src: imageUrl(heroPhoto), alt: 'A couple sharing a quiet moment' },
    { src: imageUrl(memoryOne), alt: 'A couple holding hands' },
    { src: imageUrl(memoryTwo), alt: 'A happy couple outdoors' },
    { src: imageUrl(memoryThree), alt: 'A couple spending time together' },
  ],
  photoCaptions: ['Us, always', 'The best kind of adventure', 'My favorite place'],
  memories: [
    { year: '2023', title: 'Where our story began' },
    { year: '2024', title: 'Our first big adventure' },
    { year: 'Today', title: 'Still my favorite person' },
  ],
};
