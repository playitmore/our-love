/// <reference types="vite/client" />

import { content } from './content';

export type AlbumPhoto = {
  src: string;
  alt: string;
};

export type Album = {
  title: string;
  photos: AlbumPhoto[];
};

// Vite finds every image placed in a subfolder of src/images/albums.
// The subfolder name becomes the album title automatically.
const addedPhotoFiles = import.meta.glob(
  './images/albums/**/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
) as Record<string, string>;

function makeReadableTitle(value: string) {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function makePhotoDescription(filePath: string) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 1] ?? 'Our memory';
  return makeReadableTitle(fileName.replace(/\.[^.]+$/, ''));
}

const addedAlbums = new Map<string, AlbumPhoto[]>();

Object.entries(addedPhotoFiles)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .forEach(([filePath, src]) => {
    const folderName = filePath.replace('./images/albums/', '').split('/')[0];
    const photos = addedAlbums.get(folderName) ?? [];

    photos.push({
      src,
      alt: makePhotoDescription(filePath),
    });

    addedAlbums.set(folderName, photos);
  });

// The current website photos become the first album.
// Any folders you add later appear underneath it automatically.
export const albums: Album[] = [
  {
    title: content.featuredAlbumTitle,
    photos: content.photos,
  },
  ...Array.from(addedAlbums, ([folderName, photos]) => ({
    title: makeReadableTitle(folderName),
    photos,
  })),
];
