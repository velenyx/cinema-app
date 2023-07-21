import type { MaterialIconName } from '~/shared/types/IconType';

export interface Genre {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: MaterialIconName;
}
