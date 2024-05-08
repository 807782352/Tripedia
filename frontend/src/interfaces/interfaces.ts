interface Slide {
  label: string;
  imgPath: string;
}

interface CarouselProps {
  slides: Slide[];
  height?: number | string;
  buttons?: boolean;
  thumbnail?: boolean;
}

interface HotSpotTag {
  name: string;
  imgPath: string;
}

interface HotSpotProps {
  hotSpot: HotSpotTag;
}

interface Post {
  title: string;
  content: string;
  location: string;
  author: string;
  date: string;
  views: string;
  likes: string;
  imgPath: string;
}

interface PostProps {
  post: Post;
}

interface Spot {
  title: string;
  imgPath: string;
  brief: string;
}

interface SpotProps {
  spot: Spot;
}

interface ThemeTag {
  title: string;
  imgPath: string;
}

interface ThemeTagsProps {
  themeTag: ThemeTag;
}

interface RegionRowProps {
  country?: string;
  province?: string;
  regions: string[];
}
