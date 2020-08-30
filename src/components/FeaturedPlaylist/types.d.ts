export interface ImagesProps {
  url: string;
}

export interface ItemsProps {
  description: string;
  href: string;
  images: ImagesProps[];
  name: string;
  isVisible?: boolean;
}

export interface FeaturedPlaylistStateProps {
  message: string;
  playlists: {
    items: ItemsProps[];
  };
}
