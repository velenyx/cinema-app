import * as MaterialIcons from 'react-icons/md';

import type { MaterialIconName } from '~/shared/types/IconType';

export interface MaterialIconProps {
  name: MaterialIconName;
  className: string;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({ name, className }) => {
  const IconComponent = MaterialIcons[name];

  return (
    <IconComponent className={className} /> || (
      <MaterialIcons.MdDragIndicator className={className} />
    )
  );
};
